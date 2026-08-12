/* ============================================================
   PORTFOLIO — app.js
   Reads window.portfolioData and builds the entire site.
   ============================================================ */

(function () {
  'use strict';

  /* ─── Helpers ──────────────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  const svgIcon = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    award: `🏆`
  };

  /* ─── Data ─────────────────────────────────────────────── */
  const D = window.portfolioData;
  if (!D) { console.error('[Portfolio] portfolioData not found. Make sure data/portfolio-data.js is loaded.'); return; }

  /* ─── Init Entry ────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initMeta();
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderCertifications();
    renderTestimonials();
    renderContact();
    renderFooter();

    initAuroraCanvas();
    initCustomCursor();
    initNavbar();
    initHeroMouseGlow();
    initSmoothScroll();
    initScrollReveal();
    initTyped();
    initVanillaTilt();
    initMagneticButtons();
    initRipple();
    initContactForm();
    initMobileMenu();
    initTestimonialsCarousel();
    initCounters();
  });

  /* ─── LOADER ─────────────────────────────────────────────── */
  function initLoader() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        $('#loader').classList.add('hidden');
        document.body.style.overflow = '';
      }, 800);
    });
    document.body.style.overflow = 'hidden';
  }

  /* ─── META ────────────────────────────────────────────────── */
  function initMeta() {
    const m = D.meta || {};
    document.title = m.siteTitle || 'Portfolio';
    if (m.siteDescription) $('meta[name="description"]').content = m.siteDescription;
    if (m.favicon) {
      const fav = $('#dynamic-favicon');
      if (fav) fav.href = m.favicon;
    }
    if (m.resumeUrl) $('#resume-btn').href = m.resumeUrl;
    else $('#resume-btn').style.opacity = '0.4';
    $('#footer-year').textContent = new Date().getFullYear();
  }

  /* ─── HERO ────────────────────────────────────────────────── */
  function renderHero() {
    const h = D.hero || {};
    const p = D.profile || {};
    if (h.greeting) $('#hero-greeting').textContent = h.greeting;
    if (h.name)     $('#hero-name').textContent = h.name;
    if (h.tagline)  $('#hero-tagline').textContent = h.tagline;
    if (p.status)   $('#hero-status').querySelector('.badge-text').textContent = p.status;

    const socials = D.socialLinks || {};
    const sc = $('#hero-socials');
    sc.innerHTML = '';
    if (socials.github)   sc.appendChild(makeSocialIcon(svgIcon.github, socials.github, 'GitHub'));
    if (socials.linkedin) sc.appendChild(makeSocialIcon(svgIcon.linkedin, socials.linkedin, 'LinkedIn'));
    if (socials.twitter)  sc.appendChild(makeSocialIcon(svgIcon.twitter, socials.twitter, 'Twitter'));
    if (socials.email)    sc.appendChild(makeSocialIcon(svgIcon.email, `mailto:${socials.email}`, 'Email'));
  }

  function makeSocialIcon(iconSVG, href, label) {
    const a = el('a', 'social-icon');
    a.href = href;
    a.target = href.startsWith('mailto') ? '_self' : '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', label);
    a.innerHTML = iconSVG;
    return a;
  }

  /* ─── TYPED.JS ────────────────────────────────────────────── */
  function initTyped() {
    const h = D.hero || {};
    const roles = h.roles || ['Backend Developer'];
    if (window.Typed) {
      new Typed('#typed-output', {
        strings: roles,
        typeSpeed: 60,
        backSpeed: 35,
        backDelay: 2200,
        startDelay: 600,
        loop: true,
        showCursor: false
      });
    }
  }

  /* ─── ABOUT ───────────────────────────────────────────────── */
  function renderAbout() {
    const p = D.profile || {};
    setText('#about-name',     p.name     || '');
    setText('#about-title',    p.title    || '');
    setText('#about-status',   p.status   || '');
    setText('#about-bio',      p.bio      || '');
    setText('#about-location', p.address  || '');
    setText('#about-email',    p.email    || '');
    setText('#about-phone',    p.phone    || '');
    const avatar = $('#about-avatar');
    if (avatar && p.avatar) { avatar.src = p.avatar; avatar.alt = p.name; }
  }

  /* ─── SKILLS ──────────────────────────────────────────────── */
  function renderSkills() {
    const skills = D.skills || [];
    const categories = ['All', ...new Set(skills.map(s => s.category))];
    const tabsEl  = $('#skills-tabs');
    const gridEl  = $('#skills-grid');
    tabsEl.innerHTML = '';
    gridEl.innerHTML = '';

    /* Tabs */
    categories.forEach((cat, i) => {
      const btn = el('button', `skill-tab${i === 0 ? ' active' : ''}`);
      btn.textContent = cat;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      btn.dataset.cat = cat;
      btn.addEventListener('click', () => filterSkills(cat, tabsEl, gridEl));
      tabsEl.appendChild(btn);
    });

    /* Cards */
    skills.forEach(skill => {
      const card = el('div', 'skill-card');
      card.dataset.cat = skill.category;
      const color = categoryColor(skill.category);
      card.innerHTML = `
        <div class="skill-card__header">
          <span class="skill-card__name">${skill.name}</span>
          <span class="skill-card__level" style="color:${color}">${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-bar__fill" data-width="${skill.level}"
               style="background:linear-gradient(90deg,${color} 0%,${colorShift(color)} 100%);width:0"></div>
        </div>`;
      gridEl.appendChild(card);
    });

    /* Animate bars when in view */
    setTimeout(() => animateSkillBars(), 300);
  }

  function filterSkills(cat, tabsEl, gridEl) {
    $$('.skill-tab', tabsEl).forEach(t => {
      t.classList.toggle('active', t.dataset.cat === cat);
      t.setAttribute('aria-selected', t.dataset.cat === cat ? 'true' : 'false');
    });
    $$('.skill-card', gridEl).forEach(card => {
      card.classList.toggle('hidden', cat !== 'All' && card.dataset.cat !== cat);
    });
    setTimeout(() => animateSkillBars(), 100);
  }

  function animateSkillBars() {
    $$('.skill-bar__fill:not([data-animated])').forEach(bar => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            bar.style.width = bar.dataset.width + '%';
            bar.dataset.animated = 'true';
            obs.disconnect();
          }
        });
      }, { threshold: 0.3 });
      obs.observe(bar);
    });
  }

  function categoryColor(cat) {
    const map = { Backend: '#06B6D4', Database: '#8B5CF6', DevOps: '#3B82F6', Frontend: '#10B981', 'AI / ML': '#EC4899' };
    return map[cat] || '#06B6D4';
  }
  function colorShift(hex) {
    const map = { '#06B6D4': '#3B82F6', '#8B5CF6': '#EC4899', '#3B82F6': '#8B5CF6', '#10B981': '#06B6D4', '#EC4899': '#8B5CF6' };
    return map[hex] || '#8B5CF6';
  }

  /* ─── EXPERIENCE ──────────────────────────────────────────── */
  function renderExperience() {
    const companies = D.experience || [];
    const tl = $('#experience-timeline');
    tl.innerHTML = '';
    companies.forEach(company => {
      const positions = company.positions || [];
      const hasCurrent = positions.some(p => p.current);
      const isMulti = positions.length > 1;
      const item = el('div', 'timeline-item reveal-up');
      item.innerHTML = `
        <div class="timeline-dot${hasCurrent ? ' current' : ''}"></div>
        <div class="glass-card timeline-card">
          <div class="timeline-card__header">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:.5rem">
              <div>
                <div class="timeline-card__company timeline-card__company--main">${company.company}</div>
                ${isMulti ? `<div class="timeline-card__role-count">${positions.length} roles</div>` : ''}
              </div>
              ${hasCurrent ? '<span class="current-badge"><span class="badge-dot pulse" style="background:var(--emerald)"></span>Current</span>' : ''}
            </div>
            <div class="timeline-card__meta">
              <span class="timeline-card__location">${svgIcon.mapPin} ${company.location}</span>
            </div>
          </div>
          <div class="exp-positions${isMulti ? ' exp-positions--multi' : ''}">
            ${positions.map(pos => `
              <div class="exp-position">
                ${isMulti ? '<div class="exp-position__dot"></div>' : ''}
                <div class="exp-position__header">
                  <div class="timeline-card__role">${pos.role}</div>
                  <span class="timeline-card__period">${svgIcon.calendar} ${pos.startDate} — ${pos.endDate}</span>
                </div>
                <ul class="timeline-card__desc">
                  ${(pos.description || []).map(d => `<li>${d}</li>`).join('')}
                </ul>
                <div class="timeline-tech-row">
                  ${(pos.tech || []).map(t => `<span class="timeline-tech">${t}</span>`).join('')}
                </div>
              </div>`).join('')}
          </div>
        </div>`;
      tl.appendChild(item);
    });
  }

  /* ─── PROJECTS ────────────────────────────────────────────── */
  function renderProjects() {
    const projects = D.projects || [];
    const filtersEl = $('#project-filters');
    const gridEl    = $('#projects-grid');
    filtersEl.innerHTML = '';
    gridEl.innerHTML = '';

    const cats = ['All', ...new Set(projects.map(p => p.category))];
    cats.forEach((cat, i) => {
      const btn = el('button', `filter-btn${i === 0 ? ' active' : ''}`);
      btn.textContent = cat;
      btn.dataset.cat = cat;
      btn.addEventListener('click', () => {
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        $$('.project-card').forEach(c => c.classList.toggle('hidden', cat !== 'All' && c.dataset.cat !== cat));
      });
      filtersEl.appendChild(btn);
    });

    projects.forEach(proj => {
      const card = el('div', 'project-card glass-card');
      card.dataset.cat = proj.category;
      card.innerHTML = `
        <div class="project-card__img-wrap">
          <img class="project-card__img" src="${proj.image}" alt="${proj.title}" loading="lazy"/>
          <div class="project-card__overlay"></div>
          <span class="project-card__category-badge">${proj.category}</span>
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">${proj.title}</h3>
          <p class="project-card__desc">${proj.description}</p>
          <div class="project-card__tech">
            ${(proj.technologies || []).slice(0, 5).map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
            ${proj.technologies && proj.technologies.length > 5 ? `<span class="project-tech-tag">+${proj.technologies.length - 5}</span>` : ''}
          </div>
          <div class="project-card__links">
            ${proj.githubUrl ? `<a href="${proj.githubUrl}" class="project-link" target="_blank" rel="noopener">${svgIcon.github} Code</a>` : ''}
            ${proj.liveUrl   ? `<a href="${proj.liveUrl}"   class="project-link live" target="_blank" rel="noopener">${svgIcon.externalLink} Live</a>` : ''}
            <button class="view-details-btn" data-proj='${JSON.stringify(proj).replace(/'/g, "&#39;")}'>Details →</button>
          </div>
        </div>`;
      gridEl.appendChild(card);
    });

    /* Detail modal trigger */
    gridEl.addEventListener('click', e => {
      const btn = e.target.closest('.view-details-btn');
      if (!btn) return;
      try { openProjectModal(JSON.parse(btn.dataset.proj)); } catch {}
    });

    /* VanillaTilt on cards */
    setTimeout(() => {
      if (window.VanillaTilt) {
        VanillaTilt.init($$('.project-card'), { max: 8, speed: 400, glare: true, 'max-glare': 0.1 });
      }
    }, 300);
  }

  /* Project Modal */
  function openProjectModal(proj) {
    const modal = $('#project-modal');
    const body  = $('#modal-body');
    
    // Build Gallery (Video + Images)
    let galleryHtml = '';
    if (proj.video) {
      galleryHtml += `<video src="${proj.video}" class="modal-media" autoplay loop muted playsinline></video>`;
    }
    if (proj.images && proj.images.length > 0) {
      proj.images.forEach(img => {
        galleryHtml += `<img class="modal-media" src="${img}" alt="${proj.title} screenshot" loading="lazy"/>`;
      });
    } else if (!proj.video && proj.image) {
      // Fallback for single image
      galleryHtml += `<img class="modal-media" src="${proj.image}" alt="${proj.title}" loading="lazy"/>`;
    }

    body.innerHTML = `
      <div class="modal-layout">
        <div class="modal-gallery">
          ${galleryHtml}
        </div>
        <div class="modal-details">
          <h2 class="modal-title" id="modal-title">${proj.title}</h2>
          <p class="modal-desc">${proj.description}</p>
          <div class="modal-tech">
            ${(proj.technologies || []).map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
          </div>
          <div class="modal-links">
            ${proj.githubUrl ? `<a href="${proj.githubUrl}" class="btn btn--glass btn--sm" target="_blank" rel="noopener">${svgIcon.github} View Code</a>` : ''}
            ${proj.liveUrl   ? `<a href="${proj.liveUrl}"   class="btn btn--primary btn--sm" target="_blank" rel="noopener">${svgIcon.externalLink} Live Demo</a>` : ''}
          </div>
        </div>
      </div>
    `;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    $('#project-modal').setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  document.addEventListener('DOMContentLoaded', () => {
    $('#modal-close').addEventListener('click', closeProjectModal);
    $('#modal-overlay').addEventListener('click', closeProjectModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProjectModal(); });
  });

  /* ─── CERTIFICATIONS ──────────────────────────────────────── */
  function renderCertifications() {
    const certs = D.certifications || [];
    const grid = $('#certs-grid');
    grid.innerHTML = '';
    certs.forEach(cert => {
      const card = el('div', 'cert-card glass-card');
      card.innerHTML = `
        <div class="cert-icon">🏅</div>
        <div>
          <div class="cert-card__name">${cert.name}</div>
          <div class="cert-card__org">${cert.issuingOrganization}</div>
          <div class="cert-card__date">${svgIcon.calendar} ${cert.issueDate}</div>
          <a href="${cert.credentialUrl}" class="cert-card__link" target="_blank" rel="noopener">
            View Credential ${svgIcon.externalLink}
          </a>
        </div>`;
      grid.appendChild(card);
    });
  }

  /* ─── TESTIMONIALS ────────────────────────────────────────── */
  function renderTestimonials() {
    const testimonials = D.testimonials || [];
    const section = $('#testimonials');
    if (testimonials.length === 0) {
      if (section) section.style.display = 'none';
      return;
    }
    const track = $('#testimonials-track');
    track.innerHTML = '';
    testimonials.forEach(t => {
      const card = el('div', 'testimonial-card glass-card');
      card.innerHTML = `
        <p class="testimonial-card__text">"${t.text}"</p>
        <div class="testimonial-card__author">
          <img class="testimonial-card__avatar" src="${t.avatar}" alt="${t.name}" loading="lazy"/>
          <div>
            <div class="testimonial-card__name">${t.name}</div>
            <div class="testimonial-card__role">${t.role} · ${t.company}</div>
          </div>
        </div>`;
      track.appendChild(card);
    });
  }

  let testiCurrent = 0;
  function initTestimonialsCarousel() {
    const testimonials = D.testimonials || [];
    const dotsEl = $('#testi-dots');
    if (!dotsEl || testimonials.length === 0) return;

    /* On mobile, show one at a time */
    testimonials.forEach((_, i) => {
      const dot = el('button', `testi-dot${i === 0 ? ' active' : ''}`);
      dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
      dot.addEventListener('click', () => goToTesti(i));
      dotsEl.appendChild(dot);
    });

    $('#testi-prev').addEventListener('click', () => goToTesti((testiCurrent - 1 + testimonials.length) % testimonials.length));
    $('#testi-next').addEventListener('click', () => goToTesti((testiCurrent + 1) % testimonials.length));

    /* Auto-advance */
    let interval = setInterval(() => goToTesti((testiCurrent + 1) % testimonials.length), 5000);
    $$('#testi-prev, #testi-next, #testi-dots button').forEach(btn => {
      btn.addEventListener('click', () => { clearInterval(interval); interval = setInterval(() => goToTesti((testiCurrent + 1) % testimonials.length), 5000); });
    });

    /* Only show carousel on mobile */
    applyTestiLayout();
    window.addEventListener('resize', applyTestiLayout);
  }

  function applyTestiLayout() {
    const isMobile = window.innerWidth < 1024;
    const track = $('#testimonials-track');
    const cards = $$('.testimonial-card', track);
    if (isMobile) {
      track.style.display = 'block';
      track.style.overflow = 'hidden';
      cards.forEach((c, i) => { c.style.display = i === testiCurrent ? 'block' : 'none'; });
      $('#testimonials .testimonials__controls').style.display = 'flex';
    } else {
      track.style.display = 'grid';
      cards.forEach(c => { c.style.display = 'block'; });
      $('#testimonials .testimonials__controls').style.display = 'none';
    }
  }

  function goToTesti(idx) {
    const cards = $$('.testimonial-card');
    const dots  = $$('.testi-dot');
    if (window.innerWidth >= 1024) return;
    if (cards[testiCurrent]) cards[testiCurrent].style.display = 'none';
    testiCurrent = idx;
    if (cards[testiCurrent]) cards[testiCurrent].style.display = 'block';
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  /* ─── CONTACT ─────────────────────────────────────────────── */
  function renderContact() {
    const p = D.profile || {};
    const socials = D.socialLinks || {};
    const infoEl = $('#contact-info-items');
    const socialsEl = $('#contact-socials');

    infoEl.innerHTML = `
      <div class="contact-info-item">
        <div class="contact-info-icon">${svgIcon.mail}</div>
        <div><div class="contact-info-label">Email</div>
          <a href="mailto:${p.email}" class="contact-info-value">${p.email}</a></div>
      </div>
      <div class="contact-info-item">
        <div class="contact-info-icon">${svgIcon.phone}</div>
        <div><div class="contact-info-label">Phone</div>
          <a href="tel:${p.phone}" class="contact-info-value">${p.phone}</a></div>
      </div>
      <div class="contact-info-item">
        <div class="contact-info-icon">${svgIcon.location}</div>
        <div><div class="contact-info-label">Location</div>
          <span class="contact-info-value">${p.address}</span></div>
      </div>`;

    socialsEl.innerHTML = '';
    if (socials.github) {
      const a = el('a', 'contact-social-btn');
      a.href = socials.github; a.target = '_blank'; a.rel = 'noopener';
      a.innerHTML = `${svgIcon.github} GitHub`; socialsEl.appendChild(a);
    }
    if (socials.linkedin) {
      const a = el('a', 'contact-social-btn');
      a.href = socials.linkedin; a.target = '_blank'; a.rel = 'noopener';
      a.innerHTML = `${svgIcon.linkedin} LinkedIn`; socialsEl.appendChild(a);
    }
    if (socials.twitter) {
      const a = el('a', 'contact-social-btn');
      a.href = socials.twitter; a.target = '_blank'; a.rel = 'noopener';
      a.innerHTML = `${svgIcon.twitter} Twitter`; socialsEl.appendChild(a);
    }
  }

  /* ─── FOOTER ──────────────────────────────────────────────── */
  function renderFooter() {
    const socials = D.socialLinks || {};
    const footerSocials = $('#footer-socials');
    footerSocials.innerHTML = '';
    if (socials.github)   footerSocials.appendChild(makeSocialIcon(svgIcon.github,   socials.github,            'GitHub'));
    if (socials.linkedin) footerSocials.appendChild(makeSocialIcon(svgIcon.linkedin, socials.linkedin,          'LinkedIn'));
    if (socials.twitter)  footerSocials.appendChild(makeSocialIcon(svgIcon.twitter,  socials.twitter,           'Twitter'));
    if (socials.email)    footerSocials.appendChild(makeSocialIcon(svgIcon.email,    `mailto:${socials.email}`, 'Email'));
  }

  /* ─── CONTACT FORM ────────────────────────────────────────── */
  function initContactForm() {
    const form = $('#contact-form');
    const feedback = $('#form-feedback');
    const submitBtn = $('#form-submit');
    const btnText = submitBtn ? submitBtn.querySelector('.btn__text') : null;
    if (!form) return;

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const name    = $('#cf-name').value.trim();
      const email   = $('#cf-email').value.trim();
      const subject = $('#cf-subject').value.trim();
      const message = $('#cf-message').value.trim();

      if (!name || !email || !message) {
        feedback.className = 'form-note error';
        feedback.textContent = 'Please fill in all required fields.';
        return;
      }

      const accessKey = (D.contact || {}).web3FormsKey;
      if (!accessKey) {
        feedback.className = 'form-note error';
        feedback.textContent = 'Contact form is not configured yet.';
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Sending…';
      feedback.className = 'form-note';
      feedback.textContent = '';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: subject || `New Portfolio Inquiry from ${name}`,
            from_name: name,
            email,
            message,
            project: (D.contact || {}).project || "Rushit Portfolio"
          })
        });
        const result = await response.json();

        if (response.ok && result.success) {
          feedback.className = 'form-note';
          feedback.textContent = '✓ Message sent — I\'ll get back to you soon!';
          form.reset();
        } else {
          feedback.className = 'form-note error';
          feedback.textContent = result.message || 'Something went wrong. Please try again.';
        }
      } catch (err) {
        feedback.className = 'form-note error';
        feedback.textContent = 'Network error — please try again later.';
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Send Message';
        setTimeout(() => { feedback.textContent = ''; }, 6000);
      }
    });
  }

  /* ─── AURORA CANVAS BACKGROUND ───────────────────────────── */
  function initAuroraCanvas() {
    const canvas = $('#bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    /* Particles */
    const PARTICLE_COUNT = 80;
    function createParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
        color: Math.random() < 0.5 ? '#06B6D4' : '#8B5CF6'
      }));
    }
    createParticles();

    /* Aurora blobs */
    const blobs = [
      { x: 0.2, y: 0.2, r: 0.4, color: 'rgba(6,182,212,0.07)',    speed: 0.0003 },
      { x: 0.8, y: 0.7, r: 0.5, color: 'rgba(139,92,246,0.06)',  speed: 0.0005 },
      { x: 0.5, y: 0.5, r: 0.3, color: 'rgba(59,130,246,0.05)',  speed: 0.0004 }
    ];

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.5;

      /* Aurora blobs */
      blobs.forEach((b, i) => {
        const bx = (b.x + Math.sin(t * b.speed + i) * 0.15) * W;
        const by = (b.y + Math.cos(t * b.speed * 1.3 + i) * 0.12) * H;
        const br = b.r * Math.min(W, H);
        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        grad.addColorStop(0, b.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
      });

      /* Particle connections */
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      /* Lines between nearby particles */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ─── CUSTOM CURSOR ───────────────────────────────────────── */
  function initCustomCursor() {
    const dot  = $('#cursor-dot');
    const ring = $('#cursor-ring');
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    document.addEventListener('mouseleave', () => { dot.style.opacity = 0; ring.style.opacity = 0; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = 1; ring.style.opacity = 1; });

    const hoverEls = 'a,button,.project-card,.glass-card,.social-icon,.skill-tab,.filter-btn';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverEls)) ring.classList.add('hovering');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverEls)) ring.classList.remove('hovering');
    });

    function animateCursor() {
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }

  /* ─── HERO MOUSE GLOW ─────────────────────────────────────── */
  function initHeroMouseGlow() {
    const glow = $('#hero-glow');
    const hero = $('#hero');
    if (!glow || !hero) return;
    hero.addEventListener('mousemove', e => {
      const rect = hero.getBoundingClientRect();
      glow.style.left = (e.clientX - rect.left) + 'px';
      glow.style.top  = (e.clientY - rect.top)  + 'px';
    });
  }

  /* ─── NAVBAR ──────────────────────────────────────────────── */
  function initNavbar() {
    const nav = $('#navbar');
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 60);
      lastY = y;
    }, { passive: true });

    /* Active link on scroll */
    const sections = $$('section[id]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          $$('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => observer.observe(s));
  }

  /* ─── MOBILE MENU ─────────────────────────────────────────── */
  function initMobileMenu() {
    const hamburger = $('#hamburger');
    const menu = $('#mobile-menu');
    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      menu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      menu.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    $$('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        menu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── SMOOTH SCROLL ───────────────────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ─── SCROLL REVEAL ───────────────────────────────────────── */
  function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    $$('.reveal-up, .reveal-left, .reveal-right').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      observer.observe(el);
    });
  }

  /* ─── VANILLA TILT ────────────────────────────────────────── */
  function initVanillaTilt() {
    if (!window.VanillaTilt) return;
    VanillaTilt.init($$('.tilt-card'), { max: 12, speed: 600, glare: true, 'max-glare': 0.15 });
  }

  /* ─── MAGNETIC BUTTONS ────────────────────────────────────── */
  function initMagneticButtons() {
    $$('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width  / 2);
        const dy = e.clientY - (rect.top  + rect.height / 2);
        btn.style.transform = `translate(${dx * 0.25}px, ${dy * 0.25}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
        setTimeout(() => { btn.style.transition = ''; }, 400);
      });
    });
  }

  /* ─── RIPPLE EFFECT ───────────────────────────────────────── */
  function initRipple() {
    $$('.btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.cssText = `
          width:${Math.max(rect.width,rect.height)*2}px;
          height:${Math.max(rect.width,rect.height)*2}px;
          left:${e.clientX-rect.left-Math.max(rect.width,rect.height)}px;
          top:${e.clientY-rect.top -Math.max(rect.width,rect.height)}px;`;
        btn.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
      });
    });
  }

  /* ─── ANIMATED COUNTERS ───────────────────────────────────── */
  function initCounters() {
    const counters = $$('.counter');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target   = parseFloat(el.dataset.target) || 0;
        const suffix   = el.dataset.suffix || '';
        const decimals = parseInt(el.dataset.decimals) || 0;
        const dur = 1500;
        const start = performance.now();
        function step(now) {
          const progress = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = (target * ease).toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target.toFixed(decimals) + suffix;
        }
        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }

  /* ─── Utility ─────────────────────────────────────────────── */
  function setText(selector, text) {
    const e = $(selector);
    if (e) e.textContent = text;
  }

})();
