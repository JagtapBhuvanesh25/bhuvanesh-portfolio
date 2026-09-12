/* =========================================================
   Bhuvanesh Jagtap — Terminal Portfolio
   main.js — data, render helpers, command registry, engine
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. DATA — single source of truth. Edit this section only
        to update the portfolio's content.
     ========================================================= */

  const PROFILE = {
    fullName: "Bhuvanesh Janardan Jagtap",
    shortName: "Bhuvanesh Jagtap",
    role: "Software Engineer",
    subRoles: ["Full Stack Developer", "Competitive Programmer"],
    location: "Pune, Maharashtra, India",
    email: "deshmukhkanha25@gmail.com",
    phone: "+91-8975306863",
    github: "https://github.com/JagtapBhuvanesh25",
    linkedin: "https://www.linkedin.com/in/bhuvanesh-jagtap/",
    leetcode: "https://leetcode.com/u/kanhadeshmukh25/",
    codeforces: "https://codeforces.com/profile/bhuvanesh25",
    codechef: "https://www.codechef.com/users/kanhadeshmukh",
    // Update these two paths once the real files are placed in /assets.
    resumePath: "assets/I2K231216_BhuvaneshJagtap_Resume.pdf",
    photoPath: "assets/BhuvaneshJagtap_ProfilePhoto1.jpg",
    tagline:
      "Software engineer building full-stack systems, sharpened by 700+ competitive programming problems solved.",
    introShort:
      "Software engineer with full-stack and systems experience, currently pursuing a B.E. in Information Technology at PICT Pune. Built production tooling at Siemens \u2013 Mendix and shipped several independent full-stack projects. Solves problems \u2014 in code, and in contests.",
  };

  const EDUCATION = [
    {
      school: "Pune Institute of Computer Technology",
      detail: "B.E. Information Technology \u2014 CGPA: 9.52",
      years: "2023 \u2013 2027",
      location: "Pune, India",
    },
    {
      school: "Savitribai Phule Jr. College",
      detail: "CBSE(12th) \u2014 86.33%",
      years: "2022",
      location: "Pune, India",
    },
    {
      school: "Tapasya Public School",
      detail: "SSC (10th) \u2014 93.40%",
      years: "2020",
      location: "Arvi, Maharashtra, India",
    },
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
    {
      label: "Frameworks & Technologies",
      items: ["React.js", "Express.js", "Node.js", "Redux Toolkit", "Tailwind CSS", "Mendix"],
    },
    { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    {
      label: "Developer Tools",
      items: ["Git/GitHub", "GitLab CI/CD", "VS Code", "Postman", "Figma", "JIRA"],
    },
    { label: "CS Fundamentals", items: ["DSA", "OOP", "DBMS", "OS"] },
  ];

  const CP = {
    totalSolved: "700+",
    leetcode: { rating: "1731", url: PROFILE.leetcode },
    codeforces: { rank: "Specialist", rating: "1514", url: PROFILE.codeforces },
    codechef: { rank: "3-Star", rating: "1710", url: PROFILE.codechef },
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

  const outputEl = document.getElementById("output");
  const bodyEl = document.getElementById("terminalBody");
  const inputEl = document.getElementById("cmdInput");
  const typedMirror = document.getElementById("typedMirror");
  const promptTextEl = document.getElementById("promptText");
  const clockEl = document.getElementById("clock");
  const terminalEl = document.getElementById("terminal");
  const quickActionEls = document.querySelectorAll("[data-command]");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =========================================================
     3. Render helpers — small DOM builder utilities
     ========================================================= */

  function el(tag, opts) {
    opts = opts || {};
    const node = document.createElement(tag);
    if (opts.cls) node.className = opts.cls;
    if (opts.text !== undefined) node.textContent = opts.text;
    if (opts.html !== undefined) node.innerHTML = opts.html;
    if (opts.attrs) {
      for (const k in opts.attrs) node.setAttribute(k, opts.attrs[k]);
    }
    if (opts.children) opts.children.forEach((c) => c && node.appendChild(c));
    if (opts.onClick) node.addEventListener("click", opts.onClick);
    return node;
  }

  function externalLink(label, href, opts) {
    opts = opts || {};
    return el("a", {
      cls: "term-link" + (opts.cls ? " " + opts.cls : ""),
      text: label,
      attrs: {
        href: href,
        target: opts.samePage ? "" : "_blank",
        rel: "noopener noreferrer",
      },
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
    const attrs = {
      href: opts.href,
      target: opts.blank === false ? "" : "_blank",
      rel: "noopener noreferrer",
    };
    if (opts.download) attrs.download = "";
    return el("a", {
      cls: "action-btn" + (opts.ghost ? " ghost" : ""),
      text: label,
      attrs: attrs,
    });
  }

  /**
   * Creates a writer bound to a container element. Every terminal
   * command receives one of these to build its output.
   */
  function makeWriter(container) {
    const w = {
      el: container,
      text(str, cls) {
        container.appendChild(el("p", { cls: "line" + (cls ? " " + cls : ""), text: str }));
        return w;
      },
      raw(node) {
        container.appendChild(node);
        return w;
      },
      heading(str) {
        container.appendChild(el("p", { cls: "heading", text: str }));
        return w;
      },
      sub(str) {
        container.appendChild(el("p", { cls: "subheading", text: str }));
        return w;
      },
      divider() {
        container.appendChild(el("hr", { cls: "divider" }));
        return w;
      },
      kv(k, v, vIsNode) {
        const row = el("div", { cls: "kv-row" });
        row.appendChild(el("span", { cls: "k", text: k }));
        if (vIsNode) {
          const vwrap = el("span", { cls: "v", children: [v] });
          row.appendChild(vwrap);
        } else {
          row.appendChild(el("span", { cls: "v", text: v }));
        }
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
        items.forEach((t) =>
          wrap.appendChild(el("span", { cls: "tag" + (accent ? " accent" : ""), text: t }))
        );
        container.appendChild(wrap);
        return w;
      },
      ascii(str) {
        container.appendChild(el("pre", { cls: "ascii", text: str }));
        return w;
      },
      box(buildFn) {
        const boxEl = el("div", { cls: "box" });
        container.appendChild(boxEl);
        buildFn(makeWriter(boxEl));
        return w;
      },
      space() {
        container.appendChild(el("div", { attrs: { style: "height:6px" } }));
        return w;
      },
    };
    return w;
  }

  /* =========================================================
     4. Terminal engine state
     ========================================================= */

  const state = {
    path: "~", // fake current directory
    history: [],
    historyIndex: -1,
    booted: false,
  };

  const PSEUDO_DIRS = [
    "about",
    "education",
    "experience",
    "projects",
    "skills",
    "competitive",
    "contact",
    "socials",
  ];

  function currentPromptPath() {
    return state.path === "~" ? "~" : "~/" + state.path;
  }

  function updatePrompt() {
    promptTextEl.textContent = "bhuvanesh@portfolio:" + currentPromptPath() + "$";
  }

  function scrollToBottom() {
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

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
    return new Promise((resolve) => setTimeout(resolve, reducedMotion ? 0 : ms));
  }

  /* =========================================================
     5. Command registry
     ========================================================= */

  const COMMAND_LIST = [
    "help", "about", "whoami", "skills", "experience", "education",
    "projects", "project", "resume", "contact", "socials",
    "github", "linkedin", "leetcode", "codeforces", "codechef",
    "clear", "history", "pwd", "ls", "cd", "date", "neofetch",
    "sudo", "theme", "echo", "cp", "competitive", "recruiter",
  ];

  function openExternal(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

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
      w.bullet("whoami       \u2014 identity snapshot");
      w.bullet("education    \u2014 academic background");
      w.bullet("experience   \u2014 work experience");

      w.sub("WORK");
      w.bullet("skills       \u2014 technical skill set");
      w.bullet("projects     \u2014 project directory");
      w.bullet("project <name> \u2014 project details");
      w.bullet("resume       \u2014 view / download resume");

      w.sub("COMPETITIVE");
      w.bullet("cp           \u2014 competitive programming profile");

      w.sub("CONNECT");
      w.bullet("socials      \u2014 all profiles at a glance");
      w.bullet("github / linkedin / leetcode / codeforces / codechef");
      w.bullet("contact      \u2014 email, phone, location");

      w.sub("SYSTEM");
      w.bullet("ls / pwd / cd \u2014 browse the fake filesystem");
      w.bullet("date, history, clear, theme, neofetch");

      w.sub("UTILITY");
      w.bullet("echo <text>");
      w.bullet("sudo");

      w.divider();
      w.text("Not everything is listed here. Some things reward curiosity.", "faint italic");
    },

    whoami(args, w) {
      w.box((b) => {
        const card = el("div", { cls: "profile-card" });
        const img = el("img", {
          cls: "profile-photo",
          attrs: { src: PROFILE.photoPath, alt: PROFILE.fullName },
        });
        const fallback = el("div", { cls: "profile-photo-fallback", text: "BJ" });
        fallback.style.display = "none";
        img.addEventListener("error", () => {
          img.style.display = "none";
          fallback.style.display = "flex";
        });
        const info = el("div", { cls: "profile-info" });
        info.appendChild(el("div", { cls: "profile-name", text: PROFILE.fullName.toUpperCase() }));
        info.appendChild(el("div", { cls: "profile-role", text: PROFILE.role }));
        info.appendChild(
          el("div", { cls: "profile-sub", text: PROFILE.subRoles.join(" \u00b7 ") })
        );
        info.appendChild(el("div", { cls: "profile-sub", text: PROFILE.location }));
        card.appendChild(img);
        card.appendChild(fallback);
        card.appendChild(info);
        b.el.appendChild(card);
        b.space();
        b.text(PROFILE.introShort);
        b.space();
        const links = el("div");
        links.appendChild(externalLink("GitHub \u2192 " + PROFILE.github.replace("https://", ""), PROFILE.github));
        links.appendChild(document.createTextNode("   "));
        links.appendChild(externalLink("LinkedIn \u2192 " + PROFILE.linkedin.replace("https://www.", ""), PROFILE.linkedin));
        b.el.appendChild(links);
      });
    },

    about(args, w) {
      w.heading("ABOUT");
      w.text(
        "I'm a software engineer pursuing a B.E. in Information Technology at Pune Institute of Computer Technology (CGPA 9.52, 2023\u20132027). My work spans backend systems, automation tooling, and full-stack web applications."
      );
      w.space();
      w.text(
        "At Siemens \u2013 Mendix, I worked on internal developer tooling \u2014 an AMI lifecycle dashboard, a Python CLI for AWS AMI workflows, and automated CI/CD reporting pipelines. Outside of that, I've built a speech-analytics platform, a full-stack blogging app, and a WhatsApp automation bot."
      );
      w.space();
      w.text(
        "I also compete in competitive programming \u2014 700+ problems solved across LeetCode, Codeforces, and CodeChef \u2014 which shapes how I approach problem-solving in day-to-day engineering."
      );
      w.space();
      w.text("Run `experience`, `projects`, or `cp` for the details.", "dim");
    },

    education(args, w) {
      w.heading("EDUCATION");
      EDUCATION.forEach((e, i) => {
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
      w.heading("SKILLS");
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
        w.box((b) => {
          b.text(p.name, "bold");
          b.text(p.short, "dim");
          b.tags(p.tech);
        });
      });
      w.text("Type `project <name>` for details \u2014 e.g. project " + PROJECTS[0].slug, "faint italic");
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
      w.buttons([actionButton("VIEW ON GITHUB", { href: proj.github })]);
      w.text("SOURCE \u2192 GitHub (no live demo)", "faint");
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

    github: null,
    linkedin: null,
    leetcode: null,
    codeforces: null,
    codechef: null,

    cp(args, w) {
      w.heading("COMPETITIVE PROGRAMMING");
      w.kv("Total solved", CP.totalSolved);
      w.kv("LeetCode", CP.leetcode.rating, false);
      w.linkLine("LeetCode profile", CP.leetcode.url);
      w.kv("Codeforces", CP.codeforces.rank + " \u00b7 " + CP.codeforces.rating);
      w.linkLine("Codeforces profile", CP.codeforces.url);
      w.kv("CodeChef", CP.codechef.rank + " \u00b7 " + CP.codechef.rating);
      w.linkLine("CodeChef profile", CP.codechef.url);
      w.space();
      w.sub("ACHIEVEMENTS");
      ACHIEVEMENTS.forEach((a) => w.bullet(a));
    },

    competitive(args, w) {
      commands.cp(args, w);
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
        actionButton("CONTACT", {
          ghost: true,
          onClick: () => runCommand("contact"),
        }),
      ]);
    },

    neofetch(args, w) {
      const row = el("div", { attrs: { style: "display:flex; gap:22px; flex-wrap:wrap;" } });
      const art = el("pre", {
        cls: "ascii",
        text: "   ┌───────┐\n   │  BJ   │\n   │  >_   │\n   └───────┘",
      });
      art.style.flex = "none";
      const info = el("div", { attrs: { style: "flex:1; min-width:220px;" } });
      const iw = makeWriter(info);
      iw.text("bh@portfolio", "bold accent");
      iw.text("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500", "faint");
      iw.kv("OS", "BhuvaneshOS");
      iw.kv("Host", "Portfolio");
      iw.kv("Shell", "bash");
      iw.kv("Role", PROFILE.role);
      iw.kv("Focus", "Full Stack Development");
      iw.kv("CP", CP.totalSolved + " DSA Problems");
      iw.kv("Education", "B.E. Information Technology");
      iw.kv("CGPA", "9.52");
      iw.kv("Location", "Pune, India");
      iw.kv("Status", "Building");
      row.appendChild(art);
      row.appendChild(info);
      w.el.appendChild(row);
      w.space();
      const swatches = el("div");
      ["green", "cyan", "purple", "amber"].forEach((t) => {
        const sw = el("span", {
          text: "\u25a0 ",
          attrs: { style: "font-size:16px;" },
        });
        swatches.appendChild(sw);
      });
      w.el.appendChild(swatches);
    },

    theme(args, w) {
      const valid = ["green", "cyan", "purple", "amber"];
      if (!args.length) {
        w.text("Current theme: " + terminalEl.getAttribute("data-theme"));
        w.text("Usage: theme <" + valid.join(" | ") + ">", "dim");
        return;
      }
      const choice = args[0].toLowerCase();
      if (!valid.includes(choice)) {
        w.text("Unknown theme: " + choice, "err");
        w.text("Available: " + valid.join(", "), "dim");
        return;
      }
      terminalEl.setAttribute("data-theme", choice);
      try {
        localStorage.setItem("portfolio-theme", choice);
      } catch (e) {}
      w.text("Theme set to " + choice + ".", "accent");
    },

    echo(args, w) {
      w.text(args.join(" "));
    },

    sudo(args, w) {
      w.text("Permission denied.");
      w.text("Nice try.");
      w.text("You are not root here.", "dim");
    },

    date(args, w) {
      w.text(new Date().toString());
    },

    clear() {
      outputEl.innerHTML = "";
    },

    history(args, w) {
      if (!state.history.length) {
        w.text("No commands yet.", "dim");
        return;
      }
      state.history.forEach((c, i) => w.text(String(i + 1).padStart(3, " ") + "  " + c, "dim"));
    },

    pwd(args, w) {
      w.text("/home/bhuvanesh/portfolio" + (state.path === "~" ? "" : "/" + state.path));
    },

    ls(args, w) {
      let items;
      switch (state.path) {
        case "projects":
          items = PROJECTS.map((p) => p.slug + "/");
          break;
        case "skills":
          items = SKILLS.map((s) => s.label.toLowerCase().replace(/[^a-z]+/g, "-") + "/");
          break;
        case "education":
          items = EDUCATION.map((e, i) => "school-" + (i + 1) + "/");
          break;
        case "experience":
          items = ["siemens-mendix/"];
          break;
        case "competitive":
          items = ["leetcode", "codeforces", "codechef"];
          break;
        case "contact":
        case "socials":
          items = ["email", "phone", "github", "linkedin"];
          break;
        default:
          items = [
            "about/", "education/", "experience/", "projects/",
            "skills/", "competitive/", "contact/", "socials/", "resume.pdf",
          ];
      }
      items.forEach((i) => w.text(i, i.endsWith("/") ? "accent2" : "dim"));
    },

    cd(args, w) {
      if (!args.length || args[0] === "~") {
        state.path = "~";
        updatePrompt();
        return;
      }
      const target = args[0].replace(/\/$/, "");
      if (target === "..") {
        state.path = "~";
        updatePrompt();
        return;
      }
      if (target === "resume.pdf") {
        w.text("cd: not a directory: resume.pdf", "err");
        return;
      }
      if (PSEUDO_DIRS.includes(target)) {
        state.path = target;
        updatePrompt();
        return;
      }
      w.text("cd: no such file or directory: " + args[0], "err");
    },

    /* ---- hidden easter eggs (not listed in help / autocomplete) ---- */
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

  // wire up individual social commands
  commands.github = socialCommand("GitHub", PROFILE.github);
  commands.linkedin = socialCommand("LinkedIn", PROFILE.linkedin);
  commands.leetcode = socialCommand("LeetCode", PROFILE.leetcode);
  commands.codeforces = socialCommand("Codeforces", PROFILE.codeforces);
  commands.codechef = socialCommand("CodeChef", PROFILE.codechef);

  /* =========================================================
     6. Dispatcher
     ========================================================= */

  function runCommand(raw) {
    const trimmed = (raw || "").trim();

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
      } catch (e) {
        w.text("Something went wrong running that command.", "err");
      }
    } else {
      w.text("Command not found: " + cmdName, "err");
      w.text("Type `help` to see available commands.", "dim");
    }
    scrollToBottom();
  }

  /* =========================================================
     7. Autocomplete
     ========================================================= */

  function handleAutocomplete() {
    const val = inputEl.value;
    if (!val.trim()) return;
    const parts = val.split(/\s+/);
    let candidates = [];
    let base = "";

    if (parts.length === 1) {
      const prefix = parts[0].toLowerCase();
      candidates = COMMAND_LIST.filter((c) => c.startsWith(prefix));
    } else {
      const head = parts[0].toLowerCase();
      const prefix = parts.slice(1).join(" ").toLowerCase();
      if (head === "project") {
        candidates = PROJECTS.map((p) => p.slug).filter((s) => s.startsWith(prefix));
        base = "project ";
      } else if (head === "cd") {
        candidates = PSEUDO_DIRS.filter((d) => d.startsWith(prefix));
        base = "cd ";
      } else if (head === "theme") {
        candidates = ["green", "cyan", "purple", "amber"].filter((t) => t.startsWith(prefix));
        base = "theme ";
      } else {
        return;
      }
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
     8. Input event wiring
     ========================================================= */

  function attachInputHandlers() {
    inputEl.addEventListener("input", () => {
      typedMirror.textContent = inputEl.value;
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
        if (!state.history.length) return;
        state.historyIndex = Math.min(state.history.length, state.historyIndex + 1);
        inputEl.value = state.history[state.historyIndex] || "";
        typedMirror.textContent = inputEl.value;
        return;
      }
      if (e.key === "Tab") {
        if (!inputEl.value.trim()) return; // let focus move naturally when there's nothing to complete
        e.preventDefault();
        handleAutocomplete();
        return;
      }
      if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
        const sel = window.getSelection().toString();
        if (sel.length > 0) return;
        e.preventDefault();
        commitBlock(inputEl.value + "^C");
        inputEl.value = "";
        typedMirror.textContent = "";
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
  }

  /* =========================================================
     9. Clock
     ========================================================= */

  function updateClock() {
    clockEl.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  /* =========================================================
     10. Boot sequence
     ========================================================= */

  const ASCII_ART =
    "\u2588\u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2557\n" +
    "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557     \u2588\u2588\u2551\n" +
    "\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d     \u2588\u2588\u2551\n" +
    "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557 \u2588\u2588  \u2588\u2588\u2551\n" +
    "\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d \u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n" +
    "\u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u2550\u2550\u2550\u255d";

  async function bootSequence() {
    const lines = [
      "Initializing portfolio kernel...",
      "Loading developer profile...",
      "Loading projects...",
      "Loading experience...",
      "Loading competitive programming data...",
      "Loading modules...",
      "System ready.",
    ];

    let skip = reducedMotion;
    const skipHandler = () => {
      skip = true;
    };
    window.addEventListener("keydown", skipHandler, { once: true });
    window.addEventListener("mousedown", skipHandler, { once: true });

    for (const line of lines) {
      bootLine(line, line === "System ready." ? "ok" : "");
      if (!skip) await sleep(130);
    }

    window.removeEventListener("keydown", skipHandler);
    window.removeEventListener("mousedown", skipHandler);

    await sleep(skip ? 0 : 220);

    outputEl.appendChild(el("pre", { cls: "ascii", text: ASCII_ART }));
    outputEl.appendChild(
      el("p", { cls: "line bold", text: "B H U V A N E S H   J A G T A P", attrs: { style: "letter-spacing:0.06em; margin-top:2px;" } })
    );
    outputEl.appendChild(el("p", { cls: "line dim", text: PROFILE.tagline, attrs: { style: "margin-top:6px;" } }));
    scrollToBottom();
    await sleep(skip ? 0 : 260);

    outputEl.appendChild(
      el("p", { cls: "line", text: "Welcome to Bhuvanesh Jagtap's portfolio.", attrs: { style: "margin-top:14px;" } })
    );
    const helpLine = el("p", { cls: "line dim" });
    helpLine.appendChild(document.createTextNode("Type "));
    helpLine.appendChild(el("span", { cls: "accent2 bold", text: "help" }));
    helpLine.appendChild(document.createTextNode(" to explore."));
    outputEl.appendChild(helpLine);
    scrollToBottom();

    state.booted = true;
    inputEl.disabled = false;
    inputEl.focus();
  }

  /* =========================================================
     11. Init
     ========================================================= */

  function init() {
    let savedTheme = "green";
    try {
      savedTheme = localStorage.getItem("portfolio-theme") || "green";
    } catch (e) {}
    if (["green", "cyan", "purple", "amber"].includes(savedTheme)) {
      terminalEl.setAttribute("data-theme", savedTheme);
    }

    updatePrompt();
    updateClock();
    setInterval(updateClock, 1000);

    inputEl.disabled = true;
    attachInputHandlers();
    bootSequence();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();