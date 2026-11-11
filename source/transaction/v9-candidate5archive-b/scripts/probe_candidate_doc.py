from pathlib import Path
import sys,json,re
s=Path(sys.argv[1]).read_text();print(json.dumps({'title':s.splitlines()[0],'version':re.search(r'0\.9\.0-beta\.\d+',s).group(0),'states_shared_beta_profile':'共用此候选目录' in s,'states_global_unverified':'不等于已验证从其他应用全局呼出' in s,'stale_ellipse_gap':'椭圆荷塘边界' in s},ensure_ascii=False))
