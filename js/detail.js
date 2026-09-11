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
    }
};

const experienceMeta = {
    'aws-kiro': { type: 'fullTime', technologies: ['TypeScript', 'JavaScript', 'Agentic AI', 'LLM Systems', 'Context Engineering', 'MCP', 'AWS'] },
    'aws-kiro-intern': { type: 'internship', technologies: ['TypeScript', 'JavaScript', 'Context Management', 'RAG', 'MCP', 'LLM'] },
    'cu-anschutz': { type: 'partTime', technologies: ['Medical Imaging', 'AI Agents', 'Research'] },
    'brown-health': { type: 'partTime', technologies: ['Python', 'Flask', 'JavaScript', 'cornerstone.js', 'VILA-M3', 'UNet-V2', 'Medical Imaging', 'DICOM', 'NIfTI'] },
    'personal-trainer': { type: 'partTime', technologies: ['Exercise Instruction', 'Sports Nutrition', 'Client Coaching'] },
    'rici': { type: 'partTime', technologies: ['HTML', 'CSS', 'JavaScript', 'Wix', 'MailChimp', 'Google Analytics'] },
    'shukun-tech': { type: 'internship', technologies: ['Python', 'PyTorch', 'Computer Vision', 'Medical Imaging', '3D Processing'] },
    'casia': { type: 'internship', technologies: ['Python', 'React', 'MySQL', 'MQTT', 'PyTorch', 'OpenCV', 'Deep Reinforcement Learning'] },
    'ustb-research': { type: 'internship', technologies: ['Transformers', 'Brain Science', 'Research', 'Scientific Writing'] },
    'ntu-research': { type: 'internship', technologies: ['TensorFlow', 'Java', 'CNN', 'Medical Imaging', 'Lung Segmentation'] }
};

const educationMeta = {
    brown: { type: 'graduateProgram', gpa: null },
    ustb: { type: 'undergraduateProgram', gpa: '3.83 / 4.0' }
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
        root.innerHTML = `<h1>${escapeHtml(message)}</h1><p><a href="../index.html">${escapeHtml(config.back[language])}</a></p>`;
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

    const metaParts = [record.date, record.location, typeLabel].filter(Boolean);
    if (meta.gpa) metaParts.push(`${common.gpa} ${meta.gpa}`);

    const listSection = (heading, items) => items.length
        ? `<h2>${escapeHtml(heading)}</h2><ul class="detail-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
        : '';

    document.title = `${title} | Charlie Yang`;
    root.innerHTML = `
        <article class="detail">
            <p class="detail-kicker muted">${escapeHtml(config.kicker[language])}</p>
            <h1>${escapeHtml(title)}</h1>
            <p class="detail-org">${escapeHtml(organization)}</p>
            <p class="detail-meta muted">${metaParts.map(escapeHtml).join(' · ')}</p>
            <p>${escapeHtml(record.description || record.summary)}</p>
            ${listSection(config.responsibilities[language], responsibilities)}
            <h2>${escapeHtml(config.technologies[language])}</h2>
            <p>${technologies.map(escapeHtml).join(' · ')}</p>
            ${listSection(config.highlights[language], highlights)}
        </article>
        <footer class="page-footer">
            <span>© ${new Date().getFullYear()} Charlie Yang</span>
            <a href="../index.html#${type}">${escapeHtml(config.back[language])}</a>
        </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => {
        saveLanguage(button.dataset.lang);
        renderDetail(button.dataset.lang);
    }));
    renderDetail(readLanguage());
});
