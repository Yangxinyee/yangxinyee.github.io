const detailConfig = {
    experience: {
        back: { en: 'Back to experience', zh: '返回工作经历' },
        kicker: { en: 'Experience', zh: '工作经历' },
        responsibilities: { en: 'What I worked on', zh: '主要工作' },
        technologies: { en: 'Technologies', zh: '相关技术' },
        highlights: { en: 'Highlights', zh: '经历亮点' }
    },
    education: {
        back: { en: 'Back to education', zh: '返回教育背景' },
        kicker: { en: 'Education', zh: '教育背景' },
        responsibilities: { en: 'Activities & leadership', zh: '活动与领导力' },
        technologies: { en: 'Areas of focus', zh: '重点领域' },
        highlights: { en: 'Achievements & awards', zh: '主要成就与奖项' }
    },
    meta: {
        date: { en: 'Date', zh: '时间' },
        location: { en: 'Location', zh: '地点' },
        type: { en: 'Type', zh: '类型' }
    }
};

const experienceMeta = {
    'aws-kiro': { type: 'fullTime', technologies: ['TypeScript', 'JavaScript', 'Agentic AI', 'LLM Systems', 'Context Engineering', 'MCP', 'AWS'], image: '../assets/kiro.jpeg', logo: '../assets/logos/aws.svg' },
    'aws-kiro-intern': { type: 'internship', technologies: ['TypeScript', 'JavaScript', 'Context Management', 'RAG', 'MCP', 'LLM'], image: '../assets/kiro.jpeg', logo: '../assets/logos/aws.svg' },
    'cu-anschutz': { type: 'partTime', technologies: ['Medical Imaging', 'AI Agents', 'Research'], logo: '../assets/logos/cu-anschutz-mark.png' },
    'brown-health': { type: 'partTime', technologies: ['Python', 'Flask', 'JavaScript', 'cornerstone.js', 'VILA-M3', 'UNet-V2', 'Medical Imaging', 'DICOM', 'NIfTI'], logo: '../assets/logos/brown-health.svg' },
    'personal-trainer': { type: 'partTime', technologies: ['Exercise Instruction', 'Sports Nutrition', 'Client Coaching'], logo: '../assets/logos/brown-athletics.svg' },
    'rici': { type: 'partTime', technologies: ['HTML', 'CSS', 'JavaScript', 'Wix', 'MailChimp', 'Google Analytics'], logo: '../assets/logos/rici.jpg' },
    'shukun-tech': { type: 'internship', technologies: ['Python', 'PyTorch', 'Computer Vision', 'Medical Imaging', '3D Processing'], logo: '../assets/logos/shukun.png' },
    'casia': { type: 'internship', technologies: ['Python', 'React', 'MySQL', 'MQTT', 'PyTorch', 'OpenCV', 'Deep Reinforcement Learning'], logo: '../assets/logos/casia-official.jpg' },
    'ustb-research': { type: 'internship', technologies: ['Transformers', 'Brain Science', 'Research', 'Scientific Writing'], logo: '../assets/logos/ustb.png' },
    'ntu-research': { type: 'internship', technologies: ['TensorFlow', 'Java', 'CNN', 'Medical Imaging', 'Lung Segmentation'], logo: '../assets/logos/ntu.png' }
};

const educationMeta = {
    brown: { type: 'graduateProgram', gpa: null, logo: '../assets/logos/brown.png' },
    ustb: { type: 'undergraduateProgram', gpa: '3.83 / 4.0', logo: '../assets/logos/ustb.png' }
};

function collectNumbered(record, prefix) {
    return Object.keys(record)
        .filter((key) => key.startsWith(prefix))
        .sort((a, b) => Number(a.slice(prefix.length)) - Number(b.slice(prefix.length)))
        .map((key) => record[key]);
}

function readLanguage() {
    try { return localStorage.getItem('preferredLanguage') || 'en'; } catch (_) { return 'en'; }
}

function saveLanguage(lang) {
    try { localStorage.setItem('preferredLanguage', lang); } catch (_) { /* preference is optional */ }
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function renderDetail(lang) {
    const type = document.body.dataset.detailType;
    const id = new URLSearchParams(window.location.search).get('id');
    const language = detailTranslations[lang] ? lang : 'en';
    const common = detailTranslations[language].common;
    const record = detailTranslations[language][type]?.[id];
    const config = detailConfig[type];
    const root = document.querySelector('[data-detail-root]');

    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-lang]').forEach((button) => {
        const active = button.dataset.lang === language;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
    });
    document.querySelector('[data-back-label]').textContent = config.back[language];

    if (!record) {
        const message = type === 'experience' ? common.experienceNotFound : common.educationNotFound;
        root.innerHTML = `<div class="detail-error"><h1>${escapeHtml(message)}</h1><p><a class="text-link" href="../index.html">${escapeHtml(config.back[language])}</a></p></div>`;
        return;
    }

    const meta = type === 'experience' ? experienceMeta[id] : educationMeta[id];
    const title = record.title || record.degree;
    const organization = record.company || record.school;
    const responsibilities = type === 'experience'
        ? collectNumbered(record, 'responsibility')
        : collectNumbered(record, 'activity').map((item) => `${item.title} — ${item.description}`);
    const technologies = type === 'experience' ? meta.technologies : collectNumbered(record, 'focus');
    const highlights = collectNumbered(record, 'achievement');
    const typeLabel = common[meta.type];
    const logoMarkup = meta.logo ? `<span class="detail-organization-logo"><img src="${meta.logo}" alt=""></span>` : '';
    const imageMarkup = meta.image ? `<figure class="detail-image"><img src="${meta.image}" alt="${escapeHtml(organization)}"><figcaption>${escapeHtml(organization)}</figcaption></figure>` : '';
    const gpaMarkup = meta.gpa ? `<div><i class="fa-solid fa-chart-line" aria-hidden="true"></i><div><span>${escapeHtml(common.gpa)}</span><strong>${escapeHtml(meta.gpa)}</strong></div></div>` : '';

    document.title = `${title} | Charlie Yang`;
    root.innerHTML = `
        <section class="detail-hero">
            <div class="container detail-hero-grid">
                <div>
                    ${logoMarkup}
                    <span class="detail-eyebrow">${escapeHtml(config.kicker[language])}</span>
                    <h1>${escapeHtml(title)}</h1>
                    <p class="detail-company">${escapeHtml(organization)}</p>
                    <p class="detail-description">${escapeHtml(record.description || record.summary)}</p>
                </div>
                <div class="detail-meta">
                    <div><i class="fa-regular fa-calendar" aria-hidden="true"></i><div><span>${escapeHtml(detailConfig.meta.date[language])}</span><strong>${escapeHtml(record.date)}</strong></div></div>
                    <div><i class="fa-solid fa-location-dot" aria-hidden="true"></i><div><span>${escapeHtml(detailConfig.meta.location[language])}</span><strong>${escapeHtml(record.location)}</strong></div></div>
                    <div><i class="fa-regular fa-circle-check" aria-hidden="true"></i><div><span>${escapeHtml(detailConfig.meta.type[language])}</span><strong>${escapeHtml(typeLabel)}</strong></div></div>
                    ${gpaMarkup}
                </div>
            </div>
        </section>
        <section class="detail-content">
            <div class="container detail-layout">
                <div>
                    <section class="detail-section">
                        <h2>${escapeHtml(config.responsibilities[language])}</h2>
                        <ul class="detail-list">${responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
                    </section>
                    ${imageMarkup}
                </div>
                <aside class="detail-side">
                    <section class="detail-panel"><h2>${escapeHtml(config.technologies[language])}</h2><div class="tag-cloud">${technologies.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div></section>
                    <section class="detail-panel"><h2>${escapeHtml(config.highlights[language])}</h2><ul class="highlight-list">${highlights.map((item) => `<li><i class="fa-solid fa-star" aria-hidden="true"></i><span>${escapeHtml(item)}</span></li>`).join('')}</ul></section>
                </aside>
            </div>
        </section>
        <footer class="detail-footer"><div class="container"><span>© ${new Date().getFullYear()} Charlie Yang</span><a class="text-link" href="../index.html#${type}">${escapeHtml(config.back[language])}</a></div></footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => {
        saveLanguage(button.dataset.lang);
        renderDetail(button.dataset.lang);
    }));
    renderDetail(readLanguage());
});
