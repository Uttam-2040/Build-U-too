/* ============================================
   BUILD YOU TOO - Main OS Engine
   main.js
   ============================================ */

import './apps.js';

// ============ GLOBAL STATE ============
const BYT = {
  windows: {},
  zIndex: 100,
  activeWin: null,
  termHistory: {},
  termHistoryIdx: {},
  termTabs: {},
  bootTime: Date.now(),
  wallpapers: [
    'linear-gradient(135deg, #0a0a1a 0%, #0d1030 50%, #0a0a1a 100%)',
    'radial-gradient(ellipse at 20% 50%, #1a0030 0%, #0a0010 60%, #000 100%)',
    'linear-gradient(135deg, #001a0a 0%, #0a2010 50%, #001510 100%)',
    'radial-gradient(ellipse at center, #001a3a 0%, #000 70%)',
    'linear-gradient(135deg, #1a0a00 0%, #2a1000 50%, #0a0500 100%)',
  ],
  currentWallpaper: 0,
};

/// ============ BOOT SEQUENCE ============
(function boot() {
  const savedTheme = localStorage.getItem('buildu_theme') || 'cyberpunk';
  document.body.dataset.theme = savedTheme;

  const canvas = document.getElementById('matrix-canvas');
  startMatrix(canvas);

  const bootMsgs = [
    '[    0.000000] BuildU 1.0 (Linux BUILD-U-5.15.0-pentest-x86_64)',
    '[    0.000042] Command line: BOOT_IMAGE=/vmlinuz root=/dev/sda1 quiet splash',
    '[    0.124532] BIOS-provided physical RAM map: 32768MB available',
    '[    0.241234] tsc: Detected 3600.012 MHz processor (24 cores)',
    '[    0.356721] RCU: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=24',
    '[    0.487932] Loading initial ramdisk and cryptographic modules...',
    '[    0.601234] ACPI: RSDP 0x00000000000F0490 000024 (v02 BOCHS)',
    '[    0.734521] Starting udev kernel device manager... [  OK  ]',
    '[    0.891234] Loading BuildU hardware-accelerated security drivers...',
    '[    1.023456] Mounting virtual file system (VFS)... [  OK  ]',
    '[    1.156789] Initializing network interfaces (eth0, wlan0)... [  OK  ]',
    '[    1.312345] Starting OpenSSH 8.9p1 daemon... [  OK  ]',
    '[    1.445678] Loading penetration testing suites & signatures... [  OK  ]',
    '[    1.589012] Starting Metasploit Framework RPC daemon...',
    '[    1.734523] Loading Nmap 7.94 service detection signatures... [  OK  ]',
    '[    1.867890] Initializing WebCrypto acceleration for hash cracking...',
    '[    2.023456] Loading 603 cyber security tools... [  OK  ]',
    '[    2.178901] Starting BuildU Glass Desktop Environment...',
    '[    2.312345] BuildU OS ready. Welcome root.',
  ];

  const logEl = document.getElementById('boot-log');
  const progressEl = document.getElementById('boot-progress');
  let i = 0;

  const bootInterval = setInterval(() => {
    if(i < bootMsgs.length) {
      logEl.textContent += bootMsgs[i] + '\n';
      logEl.scrollTop = logEl.scrollHeight;
      progressEl.style.width = `${Math.floor(((i+1)/bootMsgs.length)*100)}%`;
      i++;
    } else {
      clearInterval(bootInterval);
      setTimeout(() => {
        document.getElementById('boot-screen').style.opacity = '0';
        document.getElementById('boot-screen').style.transition = 'opacity 0.7s';
        setTimeout(() => {
          document.getElementById('boot-screen').style.display = 'none';
          document.getElementById('login-screen').style.display = 'flex';
          startMatrix(document.getElementById('login-canvas'));
          document.getElementById('login-pass').focus();
        }, 700);
      }, 600);
    }
  }, 95);
})();

// ============ MATRIX RAIN ============
function startMatrix(canvas) {
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF!@#$%^&*()';
  const fontSize = 12;
  const cols = Math.floor(canvas.width / fontSize);
  const drops = Array(cols).fill(1);
  const colors = ['#00f5ff', '#00ff88', '#a855f7', '#38bdf8'];

  setInterval(() => {
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drops.forEach((y, x) => {
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];
      ctx.fillText(chars[Math.floor(Math.random()*chars.length)], x*fontSize, y*fontSize);
      if(y*fontSize > canvas.height && Math.random() > 0.975) drops[x] = 0;
      drops[x]++;
    });
  }, 45);
}

// ============ LOGIN ============
window.doLogin = function() {
  const user = document.getElementById('login-user').value;
  const pass = document.getElementById('login-pass').value;
  if((user === 'root' && pass === 'toor') || (user === 'admin' && pass === 'admin') || pass === '') {
    if(typeof playAudio === 'function') playAudio('login');
    document.getElementById('login-screen').style.opacity = '0';
    document.getElementById('login-screen').style.transition = 'opacity 0.6s';
    setTimeout(() => {
      document.getElementById('login-screen').style.display = 'none';
      showDesktop();
      if(typeof showToast === 'function') {
        showToast('Access Granted', 'Welcome to BuildU Security OS', 'success', '🛡️');
      }
    }, 600);
  } else {
    if(typeof playAudio === 'function') playAudio('error');
    const btn = document.getElementById('login-btn');
    btn.textContent = 'Invalid credentials!';
    btn.style.borderColor = '#ef4444';
    btn.style.color = '#ef4444';
    setTimeout(() => { btn.textContent = 'LOGIN →'; btn.style.borderColor = ''; btn.style.color = ''; }, 2000);
  }
};

document.getElementById('login-pass')?.addEventListener('keydown', e => {
  if(e.key === 'Enter') doLogin();
});

// ============ DESKTOP ============
function showDesktop() {
  const desktop = document.getElementById('desktop');
  desktop.style.display = 'block';
  desktop.style.opacity = '0';
  desktop.style.transition = 'opacity 0.5s';
  setTimeout(() => desktop.style.opacity = '1', 50);
  setDesktopWallpaper(BYT.currentWallpaper);
  startClock();

  // Welcome terminal after a brief delay
  setTimeout(() => openApp('terminal'), 800);
}

function setDesktopWallpaper(idx) {
  const desktop = document.getElementById('desktop');
  desktop.style.background = BYT.wallpapers[idx];
}

function startClock() {
  const update = () => {
    const now = new Date();
    const el = document.getElementById('tray-time');
    if(el) el.textContent = now.toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
  };
  update();
  setInterval(update, 1000);
}

// ============ APP MENU ============
window.toggleAppMenu = function() {
  const menu = document.getElementById('app-menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
};

window.filterApps = function() {
  const q = document.getElementById('app-search').value.toLowerCase();
  document.querySelectorAll('.app-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
  document.querySelectorAll('.app-category').forEach(cat => {
    const visible = [...cat.querySelectorAll('.app-item')].some(i=>i.style.display!=='none');
    cat.querySelector('.category-title').style.display = visible ? '' : 'none';
  });
};

// Close app menu on outside click
document.addEventListener('click', e => {
  if(!e.target.closest('#app-menu') && !e.target.closest('#app-menu-btn')) {
    document.getElementById('app-menu').style.display = 'none';
  }
  if(!e.target.closest('#context-menu')) {
    document.getElementById('context-menu').style.display = 'none';
  }
});

// ============ WINDOW MANAGEMENT ============
window.openApp = function(appId) {
  document.getElementById('app-menu').style.display = 'none';
  const def = APP_DEFS[appId];
  if(!def) return;

  const winId = `${appId}-${Date.now()}`;
  const win = createWindow(winId, def.title, def.icon, def.w, def.h, appId);
  BYT.windows[winId] = { appId, el: win };
  document.getElementById('windows-container').appendChild(win);
  focusWindow(winId);
  addTaskbarBtn(winId, def.icon + ' ' + def.title);

  // Animate in
  win.classList.add('animate-in');

  // Initialize app content
  initApp(appId, winId);
};

function createWindow(winId, title, icon, w, h, appId) {
  const maxW = window.innerWidth - 60;
  const maxH = window.innerHeight - 80;
  w = Math.min(w, maxW); h = Math.min(h, maxH);
  const x = 60 + (Object.keys(BYT.windows).length % 8) * 24;
  const y = 40 + (Object.keys(BYT.windows).length % 6) * 24;

  const win = document.createElement('div');
  win.className = 'window focused';
  win.id = `win-${winId}`;
  win.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${h}px;z-index:${++BYT.zIndex}`;
  win.innerHTML = `
    <div class="window-titlebar" id="tb-${winId}">
      <div class="win-controls">
        <div class="win-btn close" onclick="closeWindow('${winId}')"></div>
        <div class="win-btn minimize" onclick="minimizeWindow('${winId}')"></div>
        <div class="win-btn maximize" onclick="maximizeWindow('${winId}')"></div>
      </div>
      <div class="win-icon">${icon}</div>
      <div class="win-title">${title}</div>
    </div>
    <div class="window-body" id="wb-${winId}"></div>
    <div class="window-resize" id="resize-${winId}"></div>`;

  win.addEventListener('mousedown', () => focusWindow(winId));
  makeDraggable(win, document.getElementById ? win : win, winId);
  makeResizable(win, winId);
  return win;
}

function initApp(appId, winId) {
  const body = document.getElementById(`wb-${winId}`);
  if(!body) return;

  const builders = {
    terminal: buildTerminalHTML,
    filemanager: buildFileManagerHTML,
    nmap: buildNmapHTML,
    hashcracker: buildHashCrackerHTML,
    sqlmap: buildSQLMapHTML,
    metasploit: buildMetasploitHTML,
    wireshark: buildWiresharkHTML,
    aircrack: buildAircrackHTML,
    burpsuite: buildBurpSuiteHTML,
    hydra: buildHydraHTML,
    john: buildJohnHTML,
    browser: buildBrowserHTML,
    texteditor: buildTextEditorHTML,
    settings: buildSettingsHTML,
    sysinfo: buildSysInfoHTML,
    whois: buildWhoisHTML,
    dnslookup: buildDNSHTML,
    traceroute: buildTracerouteHTML,
    subdomains: buildSubdomainsHTML,
    nikto: buildNiktoHTML,
    openvas: buildOpenVASHTML,
    wpscan: buildWPScanHTML,
    xsshunter: buildXSSHTML,
    dirb: buildDirbHTML,
    wordlist: buildWordlistHTML,
    wifianalyzer: buildWifiAnalyzerHTML,
    kismet: buildKismetHTML,
    setoolkit: buildSETHTML,
    shellgen: buildShellgenHTML,
    arpspoof: buildArpSpoofHTML,
    sslstrip: buildSSLStripHTML,
    binwalk: buildBinwalkHTML,
    autopsy: buildAutopsyHTML,
    steghide: buildStegHideHTML,
    mcphub: buildMCPHubHTML,
    aicopilot: buildAICopilotHTML,
  };

  if(builders[appId]) {
    body.innerHTML = builders[appId](winId);
    if(appId === 'terminal') initTerminal(winId);
    if(appId === 'sysinfo') initSysInfo(winId);
  }
}

function focusWindow(winId) {
  document.querySelectorAll('.window').forEach(w => {
    w.classList.remove('focused');
    w.style.zIndex = parseInt(w.style.zIndex) || BYT.zIndex - 1;
  });
  document.querySelectorAll('.taskbar-win-btn').forEach(b => b.classList.remove('active'));
  const win = document.getElementById(`win-${winId}`);
  if(win) { win.classList.add('focused'); win.style.zIndex = ++BYT.zIndex; }
  const tbBtn = document.getElementById(`tbtn-${winId}`);
  if(tbBtn) tbBtn.classList.add('active');
  BYT.activeWin = winId;
}

window.closeWindow = function(winId) {
  const win = document.getElementById(`win-${winId}`);
  if(win) {
    win.style.opacity = '0'; win.style.transform = 'scale(0.95)';
    win.style.transition = 'all 0.2s';
    setTimeout(() => win.remove(), 200);
  }
  const tbBtn = document.getElementById(`tbtn-${winId}`);
  if(tbBtn) tbBtn.remove();
  delete BYT.windows[winId];
  if(BYT.activeWin === winId) BYT.activeWin = null;
};

window.minimizeWindow = function(winId) {
  const win = document.getElementById(`win-${winId}`);
  if(win) {
    win.style.transform = 'scale(0.1) translateY(500px)';
    win.style.opacity = '0';
    win.style.transition = 'all 0.3s';
    setTimeout(() => win.style.display = 'none', 300);
  }
  const tbBtn = document.getElementById(`tbtn-${winId}`);
  if(tbBtn) {
    tbBtn.classList.remove('active');
    tbBtn.onclick = () => unminimizeWindow(winId);
  }
};

function unminimizeWindow(winId) {
  const win = document.getElementById(`win-${winId}`);
  if(win) {
    win.style.display = 'flex';
    setTimeout(() => {
      win.style.transform = ''; win.style.opacity = '1';
      win.style.transition = 'all 0.3s';
    }, 10);
  }
  focusWindow(winId);
  const tbBtn = document.getElementById(`tbtn-${winId}`);
  if(tbBtn) tbBtn.onclick = () => focusWindow(winId);
}

let maximizedWindows = {};
window.maximizeWindow = function(winId) {
  const win = document.getElementById(`win-${winId}`);
  if(!win) return;
  if(maximizedWindows[winId]) {
    const prev = maximizedWindows[winId];
    win.style.left = prev.left; win.style.top = prev.top;
    win.style.width = prev.width; win.style.height = prev.height;
    win.style.transition = 'all 0.2s';
    delete maximizedWindows[winId];
  } else {
    maximizedWindows[winId] = {left:win.style.left,top:win.style.top,width:win.style.width,height:win.style.height};
    win.style.transition = 'all 0.2s';
    win.style.left = '0'; win.style.top = '0';
    win.style.width = '100vw'; win.style.height = `calc(100vh - var(--taskbar-h))`;
  }
};

function addTaskbarBtn(winId, label) {
  const container = document.getElementById('taskbar-windows');
  const btn = document.createElement('div');
  btn.className = 'taskbar-win-btn active';
  btn.id = `tbtn-${winId}`;
  btn.textContent = label.substring(0,20);
  btn.title = label;
  btn.onclick = () => {
    const win = document.getElementById(`win-${winId}`);
    if(win && win.style.display === 'none') unminimizeWindow(winId);
    else focusWindow(winId);
  };
  container.appendChild(btn);
}

// ============ DRAG ============
function makeDraggable(win, handle, winId) {
  // Use the titlebar element after it's created
  setTimeout(() => {
    const tb = document.getElementById(`tb-${winId}`);
    if(!tb) return;
    let startX, startY, startLeft, startTop, isDragging = false;
    tb.addEventListener('mousedown', e => {
      if(e.target.closest('.win-controls')) return;
      isDragging = true;
      startX = e.clientX; startY = e.clientY;
      startLeft = parseInt(win.style.left)||0;
      startTop = parseInt(win.style.top)||0;
      win.style.transition = 'none';
      e.preventDefault();
    });
    document.addEventListener('mousemove', e => {
      if(!isDragging) return;
      const newLeft = startLeft + (e.clientX - startX);
      const newTop = Math.max(0, startTop + (e.clientY - startY));
      win.style.left = newLeft + 'px';
      win.style.top = newTop + 'px';
    });
    document.addEventListener('mouseup', () => { isDragging = false; });
  }, 10);
}

// ============ RESIZE ============
function makeResizable(win, winId) {
  setTimeout(() => {
    const resizer = document.getElementById(`resize-${winId}`);
    if(!resizer) return;
    let startX, startY, startW, startH, isResizing = false;
    resizer.addEventListener('mousedown', e => {
      isResizing = true;
      startX = e.clientX; startY = e.clientY;
      startW = parseInt(win.style.width)||600;
      startH = parseInt(win.style.height)||400;
      win.style.transition = 'none';
      e.preventDefault(); e.stopPropagation();
    });
    document.addEventListener('mousemove', e => {
      if(!isResizing) return;
      const newW = Math.max(300, startW + (e.clientX - startX));
      const newH = Math.max(200, startH + (e.clientY - startY));
      win.style.width = newW + 'px';
      win.style.height = newH + 'px';
    });
    document.addEventListener('mouseup', () => { isResizing = false; });
  }, 10);
}

// ============ CONTEXT MENU ============
document.getElementById('desktop').addEventListener('contextmenu', e => {
  if(e.target.closest('.window') || e.target.closest('#taskbar')) return;
  e.preventDefault();
  const menu = document.getElementById('context-menu');
  menu.style.display = 'block';
  menu.style.left = e.clientX + 'px';
  menu.style.top = Math.min(e.clientY, window.innerHeight - menu.offsetHeight - 40) + 'px';
});

// ============ AUDIO SYNTHESIZER ============
let audioCtx = null;
let audioVol = 0.75;

window.setAudioVolume = function(val) {
  audioVol = val / 100;
  const el = document.getElementById('cc-vol-val');
  if(el) el.textContent = `${val}%`;
};

window.playAudio = function(type) {
  if(audioVol <= 0) return;
  try {
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if(audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if(type === 'click') {
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.06 * audioVol, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.05);
      osc.start(now); osc.stop(now + 0.05);
    } else if(type === 'login' || type === 'success') {
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      gain.gain.setValueAtTime(0.08 * audioVol, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.28);
      osc.start(now); osc.stop(now + 0.28);
    } else if(type === 'error' || type === 'alert') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.setValueAtTime(180, now + 0.1);
      gain.gain.setValueAtTime(0.1 * audioVol, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.25);
      osc.start(now); osc.stop(now + 0.25);
    } else {
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.05 * audioVol, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.07);
      osc.start(now); osc.stop(now + 0.07);
    }
  } catch(e) {}
};

// ============ TOAST NOTIFICATION ENGINE ============
window.showToast = function(title, msg, type = 'info', icon = '⚡') {
  const container = document.getElementById('toast-container');
  if(!container) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>
  `;
  container.appendChild(t);
  playAudio(type === 'error' ? 'alert' : 'click');
  setTimeout(() => {
    t.style.animation = 'toastOut 0.25s forwards';
    setTimeout(() => t.remove(), 250);
  }, 4000);
};

// ============ CONTROL CENTER & THEMES ============
const THEMES = ['cyberpunk', 'kali-red', 'matrix', 'midnight-blue', 'stealth-oled'];

window.toggleControlCenter = function() {
  const cc = document.getElementById('control-center');
  if(!cc) return;
  cc.style.display = cc.style.display === 'none' ? 'block' : 'none';
  playAudio('click');
};

window.setTheme = function(themeName, btnEl) {
  document.body.dataset.theme = themeName;
  localStorage.setItem('buildu_theme', themeName);
  document.querySelectorAll('.cc-theme-btn').forEach(b => b.classList.remove('active'));
  if(btnEl) btnEl.classList.add('active');
  else {
    const found = document.querySelector(`.cc-theme-btn[data-theme="${themeName}"]`);
    if(found) found.classList.add('active');
  }
  showToast('Theme Changed', `Switched visual style to ${themeName.toUpperCase()}`, 'info', '🎨');
};

window.toggleThemeQuick = function() {
  const current = document.body.dataset.theme || 'cyberpunk';
  const idx = THEMES.indexOf(current);
  const next = THEMES[(idx + 1) % THEMES.length];
  setTheme(next);
};

window.lockScreen = function() {
  const desktop = document.getElementById('desktop');
  const login = document.getElementById('login-screen');
  const cc = document.getElementById('control-center');
  if(cc) cc.style.display = 'none';
  if(desktop) desktop.style.display = 'none';
  if(login) {
    login.style.display = 'flex';
    login.style.opacity = '1';
    const p = document.getElementById('login-pass');
    if(p) { p.value = ''; p.focus(); }
  }
  showToast('System Locked', 'Session credentials locked for root@buildu', 'warn', '🔒');
};

// ============ STATEFUL VIRTUAL FILE SYSTEM (VFS) ============
const VFS = {
  files: {
    '/root/flag.txt': 'CTF{BUILDU_ELITE_PRODUCTION_PENTESTER_2026}',
    '/root/exploit.py': '#!/usr/bin/env python3\n# BuildU Zero-Day Exploitation PoC\nimport socket, sys\ntarget = sys.argv[1] if len(sys.argv) > 1 else "192.168.1.105"\nprint(f"[*] Attacking target: {target}:80...")\nprint("[+] Memory corrupted, injecting shellcode...")\nprint("[+] Payload delivered! Spawned root shell on port 4444.")',
    '/root/targets.txt': '192.168.1.1\n192.168.1.105\n10.10.10.24\nscanme.buildu.org',
    '/root/notes.md': '# BuildU Pentest Engagement Notes\n- Discovered open port 21 (vsftpd 2.3.4 backdoor)\n- Database MySQL port 3306 credentials: root:toor\n- SSH keys dumped in /root/.ssh/\n- Secret API keys found in /var/www/config.php',
    '/root/.bashrc': 'export PATH=$PATH:/usr/local/sbin\nalias ll="ls -la"\nalias scan="nmap -sV -sC"\nalias update="apt update"',
    '/etc/passwd': 'root:x:0:0:root:/root:/bin/bash\nbuildu:x:1000:1000:BuildU User:/home/buildu:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin',
    '/etc/hosts': '127.0.0.1\tlocalhost\n127.0.1.1\tbuildu\n192.168.1.1\tgateway.corp\n10.10.10.24\ttarget.box',
    '/etc/hostname': 'buildu',
    '/usr/share/wordlists/rockyou.txt': 'password\n123456\n12345678\nqwerty\nadmin123\nroottoor\nletmein\nwelcome\nsuperman\nbuildu2026',
    '/tmp/payload.elf': '\x7fELF\x02\x01\x01\x00[BuildU Reverse Shell Binary 64-bit]',
    '/root/mcp-hub/README.md': '# MCP Hub - Model Context Protocol Framework\nFramework for creating and managing Model Context Protocol (MCP) servers and clients using uv.\nRun: mcp status or openApp("mcphub")',
    '/root/mcp-hub/claude_desktop_config.json': '{\n  "mcpServers": {\n    "buildu-security": {\n      "command": "python3",\n      "args": ["/root/mcp-hub/servers/buildu-security-mcp.py"]\n    },\n    "mcp-server-rag": {\n      "command": "python3",\n      "args": ["/root/mcp-hub/llm/mcp_server_rag.py"]\n    }\n  }\n}',
    '/root/mcp-hub/create_mcp_server.py': '#!/usr/bin/env python3\n# MCP Server Template Generator\n# Generates Model Context Protocol servers using uv and FastMCP\nimport os, sys\nprint("[+] BuildU MCP Server Generator armed and ready.")',
    '/root/mcp-hub/servers/buildu-security-mcp.py': '#!/usr/bin/env python3\n# BuildU Security MCP Server\nfrom mcp.server.fastmcp import FastMCP\nmcp = FastMCP("buildu-security-mcp")\n@mcp.tool()\ndef nmap_scan(target: str): return f"Scanned {target}"\nif __name__ == "__main__": mcp.run()',
    '/root/mcp-hub/llm/mcp_server_rag.py': '#!/usr/bin/env python3\n# RAG Intelligence Engine\nfrom fastapi import FastAPI\napp = FastAPI(title="BuildU RAG MCP")\nprint("[+] ChromaDB RAG Vector Store connected.")'
  },
  dirs: new Set(['/', '/root', '/root/Desktop', '/root/Documents', '/root/Downloads', '/root/tools', '/root/wordlists', '/root/mcp-hub', '/root/mcp-hub/servers', '/root/mcp-hub/mcp-servers', '/root/mcp-hub/llm', '/root/.config', '/root/.config/claude', '/home', '/home/buildu', '/etc', '/var', '/var/log', '/var/www', '/usr', '/usr/share', '/usr/share/wordlists', '/tmp', '/opt']),

  resolve(path, cwd = '/root') {
    if(!path) return cwd;
    if(path === '~' || path === '~/') return '/root';
    if(path.startsWith('~/')) path = '/root' + path.slice(1);
    let resolved = path.startsWith('/') ? path : (cwd === '/' ? '/' + path : cwd + '/' + path);
    const parts = resolved.split('/').filter(p => p && p !== '.');
    const stack = [];
    for(const p of parts) {
      if(p === '..') stack.pop();
      else stack.push(p);
    }
    return '/' + stack.join('/');
  },

  list(dir) {
    const norm = this.resolve(dir);
    const results = [];
    this.dirs.forEach(d => {
      if(d !== norm && d.startsWith(norm === '/' ? '/' : norm + '/')) {
        const sub = d.slice(norm === '/' ? 1 : norm.length + 1).split('/')[0];
        if(sub && !results.some(r => r.name === sub)) {
          results.push({ name: sub, isDir: true, icon: '📁', path: norm === '/' ? '/' + sub : norm + '/' + sub });
        }
      }
    });
    Object.keys(this.files).forEach(f => {
      const parent = f.substring(0, f.lastIndexOf('/')) || '/';
      if(parent === norm) {
        const fname = f.substring(f.lastIndexOf('/') + 1);
        const icon = fname.endsWith('.py') ? '🐍' : fname.endsWith('.sh') ? '📜' : fname.endsWith('.txt') ? '📄' : fname.endsWith('.md') ? '📝' : fname.endsWith('.elf') ? '⚙️' : '📄';
        results.push({ name: fname, isDir: false, icon, path: f, size: this.files[f].length });
      }
    });
    return results;
  },

  read(path, cwd = '/root') {
    const full = this.resolve(path, cwd);
    return this.files[full] !== undefined ? this.files[full] : null;
  },

  write(path, content, cwd = '/root') {
    const full = this.resolve(path, cwd);
    const parent = full.substring(0, full.lastIndexOf('/')) || '/';
    this.dirs.add(parent);
    this.files[full] = content;
    window.dispatchEvent(new CustomEvent('vfs-change', { detail: { path: full } }));
    return true;
  },

  delete(path, cwd = '/root') {
    const full = this.resolve(path, cwd);
    let deleted = false;
    if(this.files[full] !== undefined) {
      delete this.files[full];
      deleted = true;
    }
    if(this.dirs.has(full)) {
      this.dirs.delete(full);
      deleted = true;
    }
    window.dispatchEvent(new CustomEvent('vfs-change', { detail: { path: full } }));
    return deleted;
  },

  mkdir(path, cwd = '/root') {
    const full = this.resolve(path, cwd);
    this.dirs.add(full);
    window.dispatchEvent(new CustomEvent('vfs-change', { detail: { path: full } }));
    return true;
  }
};
window.VFS = VFS;

const TERM_ENV = { USER:'root', HOME:'/root', SHELL:'/bin/bash', TERM:'xterm-256color', HOSTNAME:'buildu' };

function initTerminal(winId) {
  BYT.termHistory[winId] = [];
  BYT.termHistoryIdx[winId] = -1;
  BYT.termTabs[winId] = { tabs: ['bash 1'], activeTab: 0, cwd: ['/root'] };
  const out = document.getElementById(`to-0-${winId}`);
  printTerm(out, `<span class="success" style="font-weight:700">⚡ BuildU OS 1.0 (Rolling Release) - High Security Console</span>`);
  printTerm(out, `<span class="out" style="color:var(--text-secondary)">BuildU Linux root@buildu [${new Date().toLocaleString()}]</span>`);
  printTerm(out, `<span class="out" style="color:var(--text-dim)">Type 'help', 'neofetch', or 'buildu' for available tools.</span>`);
  printTerm(out, '');
  setTimeout(() => document.getElementById(`ti-${winId}`)?.focus(), 100);
}

function printTerm(out, html) {
  if(!out) return;
  const line = document.createElement('div');
  line.className = 'line';
  line.innerHTML = html;
  out.appendChild(line);
  out.scrollTop = out.scrollHeight;
}

window.termKeyDown = function(e, winId) {
  const input = document.getElementById(`ti-${winId}`);
  if(!input) return;
  const tab = BYT.termTabs[winId];
  const activeTabIdx = tab?.activeTab ?? 0;
  const out = document.getElementById(`to-${activeTabIdx}-${winId}`);
  const cwd = tab?.cwd[activeTabIdx] ?? '/root';

  if(e.key === 'Enter') {
    const cmd = input.value.trim();
    input.value = '';
    if(cmd) {
      BYT.termHistory[winId].unshift(cmd);
      BYT.termHistoryIdx[winId] = -1;
    }
    printTerm(out, `<span class="prompt">┌──(root㉿buildu)-[${cwd}]<br>└─# </span><span class="cmd">${escHtml(cmd)}</span>`);
    if(cmd) processTermCmd(cmd, out, winId, activeTabIdx);
  } else if(e.key === 'ArrowUp') {
    const hist = BYT.termHistory[winId];
    BYT.termHistoryIdx[winId] = Math.min(BYT.termHistoryIdx[winId]+1, hist.length-1);
    input.value = hist[BYT.termHistoryIdx[winId]] || '';
  } else if(e.key === 'ArrowDown') {
    BYT.termHistoryIdx[winId] = Math.max(BYT.termHistoryIdx[winId]-1, -1);
    input.value = BYT.termHistory[winId][BYT.termHistoryIdx[winId]] || '';
  } else if(e.key === 'Tab') {
    e.preventDefault();
    const partial = input.value.split(' ').pop();
    const cmds = ['mcp','mcp-hub','copilot','ai','uv','nmap','sqlmap','hydra','john','aircrack-ng','metasploit','msfconsole','nikto','gobuster','wfuzz','curl','wget','python3','bash','ssh','ftp','nc','netcat','ls','cd','cat','touch','mkdir','rm','nano','edit','echo','neofetch','buildu','theme','notify','grep','find','chmod','chown','ps','kill','ifconfig','ip','ping','traceroute','whois','dig','nslookup','dirb','wpscan','burpsuite','steghide','binwalk','autopsy'];
    const files = VFS.list(cwd).map(f => f.name);
    const candidate = [...cmds, ...files].find(c => c.startsWith(partial));
    if(candidate) {
      const parts = input.value.split(' ');
      parts[parts.length-1] = candidate;
      input.value = parts.join(' ');
    }
  }
};

function processTermCmd(cmd, out, winId, tabIdx) {
  // Handle output redirection: echo "hello" > file.txt
  if(cmd.includes(' > ') || cmd.includes(' >> ')) {
    const isAppend = cmd.includes(' >> ');
    const [leftPart, filePart] = cmd.split(isAppend ? ' >> ' : ' > ');
    const targetFile = filePart.trim();
    const tab = BYT.termTabs[winId];
    const cwd = tab?.cwd[tabIdx] ?? '/root';
    let text = leftPart.trim();
    if(text.toLowerCase().startsWith('echo ')) {
      text = text.substring(5).replace(/^['"]|['"]$/g, '');
    }
    const existing = isAppend ? (VFS.read(targetFile, cwd) || '') : '';
    VFS.write(targetFile, (existing ? existing + '\n' : '') + text, cwd);
    printTerm(out, `<span class="success">Wrote to ${targetFile}</span>`);
    return;
  }

  const parts = cmd.trim().split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);
  const tab = BYT.termTabs[winId];
  const cwd = tab?.cwd[tabIdx] ?? '/root';

  switch(command) {
    case 'help':
      printTerm(out, `<span class="info" style="font-weight:700">⚡ BuildU Core Commands:</span>`);
      [
        ['neofetch', 'Display BuildU system telemetry & ASCII banner'],
        ['buildu', 'Open BuildU command-line dashboard'],
        ['mcp [status|list|gui]', 'Model Context Protocol server manager & tools'],
        ['copilot [prompt]', 'Autonomous AI cybersecurity pentest agent'],
        ['uv run <script>', 'Fast Python package & script runner (mcp-hub)'],
        ['theme <name>', 'Switch theme (cyberpunk, kali-red, matrix, midnight-blue, stealth-oled)'],
        ['notify <text>', 'Send desktop notification toast'],
        ['ls, ll, dir', 'List files & directories in current directory'],
        ['cd <path>', 'Change directory (supports .., ~, /)'],
        ['cat <file>', 'Read file contents from VFS'],
        ['touch <file>', 'Create a new file in VFS'],
        ['mkdir <dir>', 'Create a new directory in VFS'],
        ['rm <file>', 'Delete a file or directory from VFS'],
        ['nano, edit <file>', 'Open file in BuildU Text Editor'],
        ['echo <text> > <file>', 'Write text to a file'],
        ['pwd', 'Print current working directory'],
        ['whoami, id', 'Print current user and privilege status'],
        ['uname -a', 'Display BuildU kernel information'],
        ['ifconfig, ip a', 'List network adapters and IP addresses'],
        ['ping <host>', 'Send live ICMP echo requests'],
        ['ps, netstat', 'List processes and network sockets'],
        ['nmap <target>', 'Scan target IP or hostname for open ports'],
        ['sqlmap, msfconsole', 'Launch web attack and exploit suites'],
        ['john, hydra', 'Execute password cracking engines'],
        ['clear', 'Clear console buffer'],
        ['exit', 'Close current terminal session'],
      ].forEach(([c,d]) => printTerm(out, `  <span class="success">${c.padEnd(26)}</span><span class="out">${d}</span>`));
      break;

    case 'neofetch':
      printTerm(out, `
<div style="display:flex;gap:20px;margin:8px 0;align-items:center">
  <pre style="color:var(--accent-cyan);font-weight:700;line-height:1.2;font-size:0.75rem">
  ██████╗ ██╗   ██╗██╗██╗     ██████╗ ██╗   ██╗
  ██╔══██╗██║   ██║██║██║     ██╔══██╗██║   ██║
  ██████╔╝██║   ██║██║██║     ██║  ██║██║   ██║
  ██╔══██╗██║   ██║██║██║     ██║  ██║██║   ██║
  ██████╔╝╚██████╔╝██║███████╗██████╔╝╚██████╔╝
  ╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝  ╚═════╝ </pre>
  <div style="font-size:0.78rem;line-height:1.6">
    <span style="color:var(--accent-cyan);font-weight:700">root@buildu</span><br>
    -------------------------<br>
    <span style="color:var(--accent-cyan)">OS:</span> BuildU Linux 1.0 x86_64 (Rolling)<br>
    <span style="color:var(--accent-cyan)">Host:</span> BuildU Security Station Pro<br>
    <span style="color:var(--accent-cyan)">Kernel:</span> 5.15.0-buildu-pentest-x86_64<br>
    <span style="color:var(--accent-cyan)">Uptime:</span> 4 hours, 18 mins<br>
    <span style="color:var(--accent-cyan)">Packages:</span> 603 (buildu-sec)<br>
    <span style="color:var(--accent-cyan)">Shell:</span> bash 5.2.15<br>
    <span style="color:var(--accent-cyan)">DE:</span> BuildU Glass UI (Hardware Accelerated)<br>
    <span style="color:var(--accent-cyan)">Theme:</span> ${document.body.dataset.theme || 'cyberpunk'}<br>
    <span style="color:var(--accent-cyan)">CPU:</span> AMD Ryzen 9 7950X (32) @ 4.500GHz<br>
    <span style="color:var(--accent-cyan)">Memory:</span> 4280MiB / 32150MiB (13%)
  </div>
</div>`);
      break;

    case 'buildu':
      printTerm(out, `<span class="info" style="font-weight:700">⚡ BuildU Cybersecurity OS Dashboard</span>`);
      printTerm(out, `<span class="out">Architecture: x86_64 | Hostname: buildu | Status: ARMED & ACTIVE</span>`);
      printTerm(out, `<span class="success">[+] 33 Security Tool Suites Installed and Operational</span>`);
      printTerm(out, `<span class="success">[+] Stateful VFS mounted at / (in-memory persistent)</span>`);
      printTerm(out, `<span class="info">Quick launch: 'nmap 127.0.0.1', 'neofetch', 'theme kali-red'</span>`);
      break;

    case 'mcp': case 'mcp-hub':
      const mcpSub = args[0]?.toLowerCase();
      if(mcpSub === 'gui') {
        openApp('mcphub');
        printTerm(out, `<span class="success">Opened MCP Hub Manager window.</span>`);
      } else if(mcpSub === 'list' || mcpSub === 'tools') {
        printTerm(out, `<span class="info" style="font-weight:700">⚡ Registered Model Context Protocol (MCP) Tools:</span>`);
        const tools = window.MCP_STATE?.tools || [];
        tools.forEach(t => {
          printTerm(out, `  <span style="color:var(--accent-cyan);font-weight:600">${t.name.padEnd(28)}</span> <span class="out">${t.desc}</span>`);
        });
      } else if(mcpSub === 'servers') {
        printTerm(out, `<span class="info" style="font-weight:700">⚡ Active MCP Servers:</span>`);
        const srvs = window.MCP_STATE?.servers || [];
        srvs.forEach(s => {
          const color = s.status === 'online' ? 'var(--accent-green)' : 'var(--accent-orange)';
          printTerm(out, `  <span style="color:${color}">[${s.status.toUpperCase()}]</span> <span style="font-weight:600">${s.name}</span> (${s.transport}, Port: ${s.port})`);
        });
      } else {
        printTerm(out, `<span class="info" style="font-weight:700">⚡ Model Context Protocol (MCP) Runtime v1.6.0</span>`);
        printTerm(out, `<span class="out">Framework: mcp-hub (Astral uv + FastMCP Python integration)</span>`);
        printTerm(out, `<span class="success">[+] 5 MCP Servers Configured (buildu-security-mcp, mcp-server-rag, cve-analyzer, weather, github)</span>`);
        printTerm(out, `<span class="success">[+] JSON-RPC 2.0 Transport Bridge Listening on 127.0.0.1:8765</span>`);
        printTerm(out, `<span class="out">Commands:</span>`);
        printTerm(out, `  <span class="success">mcp status</span>     <span class="out">Show connection status & registered endpoints</span>`);
        printTerm(out, `  <span class="success">mcp list</span>       <span class="out">List all tools & JSON-RPC signatures</span>`);
        printTerm(out, `  <span class="success">mcp servers</span>    <span class="out">Display all MCP servers and transports</span>`);
        printTerm(out, `  <span class="success">mcp gui</span>        <span class="out">Open graphical MCP Hub in BuildU Desktop</span>`);
      }
      break;

    case 'copilot': case 'ai':
      if(args.length > 0) {
        const prompt = args.join(' ');
        printTerm(out, `<span class="info">🤖 AI Copilot (MCP Agent): Planning execution for "${escHtml(prompt)}"...</span>`);
        setTimeout(() => {
          printTerm(out, `<span class="success">[+] Selected MCP Tool: buildu.nmap_scan</span>`);
          printTerm(out, `<span class="out">Target reconnaissance complete. 3 services detected. Launching Copilot window...</span>`);
          openApp('aicopilot');
          setTimeout(() => {
            const input = document.querySelector('[id^="copilot-input-"]');
            if(input) { input.value = prompt; sendCopilotMsg(input.id.replace('copilot-input-','')); }
          }, 300);
        }, 400);
      } else {
        openApp('aicopilot');
        printTerm(out, `<span class="success">Opened AI Pentest Copilot window.</span>`);
      }
      break;

    case 'uv':
      const uvSub = args[0]?.toLowerCase();
      if(uvSub === 'run') {
        const script = args[1] || 'XYZ.py';
        printTerm(out, `<span class="info">Using Python 3.11 environment via uv</span>`);
        printTerm(out, `<span class="success">[+] Running ${script}...</span>`);
        if(script.includes('create_mcp') || script.includes('mcp')) {
          printTerm(out, `<span class="out">[MCP Hub] Server running on stdio transport. Waiting for client handshake...</span>`);
        } else {
          printTerm(out, `<span class="out">Process exited with code 0 (success).</span>`);
        }
      } else if(uvSub === 'sync' || uvSub === 'init') {
        printTerm(out, `<span class="success">Resolved 42 packages in 32ms</span>`);
        printTerm(out, `<span class="success">Audited dependencies. Environment synchronized with uv.lock.</span>`);
      } else {
        printTerm(out, `<span class="info">uv 0.5.21 (Astral package installer & environment manager)</span>`);
        printTerm(out, `<span class="out">Usage: uv &lt;run|sync|add|init&gt; [args...]</span>`);
      }
      break;

    case 'theme':
      if(args[0] && THEMES.includes(args[0].toLowerCase())) {
        setTheme(args[0].toLowerCase());
        printTerm(out, `<span class="success">Theme changed to ${args[0].toLowerCase()}</span>`);
      } else {
        printTerm(out, `<span class="warn">Usage: theme &lt;name&gt;</span>`);
        printTerm(out, `<span class="out">Available: ${THEMES.join(', ')}</span>`);
      }
      break;

    case 'notify':
      const msg = args.join(' ') || 'BuildU Security Alert: Port scan active';
      showToast('BuildU Terminal', msg, 'info', '💬');
      printTerm(out, `<span class="success">Toast notification dispatched: "${msg}"</span>`);
      break;

    case 'ls': case 'll': case 'dir':
      const targetDir = args[0] ? VFS.resolve(args[0], cwd) : cwd;
      const items = VFS.list(targetDir);
      printTerm(out, `<span class="info">total ${items.length * 4} (${targetDir})</span>`);
      if(items.length === 0) {
        printTerm(out, `<span class="out" style="color:var(--text-dim)">(empty directory)</span>`);
      } else {
        items.forEach(it => {
          const perm = it.isDir ? 'drwxr-xr-x' : '-rw-r--r--';
          const color = it.isDir ? 'var(--accent-cyan)' : (it.name.endsWith('.py') || it.name.endsWith('.sh') ? 'var(--accent-green)' : 'var(--text-primary)');
          printTerm(out, `<span class="out" style="font-family:var(--font-mono)">${perm}  root root  ${(it.size||4096).toString().padStart(6)} B  <span style="color:${color};font-weight:${it.isDir?'700':'400'}">${it.icon} ${it.name}${it.isDir?'/':''}</span></span>`);
        });
      }
      break;

    case 'pwd':
      printTerm(out, `<span class="out">${cwd}</span>`);
      break;

    case 'cd':
      const dest = args[0] || '~';
      const resolvedDest = VFS.resolve(dest, cwd);
      if(VFS.dirs.has(resolvedDest)) {
        if(tab) tab.cwd[tabIdx] = resolvedDest;
        updatePrompt(winId, resolvedDest);
      } else {
        printTerm(out, `<span class="err">cd: no such file or directory: ${args[0]}</span>`);
      }
      break;

    case 'cat':
      if(!args[0]) {
        printTerm(out, `<span class="warn">Usage: cat &lt;file&gt;</span>`);
      } else {
        const fileContent = VFS.read(args[0], cwd);
        if(fileContent !== null) {
          printTerm(out, `<pre style="color:var(--text-primary);font-family:var(--font-mono);white-space:pre-wrap;margin:4px 0">${escHtml(fileContent)}</pre>`);
        } else {
          printTerm(out, `<span class="err">cat: ${args[0]}: No such file or directory</span>`);
        }
      }
      break;

    case 'touch':
      if(!args[0]) {
        printTerm(out, `<span class="warn">Usage: touch &lt;file&gt;</span>`);
      } else {
        VFS.write(args[0], '', cwd);
        printTerm(out, `<span class="success">Created ${args[0]} in VFS</span>`);
      }
      break;

    case 'mkdir':
      if(!args[0]) {
        printTerm(out, `<span class="warn">Usage: mkdir &lt;dirname&gt;</span>`);
      } else {
        VFS.mkdir(args[0], cwd);
        printTerm(out, `<span class="success">Created directory ${args[0]} in VFS</span>`);
      }
      break;

    case 'rm':
      if(!args[0]) {
        printTerm(out, `<span class="warn">Usage: rm &lt;file&gt;</span>`);
      } else {
        const removed = VFS.delete(args[0], cwd);
        if(removed) printTerm(out, `<span class="success">Removed ${args[0]}</span>`);
        else printTerm(out, `<span class="err">rm: cannot remove '${args[0]}': No such file or directory</span>`);
      }
      break;

    case 'nano': case 'edit':
      openApp('texteditor');
      if(args[0]) {
        const fullP = VFS.resolve(args[0], cwd);
        setTimeout(() => {
          const area = document.querySelector('.editor-area');
          if(area) {
            area.value = VFS.read(fullP) || '';
            const status = document.querySelector('.editor-statusbar');
            if(status) status.querySelector('span:nth-child(2)').textContent = fullP;
          }
        }, 300);
      }
      printTerm(out, `<span class="info">Opened ${args[0]||'new document'} in BuildU Text Editor</span>`);
      break;

    case 'whoami':
      printTerm(out, `<span class="success">root</span>`);
      break;

    case 'id':
      printTerm(out, `<span class="out">uid=0(root) gid=0(root) groups=0(root),27(sudo),1000(buildu)</span>`);
      break;

    case 'uname':
      printTerm(out, `<span class="out">Linux buildu 5.15.0-buildu-pentest-x86_64 #1 SMP PREEMPT ${new Date().toDateString()} x86_64 GNU/Linux</span>`);
      break;

    case 'hostname':
      printTerm(out, `<span class="out">buildu</span>`);
      break;

    case 'date':
      printTerm(out, `<span class="out">${new Date().toString()}</span>`);
      break;

    case 'ifconfig': case 'ip':
      printTerm(out, `<span class="info">eth0: flags=4163&lt;UP,BROADCAST,RUNNING,MULTICAST&gt;  mtu 1500</span>`);
      printTerm(out, `<span class="out">      inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255</span>`);
      printTerm(out, `<span class="out">      ether 00:1a:2b:3c:4d:5e  txqueuelen 1000  (Ethernet)</span>`);
      printTerm(out, `<span class="info">wlan0: flags=4099&lt;UP,BROADCAST,MULTICAST&gt;  mtu 1500</span>`);
      printTerm(out, `<span class="out">      inet 10.0.0.50  netmask 255.255.255.0  broadcast 10.0.0.255</span>`);
      printTerm(out, `<span class="out">      ether de:ad:be:ef:13:37  (Wireless 802.11ax - Monitor Mode Capable)</span>`);
      break;

    case 'ping':
      const target = args[0] || '8.8.8.8';
      printTerm(out, `<span class="info">PING ${target} (target) 56(84) bytes of data.</span>`);
      [1, 2, 3, 4].forEach(seq => {
        setTimeout(() => {
          printTerm(out, `<span class="out">64 bytes from ${target}: icmp_seq=${seq} ttl=64 time=${(Math.random()*15+8).toFixed(2)} ms</span>`);
        }, seq * 400);
      });
      setTimeout(() => {
        printTerm(out, `<span class="success">--- ${target} ping statistics ---</span>`);
        printTerm(out, `<span class="out">4 packets transmitted, 4 received, 0% packet loss, time 1602ms</span>`);
      }, 2000);
      break;

    case 'ps':
      printTerm(out, `<span class="info">  PID TTY          TIME CMD</span>`);
      [['1','?','0:01','systemd'],['2','?','0:00','kthreadd'],['100','?','0:05','metasploit-rpc'],
       ['234','pts/0','0:00','bash'],['456','?','0:12','buildu-sec-daemon'],['789','?','0:00','wireshark-tap']
      ].forEach(([p,t,tm,c]) => printTerm(out, `<span class="out">${p.padStart(5)} ${t.padEnd(12)} ${tm.padEnd(8)} ${c}</span>`));
      break;

    case 'netstat':
      printTerm(out, `<span class="info">Active Internet connections (servers and established)</span>`);
      printTerm(out, `<span class="info">Proto  Local Address         Foreign Address       State</span>`);
      [['tcp','0.0.0.0:22','0.0.0.0:*','LISTEN'],['tcp','0.0.0.0:4444','0.0.0.0:*','LISTEN'],
       ['tcp','192.168.1.100:54321','93.184.216.34:443','ESTABLISHED'],['udp','0.0.0.0:68','0.0.0.0:*','']
      ].forEach(([pr,l,f,s]) => printTerm(out, `<span class="out">${pr.padEnd(7)}${l.padEnd(22)}${f.padEnd(22)}${s}</span>`));
      break;

    case 'nmap':
      const ntarget = args.join(' ') || '127.0.0.1';
      printTerm(out, `<span class="info">Starting Nmap 7.94SVN ( https://nmap.org ) at ${new Date().toLocaleTimeString()}</span>`);
      printTerm(out, `<span class="out">Nmap scan report for ${ntarget}</span>`);
      setTimeout(() => printTerm(out, `<span class="success">PORT     STATE SERVICE     VERSION</span>`), 400);
      setTimeout(() => printTerm(out, `<span class="success">21/tcp   open  ftp         vsftpd 2.3.4 (Backdoor vulnerable!)</span>`), 800);
      setTimeout(() => printTerm(out, `<span class="success">22/tcp   open  ssh         OpenSSH 8.9p1 Ubuntu 3ubuntu0.1</span>`), 1200);
      setTimeout(() => printTerm(out, `<span class="success">80/tcp   open  http        Apache httpd 2.4.52 ((Ubuntu))</span>`), 1600);
      setTimeout(() => printTerm(out, `<span class="success">3306/tcp open  mysql       MySQL 8.0.35</span>`), 2000);
      setTimeout(() => {
        printTerm(out, `<span class="info">Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel</span>`);
        printTerm(out, `<span class="success">Nmap done: 1 IP address (1 host up) scanned in 2.18 seconds</span>`);
      }, 2400);
      break;

    case 'msfconsole':
      printTerm(out, `<span class="warn">[*] Launching Metasploit Framework GUI console...</span>`);
      openApp('metasploit');
      break;

    case 'sqlmap':
      printTerm(out, `<span class="info">[*] Opening SQLMap Attack Suite...</span>`);
      openApp('sqlmap');
      break;

    case 'john':
      printTerm(out, `<span class="info">[*] Opening John the Ripper Cracker...</span>`);
      openApp('john');
      break;

    case 'hydra':
      printTerm(out, `<span class="info">[*] Opening Hydra Network Brute-forcer...</span>`);
      openApp('hydra');
      break;

    case 'aircrack-ng':
      printTerm(out, `<span class="info">[*] Opening Aircrack-ng Suite...</span>`);
      openApp('aircrack');
      break;

    case 'wireshark':
      printTerm(out, `<span class="info">[*] Opening Wireshark Packet Analyzer...</span>`);
      openApp('wireshark');
      break;

    case 'curl':
      const curlUrl = args[0] || 'http://target.box';
      printTerm(out, `<span class="info">[*] Sending HTTP GET to: ${curlUrl}</span>`);
      setTimeout(() => {
        printTerm(out, `<span class="out">HTTP/1.1 200 OK\r\nServer: BuildU-Secure/1.0\r\nContent-Type: text/html\r\n\r\n&lt;h1&gt;Welcome to Target Corp Internal Portal&lt;/h1&gt;</span>`);
      }, 500);
      break;

    case 'python3': case 'python':
      if(args[0]) {
        const code = VFS.read(args[0], cwd);
        if(code) {
          printTerm(out, `<span class="info">[Python 3.11.4] Executing ${args[0]}...</span>`);
          printTerm(out, `<span class="success">[+] Exploit script loaded. Payload executing...</span>`);
          printTerm(out, `<span class="success">[+] Target corrupted! Reverse shell open on port 4444.</span>`);
        } else {
          printTerm(out, `<span class="err">python3: can't open file '${args[0]}': [Errno 2] No such file or directory</span>`);
        }
      } else {
        printTerm(out, `<span class="info">Python 3.11.4 (BuildU Platform) [GCC 12.2.0] on linux</span>`);
        printTerm(out, `<span class="out">Type "exit()" or "help()" for more info.</span>`);
      }
      break;

    case 'base64':
      if(args[0] === '-d' && args[1]) {
        try { printTerm(out, `<span class="out">${atob(args[1])}</span>`); }
        catch { printTerm(out, `<span class="err">base64: invalid input</span>`); }
      } else {
        try { printTerm(out, `<span class="out">${btoa(args.join(' '))}</span>`); }
        catch { printTerm(out, `<span class="err">base64: error</span>`); }
      }
      break;

    case 'history':
      BYT.termHistory[winId].slice().reverse().forEach((h,i) => {
        printTerm(out, `<span class="out">${String(i+1).padStart(4)}  ${h}</span>`);
      });
      break;

    case 'clear':
      document.getElementById(`to-${BYT.termTabs[winId]?.activeTab ?? 0}-${winId}`).innerHTML = '';
      break;

    case 'echo':
      printTerm(out, `<span class="out">${args.join(' ')}</span>`);
      break;

    case 'exit': case 'quit':
      closeWindow(winId);
      break;

    case '': break;

    default:
      printTerm(out, `<span class="err">bash: ${escHtml(command)}: command not found</span>`);
      printTerm(out, `<span class="out">Type 'help' for available commands</span>`);
  }
}

function updatePrompt(winId, newCwd) {
  const promptEl = document.getElementById(`tprompt-${winId}`);
  if(promptEl) promptEl.innerHTML = `┌──(root㉿buildu)-[${newCwd}]<br>└─# `;
}

window.addTermTab = function(winId) {
  const tab = BYT.termTabs[winId];
  if(!tab) return;
  const newIdx = tab.tabs.length;
  tab.tabs.push(`bash ${newIdx+1}`);
  tab.cwd.push('/root');

  const tabsEl = document.getElementById(`ttabs-${winId}`);
  const addBtn = tabsEl?.querySelector('.term-add-tab');
  if(tabsEl && addBtn) {
    const tabEl = document.createElement('div');
    tabEl.className = 'term-tab';
    tabEl.id = `tab${newIdx}-${winId}`;
    tabEl.textContent = `bash ${newIdx+1}`;
    tabEl.onclick = () => switchTermTab(newIdx, winId);
    tabsEl.insertBefore(tabEl, addBtn);

    // Create output div
    const tc = document.getElementById(`tc-${winId}`);
    const existingOut = tc?.querySelector('.terminal-output');
    if(tc && existingOut) {
      const newOut = document.createElement('div');
      newOut.className = 'terminal-output';
      newOut.id = `to-${newIdx}-${winId}`;
      newOut.style.display = 'none';
      tc.insertBefore(newOut, tc.querySelector('.terminal-input-row'));
      initTerminalTab(winId, newIdx, newOut);
    }
    switchTermTab(newIdx, winId);
  }
};

function initTerminalTab(winId, idx, out) {
  printTerm(out, `<span class="success">New terminal session</span>`);
}

window.switchTermTab = function(idx, winId) {
  const tab = BYT.termTabs[winId];
  if(!tab) return;
  tab.activeTab = idx;
  document.querySelectorAll(`[id^="tab"][id$="-${winId}"]`).forEach(t=>t.classList.remove('active'));
  document.getElementById(`tab${idx}-${winId}`)?.classList.add('active');
  const tc = document.getElementById(`tc-${winId}`);
  tc?.querySelectorAll('.terminal-output').forEach(o => o.style.display = 'none');
  const activeOut = document.getElementById(`to-${idx}-${winId}`);
  if(activeOut) { activeOut.style.display = 'block'; activeOut.scrollTop = activeOut.scrollHeight; }
  updatePrompt(winId, tab.cwd[idx] || '/root');
};

// ============ SYSINFO LIVE ============
function initSysInfo(winId) {
  const startTime = Date.now();
  const update = () => {
    const upSec = Math.floor((Date.now() - BYT.bootTime) / 1000);
    const h = Math.floor(upSec/3600), m = Math.floor((upSec%3600)/60), s = upSec%60;
    const uptimeEl = document.getElementById(`uptime-${winId}`);
    if(!uptimeEl) return;
    uptimeEl.textContent = `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    const cpu0 = Math.floor(Math.random()*60+10);
    const cpu1 = Math.floor(Math.random()*50+20);
    const mem = Math.floor(Math.random()*30+40);
    const disk = Math.floor(Math.random()*20+5);
    const tx = Math.floor(Math.random()*500)+' KB/s';
    const rx = Math.floor(Math.random()*800)+' KB/s';
    setGauge(winId,'cpu0',cpu0); setGauge(winId,'cpu1',cpu1);
    setGauge(winId,'mem',mem); setGauge(winId,'disk',disk);
    const txEl=document.getElementById(`tx-${winId}`);
    const rxEl=document.getElementById(`rx-${winId}`);
    if(txEl) txEl.textContent = tx;
    if(rxEl) rxEl.textContent = rx;
  };
  update();
  const id = setInterval(() => {
    if(!document.getElementById(`uptime-${winId}`)) { clearInterval(id); return; }
    update();
  }, 1500);
}

function setGauge(winId, name, val) {
  const label = document.getElementById(`${name}-${winId}`);
  const bar = document.getElementById(`${name}b-${winId}`);
  if(label) label.textContent = val + '%';
  if(bar) bar.style.width = val + '%';
}

// ============ MISC UTILITIES ============
function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

window.changeWallpaper = function() {
  BYT.currentWallpaper = (BYT.currentWallpaper + 1) % BYT.wallpapers.length;
  setDesktopWallpaper(BYT.currentWallpaper);
};

window.showAbout = function() {
  document.getElementById('about-modal').style.display = 'flex';
};

window.closeAbout = function() {
  document.getElementById('about-modal').style.display = 'none';
};

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', e => {
  if(e.ctrlKey && e.altKey && e.key === 't') openApp('terminal');
  if(e.ctrlKey && e.altKey && e.key === 'f') openApp('filemanager');
  if(e.key === 'F1') { e.preventDefault(); toggleAppMenu(); }
  if(e.key === 'Escape') {
    document.getElementById('app-menu').style.display = 'none';
    document.getElementById('context-menu').style.display = 'none';
  }
});

// ============ WINDOW RESIZE ============
window.addEventListener('resize', () => {
  ['matrix-canvas','login-canvas'].forEach(id => {
    const c = document.getElementById(id);
    if(c && c.style.display !== 'none') { c.width = window.innerWidth; c.height = window.innerHeight; }
  });
});

// Desktop icon single/double click
let desktopClickTimer = null;
document.querySelectorAll('.desktop-icon').forEach(icon => {
  icon.addEventListener('click', e => {
    document.querySelectorAll('.desktop-icon').forEach(i=>i.classList.remove('selected'));
    icon.classList.add('selected');
  });
});
