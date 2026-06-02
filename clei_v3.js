(function () {

  ['clei-root','clei-fullscreen-loader','clei-global-style','clei-ruler-overlay','clei-scan-overlay','clei-toast-container'].forEach(id => { const e = document.getElementById(id); if(e) e.remove(); });

  /* ════════════════════════════════════════════════════════════
     STYLES
  ════════════════════════════════════════════════════════════ */

  const GST = document.createElement('style');
  GST.id = 'clei-global-style';
  GST.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

    #clei-fullscreen-loader {
      position:fixed;inset:0;z-index:2147483646;
      background:#000008;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      font-family:'Syne',sans-serif;overflow:hidden;
      transition:opacity 1.2s cubic-bezier(.4,0,.2,1),transform 1.2s cubic-bezier(.4,0,.2,1);
    }
    #clei-fullscreen-loader.fade-out{opacity:0;transform:scale(1.08) translateY(-20px);pointer-events:none;}
    .cfl-canvas{position:absolute;inset:0;}
    .cfl-hexgrid{position:absolute;inset:0;overflow:hidden;opacity:.4;}
    .cfl-hexgrid svg{width:100%;height:100%;}
    .cfl-orb{position:absolute;border-radius:50%;filter:blur(100px);pointer-events:none;}
    .cfl-orb.o1{width:800px;height:800px;background:radial-gradient(#5533ff,transparent 65%);opacity:.25;top:-300px;left:-200px;animation:ofl 11s ease-in-out infinite;}
    .cfl-orb.o2{width:700px;height:700px;background:radial-gradient(#0099ff,transparent 65%);opacity:.2;bottom:-250px;right:-180px;animation:ofl 14s ease-in-out infinite reverse;}
    .cfl-orb.o3{width:500px;height:500px;background:radial-gradient(#cc00ff,transparent 65%);opacity:.15;top:30%;left:60%;animation:ofl 9s ease-in-out infinite;animation-delay:-4s;}
    .cfl-orb.o4{width:400px;height:400px;background:radial-gradient(#00ffcc,transparent 65%);opacity:.1;top:65%;left:5%;animation:ofl 12s ease-in-out infinite;animation-delay:-7s;}
    @keyframes ofl{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-50px) scale(1.1)}}
    .cfl-scan-beam{position:absolute;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent 0%,rgba(85,51,255,.0) 10%,rgba(85,51,255,.8) 40%,rgba(0,200,255,1) 50%,rgba(85,51,255,.8) 60%,rgba(85,51,255,.0) 90%,transparent 100%);filter:blur(2px);animation:scanbeam 2.8s linear infinite;box-shadow:0 0 20px rgba(0,200,255,.6),0 0 40px rgba(85,51,255,.3);}
    @keyframes scanbeam{0%{top:-5%;opacity:0}5%{opacity:1}95%{opacity:1}100%{top:105%;opacity:0}}
    .cfl-syms{position:absolute;inset:0;overflow:hidden;pointer-events:none;}
    .cfl-sym{position:absolute;font-family:'JetBrains Mono',monospace;color:rgba(85,51,255,.15);font-weight:700;animation:symfloat linear infinite;user-select:none;text-shadow:0 0 20px rgba(85,51,255,.3);}
    @keyframes symfloat{0%{opacity:0;transform:translateY(105vh) rotate(0deg)}8%{opacity:1}90%{opacity:.5}100%{opacity:0;transform:translateY(-15vh) rotate(720deg)}}
    .cfl-pt{position:absolute;border-radius:50%;opacity:0;animation:ptrise linear infinite;}
    @keyframes ptrise{0%{opacity:0;transform:translateY(0) scale(1)}15%{opacity:1}100%{opacity:0;transform:translateY(-200px) scale(0)}}
    .cfl-content{position:relative;z-index:5;display:flex;flex-direction:column;align-items:center;}
    .cfl-logo-scene{position:relative;margin-bottom:48px;animation:logoin 1.2s cubic-bezier(.34,1.56,.64,1) both;}
    @keyframes logoin{from{opacity:0;transform:scale(0) rotate(-90deg)}to{opacity:1;transform:scale(1) rotate(0)}}
    .cfl-ring{position:absolute;border-radius:50%;border:1px solid rgba(85,51,255,.4);}
    .cfl-ring.r1{inset:-20px;animation:rspin 6s linear infinite;}
    .cfl-ring.r2{inset:-36px;border-color:rgba(0,200,255,.25);animation:rspin 10s linear infinite reverse;border-style:dashed;}
    .cfl-ring.r3{inset:-54px;border-color:rgba(204,0,255,.15);animation:rspin 16s linear infinite;border-style:dotted;}
    .cfl-ring.r4{inset:-74px;border-color:rgba(0,255,200,.08);animation:rspin 24s linear infinite reverse;}
    @keyframes rspin{to{transform:rotate(360deg)}}
    .cfl-ring.r1::before,.cfl-ring.r2::before{content:'';position:absolute;width:10px;height:10px;border-radius:50%;top:-5px;left:50%;transform:translateX(-50%);box-shadow:0 0 10px currentColor;}
    .cfl-ring.r1::before{background:#5533ff;box-shadow:0 0 12px #5533ff,0 0 24px #5533ff;}
    .cfl-ring.r2::before{background:#00c8ff;box-shadow:0 0 12px #00c8ff;}
    .cfl-logo-box{
      width:120px;height:120px;border-radius:32px;position:relative;z-index:2;
      background:linear-gradient(135deg,#5533ff 0%,#2266ff 40%,#00ccff 100%);
      display:flex;align-items:center;justify-content:center;
      font-size:56px;font-weight:800;color:#fff;font-family:'Syne',sans-serif;
      box-shadow:0 0 0 1px rgba(255,255,255,.15),0 0 80px rgba(85,51,255,.7),0 0 160px rgba(85,51,255,.3),0 0 240px rgba(0,200,255,.1),inset 0 1px 0 rgba(255,255,255,.3);
    }
    .cfl-logo-box::after{content:'';position:absolute;inset:0;border-radius:32px;background:linear-gradient(135deg,rgba(255,255,255,.2) 0%,transparent 50%);}
    .cfl-title{
      font-size:clamp(80px,14vw,120px);font-weight:800;letter-spacing:-6px;line-height:.9;
      font-family:'Syne',sans-serif;
      background:linear-gradient(135deg,#ffffff 0%,#c8b4ff 40%,#00ccff 80%,#00ffcc 100%);
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      animation:titlein .9s .2s cubic-bezier(.22,1,.36,1) both;
      filter:drop-shadow(0 0 60px rgba(85,51,255,.5));
    }
    @keyframes titlein{from{opacity:0;transform:translateY(30px) skewY(2deg)}to{opacity:1;transform:none}}
    .cfl-subtitle{font-size:14px;color:rgba(255,255,255,.35);letter-spacing:6px;text-transform:uppercase;font-family:'JetBrains Mono',monospace;margin-top:6px;animation:titlein .9s .35s cubic-bezier(.22,1,.36,1) both;}
    .cfl-byline{font-size:11px;color:rgba(85,51,255,.6);letter-spacing:4px;text-transform:uppercase;font-family:'JetBrains Mono',monospace;margin-top:4px;margin-bottom:48px;animation:titlein .9s .5s cubic-bezier(.22,1,.36,1) both;}
    .cfl-mods{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;max-width:520px;margin-bottom:36px;animation:titlein .9s .55s both;}
    .cfl-mod{display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:99px;padding:6px 14px;font-size:10px;color:rgba(255,255,255,.3);font-family:'JetBrains Mono',monospace;letter-spacing:.5px;transition:all .4s;}
    .cfl-mod.on{color:rgba(0,255,180,.8);border-color:rgba(0,255,180,.25);background:rgba(0,255,180,.06);box-shadow:0 0 12px rgba(0,255,180,.1);}
    .cfl-mod.now{color:rgba(85,51,255,.9);border-color:rgba(85,51,255,.5);background:rgba(85,51,255,.1);animation:modnow .7s ease infinite;}
    @keyframes modnow{0%,100%{box-shadow:0 0 0 0 rgba(85,51,255,.4)}50%{box-shadow:0 0 0 5px rgba(85,51,255,.0)}}
    .cfl-mod-dot{width:5px;height:5px;border-radius:50%;background:currentColor;}
    .cfl-prog{width:min(420px,82vw);animation:titlein .9s .65s both;}
    .cfl-ptrack{height:2px;background:rgba(255,255,255,.06);border-radius:99px;overflow:visible;margin-bottom:12px;position:relative;}
    .cfl-pfill{height:100%;width:0;background:linear-gradient(90deg,#5533ff,#2266ff,#00ccff);border-radius:99px;transition:width .35s cubic-bezier(.4,0,.2,1);position:relative;}
    .cfl-pfill::after{content:'';position:absolute;right:-5px;top:-4px;width:10px;height:10px;border-radius:50%;background:#00ccff;box-shadow:0 0 10px #00ccff,0 0 20px #5533ff;transition:right .35s;}
    .cfl-pglow{position:absolute;inset:-2px;border-radius:99px;background:linear-gradient(90deg,transparent,rgba(85,51,255,.2),transparent);animation:pglow 1.5s ease infinite;}
    @keyframes pglow{0%{transform:translateX(-100%)}100%{transform:translateX(400%)}}
    .cfl-prow{display:flex;justify-content:space-between;}
    .cfl-ptxt{font-size:11px;color:rgba(255,255,255,.25);font-family:'JetBrains Mono',monospace;}
    .cfl-ppct{font-size:13px;color:#8877ff;font-family:'JetBrains Mono',monospace;font-weight:700;}
    .cfl-credit{position:absolute;bottom:32px;display:flex;flex-direction:column;align-items:center;gap:5px;animation:titlein .9s 1s both;}
    .cfl-credit-sep{width:48px;height:1px;background:linear-gradient(90deg,transparent,rgba(85,51,255,.5),transparent);}
    .cfl-credit-by{font-size:9px;color:rgba(255,255,255,.18);letter-spacing:3px;text-transform:uppercase;font-family:'JetBrains Mono',monospace;}
    .cfl-credit-name{font-family:'Syne',sans-serif;font-size:18px;font-weight:800;letter-spacing:3px;background:linear-gradient(90deg,#5533ff,#00ccff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
    .cfl-ver{position:absolute;top:28px;left:28px;background:rgba(85,51,255,.12);border:1px solid rgba(85,51,255,.3);border-radius:99px;padding:5px 14px;font-size:10px;color:rgba(85,51,255,.8);font-family:'JetBrains Mono',monospace;letter-spacing:2px;animation:titlein .9s 1.2s both;}
    .cfl-status{position:absolute;top:28px;right:28px;display:flex;align-items:center;gap:7px;animation:titlein .9s 1.2s both;}
    .cfl-status-dot{width:7px;height:7px;border-radius:50%;background:#00ff88;box-shadow:0 0 8px #00ff88;animation:sdot 1.5s ease infinite;}
    @keyframes sdot{0%,100%{opacity:1}50%{opacity:.3}}
    .cfl-status-txt{font-size:10px;color:rgba(255,255,255,.3);font-family:'JetBrains Mono',monospace;letter-spacing:1.5px;}
    #clei-root{
      position:fixed;z-index:2147483647;
      width:500px;height:720px;
      bottom:24px;right:24px;
      font-family:'Space Grotesk',sans-serif;user-select:none;
      display:none;
    }
    #clei-root.visible{display:block;animation:winin .6s cubic-bezier(.34,1.56,.64,1);}
    @keyframes winin{from{opacity:0;transform:translateY(40px) scale(.9)}to{opacity:1;transform:none}}
    #clei-root.minimized{height:auto!important;}
    #clei-root.minimized #clei-body,#clei-root.minimized #clei-tabs{display:none!important;}
    #clei-window{
      width:100%;height:100%;
      background:linear-gradient(160deg,#080812 0%,#060610 60%,#0a0818 100%);
      border:1px solid rgba(85,51,255,.3);border-radius:24px;
      display:flex;flex-direction:column;overflow:hidden;
      box-shadow:0 0 0 1px rgba(255,255,255,.04),0 50px 120px rgba(0,0,0,.9),0 0 120px rgba(85,51,255,.15),inset 0 1px 0 rgba(255,255,255,.07),inset 0 0 60px rgba(85,51,255,.03);
      position:relative;
    }
    #clei-window::before{
      content:'';position:absolute;top:0;left:10%;right:10%;height:1px;
      background:linear-gradient(90deg,transparent,rgba(85,51,255,.6),rgba(0,200,255,.5),transparent);
      z-index:10;pointer-events:none;
    }
    #clei-hdr{
      display:flex;align-items:center;gap:12px;padding:15px 16px 14px;
      background:linear-gradient(180deg,rgba(85,51,255,.1) 0%,transparent 100%);
      border-bottom:1px solid rgba(255,255,255,.05);
      cursor:grab;flex-shrink:0;position:relative;
    }
    #clei-hdr:active{cursor:grabbing;}
    .hdr-av{
      width:38px;height:38px;border-radius:12px;flex-shrink:0;
      background:linear-gradient(135deg,#5533ff,#00ccff);
      display:flex;align-items:center;justify-content:center;
      font-size:16px;font-weight:800;color:#fff;font-family:'Syne',sans-serif;
      box-shadow:0 4px 16px rgba(85,51,255,.5);
    }
    .hdr-info{flex:1;}
    .hdr-name{font-size:15px;font-weight:700;color:#fff;letter-spacing:.3px;font-family:'Syne',sans-serif;}
    .hdr-sub{font-size:10px;color:rgba(255,255,255,.3);font-family:'JetBrains Mono',monospace;display:flex;align-items:center;gap:5px;}
    .hdr-dot{width:5px;height:5px;border-radius:50%;background:#00ff88;animation:sdot 2s ease infinite;box-shadow:0 0 5px #00ff88;}
    .hdr-tools{display:flex;gap:4px;}
    .htb{
      height:30px;padding:0 10px;border-radius:8px;
      border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);
      color:rgba(255,255,255,.4);cursor:pointer;
      display:flex;align-items:center;justify-content:center;gap:5px;
      font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:.5px;
      transition:all .15s;white-space:nowrap;flex-shrink:0;
    }
    .htb:hover{background:rgba(255,255,255,.1);color:rgba(255,255,255,.8);border-color:rgba(255,255,255,.15);}
    .htb.active{background:rgba(85,51,255,.2);border-color:rgba(85,51,255,.5);color:#aa88ff;}
    .htb.scan-btn{background:rgba(0,200,255,.06);border-color:rgba(0,200,255,.2);color:rgba(0,200,255,.6);}
    .htb.scan-btn:hover{background:rgba(0,200,255,.14);color:#00ccff;}
    .htb.scan-btn.active{background:rgba(0,200,255,.18);border-color:#00ccff;color:#00ccff;animation:scanpulse .8s ease infinite;}
    @keyframes scanpulse{0%,100%{box-shadow:0 0 0 0 rgba(0,200,255,.3)}50%{box-shadow:0 0 0 4px rgba(0,200,255,0)}}
    .htb.red:hover{background:rgba(255,50,80,.15);color:#ff5577;border-color:rgba(255,50,80,.3);}
    .htb.min-btn{font-size:12px;padding:0 8px;}
    #clei-tabs{
      display:flex;flex-shrink:0;
      background:rgba(0,0,0,.2);
      border-bottom:1px solid rgba(255,255,255,.05);padding:0 8px;
    }
    .ct{
      flex:1;padding:10px 4px;text-align:center;
      font-size:9.5px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;
      color:rgba(255,255,255,.22);cursor:pointer;border-bottom:2px solid transparent;
      transition:all .2s;font-family:'JetBrains Mono',monospace;
    }
    .ct:hover{color:rgba(255,255,255,.5);}
    .ct.active{color:#aa88ff;border-bottom-color:rgba(85,51,255,.8);}
    #clei-body{flex:1;overflow:hidden;display:flex;flex-direction:column;}
    .cp{display:none;flex:1;flex-direction:column;overflow:hidden;}
    .cp.active{display:flex;}
    #clei-msgs{
      flex:1;overflow-y:auto;padding:18px 16px;
      display:flex;flex-direction:column;gap:16px;
      scrollbar-width:thin;scrollbar-color:rgba(85,51,255,.3) transparent;
    }
    #clei-msgs::-webkit-scrollbar{width:3px;}
    #clei-msgs::-webkit-scrollbar-thumb{background:rgba(85,51,255,.4);border-radius:99px;}
    .cm{display:flex;gap:10px;align-items:flex-end;animation:msgin .3s cubic-bezier(.22,1,.36,1);}
    @keyframes msgin{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
    .cm.u{flex-direction:row-reverse;}
    .cm-av{width:30px;height:30px;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;}
    .cm.b .cm-av{background:linear-gradient(135deg,#5533ff,#00ccff);color:#fff;box-shadow:0 4px 14px rgba(85,51,255,.4);}
    .cm.u .cm-av{background:rgba(85,51,255,.15);color:#9977ff;border:1px solid rgba(85,51,255,.3);}
    .cm-bub{max-width:84%;padding:13px 16px;border-radius:16px;font-size:13.5px;line-height:1.7;user-select:text;}
    .cm.b .cm-bub{background:rgba(255,255,255,.04);color:#c8d4ff;border:1px solid rgba(255,255,255,.07);border-bottom-left-radius:4px;font-family:'Space Grotesk',sans-serif;}
    .cm.u .cm-bub{background:linear-gradient(135deg,rgba(85,51,255,.2),rgba(0,200,255,.1));color:#e2eaff;border:1px solid rgba(85,51,255,.3);border-bottom-right-radius:4px;font-family:'JetBrains Mono',monospace;font-size:13px;}
    .ar{display:flex;flex-direction:column;gap:11px;}
    .ar-hdr{display:flex;align-items:center;gap:9px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.06);}
    .ar-hdr-ic{width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,#5533ff,#00ccff);display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;}
    .ar-hdr-title{font-size:10px;color:rgba(255,255,255,.3);letter-spacing:1.5px;text-transform:uppercase;font-family:'Syne',sans-serif;font-weight:600;}
    .ar-hdr-badge{margin-left:auto;font-size:9px;color:rgba(85,51,255,.7);background:rgba(85,51,255,.1);border:1px solid rgba(85,51,255,.2);border-radius:5px;padding:2px 8px;letter-spacing:1px;font-family:'JetBrains Mono',monospace;}
    .ar-sec{display:flex;flex-direction:column;gap:6px;}
    .ar-lbl{font-size:9px;color:rgba(85,51,255,.7);letter-spacing:2.5px;text-transform:uppercase;font-family:'JetBrains Mono',monospace;font-weight:700;display:flex;align-items:center;gap:8px;}
    .ar-lbl::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,rgba(85,51,255,.2),transparent);}
    .ar-text{font-size:13px;color:rgba(200,215,255,.8);line-height:1.75;font-family:'Space Grotesk',sans-serif;}
    .ar-steps{display:flex;flex-direction:column;gap:7px;}
    .ar-step{display:flex;gap:10px;align-items:flex-start;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);border-radius:11px;padding:10px 13px;transition:border-color .2s;}
    .ar-step:hover{border-color:rgba(85,51,255,.2);}
    .ar-step-n{width:22px;height:22px;border-radius:7px;flex-shrink:0;background:rgba(85,51,255,.2);border:1px solid rgba(85,51,255,.35);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#aa88ff;font-family:'Syne',sans-serif;}
    .ar-step-t{font-size:12.5px;color:rgba(190,205,255,.75);line-height:1.65;font-family:'Space Grotesk',sans-serif;flex:1;}
    .ar-step-t code{background:rgba(85,51,255,.15);padding:1px 6px;border-radius:4px;color:#cc99ff;font-family:'JetBrains Mono',monospace;font-size:11px;border:1px solid rgba(85,51,255,.25);}
    .ar-formula{background:rgba(0,0,0,.4);border:1px solid rgba(85,51,255,.25);border-radius:12px;padding:14px 18px;font-family:'JetBrains Mono',monospace;color:#b0c8ff;font-size:13px;letter-spacing:.3px;text-align:center;line-height:1.7;position:relative;overflow:hidden;}
    .ar-formula::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(85,51,255,.06),rgba(0,200,255,.04));}
    .ar-result{background:linear-gradient(135deg,rgba(85,51,255,.18),rgba(0,200,255,.1));border:1px solid rgba(85,51,255,.4);border-radius:13px;padding:15px 18px;position:relative;overflow:hidden;}
    .ar-result::before{content:'RESULTADO';position:absolute;top:8px;right:12px;font-size:8px;color:rgba(85,51,255,.45);letter-spacing:2px;font-family:'JetBrains Mono',monospace;}
    .ar-result-lbl{font-size:9px;color:rgba(0,200,255,.5);letter-spacing:2px;text-transform:uppercase;font-family:'JetBrains Mono',monospace;margin-bottom:5px;}
    .ar-result-val{font-size:19px;font-weight:700;color:#a8f0ff;font-family:'JetBrains Mono',monospace;line-height:1.3;}
    .ar-concept{background:rgba(255,255,255,.02);border-left:3px solid rgba(85,51,255,.5);border-radius:0 11px 11px 0;padding:11px 15px;}
    .ar-concept-lbl{font-size:9.5px;color:rgba(85,51,255,.7);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:5px;font-family:'JetBrains Mono',monospace;font-weight:700;}
    .ar-concept-txt{font-size:12px;color:rgba(180,195,255,.55);line-height:1.7;font-family:'Space Grotesk',sans-serif;}
    .ctyp{display:flex;gap:5px;align-items:center;padding:3px 0;}
    .ctyp span{width:7px;height:7px;border-radius:50%;animation:tydot 1.3s infinite;}
    .ctyp span:nth-child(1){background:#5533ff}.ctyp span:nth-child(2){background:#2266ff;animation-delay:.18s}.ctyp span:nth-child(3){background:#00ccff;animation-delay:.36s}
    @keyframes tydot{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.1);opacity:1}}
    #clei-inp-area{flex-shrink:0;padding:12px 14px 14px;background:rgba(0,0,0,.2);border-top:1px solid rgba(255,255,255,.05);display:flex;flex-direction:column;gap:10px;}
    .cq-row{display:flex;gap:5px;flex-wrap:wrap;}
    .cq{font-size:9.5px;padding:4px 11px;border-radius:99px;border:1px solid rgba(85,51,255,.2);background:rgba(85,51,255,.05);color:rgba(160,130,255,.7);cursor:pointer;font-family:'JetBrains Mono',monospace;transition:all .15s;white-space:nowrap;}
    .cq:hover{border-color:rgba(85,51,255,.5);background:rgba(85,51,255,.13);color:#bb99ff;}
    .cinp-row{display:flex;gap:9px;align-items:flex-end;}
    #clei-inp{flex:1;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:11px 15px;color:#d8e0ff;font-size:13px;outline:none;resize:none;font-family:'JetBrains Mono',monospace;line-height:1.5;min-height:42px;max-height:110px;transition:border-color .2s,background .2s;}
    #clei-inp::placeholder{color:rgba(255,255,255,.18);}
    #clei-inp:focus{border-color:rgba(85,51,255,.45);background:rgba(85,51,255,.06);}
    #clei-send{width:44px;height:44px;border-radius:14px;border:none;cursor:pointer;background:linear-gradient(135deg,#5533ff,#2266ff,#00ccff);color:#fff;font-size:18px;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .15s;box-shadow:0 4px 20px rgba(85,51,255,.5);}
    #clei-send:hover{transform:scale(1.07);box-shadow:0 6px 28px rgba(85,51,255,.7);}
    #clei-send:active{transform:scale(.92);}
    #clei-send:disabled{opacity:.3;transform:none;box-shadow:none;cursor:default;}
    #clei-panel-calc{padding:14px;gap:12px;}
    .cc-disp{background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:16px 20px;text-align:right;background-image:linear-gradient(135deg,rgba(85,51,255,.05),rgba(0,200,255,.03));}
    .cc-expr{font-size:12px;color:rgba(255,255,255,.22);font-family:'JetBrains Mono',monospace;min-height:18px;}
    .cc-val{font-size:36px;font-weight:700;color:#fff;font-family:'JetBrains Mono',monospace;word-break:break-all;line-height:1.1;}
    .cc-val.err{color:#ff6080;font-size:20px;}
    .cc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;}
    .ck{padding:14px 8px;border-radius:12px;border:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.04);color:#ccd4ff;font-size:14px;font-weight:600;cursor:pointer;text-align:center;transition:all .12s;font-family:'Syne',sans-serif;}
    .ck:hover{background:rgba(255,255,255,.09);border-color:rgba(255,255,255,.12);}
    .ck:active{transform:scale(.88);}
    .ck.fn{color:#bb99ff;background:rgba(85,51,255,.08);border-color:rgba(85,51,255,.2);}
    .ck.op{color:#55ddff;background:rgba(0,200,255,.06);border-color:rgba(0,200,255,.2);}
    .ck.clr{color:#ff7799;background:rgba(255,50,80,.06);border-color:rgba(255,50,80,.2);}
    .ck.br{color:#ffcc66;background:rgba(255,200,60,.06);border-color:rgba(255,200,60,.2);}
    .ck.eq{background:linear-gradient(135deg,#5533ff,#2266ff,#00ccff);color:#fff;border:none;grid-row:span 2;box-shadow:0 4px 20px rgba(85,51,255,.4);font-size:22px;}
    .ck.zero{grid-column:span 2;}
    #clei-ruler-overlay{position:fixed;inset:0;z-index:2147483640;pointer-events:none;display:none;}
    #clei-ruler-overlay.active{display:block;}
    #clei-ruler-overlay.measuring{pointer-events:all;cursor:crosshair;}
    .ruler-h{position:absolute;top:0;left:0;right:0;height:32px;background:rgba(10,8,30,.92);border-bottom:1px solid rgba(85,51,255,.3);display:flex;align-items:flex-end;overflow:hidden;}
    .ruler-v{position:absolute;top:0;left:0;bottom:0;width:32px;background:rgba(10,8,30,.92);border-right:1px solid rgba(85,51,255,.3);display:flex;align-items:flex-start;overflow:hidden;}
    .ruler-corner{position:absolute;top:0;left:0;width:32px;height:32px;background:rgba(10,8,30,.95);border-right:1px solid rgba(85,51,255,.3);border-bottom:1px solid rgba(85,51,255,.3);display:flex;align-items:center;justify-content:center;z-index:2;}
    .ruler-corner-icon{font-size:12px;}
    .ruler-tick{position:absolute;background:rgba(85,51,255,.6);}
    .ruler-tick.major{background:rgba(130,100,255,.9);}
    .ruler-tick-lbl{position:absolute;font-size:8px;color:rgba(130,100,255,.7);font-family:'JetBrains Mono',monospace;user-select:none;}
    .ruler-cursor-h{position:absolute;top:0;bottom:0;width:1px;background:rgba(0,200,255,.7);pointer-events:none;box-shadow:0 0 6px rgba(0,200,255,.4);}
    .ruler-cursor-v{position:absolute;left:0;right:0;height:1px;background:rgba(0,200,255,.7);pointer-events:none;box-shadow:0 0 6px rgba(0,200,255,.4);}
    .ruler-tooltip{position:absolute;background:rgba(10,8,30,.95);border:1px solid rgba(85,51,255,.4);border-radius:6px;padding:4px 9px;font-size:10px;color:#aa99ff;font-family:'JetBrains Mono',monospace;pointer-events:none;white-space:nowrap;z-index:5;}
    .measure-start{position:absolute;width:10px;height:10px;border-radius:50%;background:#5533ff;transform:translate(-50%,-50%);box-shadow:0 0 8px #5533ff;pointer-events:none;}
    .measure-line{position:absolute;background:rgba(85,51,255,.8);height:2px;transform-origin:left center;pointer-events:none;box-shadow:0 0 6px rgba(85,51,255,.5);}
    .measure-end{position:absolute;width:10px;height:10px;border-radius:50%;background:#00ccff;transform:translate(-50%,-50%);box-shadow:0 0 8px #00ccff;pointer-events:none;}
    .measure-label{position:absolute;background:rgba(10,8,30,.95);border:1px solid rgba(0,200,255,.4);border-radius:6px;padding:4px 10px;font-size:10px;color:#00ccff;font-family:'JetBrains Mono',monospace;pointer-events:none;white-space:nowrap;}
    #clei-scan-overlay{position:fixed;inset:0;z-index:2147483641;pointer-events:none;display:none;}
    #clei-scan-overlay.active{display:flex;flex-direction:column;align-items:center;justify-content:center;}
    .scan-backdrop{position:absolute;inset:0;background:rgba(0,0,20,.6);backdrop-filter:blur(2px);}
    .scan-frame{
      position:relative;z-index:2;
      border:2px solid rgba(85,51,255,.8);border-radius:16px;
      min-width:300px;min-height:100px;
      box-shadow:0 0 0 4000px rgba(0,0,20,.6),0 0 40px rgba(85,51,255,.4);
      overflow:hidden;
    }
    .scan-beam-line{position:absolute;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,rgba(85,51,255,.8),rgba(0,200,255,1),rgba(85,51,255,.8),transparent);animation:scanbeam 1.8s linear infinite;box-shadow:0 0 12px rgba(0,200,255,.8);}
    .scan-corner{position:absolute;width:14px;height:14px;border-color:rgba(0,200,255,.9);border-style:solid;}
    .scan-corner.tl{top:-1px;left:-1px;border-width:3px 0 0 3px;border-radius:4px 0 0 0;}
    .scan-corner.tr{top:-1px;right:-1px;border-width:3px 3px 0 0;border-radius:0 4px 0 0;}
    .scan-corner.bl{bottom:-1px;left:-1px;border-width:0 0 3px 3px;border-radius:0 0 0 4px;}
    .scan-corner.br{bottom:-1px;right:-1px;border-width:0 3px 3px 0;border-radius:0 0 4px 0;}
    .scan-label{position:absolute;bottom:-32px;left:50%;transform:translateX(-50%);background:rgba(10,8,30,.9);border:1px solid rgba(85,51,255,.4);border-radius:99px;padding:4px 14px;font-size:10px;color:rgba(130,100,255,.8);font-family:'JetBrains Mono',monospace;white-space:nowrap;}
    .scan-ui-box{
      position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
      z-index:2147483642;
      background:rgba(10,8,30,.96);border:1px solid rgba(85,51,255,.4);border-radius:16px;
      padding:14px 20px;display:flex;gap:12px;align-items:center;
      box-shadow:0 8px 40px rgba(0,0,0,.7),0 0 30px rgba(85,51,255,.2);
      font-family:'JetBrains Mono',monospace;
    }
    .scan-status{font-size:11px;color:rgba(130,100,255,.8);letter-spacing:1px;}
    .scan-btn-ok{background:linear-gradient(135deg,#5533ff,#00ccff);border:none;border-radius:10px;padding:7px 18px;color:#fff;font-size:11px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-weight:600;letter-spacing:.5px;}
    .scan-btn-ok:hover{opacity:.85;}
    .scan-btn-cancel{background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:7px 14px;color:rgba(255,255,255,.4);font-size:11px;cursor:pointer;font-family:'JetBrains Mono',monospace;}
    .scan-btn-cancel:hover{border-color:rgba(255,80,100,.3);color:#ff7799;}
    .chp{padding:12px;display:flex;flex-direction:column;gap:8px;overflow-y:auto;flex:1;scrollbar-width:thin;scrollbar-color:rgba(85,51,255,.3) transparent;}
    .chi{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:11px 14px;cursor:pointer;transition:all .15s;}
    .chi:hover{border-color:rgba(85,51,255,.35);background:rgba(85,51,255,.06);}
    .chi-q{font-size:11.5px;color:rgba(255,255,255,.35);font-family:'JetBrains Mono',monospace;}
    .chi-r{font-size:15px;font-weight:600;color:#80d4ff;font-family:'JetBrains Mono',monospace;margin-top:3px;}
    .chi-ts{font-size:9.5px;color:rgba(255,255,255,.18);font-family:'JetBrains Mono',monospace;}
    .chi-empty{text-align:center;color:rgba(255,255,255,.2);font-size:13px;margin-top:50px;font-family:'JetBrains Mono',monospace;}
    .ch-clear-btn{margin:0 12px 12px;padding:9px;border-radius:10px;border:1px solid rgba(255,60,100,.2);background:rgba(255,60,100,.05);color:rgba(255,100,130,.6);font-size:11px;cursor:pointer;text-align:center;font-family:'JetBrains Mono',monospace;transition:all .15s;flex-shrink:0;}
    .ch-clear-btn:hover{background:rgba(255,60,100,.12);color:#ff7799;}
    .cfp{padding:12px;display:flex;flex-direction:column;gap:8px;overflow-y:auto;flex:1;scrollbar-width:thin;scrollbar-color:rgba(85,51,255,.3) transparent;}
    .cf-cat{font-size:9px;color:rgba(255,255,255,.22);letter-spacing:2.5px;text-transform:uppercase;font-family:'JetBrains Mono',monospace;padding:0 2px;margin-top:8px;}
    .cf-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:12px 14px;cursor:pointer;transition:all .15s;}
    .cf-card:hover{border-color:rgba(85,51,255,.4);background:rgba(85,51,255,.07);transform:translateX(3px);}
    .cf-title{font-size:12px;color:rgba(160,140,255,.85);font-weight:600;margin-bottom:5px;}
    .cf-expr{font-size:13px;color:#a8c8ff;font-family:'JetBrains Mono',monospace;}
    .cf-desc{font-size:10px;color:rgba(255,255,255,.22);margin-top:4px;}
    .cab{padding:20px 16px;flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:16px;}
    .cab-logo-row{display:flex;align-items:center;gap:14px;}
    .cab-big{width:58px;height:58px;border-radius:18px;background:linear-gradient(135deg,#5533ff,#00ccff);display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:900;color:#fff;font-family:'Syne',sans-serif;box-shadow:0 8px 24px rgba(85,51,255,.45);}
    .cab-name{font-size:26px;font-weight:800;color:#fff;font-family:'Syne',sans-serif;}
    .cab-ver{font-size:11px;color:rgba(85,51,255,.7);font-family:'JetBrains Mono',monospace;}
    .cab-desc{font-size:13px;color:rgba(255,255,255,.4);line-height:1.7;font-family:'Space Grotesk',sans-serif;}
    .cab-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
    .cab-feat{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:11px;padding:10px 12px;}
    .cab-feat-icon{font-size:18px;margin-bottom:4px;}
    .cab-feat-name{font-size:11px;font-weight:600;color:rgba(180,160,255,.85);}
    .cab-feat-sub{font-size:10px;color:rgba(255,255,255,.25);}
    .cab-credit{background:linear-gradient(135deg,rgba(85,51,255,.1),rgba(0,200,255,.07));border:1px solid rgba(85,51,255,.25);border-radius:13px;padding:14px 16px;}
    .cab-by{font-size:9px;color:rgba(255,255,255,.22);letter-spacing:2.5px;text-transform:uppercase;font-family:'JetBrains Mono',monospace;}
    .cab-cname{font-size:20px;font-weight:800;font-family:'Syne',sans-serif;color:#fff;margin-top:3px;}
    .cab-cname span{background:linear-gradient(90deg,#5533ff,#00ccff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
    #clei-toast-container{position:fixed;bottom:100px;right:28px;z-index:2147483648;display:flex;flex-direction:column;gap:8px;pointer-events:none;}
    .clei-toast{background:rgba(10,8,30,.97);border:1px solid rgba(85,51,255,.4);border-radius:12px;padding:10px 16px;font-size:12px;color:#c8d0ff;font-family:'JetBrains Mono',monospace;display:flex;align-items:center;gap:8px;box-shadow:0 8px 24px rgba(0,0,0,.5),0 0 20px rgba(85,51,255,.15);animation:toastin .3s cubic-bezier(.34,1.56,.64,1);}
    .clei-toast.out{animation:toastout .3s ease forwards;}
    @keyframes toastin{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:none}}
    @keyframes toastout{to{opacity:0;transform:translateX(20px)}}
    .clei-toast-icon{font-size:15px;}
    #clei-rh{position:absolute;bottom:0;right:0;width:20px;height:20px;cursor:nwse-resize;}
    #clei-rh::before{content:'';position:absolute;bottom:5px;right:5px;border-right:2px solid rgba(85,51,255,.4);border-bottom:2px solid rgba(85,51,255,.4);width:9px;height:9px;}
  `;
  document.head.appendChild(GST);

  /* ════════════════════════════════════════════════════════════
     TOAST
  ════════════════════════════════════════════════════════════ */
  const toastCont = document.createElement('div');
  toastCont.id = 'clei-toast-container';
  document.body.appendChild(toastCont);

  function toast(msg, icon = '✦', dur = 3000) {
    const t = document.createElement('div');
    t.className = 'clei-toast';
    t.innerHTML = `<span class="clei-toast-icon">${icon}</span>${msg}`;
    toastCont.appendChild(t);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, dur);
  }

  /* ════════════════════════════════════════════════════════════
     FULLSCREEN LOADER
  ════════════════════════════════════════════════════════════ */
  const loader = document.createElement('div');
  loader.id = 'clei-fullscreen-loader';

  const syms = ['∑','∫','π','√','∞','∂','Δ','α','β','γ','θ','λ','σ','∇','≈','±','×','÷','²','³','ℝ','∈','∀','∃'];
  let symH = '', ptH = '';
  for (let i = 0; i < 24; i++) {
    const s=syms[i%syms.length],x=Math.random()*100,sz=14+Math.random()*30,d=8+Math.random()*16,dl=Math.random()*14;
    symH += `<div class="cfl-sym" style="left:${x}%;font-size:${sz}px;animation-duration:${d}s;animation-delay:-${dl}s">${s}</div>`;
  }
  const pc=['#5533ff','#2266ff','#00ccff','#aa55ff','#00ffcc'];
  for (let i = 0; i < 28; i++) {
    const x=Math.random()*100,dl=Math.random()*5,d=2.5+Math.random()*3.5,sz=2+Math.random()*5,c=pc[Math.floor(Math.random()*pc.length)];
    ptH += `<div class="cfl-pt" style="left:${x}%;bottom:${Math.random()*50}%;width:${sz}px;height:${sz}px;background:${c};animation-duration:${d}s;animation-delay:-${dl}s"></div>`;
  }

  const hexSVG = `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs><pattern id="hex" x="0" y="0" width="10" height="17.32" patternUnits="userSpaceOnUse">
      <polygon points="5,1 9,3.5 9,8.5 5,11 1,8.5 1,3.5" fill="none" stroke="rgba(85,51,255,.2)" stroke-width=".3"/>
      <polygon points="10,9.66 14,12.16 14,17.16 10,19.66 6,17.16 6,12.16" fill="none" stroke="rgba(85,51,255,.2)" stroke-width=".3"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#hex)"/>
  </svg>`;

  const mods = [
    {icon:'🔢',label:'Álgebra'},{icon:'∫',label:'Cálculo'},{icon:'📐',label:'Geometria'},
    {icon:'📊',label:'Estatística'},{icon:'📏',label:'Régua'},{icon:'🔍',label:'Scanner'}
  ];

  loader.innerHTML = `
    <div class="cfl-canvas">
      <div class="cfl-orb o1"></div><div class="cfl-orb o2"></div>
      <div class="cfl-orb o3"></div><div class="cfl-orb o4"></div>
      <div class="cfl-hexgrid">${hexSVG}</div>
      <div class="cfl-scan-beam"></div>
      <div class="cfl-syms">${symH}</div>
      <div style="position:absolute;inset:0">${ptH}</div>
    </div>
    <div class="cfl-ver">v3.0 · MATH ENGINE</div>
    <div class="cfl-status"><div class="cfl-status-dot"></div><div class="cfl-status-txt">ONLINE</div></div>
    <div class="cfl-content">
      <div class="cfl-logo-scene">
        <div class="cfl-ring r1"></div>
        <div class="cfl-ring r2"></div>
        <div class="cfl-ring r3"></div>
        <div class="cfl-ring r4"></div>
        <div class="cfl-logo-box">C</div>
      </div>
      <div class="cfl-title">CLEI</div>
      <div class="cfl-subtitle">Inteligência Matemática Avançada</div>
      <div class="cfl-byline">Powered by Plascoy · OpenRouter AI · v3.0</div>
      <div class="cfl-mods" id="cfl-mods">
        ${mods.map(m=>`<div class="cfl-mod" data-l="${m.label}"><div class="cfl-mod-dot"></div><span>${m.icon}</span>${m.label}</div>`).join('')}
      </div>
      <div class="cfl-prog">
        <div class="cfl-ptrack">
          <div class="cfl-pfill" id="cfl-fill"></div>
          <div class="cfl-pglow"></div>
        </div>
        <div class="cfl-prow">
          <div class="cfl-ptxt" id="cfl-txt">Inicializando...</div>
          <div class="cfl-ppct" id="cfl-pct">0%</div>
        </div>
      </div>
    </div>
    <div class="cfl-credit">
      <div class="cfl-credit-sep"></div>
      <div class="cfl-credit-by">Criado por</div>
      <div class="cfl-credit-name">Plascoy</div>
    </div>
  `;
  document.body.appendChild(loader);

  const fill=$l=>document.getElementById($l);
  const pfill=fill('cfl-fill'), ptxt=fill('cfl-txt'), ppct=fill('cfl-pct');
  const modEls = document.querySelectorAll('.cfl-mod');

  const ldSteps = [
    [7, 'Inicializando núcleo matemático...', -1],
    [16,'Carregando motor de álgebra...', 0],
    [28,'Compilando engine de cálculo...', 1],
    [40,'Carregando geometria 3D...', 2],
    [53,'Inicializando estatística avançada...', 3],
    [65,'Configurando módulo régua...', 4],
    [76,'Calibrando scanner de tela...', 5],
    [85,'Conectando OpenRouter AI...', -1],
    [93,'Otimizando interface neural...', -1],
    [100,'Clei v3 está pronta!', -1],
  ];
  let lsi = 0;
  function nextLd() {
    if(lsi >= ldSteps.length) return;
    const [p,t,mi] = ldSteps[lsi++];
    pfill.style.width = p+'%'; ptxt.textContent = t; ppct.textContent = p+'%';
    modEls.forEach(m=>m.classList.remove('now'));
    if(mi>=0 && modEls[mi]){ modEls[mi].classList.add('now'); if(mi>0)modEls[mi-1].classList.remove('now'),modEls[mi-1].classList.add('on'); }
    if(p===100) modEls.forEach(m=>{m.classList.remove('now');m.classList.add('on');});
    setTimeout(nextLd, 250+Math.random()*250);
  }
  setTimeout(nextLd, 300);

  setTimeout(()=>{
    loader.classList.add('fade-out');
    setTimeout(()=>{loader.remove();root.classList.add('visible');initWelcome();}, 900);
  }, 4000);

  /* ════════════════════════════════════════════════════════════
     RULER OVERLAY
  ════════════════════════════════════════════════════════════ */
  const rulerOverlay = document.createElement('div');
  rulerOverlay.id = 'clei-ruler-overlay';
  rulerOverlay.innerHTML = `
    <div class="ruler-h" id="ruler-h-bar"></div>
    <div class="ruler-v" id="ruler-v-bar"></div>
    <div class="ruler-corner"><div class="ruler-corner-icon">📏</div></div>
    <div class="ruler-cursor-h" id="ruler-cur-h" style="left:0"></div>
    <div class="ruler-cursor-v" id="ruler-cur-v" style="top:0"></div>
    <div class="ruler-tooltip" id="ruler-tip" style="display:none"></div>
  `;
  document.body.appendChild(rulerOverlay);

  let rulerActive=false, measMode=false, measStart=null, measLineEl=null, measEndEl=null, measLblEl=null;

  function buildRulerTicks() {
    const hBar = document.getElementById('ruler-h-bar');
    const vBar = document.getElementById('ruler-v-bar');
    hBar.innerHTML=''; vBar.innerHTML='';
    const W=window.innerWidth, H=window.innerHeight;
    for(let x=0;x<W;x+=10){
      const major=x%100===0, mid=x%50===0;
      const tick=document.createElement('div');
      tick.className='ruler-tick'+(major?' major':'');
      tick.style.cssText=`left:${x}px;bottom:0;width:1px;height:${major?14:mid?8:4}px`;
      hBar.appendChild(tick);
      if(major){const lbl=document.createElement('div');lbl.className='ruler-tick-lbl';lbl.style.cssText=`left:${x+2}px;bottom:14px`;lbl.textContent=x;hBar.appendChild(lbl);}
    }
    for(let y=32;y<H;y+=10){
      const major=y%100===0||y===32, mid=y%50===0;
      const tick=document.createElement('div');
      tick.className='ruler-tick'+(major?' major':'');
      tick.style.cssText=`top:${y}px;right:0;height:1px;width:${major?14:mid?8:4}px`;
      vBar.appendChild(tick);
      if(major&&y>40){const lbl=document.createElement('div');lbl.className='ruler-tick-lbl';lbl.style.cssText=`top:${y+2}px;right:14px;writing-mode:horizontal-tb`;lbl.textContent=y;vBar.appendChild(lbl);}
    }
  }

  function toggleRuler() {
    rulerActive = !rulerActive;
    rulerOverlay.classList.toggle('active', rulerActive);
    if(rulerActive) buildRulerTicks();
    const btn = document.getElementById('clei-ruler-btn');
    if(btn) btn.classList.toggle('active', rulerActive);
    toast(rulerActive ? '📏 Régua ativada — mova o mouse' : '📏 Régua desativada', rulerActive?'📏':'✕');
  }

  document.addEventListener('mousemove', e=>{
    if(!rulerActive) return;
    const hCur=document.getElementById('ruler-cur-h');
    const vCur=document.getElementById('ruler-cur-v');
    const tip=document.getElementById('ruler-tip');
    if(hCur) hCur.style.left=e.clientX+'px';
    if(vCur) vCur.style.top=e.clientY+'px';
    if(tip){
      tip.style.display='block';
      tip.style.left=Math.min(e.clientX+14,window.innerWidth-120)+'px';
      tip.style.top=Math.min(e.clientY+14,window.innerHeight-50)+'px';
      tip.textContent=`X: ${e.clientX}px  Y: ${e.clientY}px`;
    }
    if(measMode && measStart && measLineEl && measEndEl && measLblEl) {
      const dx=e.clientX-measStart.x, dy=e.clientY-measStart.y;
      const len=Math.sqrt(dx*dx+dy*dy), ang=Math.atan2(dy,dx)*180/Math.PI;
      measLineEl.style.cssText=`left:${measStart.x}px;top:${measStart.y}px;width:${len}px;transform:rotate(${ang}deg)`;
      measEndEl.style.cssText=`left:${e.clientX}px;top:${e.clientY}px`;
      measLblEl.style.cssText=`left:${(measStart.x+e.clientX)/2}px;top:${(measStart.y+e.clientY)/2-28}px`;
      measLblEl.textContent=`${Math.round(len)}px  |  Δx:${dx}  Δy:${dy}`;
    }
  });

  rulerOverlay.addEventListener('click', e=>{
    if(!measMode) return;
    if(!measStart){
      measStart={x:e.clientX,y:e.clientY};
      const s=document.createElement('div'); s.className='measure-start'; s.id='meas-s';
      s.style.cssText=`left:${e.clientX}px;top:${e.clientY}px`;
      rulerOverlay.appendChild(s);
      const l=document.createElement('div'); l.className='measure-line'; l.id='meas-l';
      rulerOverlay.appendChild(l); measLineEl=l;
      const en=document.createElement('div'); en.className='measure-end'; en.id='meas-e';
      rulerOverlay.appendChild(en); measEndEl=en;
      const lb=document.createElement('div'); lb.className='measure-label'; lb.id='meas-lb';
      rulerOverlay.appendChild(lb); measLblEl=lb;
    } else {
      const dx=e.clientX-measStart.x,dy=e.clientY-measStart.y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      toast(`📐 ${Math.round(dist)}px  |  Δx:${dx}px  Δy:${dy}px`, '📐', 5000);
      ['meas-s','meas-l','meas-e','meas-lb'].forEach(id=>{const el=document.getElementById(id);if(el)el.remove();});
      measStart=null; measLineEl=null; measEndEl=null; measLblEl=null;
    }
  });

  /* ════════════════════════════════════════════════════════════
     SCAN OVERLAY
  ════════════════════════════════════════════════════════════ */
  const scanOverlay = document.createElement('div');
  scanOverlay.id = 'clei-scan-overlay';
  scanOverlay.innerHTML = `
    <div class="scan-backdrop"></div>
    <div id="scan-frame" class="scan-frame" style="width:600px;height:400px">
      <div class="scan-beam-line"></div>
      <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
      <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      <div class="scan-label" id="scan-lbl">Analisando página...</div>
    </div>
    <div class="scan-ui-box" id="scan-ui-box">
      <div class="scan-status" id="scan-status">🔍 Pronto para analisar</div>
      <button class="scan-btn-ok" id="scan-confirm">✦ Analisar com IA</button>
      <button class="scan-btn-cancel" id="scan-cancel">✕ Cancelar</button>
    </div>
  `;
  document.body.appendChild(scanOverlay);
  let scanActive=false;

  function toggleScan() {
    scanActive=!scanActive;
    scanOverlay.classList.toggle('active',scanActive);
    const btn=document.getElementById('clei-scan-btn');
    if(btn) btn.classList.toggle('active',scanActive);
    if(scanActive) {
      toast('🔍 Scanner ativado — ajuste o quadro e clique em Analisar','🔍');
      buildScanContent();
    }
  }

  function buildScanContent(){
    const lbl=document.getElementById('scan-lbl');
    if(lbl) lbl.textContent='Selecione a área e clique em Analisar';
    const status=document.getElementById('scan-status');
    if(status) status.textContent='🔍 Scanner pronto';
  }

  document.getElementById('scan-confirm').addEventListener('click', async ()=>{
    scanActive=false;
    scanOverlay.classList.remove('active');
    const scanBtn=document.getElementById('clei-scan-btn');
    if(scanBtn) scanBtn.classList.remove('active');
    toast('🔍 Extraindo conteúdo da página...','🔍');
    const pageText = extractPageContent();
    document.querySelector('[data-t="chat"]').click();
    const q = `[SCAN DA PÁGINA]\n\nAnalise este conteúdo da página e identifique e resolva quaisquer problemas matemáticos presentes, ou responda sobre o conteúdo:\n\n${pageText.slice(0,2000)}`;
    inp.value = q;
    await sendMessage(true);
  });

  document.getElementById('scan-cancel').addEventListener('click',()=>{
    scanActive=false;
    scanOverlay.classList.remove('active');
    const btn=document.getElementById('clei-scan-btn');
    if(btn) btn.classList.remove('active');
  });

  function extractPageContent() {
    const ignore=['script','style','noscript','#clei-root','#clei-fullscreen-loader','#clei-scan-overlay','#clei-ruler-overlay','#clei-toast-container'];
    let texts=[];
    document.querySelectorAll('h1,h2,h3,h4,p,li,td,th,label,span,div').forEach(el=>{
      if(ignore.some(s=>el.closest(s))) return;
      const t=el.textContent.trim();
      if(t.length>10 && t.length<500 && !texts.includes(t)) texts.push(t);
    });
    return texts.join('\n').slice(0,2500);
  }

  /* ════════════════════════════════════════════════════════════
     MAIN WINDOW
  ════════════════════════════════════════════════════════════ */
  const root = document.createElement('div');
  root.id = 'clei-root';
  root.innerHTML = `
    <div id="clei-window">
      <div id="clei-hdr">
        <div class="hdr-av">C</div>
        <div class="hdr-info">
          <div class="hdr-name">Clei · IA Matemática</div>
          <div class="hdr-sub"><span class="hdr-dot"></span>online · Plascoy v3.0</div>
        </div>
        <div class="hdr-tools">
          <button class="htb scan-btn" id="clei-scan-btn" title="Escanear página">🔍 Scan</button>
          <button class="htb" id="clei-ruler-btn" title="Régua + Medição">📏</button>
          <button class="htb min-btn" id="clei-min-btn">▬</button>
          <button class="htb red" id="clei-close-btn">✕</button>
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
              <button class="cq" data-q="Derivada de 4x³ + 2x² - 5x">Derivada</button>
              <button class="cq" data-q="Integral de 3x² + 6x dx">Integral</button>
              <button class="cq" data-q="Calcule 18% de 450">Porcentagem</button>
              <button class="cq" data-q="Área do círculo com r=8">Círculo</button>
              <button class="cq" data-q="Média de 15, 22, 37, 44, 8">Média</button>
              <button class="cq" data-q="Fatorial de 10">Fatorial</button>
              <button class="cq" data-q="Fibonacci 12 termos">Fibonacci</button>
              <button class="cq" data-q="Juros compostos: C=1000, i=5%, n=12 meses">Juros</button>
            </div>
            <div class="cinp-row">
              <textarea id="clei-inp" placeholder="Pergunte algo... ex: resolva 2x² + 5x - 3 = 0" rows="1"></textarea>
              <button id="clei-send">➤</button>
            </div>
          </div>
        </div>
        <div class="cp" id="clei-panel-calc">
          <div class="cc-disp">
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
          <button class="ch-clear-btn" id="ch-clear">🗑 Limpar Histórico</button>
        </div>
        <div class="cp" id="clei-panel-formulas">
          <div class="cfp" id="clei-form-list"></div>
        </div>
        <div class="cp" id="clei-panel-about">
          <div class="cab">
            <div class="cab-logo-row">
              <div class="cab-big">C</div>
              <div><div class="cab-name">Clei</div><div class="cab-ver">v3.0 · MATH AI ENGINE</div></div>
            </div>
            <div class="cab-desc">IA matemática com motor simbólico local, integração OpenRouter AI, régua de medição e scanner de página.</div>
            <div class="cab-grid">
              <div class="cab-feat"><div class="cab-feat-icon">🔢</div><div class="cab-feat-name">Álgebra</div><div class="cab-feat-sub">1º, 2º grau, sistemas</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">∫</div><div class="cab-feat-name">Cálculo</div><div class="cab-feat-sub">Derivadas e integrais</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">📐</div><div class="cab-feat-name">Geometria</div><div class="cab-feat-sub">Áreas e volumes</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">📊</div><div class="cab-feat-name">Estatística</div><div class="cab-feat-sub">Média, desvio, moda</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">📏</div><div class="cab-feat-name">Régua</div><div class="cab-feat-sub">Medição de pixels</div></div>
              <div class="cab-feat"><div class="cab-feat-icon">🔍</div><div class="cab-feat-name">Scanner</div><div class="cab-feat-sub">Analisa a página</div></div>
            </div>
            <div class="cab-credit">
              <div class="cab-by">Criado por</div>
              <div class="cab-cname"><span>Plascoy</span></div>
              <div class="cab-ver" style="margin-top:2px">Tecnologia · Inovação · Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="clei-rh"></div>
  `;
  document.body.appendChild(root);

  /* ════════════════════════════════════════════════════════════
     REFS
  ════════════════════════════════════════════════════════════ */
  const $i = id=>document.getElementById(id);
  const msgs=$i('clei-msgs'), inp=$i('clei-inp'), sendBt=$i('clei-send');

  /* ════════════════════════════════════════════════════════════
     CONTROLS
  ════════════════════════════════════════════════════════════ */
  $i('clei-min-btn').addEventListener('click',()=>root.classList.toggle('minimized'));
  $i('clei-close-btn').addEventListener('click',()=>{
    root.style.transition='opacity .3s,transform .3s';
    root.style.opacity='0';root.style.transform='scale(.92) translateY(20px)';
    setTimeout(()=>root.remove(),300);
  });
  $i('clei-ruler-btn').addEventListener('click',()=>{ toggleRuler(); });
  $i('clei-scan-btn').addEventListener('click',()=>{ toggleScan(); });

  document.querySelectorAll('.ct').forEach(t=>{
    t.addEventListener('click',()=>{
      document.querySelectorAll('.ct').forEach(x=>x.classList.remove('active'));
      document.querySelectorAll('.cp').forEach(x=>x.classList.remove('active'));
      t.classList.add('active');
      const p=$i('clei-panel-'+t.dataset.t);
      if(p) p.classList.add('active');
      if(t.dataset.t==='history') renderHistory();
    });
  });

  document.querySelectorAll('.cq').forEach(b=>{
    b.addEventListener('click',()=>{inp.value=b.dataset.q;sendMessage();});
  });

  inp.addEventListener('input',()=>{inp.style.height='auto';inp.style.height=Math.min(inp.scrollHeight,110)+'px';});
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}});
  sendBt.addEventListener('click',()=>sendMessage());

  /* ════════════════════════════════════════════════════════════
     ADD MESSAGE
  ════════════════════════════════════════════════════════════ */
  function addMsg(type,html,typing=false){
    const d=document.createElement('div');d.className='cm '+type;
    const av=type==='b'?'C':'U';
    if(typing){d.innerHTML=`<div class="cm-av">${av}</div><div class="cm-bub"><div class="ctyp"><span></span><span></span><span></span></div></div>`;}
    else{d.innerHTML=`<div class="cm-av">${av}</div><div class="cm-bub">${html}</div>`;}
    msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;return d;
  }

  /* ════════════════════════════════════════════════════════════
     FORMAT AI REPLY
  ════════════════════════════════════════════════════════════ */
  function formatReply(raw) {
    let text = raw
      .replace(/\\\[|\\\]|\\\(|\\\)/g,'')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g,'($1)/($2)')
      .replace(/\\pm/g,'±').replace(/\\sqrt\{([^}]+)\}/g,'√($1)')
      .replace(/\\cdot/g,'·').replace(/\\text\{([^}]+)\}/g,'$1')
      .replace(/\\[a-zA-Z]+\{([^}]*)\}/g,'$1')
      .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
      .replace(/`([^`]+)`/g,'<code>$1</code>');

    const lines=text.split('\n').map(l=>l.trim()).filter(l=>l);
    let sec={ident:[],formula:'',steps:[],result:'',concept:[]};
    let mode='ident';

    for(const line of lines){
      const low=line.toLowerCase();
      if(low.match(/identifica|tipo|problema:/)){mode='ident';continue;}
      if(low.match(/f[oó]rmula/)){mode='formula';continue;}
      if(low.match(/passo|solu|resolu|c[áa]lculo|etapa/)){mode='steps';continue;}
      if(low.match(/resultado|resposta final|raiz|raízes|portanto/)){mode='result';continue;}
      if(low.match(/explica|conceito|observa|nota|portanto/)){mode='concept';continue;}

      const clean=line.replace(/^[-•*\d]+[.):\s]+/,'').replace(/^Passo\s*\d+\s*[:)\s]/i,'').trim();
      if(!clean)continue;

      if(mode==='result'){if(!sec.result)sec.result=clean;}
      else if(mode==='formula'){sec.formula+=(sec.formula?'\n':'')+clean;}
      else if(mode==='steps'){sec.steps.push(clean);}
      else if(mode==='concept'){sec.concept.push(clean);}
      else{sec.ident.push(clean);}
    }

    if(!sec.result){
      for(const s of sec.steps){
        if(s.match(/x[₁₂12]?\s*=\s*-?\d/)||s.match(/=\s*-?[\d,.]+\s*$/)){ sec.result=s; break; }
      }
    }

    let html=`<div class="ar">`;
    html+=`<div class="ar-hdr"><div class="ar-hdr-ic">✦</div><div class="ar-hdr-title">Clei · IA Matemática</div><div class="ar-hdr-badge">by Plascoy</div></div>`;
    if(sec.ident.length) html+=`<div class="ar-sec"><div class="ar-lbl">📌 Tipo de Problema</div><div class="ar-text">${sec.ident.join(' ')}</div></div>`;
    if(sec.formula) html+=`<div class="ar-sec"><div class="ar-lbl">📐 Fórmula</div><div class="ar-formula">${sec.formula.replace(/\n/g,'<br>')}</div></div>`;
    if(sec.steps.length){
      const sh=sec.steps.map((s,i)=>`<div class="ar-step"><div class="ar-step-n">${i+1}</div><div class="ar-step-t">${s}</div></div>`).join('');
      html+=`<div class="ar-sec"><div class="ar-lbl">🔢 Resolução Passo a Passo</div><div class="ar-steps">${sh}</div></div>`;
    }
    if(sec.result) html+=`<div class="ar-result"><div class="ar-result-lbl">✓ Resultado Final</div><div class="ar-result-val">${sec.result}</div></div>`;
    if(sec.concept.length) html+=`<div class="ar-concept"><div class="ar-concept-lbl">💡 Conceito</div><div class="ar-concept-txt">${sec.concept.join(' ')}</div></div>`;
    html+=`</div>`;
    return html;
  }

  /* ════════════════════════════════════════════════════════════
     API + SEND
  ════════════════════════════════════════════════════════════ */
  const API_KEY='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';
  const API_MDL='openai/gpt-4o-mini';
  const API_SYS=`Você é a Clei, IA matemática avançada da Plascoy. Responda sempre em português do Brasil.
Estruture com EXATAMENTE estas seções:

**Identificação do tipo de problema:**
[1-2 linhas descrevendo o tipo]

**Fórmula utilizada:**
[fórmula principal em texto simples com Unicode, SEM LaTeX]

**Passo a passo da solução:**
Passo 1: [passo]
Passo 2: [passo]
(continue quantos passos precisar)

**Resultado:**
[resultado final limpo, ex: x₁ = -2  |  x₂ = -6]

**Conceito:**
[explicação didática em 2-3 linhas]

REGRAS: NÃO use LaTeX. Use APENAS Unicode: √ ± π ² ³ x₁ x₂ ∑ ∫ · × ÷. Seja preciso e didático.`;

  let calcHist=JSON.parse(localStorage.getItem('clei_hist_v3')||'[]');

  function initWelcome(){
    addMsg('b',`<div class="ar">
      <div class="ar-hdr"><div class="ar-hdr-ic">✦</div><div class="ar-hdr-title">Bem-vindo ao Clei v3.0</div><div class="ar-hdr-badge">by Plascoy</div></div>
      <div class="ar-text">Olá! Sou a <strong>Clei</strong>, IA matemática com régua e scanner de página integrados.</div>
      <div class="ar-steps">
        <div class="ar-step"><div class="ar-step-n">🔢</div><div class="ar-step-t">Álgebra, equações, sistemas e muito mais</div></div>
        <div class="ar-step"><div class="ar-step-n">∫</div><div class="ar-step-t">Cálculo diferencial e integral passo a passo</div></div>
        <div class="ar-step"><div class="ar-step-n">📏</div><div class="ar-step-t">Régua: meça qualquer elemento da página em pixels</div></div>
        <div class="ar-step"><div class="ar-step-n">🔍</div><div class="ar-step-t">Scanner: analisa o conteúdo da página com IA</div></div>
      </div>
      <div class="ar-concept"><div class="ar-concept-lbl">💡 Dica</div><div class="ar-concept-txt">Clique em 📏 para ativar a régua ou 🔍 Scan para analisar esta página automaticamente com IA!</div></div>
    </div>`);
  }

  async function sendMessage(isScan=false){
    const q=inp.value.trim();
    if(!q)return;
    inp.value='';inp.style.height='auto';sendBt.disabled=true;
    if(!isScan) addMsg('u',q.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
    else addMsg('u','🔍 <em>Analisando conteúdo da página...</em>');
    const typ=addMsg('b','',true);

    try{
      const resp=await fetch('https://openrouter.ai/api/v1/chat/completions',{
        method:'POST',
        headers:{'Authorization':`Bearer ${API_KEY}`,'Content-Type':'application/json','HTTP-Referer':location.href,'X-Title':'Clei Math AI by Plascoy'},
        body:JSON.stringify({model:API_MDL,messages:[{role:'system',content:API_SYS},{role:'user',content:q}],max_tokens:1600,temperature:0.18})
      });
      if(!resp.ok) throw new Error('HTTP '+resp.status);
      const data=await resp.json();
      const aiTxt=data.choices?.[0]?.message?.content||'';
      typ.remove();
      if(aiTxt){
        addMsg('b',formatReply(aiTxt));
        calcHist.unshift({q:q.slice(0,80),result:aiTxt.slice(0,100),ts:new Date().toLocaleString('pt-BR')});
      } else addMsg('b',buildLocalReply(q));
    }catch(err){
      typ.remove();
      addMsg('b',buildLocalReply(q)+`<div style="margin-top:8px;font-size:9.5px;color:rgba(255,100,80,.45);font-family:'JetBrains Mono',monospace">⚠ API offline — motor local ativo</div>`);
      const {result}=solveMath(q);
      calcHist.unshift({q:q.slice(0,80),result,ts:new Date().toLocaleString('pt-BR')});
    }
    if(calcHist.length>80)calcHist.pop();
    localStorage.setItem('clei_hist_v3',JSON.stringify(calcHist));
    sendBt.disabled=false;inp.focus();
  }

  /* ════════════════════════════════════════════════════════════
     LOCAL MATH ENGINE
  ════════════════════════════════════════════════════════════ */
  function solveMath(q){
    const t=q.toLowerCase().trim();
    const bh=q.match(/(-?\d*\.?\d*)\s*x[²2]\s*([+\-]\s*\d*\.?\d*)\s*x\s*([+\-]\s*\d*\.?\d*)\s*=\s*0/i);
    if(bh){
      let a=parseFloat(bh[1].replace(/\s/g,'')||'1')||1,b=parseFloat(bh[2].replace(/\s/g,''))||0,c=parseFloat(bh[3].replace(/\s/g,''))||0;
      const D=b*b-4*a*c;
      const steps=[`a=${a}, b=${b}, c=${c}`,`Δ=${b}²−4×${a}×${c} = ${D}`];
      if(D<0)return{steps,result:'Δ < 0 → Sem raízes reais'};
      const x1=(-b+Math.sqrt(D))/(2*a),x2=(-b-Math.sqrt(D))/(2*a);
      return{steps,result:D===0?`x = ${x1.toFixed(6)}`:`x₁ = ${x1.toFixed(6)}  |  x₂ = ${x2.toFixed(6)}`};
    }
    const pct=t.match(/(\d+\.?\d*)\s*%\s*de\s*(\d+\.?\d*)/);
    if(pct){const r=(parseFloat(pct[1])/100)*parseFloat(pct[2]);return{steps:[`(${pct[1]}/100) × ${pct[2]}`],result:r.toFixed(4)};}
    if(t.includes('fibonacci')){const nm=t.match(/(\d+)/);if(nm){const n=Math.min(parseInt(nm[1]),25);let a=0,b=1,s=[0,1];for(let i=2;i<n;i++){[a,b]=[b,a+b];s.push(b);}return{steps:['F(n)=F(n-1)+F(n-2)'],result:s.slice(0,n).join(', ')};}}
    const fac=t.match(/fatorial\s+de?\s*(\d+)/);if(fac){const n=parseInt(fac[1]);if(n<=20){let r=1;for(let i=2;i<=n;i++)r*=i;return{steps:[`${n}!=1×2×...×${n}`],result:`${n}! = ${r}`};}}
    if(t.includes('média')||t.includes('media')){const nums=q.match(/-?\d+\.?\d*/g);if(nums&&nums.length>1){const arr=nums.map(Number),sum=arr.reduce((a,b)=>a+b,0),m=sum/arr.length,s=[...arr].sort((a,b)=>a-b),mid=Math.floor(s.length/2),med=s.length%2?s[mid]:(s[mid-1]+s[mid])/2,v=arr.reduce((a,x)=>a+(x-m)**2,0)/arr.length;return{steps:[`Soma=${sum}, n=${arr.length}`],result:`Média=${m.toFixed(4)} | Mediana=${med} | Desvio=${Math.sqrt(v).toFixed(4)}`};}}
    try{const safe=q.replace(/\^/g,'**').replace(/[^0-9+\-*/().^%\s]/g,'').trim();if(safe.length>1){const r=Function('"use strict";return('+safe+')')();if(typeof r==='number'&&isFinite(r))return{steps:[q],result:parseFloat(r.toFixed(10)).toString()};}}catch(e){}
    return{steps:[],result:'Pergunte como: "resolva x²+5x+6=0", "derivada de 3x²", "18% de 450"'};
  }

  function buildLocalReply(q){
    const{steps,result}=solveMath(q);
    const sh=steps.map((s,i)=>`<div class="ar-step"><div class="ar-step-n">${i+1}</div><div class="ar-step-t">${s}</div></div>`).join('');
    return `<div class="ar">
      <div class="ar-hdr"><div class="ar-hdr-ic">⚡</div><div class="ar-hdr-title">Motor Local · Clei</div><div class="ar-hdr-badge">offline</div></div>
      ${steps.length?`<div class="ar-sec"><div class="ar-lbl">🔢 Resolução</div><div class="ar-steps">${sh}</div></div>`:''}
      <div class="ar-result"><div class="ar-result-lbl">✓ Resultado</div><div class="ar-result-val">${result}</div></div>
    </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     CALCULATOR
  ════════════════════════════════════════════════════════════ */
  let cExpr='';const cE=$i('cc-expr'),cV=$i('cc-val');
  document.querySelectorAll('.ck').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const k=btn.dataset.k;
      if(k==='AC'){cExpr='';cV.textContent='0';cE.textContent='';cV.className='cc-val';return;}
      if(k==='DEL'){cExpr=cExpr.slice(0,-1);cV.textContent=cExpr||'0';return;}
      if(k==='='){
        try{
          const safe=cExpr.replace(/sqrt\(/g,'Math.sqrt(').replace(/log\(/g,'Math.log10(').replace(/ln\(/g,'Math.log(').replace(/sin\(/g,'Math.sin(').replace(/cos\(/g,'Math.cos(').replace(/tan\(/g,'Math.tan(').replace(/\^/g,'**');
          const res=Function('"use strict";return('+safe+')')();
          cE.textContent=cExpr+' =';
          const d=parseFloat(res.toFixed(10));
          cV.textContent=d;cV.className='cc-val';
          calcHist.unshift({q:cExpr,result:d.toString(),ts:new Date().toLocaleString('pt-BR')});
          localStorage.setItem('clei_hist_v3',JSON.stringify(calcHist));
          cExpr=d.toString();
        }catch(e){cV.textContent='Erro de sintaxe';cV.className='cc-val err';}
        return;
      }
      cExpr+=k;cV.textContent=cExpr;cE.textContent='';cV.className='cc-val';
    });
  });

  /* ════════════════════════════════════════════════════════════
     HISTORY
  ════════════════════════════════════════════════════════════ */
  function renderHistory(){
    const el=$i('clei-hist-list');
    if(!calcHist.length){el.innerHTML='<div class="chi-empty">Nenhum cálculo ainda.</div>';return;}
    el.innerHTML=calcHist.map((h,i)=>`
      <div class="chi" data-i="${i}">
        <div class="chi-ts">${h.ts}</div>
        <div class="chi-q">${h.q}</div>
        <div class="chi-r">${(h.result||'').slice(0,60)}</div>
      </div>`).join('');
    el.querySelectorAll('.chi').forEach(item=>{item.addEventListener('click',()=>{inp.value=calcHist[parseInt(item.dataset.i)].q;document.querySelector('[data-t="chat"]').click();});});
  }
  $i('ch-clear').addEventListener('click',()=>{calcHist=[];localStorage.removeItem('clei_hist_v3');renderHistory();});

  /* ════════════════════════════════════════════════════════════
     FORMULAS
  ════════════════════════════════════════════════════════════ */
  const FMLS=[
    {cat:'Álgebra',title:'Bhaskara',expr:'x = (−b ± √Δ) / 2a',desc:'Δ = b²−4ac'},
    {cat:'Álgebra',title:'Equação 1º grau',expr:'ax + b = c  →  x = (c−b)/a',desc:''},
    {cat:'Geometria',title:'Área do círculo',expr:'A = π · r²',desc:''},
    {cat:'Geometria',title:'Área do triângulo',expr:'A = (b · h) / 2',desc:''},
    {cat:'Geometria',title:'Pitágoras',expr:'c² = a² + b²',desc:''},
    {cat:'Geometria',title:'Volume esfera',expr:'V = (4/3) · π · r³',desc:''},
    {cat:'Geometria',title:'Volume cilindro',expr:'V = π · r² · h',desc:''},
    {cat:'Cálculo',title:'Derivada potência',expr:"d/dx(xⁿ) = n · xⁿ⁻¹",desc:''},
    {cat:'Cálculo',title:'Integral potência',expr:'∫xⁿ dx = xⁿ⁺¹/(n+1) + C',desc:''},
    {cat:'Cálculo',title:'Regra do produto',expr:"(fg)' = f'g + fg'",desc:''},
    {cat:'Trigonometria',title:'Seno',expr:'sen(θ) = Cateto Oposto / Hipotenusa',desc:''},
    {cat:'Trigonometria',title:'Cosseno',expr:'cos(θ) = Cateto Adjacente / Hipotenusa',desc:''},
    {cat:'Trigonometria',title:'Tangente',expr:'tan(θ) = sen(θ) / cos(θ)',desc:''},
    {cat:'Trigonometria',title:'Lei dos Cossenos',expr:'a² = b² + c² − 2bc·cos(A)',desc:''},
    {cat:'Estatística',title:'Média aritmética',expr:'x̄ = Σxᵢ / n',desc:''},
    {cat:'Estatística',title:'Desvio padrão',expr:'σ = √(Σ(xᵢ−x̄)² / n)',desc:''},
    {cat:'Financeiro',title:'Juros compostos',expr:'M = C · (1+i)ⁿ',desc:'C=capital, i=taxa, n=períodos'},
    {cat:'Financeiro',title:'Juros simples',expr:'J = C · i · t',desc:''},
    {cat:'Sequências',title:'PA — Termo geral',expr:'aₙ = a₁ + (n−1)·r',desc:''},
    {cat:'Sequências',title:'PG — Termo geral',expr:'aₙ = a₁ · qⁿ⁻¹',desc:''},
    {cat:'Combinatória',title:'Combinação',expr:'C(n,k) = n! / (k!·(n−k)!)',desc:''},
    {cat:'Combinatória',title:'Permutação',expr:'Pₙ = n!',desc:''},
  ];

  const fL=$i('clei-form-list');let lCat='';
  fL.innerHTML=FMLS.map(f=>{
    let h='';if(f.cat!==lCat){h=`<div class="cf-cat">${f.cat}</div>`;lCat=f.cat;}
    return `${h}<div class="cf-card" data-title="${f.title}" data-expr="${f.expr}">
      <div class="cf-title">${f.title}</div>
      <div class="cf-expr">${f.expr}</div>
      ${f.desc?`<div class="cf-desc">${f.desc}</div>`:''}
    </div>`;
  }).join('');
  fL.querySelectorAll('.cf-card').forEach(card=>{
    card.addEventListener('click',()=>{inp.value=`Explique e resolva: ${card.dataset.title} — ${card.dataset.expr}`;document.querySelector('[data-t="chat"]').click();});
  });

  /* ════════════════════════════════════════════════════════════
     DRAG & RESIZE
  ════════════════════════════════════════════════════════════ */
  let drg=false,rsz=false,dX=0,dY=0,rX=0,rY=0,rW=0,rH=0;
  $i('clei-hdr').addEventListener('mousedown',e=>{
    if(e.target.closest('.hdr-tools'))return;
    drg=true;const r=root.getBoundingClientRect();dX=e.clientX-r.left;dY=e.clientY-r.top;
  });
  $i('clei-rh').addEventListener('mousedown',e=>{rsz=true;rX=e.clientX;rY=e.clientY;rW=root.offsetWidth;rH=root.offsetHeight;e.preventDefault();});
  document.addEventListener('mousemove',e=>{
    if(drg){let x=Math.max(0,Math.min(e.clientX-dX,window.innerWidth-root.offsetWidth));let y=Math.max(0,Math.min(e.clientY-dY,window.innerHeight-root.offsetHeight));root.style.left=x+'px';root.style.top=y+'px';root.style.right='auto';root.style.bottom='auto';}
    if(rsz){root.style.width=Math.max(420,rW+(e.clientX-rX))+'px';root.style.height=Math.max(520,rH+(e.clientY-rY))+'px';}
  });
  document.addEventListener('mouseup',()=>{drg=false;rsz=false;});

  /* ════════════════════════════════════════════════════════════
     RULER MEASURE MODE
  ════════════════════════════════════════════════════════════ */
  $i('clei-ruler-btn').addEventListener('dblclick',e=>{
    e.preventDefault();
    if(!rulerActive){toggleRuler();}
    measMode=!measMode;
    rulerOverlay.classList.toggle('measuring',measMode);
    toast(measMode?'📐 Modo medição ativo — clique para marcar pontos':'📐 Modo medição desativado','📐');
  });

  console.log('%c✦ Clei v3 by Plascoy ✦','background:linear-gradient(90deg,#5533ff,#00ccff);color:#fff;font-weight:900;font-size:16px;padding:6px 16px;border-radius:8px');
})();
