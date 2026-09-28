document.addEventListener('DOMContentLoaded', () => {
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

    // Short venue labels for the publication badges; unmatched venues fall back to their first segment.
    const venueBadges = [
        [/Connected Health/i, 'CHASE'],
        [/Smart Health/i, 'Smart Health'],
        [/medRxiv/i, 'medRxiv'],
        [/Meta-Radiology/i, 'Meta-Radiology'],
        [/Brain-X/i, 'Brain-X'],
        [/Computational Intelligence and Design/i, 'ISCID']
    ];

    // Optional teaser figures keyed by exact publication title, e.g. { 'Paper title': 'assets/papers/figure.png' }.
    const paperFigures = {};

    // Papers selected for oral presentation, matched by a distinctive title fragment.
    const oralPapers = [
        'Reliability Stress Tests and Decision-Time Routing',
        'Confidence-gated cloud-edge cascade triage'
    ];

    // Canonical DOI links, matched by a distinctive title fragment; they replace Scholar detail links.
    const paperLinks = [
        ['Reliability Stress Tests and Decision-Time Routing', 'https://doi.org/10.1109/CHASE69719.2026.00073'],
        ['Confidence-gated cloud-edge cascade triage', 'https://doi.org/10.1016/j.smhl.2026.100689'],
        ['Unified Platform for Radiology Report Generation', 'https://doi.org/10.1101/2025.07.07.25331018'],
        ['Turing Test Pilot Study of Attendings and Residents', 'https://doi.org/10.1016/j.metrad.2025.100199'],
        ['Understanding the brain with attention', 'https://doi.org/10.1002/brx2.29'],
        ['Optimization of CNN for Diagnosis on Lung Disease', 'https://doi.org/10.1109/iscid56505.2022.00063']
    ];

    const linkFor = (publication) => {
        const title = String(publication.title || '').toLowerCase();
        const match = paperLinks.find(([fragment]) => title.includes(fragment.toLowerCase()));
        return match ? match[1] : publication.link;
    };

    const badgeFor = (publication) => {
        const venue = String(publication.venue || '');
        const match = venueBadges.find(([pattern]) => pattern.test(venue));
        const label = match ? match[1] : venue.split(' · ')[0].replace(/^\d{4}\s+/, '').slice(0, 24);
        const oral = oralPapers.some((fragment) => String(publication.title || '').toLowerCase().includes(fragment.toLowerCase()));
        return [label, publication.year, oral ? 'Oral' : ''].filter(Boolean).join(' ');
    };

    const element = (tag, className, text) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    };

    // Render an author string, bolding the site owner's name.
    const renderAuthors = (authors) => {
        const paragraph = element('p', 'paper-authors');
        const ownName = 'X Yang';
        String(authors || '').split(ownName).forEach((part, index) => {
            if (index > 0) paragraph.append(element('strong', '', ownName));
            if (part) paragraph.append(document.createTextNode(part));
        });
        return paragraph;
    };

    const renderScholarData = () => {
        if (!scholarData) return;
        const language = currentLanguage();

        Object.entries(scholarData.metrics || {}).forEach(([key, value]) => {
            const metric = document.querySelector(`[data-scholar-metric="${key}"]`);
            if (metric && Number.isFinite(Number(value))) metric.textContent = Number(value).toLocaleString(language === 'zh' ? 'zh-CN' : 'en-US');
        });

        const updated = document.querySelector('[data-scholar-updated]');
        if (updated) {
            const formatted = formatScholarDate(scholarData.updatedAt, language);
            if (formatted) updated.textContent = formatted;
        }

        const list = document.querySelector('[data-scholar-publications]');
        if (!list || !Array.isArray(scholarData.publications) || scholarData.publications.length === 0) return;
        const fragment = document.createDocumentFragment();

        scholarData.publications.forEach((publication) => {
            const box = element('div', 'paper-box');
            const badge = element('span', 'badge', badgeFor(publication));
            const text = element('div', 'paper-box-text');

            const figure = paperFigures[publication.title];
            if (figure) {
                const image = element('div', 'paper-box-image');
                const img = element('img');
                img.src = figure;
                img.alt = '';
                img.loading = 'lazy';
                image.append(badge, img);
                box.append(image);
            } else {
                text.append(badge);
            }

            const title = element('p', 'paper-title');
            const link = element('a', '', publication.title || 'Untitled publication');
            link.href = linkFor(publication) || scholarData.profile;
            link.target = '_blank';
            link.rel = 'noreferrer';
            title.append(link);

            const venue = element('p', 'paper-venue');
            venue.append(element('em', '', [publication.venue, publication.year].filter(Boolean).join(', ')));
            const citations = Number(publication.citations || 0);
            if (citations > 0) venue.append(document.createTextNode(language === 'zh' ? ` · 引用 ${citations}` : ` · cited by ${citations}`));

            text.append(title, renderAuthors(publication.authors), venue);
            box.append(text);
            fragment.append(box);
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
