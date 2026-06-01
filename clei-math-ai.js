(function () {
  ['clei-root','clei-fullscreen-loader','clei-global-style'].forEach(id => { const e = document.getElementById(id); if(e) e.remove(); });

  /* ══════════════════════════════════════════════════════
     STYLES
  ══════════════════════════════════════════════════════ */
  const GST = document.createElement('style');
  GST.id = 'clei-global-style';
  GST.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600&display=swap');

    /* ═══ FULLSCREEN LOADER ═══ */
    #clei-fullscreen-loader {
      position:fixed; inset:0; z-index:2147483646;
      background:#03020c;
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      font-family:'Outfit',sans-serif; overflow:hidden;
      transition:opacity 1s ease, transform 1s ease;
    }
    #clei-fullscreen-loader.fade-out { opacity:0; transform:scale(1.06); pointer-events:none; }

    /* orbs */
    .cfl-bg { position:absolute; inset:0; overflow:hidden; }
    .cfl-orb {
      position:absolute; border-radius:50%; filter:blur(90px);
      animation:cfl-float 9s ease-in-out infinite;
    }
    .cfl-orb.a { width:700px;height:700px;background:radial-gradient(circle,#6c3eff,transparent 70%);opacity:.22;top:-250px;left:-200px;animation-delay:0s; }
    .cfl-orb.b { width:600px;height:600px;background:radial-gradient(circle,#00c8ff,transparent 70%);opacity:.18;bottom:-220px;right:-150px;animation-delay:-4s; }
    .cfl-orb.c { width:400px;height:400px;background:radial-gradient(circle,#ff3aaa,transparent 70%);opacity:.13;top:35%;left:58%;animation-delay:-7s; }
    .cfl-orb.d { width:300px;height:300px;background:radial-gradient(circle,#00ffaa,transparent 70%);opacity:.1;top:60%;left:10%;animation-delay:-2s; }
    @keyframes cfl-float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-40px) scale(1.07)} }

    /* grid */
    .cfl-grid {
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(108,62,255,.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(108,62,255,.05) 1px, transparent 1px);
      background-size:60px 60px;
    }
    .cfl-grid-shine {
      position:absolute; inset:0;
      background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(108,62,255,.07), transparent);
    }

    /* scan line */
    .cfl-scanline {
      position:absolute; left:0; right:0; height:2px;
      background:linear-gradient(90deg,transparent,rgba(108,62,255,.6),rgba(0,200,255,.6),transparent);
      animation:cfl-scan 3s ease-in-out infinite;
      filter:blur(1px);
    }
    @keyframes cfl-scan { 0%{top:-5%} 100%{top:105%} }

    /* particles */
    .cfl-pts { position:absolute; inset:0; pointer-events:none; }
    .cfl-pt {
      position:absolute; border-radius:50%; opacity:0;
      animation:cfl-pt-anim linear infinite;
    }
    @keyframes cfl-pt-anim {
      0%{opacity:0;transform:translateY(0) scale(1)} 20%{opacity:.8} 100%{opacity:0;transform:translateY(-160px) scale(0)}
    }

    /* floating math symbols */
    .cfl-math-symbols { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
    .cfl-sym {
      position:absolute;
      font-family:'JetBrains Mono',monospace;
      color:rgba(108,62,255,.12); font-weight:600;
      animation:cfl-sym-float linear infinite;
      user-select:none;
    }
    @keyframes cfl-sym-float {
      0%{transform:translateY(110vh) rotate(0deg);opacity:0}
      10%{opacity:1}
      90%{opacity:.4}
      100%{transform:translateY(-20vh) rotate(360deg);opacity:0}
    }

    /* content */
    .cfl-content {
      position:relative; z-index:2;
      display:flex; flex-direction:column; align-items:center; gap:0;
    }

    /* logo */
    .cfl-logo-wrap {
      position:relative; margin-bottom:40px;
      animation:cfl-in 1.1s cubic-bezier(.22,1,.36,1) both;
    }
    @keyframes cfl-in { from{opacity:0;transform:scale(.4) rotate(-20deg)} to{opacity:1;transform:scale(1) rotate(0)} }

    .cfl-ring1 {
      position:absolute; border-radius:50%;
      border:1.5px solid rgba(108,62,255,.35);
      animation:cfl-spin 5s linear infinite;
    }
    .cfl-ring1.r1 { inset:-18px; }
    .cfl-ring1.r2 { inset:-32px; border-color:rgba(0,200,255,.2); animation-duration:9s; animation-direction:reverse; border-style:dashed; }
    .cfl-ring1.r3 { inset:-46px; border-color:rgba(255,58,170,.12); animation-duration:14s; }

    .cfl-ring1::after {
      content:''; position:absolute; width:8px;height:8px; border-radius:50%;
      background:linear-gradient(135deg,#6c3eff,#00c8ff);
      top:-4px; left:50%; transform:translateX(-50%);
      box-shadow:0 0 8px #6c3eff;
    }
    .cfl-ring1.r2::after { background:linear-gradient(135deg,#00c8ff,#00ffaa); box-shadow:0 0 8px #00c8ff; width:6px;height:6px;top:-3px; }
    .cfl-ring1.r3::after { display:none; }

    @keyframes cfl-spin { to{transform:rotate(360deg)} }

    .cfl-logo {
      width:110px; height:110px; border-radius:30px;
      background:linear-gradient(135deg,#6c3eff 0%,#3a8fff 50%,#00c8ff 100%);
      display:flex; align-items:center; justify-content:center;
      font-size:52px; font-weight:900; color:#fff;
      box-shadow:
        0 0 60px rgba(108,62,255,.6),
        0 0 120px rgba(108,62,255,.25),
        0 0 200px rgba(108,62,255,.1),
        inset 0 1px 0 rgba(255,255,255,.3);
      position:relative; z-index:2;
    }
    .cfl-logo::after {
      content:''; position:absolute; inset:0; border-radius:30px;
      background:linear-gradient(135deg,rgba(255,255,255,.15) 0%,transparent 50%);
    }

    /* title */
    .cfl-title {
      font-size:clamp(72px,13vw,108px);
      font-weight:900; letter-spacing:-5px; line-height:1;
      background:linear-gradient(135deg,#fff 20%,#c0a0ff 55%,#00c8ff 90%);
      -webkit-background-clip:text; -webkit-text-fill-color:transparent;
      margin-bottom:6px;
      animation:cfl-in .9s .25s cubic-bezier(.22,1,.36,1) both;
      filter:drop-shadow(0 0 40px rgba(108,62,255,.4));
    }
    .cfl-tagline {
      font-size:13px; color:rgba(255,255,255,.3); letter-spacing:5px;
      text-transform:uppercase; font-weight:400; margin-bottom:8px;
      animation:cfl-in .9s .4s cubic-bezier(.22,1,.36,1) both;
    }
    .cfl-tagline2 {
      font-size:11px; color:rgba(108,62,255,.5); letter-spacing:3px;
      text-transform:uppercase; font-family:'JetBrains Mono',monospace;
      margin-bottom:56px;
      animation:cfl-in .9s .55s cubic-bezier(.22,1,.36,1) both;
    }

    /* modules checklist */
    .cfl-modules {
      display:flex; gap:8px; flex-wrap:wrap; justify-content:center;
      max-width:440px; margin-bottom:40px;
      animation:cfl-in .9s .6s cubic-bezier(.22,1,.36,1) both;
    }
    .cfl-mod {
      display:flex; align-items:center; gap:6px;
      background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.07);
      border-radius:8px; padding:5px 10px;
      font-size:10.5px; color:rgba(255,255,255,.3);
      font-family:'JetBrains Mono',monospace; letter-spacing:.5px;
      transition:all .3s;
    }
    .cfl-mod.done { color:rgba(0,255,170,.7); border-color:rgba(0,255,170,.2); background:rgba(0,255,170,.05); }
    .cfl-mod.active { color:rgba(108,62,255,.9); border-color:rgba(108,62,255,.4); background:rgba(108,62,255,.08); animation:cfl-mod-pulse .8s ease infinite; }
    @keyframes cfl-mod-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(108,62,255,.3)} 50%{box-shadow:0 0 0 4px rgba(108,62,255,.0)} }
    .cfl-mod-icon { font-size:12px; }

    /* progress */
    .cfl-progress {
      width:min(380px,80vw);
      animation:cfl-in .9s .7s cubic-bezier(.22,1,.36,1) both;
    }
    .cfl-pbar-wrap {
      height:4px; background:rgba(255,255,255,.06);
      border-radius:99px; overflow:hidden; margin-bottom:14px;
      position:relative;
    }
    .cfl-pbar-fill {
      height:100%; width:0;
      background:linear-gradient(90deg,#6c3eff,#3a8fff,#00c8ff);
      border-radius:99px; transition:width .3s ease;
      box-shadow:0 0 16px rgba(108,62,255,.9), 0 0 30px rgba(0,200,255,.4);
      position:relative;
    }
    .cfl-pbar-fill::after {
      content:''; position:absolute; right:0; top:50%;
      width:10px; height:10px; border-radius:50%;
      background:#fff;
      transform:translate(50%,-50%);
      box-shadow:0 0 8px #fff, 0 0 16px #6c3eff;
    }
    .cfl-pbar-glow {
      position:absolute; inset:0;
      background:linear-gradient(90deg,transparent,rgba(108,62,255,.15),transparent);
      animation:cfl-glow-sweep 2s ease infinite;
    }
    @keyframes cfl-glow-sweep { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
    .cfl-prow { display:flex; justify-content:space-between; align-items:center; }
    .cfl-ptext { font-size:11px; color:rgba(255,255,255,.28); font-family:'JetBrains Mono',monospace; letter-spacing:.5px; }
    .cfl-ppct { font-size:13px; color:#a080ff; font-family:'JetBrains Mono',monospace; font-weight:700; }

    /* credit */
    .cfl-credit {
      position:absolute; bottom:28px;
      display:flex; flex-direction:column; align-items:center; gap:4px;
      animation:cfl-in .9s 1s both;
    }
    .cfl-credit-by { font-size:10px; color:rgba(255,255,255,.15); letter-spacing:3px; text-transform:uppercase; font-family:'JetBrains Mono',monospace; }
    .cfl-credit-name { font-size:16px; font-weight:700; letter-spacing:2px; text-transform:uppercase; background:linear-gradient(90deg,#6c3eff,#00c8ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    .cfl-credit-line { width:40px; height:1px; background:linear-gradient(90deg,transparent,rgba(108,62,255,.5),transparent); }

    /* version badge */
    .cfl-badge {
      position:absolute; top:28px; right:28px;
      background:rgba(108,62,255,.12); border:1px solid rgba(108,62,255,.3);
      border-radius:8px; padding:5px 12px;
      font-size:10px; color:rgba(108,62,255,.8); letter-spacing:2px;
      font-family:'JetBrains Mono',monospace; text-transform:uppercase;
      animation:cfl-in .9s 1.2s both;
    }

    /* ═══ MAIN WINDOW ═══ */
    #clei-root {
      position:fixed; z-index:2147483647;
      width:480px; height:680px;
      bottom:28px; right:28px;
      font-family:'Outfit',sans-serif; user-select:none;
      display:none;
    }
    #clei-root.visible { display:block; animation:clei-win-in .5s cubic-bezier(.22,1,.36,1); }
    @keyframes clei-win-in { from{opacity:0;transform:translateY(30px) scale(.95)} to{opacity:1;transform:none} }
    #clei-root.minimized { height:auto!important; }
    #clei-root.minimized #clei-body,
    #clei-root.minimized #clei-tabs { display:none!important; }

    #clei-window {
      width:100%; height:100%;
      background:#07070f;
      border:1px solid rgba(108,62,255,.3);
      border-radius:22px;
      display:flex; flex-direction:column; overflow:hidden;
      box-shadow:
        0 0 0 1px rgba(255,255,255,.04),
        0 40px 100px rgba(0,0,0,.85),
        0 0 100px rgba(108,62,255,.14),
        inset 0 1px 0 rgba(255,255,255,.07);
    }

    /* header */
    #clei-header {
      display:flex; align-items:center; gap:12px;
      padding:15px 16px 14px;
      background:linear-gradient(180deg,rgba(108,62,255,.1),transparent);
      border-bottom:1px solid rgba(255,255,255,.05);
      cursor:grab; flex-shrink:0; position:relative;
    }
    #clei-header::after {
      content:''; position:absolute; inset-x:0; bottom:0; height:1px;
      background:linear-gradient(90deg,transparent,rgba(108,62,255,.5),rgba(0,200,255,.4),transparent);
    }
    #clei-header:active { cursor:grabbing; }

    .ch-avatar {
      width:40px; height:40px; border-radius:12px; flex-shrink:0;
      background:linear-gradient(135deg,#6c3eff,#00c8ff);
      display:flex; align-items:center; justify-content:center;
      font-size:17px; font-weight:900; color:#fff;
      box-shadow:0 4px 16px rgba(108,62,255,.45);
    }
    .ch-info { flex:1; }
    .ch-name { font-size:15px; font-weight:700; color:#fff; letter-spacing:.3px; }
    .ch-desc { font-size:10.5px; color:rgba(255,255,255,.3); font-family:'JetBrains Mono',monospace; }
    .ch-desc .dot { display:inline-block; width:5px;height:5px; border-radius:50%; background:#00ff88; margin-right:5px; vertical-align:middle; animation:chblink 2s infinite; }
    @keyframes chblink{0%,100%{opacity:1}50%{opacity:.2}}

    .ch-controls { display:flex; gap:6px; }
    .ch-btn {
      width:30px;height:30px; border-radius:9px;
      border:1px solid rgba(255,255,255,.08);
      background:rgba(255,255,255,.04); color:rgba(255,255,255,.35);
      cursor:pointer; display:flex; align-items:center; justify-content:center;
      font-size:13px; transition:all .15s; flex-shrink:0;
    }
    .ch-btn:hover { background:rgba(255,255,255,.1); color:rgba(255,255,255,.8); }
    .ch-btn.red:hover { background:rgba(255,60,100,.15); color:#ff6080; border-color:rgba(255,60,100,.3); }

    /* tabs */
    #clei-tabs {
      display:flex; flex-shrink:0;
      background:rgba(255,255,255,.02);
      border-bottom:1px solid rgba(255,255,255,.05); padding:0 6px;
    }
    .ct {
      flex:1; padding:11px 4px; text-align:center;
      font-size:10px; font-weight:600; letter-spacing:1px; text-transform:uppercase;
      color:rgba(255,255,255,.25); cursor:pointer; border-bottom:2px solid transparent;
      transition:all .2s; font-family:'JetBrains Mono',monospace;
    }
    .ct:hover { color:rgba(255,255,255,.5); }
    .ct.active { color:#b090ff; border-bottom-color:#7c4fff; }

    /* body */
    #clei-body { flex:1; overflow:hidden; display:flex; flex-direction:column; }
    .cp { display:none; flex:1; flex-direction:column; overflow:hidden; }
    .cp.active { display:flex; }

    /* messages */
    #clei-msgs {
      flex:1; overflow-y:auto; padding:18px 16px;
      display:flex; flex-direction:column; gap:16px;
      scrollbar-width:thin; scrollbar-color:rgba(108,62,255,.3) transparent;
    }
    #clei-msgs::-webkit-scrollbar { width:3px; }
    #clei-msgs::-webkit-scrollbar-thumb { background:rgba(108,62,255,.4); border-radius:99px; }

    .cmsg { display:flex; gap:10px; align-items:flex-end; animation:cmsg-in .3s cubic-bezier(.22,1,.36,1); }
    @keyframes cmsg-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
    .cmsg.user { flex-direction:row-reverse; }

    .cmsg-av {
      width:30px;height:30px; border-radius:10px; flex-shrink:0;
      display:flex; align-items:center; justify-content:center;
      font-size:11px; font-weight:700;
    }
    .cmsg.bot .cmsg-av { background:linear-gradient(135deg,#6c3eff,#00c8ff); color:#fff; box-shadow:0 4px 12px rgba(108,62,255,.35); }
    .cmsg.user .cmsg-av { background:rgba(108,62,255,.15); color:#a080ff; border:1px solid rgba(108,62,255,.3); }

    .cmsg-bub {
      max-width:82%; padding:13px 16px;
      border-radius:16px; font-size:13.5px; line-height:1.7;
      font-family:'JetBrains Mono',monospace; user-select:text;
    }
    .cmsg.bot .cmsg-bub {
      background:rgba(255,255,255,.04); color:#c8d4ff;
      border:1px solid rgba(255,255,255,.07); border-bottom-left-radius:4px;
    }
    .cmsg.user .cmsg-bub {
      background:linear-gradient(135deg,rgba(108,62,255,.2),rgba(0,200,255,.1));
      color:#e2eaff; border:1px solid rgba(108,62,255,.3); border-bottom-right-radius:4px;
    }

    /* ── AI reply formatting ── */
    .ai-reply { display:flex; flex-direction:column; gap:10px; }

    .ai-header {
      display:flex; align-items:center; gap:8px;
      padding-bottom:8px;
      border-bottom:1px solid rgba(255,255,255,.06);
    }
    .ai-header-icon {
      width:24px;height:24px; border-radius:7px;
      background:linear-gradient(135deg,#6c3eff,#00c8ff);
      display:flex;align-items:center;justify-content:center;
      font-size:11px; flex-shrink:0;
    }
    .ai-header-title { font-size:10px; color:rgba(255,255,255,.3); letter-spacing:1.5px; text-transform:uppercase; font-family:'Outfit',sans-serif; }
    .ai-header-badge { margin-left:auto; font-size:9px; color:rgba(108,62,255,.7); background:rgba(108,62,255,.1); border:1px solid rgba(108,62,255,.2); border-radius:5px; padding:2px 7px; letter-spacing:1px; font-family:'JetBrains Mono',monospace; }

    .ai-section { display:flex; flex-direction:column; gap:5px; }
    .ai-section-label {
      font-size:9.5px; color:rgba(108,62,255,.7); letter-spacing:2px; text-transform:uppercase;
      font-family:'Outfit',sans-serif; font-weight:700;
      display:flex; align-items:center; gap:6px;
    }
    .ai-section-label::after { content:''; flex:1; height:1px; background:rgba(108,62,255,.15); }

    .ai-text { font-size:13px; color:rgba(200,215,255,.8); line-height:1.75; font-family:'Outfit',sans-serif; }

    .ai-steps { display:flex; flex-direction:column; gap:6px; }
    .ai-step {
      display:flex; gap:10px; align-items:flex-start;
      background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05);
      border-radius:10px; padding:9px 12px;
    }
    .ai-step-num {
      width:20px;height:20px; border-radius:6px; flex-shrink:0;
      background:rgba(108,62,255,.2); border:1px solid rgba(108,62,255,.3);
      display:flex;align-items:center;justify-content:center;
      font-size:10px; font-weight:700; color:#a080ff;
      font-family:'Outfit',sans-serif;
    }
    .ai-step-text { font-size:12.5px; color:rgba(190,205,255,.75); line-height:1.65; font-family:'Outfit',sans-serif; flex:1; }
    .ai-step-text code {
      background:rgba(108,62,255,.15); padding:1px 6px; border-radius:4px;
      color:#c0a8ff; font-family:'JetBrains Mono',monospace; font-size:11.5px;
      border:1px solid rgba(108,62,255,.2);
    }

    .ai-formula-box {
      background:rgba(0,0,0,.3); border:1px solid rgba(108,62,255,.25);
      border-radius:11px; padding:12px 16px;
      font-family:'JetBrains Mono',monospace;
      color:#b0c8ff; font-size:13px; letter-spacing:.3px;
      text-align:center; line-height:1.6;
      position:relative; overflow:hidden;
    }
    .ai-formula-box::before {
      content:''; position:absolute; inset:0;
      background:linear-gradient(135deg,rgba(108,62,255,.06),rgba(0,200,255,.04));
    }

    .ai-result-box {
      background:linear-gradient(135deg,rgba(108,62,255,.15),rgba(0,200,255,.08));
      border:1px solid rgba(108,62,255,.35);
      border-radius:12px; padding:14px 18px;
      position:relative; overflow:hidden;
    }
    .ai-result-box::before {
      content:''; position:absolute; inset:0;
      background:linear-gradient(135deg,rgba(255,255,255,.03),transparent);
    }
    .ai-result-box::after {
      content:'RESULTADO'; position:absolute; top:8px; right:10px;
      font-size:8px; color:rgba(108,62,255,.5); letter-spacing:2px;
      font-family:'JetBrains Mono',monospace;
    }
    .ai-result-label { font-size:9px; color:rgba(0,200,255,.5); letter-spacing:2px; text-transform:uppercase; font-family:'JetBrains Mono',monospace; margin-bottom:5px; }
    .ai-result-value { font-size:18px; font-weight:700; color:#a8f0ff; font-family:'JetBrains Mono',monospace; line-height:1.3; }

    .ai-concept {
      background:rgba(255,255,255,.02); border-left:3px solid rgba(108,62,255,.4);
      border-radius:0 10px 10px 0; padding:10px 14px;
    }
    .ai-concept-title { font-size:10px; color:rgba(108,62,255,.7); letter-spacing:1.5px; text-transform:uppercase; margin-bottom:5px; font-family:'Outfit',sans-serif; font-weight:700; }
    .ai-concept-text { font-size:12px; color:rgba(180,195,255,.55); line-height:1.7; font-family:'Outfit',sans-serif; }

    /* typing */
    .ctyping { display:flex; gap:5px; align-items:center; padding:3px 0; }
    .ctyping span { width:7px;height:7px; border-radius:50%; animation:ctdot 1.3s infinite; }
    .ctyping span:nth-child(1){background:#6c3eff}
    .ctyping span:nth-child(2){background:#3a8fff;animation-delay:.18s}
    .ctyping span:nth-child(3){background:#00c8ff;animation-delay:.36s}
    @keyframes ctdot{0%,100%{transform:scale(.65);opacity:.3}50%{transform:scale(1.1);opacity:1}}

    /* input area */
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
    #clei-inp:focus { border-color:rgba(108,62,255,.45); background:rgba(108,62,255,.06); }

    #clei-send-btn {
      width:44px;height:44px; border-radius:14px; border:none; cursor:pointer;
      background:linear-gradient(135deg,#6c3eff,#3a8fff,#00c8ff);
      color:#fff; font-size:18px; flex-shrink:0;
      display:flex;align-items:center;justify-content:center;
      transition:all .15s; box-shadow:0 4px 20px rgba(108,62,255,.45);
    }
    #clei-send-btn:hover { transform:scale(1.07); box-shadow:0 6px 24px rgba(108,62,255,.65); }
    #clei-send-btn:active { transform:scale(.93); }
    #clei-send-btn:disabled { opacity:.35; transform:none; box-shadow:none; cursor:default; }

    /* calculator */
    #clei-panel-calc { padding:14px; gap:12px; }
    .cc-display {
      background:rgba(0,0,0,.45); border:1px solid rgba(255,255,255,.07);
      border-radius:16px; padding:16px 20px; text-align:right;
      background-image:linear-gradient(135deg,rgba(108,62,255,.05),rgba(0,200,255,.03));
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
      transition:all .12s; font-family:'Outfit',sans-serif; position:relative; overflow:hidden;
    }
    .ck:hover { background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.1); }
    .ck:active { transform:scale(.9); }
    .ck.fn { color:#b090ff; background:rgba(108,62,255,.08); border-color:rgba(108,62,255,.18); }
    .ck.op { color:#60d4ff; background:rgba(0,200,255,.06); border-color:rgba(0,200,255,.18); }
    .ck.clr { color:#ff7090; background:rgba(255,60,100,.06); border-color:rgba(255,60,100,.18); }
    .ck.br { color:#ffcc60; background:rgba(255,200,60,.06); border-color:rgba(255,200,60,.18); }
    .ck.eq { background:linear-gradient(135deg,#6c3eff,#3a8fff,#00c8ff); color:#fff; border:none; grid-row:span 2; box-shadow:0 4px 20px rgba(108,62,255,.4); font-size:22px; }
    .ck.zero { grid-column:span 2; }

    /* history */
    .chp { padding:12px; display:flex; flex-direction:column; gap:8px; overflow-y:auto; flex:1; scrollbar-width:thin; scrollbar-color:rgba(108,62,255,.3) transparent; }
    .chi { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); border-radius:13px; padding:11px 14px; cursor:pointer; transition:all .15s; }
    .chi:hover { border-color:rgba(108,62,255,.35); background:rgba(108,62,255,.06); }
    .chi-q { font-size:11.5px; color:rgba(255,255,255,.35); font-family:'JetBrains Mono',monospace; }
    .chi-r { font-size:15px; font-weight:600; color:#80d4ff; font-family:'JetBrains Mono',monospace; }
    .chi-ts { font-size:10px; color:rgba(255,255,255,.18); font-family:'JetBrains Mono',monospace; }
    .chi-empty { text-align:center; color:rgba(255,255,255,.2); font-size:13px; margin-top:50px; font-family:'JetBrains Mono',monospace; }
    .ch-clear { margin:0 12px 12px; padding:9px; border-radius:10px; border:1px solid rgba(255,60,100,.2); background:rgba(255,60,100,.05); color:rgba(255,100,120,.6); font-size:11px; cursor:pointer; text-align:center; font-family:'JetBrains Mono',monospace; transition:all .15s; flex-shrink:0; }
    .ch-clear:hover { background:rgba(255,60,100,.12); color:#ff7090; }

    /* formulas */
    .cfp { padding:12px; display:flex; flex-direction:column; gap:8px; overflow-y:auto; flex:1; scrollbar-width:thin; scrollbar-color:rgba(108,62,255,.3) transparent; }
    .cf-cat { font-size:9px; color:rgba(255,255,255,.25); letter-spacing:2px; text-transform:uppercase; font-family:'JetBrains Mono',monospace; padding:0 2px; margin-top:8px; }
    .cf-card { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); border-radius:13px; padding:12px 14px; cursor:pointer; transition:all .15s; }
    .cf-card:hover { border-color:rgba(108,62,255,.4); background:rgba(108,62,255,.07); transform:translateX(3px); }
    .cf-title { font-size:12px; color:rgba(160,140,255,.8); font-weight:600; margin-bottom:5px; }
    .cf-expr { font-size:13.5px; color:#a8c8ff; font-family:'JetBrains Mono',monospace; }
    .cf-desc { font-size:10.5px; color:rgba(255,255,255,.25); margin-top:4px; }

    /* about */
    .cab { padding:20px 16px; flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:16px; }
    .cab-logo-row { display:flex; align-items:center; gap:14px; }
    .cab-big-logo { width:60px;height:60px; border-radius:18px; background:linear-gradient(135deg,#6c3eff,#00c8ff); display:flex;align-items:center;justify-content:center; font-size:26px; font-weight:900; color:#fff; box-shadow:0 8px 24px rgba(108,62,255,.45); }
    .cab-name { font-size:26px; font-weight:800; color:#fff; }
    .cab-ver { font-size:11px; color:rgba(108,62,255,.7); font-family:'JetBrains Mono',monospace; }
    .cab-desc { font-size:13px; color:rgba(255,255,255,.4); line-height:1.7; }
    .cab-feats { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
    .cab-feat { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); border-radius:11px; padding:10px 12px; }
    .cab-feat-icon { font-size:18px; margin-bottom:4px; }
    .cab-feat-name { font-size:11px; font-weight:600; color:rgba(180,160,255,.8); }
    .cab-feat-sub { font-size:10px; color:rgba(255,255,255,.25); }
    .cab-credit-box { background:linear-gradient(135deg,rgba(108,62,255,.1),rgba(0,200,255,.06)); border:1px solid rgba(108,62,255,.25); border-radius:13px; padding:14px 16px; }
    .cab-by { font-size:10px; color:rgba(255,255,255,.25); letter-spacing:2px; text-transform:uppercase; font-family:'JetBrains Mono',monospace; }
    .cab-cname { font-size:20px; font-weight:800; color:#fff; margin-top:2px; }
    .cab-cname span { background:linear-gradient(90deg,#6c3eff,#00c8ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    .cab-csub { font-size:11px; color:rgba(255,255,255,.25); margin-top:2px; }

    /* resize */
    #clei-rh { position:absolute; bottom:0;right:0; width:20px;height:20px; cursor:nwse-resize; }
    #clei-rh::before { content:''; position:absolute; bottom:5px;right:5px; border-right:2px solid rgba(108,62,255,.4); border-bottom:2px solid rgba(108,62,255,.4); width:9px;height:9px; }
  `;
  document.head.appendChild(GST);

  /* ══════════════════════════════════════════════════════
     FULLSCREEN LOADER BUILD
  ══════════════════════════════════════════════════════ */
  const loader = document.createElement('div');
  loader.id = 'clei-fullscreen-loader';

  // floating math symbols
  const mathSymbols = ['∑','∫','π','√','∞','∂','Δ','α','β','γ','θ','λ','σ','∇','∮','≈','≠','±','×','÷','²','³','⁴','ℝ','ℕ','∈'];
  let symHtml = '';
  for (let i = 0; i < 22; i++) {
    const sym = mathSymbols[i % mathSymbols.length];
    const x = Math.random() * 100;
    const size = 14 + Math.random() * 28;
    const dur = 8 + Math.random() * 14;
    const delay = Math.random() * 12;
    symHtml += `<div class="cfl-sym" style="left:${x}%;font-size:${size}px;animation-duration:${dur}s;animation-delay:${delay}s">${sym}</div>`;
  }

  // particles
  let pHtml = '';
  const pColors = ['#6c3eff','#3a8fff','#00c8ff','#a060ff','#00ffaa'];
  for (let i = 0; i < 24; i++) {
    const x = Math.random() * 100, delay = Math.random() * 4, dur = 2.5 + Math.random() * 3;
    const size = 2 + Math.random() * 5, color = pColors[Math.floor(Math.random() * pColors.length)];
    pHtml += `<div class="cfl-pt" style="left:${x}%;bottom:${5+Math.random()*40}%;width:${size}px;height:${size}px;background:${color};animation-duration:${dur}s;animation-delay:${delay}s"></div>`;
  }

  const modules = [
    { icon:'🔢', label:'Álgebra' },
    { icon:'∫', label:'Cálculo' },
    { icon:'📐', label:'Geometria' },
    { icon:'📊', label:'Estatística' },
    { icon:'🔁', label:'Sequências' },
    { icon:'💰', label:'Finanças' },
  ];

  loader.innerHTML = `
    <div class="cfl-bg">
      <div class="cfl-orb a"></div>
      <div class="cfl-orb b"></div>
      <div class="cfl-orb c"></div>
      <div class="cfl-orb d"></div>
      <div class="cfl-grid"></div>
      <div class="cfl-grid-shine"></div>
      <div class="cfl-scanline"></div>
      <div class="cfl-pts">${pHtml}</div>
      <div class="cfl-math-symbols">${symHtml}</div>
    </div>
    <div class="cfl-badge">v2.0 · Math Engine</div>
    <div class="cfl-content">
      <div class="cfl-logo-wrap">
        <div class="cfl-ring1 r1"></div>
        <div class="cfl-ring1 r2"></div>
        <div class="cfl-ring1 r3"></div>
        <div class="cfl-logo">C</div>
      </div>
      <div class="cfl-title">CLEI</div>
      <div class="cfl-tagline">Inteligência Matemática Avançada</div>
      <div class="cfl-tagline2">Powered by Plascoy · OpenRouter AI</div>
      <div class="cfl-modules" id="cfl-mods">
        ${modules.map(m => `<div class="cfl-mod" data-label="${m.label}"><span class="cfl-mod-icon">${m.icon}</span>${m.label}</div>`).join('')}
      </div>
      <div class="cfl-progress">
        <div class="cfl-pbar-wrap">
          <div class="cfl-pbar-fill" id="cfl-fill"></div>
          <div class="cfl-pbar-glow"></div>
        </div>
        <div class="cfl-prow">
          <div class="cfl-ptext" id="cfl-txt">Inicializando...</div>
          <div class="cfl-ppct" id="cfl-pct">0%</div>
        </div>
      </div>
    </div>
    <div class="cfl-credit">
      <div class="cfl-credit-line"></div>
      <div class="cfl-credit-by">Criado por</div>
      <div class="cfl-credit-name">Plascoy</div>
    </div>
  `;
  document.body.appendChild(loader);

  // Loader animation
  const fill = document.getElementById('cfl-fill');
  const txt  = document.getElementById('cfl-txt');
  const pct  = document.getElementById('cfl-pct');
  const mods = document.querySelectorAll('.cfl-mod');

  const ldSteps = [
    [8,  'Inicializando núcleo matemático...', -1],
    [18, 'Carregando motor de álgebra...', 0],
    [30, 'Compilando fórmulas de cálculo...', 1],
    [44, 'Carregando geometria e trigonometria...', 2],
    [57, 'Inicializando módulo de estatística...', 3],
    [68, 'Configurando progressões e sequências...', 4],
    [78, 'Carregando módulo financeiro...', 5],
    [87, 'Conectando à OpenRouter AI...', -1],
    [93, 'Configurando interface neural...', -1],
    [100,'Clei está pronta!', -1],
  ];
  let si = 0;
  function nextLd() {
    if (si >= ldSteps.length) return;
    const [p, t, modIdx] = ldSteps[si++];
    fill.style.width = p + '%';
    txt.textContent = t;
    pct.textContent = p + '%';
    mods.forEach(m => m.classList.remove('active'));
    if (modIdx >= 0 && mods[modIdx]) {
      mods[modIdx].classList.add('active');
      if (si > 2) mods[modIdx - 1] && mods[modIdx-1].classList.add('done');
    }
    // mark all done at end
    if (p === 100) mods.forEach(m => { m.classList.remove('active'); m.classList.add('done'); });
    setTimeout(nextLd, si <= ldSteps.length ? 280 + Math.random() * 240 : 0);
  }
  setTimeout(nextLd, 350);

  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => { loader.remove(); root.classList.add('visible'); initWelcome(); }, 900);
  }, 3800);

  /* ══════════════════════════════════════════════════════
     MAIN WINDOW HTML
  ══════════════════════════════════════════════════════ */
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
          <button class="ch-btn" id="ch-min">▬</button>
          <button class="ch-btn red" id="ch-close">✕</button>
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
        <div class="cp active" id="clei-panel-chat">
          <div id="clei-msgs"></div>
          <div id="clei-inp-area">
            <div class="cq-row">
              <button class="cq" data-q="Resolva x² + 8x + 12 = 0">Bhaskara</button>
              <button class="cq" data-q="Derivada de 4x³ + 2x² - 5x + 1">Derivada</button>
              <button class="cq" data-q="Integral de 3x² + 6x dx">Integral</button>
              <button class="cq" data-q="Calcule 18% de 450">Porcentagem</button>
              <button class="cq" data-q="Área e perímetro de círculo com r=8">Círculo</button>
              <button class="cq" data-q="Média de 15, 22, 37, 44, 8">Estatística</button>
              <button class="cq" data-q="Fatorial de 10">Fatorial</button>
              <button class="cq" data-q="Sequência Fibonacci com 12 termos">Fibonacci</button>
            </div>
            <div class="cinp-row">
              <textarea id="clei-inp" placeholder="Ex: resolva 2x² + 5x - 3 = 0, derivada de 3x²..." rows="1"></textarea>
              <button id="clei-send-btn">➤</button>
            </div>
          </div>
        </div>

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
            <button class="ck op" data-k="/">÷</button>
            <button class="ck" data-k="4">4</button>
            <button class="ck" data-k="5">5</button>
            <button class="ck" data-k="6">6</button>
            <button class="ck op" data-k="*">×</button>
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

        <div class="cp" id="clei-panel-history">
          <div class="chp" id="clei-hist-list"></div>
          <button class="ch-clear" id="ch-clear-btn">🗑 Limpar Histórico</button>
        </div>

        <div class="cp" id="clei-panel-formulas">
          <div class="cfp" id="clei-form-list"></div>
        </div>

        <div class="cp" id="clei-panel-about">
          <div class="cab">
            <div class="cab-logo-row">
              <div class="cab-big-logo">C</div>
              <div><div class="cab-name">Clei</div><div class="cab-ver">v2.0 · MATH AI ENGINE</div></div>
            </div>
            <div class="cab-desc">IA matemática avançada com motor simbólico local e integração com OpenRouter AI, capaz de resolver qualquer problema matemático com explicações passo a passo.</div>
            <div class="cab-feats">
              <div class="cab-feat"><div class="cab-feat-icon">🔢</div><div class="cab-feat-name">Álgebra</div><div class="cab-feat-sub">Equações 1º, 2º grau e sistemas</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">∫</div><div class="cab-feat-name">Cálculo</div><div class="cab-feat-sub">Derivadas e integrais</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">📐</div><div class="cab-feat-name">Geometria</div><div class="cab-feat-sub">Áreas, volumes e ângulos</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">📊</div><div class="cab-feat-name">Estatística</div><div class="cab-feat-sub">Média, mediana, desvio padrão</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">🔁</div><div class="cab-feat-name">Sequências</div><div class="cab-feat-sub">PA, PG e Fibonacci</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">💰</div><div class="cab-feat-name">Finanças</div><div class="cab-feat-sub">Juros simples e compostos</div></div>
            </div>
            <div class="cab-credit-box">
              <div class="cab-by">Criado por</div>
              <div class="cab-cname"><span>Plascoy</span></div>
              <div class="cab-csub">Tecnologia · Inovação · Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="clei-rh"></div>
  `;
  document.body.appendChild(root);

  /* ══════════════════════════════════════════════════════
     REFS & EVENTS
  ══════════════════════════════════════════════════════ */
  const $ = id => document.getElementById(id);
  const msgs = $('clei-msgs');
  const inp  = $('clei-inp');
  const sendBtn = $('clei-send-btn');

  $('ch-min').addEventListener('click', () => root.classList.toggle('minimized'));
  $('ch-close').addEventListener('click', () => {
    root.style.transition = 'opacity .3s,transform .3s';
    root.style.opacity = '0'; root.style.transform = 'scale(.92) translateY(20px)';
    setTimeout(() => root.remove(), 300);
  });

  document.querySelectorAll('.ct').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.ct').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.cp').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const p = $('clei-panel-' + t.dataset.t);
      if (p) p.classList.add('active');
      if (t.dataset.t === 'history') renderHistory();
    });
  });

  document.querySelectorAll('.cq').forEach(b => {
    b.addEventListener('click', () => { inp.value = b.dataset.q; sendMessage(); });
  });

  inp.addEventListener('input', () => { inp.style.height = 'auto'; inp.style.height = Math.min(inp.scrollHeight,110)+'px'; });
  inp.addEventListener('keydown', e => { if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();} });
  sendBtn.addEventListener('click', sendMessage);

  /* ══════════════════════════════════════════════════════
     ADD MESSAGE
  ══════════════════════════════════════════════════════ */
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

  /* ══════════════════════════════════════════════════════
     FORMAT AI REPLY  ← NOVO SISTEMA LIMPO
  ══════════════════════════════════════════════════════ */
  function formatAIReply(raw) {
    // clean latex-like tags
    let text = raw
      .replace(/\\\[|\\\]/g, '')       // \[ \]
      .replace(/\\\(|\\\)/g, '')       // \( \)
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
      .replace(/\\pm/g, '±')
      .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
      .replace(/\\cdot/g, '·')
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\[a-zA-Z]+\{([^}]*)\}/g, '$1')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');

    const lines = text.split('\n').map(l => l.trim()).filter(l => l);

    let sections = { ident: [], steps: [], resultado: '', conceito: [], formula: '' };
    let mode = 'ident';

    for (const line of lines) {
      const low = line.toLowerCase();
      if (low.match(/identifica|tipo de problema|problema:/)) { mode = 'ident'; continue; }
      if (low.match(/passo|solu[çc][aã]o|resolu|c[áa]lculo/)) { mode = 'steps'; continue; }
      if (low.match(/resultado|resposta final|raiz|raízes/)) { mode = 'resultado'; continue; }
      if (low.match(/explica|conceito|observa|nota/)) { mode = 'conceito'; continue; }
      if (low.match(/f[oó]rmula/)) { mode = 'formula'; continue; }

      const clean = line.replace(/^[-•*\d]+[.):\s]+/, '').replace(/^Passo\s*\d+\s*[:)\s]/i,'').trim();
      if (!clean) continue;

      if (mode === 'resultado') {
        if (!sections.resultado) sections.resultado = clean;
      } else if (mode === 'formula') {
        sections.formula += (sections.formula ? '\n' : '') + clean;
      } else if (mode === 'steps') {
        sections.steps.push(clean);
      } else if (mode === 'conceito') {
        sections.conceito.push(clean);
      } else {
        sections.ident.push(clean);
      }
    }

    // If no resultado found, try to grab lines with "=" or numbers at end
    if (!sections.resultado) {
      for (const s of sections.steps) {
        if (s.match(/x[₁₂12]?\s*=\s*[-\d]/) || s.match(/=\s*[-\d.,]+\s*$/) ) {
          sections.resultado = s; break;
        }
      }
    }

    let html = `<div class="ai-reply">`;

    // header
    html += `<div class="ai-header">
      <div class="ai-header-icon">✦</div>
      <div class="ai-header-title">Clei · IA Matemática</div>
      <div class="ai-header-badge">by Plascoy</div>
    </div>`;

    // identification
    if (sections.ident.length) {
      html += `<div class="ai-section">
        <div class="ai-section-label">📌 Tipo de Problema</div>
        <div class="ai-text">${sections.ident.join(' ')}</div>
      </div>`;
    }

    // formula
    if (sections.formula) {
      html += `<div class="ai-section">
        <div class="ai-section-label">📐 Fórmula</div>
        <div class="ai-formula-box">${sections.formula.replace(/\n/g,'<br>')}</div>
      </div>`;
    }

    // steps
    if (sections.steps.length) {
      const stepsHtml = sections.steps.map((s, i) =>
        `<div class="ai-step">
          <div class="ai-step-num">${i+1}</div>
          <div class="ai-step-text">${s.replace(/<code>/g,'<code>').replace(/<\/code>/g,'</code>')}</div>
        </div>`
      ).join('');
      html += `<div class="ai-section">
        <div class="ai-section-label">🔢 Resolução Passo a Passo</div>
        <div class="ai-steps">${stepsHtml}</div>
      </div>`;
    }

    // result
    if (sections.resultado) {
      html += `<div class="ai-result-box">
        <div class="ai-result-label">✓ Resultado Final</div>
        <div class="ai-result-value">${sections.resultado}</div>
      </div>`;
    }

    // concept
    if (sections.conceito.length) {
      html += `<div class="ai-concept">
        <div class="ai-concept-title">💡 Conceito</div>
        <div class="ai-concept-text">${sections.conceito.join(' ')}</div>
      </div>`;
    }

    html += `</div>`;
    return html;
  }

  /* ══════════════════════════════════════════════════════
     API + SEND
  ══════════════════════════════════════════════════════ */
  const OR_KEY   = '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';
  const OR_MODEL = 'openai/gpt-4o-mini';
  const OR_SYS   = `Você é a Clei, uma IA matemática avançada criada pela Plascoy.
Responda SEMPRE em português do Brasil.
Estruture sua resposta com EXATAMENTE estas seções separadas por títulos:

**Identificação do tipo de problema:**
[descreva o tipo de problema em 1-2 linhas]

**Fórmula utilizada:**
[escreva a fórmula principal sem LaTeX, use apenas texto simples e Unicode]

**Passo a passo da solução:**
Passo 1: [primeiro passo]
Passo 2: [segundo passo]
Passo 3: [etc...]

**Resultado:**
[escreva apenas o resultado final limpo, ex: x₁ = -2 e x₂ = -6]

**Conceito:**
[explicação didática curta em 2-3 linhas]

IMPORTANTE: NÃO use LaTeX (\\frac, \\sqrt, \\[, \\(). Use apenas Unicode: √, ±, π, ², ³, x₁, x₂, ∑, ∫ etc.
Seja preciso, didático e use somente texto simples com símbolos Unicode.`;

  let calcHistory = JSON.parse(localStorage.getItem('clei_hist_v2') || '[]');

  function initWelcome() {
    const welcomeHtml = `<div class="ai-reply">
      <div class="ai-header">
        <div class="ai-header-icon">✦</div>
        <div class="ai-header-title">Bem-vindo ao Clei v2.0</div>
        <div class="ai-header-badge">by Plascoy</div>
      </div>
      <div class="ai-text">
        Olá! Sou a <strong>Clei</strong>, sua IA matemática avançada. Posso resolver qualquer problema matemático com explicações completas!
      </div>
      <div class="ai-steps">
        <div class="ai-step"><div class="ai-step-num">🔢</div><div class="ai-step-text">Álgebra, equações do 1º e 2º grau, sistemas</div></div>
        <div class="ai-step"><div class="ai-step-num">∫</div><div class="ai-step-text">Cálculo diferencial e integral com passos</div></div>
        <div class="ai-step"><div class="ai-step-num">📐</div><div class="ai-step-text">Geometria, trigonometria e áreas</div></div>
        <div class="ai-step"><div class="ai-step-num">📊</div><div class="ai-step-text">Estatística, probabilidade e progressões</div></div>
      </div>
      <div class="ai-concept">
        <div class="ai-concept-title">💡 Como usar</div>
        <div class="ai-concept-text">Use os botões rápidos acima ou escreva sua pergunta livremente. Quanto mais detalhes você der, melhor será minha resposta!</div>
      </div>
    </div>`;
    addMsg('bot', welcomeHtml);
  }

  async function sendMessage() {
    const q = inp.value.trim();
    if (!q) return;
    inp.value = ''; inp.style.height = 'auto'; sendBtn.disabled = true;
    addMsg('user', q.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
    const typingEl = addMsg('bot', '', true);

    try {
      const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OR_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': location.href,
          'X-Title': 'Clei Math AI by Plascoy'
        },
        body: JSON.stringify({
          model: OR_MODEL,
          messages: [{ role:'system', content:OR_SYS }, { role:'user', content:q }],
          max_tokens: 1400,
          temperature: 0.2
        })
      });

      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const data = await resp.json();
      const aiText = data.choices?.[0]?.message?.content || '';
      typingEl.remove();

      if (aiText) {
        addMsg('bot', formatAIReply(aiText));
        calcHistory.unshift({ q, result: aiText.split('\n').find(l => l.includes('Resultado') || l.match(/x[₁₂]?\s*=/)) || aiText.slice(0,80), ts: new Date().toLocaleString('pt-BR') });
      } else {
        addMsg('bot', buildLocalReply(q));
      }
    } catch (err) {
      typingEl.remove();
      addMsg('bot', buildLocalReply(q) + `<br><div style="margin-top:8px;font-size:10px;color:rgba(255,120,80,.5);font-family:'JetBrains Mono',monospace">⚠ API offline — usando motor local</div>`);
      const { result } = solveMath(q);
      calcHistory.unshift({ q, result, ts: new Date().toLocaleString('pt-BR') });
    }

    if (calcHistory.length > 80) calcHistory.pop();
    localStorage.setItem('clei_hist_v2', JSON.stringify(calcHistory));
    sendBtn.disabled = false;
    inp.focus();
  }

  /* ══════════════════════════════════════════════════════
     LOCAL MATH ENGINE (fallback)
  ══════════════════════════════════════════════════════ */
  function solveMath(q) {
    const t = q.toLowerCase().trim();
    const bh = q.match(/(-?\d*\.?\d*)\s*x[²2]\s*([+\-]\s*\d*\.?\d*)\s*x\s*([+\-]\s*\d*\.?\d*)\s*=\s*0/i);
    if (bh) {
      let a = parseFloat(bh[1].replace(/\s/g,'')||'1')||1;
      let b = parseFloat(bh[2].replace(/\s/g,''))||0;
      let c = parseFloat(bh[3].replace(/\s/g,''))||0;
      const D = b*b-4*a*c;
      const steps = [`a=${a}, b=${b}, c=${c}`,`Δ = b²−4ac = ${b}²−4×${a}×${c} = ${D}`];
      if (D<0) return {steps,result:'Δ < 0 → Sem raízes reais'};
      const x1=((-b+Math.sqrt(D))/(2*a)), x2=((-b-Math.sqrt(D))/(2*a));
      steps.push(`x = (−b ± √Δ)/2a = (${-b} ± ${Math.sqrt(D).toFixed(4)})/${2*a}`);
      return {steps, result: D===0?`x = ${x1.toFixed(6)}`:`x₁ = ${x1.toFixed(6)}   |   x₂ = ${x2.toFixed(6)}`};
    }
    const pct = t.match(/(\d+\.?\d*)\s*%\s*de\s*(\d+\.?\d*)/);
    if (pct) { const r=(parseFloat(pct[1])/100)*parseFloat(pct[2]); return {steps:[`(${pct[1]}/100) × ${pct[2]}`],result:r.toFixed(4)}; }
    if (t.includes('fibonacci')) {
      const nm=t.match(/(\d+)/); if(nm){const n=Math.min(parseInt(nm[1]),25); let a=0,b=1,s=[0,1]; for(let i=2;i<n;i++){[a,b]=[b,a+b];s.push(b);} return {steps:['F(n)=F(n−1)+F(n−2)'],result:s.slice(0,n).join(', ')};}
    }
    const fac=t.match(/fatorial\s+de?\s*(\d+)/);
    if(fac){const n=parseInt(fac[1]);if(n<=20){let r=1;for(let i=2;i<=n;i++)r*=i;return{steps:[`${n}!=1×2×...×${n}`],result:`${n}! = ${r}`};}}
    if (t.includes('média')||t.includes('media')) {
      const nums=q.match(/-?\d+\.?\d*/g);
      if(nums&&nums.length>1){const arr=nums.map(Number),sum=arr.reduce((a,b)=>a+b,0),m=sum/arr.length,s=[...arr].sort((a,b)=>a-b),mid=Math.floor(s.length/2),med=s.length%2?s[mid]:(s[mid-1]+s[mid])/2,v=arr.reduce((a,x)=>a+(x-m)**2,0)/arr.length;return{steps:[`Soma=${sum}, n=${arr.length}`],result:`Média=${m.toFixed(4)} | Mediana=${med} | Desvio=${Math.sqrt(v).toFixed(4)}`};}
    }
    try {
      const safe=q.replace(/\^/g,'**').replace(/[^0-9+\-*/().^%\s]/g,'').trim();
      if(safe.length>1){const r=Function('"use strict";return('+safe+')')();if(typeof r==='number'&&isFinite(r))return{steps:[q],result:parseFloat(r.toFixed(10)).toString()};}
    } catch(e){}
    return {steps:[],result:'Não consegui interpretar. Tente perguntas como: "resolva x² + 5x + 6 = 0" ou "derivada de 3x²"'};
  }

  function buildLocalReply(q) {
    const {steps, result} = solveMath(q);
    const stepsHtml = steps.map((s,i)=>`<div class="ai-step"><div class="ai-step-num">${i+1}</div><div class="ai-step-text">${s}</div></div>`).join('');
    return `<div class="ai-reply">
      <div class="ai-header">
        <div class="ai-header-icon">⚡</div>
        <div class="ai-header-title">Motor Local · Clei</div>
        <div class="ai-header-badge">offline mode</div>
      </div>
      ${steps.length?`<div class="ai-section"><div class="ai-section-label">🔢 Resolução</div><div class="ai-steps">${stepsHtml}</div></div>`:''}
      <div class="ai-result-box">
        <div class="ai-result-label">✓ Resultado</div>
        <div class="ai-result-value">${result}</div>
      </div>
    </div>`;
  }

  /* ══════════════════════════════════════════════════════
     CALCULATOR
  ══════════════════════════════════════════════════════ */
  let calcExpr = '';
  const ccE = $('cc-expr'), ccV = $('cc-val');
  document.querySelectorAll('.ck').forEach(btn => {
    btn.addEventListener('click', () => {
      const k = btn.dataset.k;
      if(k==='AC'){calcExpr='';ccV.textContent='0';ccE.textContent='';ccV.className='cc-val';return;}
      if(k==='DEL'){calcExpr=calcExpr.slice(0,-1);ccV.textContent=calcExpr||'0';return;}
      if(k==='='){
        try{
          const safe=calcExpr.replace(/sqrt\(/g,'Math.sqrt(').replace(/log\(/g,'Math.log10(').replace(/ln\(/g,'Math.log(').replace(/sin\(/g,'Math.sin(').replace(/cos\(/g,'Math.cos(').replace(/tan\(/g,'Math.tan(').replace(/\^/g,'**');
          const res=Function('"use strict";return('+safe+')')();
          ccE.textContent=calcExpr+' =';
          const disp=parseFloat(res.toFixed(10));
          ccV.textContent=disp; ccV.className='cc-val';
          calcHistory.unshift({q:calcExpr,result:disp.toString(),ts:new Date().toLocaleString('pt-BR')});
          localStorage.setItem('clei_hist_v2',JSON.stringify(calcHistory));
          calcExpr=disp.toString();
        }catch(e){ccV.textContent='Erro de sintaxe';ccV.className='cc-val error';}
        return;
      }
      calcExpr+=k; ccV.textContent=calcExpr; ccE.textContent=''; ccV.className='cc-val';
    });
  });

  /* ══════════════════════════════════════════════════════
     HISTORY
  ══════════════════════════════════════════════════════ */
  function renderHistory() {
    const el = $('clei-hist-list');
    if(!calcHistory.length){el.innerHTML='<div class="chi-empty">Nenhum cálculo ainda.</div>';return;}
    el.innerHTML = calcHistory.map((h,i)=>`
      <div class="chi" data-i="${i}">
        <div class="chi-ts">${h.ts}</div>
        <div class="chi-q">${h.q}</div>
        <div class="chi-r">= ${(h.result||'').slice(0,60)}</div>
      </div>`).join('');
    el.querySelectorAll('.chi').forEach(item=>{
      item.addEventListener('click',()=>{inp.value=calcHistory[parseInt(item.dataset.i)].q;document.querySelector('[data-t="chat"]').click();});
    });
  }
  $('ch-clear-btn').addEventListener('click',()=>{calcHistory=[];localStorage.removeItem('clei_hist_v2');renderHistory();});

  /* ══════════════════════════════════════════════════════
     FORMULAS
  ══════════════════════════════════════════════════════ */
  const FMLS = [
    {cat:'Álgebra',title:'Bhaskara (2º grau)',expr:'x = (−b ± √Δ) / 2a',desc:'Δ = b² − 4ac'},
    {cat:'Álgebra',title:'Equação 1º grau',expr:'ax + b = c  →  x = (c−b)/a',desc:''},
    {cat:'Geometria',title:'Área do círculo',expr:'A = π · r²',desc:''},
    {cat:'Geometria',title:'Perímetro do círculo',expr:'P = 2 · π · r',desc:''},
    {cat:'Geometria',title:'Área do triângulo',expr:'A = (base · altura) / 2',desc:''},
    {cat:'Geometria',title:'Teorema de Pitágoras',expr:'c² = a² + b²',desc:'triângulo retângulo'},
    {cat:'Geometria',title:'Volume da esfera',expr:'V = (4/3) · π · r³',desc:''},
    {cat:'Geometria',title:'Volume do cilindro',expr:'V = π · r² · h',desc:''},
    {cat:'Cálculo',title:'Derivada — potência',expr:"d/dx(xⁿ) = n · xⁿ⁻¹",desc:''},
    {cat:'Cálculo',title:'Derivada — produto',expr:"(fg)' = f'g + fg'",desc:''},
    {cat:'Cálculo',title:'Integral — potência',expr:'∫xⁿ dx = xⁿ⁺¹/(n+1) + C',desc:'n ≠ −1'},
    {cat:'Trigonometria',title:'Seno',expr:'sen(θ) = Cateto Oposto / Hipotenusa',desc:''},
    {cat:'Trigonometria',title:'Cosseno',expr:'cos(θ) = Cateto Adjacente / Hipotenusa',desc:''},
    {cat:'Trigonometria',title:'Tangente',expr:'tan(θ) = sen(θ) / cos(θ)',desc:''},
    {cat:'Trigonometria',title:'Lei dos Cossenos',expr:'a² = b² + c² − 2bc·cos(A)',desc:''},
    {cat:'Estatística',title:'Média aritmética',expr:'x̄ = (Σ xᵢ) / n',desc:''},
    {cat:'Estatística',title:'Desvio padrão',expr:'σ = √(Σ(xᵢ−x̄)² / n)',desc:''},
    {cat:'Financeiro',title:'Juros compostos',expr:'M = C · (1 + i)ⁿ',desc:'C=capital, i=taxa, n=períodos'},
    {cat:'Financeiro',title:'Juros simples',expr:'J = C · i · t',desc:''},
    {cat:'Sequências',title:'PA — Termo geral',expr:'aₙ = a₁ + (n−1)·r',desc:''},
    {cat:'Sequências',title:'PA — Soma',expr:'Sₙ = n·(a₁+aₙ)/2',desc:''},
    {cat:'Sequências',title:'PG — Termo geral',expr:'aₙ = a₁ · qⁿ⁻¹',desc:''},
    {cat:'Combinatória',title:'Combinação',expr:'C(n,k) = n! / (k!·(n−k)!)',desc:''},
    {cat:'Combinatória',title:'Permutação',expr:'Pₙ = n!',desc:''},
  ];

  const fList = $('clei-form-list');
  let lastCat = '';
  fList.innerHTML = FMLS.map(f => {
    let h = '';
    if (f.cat !== lastCat) { h = `<div class="cf-cat">${f.cat}</div>`; lastCat = f.cat; }
    return `${h}<div class="cf-card" data-title="${f.title}" data-expr="${f.expr}">
      <div class="cf-title">${f.title}</div>
      <div class="cf-expr">${f.expr}</div>
      ${f.desc?`<div class="cf-desc">${f.desc}</div>`:''}
    </div>`;
  }).join('');
  fList.querySelectorAll('.cf-card').forEach(card => {
    card.addEventListener('click', () => {
      inp.value = `Explique e resolva usando: ${card.dataset.title} — ${card.dataset.expr}`;
      document.querySelector('[data-t="chat"]').click();
    });
  });

  /* ══════════════════════════════════════════════════════
     DRAG & RESIZE
  ══════════════════════════════════════════════════════ */
  let dragging=false,resizing=false,dX=0,dY=0,rX=0,rY=0,rW=0,rH=0;
  $('clei-header').addEventListener('mousedown',e=>{
    if(e.target.classList.contains('ch-btn'))return;
    dragging=true; const r=root.getBoundingClientRect(); dX=e.clientX-r.left; dY=e.clientY-r.top;
  });
  $('clei-rh').addEventListener('mousedown',e=>{
    resizing=true; rX=e.clientX; rY=e.clientY; rW=root.offsetWidth; rH=root.offsetHeight; e.preventDefault();
  });
  document.addEventListener('mousemove',e=>{
    if(dragging){
      let x=Math.max(0,Math.min(e.clientX-dX,window.innerWidth-root.offsetWidth));
      let y=Math.max(0,Math.min(e.clientY-dY,window.innerHeight-root.offsetHeight));
      root.style.left=x+'px'; root.style.top=y+'px'; root.style.right='auto'; root.style.bottom='auto';
    }
    if(resizing){
      root.style.width=Math.max(400,rW+(e.clientX-rX))+'px';
      root.style.height=Math.max(500,rH+(e.clientY-rY))+'px';
    }
  });
  document.addEventListener('mouseup',()=>{dragging=false;resizing=false;});

  console.log('%c✦ Clei v2 by Plascoy · Online!','color:#a080ff;font-weight:900;font-size:16px');
})();
