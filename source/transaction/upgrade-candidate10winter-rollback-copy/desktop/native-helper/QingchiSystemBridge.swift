// Original minimal macOS bridge. No typed text or key codes are stored/emitted.
// Option monitoring and AXFullScreen are enabled only if already trusted.
import AppKit
import ApplicationServices
import Foundation

func emit(_ value: [String: Any]) {
    if let bytes = try? JSONSerialization.data(withJSONObject: value, options: [.sortedKeys]) {
        FileHandle.standardOutput.write(bytes); FileHandle.standardOutput.write(Data([10]))
    }
}
let args = CommandLine.arguments
let mode = args.count > 1 ? args[1] : "--permission"
if mode == "--permission" {
    emit(["accessibility": AXIsProcessTrusted()]); exit(0)
}
if mode == "--frontmost" {
    emit(["pid": NSWorkspace.shared.frontmostApplication?.processIdentifier ?? 0, "bundle": NSWorkspace.shared.frontmostApplication?.bundleIdentifier ?? ""]); exit(0)
}
if mode == "--activate" {
    guard args.count == 3, let pid = Int32(args[2]), pid > 0,
          let app = NSRunningApplication(processIdentifier: pid) else { emit(["activated": false]); exit(1) }
    emit(["activated": app.activate(options: [])]); exit(0)
}
if mode != "--watch" { emit(["error": "unknown mode"]); exit(2) }
let owner = args.count > 2 ? Int32(args[2]) ?? 0 : 0
let app = NSApplication.shared
app.setActivationPolicy(.prohibited)
var trusted = AXIsProcessTrusted(), optionPressed = false, shown = false, token = 0
var lastScreen = "", globalMonitor: Any?, localMonitor: Any?
func keyEvent(_ event: NSEvent) {
    if event.type == .keyDown { token += 1; if shown { shown = false; emit(["event": "option-up"]) }; return }
    let f = event.modifierFlags.intersection(.deviceIndependentFlagsMask)
    let single = f.contains(.option) && !f.contains(.command) && !f.contains(.control) && !f.contains(.shift)
    if single && !optionPressed {
        optionPressed = true; token += 1; let own = token
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.18) {
            if optionPressed && token == own { shown = true; emit(["event": "option-down"]) }
        }
    } else if !single {
        optionPressed = false; token += 1
        if shown { shown = false; emit(["event": "option-up"]) }
    }
}
func installMonitor() {
    if !trusted || globalMonitor != nil { return }
    globalMonitor = NSEvent.addGlobalMonitorForEvents(matching: [.flagsChanged, .keyDown], handler: keyEvent)
    localMonitor = NSEvent.addLocalMonitorForEvents(matching: [.flagsChanged, .keyDown]) { e in keyEvent(e); return e }
    emit(["event": "monitor", "installed": globalMonitor != nil, "accessibility": trusted])
}
func poll() {
    let next = AXIsProcessTrusted()
    if next != trusted { trusted = next; emit(["event": "permission", "accessibility": trusted]); if !trusted { if let m = globalMonitor { NSEvent.removeMonitor(m) }; if let m = localMonitor { NSEvent.removeMonitor(m) }; globalMonitor = nil; localMonitor = nil } }
    installMonitor()
    guard let front = NSWorkspace.shared.frontmostApplication else { return }
    var fullscreen: Any = NSNull(), available = false
    if front.processIdentifier == owner { fullscreen = false; available = trusted }
    else if trusted {
        let target = AXUIElementCreateApplication(front.processIdentifier)
        var value: CFTypeRef?
        if AXUIElementCopyAttributeValue(target, kAXFocusedWindowAttribute as CFString, &value) == .success, let value = value,
           CFGetTypeID(value) == AXUIElementGetTypeID() {
            let window = unsafeBitCast(value, to: AXUIElement.self)
            var raw: CFTypeRef?
            if AXUIElementCopyAttributeValue(window, "AXFullScreen" as CFString, &raw) == .success, let raw = raw,
               CFGetTypeID(raw) == CFBooleanGetTypeID() {
                fullscreen = (raw as! Bool); available = true
            }
        }
    }
    let sig = "\(front.processIdentifier):\(available):\(fullscreen):\(trusted)"
    if sig != lastScreen { lastScreen = sig; emit(["event": "frontmost", "pid": front.processIdentifier, "fullscreen": fullscreen, "available": available, "accessibility": trusted]) }
}
emit(["event": "permission", "accessibility": trusted]); poll()
let timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { _ in poll() }
RunLoop.main.add(timer, forMode: .common)
app.run()
