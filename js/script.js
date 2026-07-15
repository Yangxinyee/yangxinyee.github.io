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

    document.querySelectorAll('[data-current-year]').forEach((element) => { element.textContent = String(new Date().getFullYear()); });
});
