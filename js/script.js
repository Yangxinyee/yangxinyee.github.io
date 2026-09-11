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

    // Render an author string, bolding the site owner's name.
    const appendAuthors = (parent, authors) => {
        const span = document.createElement('span');
        span.className = 'pub-authors';
        const ownName = 'X Yang';
        String(authors || '').split(ownName).forEach((part, index) => {
            if (index > 0) {
                const strong = document.createElement('strong');
                strong.textContent = ownName;
                span.append(strong);
            }
            if (part) span.append(document.createTextNode(part));
        });
        parent.append(span);
    };

    const renderScholarData = () => {
        if (!scholarData) return;
        const language = currentLanguage();

        Object.entries(scholarData.metrics || {}).forEach(([key, value]) => {
            const element = document.querySelector(`[data-scholar-metric="${key}"]`);
            if (element && Number.isFinite(Number(value))) element.textContent = Number(value).toLocaleString(language === 'zh' ? 'zh-CN' : 'en-US');
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
            const item = document.createElement('li');

            const title = document.createElement('span');
            title.className = 'pub-title';
            const link = document.createElement('a');
            link.href = publication.link || scholarData.profile;
            link.target = '_blank';
            link.rel = 'noreferrer';
            link.textContent = publication.title || 'Untitled publication';
            title.append(link);
            item.append(title);

            appendAuthors(item, publication.authors);

            const venue = document.createElement('span');
            venue.className = 'pub-venue';
            venue.textContent = `${publication.venue || ''}${publication.venue && publication.year ? ', ' : ''}${publication.year || ''}.`;
            item.append(venue);

            const citations = Number(publication.citations || 0);
            if (citations > 0) {
                const cite = document.createElement('span');
                cite.className = 'pub-cite';
                cite.textContent = language === 'zh' ? `引用 ${citations}` : `cited by ${citations}`;
                item.append(cite);
            }

            fragment.append(item);
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
