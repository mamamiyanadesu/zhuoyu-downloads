@echo off
cd /d "%~dp0"
if not exist node_modules\.bin\electron.cmd (
  echo Run npm ci in this folder first. Node.js is required.
  pause
  exit /b 1
)
call node_modules\.bin\electron.cmd .
