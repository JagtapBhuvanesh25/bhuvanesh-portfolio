/* =========================================================
   Bhuvanesh Jagtap — Terminal Portfolio  ✦ INSANE EDITION
   main.js — 10 Visual Systems + All Commands
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. DATA — single source of truth
     ========================================================= */

  const PROFILE = {
    fullName: "Bhuvanesh Janardan Jagtap",
    shortName: "Bhuvanesh Jagtap",
    role: "B.E Information Technology Student",
    subRoles: ["Full Stack Developer", "Competitive Programmer"],
    location: "Pune, Maharashtra, India",
    email: "deshmukhkanha25@gmail.com",
    phone: "+91-8975306863",
    github: "https://github.com/JagtapBhuvanesh25",
    linkedin: "https://www.linkedin.com/in/bhuvanesh-jagtap/",
    leetcode: "https://leetcode.com/u/kanhadeshmukh25/",
    codeforces: "https://codeforces.com/profile/bhuvanesh25",
    codechef: "https://www.codechef.com/users/kanhadeshmukh",
    resumePath: "assets/I2K231216_BhuvaneshJagtap_Resume.pdf",
    photoPath: "assets/BhuvaneshJagtap_ProfilePhoto1.jpg",
    tagline: "Building software, breaking down problems, and figuring out what happens under the hood.",
    introShort:
      "B.E. IT student at PICT Pune. I build backend systems, developer tools, and full-stack applications, and I've had the opportunity to do that in both an industry setting at Siemens \u2013 Mendix and through my own projects. I enjoy understanding what happens beneath the surface and figuring out how to make things work better.",
  };

  const EDUCATION = [
    { school: "Pune Institute of Computer Technology", detail: "B.E. Information Technology \u2014 CGPA: 9.52", years: "2023 \u2013 2027", location: "Pune, India" },
    { school: "Savitribai Phule Jr. College", detail: "CBSE(12th) \u2014 86.33%", years: "2022", location: "Pune, India" },
    { school: "Tapasya Public School", detail: "SSC (10th) \u2014 93.40%", years: "2020", location: "Arvi, Maharashtra, India" },
  ];

  const EXPERIENCE = {
    company: "Siemens \u2013 Mendix",
    role: "Software Engineering Intern",
    location: "Pune, Maharashtra",
    duration: "June 2026 \u2013 August 2026",
    bullets: [
      "Built a developer-facing AMI Lifecycle Management dashboard for tracking AWS AMI state across multi-account environments.",
      "Developed a Python CLI to drive AMI promotion, rollback, and repromote workflows.",
      "Implemented EC2 tag-based lineage tracking for end-to-end AMI history visibility.",
      "Set up OIDC-based secure cross-account authentication, removing reliance on long-lived credentials.",
      "Automated AMI inventory reporting through scheduled GitLab CI/CD pipelines.",
      "Shipped a GitLab Pages dashboard with filtering by environment, lifecycle stage, and Jenkins agent label.",
      "Worked within an Agile development process throughout the internship.",
    ],
  };

  const PROJECTS = [
    {
      slug: "ai-conversation-intelligence",
      name: "AI Conversation Intelligence Platform",
      short: "Speech analytics platform for meeting intelligence.",
      tech: ["Python", "Flask", "Whisper", "SpeechBrain", "Groq", "REST API"],
      highlights: [
        "Automated transcription and speaker diarization using Whisper and SpeechBrain.",
        "Sentiment analysis and meeting summarization powered by Groq.",
        "Surfaces action items and speaker-level performance insights.",
        "Exposes a reusable REST API for external applications.",
      ],
      github: "https://github.com/JagtapBhuvanesh25/Speech-Transcription-And-Analysis",
    },
    {
      slug: "react-blog",
      name: "React Blog App",
      short: "Full-stack blogging platform with auth and content management.",
      tech: ["React", "Redux Toolkit", "Appwrite"],
      highlights: [
        "User authentication with post creation, editing, and deletion.",
        "Appwrite handles authentication, database, and file storage.",
        "Protected routes implemented with React Router.",
        "Dark-mode-friendly interface throughout.",
      ],
      github: "https://github.com/JagtapBhuvanesh25/My-React-Blog",
    },
    {
      slug: "whatsapp-automation-bot",
      name: "WhatsApp Automation Bot",
      short: "Node.js bot that sends rule-based replies in a configured group.",
      tech: ["Node.js", "whatsapp-web.js", "Puppeteer"],
      highlights: [
        "Listens for incoming messages and replies based on configurable rules.",
        "Uses LocalAuth for persistent WhatsApp Web sessions.",
        "Message-processing logic covered with Node's built-in test runner.",
      ],
      github: "https://github.com/JagtapBhuvanesh25/whats-app-bot",
    },
  ];

  const SKILLS = [
    { label: "Languages", items: ["C/C++", "JavaScript", "Java", "Python", "HTML/CSS"] },
    { label: "Frameworks & Technologies", items: ["React.js", "Express.js", "Node.js", "Redux Toolkit", "Tailwind CSS", "Mendix"] },
    { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { label: "Developer Tools", items: ["Git/GitHub", "GitLab CI/CD", "VS Code", "Postman", "Figma", "JIRA"] },
    { label: "CS Fundamentals", items: ["DSA", "OOP", "DBMS", "OS"] },
  ];

  const CP = {
    totalSolved: "700+",
    leetcode: { platform: "LeetCode", rating: "1731", rank: "Top 13%", solved: "350+", handle: "kanhadeshmukh25", url: PROFILE.leetcode, badge: "Top13%", color: "#FFA116" },
    codeforces: { platform: "Codeforces", rating: "1514", rank: "Specialist", solved: "200+", handle: "bhuvanesh25", url: PROFILE.codeforces, badge: "Specialist", color: "#03a89e" },
    codechef: { platform: "CodeChef", rating: "1710", rank: "3-Star ★★★", solved: "150+", handle: "kanhadeshmukh", url: PROFILE.codechef, badge: "3★", color: "#d4af37" },
  };

  const ACHIEVEMENTS = [
    "700+ DSA problems solved across LeetCode, Codeforces, and CodeChef.",
    "Silver Medalist \u2014 State Level UniFight.",
    "Active member of coding clubs.",
    "Participated in hackathons and technical workshops.",
  ];

  /* =========================================================
     2. DOM references
     ========================================================= */
  const outputEl   = document.getElementById("output");
  const bodyEl     = document.getElementById("terminalBody");
  const inputEl    = document.getElementById("cmdInput");
  const typedMirror= document.getElementById("typedMirror");
  const promptTextEl = document.getElementById("promptText");
  const clockEl    = document.getElementById("clock");
  const terminalEl = document.getElementById("terminal");
  const stageEl    = document.getElementById("stage");
  const bgCanvas   = document.getElementById("bgCanvas");
  const particleCanvas = document.getElementById("particleCanvas");
  const shockwaveEl = document.getElementById("shockwave");
  const comboMeterEl = document.getElementById("comboMeter");
  const comboCountEl = document.getElementById("comboCount");
  const comboLabelEl = document.getElementById("comboLabel");
  const soundToggleEl = document.getElementById("soundToggle");
  const soundIconEl   = document.getElementById("soundIcon");
  const uptimeEl   = document.getElementById("uptime");
  const msclockEl  = document.getElementById("msclock");
  const pingEl     = document.getElementById("ping");
  const quickActionEls = document.querySelectorAll("[data-command]");
  const swatchEls  = document.querySelectorAll("[data-theme-switch]");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =========================================================
     SYSTEM 1: CONSTELLATION BACKGROUND
     ========================================================= */
  const Constellation = (function () {
    const ctx = bgCanvas.getContext("2d");
    let W, H, nodes = [], raf, running = false;
    const NODE_COUNT = 80;
    const MAX_DIST = 140;
    const DISPERSE_RADIUS = 200;
    let mouseX = -9999, mouseY = -9999;

    function resize() {
      W = bgCanvas.width  = window.innerWidth;
      H = bgCanvas.height = window.innerHeight;
    }

    function Node() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.ox = this.x; this.oy = this.y;
      this.r  = Math.random() * 1.8 + 0.6;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.02 + Math.random() * 0.02;
      this.disperseVx = 0; this.disperseVy = 0;
      this.disperseDecay = 0;
    }

    function init() {
      resize();
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) nodes.push(new Node());
    }

    function getAccent() {
      const theme = terminalEl.getAttribute("data-theme") || "green";
      const map = {
        "green": "93,255,176",
        "cyan": "56,234,255",
        "purple": "192,132,252",
        "amber": "251,191,36",
        "cyber-tokyo": "255,45,120",
        "synthwave-84": "249,115,22",
        "monochrome-oled": "255,255,255",
      };
      return map[theme] || "93,255,176";
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const rgb = getAccent();

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        n.pulse += n.pulseSpeed;
        const glow = 0.5 + 0.5 * Math.sin(n.pulse);
        const alpha = 0.5 + 0.4 * glow;
        const r = n.r * (1 + 0.3 * glow);

        // Glow halo
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6);
        grad.addColorStop(0, `rgba(${rgb}, ${alpha * 0.9})`);
        grad.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(n.x, n.y, r * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function update() {
      nodes.forEach((n) => {
        // Disperse on interaction
        if (n.disperseDecay > 0) {
          n.x += n.disperseVx;
          n.y += n.disperseVy;
          n.disperseVx *= 0.93;
          n.disperseVy *= 0.93;
          n.disperseDecay -= 0.02;
          if (n.disperseDecay <= 0) n.disperseDecay = 0;
        }

        // Drift
        n.x += n.vx;
        n.y += n.vy;

        // Boundaries
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.x = Math.max(0, Math.min(W, n.x));
        n.y = Math.max(0, Math.min(H, n.y));
      });
    }

    function loop() {
      if (!running) return;
      update();
      draw();
      raf = requestAnimationFrame(loop);
    }

    function disperse(cx, cy, strength) {
      if (reducedMotion) return;
      nodes.forEach((n) => {
        const dx = n.x - cx;
        const dy = n.y - cy;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < DISPERSE_RADIUS) {
          const force = (1 - dist / DISPERSE_RADIUS) * strength;
          n.disperseVx = (dx / (dist || 1)) * force;
          n.disperseVy = (dy / (dist || 1)) * force;
          n.disperseDecay = 1;
        }
      });
    }

    function start() {
      if (running) return;
      running = true;
      init();
      loop();
    }

    window.addEventListener("resize", () => { resize(); });
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
    });

    return { start, disperse };
  })();



  /* =========================================================
     SYSTEM 3: TYPING SPARKS / PARTICLE ENGINE
     ========================================================= */
  const Particles = (function () {
    const ctx = particleCanvas.getContext("2d");
    let W, H, particles = [], raf, running = false;

    function resize() {
      W = particleCanvas.width  = window.innerWidth;
      H = particleCanvas.height = window.innerHeight;
    }

    function getAccentRgb() {
      const theme = terminalEl.getAttribute("data-theme") || "green";
      const map = {
        "green": [93,255,176], "cyan": [56,234,255],
        "purple": [192,132,252], "amber": [251,191,36],
        "cyber-tokyo": [255,45,120], "synthwave-84": [249,115,22],
        "monochrome-oled": [255,255,255],
      };
      return map[theme] || [93,255,176];
    }

    function Particle(x, y) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 3.5;
      this.x = x; this.y = y;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed - (Math.random() * 2);
      this.life = 1;
      this.decay = 0.04 + Math.random() * 0.04;
      this.size = 1.5 + Math.random() * 2.5;
      const rgb = getAccentRgb();
      this.r = rgb[0]; this.g = rgb[1]; this.b = rgb[2];
    }

    function emit(x, y, count) {
      if (reducedMotion) return;
      count = count || 6;
      for (let i = 0; i < count; i++) particles.push(new Particle(x, y));
    }

    function loop() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      particles = particles.filter(p => p.life > 0);
      particles.forEach(p => {
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy += 0.12; // gravity
        p.vx *= 0.97;
        p.life -= p.decay;
        const alpha = Math.max(0, p.life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.r},${p.g},${p.b},${alpha * 0.8})`;
        ctx.fill();
      });
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (running) return;
      running = true;
      resize();
      window.addEventListener("resize", resize);
      loop();
    }

    return { start, emit };
  })();

  /* =========================================================
     SYSTEM 4: COMBO METER
     ========================================================= */
  const Combo = (function () {
    let count = 0;
    let resetTimer = null;
    let hideTimer = null;

    const TIERS = [
      { min: 0,   cls: "",       label: "COMBO" },
      { min: 10,  cls: "tier-2", label: "ON FIRE" },
      { min: 25,  cls: "tier-3", label: "UNSTOPPABLE" },
      { min: 50,  cls: "tier-4", label: "LEGENDARY" },
    ];

    function getTier() {
      let t = TIERS[0];
      for (const tier of TIERS) { if (count >= tier.min) t = tier; }
      return t;
    }

    function update() {
      const tier = getTier();
      comboMeterEl.className = "combo-meter visible " + tier.cls;
      comboCountEl.textContent = count + "x";
      comboLabelEl.textContent = tier.label;
      // Bump animation
      comboCountEl.classList.remove("bump");
      void comboCountEl.offsetWidth;
      comboCountEl.classList.add("bump");
    }

    function hit() {
      count++;
      update();
      clearTimeout(resetTimer);
      clearTimeout(hideTimer);
      resetTimer = setTimeout(() => {
        count = 0;
        comboMeterEl.className = "combo-meter";
      }, 1500);
    }

    function enterHit() {
      count = 0;
      clearTimeout(resetTimer);
      comboMeterEl.className = "combo-meter";
    }

    return { hit, enterHit };
  })();

  /* =========================================================
     SYSTEM 5: WEB AUDIO ENGINE
     ========================================================= */
  const AudioEngine = (function () {
    let ctx = null;
    let muted = false;
    let profile = "blue"; // blue | thock | beam | silent
    const PROFILES = ["blue", "thock", "beam", "silent"];

    function getCtx() {
      if (!ctx) {
        try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
      }
      return ctx;
    }

    function resume() {
      const c = getCtx();
      if (c && c.state === "suspended") c.resume();
      return c;
    }

    function playKeyClick() {
      if (muted || profile === "silent" || reducedMotion) return;
      const c = resume();
      if (!c) return;
      const now = c.currentTime;

      if (profile === "blue") {
        // Cherry MX Blue: sharp click transient
        const buf = c.createBuffer(1, c.sampleRate * 0.06, c.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (c.sampleRate * 0.008));
        }
        const src = c.createBufferSource();
        src.buffer = buf;
        const gain = c.createGain();
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        src.connect(gain); gain.connect(c.destination);
        src.start(now);
      } else if (profile === "thock") {
        // Topre thock: deep thud
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.05);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain); gain.connect(c.destination);
        osc.start(now); osc.stop(now + 0.1);
      } else if (profile === "beam") {
        // Sci-fi chirp
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain); gain.connect(c.destination);
        osc.start(now); osc.stop(now + 0.06);
      }
    }

    function playEnterChime() {
      if (muted || reducedMotion) return;
      const c = resume();
      if (!c) return;
      const now = c.currentTime;
      [261.63, 329.63, 392.00].forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        const t = now + i * 0.05;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.1, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
        osc.connect(gain); gain.connect(c.destination);
        osc.start(t); osc.stop(t + 0.45);
      });
    }

    function playErrorBuzz() {
      if (muted || reducedMotion) return;
      const c = resume();
      if (!c) return;
      const now = c.currentTime;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = "sawtooth";
      osc.frequency.value = 80;
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain); gain.connect(c.destination);
      osc.start(now); osc.stop(now + 0.18);
    }

    function playBootChime() {
      if (muted || reducedMotion) return;
      const c = resume();
      if (!c) return;
      const freqs = [220, 277.18, 329.63, 440, 554.37];
      freqs.forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        const t = c.currentTime + i * 0.12;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.08, t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
        osc.connect(gain); gain.connect(c.destination);
        osc.start(t); osc.stop(t + 0.65);
      });
    }

    function toggleMute() {
      muted = !muted;
      soundIconEl.textContent = muted ? "✕" : "♪";
      soundToggleEl.classList.toggle("muted", muted);
      if (!muted) resume(); // re-open context on unmute
    }

    function setProfile(p) {
      if (!PROFILES.includes(p)) return false;
      profile = p;
      return true;
    }

    soundToggleEl.addEventListener("click", toggleMute);
    window.addEventListener("keydown", (e) => {
      if (e.key === "s" && !e.ctrlKey && !e.metaKey && document.activeElement !== inputEl) {
        toggleMute();
      }
    });

    return { playKeyClick, playEnterChime, playErrorBuzz, playBootChime, toggleMute, setProfile, PROFILES };
  })();

  /* =========================================================
     SYSTEM 6: SVG RATING CHART
     ========================================================= */
  function buildRatingChart(container) {
    const SVG_W = 420; const SVG_H = 140;
    const PAD = 30;

    // Fake history data
    const datasets = [
      { label: "LeetCode", color: "#fbbf24", points: [1400,1450,1510,1580,1620,1680,1731] },
      { label: "Codeforces", color: "#5dcfff", points: [1000,1100,1200,1350,1420,1480,1514] },
      { label: "CodeChef", color: "#5dffb0", points: [1200,1300,1400,1500,1600,1680,1710] },
    ];

    const allVals = datasets.flatMap(d => d.points);
    const minV = Math.min(...allVals) - 50;
    const maxV = Math.max(...allVals) + 50;

    function toSvgX(i, len) { return PAD + (i / (len - 1)) * (SVG_W - PAD * 2); }
    function toSvgY(v) { return SVG_H - PAD - ((v - minV) / (maxV - minV)) * (SVG_H - PAD * 2); }

    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${SVG_W} ${SVG_H}`);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", SVG_H);
    svg.style.display = "block";

    // Background
    const bg = document.createElementNS(NS, "rect");
    bg.setAttribute("width", SVG_W); bg.setAttribute("height", SVG_H);
    bg.setAttribute("fill", "var(--bg-inset)");
    bg.setAttribute("rx", "6");
    svg.appendChild(bg);

    // Grid lines
    for (let i = 0; i <= 4; i++) {
      const y = PAD + (i / 4) * (SVG_H - PAD * 2);
      const line = document.createElementNS(NS, "line");
      line.setAttribute("x1", PAD); line.setAttribute("x2", SVG_W - PAD);
      line.setAttribute("y1", y); line.setAttribute("y2", y);
      line.setAttribute("stroke", "rgba(255,255,255,0.06)");
      line.setAttribute("stroke-width", "1");
      svg.appendChild(line);
    }

    // Dataset lines + dots
    datasets.forEach((ds, di) => {
      // Line path
      let d = "";
      ds.points.forEach((v, i) => {
        const x = toSvgX(i, ds.points.length);
        const y = toSvgY(v);
        d += (i === 0 ? "M" : "L") + `${x},${y}`;
      });

      // Gradient fill
      const gradId = "chartGrad" + di;
      const grad = document.createElementNS(NS, "linearGradient");
      grad.setAttribute("id", gradId);
      grad.setAttribute("x1","0"); grad.setAttribute("x2","0");
      grad.setAttribute("y1","0"); grad.setAttribute("y2","1");
      const stop1 = document.createElementNS(NS, "stop");
      stop1.setAttribute("offset","0"); stop1.setAttribute("stop-color", ds.color); stop1.setAttribute("stop-opacity","0.3");
      const stop2 = document.createElementNS(NS, "stop");
      stop2.setAttribute("offset","1"); stop2.setAttribute("stop-color", ds.color); stop2.setAttribute("stop-opacity","0");
      grad.appendChild(stop1); grad.appendChild(stop2);

      const defs = document.createElementNS(NS, "defs");
      defs.appendChild(grad);
      svg.appendChild(defs);

      // Area
      const lastX = toSvgX(ds.points.length-1, ds.points.length);
      const firstX = toSvgX(0, ds.points.length);
      const area = document.createElementNS(NS, "path");
      area.setAttribute("d", d + `L${lastX},${SVG_H-PAD} L${firstX},${SVG_H-PAD} Z`);
      area.setAttribute("fill", `url(#${gradId})`);
      svg.appendChild(area);

      // Line
      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("stroke", ds.color);
      path.setAttribute("stroke-width", "2");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-linejoin", "round");
      path.setAttribute("stroke-linecap", "round");
      // Animate draw
      const len = path.getTotalLength ? path.getTotalLength() : 800;
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.style.transition = `stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) ${di*0.2}s`;
      svg.appendChild(path);

      // Dots
      ds.points.forEach((v, i) => {
        const x = toSvgX(i, ds.points.length);
        const y = toSvgY(v);
        const dot = document.createElementNS(NS, "circle");
        dot.setAttribute("cx", x); dot.setAttribute("cy", y);
        dot.setAttribute("r", "3.5");
        dot.setAttribute("fill", ds.color);
        dot.style.filter = `drop-shadow(0 0 4px ${ds.color})`;
        dot.style.opacity = "0";
        dot.style.transition = `opacity 0.3s ease ${di*0.2 + i*0.08 + 0.8}s`;
        svg.appendChild(dot);

        // Tooltip on hover
        dot.addEventListener("mouseenter", () => {
          dot.setAttribute("r", "5");
        });
        dot.addEventListener("mouseleave", () => {
          dot.setAttribute("r", "3.5");
        });

        setTimeout(() => { dot.style.opacity = "1"; }, 10);
      });

      // Animate line
      setTimeout(() => { path.style.strokeDashoffset = "0"; }, 30);

      // Legend label
      const label = document.createElementNS(NS, "text");
      const labelX = PAD + di * 120;
      const labelY = 14;
      label.setAttribute("x", labelX); label.setAttribute("y", labelY);
      label.setAttribute("fill", ds.color);
      label.setAttribute("font-size", "10");
      label.setAttribute("font-family", "monospace");
      label.textContent = "● " + ds.label + ": " + ds.points[ds.points.length-1];
      svg.appendChild(label);
    });

    const wrap = document.createElement("div");
    wrap.className = "chart-container";
    wrap.appendChild(svg);
    container.appendChild(wrap);
  }

  /* =========================================================
     SYSTEM 9: SKILL GALAXY
     ========================================================= */
  function buildSkillGalaxy(container) {
    const SKILLS_FLAT = SKILLS.flatMap(cat => cat.items.map(item => ({ item, cat: cat.label })));
    const cnv = document.createElement("canvas");
    const W = 600; const H = 200;
    cnv.width = W; cnv.height = H;
    cnv.style.cssText = "width:100%;max-width:600px;height:200px;display:block;cursor:pointer;border-radius:6px;";
    container.appendChild(cnv);

    const ctx = cnv.getContext("2d");
    let hoveredIdx = -1;
    let nodes = [];
    let rafId;
    let time = 0;

    const CAT_COLORS = {
      "Languages": [93,255,176],
      "Frameworks & Technologies": [56,234,255],
      "Databases": [192,132,252],
      "Developer Tools": [251,191,36],
      "CS Fundamentals": [255,45,120],
    };

    SKILLS_FLAT.forEach((s, i) => {
      const angle = (i / SKILLS_FLAT.length) * Math.PI * 2;
      const rad = 55 + (i % 3) * 28;
      nodes.push({
        x: W/2 + Math.cos(angle) * rad,
        y: H/2 + Math.sin(angle) * rad,
        vx: (Math.random()-0.5)*0.2,
        vy: (Math.random()-0.5)*0.2,
        label: s.item,
        cat: s.cat,
        angle, rad, baseAngle: angle,
      });
    });

    function getColor(cat) {
      return CAT_COLORS[cat] || [93,255,176];
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "var(--bg-inset)";
      ctx.fillRect(0, 0, W, H);

      // Center node
      const cRgb = "93,255,176";
      const cGrad = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,22);
      cGrad.addColorStop(0, `rgba(${cRgb},0.6)`);
      cGrad.addColorStop(1, `rgba(${cRgb},0)`);
      ctx.beginPath(); ctx.fillStyle = cGrad; ctx.arc(W/2,H/2,22,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = `rgba(${cRgb},0.9)`; ctx.font = "bold 9px monospace"; ctx.textAlign = "center";
      ctx.fillText("SKILLS", W/2, H/2+3); ctx.textAlign = "left";

      time += 0.008;

      // Connections + nodes
      nodes.forEach((n, i) => {
        // Float
        n.x = W/2 + Math.cos(n.baseAngle + time * 0.3) * (n.rad + Math.sin(time + i) * 5);
        n.y = H/2 + Math.sin(n.baseAngle + time * 0.3) * (n.rad + Math.cos(time + i) * 5);

        const rgb = getColor(n.cat);
        const isHovered = i === hoveredIdx;
        const alpha = isHovered ? 0.9 : 0.45;

        // Connection to center
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${rgb},${isHovered ? 0.4 : 0.1})`;
        ctx.lineWidth = isHovered ? 1.5 : 0.7;
        ctx.moveTo(W/2, H/2); ctx.lineTo(n.x, n.y); ctx.stroke();

        // Node glow
        const gGrad = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,isHovered?18:10);
        gGrad.addColorStop(0, `rgba(${rgb},${isHovered?0.5:0.2})`);
        gGrad.addColorStop(1, `rgba(${rgb},0)`);
        ctx.beginPath(); ctx.fillStyle = gGrad; ctx.arc(n.x,n.y,isHovered?18:10,0,Math.PI*2); ctx.fill();

        // Node dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb},${alpha})`;
        ctx.arc(n.x, n.y, isHovered?5:3, 0, Math.PI*2);
        ctx.fill();

        // Label
        ctx.fillStyle = `rgba(${rgb},${isHovered?1:0.65})`;
        ctx.font = `${isHovered?"bold ":""}${isHovered?11:9}px monospace`;
        ctx.textAlign = n.x > W/2 ? "left" : "right";
        const lx = n.x > W/2 ? n.x+8 : n.x-8;
        ctx.fillText(n.label, lx, n.y+3);
        ctx.textAlign = "left";
      });

      rafId = requestAnimationFrame(draw);
    }

    cnv.addEventListener("mousemove", (e) => {
      const rect = cnv.getBoundingClientRect();
      const scaleX = W / rect.width;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * (H / rect.height);
      hoveredIdx = -1;
      nodes.forEach((n, i) => {
        const dx = n.x - mx; const dy = n.y - my;
        if (Math.sqrt(dx*dx+dy*dy) < 16) hoveredIdx = i;
      });
    });
    cnv.addEventListener("mouseleave", () => { hoveredIdx = -1; });

    draw();

    const hint = document.createElement("p");
    hint.className = "line faint";
    hint.textContent = "Hover over nodes to highlight skills";
    container.appendChild(hint);
  }

  /* =========================================================
     3. Render helpers
     ========================================================= */
  function el(tag, opts) {
    opts = opts || {};
    const node = document.createElement(tag);
    if (opts.cls) node.className = opts.cls;
    if (opts.text !== undefined) node.textContent = opts.text;
    if (opts.html !== undefined) node.innerHTML = opts.html;
    if (opts.attrs) { for (const k in opts.attrs) node.setAttribute(k, opts.attrs[k]); }
    if (opts.children) opts.children.forEach((c) => c && node.appendChild(c));
    if (opts.onClick) node.addEventListener("click", opts.onClick);
    return node;
  }

  function externalLink(label, href, opts) {
    opts = opts || {};
    return el("a", {
      cls: "term-link" + (opts.cls ? " " + opts.cls : ""),
      text: label,
      attrs: { href, target: opts.samePage ? "" : "_blank", rel: "noopener noreferrer" },
    });
  }

  function actionButton(label, opts) {
    opts = opts || {};
    if (opts.onClick) {
      return el("button", {
        cls: "action-btn" + (opts.ghost ? " ghost" : ""),
        text: label,
        attrs: { type: "button" },
        onClick: opts.onClick,
      });
    }
    const attrs = { href: opts.href, target: opts.blank === false ? "" : "_blank", rel: "noopener noreferrer" };
    if (opts.download) attrs.download = "";
    return el("a", { cls: "action-btn" + (opts.ghost ? " ghost" : ""), text: label, attrs });
  }

  function statBox(val, lbl) {
    const box = el("div", { cls: "cp-pstat-box" });
    box.appendChild(el("div", { cls: "cp-pstat-num", text: val }));
    box.appendChild(el("div", { cls: "cp-pstat-lbl", text: lbl }));
    return box;
  }

  function makeWriter(container) {
    const w = {
      el: container,
      text(str, cls) {
        const p = el("p", { cls: "line" + (cls ? " " + cls : ""), text: str });
        container.appendChild(p);
        return w;
      },
      raw(node) { container.appendChild(node); return w; },
      heading(str) { container.appendChild(el("p", { cls: "heading", text: str })); return w; },
      sub(str)     { container.appendChild(el("p", { cls: "subheading", text: str })); return w; },
      divider()    { container.appendChild(el("hr", { cls: "divider" })); return w; },
      kv(k, v, vIsNode) {
        const row = el("div", { cls: "kv-row" });
        row.appendChild(el("span", { cls: "k", text: k }));
        if (vIsNode) { row.appendChild(el("span", { cls: "v", children: [v] })); }
        else         { row.appendChild(el("span", { cls: "v", text: v })); }
        container.appendChild(row);
        return w;
      },
      bullet(str, marker) {
        const row = el("div", { cls: "bullet-row" });
        row.appendChild(el("span", { cls: "marker", text: marker || ">" }));
        row.appendChild(el("span", { cls: "line", text: str }));
        container.appendChild(row);
        return w;
      },
      link(label, href) {
        const p = el("p", { cls: "line" });
        p.appendChild(externalLink(label, href));
        container.appendChild(p);
        return w;
      },
      linkLine(label, href) {
        const p = el("p", { cls: "line dim" });
        p.appendChild(document.createTextNode(label + " \u2192 "));
        p.appendChild(externalLink(href, href));
        container.appendChild(p);
        return w;
      },
      buttons(nodes) {
        const wrap = el("div", { children: nodes });
        wrap.style.marginTop = "6px";
        container.appendChild(wrap);
        return w;
      },
      tags(items, accent) {
        const wrap = el("div");
        items.forEach((t) => wrap.appendChild(el("span", { cls: "tag" + (accent ? " accent" : ""), text: t })));
        container.appendChild(wrap);
        return w;
      },
      ascii(str) { container.appendChild(el("pre", { cls: "ascii", text: str })); return w; },
      box(buildFn) {
        const boxEl = el("div", { cls: "box" });
        container.appendChild(boxEl);
        buildFn(makeWriter(boxEl));
        return w;
      },
      space() { container.appendChild(el("div", { attrs: { style: "height:6px" } })); return w; },
    };
    return w;
  }

  /* =========================================================
     4. Terminal engine state
     ========================================================= */
  const state = {
    path: "~",
    history: [],
    historyIndex: -1,
    booted: false,
    startTime: Date.now(),
  };

  const PSEUDO_DIRS = ["about","education","experience","projects","skills","competitive","contact","socials"];

  function currentPromptPath() { return state.path === "~" ? "~" : "~/"+state.path; }
  function updatePrompt() { promptTextEl.textContent = "bhuvanesh@portfolio:"+currentPromptPath()+"$"; }
  function scrollToBottom() { bodyEl.scrollTop = bodyEl.scrollHeight; }

  function commitBlock(cmdRaw) {
    const block = el("div", { cls: "block" });
    const echoRow = el("div", { cls: "echo-row" });
    echoRow.appendChild(el("span", { cls: "prompt", text: promptTextEl.textContent }));
    echoRow.appendChild(el("span", { cls: "echoed-cmd", text: cmdRaw }));
    const result = el("div", { cls: "result" });
    block.appendChild(echoRow);
    block.appendChild(result);
    outputEl.appendChild(block);
    return result;
  }

  function bootLine(text, cls) {
    outputEl.appendChild(el("p", { cls: "boot-line" + (cls ? " " + cls : ""), text: text }));
    scrollToBottom();
  }

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, reducedMotion ? 0 : ms));
  }

  /* =========================================================
     5. Shockwave
     ========================================================= */
  function triggerShockwave() {
    if (reducedMotion) return;
    shockwaveEl.classList.remove("active");
    void shockwaveEl.offsetWidth;
    shockwaveEl.classList.add("active");
    setTimeout(() => shockwaveEl.classList.remove("active"), 600);
  }

  function triggerScreenShake() {
    if (reducedMotion) return;
    terminalEl.classList.remove("shake");
    void terminalEl.offsetWidth;
    terminalEl.classList.add("shake");
    setTimeout(() => terminalEl.classList.remove("shake"), 300);
  }

  /* =========================================================
     6. COMMAND REGISTRY
     ========================================================= */
  const VALID_THEMES = ["green","cyan","purple","amber","cyber-tokyo","synthwave-84","monochrome-oled"];

  const COMMAND_LIST = [
    "help","about","whoami","skills","experience","education",
    "projects","project","resume","contact","socials",
    "github","linkedin","leetcode","codeforces","codechef",
    "clear","history","pwd","ls","cd","date","neofetch",
    "sudo","theme","echo","cp","ratings","competitive","recruiter",
    "sound",
  ];

  function openExternal(url) { window.open(url, "_blank", "noopener,noreferrer"); }

  function socialCommand(label, url) {
    return (args, w) => {
      w.text("Opening " + label + "...", "dim");
      w.linkLine(label, url);
      openExternal(url);
    };
  }

  const commands = {
    help(args, w) {
      w.heading("AVAILABLE COMMANDS");
      w.text("Run `recruiter` for a fast, structured overview of my profile.", "dim");
      w.divider();

      w.sub("CORE");
      w.bullet("about        \u2014 professional overview");
      w.bullet("whoami       \u2014 identity snapshot & rating badges");
      w.bullet("education    \u2014 academic background");
      w.bullet("experience   \u2014 work experience");

      w.sub("WORK");
      w.bullet("skills       \u2014 interactive skill galaxy");
      w.bullet("projects     \u2014 project directory");
      w.bullet("project <name> \u2014 project details");
      w.bullet("resume       \u2014 view / download resume");

      w.sub("COMPETITIVE PROGRAMMING & RATINGS");
      w.bullet("cp / ratings \u2014 CP stat cards + rating progress chart");
      w.bullet("leetcode     \u2014 LeetCode profile card (1731)");
      w.bullet("codeforces   \u2014 Codeforces profile card (Specialist 1514)");
      w.bullet("codechef     \u2014 CodeChef profile card (3-Star 1710)");

      w.sub("CONNECT");
      w.bullet("socials      \u2014 all profiles at a glance");
      w.bullet("github / linkedin / leetcode / codeforces / codechef");
      w.bullet("contact      \u2014 email, phone, location");

      w.sub("SYSTEM");
      w.bullet("ls / pwd / cd \u2014 browse the fake filesystem");
      w.bullet("date, history, clear, neofetch");
      w.bullet("theme <name>  \u2014 switch color theme");
      w.bullet("sound <profile> \u2014 switch key sound (blue|thock|beam|silent)");
    },

    whoami(args, w) {
      w.box((b) => {
        const card = el("div", { cls: "profile-card" });
        const img = el("img", { cls: "profile-photo", attrs: { src: PROFILE.photoPath, alt: PROFILE.fullName } });
        const fallback = el("div", { cls: "profile-photo-fallback", text: "BJ" });
        fallback.style.display = "none";
        img.addEventListener("error", () => { img.style.display = "none"; fallback.style.display = "flex"; });
        const info = el("div", { cls: "profile-info" });
        info.appendChild(el("div", { cls: "profile-name", text: PROFILE.fullName.toUpperCase() }));
        info.appendChild(el("div", { cls: "profile-role", text: PROFILE.role }));
        info.appendChild(el("div", { cls: "profile-sub", text: PROFILE.subRoles.join(" \u00b7 ") }));
        info.appendChild(el("div", { cls: "profile-sub", text: PROFILE.location }));
        card.appendChild(img); card.appendChild(fallback); card.appendChild(info);
        b.el.appendChild(card);
        b.space();
        b.text(PROFILE.introShort);
        b.space();

        // CP Rating Badges
        const cpRow = el("div", { cls: "whoami-cp-row" });
        [
          { name: "LeetCode", val: CP.leetcode.rating, sub: CP.leetcode.badge, url: CP.leetcode.url, cls: "leetcode" },
          { name: "Codeforces", val: CP.codeforces.rating, sub: CP.codeforces.rank, url: CP.codeforces.url, cls: "codeforces" },
          { name: "CodeChef", val: CP.codechef.rating, sub: CP.codechef.rank, url: CP.codechef.url, cls: "codechef" },
          { name: "Problems", val: CP.totalSolved, sub: "Solved", url: null, cls: "problems" },
        ].forEach((item) => {
          const chip = el(item.url ? "a" : "div", {
            cls: "whoami-cp-chip " + item.cls,
            attrs: item.url ? { href: item.url, target: "_blank", rel: "noopener noreferrer", title: "Open " + item.name + " profile" } : {},
          });
          const nameSpan = el("span", { cls: "chip-name", text: item.name });
          const valSpan = el("span", { cls: "chip-val", text: item.val });
          const subSpan = el("span", { cls: "chip-sub", text: "(" + item.sub + ")" });
          chip.appendChild(nameSpan);
          chip.appendChild(document.createTextNode(" "));
          chip.appendChild(valSpan);
          chip.appendChild(document.createTextNode(" "));
          chip.appendChild(subSpan);
          cpRow.appendChild(chip);
        });
        b.el.appendChild(cpRow);
        b.space();

        const links = el("div", { cls: "whoami-links" });
        links.appendChild(externalLink("GitHub \u2192 " + PROFILE.github.replace("https://",""), PROFILE.github));
        links.appendChild(document.createTextNode("   "));
        links.appendChild(externalLink("LinkedIn \u2192 " + PROFILE.linkedin.replace("https://www.",""), PROFILE.linkedin));
        b.el.appendChild(links);
      });
    },

    about(args, w) {
      w.heading("ABOUT");
      w.text("I'm Bhuvanesh Jagtap, a final-year B.E. Information Technology student at Pune Institute of Computer Technology. I like building things that make software work better \u2014 from backend systems and developer tools to full-stack applications.");
      w.space();
      w.text("During my internship at Siemens \u2013 Mendix, I worked on internal tooling around AWS AMI workflows, lifecycle management, and CI/CD reporting. Outside the internship, I've built a speech analytics platform, a full-stack blogging application, and a WhatsApp automation bot, using each project to go deeper into how software is designed, built, and scaled.");
      w.space();
      w.text("Problem-solving is a big part of how I think about engineering. I've solved 700+ problems across LeetCode, Codeforces, and CodeChef, and that mindset carries over into the way I approach software beyond competitive programming.");
      w.space();
      w.text("Run `experience`, `projects`, or `cp` for the details.", "dim");
    },

    education(args, w) {
      w.heading("EDUCATION");
      EDUCATION.forEach((e) => {
        w.box((b) => {
          const top = el("div", { cls: "kv-row" });
          top.appendChild(el("span", { cls: "v bold", text: e.school }));
          top.appendChild(el("span", { cls: "v dim", text: e.years }));
          b.el.appendChild(top);
          b.text(e.detail, "accent2");
          b.text(e.location, "dim faint");
        });
      });
    },

    experience(args, w) {
      w.heading("EXPERIENCE");
      w.box((b) => {
        const top = el("div", { cls: "kv-row" });
        top.appendChild(el("span", { cls: "v bold", text: EXPERIENCE.company }));
        top.appendChild(el("span", { cls: "v dim", text: EXPERIENCE.duration }));
        b.el.appendChild(top);
        b.text(EXPERIENCE.role, "accent2");
        b.text(EXPERIENCE.location, "dim faint");
        b.space();
        EXPERIENCE.bullets.forEach((line) => b.bullet(line));
      });
    },

    skills(args, w) {
      w.heading("SKILLS \u2014 Interactive Galaxy");
      w.text("Hover nodes to highlight. Grouped by category.", "dim");
      w.space();
      const container = el("div");
      w.el.appendChild(container);
      buildSkillGalaxy(container);
      w.space();
      SKILLS.forEach((cat) => {
        w.sub(cat.label);
        w.tags(cat.items);
      });
    },

    projects(args, w) {
      w.heading("~/projects");

      const pre = el("pre", { cls: "line" });
      let tree = "";
      PROJECTS.forEach((p, i) => {
        const isLast = i === PROJECTS.length - 1;
        tree += (isLast ? "\u2514\u2500\u2500 " : "\u251c\u2500\u2500 ") + p.slug + "\n";
      });
      pre.textContent = tree.trim();
      pre.style.color = "var(--accent-2)";
      w.raw(pre);
      w.space();

      PROJECTS.forEach((p) => {
        const card = el("div", { cls: "proj-card" });
        card.innerHTML = "";
        const nameEl = el("div", { cls: "proj-card-name", text: p.name });
        const shortEl = el("div", { cls: "proj-card-short", text: p.short });
        const tagsWrap = el("div");
        p.tech.forEach(t => tagsWrap.appendChild(el("span", { cls: "tag", text: t })));
        const links = el("div", { cls: "proj-card-links" });
        links.appendChild(externalLink("\u21d7 GitHub", p.github));
        card.appendChild(nameEl);
        card.appendChild(shortEl);
        card.appendChild(tagsWrap);
        card.appendChild(links);
        w.el.appendChild(card);
      });

      w.space();
      w.text("Type `project <name>` for full details \u2014 e.g. project " + PROJECTS[0].slug, "faint italic");
    },

    project(args, w) {
      if (!args.length) {
        w.text("Usage:");
        w.text("project <name>", "accent2");
        w.space();
        w.text("Available: " + PROJECTS.map((p) => p.slug).join(", "), "dim");
        return;
      }
      const query = args.join(" ").toLowerCase();
      const proj = PROJECTS.find(
        (p) => p.slug === query || p.name.toLowerCase() === query || p.slug.includes(query)
      );
      if (!proj) {
        w.text("Project not found: " + args.join(" "), "err");
        w.text("Type `projects` to see available projects.", "dim");
        return;
      }
      w.heading(proj.name);
      w.text(proj.short, "dim");
      w.space();
      w.tags(proj.tech, true);
      w.space();
      proj.highlights.forEach((h) => w.bullet(h));
      w.space();
      w.buttons([actionButton("VIEW ON GITHUB \u21d7", { href: proj.github })]);
    },

    resume(args, w) {
      w.text("Resume available.");
      w.buttons([
        actionButton("VIEW RESUME", { href: PROFILE.resumePath }),
        actionButton("DOWNLOAD RESUME", { href: PROFILE.resumePath, download: true, ghost: true }),
      ]);
    },

    contact(args, w) {
      w.heading("CONTACT");
      w.kv("Email", externalLink(PROFILE.email, "mailto:" + PROFILE.email), true);
      w.kv("Phone", externalLink(PROFILE.phone, "tel:" + PROFILE.phone.replace(/[^+\d]/g, "")), true);
      w.kv("Location", PROFILE.location);
      w.kv("LinkedIn", externalLink("linkedin.com/in/bhuvanesh-jagtap", PROFILE.linkedin), true);
      w.kv("GitHub", externalLink("github.com/JagtapBhuvanesh25", PROFILE.github), true);
      w.space();
      w.buttons([actionButton("EMAIL ME", { href: "mailto:" + PROFILE.email, blank: false })]);
    },

    socials(args, w) {
      w.heading("SOCIALS");
      w.linkLine("GitHub", PROFILE.github);
      w.linkLine("LinkedIn", PROFILE.linkedin);
      w.linkLine("LeetCode", PROFILE.leetcode);
      w.linkLine("Codeforces", PROFILE.codeforces);
      w.linkLine("CodeChef", PROFILE.codechef);
      const p = el("p", { cls: "line dim" });
      p.appendChild(document.createTextNode("Email \u2192 "));
      p.appendChild(externalLink(PROFILE.email, "mailto:" + PROFILE.email));
      w.el.appendChild(p);
    },

    github: null, linkedin: null,

    cp(args, w) {
      w.heading("COMPETITIVE PROGRAMMING & RATINGS");

      // 4 CP stat cards
      const grid = el("div", { cls: "cp-stats-grid" });
      [
        { value: CP.totalSolved,       label: "PROBLEMS SOLVED", sub: "LeetCode · CF · CC", cls: "problems", url: null },
        { value: CP.leetcode.rating,   label: "LEETCODE",        sub: CP.leetcode.rank + " (" + CP.leetcode.rating + ")", cls: "leetcode", url: CP.leetcode.url },
        { value: CP.codeforces.rating, label: "CODEFORCES",      sub: CP.codeforces.rank + " (" + CP.codeforces.rating + ")", cls: "codeforces", url: CP.codeforces.url },
        { value: CP.codechef.rating,   label: "CODECHEF",        sub: CP.codechef.rank + " (" + CP.codechef.rating + ")", cls: "codechef", url: CP.codechef.url },
      ].forEach(({ value, label, sub, cls, url }) => {
        const card = el(url ? "a" : "div", {
          cls: "cp-stat-card " + cls + (url ? " clickable" : ""),
          attrs: url ? { href: url, target: "_blank", rel: "noopener noreferrer", title: "Open " + label + " profile" } : {},
        });
        card.appendChild(el("div", { cls: "cp-stat-value", text: value }));
        card.appendChild(el("div", { cls: "cp-stat-label", text: label }));
        card.appendChild(el("div", { cls: "cp-stat-sub",   text: sub }));
        if (url) {
          card.appendChild(el("div", { cls: "cp-stat-link-hint", text: "open profile ↗" }));
        }
        grid.appendChild(card);
      });
      w.el.appendChild(grid);

      w.space();
      w.text("Rating Progress (simulated trend \u2014 last 7 contests):", "dim");
      buildRatingChart(w.el);

      w.space();
      w.sub("PROFILES & RATINGS");
      w.linkLine("LeetCode (Rating " + CP.leetcode.rating + " \u00b7 " + CP.leetcode.rank + ")", CP.leetcode.url);
      w.linkLine("Codeforces (" + CP.codeforces.rank + " \u00b7 Rating " + CP.codeforces.rating + ")", CP.codeforces.url);
      w.linkLine("CodeChef (" + CP.codechef.rank + " \u00b7 Rating " + CP.codechef.rating + ")", CP.codechef.url);

      w.space();
      w.sub("ACHIEVEMENTS");
      ACHIEVEMENTS.forEach((a) => w.bullet(a));

      w.space();
      w.text("Tip: Try typing `leetcode`, `codeforces`, or `codechef` for individual cards.", "dim italic");
    },

    ratings(args, w) { commands.cp(args, w); },
    competitive(args, w) { commands.cp(args, w); },

    leetcode(args, w) {
      w.heading("LEETCODE RATING & STATS");
      const card = el("div", { cls: "cp-platform-card leetcode" });
      const hdr = el("div", { cls: "cp-platform-header" });
      hdr.appendChild(el("div", { cls: "cp-platform-title", text: "⚡ LeetCode" }));
      hdr.appendChild(el("span", { cls: "cp-platform-badge leetcode", text: "Rating: " + CP.leetcode.rating }));
      card.appendChild(hdr);

      const stats = el("div", { cls: "cp-platform-stats" });
      stats.appendChild(statBox(CP.leetcode.rating, "Contest Rating"));
      stats.appendChild(statBox(CP.leetcode.rank, "Rank Bracket"));
      stats.appendChild(statBox(CP.leetcode.handle, "Handle"));
      card.appendChild(stats);

      const footer = el("div", { cls: "cp-platform-footer" });
      footer.appendChild(actionButton("OPEN LEETCODE PROFILE ↗", { href: CP.leetcode.url }));
      card.appendChild(footer);

      w.el.appendChild(card);
    },

    codeforces(args, w) {
      w.heading("CODEFORCES RATING & STATS");
      const card = el("div", { cls: "cp-platform-card codeforces" });
      const hdr = el("div", { cls: "cp-platform-header" });
      hdr.appendChild(el("div", { cls: "cp-platform-title", text: "⚔️ Codeforces" }));
      hdr.appendChild(el("span", { cls: "cp-platform-badge codeforces", text: CP.codeforces.rank + " (" + CP.codeforces.rating + ")" }));
      card.appendChild(hdr);

      const stats = el("div", { cls: "cp-platform-stats" });
      stats.appendChild(statBox(CP.codeforces.rating, "Rating (Max 1514)"));
      stats.appendChild(statBox(CP.codeforces.rank, "Rank"));
      stats.appendChild(statBox(CP.codeforces.handle, "Handle"));
      card.appendChild(stats);

      const footer = el("div", { cls: "cp-platform-footer" });
      footer.appendChild(actionButton("OPEN CODEFORCES PROFILE ↗", { href: CP.codeforces.url }));
      card.appendChild(footer);

      w.el.appendChild(card);
    },

    codechef(args, w) {
      w.heading("CODECHEF RATING & STATS");
      const card = el("div", { cls: "cp-platform-card codechef" });
      const hdr = el("div", { cls: "cp-platform-header" });
      hdr.appendChild(el("div", { cls: "cp-platform-title", text: "⭐ CodeChef" }));
      hdr.appendChild(el("span", { cls: "cp-platform-badge codechef", text: CP.codechef.rank + " (" + CP.codechef.rating + ")" }));
      card.appendChild(hdr);

      const stats = el("div", { cls: "cp-platform-stats" });
      stats.appendChild(statBox(CP.codechef.rating, "Rating (Max 1710)"));
      stats.appendChild(statBox(CP.codechef.rank, "Division Stars"));
      stats.appendChild(statBox(CP.codechef.handle, "Handle"));
      card.appendChild(stats);

      const footer = el("div", { cls: "cp-platform-footer" });
      footer.appendChild(actionButton("OPEN CODECHEF PROFILE ↗", { href: CP.codechef.url }));
      card.appendChild(footer);

      w.el.appendChild(card);
    },

    recruiter(args, w) {
      w.heading("RECRUITER MODE");
      w.divider();
      w.kv("CANDIDATE", PROFILE.fullName);
      w.kv("TARGET", "Software Engineer / SDE");
      w.space();
      w.sub("EDUCATION");
      w.text("B.E. Information Technology \u2014 PICT \u00b7 CGPA 9.52");
      w.space();
      w.sub("EXPERIENCE");
      w.text(EXPERIENCE.company + " \u2014 " + EXPERIENCE.role);
      w.space();
      w.sub("PROJECTS");
      w.text(PROJECTS.length + " technical projects \u2014 see `projects`");
      w.space();
      w.sub("COMPETITIVE PROGRAMMING");
      w.text(CP.totalSolved + " DSA problems solved");
      w.text("LeetCode " + CP.leetcode.rating + " \u00b7 Codeforces " + CP.codeforces.rank + " \u00b7 CodeChef " + CP.codechef.rank);
      w.space();
      w.sub("STACK");
      w.text("C/C++ \u00b7 JavaScript \u00b7 Python \u00b7 Java");
      w.text("React \u00b7 Node.js \u00b7 Express");
      w.text("MySQL \u00b7 PostgreSQL \u00b7 MongoDB");
      w.divider();
      w.buttons([
        actionButton("VIEW RESUME", { href: PROFILE.resumePath }),
        actionButton("GITHUB", { href: PROFILE.github, ghost: true }),
        actionButton("LINKEDIN", { href: PROFILE.linkedin, ghost: true }),
        actionButton("CONTACT", { ghost: true, onClick: () => runCommand("contact") }),
      ]);
    },

    neofetch(args, w) {
      const row = el("div", { attrs: { style: "display:flex;gap:22px;flex-wrap:wrap;" } });
      const art = el("pre", {
        cls: "ascii",
        text: "   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502  BJ   \u2502\n   \u2502  >_   \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518",
      });
      art.style.flex = "none";
      const info = el("div", { attrs: { style: "flex:1;min-width:220px;" } });
      const iw = makeWriter(info);
      iw.text("bh@portfolio", "bold accent");
      iw.text("\u2500".repeat(13), "faint");
      iw.kv("OS", "BhuvaneshOS 2.0");
      iw.kv("Host", "Portfolio Terminal");
      iw.kv("Shell", "bash (enhanced)");
      iw.kv("Role", PROFILE.role);
      iw.kv("Focus", "Full Stack Development");
      iw.kv("CP", CP.totalSolved + " DSA Problems");
      iw.kv("Education", "B.E. IT \u00b7 PICT");
      iw.kv("CGPA", "9.52");
      iw.kv("Location", "Pune, India");
      iw.kv("Status", "\u2728 Building");
      iw.kv("Theme", terminalEl.getAttribute("data-theme") || "green");
      row.appendChild(art); row.appendChild(info);
      w.el.appendChild(row);
      w.space();

      // Color palette
      const swatches = el("div", { attrs: { style: "display:flex;gap:4px;" } });
      const swatchColors = {
        green: "#5dffb0", cyan: "#38eaff", purple: "#c084fc",
        amber: "#fbbf24", "cyber-tokyo": "#ff2d78", "synthwave-84": "#f97316", "monochrome-oled": "#fff",
      };
      Object.entries(swatchColors).forEach(([name, color]) => {
        const sw = el("span", { attrs: { style: `display:inline-block;width:16px;height:16px;background:${color};border-radius:3px;cursor:pointer;`, title: name } });
        sw.addEventListener("click", () => runCommand("theme " + name));
        swatches.appendChild(sw);
      });
      w.el.appendChild(swatches);
      w.text("Click a color above to switch theme", "faint");
    },

    theme(args, w) {
      if (!args.length) {
        w.text("Current theme: " + terminalEl.getAttribute("data-theme"));
        w.text("Available: " + VALID_THEMES.join(" | "), "dim");
        return;
      }
      const choice = args[0].toLowerCase();
      if (!VALID_THEMES.includes(choice)) {
        w.text("Unknown theme: " + choice, "err");
        w.text("Available: " + VALID_THEMES.join(", "), "dim");
        return;
      }
      setTheme(choice);
      w.text("Theme set to " + choice + " \u2728", "accent");
    },

    sound(args, w) {
      if (!args.length) {
        w.text("Usage: sound <profile>", "dim");
        w.text("Profiles: " + AudioEngine.PROFILES.join(" | "), "dim");
        return;
      }
      const p = args[0].toLowerCase();
      if (!AudioEngine.setProfile(p)) {
        w.text("Unknown sound profile: " + p, "err");
        w.text("Profiles: " + AudioEngine.PROFILES.join(", "), "dim");
        return;
      }
      w.text("Sound profile: " + p, "accent");
      AudioEngine.playKeyClick(); // preview
    },

    echo(args, w) { w.text(args.join(" ")); },

    sudo(args, w) {
      w.text("Permission denied.", "err");
      w.text("Nice try.");
      w.text("You are not root here.", "dim");
    },

    date(args, w) { w.text(new Date().toString()); },

    clear() { outputEl.innerHTML = ""; },

    history(args, w) {
      if (!state.history.length) { w.text("No commands yet.", "dim"); return; }
      state.history.forEach((c, i) => w.text(String(i + 1).padStart(3, " ") + "  " + c, "dim"));
    },

    pwd(args, w) { w.text("/home/bhuvanesh/portfolio" + (state.path === "~" ? "" : "/" + state.path)); },

    ls(args, w) {
      let items;
      switch (state.path) {
        case "projects":   items = PROJECTS.map((p) => p.slug + "/"); break;
        case "skills":     items = SKILLS.map((s) => s.label.toLowerCase().replace(/[^a-z]+/g,"-") + "/"); break;
        case "education":  items = EDUCATION.map((_,i) => "school-"+(i+1)+"/"); break;
        case "experience": items = ["siemens-mendix/"]; break;
        case "competitive":items = ["leetcode","codeforces","codechef"]; break;
        case "contact": case "socials": items = ["email","phone","github","linkedin"]; break;
        default: items = ["about/","education/","experience/","projects/","skills/","competitive/","contact/","socials/","resume.pdf"];
      }
      items.forEach((i) => w.text(i, i.endsWith("/") ? "accent2" : "dim"));
    },

    cd(args, w) {
      if (!args.length || args[0] === "~") { state.path = "~"; updatePrompt(); return; }
      const target = args[0].replace(/\/$/, "");
      if (target === "..") { state.path = "~"; updatePrompt(); return; }
      if (target === "resume.pdf") { w.text("cd: not a directory: resume.pdf", "err"); return; }
      if (PSEUDO_DIRS.includes(target)) { state.path = target; updatePrompt(); return; }
      w.text("cd: no such file or directory: " + args[0], "err");
    },

    /* ---- shell fallbacks ---- */
    vim(args, w) {
      w.text("Entering vim...", "dim");
      w.text("You are now trapped.");
      w.space();
      w.text("To exit, try: :wq", "accent2");
      w.text("(Kidding \u2014 this isn't a real editor. You were never in danger.)", "faint italic");
    },
    rm(args, w) {
      w.text("rm: cannot remove reality: Operation not permitted.", "err");
      w.text("Nice try though.", "dim");
    },
    coffee(args, w) {
      w.text("Coffee module not found.", "warn");
      w.text("Falling back to chai.exe \u2014 running on faster fuel anyway.", "dim");
    },
    tle(args, w) {
      w.text("Verdict: TLE.", "err");
      w.text("Your patience exceeded the time limit. Try again with a better constant factor.", "dim");
    },
  };

  // Wire social commands
  commands.github    = socialCommand("GitHub",     PROFILE.github);
  commands.linkedin  = socialCommand("LinkedIn",   PROFILE.linkedin);

  /* =========================================================
     7. DISPATCHER
     ========================================================= */
  function runCommand(raw) {
    const trimmed = (raw || "").trim();

    // Emit shockwave + audio on Enter
    triggerShockwave();
    Constellation.disperse(window.innerWidth/2, window.innerHeight/2, 5);

    if (!trimmed) {
      commitBlock("");
      scrollToBottom();
      return;
    }

    const parts = trimmed.split(/\s+/);
    const cmdName = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (cmdName === "clear") {
      state.history.push(trimmed);
      state.historyIndex = state.history.length;
      commands.clear();
      return;
    }

    state.history.push(trimmed);
    state.historyIndex = state.history.length;

    const result = commitBlock(trimmed);
    const w = makeWriter(result);
    const handler = commands[cmdName];

    if (typeof handler === "function") {
      try {
        handler(args, w, trimmed);
        AudioEngine.playEnterChime();
        triggerScreenShake();
        Combo.enterHit();
      } catch (e) {
        w.text("Something went wrong running that command.", "err");
        AudioEngine.playErrorBuzz();
      }
    } else {
      w.text("Command not found: " + cmdName, "err");
      w.text("Type `help` to see available commands.", "dim");
      AudioEngine.playErrorBuzz();
    }
    scrollToBottom();
  }

  /* =========================================================
     8. AUTOCOMPLETE
     ========================================================= */
  function handleAutocomplete() {
    const val = inputEl.value;
    if (!val.trim()) return;
    const parts = val.split(/\s+/);
    let candidates = []; let base = "";

    if (parts.length === 1) {
      const prefix = parts[0].toLowerCase();
      candidates = COMMAND_LIST.filter((c) => c.startsWith(prefix));
    } else {
      const head = parts[0].toLowerCase();
      const prefix = parts.slice(1).join(" ").toLowerCase();
      if (head === "project") { candidates = PROJECTS.map((p)=>p.slug).filter((s)=>s.startsWith(prefix)); base = "project "; }
      else if (head === "cd") { candidates = PSEUDO_DIRS.filter((d)=>d.startsWith(prefix)); base = "cd "; }
      else if (head === "theme") { candidates = VALID_THEMES.filter((t)=>t.startsWith(prefix)); base = "theme "; }
      else if (head === "sound") { candidates = AudioEngine.PROFILES.filter((p)=>p.startsWith(prefix)); base = "sound "; }
      else return;
    }

    if (candidates.length === 1) {
      inputEl.value = base + candidates[0] + " ";
      typedMirror.textContent = inputEl.value;
    } else if (candidates.length > 1) {
      const result = commitBlock(val);
      const s = el("div", { cls: "suggestions" });
      candidates.forEach((c) => s.appendChild(el("span", { cls: "opt", text: c })));
      result.appendChild(s);
      scrollToBottom();
    }
  }

  /* =========================================================
     9. INPUT EVENT WIRING
     ========================================================= */
  function getCursorScreenPos() {
    const rect = inputEl.getBoundingClientRect();
    return { x: rect.left + rect.width * 0.5, y: rect.top + rect.height * 0.5 };
  }

  function attachInputHandlers() {
    inputEl.addEventListener("input", () => {
      typedMirror.textContent = inputEl.value;

      // Spark emission
      const cursorEl2 = document.getElementById("cursor");
      if (cursorEl2) {
        const r = cursorEl2.getBoundingClientRect();
        Particles.emit(r.left, r.top + r.height / 2, 5);
      }

      // Spring cursor
      const cursorDom = document.getElementById("cursor");
      if (cursorDom) {
        cursorDom.classList.add("typing");
        clearTimeout(cursorDom._typingTimer);
        cursorDom._typingTimer = setTimeout(() => cursorDom.classList.remove("typing"), 300);
      }

      // Combo
      Combo.hit();

      // Key click audio
      AudioEngine.playKeyClick();
    });

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const val = inputEl.value;
        inputEl.value = "";
        typedMirror.textContent = "";
        runCommand(val);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!state.history.length) return;
        state.historyIndex = Math.max(0, state.historyIndex - 1);
        inputEl.value = state.history[state.historyIndex] || "";
        typedMirror.textContent = inputEl.value;
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        state.historyIndex = Math.min(state.history.length, state.historyIndex + 1);
        inputEl.value = state.history[state.historyIndex] || "";
        typedMirror.textContent = inputEl.value;
        return;
      }
      if (e.key === "Tab") {
        if (!inputEl.value.trim()) return;
        e.preventDefault();
        handleAutocomplete();
        return;
      }
      if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
        const sel = window.getSelection().toString();
        if (sel.length > 0) return;
        e.preventDefault();
        commitBlock(inputEl.value + "^C");
        inputEl.value = ""; typedMirror.textContent = "";
        scrollToBottom();
        return;
      }
      if (e.ctrlKey && (e.key === "l" || e.key === "L")) {
        e.preventDefault();
        commands.clear();
        return;
      }
    });

    terminalEl.addEventListener("click", () => {
      const sel = window.getSelection().toString();
      if (sel.length === 0) inputEl.focus();
    });

    quickActionEls.forEach((button) => {
      button.addEventListener("click", () => {
        runCommand(button.dataset.command);
        inputEl.focus();
      });
    });

    // Swatch theme switchers
    swatchEls.forEach((sw) => {
      sw.addEventListener("click", () => {
        const theme = sw.getAttribute("data-theme-switch");
        if (theme) setTheme(theme);
      });
    });
  }

  /* =========================================================
     10. THEME ENGINE
     ========================================================= */
  function setTheme(name) {
    terminalEl.setAttribute("data-theme", name);
    document.body.setAttribute("data-theme", name);
    try { localStorage.setItem("portfolio-theme", name); } catch(e) {}
    updateSwatchState(name);
  }

  function updateSwatchState(theme) {
    swatchEls.forEach((sw) => {
      sw.classList.toggle("active", sw.getAttribute("data-theme-switch") === theme);
    });
  }

  /* =========================================================
     11. STATUS BAR — uptime, ms clock, fake ping
     ========================================================= */
  function updateStatusBar() {
    const elapsed = Date.now() - state.startTime;
    const s = Math.floor(elapsed / 1000) % 60;
    const m = Math.floor(elapsed / 60000) % 60;
    const h = Math.floor(elapsed / 3600000);
    const pad = (n) => String(n).padStart(2, "0");
    if (uptimeEl) uptimeEl.textContent = (h ? pad(h)+":" : "") + pad(m)+":"+pad(s);

    const now = new Date();
    const ms = String(now.getMilliseconds()).padStart(3, "0");
    if (msclockEl) {
      msclockEl.textContent =
        pad(now.getHours())+":"+pad(now.getMinutes())+":"+pad(now.getSeconds())+"."+ms;
    }
  }

  // Fake ping that varies slightly
  let _pingBase = 12;
  setInterval(() => {
    _pingBase = Math.max(5, Math.min(40, _pingBase + (Math.random()-0.5)*4));
    if (pingEl) pingEl.textContent = "ping: " + Math.round(_pingBase) + "ms";
  }, 2000);

  /* =========================================================
     12. CLOCK
     ========================================================= */
  function updateClock() {
    clockEl.textContent = new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit", second:"2-digit" });
  }

  /* =========================================================
     13. INSANE BOOT SEQUENCE
     ========================================================= */
  const ASCII_ART =
    "\u2588\u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2557\n" +
    "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557     \u2588\u2588\u2551\n" +
    "\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d     \u2588\u2588\u2551\n" +
    "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557 \u2588\u2588  \u2588\u2588\u2551\n" +
    "\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d \u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n" +
    "\u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u2550\u2550\u2550\u255d";

  const SCRAMBLE_CHARS = "!@#$%^&*<>{}[]|\\/?~`ABCDEF01234789\u30A1\u30A2\u30A3\u30A4\u30A5";

  function scrambleText(target, finalText, duration, container) {
    return new Promise((resolve) => {
      if (reducedMotion) {
        container.textContent = finalText;
        resolve();
        return;
      }
      const span = document.createElement("span");
      span.className = "boot-scramble";
      container.appendChild(span);
      let start = null;
      function frame(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const revealed = Math.floor(p * finalText.length);
        let display = "";
        for (let i = 0; i < finalText.length; i++) {
          if (i < revealed || finalText[i] === " ") {
            display += finalText[i];
          } else {
            display += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        }
        span.textContent = display;
        if (p < 1) requestAnimationFrame(frame);
        else resolve();
      }
      requestAnimationFrame(frame);
    });
  }

  async function bootSequence() {
    let skip = reducedMotion;
    const skipHandler = () => { skip = true; };
    window.addEventListener("keydown", skipHandler, { once: true });
    window.addEventListener("mousedown", skipHandler, { once: true });

    // BIOS phase
    const biosLines = [
      ["BHUVANESH TERMINAL BIOS v2.0", "bios"],
      ["Copyright (c) 2024 BJ Systems. All rights reserved.", "bios"],
      ["", ""],
      ["CPU CHECK... PICT-IT Core @ 3.2GHz.............. OK", "ok"],
      ["MEM CHECK... 64MB RAM.......................... OK", "ok"],
      ["GPU CHECK... Constellation Engine v3........... OK", "ok"],
      ["NET CHECK... WebRTC + WebSocket................. OK", "ok"],
      ["AUDIO CHECK... Web Audio API................... OK", "ok"],
      ["", ""],
      ["SHA-256 INTEGRITY: ", ""],
    ];

    for (const [text, cls] of biosLines) {
      if (text === "SHA-256 INTEGRITY: ") {
        // Fake hash animation
        const p = el("p", { cls: "boot-line bios" });
        p.textContent = "SHA-256 INTEGRITY: ";
        outputEl.appendChild(p);
        scrollToBottom();
        if (!skip) await sleep(80);

        // Scramble hash
        const fakeHash = "5d8f2a1b9c3e7f0d4a6b2c8e1f5a9d3b7c2e8f1a4d6b9c3e5f7a2b8d1e4f6a9b";
        const hashSpan = document.createElement("span");
        hashSpan.className = "faint";
        p.appendChild(hashSpan);
        if (!skip) {
          for (let i = 0; i < 20; i++) {
            let fake = "";
            for (let j = 0; j < 64; j++) fake += "0123456789abcdef"[Math.floor(Math.random()*16)];
            hashSpan.textContent = fake;
            await sleep(30);
          }
        }
        hashSpan.textContent = fakeHash;
        hashSpan.className = "accent2";
        if (!skip) await sleep(200);

        const verLine = el("p", { cls: "boot-line verified" });
        verLine.textContent = "\u2713 SIGNATURE VERIFIED";
        outputEl.appendChild(verLine);
        scrollToBottom();
      } else {
        bootLine(text, cls);
      }
      if (!skip) await sleep(text === "" ? 30 : 80);
    }

    if (!skip) await sleep(160);

    const divLine = el("p", { cls: "boot-line bios" });
    divLine.textContent = "\u2500".repeat(50);
    outputEl.appendChild(divLine);
    scrollToBottom();
    if (!skip) await sleep(160);

    // ASCII art with scramble
    const artPre = el("pre", { cls: "ascii" });
    outputEl.appendChild(artPre);
    scrollToBottom();
    if (!skip) {
      await scrambleText(null, ASCII_ART, 800, artPre);
    } else {
      artPre.textContent = ASCII_ART;
    }

    // Name scramble
    const nameLine = el("p", { cls: "line bold", attrs: { style: "letter-spacing:0.1em;margin-top:4px;font-size:1.1em;" } });
    nameLine.style.color = "var(--accent)";
    nameLine.style.textShadow = "0 0 30px rgba(var(--accent-rgb),0.6)";
    outputEl.appendChild(nameLine);
    scrollToBottom();
    if (!skip) {
      await scrambleText(null, "B H U V A N E S H   J A G T A P", 900, nameLine);
    } else {
      nameLine.textContent = "B H U V A N E S H   J A G T A P";
    }

    outputEl.appendChild(el("p", { cls: "line dim", text: PROFILE.tagline, attrs: { style: "margin-top:6px;" } }));
    scrollToBottom();
    if (!skip) await sleep(200);

    outputEl.appendChild(el("p", { cls: "line", text: "Welcome to Bhuvanesh Jagtap's portfolio.", attrs: { style: "margin-top:14px;" } }));
    const helpLine = el("p", { cls: "line dim" });
    helpLine.appendChild(document.createTextNode("Type "));
    helpLine.appendChild(el("span", { cls: "accent2 bold", text: "help" }));
    helpLine.appendChild(document.createTextNode(" to explore. Try "));
    helpLine.appendChild(el("span", { cls: "accent bold", text: "cp" }));
    helpLine.appendChild(document.createTextNode(" for contest ratings, "));
    helpLine.appendChild(el("span", { cls: "accent bold", text: "about" }));
    helpLine.appendChild(document.createTextNode(", or "));
    helpLine.appendChild(el("span", { cls: "accent bold", text: "projects" }));
    helpLine.appendChild(document.createTextNode("."));
    outputEl.appendChild(helpLine);
    scrollToBottom();

    window.removeEventListener("keydown", skipHandler);
    window.removeEventListener("mousedown", skipHandler);

    state.booted = true;
    inputEl.disabled = false;
    inputEl.focus();

    // Boot chime
    setTimeout(() => AudioEngine.playBootChime(), 100);
  }

  /* =========================================================
     14. INIT
     ========================================================= */
  function init() {
    // Restore theme
    let savedTheme = "green";
    try { savedTheme = localStorage.getItem("portfolio-theme") || "green"; } catch(e) {}
    if (VALID_THEMES.includes(savedTheme)) setTheme(savedTheme);
    else setTheme("green");

    updatePrompt();
    updateClock();
    setInterval(updateClock, 1000);
    setInterval(updateStatusBar, 50);

    inputEl.disabled = true;
    attachInputHandlers();

    // Start visual systems
    if (!reducedMotion) {
      Constellation.start();
      Particles.start();
    }

    bootSequence();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();