(function () {
  /* ── remove if already exists ── */
  ['clei-root','clei-fullscreen-loader','clei-global-style'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });

  /* ════════════════════════════════════════
     GLOBAL STYLES
  ════════════════════════════════════════ */
  const GST = document.createElement('style');
  GST.id = 'clei-global-style';
  GST.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600&display=swap');

    /* ── FULLSCREEN LOADER ── */
    #clei-fullscreen-loader {
      position: fixed; inset: 0; z-index: 2147483646;
      background: #03020a;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      font-family: 'Outfit', sans-serif;
      overflow: hidden;
      transition: opacity .8s ease, transform .8s ease;
    }
    #clei-fullscreen-loader.fade-out {
      opacity: 0; transform: scale(1.04); pointer-events: none;
    }

    .clei-fs-bg {
      position: absolute; inset: 0; overflow: hidden;
    }
    .clei-fs-orb {
      position: absolute; border-radius: 50%;
      filter: blur(80px); opacity: .18;
      animation: clei-orb-float 8s ease-in-out infinite;
    }
    .clei-fs-orb.o1 { width: 600px; height: 600px; background: #6c3eff; top: -200px; left: -150px; animation-delay: 0s; }
    .clei-fs-orb.o2 { width: 500px; height: 500px; background: #00c8ff; bottom: -180px; right: -100px; animation-delay: -3s; }
    .clei-fs-orb.o3 { width: 300px; height: 300px; background: #ff3aaa; top: 40%; left: 55%; animation-delay: -5s; }
    @keyframes clei-orb-float {
      0%,100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-30px) scale(1.06); }
    }

    .clei-fs-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(108,62,255,.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(108,62,255,.06) 1px, transparent 1px);
      background-size: 48px 48px;
    }

    .clei-fs-content {
      position: relative; z-index: 2;
      display: flex; flex-direction: column;
      align-items: center; gap: 0;
    }

    .clei-fs-logo-wrap {
      position: relative; margin-bottom: 36px;
      animation: clei-logo-in 1s cubic-bezier(.22,1,.36,1) both;
    }
    @keyframes clei-logo-in {
      from { opacity:0; transform: scale(.5) rotate(-15deg); }
      to { opacity:1; transform: scale(1) rotate(0deg); }
    }
    .clei-fs-logo-ring {
      position: absolute; inset: -12px;
      border-radius: 50%; border: 1px solid rgba(108,62,255,.3);
      animation: clei-ring-spin 4s linear infinite;
    }
    .clei-fs-logo-ring::after {
      content: '';
      position: absolute; top: -3px; left: 50%; transform: translateX(-50%);
      width: 6px; height: 6px; border-radius: 50%; background: #6c3eff;
    }
    @keyframes clei-ring-spin { to { transform: rotate(360deg); } }
    .clei-fs-logo-ring2 {
      position: absolute; inset: -24px;
      border-radius: 50%; border: 1px solid rgba(0,200,255,.15);
      animation: clei-ring-spin 8s linear infinite reverse;
    }
    .clei-fs-logo {
      width: 100px; height: 100px; border-radius: 28px;
      background: linear-gradient(135deg, #6c3eff 0%, #3a8fff 50%, #00c8ff 100%);
      display: flex; align-items: center; justify-content: center;
      font-size: 46px; font-weight: 900; color: #fff;
      letter-spacing: -2px;
      box-shadow: 0 0 60px rgba(108,62,255,.5), 0 0 120px rgba(108,62,255,.2);
    }

    .clei-fs-title {
      font-size: clamp(56px, 10vw, 88px);
      font-weight: 900; color: #fff; letter-spacing: -3px;
      line-height: 1; margin-bottom: 8px;
      background: linear-gradient(135deg, #fff 30%, #a080ff 70%, #00c8ff 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      animation: clei-title-in .9s .3s cubic-bezier(.22,1,.36,1) both;
    }
    @keyframes clei-title-in {
      from { opacity:0; transform: translateY(20px); }
      to { opacity:1; transform: none; }
    }

    .clei-fs-sub {
      font-size: 15px; color: rgba(255,255,255,.35); letter-spacing: 4px;
      text-transform: uppercase; font-weight: 400; margin-bottom: 52px;
      animation: clei-title-in .9s .5s cubic-bezier(.22,1,.36,1) both;
    }

    .clei-fs-bar-wrap {
      width: min(340px, 80vw);
      animation: clei-title-in .9s .7s cubic-bezier(.22,1,.36,1) both;
    }
    .clei-fs-bar-track {
      height: 3px; background: rgba(255,255,255,.08);
      border-radius: 99px; overflow: hidden; margin-bottom: 14px;
    }
    .clei-fs-bar-fill {
      height: 100%; width: 0;
      background: linear-gradient(90deg, #6c3eff, #3a8fff, #00c8ff);
      border-radius: 99px;
      transition: width .25s ease;
      box-shadow: 0 0 12px rgba(108,62,255,.8);
    }
    .clei-fs-bar-status {
      display: flex; justify-content: space-between; align-items: center;
    }
    .clei-fs-bar-text {
      font-size: 11px; color: rgba(255,255,255,.3);
      font-family: 'JetBrains Mono', monospace; letter-spacing: 1px;
    }
    .clei-fs-bar-pct {
      font-size: 11px; color: #6c3eff;
      font-family: 'JetBrains Mono', monospace; font-weight: 600;
    }

    .clei-fs-particles {
      position: absolute; inset: 0; pointer-events: none;
    }
    .clei-fs-p {
      position: absolute; border-radius: 50%;
      background: #6c3eff; opacity: 0;
      animation: clei-particle 3s ease-in-out infinite;
    }
    @keyframes clei-particle {
      0% { opacity:0; transform: translateY(0) scale(1); }
      30% { opacity:.7; }
      100% { opacity:0; transform: translateY(-120px) scale(0); }
    }

    .clei-fs-credit {
      position: absolute; bottom: 28px;
      font-size: 12px; color: rgba(255,255,255,.18);
      letter-spacing: 2px; font-family: 'JetBrains Mono', monospace;
      animation: clei-title-in .9s 1s both;
    }
    .clei-fs-credit span { color: rgba(108,62,255,.6); }

    /* ════════════════════════════════
       MAIN WINDOW
    ════════════════════════════════ */
    #clei-root {
      position: fixed; z-index: 2147483647;
      width: 460px; height: 640px;
      bottom: 28px; right: 28px;
      font-family: 'Outfit', sans-serif;
      user-select: none;
      display: none;
    }
    #clei-root.visible { display: block; }
    #clei-root.minimized { height: auto !important; min-height: unset !important; }
    #clei-root.minimized #clei-body { display: none !important; }
    #clei-root.minimized #clei-tabs { display: none !important; }
    #clei-root.minimized #clei-window { border-radius: 18px; }

    #clei-window {
      width: 100%; height: 100%;
      background: #07070f;
      border: 1px solid rgba(108,62,255,.25);
      border-radius: 22px;
      display: flex; flex-direction: column;
      overflow: hidden;
      box-shadow:
        0 0 0 1px rgba(255,255,255,.03),
        0 32px 80px rgba(0,0,0,.8),
        0 0 80px rgba(108,62,255,.12),
        inset 0 1px 0 rgba(255,255,255,.06);
    }

    /* ── HEADER ── */
    #clei-header {
      display: flex; align-items: center; gap: 12px;
      padding: 14px 16px 13px;
      background: linear-gradient(180deg, rgba(108,62,255,.08) 0%, transparent 100%);
      border-bottom: 1px solid rgba(255,255,255,.05);
      cursor: grab; flex-shrink: 0;
      position: relative;
    }
    #clei-header::after {
      content:''; position:absolute; inset-x:0; bottom:0; height:1px;
      background: linear-gradient(90deg, transparent, rgba(108,62,255,.4), rgba(0,200,255,.3), transparent);
    }
    #clei-header:active { cursor: grabbing; }

    .ch-avatar {
      width: 38px; height: 38px; border-radius: 12px; flex-shrink: 0;
      background: linear-gradient(135deg, #6c3eff, #00c8ff);
      display: flex; align-items: center; justify-content: center;
      font-size: 16px; font-weight: 800; color: #fff;
      box-shadow: 0 4px 16px rgba(108,62,255,.4);
    }
    .ch-info { flex: 1; }
    .ch-name { font-size: 15px; font-weight: 700; color: #fff; letter-spacing: .3px; line-height: 1.2; }
    .ch-desc { font-size: 10.5px; color: rgba(255,255,255,.3); font-family: 'JetBrains Mono',monospace; line-height: 1; }
    .ch-desc .dot { display:inline-block; width:5px; height:5px; border-radius:50%; background:#00ff88; margin-right:5px; vertical-align:middle; animation: clei-blink 2s infinite; }
    @keyframes clei-blink { 0%,100%{opacity:1} 50%{opacity:.3} }

    .ch-controls { display:flex; gap:6px; }
    .ch-btn {
      width: 30px; height: 30px; border-radius: 9px;
      border: 1px solid rgba(255,255,255,.08);
      background: rgba(255,255,255,.04);
      color: rgba(255,255,255,.35); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; transition: all .15s; flex-shrink: 0;
    }
    .ch-btn:hover { background: rgba(255,255,255,.1); color: rgba(255,255,255,.8); border-color: rgba(255,255,255,.15); }
    .ch-btn.red:hover { background: rgba(255,60,100,.15); color: #ff6080; border-color: rgba(255,60,100,.3); }

    /* ── TABS ── */
    #clei-tabs {
      display: flex; flex-shrink: 0;
      background: rgba(255,255,255,.02);
      border-bottom: 1px solid rgba(255,255,255,.05);
      padding: 0 6px;
    }
    .ct {
      flex: 1; padding: 11px 4px; text-align: center;
      font-size: 10px; font-weight: 600; letter-spacing: 1.2px;
      text-transform: uppercase; color: rgba(255,255,255,.25); cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all .2s; font-family: 'JetBrains Mono',monospace;
      position: relative;
    }
    .ct:hover { color: rgba(255,255,255,.55); }
    .ct.active { color: #a080ff; border-bottom-color: #7c4fff; }
    .ct.active::before {
      content:''; position:absolute; bottom:-1px; left:20%; right:20%;
      height:2px; background: linear-gradient(90deg,#6c3eff,#00c8ff);
      border-radius:99px;
    }

    /* ── BODY / PANELS ── */
    #clei-body { flex:1; overflow:hidden; display:flex; flex-direction:column; }
    .cp { display:none; flex:1; flex-direction:column; overflow:hidden; }
    .cp.active { display:flex; }

    /* ════ CHAT PANEL ════ */
    #clei-msgs {
      flex:1; overflow-y:auto; padding: 18px 16px;
      display:flex; flex-direction:column; gap:14px;
      scrollbar-width:thin; scrollbar-color: rgba(108,62,255,.3) transparent;
    }
    #clei-msgs::-webkit-scrollbar { width:3px; }
    #clei-msgs::-webkit-scrollbar-thumb { background:rgba(108,62,255,.4); border-radius:99px; }

    .cmsg { display:flex; gap:10px; align-items:flex-end; animation: cmsg-in .3s cubic-bezier(.22,1,.36,1); }
    @keyframes cmsg-in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
    .cmsg.user { flex-direction:row-reverse; }

    .cmsg-av {
      width:30px; height:30px; border-radius:10px; flex-shrink:0;
      display:flex; align-items:center; justify-content:center;
      font-size:11px; font-weight:700;
    }
    .cmsg.bot .cmsg-av { background:linear-gradient(135deg,#6c3eff,#00c8ff); color:#fff; box-shadow:0 4px 12px rgba(108,62,255,.35); }
    .cmsg.user .cmsg-av { background:rgba(108,62,255,.15); color:#a080ff; border:1px solid rgba(108,62,255,.3); }

    .cmsg-bub {
      max-width: 80%; padding: 11px 15px;
      border-radius: 16px; font-size: 13.5px; line-height: 1.65;
      font-family: 'JetBrains Mono', monospace; user-select:text;
    }
    .cmsg.bot .cmsg-bub {
      background: rgba(255,255,255,.04); color: #c8d4ff;
      border: 1px solid rgba(255,255,255,.07); border-bottom-left-radius: 5px;
    }
    .cmsg.user .cmsg-bub {
      background: linear-gradient(135deg, rgba(108,62,255,.2), rgba(0,200,255,.1));
      color: #e2eaff; border: 1px solid rgba(108,62,255,.3); border-bottom-right-radius: 5px;
    }
    .cmsg-bub .sol-label {
      display:block; font-size:9.5px; color:rgba(255,255,255,.25);
      letter-spacing:1.5px; text-transform:uppercase; margin-bottom:8px; font-family:'Outfit',sans-serif;
    }
    .cmsg-bub .sol-step {
      display:block; padding:2px 0 2px 10px; color:rgba(180,190,255,.55);
      font-size:11.5px; border-left:2px solid rgba(108,62,255,.3); margin-bottom:4px;
    }
    .cmsg-bub .sol-result {
      display:block; margin-top:10px; padding:10px 14px;
      background: linear-gradient(135deg, rgba(108,62,255,.12), rgba(0,200,255,.08));
      border: 1px solid rgba(108,62,255,.25); border-radius:10px;
      color:#a8f0ff; font-size:16px; font-weight:600;
    }
    .cmsg-bub .sol-result::before { content:'= '; color:rgba(108,62,255,.7); }

    .ctyping { display:flex; gap:5px; align-items:center; padding:3px 0; }
    .ctyping span {
      width:7px; height:7px; border-radius:50%;
      animation: ct-dot 1.3s infinite;
    }
    .ctyping span:nth-child(1) { background:#6c3eff; }
    .ctyping span:nth-child(2) { background:#3a8fff; animation-delay:.18s; }
    .ctyping span:nth-child(3) { background:#00c8ff; animation-delay:.36s; }
    @keyframes ct-dot { 0%,100%{transform:scale(.65);opacity:.3} 50%{transform:scale(1.1);opacity:1} }

    /* ── INPUT AREA ── */
    #clei-inp-area {
      flex-shrink:0; padding:12px 14px 14px;
      background:rgba(255,255,255,.02);
      border-top:1px solid rgba(255,255,255,.05);
      display:flex; flex-direction:column; gap:10px;
    }
    .cq-row { display:flex; gap:6px; flex-wrap:wrap; }
    .cq {
      font-size:10px; padding:5px 11px; border-radius:99px;
      border:1px solid rgba(108,62,255,.2); background:rgba(108,62,255,.06);
      color:rgba(170,140,255,.7); cursor:pointer;
      font-family:'JetBrains Mono',monospace; transition:all .15s; white-space:nowrap;
    }
    .cq:hover { border-color:rgba(108,62,255,.5); background:rgba(108,62,255,.14); color:#c0a0ff; }

    .cinp-row { display:flex; gap:9px; align-items:flex-end; }
    #clei-inp {
      flex:1; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08);
      border-radius:14px; padding:11px 15px;
      color:#d8e0ff; font-size:13px; outline:none; resize:none;
      font-family:'JetBrains Mono',monospace; line-height:1.5;
      min-height:42px; max-height:110px;
      transition:border-color .2s, background .2s;
    }
    #clei-inp::placeholder { color:rgba(255,255,255,.2); }
    #clei-inp:focus { border-color:rgba(108,62,255,.4); background:rgba(108,62,255,.06); }

    #clei-send-btn {
      width:44px; height:44px; border-radius:14px; border:none; cursor:pointer;
      background:linear-gradient(135deg,#6c3eff,#3a8fff,#00c8ff);
      color:#fff; font-size:18px; flex-shrink:0;
      display:flex; align-items:center; justify-content:center;
      transition:all .15s;
      box-shadow:0 4px 20px rgba(108,62,255,.4);
    }
    #clei-send-btn:hover { transform:scale(1.06); box-shadow:0 6px 24px rgba(108,62,255,.6); }
    #clei-send-btn:active { transform:scale(.94); }
    #clei-send-btn:disabled { opacity:.35; transform:none; box-shadow:none; cursor:default; }

    /* ════ CALCULATOR ════ */
    #clei-panel-calc { padding:14px; gap:12px; }

    .cc-display {
      background:rgba(0,0,0,.4); border:1px solid rgba(255,255,255,.07);
      border-radius:16px; padding:16px 20px;
      text-align:right;
      background-image: linear-gradient(135deg,rgba(108,62,255,.05),rgba(0,200,255,.03));
    }
    .cc-expr { font-size:12px; color:rgba(255,255,255,.25); font-family:'JetBrains Mono',monospace; min-height:18px; }
    .cc-val { font-size:36px; font-weight:700; color:#fff; font-family:'JetBrains Mono',monospace; word-break:break-all; line-height:1.1; }
    .cc-val.error { color:#ff6080; font-size:20px; }

    .cc-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }

    .ck {
      padding:15px 8px; border-radius:13px;
      border:1px solid rgba(255,255,255,.06);
      background:rgba(255,255,255,.04); color:#ccd4ff;
      font-size:14px; font-weight:600; cursor:pointer; text-align:center;
      transition:all .12s; font-family:'Outfit',sans-serif;
      position:relative; overflow:hidden;
    }
    .ck::after { content:''; position:absolute; inset:0; background:rgba(255,255,255,.0); transition:background .12s; }
    .ck:hover::after { background:rgba(255,255,255,.06); }
    .ck:active { transform:scale(.91); }
    .ck.fn { color:#b090ff; background:rgba(108,62,255,.08); border-color:rgba(108,62,255,.18); }
    .ck.op { color:#60d4ff; background:rgba(0,200,255,.06); border-color:rgba(0,200,255,.18); }
    .ck.clr { color:#ff7090; background:rgba(255,60,100,.06); border-color:rgba(255,60,100,.18); }
    .ck.eq {
      background:linear-gradient(135deg,#6c3eff,#3a8fff,#00c8ff);
      color:#fff; border:none; grid-row:span 2;
      box-shadow:0 4px 20px rgba(108,62,255,.35);
      font-size:22px;
    }
    .ck.eq:hover::after { background:rgba(255,255,255,.12); }
    .ck.zero { grid-column:span 2; }
    .ck.br { color:#ffcc60; background:rgba(255,200,60,.06); border-color:rgba(255,200,60,.18); }

    /* ════ HISTORY ════ */
    .ch-panel { padding:12px; display:flex; flex-direction:column; gap:8px; overflow-y:auto; flex:1; }
    .ch-panel::-webkit-scrollbar { width:3px; }
    .ch-panel::-webkit-scrollbar-thumb { background:rgba(108,62,255,.3); border-radius:99px; }
    .ch-item {
      background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06);
      border-radius:13px; padding:11px 14px; cursor:pointer;
      transition:all .15s; display:flex; flex-direction:column; gap:4px;
    }
    .ch-item:hover { border-color:rgba(108,62,255,.35); background:rgba(108,62,255,.06); }
    .ch-item-q { font-size:11.5px; color:rgba(255,255,255,.35); font-family:'JetBrains Mono',monospace; }
    .ch-item-r { font-size:15px; font-weight:600; color:#80d4ff; font-family:'JetBrains Mono',monospace; }
    .ch-item-ts { font-size:10px; color:rgba(255,255,255,.18); font-family:'JetBrains Mono',monospace; }
    .ch-empty { text-align:center; color:rgba(255,255,255,.2); font-size:13px; margin-top:50px; font-family:'JetBrains Mono',monospace; }
    .ch-clear { margin:0 12px 12px; padding:9px; border-radius:10px; border:1px solid rgba(255,60,100,.2); background:rgba(255,60,100,.05); color:rgba(255,100,120,.6); font-size:11px; cursor:pointer; text-align:center; font-family:'JetBrains Mono',monospace; transition:all .15s; flex-shrink:0; }
    .ch-clear:hover { background:rgba(255,60,100,.12); color:#ff7090; }

    /* ════ FORMULAS ════ */
    .cf-panel { padding:12px; display:flex; flex-direction:column; gap:8px; overflow-y:auto; flex:1; }
    .cf-panel::-webkit-scrollbar { width:3px; }
    .cf-panel::-webkit-scrollbar-thumb { background:rgba(108,62,255,.3); border-radius:99px; }
    .cf-cat { font-size:9px; color:rgba(255,255,255,.25); letter-spacing:2px; text-transform:uppercase; font-family:'JetBrains Mono',monospace; padding:0 2px; margin-top:8px; }
    .cf-card {
      background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06);
      border-radius:13px; padding:12px 14px; cursor:pointer; transition:all .15s;
    }
    .cf-card:hover { border-color:rgba(108,62,255,.4); background:rgba(108,62,255,.07); transform:translateX(2px); }
    .cf-title { font-size:12px; color:rgba(160,140,255,.8); font-weight:600; margin-bottom:5px; }
    .cf-expr { font-size:13.5px; color:#a8c8ff; font-family:'JetBrains Mono',monospace; }
    .cf-desc { font-size:10.5px; color:rgba(255,255,255,.25); margin-top:4px; }

    /* ════ ABOUT ════ */
    .cab-panel { padding:20px 16px; flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:16px; }
    .cab-logo-row { display:flex; align-items:center; gap:14px; }
    .cab-big-logo { width:60px; height:60px; border-radius:18px; background:linear-gradient(135deg,#6c3eff,#00c8ff); display:flex; align-items:center; justify-content:center; font-size:26px; font-weight:900; color:#fff; box-shadow:0 8px 24px rgba(108,62,255,.4); }
    .cab-title-block .cab-name { font-size:26px; font-weight:800; color:#fff; }
    .cab-title-block .cab-ver { font-size:11px; color:rgba(108,62,255,.7); font-family:'JetBrains Mono',monospace; }
    .cab-desc { font-size:13px; color:rgba(255,255,255,.4); line-height:1.7; }
    .cab-feats { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
    .cab-feat { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); border-radius:11px; padding:10px 12px; }
    .cab-feat-icon { font-size:18px; margin-bottom:4px; }
    .cab-feat-name { font-size:11px; font-weight:600; color:rgba(180,160,255,.8); }
    .cab-feat-sub { font-size:10px; color:rgba(255,255,255,.25); }
    .cab-credit-box { background:linear-gradient(135deg,rgba(108,62,255,.1),rgba(0,200,255,.06)); border:1px solid rgba(108,62,255,.25); border-radius:13px; padding:14px 16px; }
    .cab-credit-by { font-size:10px; color:rgba(255,255,255,.25); letter-spacing:2px; text-transform:uppercase; font-family:'JetBrains Mono',monospace; }
    .cab-credit-name { font-size:20px; font-weight:800; color:#fff; margin-top:2px; }
    .cab-credit-name span { background:linear-gradient(90deg,#6c3eff,#00c8ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    .cab-credit-sub { font-size:11px; color:rgba(255,255,255,.25); margin-top:2px; }

    /* ── RESIZE HANDLE ── */
    #clei-rh {
      position:absolute; bottom:0; right:0; width:20px; height:20px; cursor:nwse-resize;
    }
    #clei-rh::before {
      content:''; position:absolute; bottom:5px; right:5px;
      border-right:2px solid rgba(108,62,255,.4); border-bottom:2px solid rgba(108,62,255,.4);
      width:9px; height:9px;
    }
  `;
  document.head.appendChild(GST);

  /* ════════════════════════════════════════
     FULLSCREEN LOADER
  ════════════════════════════════════════ */
  const loader = document.createElement('div');
  loader.id = 'clei-fullscreen-loader';

  // Particles
  let pHtml = '';
  for (let i = 0; i < 18; i++) {
    const x = Math.random() * 100, delay = Math.random() * 3, dur = 2 + Math.random() * 2;
    const size = 2 + Math.random() * 4;
    pHtml += `<div class="clei-fs-p" style="left:${x}%;bottom:${10+Math.random()*30}%;width:${size}px;height:${size}px;animation-delay:${delay}s;animation-duration:${dur}s;background:${['#6c3eff','#3a8fff','#00c8ff','#a060ff'][Math.floor(Math.random()*4)]}"></div>`;
  }

  loader.innerHTML = `
    <div class="clei-fs-bg">
      <div class="clei-fs-orb o1"></div>
      <div class="clei-fs-orb o2"></div>
      <div class="clei-fs-orb o3"></div>
      <div class="clei-fs-grid"></div>
      <div class="clei-fs-particles">${pHtml}</div>
    </div>
    <div class="clei-fs-content">
      <div class="clei-fs-logo-wrap">
        <div class="clei-fs-logo-ring"></div>
        <div class="clei-fs-logo-ring2"></div>
        <div class="clei-fs-logo">C</div>
      </div>
      <div class="clei-fs-title">CLEI</div>
      <div class="clei-fs-sub">Inteligência Matemática</div>
      <div class="clei-fs-bar-wrap">
        <div class="clei-fs-bar-track"><div class="clei-fs-bar-fill" id="clei-bar-fill"></div></div>
        <div class="clei-fs-bar-status">
          <div class="clei-fs-bar-text" id="clei-bar-text">Iniciando sistema...</div>
          <div class="clei-fs-bar-pct" id="clei-bar-pct">0%</div>
        </div>
      </div>
    </div>
    <div class="clei-fs-credit">Criado por <span>Plascoy</span></div>
  `;
  document.body.appendChild(loader);

  // Animate loader progress
  const barFill = document.getElementById('clei-bar-fill');
  const barText = document.getElementById('clei-bar-text');
  const barPct  = document.getElementById('clei-bar-pct');
  const steps_ld = [
    [10,  'Carregando motor matemático...'],
    [25,  'Inicializando álgebra simbólica...'],
    [42,  'Configurando motor de cálculo...'],
    [58,  'Carregando fórmulas geométricas...'],
    [72,  'Compilando base de conhecimento...'],
    [85,  'Preparando interface neural...'],
    [95,  'Quase pronto...'],
    [100, 'Clei está pronta!'],
  ];
  let si = 0;
  function nextStep() {
    if (si >= steps_ld.length) return;
    const [pct, txt] = steps_ld[si++];
    barFill.style.width = pct + '%';
    barText.textContent = txt;
    barPct.textContent  = pct + '%';
    const delay = si < steps_ld.length ? 320 + Math.random() * 280 : 600;
    setTimeout(nextStep, delay);
  }
  setTimeout(nextStep, 400);

  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.remove();
      root.classList.add('visible');
      addMsg('bot', `
        <span class="sol-label">Bem-vindo ao Clei v2.0</span>
        Olá! Sou a <strong style="color:#c0a8ff">Clei</strong>, sua IA matemática avançada criada pela <strong style="color:#7c4fff">Plascoy</strong>. Posso ajudar com:<br><br>
        🔢 Aritmética, álgebra e equações<br>
        📐 Geometria e trigonometria<br>
        ∫ Cálculo diferencial e integral<br>
        📊 Estatística e probabilidade<br>
        🔁 Progressões e sequências<br>
        💰 Juros, porcentagens e finanças<br><br>
        Use os botões rápidos ou escreva sua pergunta!
      `);
    }, 800);
  }, 3200);

  /* ════════════════════════════════════════
     MAIN WINDOW HTML
  ════════════════════════════════════════ */
  const root = document.createElement('div');
  root.id = 'clei-root';
  root.innerHTML = `
    <div id="clei-window">
      <div id="clei-header">
        <div class="ch-avatar">C</div>
        <div class="ch-info">
          <div class="ch-name">Clei · IA Matemática</div>
          <div class="ch-desc"><span class="dot"></span>online · by Plascoy</div>
        </div>
        <div class="ch-controls">
          <button class="ch-btn" id="ch-min" title="Minimizar">▬</button>
          <button class="ch-btn red" id="ch-close" title="Fechar">✕</button>
        </div>
      </div>

      <div id="clei-tabs">
        <div class="ct active" data-t="chat">💬 Chat</div>
        <div class="ct" data-t="calc">🔢 Calc</div>
        <div class="ct" data-t="history">📋 Histórico</div>
        <div class="ct" data-t="formulas">📐 Fórmulas</div>
        <div class="ct" data-t="about">✦ Sobre</div>
      </div>

      <div id="clei-body">
        <!-- CHAT -->
        <div class="cp active" id="clei-panel-chat">
          <div id="clei-msgs"></div>
          <div id="clei-inp-area">
            <div class="cq-row">
              <button class="cq" data-q="Resolva 2x² + 5x - 3 = 0">Bhaskara</button>
              <button class="cq" data-q="Derivada de 3x⁴ + 2x² - 7x">Derivada</button>
              <button class="cq" data-q="Integral de 4x³ + 6x dx">Integral</button>
              <button class="cq" data-q="Calcule 18% de 450">Porcentagem</button>
              <button class="cq" data-q="Área e perímetro de círculo com r=8">Círculo</button>
              <button class="cq" data-q="Média de 15, 22, 37, 44, 8">Estatística</button>
              <button class="cq" data-q="Fatorial de 10">Fatorial</button>
              <button class="cq" data-q="Fibonacci 12 termos">Fibonacci</button>
            </div>
            <div class="cinp-row">
              <textarea id="clei-inp" placeholder="Pergunte algo matemático... ex: resolva 3x+9=21" rows="1"></textarea>
              <button id="clei-send-btn">➤</button>
            </div>
          </div>
        </div>

        <!-- CALCULATOR -->
        <div class="cp" id="clei-panel-calc">
          <div class="cc-display">
            <div class="cc-expr" id="cc-expr"></div>
            <div class="cc-val" id="cc-val">0</div>
          </div>
          <div class="cc-grid">
            <button class="ck fn" data-k="sin(">sin</button>
            <button class="ck fn" data-k="cos(">cos</button>
            <button class="ck fn" data-k="tan(">tan</button>
            <button class="ck fn" data-k="sqrt(">√x</button>
            <button class="ck fn" data-k="log(">log</button>
            <button class="ck fn" data-k="ln(">ln</button>
            <button class="ck fn" data-k="3.14159265">π</button>
            <button class="ck fn" data-k="**2">x²</button>
            <button class="ck br" data-k="(">(</button>
            <button class="ck br" data-k=")">)</button>
            <button class="ck clr" data-k="DEL">⌫</button>
            <button class="ck clr" data-k="AC">AC</button>
            <button class="ck" data-k="7">7</button>
            <button class="ck" data-k="8">8</button>
            <button class="ck" data-k="9">9</button>
            <button class="ck op" data-k="/">&div;</button>
            <button class="ck" data-k="4">4</button>
            <button class="ck" data-k="5">5</button>
            <button class="ck" data-k="6">6</button>
            <button class="ck op" data-k="*">&times;</button>
            <button class="ck" data-k="1">1</button>
            <button class="ck" data-k="2">2</button>
            <button class="ck" data-k="3">3</button>
            <button class="ck op" data-k="-">−</button>
            <button class="ck zero" data-k="0">0</button>
            <button class="ck" data-k=".">.</button>
            <button class="ck eq" data-k="=">=</button>
            <button class="ck op" data-k="+">+</button>
          </div>
        </div>

        <!-- HISTORY -->
        <div class="cp" id="clei-panel-history">
          <div class="ch-panel" id="clei-hist-list"></div>
          <button class="ch-clear" id="ch-clear-btn">🗑 Limpar Histórico</button>
        </div>

        <!-- FORMULAS -->
        <div class="cp" id="clei-panel-formulas">
          <div class="cf-panel" id="clei-form-list"></div>
        </div>

        <!-- ABOUT -->
        <div class="cp" id="clei-panel-about">
          <div class="cab-panel">
            <div class="cab-logo-row">
              <div class="cab-big-logo">C</div>
              <div class="cab-title-block">
                <div class="cab-name">Clei</div>
                <div class="cab-ver">v2.0 · MATH AI ENGINE</div>
              </div>
            </div>
            <div class="cab-desc">
              Clei é uma inteligência artificial especializada em matemática, capaz de resolver problemas do básico ao avançado com explicações passo a passo.
            </div>
            <div class="cab-feats">
              <div class="cab-feat"><div class="cab-feat-icon">🔢</div><div class="cab-feat-name">Álgebra</div><div class="cab-feat-sub">Equações e sistemas</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">∫</div><div class="cab-feat-name">Cálculo</div><div class="cab-feat-sub">Derivadas e integrais</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">📐</div><div class="cab-feat-name">Geometria</div><div class="cab-feat-sub">Áreas e volumes</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">📊</div><div class="cab-feat-name">Estatística</div><div class="cab-feat-sub">Média, desvio, moda</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">🔁</div><div class="cab-feat-name">Sequências</div><div class="cab-feat-sub">PA, PG, Fibonacci</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">💰</div><div class="cab-feat-name">Finanças</div><div class="cab-feat-sub">Juros compostos</div></div>
            </div>
            <div class="cab-credit-box">
              <div class="cab-credit-by">Criado por</div>
              <div class="cab-credit-name"><span>Plascoy</span></div>
              <div class="cab-credit-sub">Tecnologia · Inovação · Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="clei-rh"></div>
  `;
  document.body.appendChild(root);

  /* ════════════════════════════════════════
     REFERENCES
  ════════════════════════════════════════ */
  const $ = id => document.getElementById(id);
  const msgs   = $('clei-msgs');
  const inp    = $('clei-inp');
  const sendBtn = $('clei-send-btn');

  /* ════════════════════════════════════════
     CONTROLS
  ════════════════════════════════════════ */
  $('ch-min').addEventListener('click', () => root.classList.toggle('minimized'));
  $('ch-close').addEventListener('click', () => {
    root.style.transition = 'opacity .3s, transform .3s';
    root.style.opacity = '0'; root.style.transform = 'scale(.92) translateY(20px)';
    setTimeout(() => root.remove(), 300);
  });

  // Tabs
  document.querySelectorAll('.ct').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.ct').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.cp').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const panel = $('clei-panel-' + t.dataset.t);
      if (panel) panel.classList.add('active');
      if (t.dataset.t === 'history') renderHistory();
    });
  });

  // Quick buttons
  document.querySelectorAll('.cq').forEach(b => {
    b.addEventListener('click', () => { inp.value = b.dataset.q; sendMessage(); });
  });

  // Input auto-resize
  inp.addEventListener('input', () => { inp.style.height = 'auto'; inp.style.height = Math.min(inp.scrollHeight, 110) + 'px'; });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
  sendBtn.addEventListener('click', sendMessage);

  /* ════════════════════════════════════════
     MESSAGES
  ════════════════════════════════════════ */
  function addMsg(type, html, typing = false) {
    const d = document.createElement('div');
    d.className = 'cmsg ' + type;
    const av = type === 'bot' ? 'C' : 'U';
    if (typing) {
      d.innerHTML = `<div class="cmsg-av">${av}</div><div class="cmsg-bub"><div class="ctyping"><span></span><span></span><span></span></div></div>`;
    } else {
      d.innerHTML = `<div class="cmsg-av">${av}</div><div class="cmsg-bub">${html}</div>`;
    }
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  /* ════════════════════════════════════════
     MATH ENGINE
  ════════════════════════════════════════ */
  function solveMath(q) {
    const t = q.toLowerCase().trim();

    // ── Bhaskara ──
    const bh = q.match(/(-?\d*\.?\d*)\s*x[²2]\s*([+\-]\s*\d*\.?\d*)\s*x\s*([+\-]\s*\d*\.?\d*)\s*=\s*0/i);
    if (bh) {
      let a = parseFloat(bh[1].replace(/\s/g,'') || '1') || 1;
      let b = parseFloat(bh[2].replace(/\s/g,'')) || 0;
      let c = parseFloat(bh[3].replace(/\s/g,'')) || 0;
      const D = b*b - 4*a*c;
      const steps = [
        `a = ${a}, b = ${b}, c = ${c}`,
        `Δ = b² − 4ac = ${b}² − 4×${a}×${c} = ${D}`,
      ];
      if (D < 0) return { steps, result: 'Δ < 0 → Sem raízes reais' };
      const x1 = ((-b + Math.sqrt(D)) / (2*a));
      const x2 = ((-b - Math.sqrt(D)) / (2*a));
      steps.push(`x = (−b ± √Δ) / 2a = (${-b} ± ${Math.sqrt(D).toFixed(4)}) / ${2*a}`);
      return { steps, result: D === 0 ? `x = ${x1.toFixed(6)}` : `x₁ = ${x1.toFixed(6)}   |   x₂ = ${x2.toFixed(6)}` };
    }

    // ── 1st degree ──
    const eq1 = q.match(/(-?\d*\.?\d*)\s*x\s*([+\-]\s*\d+\.?\d*)\s*=\s*(-?\d+\.?\d*)/i);
    if (eq1) {
      const a = parseFloat(eq1[1] || '1') || 1;
      const b = parseFloat(eq1[2].replace(/\s/g,'')) || 0;
      const c = parseFloat(eq1[3]);
      const x = (c - b) / a;
      return { steps: [`${a}x + ${b} = ${c}`, `${a}x = ${c - b}`, `x = ${c - b} / ${a}`], result: `x = ${x.toFixed(6)}` };
    }

    // ── Percentage ──
    const pct = t.match(/(\d+\.?\d*)\s*%\s*de\s*(\d+\.?\d*)/);
    if (pct) {
      const res = (parseFloat(pct[1]) / 100) * parseFloat(pct[2]);
      return { steps: [`${pct[1]}% × ${pct[2]} = (${pct[1]}/100) × ${pct[2]}`], result: res.toFixed(4) };
    }

    // ── Derivative ──
    const drv = t.match(/deriv[aá][a-z]*\s+de\s+(.+)/);
    if (drv) {
      const expr = drv[1].trim();
      const res = differentiate(expr);
      return { steps: ['Regra da potência: d/dx(xⁿ) = n·xⁿ⁻¹', 'Constante: d/dx(c) = 0'], result: `f\'(x) = ${res}` };
    }

    // ── Integral ──
    const itg = t.match(/integral\s+de\s+(.+?)\s*dx/);
    if (itg) {
      const expr = itg[1].trim();
      const res = integrate(expr);
      return { steps: ['Regra da potência: ∫xⁿdx = xⁿ⁺¹/(n+1) + C', '∫constante dx = constante·x + C'], result: `${res} + C` };
    }

    // ── Circle ──
    const crc = t.match(/c[íi]rculo.*?r\s*=\s*(\d+\.?\d*)/);
    if (crc) {
      const r = parseFloat(crc[1]);
      const area = (Math.PI * r * r);
      const perim = (2 * Math.PI * r);
      return { steps: ['Área = π × r²', 'Perímetro = 2π × r'], result: `Área = ${area.toFixed(5)}   |   Perímetro = ${perim.toFixed(5)}` };
    }

    // ── Triangle area ──
    const tri = t.match(/tri[aâ]ngulo.*?b\s*=\s*(\d+\.?\d*).*?h\s*=\s*(\d+\.?\d*)/);
    if (tri) {
      const area = (parseFloat(tri[1]) * parseFloat(tri[2])) / 2;
      return { steps: ['A = (base × altura) / 2'], result: `Área = ${area}` };
    }

    // ── Pythagorean ──
    const pyth = t.match(/(?:hipotenusa|pitágoras|pitagoras).*?(\d+\.?\d*).*?(\d+\.?\d*)/);
    if (pyth) {
      const a = parseFloat(pyth[1]), b = parseFloat(pyth[2]);
      const c = Math.sqrt(a*a + b*b);
      return { steps: [`c² = a² + b² = ${a}² + ${b}²`, `c² = ${a*a} + ${b*b} = ${a*a+b*b}`], result: `c = ${c.toFixed(6)}` };
    }

    // ── Statistics ──
    if (t.includes('média') || t.includes('media') || t.includes('mediana') || t.includes('moda')) {
      const nums = q.match(/-?\d+\.?\d*/g);
      if (nums && nums.length > 1) {
        const arr = nums.map(Number);
        const sum = arr.reduce((a,b)=>a+b,0);
        const mean = sum / arr.length;
        const sorted = [...arr].sort((a,b)=>a-b);
        const mid = Math.floor(sorted.length/2);
        const median = sorted.length%2 ? sorted[mid] : (sorted[mid-1]+sorted[mid])/2;
        const variance = arr.reduce((acc,x)=>acc+(x-mean)**2,0)/arr.length;
        const std = Math.sqrt(variance);
        return {
          steps: [
            `Dados: ${arr.join(', ')}`,
            `Soma = ${sum}`,
            `Ordenado: ${sorted.join(', ')}`,
            `Variância = ${variance.toFixed(4)}`,
          ],
          result: `Média=${mean.toFixed(4)} | Mediana=${median} | Desvio Padrão=${std.toFixed(4)}`
        };
      }
    }

    // ── Fibonacci ──
    if (t.includes('fibonacci')) {
      const nm = t.match(/(\d+)/);
      if (nm) {
        const n = Math.min(parseInt(nm[1]), 25);
        let a=0, b=1, seq=[0,1];
        for (let i=2;i<n;i++){[a,b]=[b,a+b];seq.push(b);}
        return { steps: ['F(n) = F(n−1) + F(n−2)', 'F(0)=0, F(1)=1'], result: seq.slice(0,n).join(', ') };
      }
    }

    // ── Factorial ──
    const fac = t.match(/fatorial\s+de?\s*(\d+)/);
    if (fac) {
      const n = parseInt(fac[1]);
      if (n <= 20) {
        let r = 1;
        for (let i=2;i<=n;i++) r*=i;
        return { steps: [`${n}! = 1 × 2 × ... × ${n}`], result: `${n}! = ${r}` };
      }
    }

    // ── Compound interest ──
    const jur = t.match(/juros?\s+compostos?.*?c\s*=\s*(\d+\.?\d*).*?i\s*=\s*(\d+\.?\d*).*?n\s*=\s*(\d+)/);
    if (jur) {
      const C = parseFloat(jur[1]), i = parseFloat(jur[2])/100, n = parseInt(jur[3]);
      const M = C * Math.pow(1+i,n);
      const J = M - C;
      return { steps: [`M = C × (1 + i)ⁿ`, `M = ${C} × (1 + ${i})^${n}`, `Juros = M − C = ${M.toFixed(2)} − ${C}`], result: `M = R$ ${M.toFixed(2)}   |   Juros = R$ ${J.toFixed(2)}` };
    }

    // ── AP (Arithmetic Progression) ──
    const ap = t.match(/p\.?a\.?.*?a1?\s*=\s*(\d+\.?\d*).*?r\s*=\s*(\d+\.?\d*).*?n\s*=\s*(\d+)/);
    if (ap) {
      const a1 = parseFloat(ap[1]), r = parseFloat(ap[2]), n = parseInt(ap[3]);
      const an = a1 + (n-1)*r;
      const Sn = (n*(a1+an))/2;
      return { steps: [`aₙ = a₁ + (n−1)·r`, `S = n·(a₁+aₙ)/2`], result: `a${n} = ${an}   |   S${n} = ${Sn}` };
    }

    // ── GP (Geometric Progression) ──
    const gp = t.match(/p\.?g\.?.*?a1?\s*=\s*(\d+\.?\d*).*?q\s*=\s*(\d+\.?\d*).*?n\s*=\s*(\d+)/);
    if (gp) {
      const a1 = parseFloat(gp[1]), q = parseFloat(gp[2]), n = parseInt(gp[3]);
      const an = a1 * Math.pow(q, n-1);
      const Sn = q !== 1 ? a1*(Math.pow(q,n)-1)/(q-1) : a1*n;
      return { steps: [`aₙ = a₁ · qⁿ⁻¹`, `Sₙ = a₁·(qⁿ−1)/(q−1)`], result: `a${n} = ${an.toFixed(4)}   |   S${n} = ${Sn.toFixed(4)}` };
    }

    // ── Sphere volume ──
    if (t.includes('esfera') || t.includes('sphere')) {
      const rm = t.match(/r\s*=\s*(\d+\.?\d*)/);
      if (rm) {
        const r = parseFloat(rm[1]);
        const vol = (4/3)*Math.PI*r*r*r;
        const surf = 4*Math.PI*r*r;
        return { steps: ['V = (4/3)·π·r³', 'S = 4·π·r²'], result: `Volume = ${vol.toFixed(5)}   |   Superfície = ${surf.toFixed(5)}` };
      }
    }

    // ── Combination/Permutation ──
    const cmb = t.match(/combina[çc][aã]o.*?(\d+).*?(\d+)/);
    if (cmb) {
      const n = parseInt(cmb[1]), k = parseInt(cmb[2]);
      if (n <= 20) {
        const C = factorial(n) / (factorial(k) * factorial(n-k));
        return { steps: [`C(n,k) = n! / (k! × (n−k)!)`, `C(${n},${k}) = ${n}! / (${k}! × ${n-k}!)`], result: `C(${n},${k}) = ${C}` };
      }
    }

    // ── Arithmetic expression ──
    const exprMatch = q.match(/^[\d\s\+\-\*\/\(\)\.\^%]+$/);
    if (exprMatch) {
      try {
        const safe = q.replace(/\^/g,'**').replace(/\s/g,'');
        const res = Function('"use strict"; return (' + safe + ')')();
        if (typeof res === 'number' && isFinite(res))
          return { steps: [`Expressão: ${q}`], result: parseFloat(res.toFixed(10)).toString() };
      } catch(e) {}
    }

    // Fallback — try to evaluate any math expression
    try {
      const clean = q.replace(/[^0-9+\-*/().^%\s]/g,'').trim();
      if (clean.length > 1) {
        const res = Function('"use strict"; return (' + clean.replace(/\^/g,'**') + ')')();
        if (typeof res === 'number' && isFinite(res))
          return { steps: ['Avaliação direta da expressão'], result: parseFloat(res.toFixed(10)).toString() };
      }
    } catch(e) {}

    return { steps: [], result: 'Não consegui interpretar. Tente: "resolva 2x² + 5x - 3 = 0", "derivada de 3x²", "média de 5, 10, 15"' };
  }

  function factorial(n) { let r=1; for(let i=2;i<=n;i++) r*=i; return r; }

  function differentiate(expr) {
    expr = expr.replace(/\s/g,'');
    let result = [];
    const terms = expr.split(/(?=[+\-])/).filter(Boolean);
    for (let term of terms) {
      const m = term.match(/^([+\-]?\d*\.?\d*)x[\^]?(\d+\.?\d*)?$/);
      if (m) {
        let a = m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:parseFloat(m[1]);
        let n = m[2]?parseFloat(m[2]):1;
        let c = a*n, nn = n-1;
        if (nn===0) result.push(c.toString());
        else if (nn===1) result.push(`${c}x`);
        else result.push(`${c}x^${nn}`);
      } else if (/^[+\-]?\d+$/.test(term)) {
        // constant → 0, skip
      } else { result.push(`(d/dx)[${term}]`); }
    }
    const r = result.join(' + ').replace(/\+ -/g,'- ') || '0';
    return r;
  }

  function integrate(expr) {
    expr = expr.replace(/\s/g,'');
    let result = [];
    const terms = expr.split(/(?=[+\-])/).filter(Boolean);
    for (let term of terms) {
      const m = term.match(/^([+\-]?\d*\.?\d*)x[\^]?(\d+\.?\d*)?$/);
      if (m) {
        let a = m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:parseFloat(m[1]);
        let n = m[2]?parseFloat(m[2]):1;
        let nn = n+1, c = a/nn;
        const cs = Number.isInteger(c)?c.toString():c.toFixed(4);
        result.push(nn===1?`${cs}x`:`${cs}x^${nn}`);
      } else if (/^[+\-]?\d+$/.test(term)) {
        result.push(`${term}x`);
      } else { result.push(`∫(${term})dx`); }
    }
    return result.join(' + ').replace(/\+ -/g,'- ') || '0';
  }

  function buildReply(q) {
    const { steps, result } = solveMath(q);
    let html = `<span class="sol-label">Solução · Clei Math Engine</span>`;
    steps.forEach(s => { html += `<span class="sol-step">▸ ${s}</span>`; });
    html += `<span class="sol-result">${result}</span>`;
    return html;
  }

  /* ════════════════════════════════════════
     SEND MESSAGE
  ════════════════════════════════════════ */
  let calcHistory = JSON.parse(localStorage.getItem('clei_hist_v2') || '[]');

  async function sendMessage() {
    const q = inp.value.trim();
    if (!q) return;
    inp.value = ''; inp.style.height = 'auto'; sendBtn.disabled = true;
    addMsg('user', q.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
    const typing = addMsg('bot', '', true);
    await new Promise(r => setTimeout(r, 500 + Math.random() * 700));
    typing.remove();
    addMsg('bot', buildReply(q));
    const { result } = solveMath(q);
    calcHistory.unshift({ q, result, ts: new Date().toLocaleString('pt-BR') });
    if (calcHistory.length > 80) calcHistory.pop();
    localStorage.setItem('clei_hist_v2', JSON.stringify(calcHistory));
    sendBtn.disabled = false;
    inp.focus();
  }

  /* ════════════════════════════════════════
     CALCULATOR
  ════════════════════════════════════════ */
  let calcExpr = '';
  const ccExpr = $('cc-expr'), ccVal = $('cc-val');

  document.querySelectorAll('.ck').forEach(btn => {
    btn.addEventListener('click', () => {
      const k = btn.dataset.k;
      if (k === 'AC') { calcExpr = ''; ccVal.textContent = '0'; ccExpr.textContent = ''; ccVal.className = 'cc-val'; return; }
      if (k === 'DEL') { calcExpr = calcExpr.slice(0,-1); ccVal.textContent = calcExpr || '0'; return; }
      if (k === '=') {
        try {
          const safe = calcExpr
            .replace(/sqrt\(/g,'Math.sqrt(')
            .replace(/log\(/g,'Math.log10(')
            .replace(/ln\(/g,'Math.log(')
            .replace(/sin\(/g,'Math.sin(')
            .replace(/cos\(/g,'Math.cos(')
            .replace(/tan\(/g,'Math.tan(')
            .replace(/\^/g,'**');
          const res = Function('"use strict"; return (' + safe + ')')();
          ccExpr.textContent = calcExpr + ' =';
          const display = parseFloat(res.toFixed(10));
          ccVal.textContent = display;
          ccVal.className = 'cc-val';
          calcHistory.unshift({ q: calcExpr, result: display.toString(), ts: new Date().toLocaleString('pt-BR') });
          localStorage.setItem('clei_hist_v2', JSON.stringify(calcHistory));
          calcExpr = display.toString();
        } catch(e) { ccVal.textContent = 'Erro sintaxe'; ccVal.className = 'cc-val error'; }
        return;
      }
      calcExpr += k;
      ccVal.textContent = calcExpr;
      ccExpr.textContent = '';
      ccVal.className = 'cc-val';
    });
  });

  /* ════════════════════════════════════════
     HISTORY
  ════════════════════════════════════════ */
  function renderHistory() {
    const el = $('clei-hist-list');
    if (!calcHistory.length) {
      el.innerHTML = '<div class="ch-empty">Nenhum cálculo ainda.<br>Use o chat ou a calculadora.</div>'; return;
    }
    el.innerHTML = calcHistory.map((h,i) => `
      <div class="ch-item" data-i="${i}">
        <div class="ch-item-ts">${h.ts}</div>
        <div class="ch-item-q">${h.q}</div>
        <div class="ch-item-r">= ${h.result}</div>
      </div>`).join('');
    el.querySelectorAll('.ch-item').forEach(item => {
      item.addEventListener('click', () => {
        inp.value = calcHistory[parseInt(item.dataset.i)].q;
        document.querySelector('[data-t="chat"]').click();
        inp.focus();
      });
    });
  }

  $('ch-clear-btn').addEventListener('click', () => {
    calcHistory = []; localStorage.removeItem('clei_hist_v2'); renderHistory();
  });

  /* ════════════════════════════════════════
     FORMULAS
  ════════════════════════════════════════ */
  const FORMULAS = [
    { cat:'Álgebra', title:'Equação 2º grau (Bhaskara)', expr:'x = (−b ± √Δ) / 2a', desc:'Δ = b² − 4ac' },
    { cat:'Álgebra', title:'Equação 1º grau', expr:'ax + b = c  →  x = (c−b)/a', desc:'' },
    { cat:'Geometria', title:'Área do círculo', expr:'A = π · r²', desc:'' },
    { cat:'Geometria', title:'Perímetro do círculo', expr:'P = 2 · π · r', desc:'' },
    { cat:'Geometria', title:'Área do triângulo', expr:'A = (base · altura) / 2', desc:'' },
    { cat:'Geometria', title:'Teorema de Pitágoras', expr:'c² = a² + b²', desc:'triângulo retângulo' },
    { cat:'Geometria', title:'Volume da esfera', expr:'V = (4/3) · π · r³', desc:'' },
    { cat:'Geometria', title:'Volume do cilindro', expr:'V = π · r² · h', desc:'' },
    { cat:'Cálculo', title:'Derivada — regra da potência', expr:"d/dx(xⁿ) = n · xⁿ⁻¹", desc:'' },
    { cat:'Cálculo', title:'Derivada — produto', expr:"(fg)' = f'g + fg'", desc:'' },
    { cat:'Cálculo', title:'Integral — regra da potência', expr:'∫xⁿ dx = xⁿ⁺¹/(n+1) + C', desc:'n ≠ −1' },
    { cat:'Trigonometria', title:'Seno', expr:'sen(θ) = Cateto Oposto / Hipotenusa', desc:'' },
    { cat:'Trigonometria', title:'Cosseno', expr:'cos(θ) = Cateto Adjacente / Hipotenusa', desc:'' },
    { cat:'Trigonometria', title:'Tangente', expr:'tan(θ) = sen(θ) / cos(θ)', desc:'' },
    { cat:'Trigonometria', title:'Lei dos Cossenos', expr:'a² = b² + c² − 2bc·cos(A)', desc:'' },
    { cat:'Estatística', title:'Média aritmética', expr:'x̄ = (Σ xᵢ) / n', desc:'' },
    { cat:'Estatística', title:'Desvio padrão', expr:'σ = √(Σ(xᵢ−x̄)² / n)', desc:'' },
    { cat:'Financeiro', title:'Juros compostos', expr:'M = C · (1 + i)ⁿ', desc:'C=capital, i=taxa, n=períodos' },
    { cat:'Financeiro', title:'Juros simples', expr:'J = C · i · t', desc:'' },
    { cat:'Sequências', title:'PA — Termo geral', expr:'aₙ = a₁ + (n−1)·r', desc:'' },
    { cat:'Sequências', title:'PA — Soma', expr:'Sₙ = n·(a₁+aₙ)/2', desc:'' },
    { cat:'Sequências', title:'PG — Termo geral', expr:'aₙ = a₁ · qⁿ⁻¹', desc:'' },
    { cat:'Combinatória', title:'Combinação', expr:'C(n,k) = n! / (k!·(n−k)!)', desc:'' },
    { cat:'Combinatória', title:'Permutação', expr:'Pₙ = n!', desc:'' },
  ];

  const fList = $('clei-form-list');
  let lastCat = '';
  fList.innerHTML = FORMULAS.map(f => {
    let catHtml = '';
    if (f.cat !== lastCat) { catHtml = `<div class="cf-cat">${f.cat}</div>`; lastCat = f.cat; }
    return `${catHtml}<div class="cf-card" data-title="${f.title}" data-expr="${f.expr}">
      <div class="cf-title">${f.title}</div>
      <div class="cf-expr">${f.expr}</div>
      ${f.desc?`<div class="cf-desc">${f.desc}</div>`:''}
    </div>`;
  }).join('');

  fList.querySelectorAll('.cf-card').forEach(card => {
    card.addEventListener('click', () => {
      inp.value = `Explique e demonstre: ${card.dataset.title} — ${card.dataset.expr}`;
      document.querySelector('[data-t="chat"]').click();
    });
  });

  /* ════════════════════════════════════════
     DRAG
  ════════════════════════════════════════ */
  let dragging=false, resizing=false;
  let dOX=0,dOY=0,rOX=0,rOY=0,rW=0,rH=0;

  $('clei-header').addEventListener('mousedown', e => {
    if (e.target.classList.contains('ch-btn')) return;
    dragging = true;
    const r = root.getBoundingClientRect();
    dOX = e.clientX - r.left; dOY = e.clientY - r.top;
  });

  $('clei-rh').addEventListener('mousedown', e => {
    resizing = true; rOX = e.clientX; rOY = e.clientY;
    rW = root.offsetWidth; rH = root.offsetHeight; e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (dragging) {
      let x = Math.max(0, Math.min(e.clientX-dOX, window.innerWidth-root.offsetWidth));
      let y = Math.max(0, Math.min(e.clientY-dOY, window.innerHeight-root.offsetHeight));
      root.style.left=x+'px'; root.style.top=y+'px';
      root.style.right='auto'; root.style.bottom='auto';
    }
    if (resizing) {
      root.style.width  = Math.max(380, rW+(e.clientX-rOX))+'px';
      root.style.height = Math.max(480, rH+(e.clientY-rOY))+'px';
      $('clei-window').style.height='100%';
    }
  });

  document.addEventListener('mouseup', () => { dragging=false; resizing=false; });

  console.log('%c✦ Clei v2 by Plascoy · Carregada!', 'color:#a080ff;font-weight:800;font-size:15px;text-shadow:0 0 10px #6c3eff');
})();
