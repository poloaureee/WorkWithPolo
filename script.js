/* eslint-disable no-alert */
(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // --- Lightweight toast for placeholder actions ---
  function toast(message) {
    const id = 'pa-toast';
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('div');
      el.id = id;
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      el.style.cssText =
        'position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:80;max-width:min(92vw,560px);' +
        'padding:10px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(10,10,12,.78);' +
        'backdrop-filter:blur(10px);color:#f4f4f7;font-weight:650;font-size:14px;box-shadow:0 14px 40px rgba(0,0,0,.45);' +
        'opacity:0;pointer-events:none;transition:opacity 160ms ease, transform 160ms ease';
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.style.opacity = '1';
    el.style.transform = 'translateX(-50%) translateY(0)';
    window.clearTimeout(toast._t);
    toast._t = window.setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(-50%) translateY(6px)';
    }, 2200);
  }

  const content = {
    services: [
      {
        title: "Cybersecurity",
        description:
          "Protecting systems and networks from threats, implementing best practices, and staying ahead of vulnerabilities.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&q=80",
      },
      {
        title: "WordPress Development",
        description: "Building clean, fast, responsive WordPress sites with modern UX and performance in mind.",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop&q=80",
      },
      {
        title: "IT Support",
        description: "Hands-on troubleshooting for networks, systems, and users — calm, reliable, and thorough.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&q=80",
      },
      {
        title: "Backup Management",
        description: "Backup strategy and operations with Altaro and Microsoft 365 for safe recovery and continuity.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
      },
      {
        title: "Workflow Automation",
        description: "Automating repetitive work using Zapier, n8n, and AI tools to streamline processes.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80",
      },
      {
        title: "System Security",
        description: "Hardening, access control basics, and security-minded configuration across environments.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&q=80",
      },
    ],
    experiences: [
      {
        title: "IT Support Specialist",
        company: "Various Organizations",
        period: "Jan 2021 - Present",
        description:
          "Managing comprehensive IT infrastructure including network troubleshooting, system security, and data backup solutions. Implementing and maintaining Altaro backup systems and Microsoft 365 environments to ensure business continuity and data protection.",
        skills: ["Network Security", "System Administration", "Altaro Backup", "M365 Management", "Troubleshooting"],
      },
      {
        title: "WordPress Developer",
        company: "Freelance",
        period: "Jun 2022 - Present",
        description:
          "Creating modern, responsive WordPress websites with emphasis on performance optimization, user experience, and clean code architecture. Developing custom themes and implementing SEO best practices for enhanced online presence.",
        skills: ["WordPress", "PHP", "JavaScript", "Responsive Design", "SEO"],
      },
      {
        title: "Automation & Integration Specialist",
        company: "Current Focus",
        period: "Mar 2023 - Present",
        description:
          "Designing and implementing workflow automation solutions using Zapier, Make.com, and n8n. Integrating various business tools and AI-powered systems to streamline operations and increase productivity.",
        skills: ["Zapier", "Make.com", "n8n", "API Integration", "Workflow Automation", "AI Tools"],
      },
    ],
    projects: [
      {
        title: "Wedding Website",
        description:
          "Beautiful, responsive wedding website featuring elegant design, RSVP functionality, event details, and photo gallery. Built with modern web technologies for seamless mobile and desktop experience.",
        stack: ["WordPress", "Responsive Design", "CSS3", "JavaScript"],
        badge: "Web Development",
        image: "./assets/wedding-website.png.png",
        url: "https://aliandkrystalgethitched.com/",
      },
      {
        title: "Zapier CRM Automation",
        description: "Comprehensive CRM automation workflow integrating multiple platforms for lead management, customer communication, and data synchronization. Streamlines sales processes and reduces manual data entry.",
        stack: ["Zapier", "CRM Integration", "API", "Automation"],
        badge: "Automation",
        image: "./assets/zapier-crm.png",
        url: null,
      },
      {
        title: "Make.com Account Transactions",
        description: "Automated financial transaction processing system using Make.com. Handles account reconciliation, payment tracking, and automated reporting for efficient financial management.",
        stack: ["Make.com", "Financial Automation", "API Integration", "Data Processing"],
        badge: "Automation",
        image: "./assets/make-account transactions.png",
        url: null,
      },
      {
        title: "n8n AI Chatbot",
        description: "Intelligent chatbot powered by n8n workflow automation and AI integration. Provides automated customer support, answers queries, and seamlessly escalates to human agents when needed.",
        stack: ["n8n", "AI Integration", "Chatbot", "Workflow Automation"],
        badge: "AI & Automation",
        image: "./assets/n8n-chatbot.png",
        url: null,
      },
      {
        title: "Zapier Multi-Step Workflow",
        description: "Complex multi-step automation workflow connecting various business tools and platforms. Automates data flow between applications, triggers actions, and maintains data consistency across systems.",
        stack: ["Zapier", "Multi-App Integration", "Webhooks", "Automation"],
        badge: "Automation",
        image: "./assets/zapier1.png",
        url: null,
      },
      {
        title: "Advanced CRM Pipeline",
        description: "Sophisticated CRM pipeline automation managing lead scoring, nurturing campaigns, and sales funnel optimization. Integrates with email marketing and communication tools for comprehensive customer journey management.",
        stack: ["Zapier", "CRM", "Email Marketing", "Lead Management"],
        badge: "Automation",
        image: "./assets/zapiercrm1.png",
        url: null,
      },
    ],
  };

  // --- Year ---
  const year = $('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  // --- Sticky navbar: delayed hide on scroll-down, instant show on scroll-up ---
  const header = $('[data-header]');
  let lastScroll = 0;
  let hideTimer = null;          // pending hide timeout
  const HIDE_DELAY = 600;        // ms before the nav actually disappears
  const DEAD_BAND  = 6;          // px — ignore tiny scroll noise

  function showNav() {
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
    header.classList.remove('is-hidden');
    header.classList.add('is-visible');
  }
  function hideNav() {
    // cancel any previous timer, then schedule a fresh one
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      header.classList.remove('is-visible');
      header.classList.add('is-hidden');
      hideTimer = null;
    }, HIDE_DELAY);
  }

  function handleHeaderScroll() {
    if (!header) return;
    const cur = window.scrollY || 0;

    if (cur <= 60) {
      showNav();                  // always visible at the very top
    } else if (cur < lastScroll - DEAD_BAND) {
      showNav();                  // scrolling up  → show instantly
    } else if (cur > lastScroll + DEAD_BAND) {
      hideNav();                  // scrolling down → hide after delay
    }

    lastScroll = cur;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // --- Mobile nav ---
  const nav = $('[data-nav]');
  const navToggle = $('[data-nav-toggle]');
  const navLinks = $$('[data-nav-link]');

  function setNavOpen(isOpen) {
    if (!nav || !navToggle) return;
    nav.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => setNavOpen(!nav.classList.contains('is-open')));
    navLinks.forEach((a) => {
      a.addEventListener('click', (e) => {
        // Allow normal open-in-new-tab behavior
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        setNavOpen(false);
      });
    });

    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('is-open')) return;
      const within = nav.contains(e.target) || navToggle.contains(e.target);
      if (!within) setNavOpen(false);
    });
  }

  // --- Smooth scrolling (with respect for reduced motion) ---
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  navLinks.forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || '';
      if (!href.startsWith('#')) return;
      const target = $(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    });
  });

  // --- Scroll next button ---
  const scrollNext = $('[data-scroll-next]');
  if (scrollNext) {
    scrollNext.addEventListener('click', () => {
      const next = $('#about') || $('#services') || $('#experience');
      if (next) next.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    });
  }

  // --- Reveal on scroll ---
  const revealEls = $$('[data-reveal]');
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // --- Scrollspy (active nav item) ---
  const sections = ['#home', '#about', '#services', '#techstack', '#experience', '#projects', '#contact']
    .map((id) => $(id))
    .filter(Boolean);

  function setActiveNav(hash) {
    navLinks.forEach((a) => {
      const href = a.getAttribute('href');
      a.classList.toggle('is-active', href === hash);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActiveNav(`#${visible.target.id}`);
      },
      { root: null, threshold: [0.35, 0.55, 0.75], rootMargin: '-20% 0px -55% 0px' }
    );
    sections.forEach((s) => spy.observe(s));
  }

  // --- Services carousel render + controls ---
  const track = $('[data-track]');
  const dotsWrap = $('[data-dots]');
  const prevBtn = $('[data-prev]');
  const nextBtn = $('[data-next]');

  function cardTemplate({ title, description, image }) {
    return `
      <article class="service-card">
        <div class="service-media">
          ${image ? `<img class="media-img" src="${image}" alt="" loading="lazy" decoding="async" />` : ""}
          <div class="service-arrow" aria-hidden="true">↗</div>
        </div>
        <div class="service-body">
          <h3 class="service-title">${title}</h3>
          <p class="service-desc">${description}</p>
        </div>
      </article>
    `;
  }

  function renderServices() {
    if (!track || !dotsWrap) return;
    track.innerHTML = content.services.map(cardTemplate).join('');

    dotsWrap.innerHTML = content.services
      .map((_, i) => `<button class="dot-btn" type="button" aria-label="Go to slide ${i + 1}" data-dot="${i}"></button>`)
      .join('');

    const dots = $$('[data-dot]', dotsWrap);
    const cards = Array.from(track.children);

    function scrollToIndex(i) {
      const card = cards[i];
      if (!card) return;
      track.scrollTo({ left: card.offsetLeft - 4, behavior: prefersReduced ? 'auto' : 'smooth' });
    }

    function setDot(i) {
      dots.forEach((d, idx) => d.setAttribute('aria-current', idx === i ? 'true' : 'false'));
    }

    // default dot
    setDot(0);

    dots.forEach((d) =>
      d.addEventListener('click', () => {
        const i = Number(d.getAttribute('data-dot'));
        setDot(i);
        scrollToIndex(i);
      })
    );

    function getNearestIndex() {
      const x = track.scrollLeft + 8;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      cards.forEach((c, i) => {
        const dist = Math.abs(c.offsetLeft - x);
        if (dist < bestDist) {
          best = i;
          bestDist = dist;
        }
      });
      return best;
    }

    let raf = 0;
    track.addEventListener('scroll', () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setDot(getNearestIndex()));
    });

    function step(dir) {
      const i = getNearestIndex();
      const next = Math.max(0, Math.min(cards.length - 1, i + dir));
      setDot(next);
      scrollToIndex(next);
    }

    prevBtn?.addEventListener('click', () => step(-1));
    nextBtn?.addEventListener('click', () => step(1));

    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        step(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        step(1);
      }
    });
  }

  renderServices();

  // --- Parallax (floating shapes) ---
  const parallaxEls = $$('[data-parallax]');
  if (!prefersReduced && parallaxEls.length) {
    const base = new Map(parallaxEls.map((el) => [el, { x: 0, y: 0 }]));
    parallaxEls.forEach((el) => base.set(el, { x: 0, y: 0 }));

    function applyParallax() {
      const y = window.scrollY || 0;
      parallaxEls.forEach((el) => {
        const speed = Number(el.getAttribute('data-parallax') || '0.2');
        el.style.transform = `translate3d(0, ${Math.round(y * speed * 0.08)}px, 0)`;
      });
    }
    window.addEventListener('scroll', applyParallax, { passive: true });
    applyParallax();
  }

  // --- Tools Marquee render ---
  const tools = [
    { label: 'Zapier',           icon: '⚡', cls: 'ti--zapier'    },
    { label: 'Make.com',         icon: '⟡', cls: 'ti--make'      },
    { label: 'n8n',              icon: '⚙', cls: 'ti--n8n'       },
    { label: 'WordPress',        icon: 'W',  cls: 'ti--wp'        },
    { label: 'Elementor',        icon: 'E',  cls: 'ti--elementor' },
    { label: 'Gmail',            icon: '✉', cls: 'ti--gmail'     },
    { label: 'Google Drive',     icon: '📁', cls: 'ti--google'    },
    { label: 'Google Sheets',    icon: '📊', cls: 'ti--google'    },
    { label: 'Google Docs',      icon: '📄', cls: 'ti--google'    },
    { label: 'Asana',            icon: '◆', cls: 'ti--asana'     },
    { label: 'Slack',            icon: '♣', cls: 'ti--slack'     },
    { label: 'Apollo',           icon: 'A',  cls: 'ti--apollo'    },
    { label: 'Xero',             icon: 'X',  cls: 'ti--xero'      },
    { label: 'Gemini',           icon: '✦', cls: 'ti--gemini'    },
    { label: 'Webhooks',         icon: '⇄', cls: 'ti--webhook'   },
    { label: 'CRM',              icon: '📈', cls: 'ti--crm'       },
    { label: 'Custom CSS',       icon: '⟨/⟩', cls: 'ti--generic'   },
    { label: 'Responsive Design',icon: '📱', cls: 'ti--generic'   },
  ];

  function renderMarquee() {
    const marquee = $('[data-marquee]');
    if (!marquee) return;

    // duplicate the tools twice so the marquee loops seamlessly
    const chips = tools.map(t =>
      `<div class="tool-chip"><div class="tool-icon ${t.cls}">${t.icon}</div><span class="tool-label">${t.label}</span></div>`
    ).join('');

    marquee.innerHTML = chips + chips; // double for seamless loop
  }

  renderMarquee();

  // --- Experience render ---
  const xpRoot = $('.timeline');
  if (xpRoot) {
    xpRoot.innerHTML = content.experiences
      .map(
        (x) => `
        <article class="xp">
          <div class="xp-head">
            <div>
              <h3>${x.title}</h3>
              <div class="company">${x.company}</div>
            </div>
            <div class="period">${x.period}</div>
          </div>

          <p>${x.description}</p>
          <div class="tag-row">${x.skills.map((s) => `<span class="tag">${s}</span>`).join('')}</div>
        </article>
      `
      )
      .join('');
  }

  // --- Projects render ---
  const projectsRoot = $('[data-projects]');
  if (projectsRoot) {
    projectsRoot.innerHTML = content.projects
      .map(
        (p) => `
        <article class="project">
          <div class="project-top">
            <span class="project-pill">${p.badge}</span>
            ${p.image ? `<img class="media-img" src="${p.image}" alt="" loading="lazy" decoding="async" />` : ""}
          </div>
          <div class="project-body">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="tag-row">${(p.stack || []).map((s) => `<span class="tag">${s}</span>`).join('')}</div>
            ${
              p.url
                ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer">
                     View Live Site ↗
                   </a>`
                : `<span class="project-note">Private automation build — screenshot only</span>`
            }
          </div>
        </article>
      `
      )
      .join('');
  }

  // --- Placeholder links (prevent broken '#' navigation) ---
  $$('[data-placeholder-link]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || '';
      // Only intercept placeholders (avoid breaking real links like LinkedIn/CV)
      if (href && href !== '#') return;
      e.preventDefault();
      const what = a.getAttribute('data-placeholder-link') || 'URL';
      toast(`Add your ${what} in Porfolio/index.html or Porfolio/script.js`);
    });
  });

  // --- Contact form: open mail client (fast + no backend) ---
  const form = $('.contact-form');
  const status = $('[data-form-status]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get('name') || '').trim();
      const email = String(fd.get('email') || '').trim();
      const message = String(fd.get('message') || '').trim();

      const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'someone'}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
      );
      const mailto = `mailto:polo.aure19@gmail.com?subject=${subject}&body=${body}`;

      if (status) status.textContent = "Opening your email app…";
      window.location.href = mailto;
      form.reset();
      if (status) setTimeout(() => (status.textContent = "If your email app didn't open, copy: polo.aure19@gmail.com"), 1200);
    });
  }

  // --- To top ---
  const toTop = $('[data-to-top]');
  function onScroll() {
    if (!toTop) return;
    toTop.classList.toggle('is-visible', window.scrollY > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' }));
})();

