document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('[data-header]');
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const navPanel = document.querySelector('[data-nav-panel]');
    const navLinks = [...document.querySelectorAll('.nav-link')];
    const sections = [...document.querySelectorAll('.section-anchor[id]')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const closeMenu = () => {
        navPanel?.classList.remove('open');
        menuToggle?.setAttribute('aria-expanded', 'false');
        menuToggle?.setAttribute('aria-label', 'Open menu');
        document.body.classList.remove('menu-open');
    };

    menuToggle?.addEventListener('click', () => {
        const open = menuToggle.getAttribute('aria-expanded') === 'true';
        navPanel?.classList.toggle('open', !open);
        menuToggle.setAttribute('aria-expanded', String(!open));
        menuToggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
        document.body.classList.toggle('menu-open', !open);
    });

    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });

    const syncHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });

    if ('IntersectionObserver' in window) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
            });
        }, { rootMargin: '-30% 0px -62% 0px' });
        sections.forEach((section) => navObserver.observe(section));

        if (!reduceMotion) {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -40px' });
            document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
        }
    }

    if (reduceMotion || !('IntersectionObserver' in window)) {
        document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
    }

    document.querySelectorAll('a[href^="pages/"]').forEach((link) => {
        link.addEventListener('click', () => {
            try { sessionStorage.setItem('pageScrollPosition', String(window.scrollY)); } catch (_) { /* optional */ }
        });
    });

    const restoredPosition = (() => {
        try { return sessionStorage.getItem('pageScrollPosition'); } catch (_) { return null; }
    })();
    if (restoredPosition) {
        requestAnimationFrame(() => window.scrollTo({ top: Number(restoredPosition), behavior: 'auto' }));
        try { sessionStorage.removeItem('pageScrollPosition'); } catch (_) { /* optional */ }
    }

    let scholarData = null;

    const currentLanguage = () => document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';

    const formatScholarDate = (value, language) => {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return '';
        const formatted = new Intl.DateTimeFormat(language === 'zh' ? 'zh-CN' : 'en-US', {
            month: 'long',
            year: 'numeric'
        }).format(date);
        return language === 'zh' ? `更新于 ${formatted}` : `Updated ${formatted}`;
    };

    const appendTextElement = (parent, tagName, className, value) => {
        const element = document.createElement(tagName);
        if (className) element.className = className;
        element.textContent = value;
        parent.append(element);
        return element;
    };

    const renderScholarData = () => {
        if (!scholarData) return;
        const language = currentLanguage();

        Object.entries(scholarData.metrics || {}).forEach(([key, value]) => {
            const element = document.querySelector(`[data-scholar-metric="${key}"]`);
            if (element && Number.isFinite(Number(value))) element.textContent = Number(value).toLocaleString(language === 'zh' ? 'zh-CN' : 'en-US');
        });

        const updated = document.querySelector('[data-scholar-updated]');
        if (updated) updated.textContent = formatScholarDate(scholarData.updatedAt, language);

        const list = document.querySelector('[data-scholar-publications]');
        if (!list || !Array.isArray(scholarData.publications) || scholarData.publications.length === 0) return;
        const fragment = document.createDocumentFragment();

        scholarData.publications.forEach((publication) => {
            const card = document.createElement('a');
            card.className = 'publication-card reveal is-visible';
            card.href = publication.link || scholarData.profile;
            card.target = '_blank';
            card.rel = 'noreferrer';

            appendTextElement(card, 'span', 'publication-year', publication.year || '—');
            const body = document.createElement('div');
            appendTextElement(body, 'h3', '', publication.title || 'Untitled publication');
            appendTextElement(body, 'p', 'publication-authors', publication.authors || '');
            appendTextElement(body, 'p', 'publication-venue', publication.venue || '');
            card.append(body);

            const side = document.createElement('div');
            side.className = 'publication-side';
            const citations = document.createElement('span');
            citations.className = 'publication-citations';
            appendTextElement(citations, 'strong', '', String(publication.citations || 0));
            appendTextElement(citations, 'small', '', language === 'zh' ? '引用' : 'cited by');
            side.append(citations);
            const icon = document.createElement('i');
            icon.className = 'fa-solid fa-arrow-up-right-from-square';
            icon.setAttribute('aria-hidden', 'true');
            side.append(icon);
            card.append(side);
            fragment.append(card);
        });

        list.replaceChildren(fragment);
    };

    fetch('data/scholar.json', { cache: 'no-cache' })
        .then((response) => {
            if (!response.ok) throw new Error(`Scholar data request failed: ${response.status}`);
            return response.json();
        })
        .then((data) => {
            scholarData = data;
            renderScholarData();
        })
        .catch(() => { /* Accurate static content remains available as a fallback. */ });

    document.addEventListener('languagechange', renderScholarData);

    document.querySelectorAll('[data-current-year]').forEach((element) => { element.textContent = String(new Date().getFullYear()); });
});
