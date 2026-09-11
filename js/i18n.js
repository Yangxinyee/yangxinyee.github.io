const translations = {
    en: {
        meta: {
            title: "Charlie Yang | Software Development Engineer at AWS",
            description: "Charlie Yang is a Software Development Engineer at AWS building agentic AI developer experiences and researching medical imaging AI agents."
        },
        nav: { home: "Home", about: "About", experience: "Experience", academic: "Academic", education: "Education", skills: "Skills", contact: "Contact" },
        common: { skip: "Skip to content", details: "View details" },
        hero: {
            eyebrow: "Software Development Engineer · AI Researcher",
            title: "Charlie Yang",
            role: "Software Development Engineer at AWS Kiro",
            description: "I work on agentic AI developer experiences and context systems, with an additional research focus on medical imaging and clinical AI.",
            viewWork: "Professional experience", scholar: "Google Scholar", focusLabel: "Focus", focus: "Agentic AI & developer tools", locationLabel: "Based in", location: "Seattle, Washington", educationLabel: "Education", education: "Brown University · MSCS"
        },
        about: {
            kicker: "About", title: "About",
            paragraph1: "I’m a software engineer at AWS Kiro, where I work on agentic AI developer experiences and the context systems behind them.",
            paragraph2: "Alongside product engineering, I contribute to medical imaging and AI agent research at the University of Colorado Anschutz School of Medicine. I enjoy turning ambiguous research problems into dependable products—balancing technical depth with usability, performance, and clean execution.",
            highlightsTitle: "Highlights",
            highlight1: "At AWS Kiro, designing an AI automation framework for agent-driven workflows—standardizing multi-step tool calling and orchestration (MCP), execution state management, and failure recovery for reliable long-running agent sessions.",
            highlight2: "Evolving LLM context and memory systems (compaction, retrieval, context scheduling under token budgets), reducing inference cost and latency while preserving response quality.",
            highlight3: "As an intern, designed and shipped Kiro IDE's core distributed context compaction system—hierarchical compression with RAG on Amazon S3 Vectors and OpenSearch Serverless, achieving 80–90% compression—and drove its production launch serving 100K+ users.",
            highlight4: "Contributor to KiroCrew, an open-source multi-agent workspace built on kiro-cli and the Agent Client Protocol (ACP): session-resilience, redaction, and sandboxing improvements.",
            highlight5: "Research on reliable AI for medical imaging: reliability stress tests and decision-time routing for chest X-ray vision–language models (CHASE 2026) and confidence-gated cloud–edge cascade triage (Smart Health, 2026), plus a U.S. provisional patent on an intelligent radiology reporting platform.",
            highlight6: "Earlier, built a real-time ICU patient monitoring system at the Chinese Academy of Sciences, Institute of Automation, securing a software patent and a national grant.",
            principle1Title: "Systems thinking", principle1Text: "Designing for the whole workflow, not a single feature.",
            principle2Title: "Practical research", principle2Text: "Turning experiments into reliable, measurable product improvements.",
            principle3Title: "Human-centered craft", principle3Text: "Keeping complex technology calm and intuitive for people."
        },
        experience: {
            kicker: "Experience", title: "Experience", intro: "From production AI developer tools to medical imaging systems.", current: "Current", research: "Research", earlier: "Earlier experience",
            "aws-kiro": { title: "Software Development Engineer", company: "Amazon Web Services · Kiro", date: "Jul 2026 – Present", location: "Seattle, WA", summary: "Building agentic AI developer experiences and evolving the context systems that make long-running workflows more capable, reliable, and intuitive." },
            "cu-anschutz": { title: "Research Assistant", company: "University of Colorado Anschutz School of Medicine", date: "Jul 2026 – Present", location: "Remote", summary: "Researching medical imaging and AI agents in a remote, part-time role." },
            "aws-kiro-intern": { title: "Software Engineer Intern", company: "Amazon Web Services · Kiro", date: "Jun 2025 – Aug 2025", location: "Seattle, WA", summary: "Led the design and productization of a modular context management system combining hierarchical compaction, memory, and retrieval." },
            "brown-health": { title: "Research Intern", company: "Brown University Health", date: "Mar 2025 – Aug 2025", location: "Providence, RI", summary: "Developed an AI-powered medical imaging platform for report generation, image analysis, and clinical comparison workflows." },
            "personal-trainer": { title: "Personal Trainer", company: "Brown University Athletics" },
            rici: { title: "Lead Web Developer & Designer", company: "Rhode Island Coalition for Israel" },
            "shukun-tech": { title: "Algorithm Engineering Intern", company: "Shukun Technology" },
            casia: { title: "Software & ML Engineer Intern", company: "Chinese Academy of Sciences" },
            "ustb-research": { title: "Research Intern", company: "University of Science and Technology Beijing" },
            "ntu-research": { title: "Research Intern", company: "Nanyang Technological University" }
        },
        academic: {
            kicker: "Academic", title: "Academic", intro: "My work spans multimodal language models, medical image analysis, clinical AI evaluation, and agentic systems.",
            researchTitle: "Research interests", metricsTitle: "Google Scholar", updated: "Updated September 2026", citations: "Citations", publications: "Publications", scholar: "View Google Scholar",
            publicationsTitle: "Publications", note: "Metrics and publication citations are synchronized from Google Scholar.", citedBy: "cited by"
        },
        education: {
            kicker: "Education", title: "Education",
            brown: { date: "2024 – 2026", degree: "Master of Science in Computer Science", school: "Brown University", summary: "Focus on AI, machine learning, and software systems." },
            ustb: { date: "2020 – 2024", degree: "Bachelor of Engineering in Artificial Intelligence", school: "University of Science and Technology Beijing", summary: "Graduated with honors · GPA 3.83/4.0." }
        },
        skills: { kicker: "Skills", title: "Skills", intro: "A practical toolkit shaped by product engineering, AI systems, and research.", languages: "Languages", ai: "AI & Data", frameworks: "Frameworks", tools: "Tools" },
        contact: { kicker: "Contact", title: "Contact", description: "I’m always glad to connect with people working on thoughtful AI products, developer tools, and healthcare technology.", email: "Send me an email" },
        footer: { back: "Back to top" }
    },
    zh: {
        meta: {
            title: "杨新烨 | AWS 软件开发工程师",
            description: "杨新烨是 AWS 软件开发工程师，专注于智能代理 AI、开发者工具与医疗影像 AI 智能体研究。"
        },
        nav: { home: "首页", about: "关于", experience: "经历", academic: "学术", education: "教育", skills: "技能", contact: "联系" },
        common: { skip: "跳转到正文", details: "查看详情" },
        hero: {
            eyebrow: "软件开发工程师 · 人工智能研究者",
            title: "杨新烨",
            role: "AWS Kiro 软件开发工程师",
            description: "专注于智能代理 AI 开发者体验与上下文系统，同时从事医学影像和临床人工智能研究。",
            viewWork: "职业经历", scholar: "Google Scholar", focusLabel: "专注方向", focus: "智能代理 AI 与开发者工具", locationLabel: "所在地", location: "华盛顿州西雅图", educationLabel: "教育背景", education: "布朗大学 · 计算机科学硕士"
        },
        about: {
            kicker: "关于", title: "关于",
            paragraph1: "我目前是 AWS Kiro 的软件工程师，负责智能代理 AI 开发者体验及其背后的上下文系统。",
            paragraph2: "在产品工程之外，我也在科罗拉多大学安舒茨医学院参与医疗影像与 AI 智能体研究。我喜欢把开放性的研究问题转化为可靠的产品，在技术深度、易用性、性能与工程质量之间找到平衡。",
            highlightsTitle: "经历亮点",
            highlight1: "在 AWS Kiro 设计面向智能体工作流的 AI 自动化框架：标准化多步工具调用与编排（MCP）、执行状态管理与失败恢复，让长时运行的智能体会话可靠、可观测。",
            highlight2: "持续演进 LLM 上下文与记忆系统（压缩、检索、令牌预算下的上下文调度），在保证回复质量的同时降低推理成本与延迟。",
            highlight3: "实习期间设计并落地 Kiro IDE 核心分布式上下文压缩系统：层次化压缩结合基于 Amazon S3 Vectors 与 OpenSearch Serverless 的 RAG，压缩率达 80–90%，并推动产品上线、服务 10 万以上用户。",
            highlight4: "开源项目 KiroCrew（基于 kiro-cli 与 Agent Client Protocol 的多智能体工作空间）贡献者：改进会话恢复韧性、信息脱敏与沙箱机制。",
            highlight5: "面向医学影像的可靠 AI 研究：胸片视觉语言模型的可靠性压力测试与决策时路由（CHASE 2026）、置信度门控的云边级联分诊（Smart Health 2026），并拥有一项智能放射报告平台的美国临时专利。",
            highlight6: "更早之前，在中国科学院自动化研究所开发实时 ICU 患者监护系统，获软件专利与国家级项目资助。",
            principle1Title: "系统思维", principle1Text: "围绕完整工作流设计，而不只关注单一功能。",
            principle2Title: "实践型研究", principle2Text: "把实验转化为可靠、可衡量的产品改进。",
            principle3Title: "以人为本", principle3Text: "让复杂技术保持克制、清晰并易于使用。"
        },
        experience: {
            kicker: "工作经历", title: "经历", intro: "从生产级 AI 开发者工具到医疗影像系统。", current: "目前", research: "研究", earlier: "更早经历",
            "aws-kiro": { title: "软件开发工程师", company: "亚马逊云服务 · Kiro", date: "2026年7月 – 至今", location: "华盛顿州西雅图", summary: "构建智能代理 AI 开发者体验，并持续演进上下文系统，让长周期任务更强大、更可靠、更易用。" },
            "cu-anschutz": { title: "研究助理", company: "科罗拉多大学安舒茨医学院", date: "2026年7月 – 至今", location: "远程", summary: "以远程兼职形式开展医疗影像与 AI 智能体研究。" },
            "aws-kiro-intern": { title: "软件开发工程师实习生", company: "亚马逊云服务 · Kiro", date: "2025年6月 – 2025年8月", location: "华盛顿州西雅图", summary: "主导模块化上下文管理系统的设计与产品化，结合层次化压缩、记忆与检索能力。" },
            "brown-health": { title: "研究实习生", company: "布朗大学健康中心", date: "2025年3月 – 2025年8月", location: "罗德岛州普罗维登斯", summary: "开发面向医疗报告生成、影像分析与临床对比工作流的 AI 医学影像平台。" },
            "personal-trainer": { title: "私人教练", company: "布朗大学体育部" },
            rici: { title: "首席 Web 开发工程师兼设计师", company: "罗德岛以色列联盟" },
            "shukun-tech": { title: "算法工程实习生", company: "数坤科技" },
            casia: { title: "软件与机器学习工程实习生", company: "中国科学院自动化研究所" },
            "ustb-research": { title: "研究实习生", company: "北京科技大学" },
            "ntu-research": { title: "研究实习生", company: "南洋理工大学" }
        },
        academic: {
            kicker: "学术研究", title: "学术", intro: "我的研究涵盖多模态大语言模型、医学影像分析、临床 AI 评估与智能代理系统。",
            researchTitle: "研究方向", metricsTitle: "Google Scholar", updated: "更新于 2026 年 9 月", citations: "引用", publications: "论文", scholar: "查看 Google Scholar",
            publicationsTitle: "学术论文", note: "指标与论文引用数据会从 Google Scholar 定期同步。", citedBy: "引用"
        },
        education: {
            kicker: "教育背景", title: "教育",
            brown: { date: "2024 – 2026", degree: "计算机科学理学硕士", school: "布朗大学", summary: "专注人工智能、机器学习与软件系统。" },
            ustb: { date: "2020 – 2024", degree: "人工智能工程学士", school: "北京科技大学", summary: "荣誉毕业 · GPA 3.83/4.0。" }
        },
        skills: { kicker: "技术栈", title: "技能", intro: "一套由产品工程、AI 系统与研究实践共同塑造的实用工具箱。", languages: "编程语言", ai: "AI 与数据", frameworks: "框架", tools: "工具" },
        contact: { kicker: "联系", title: "联系", description: "我很乐意与从事优秀 AI 产品、开发者工具和医疗科技的人交流。", email: "发送邮件" },
        footer: { back: "返回顶部" }
    }
};

function getNestedValue(source, path) {
    return path.split('.').reduce((value, key) => value?.[key], source);
}

function setLanguage(lang) {
    const selected = translations[lang] ? lang : 'en';
    document.documentElement.lang = selected === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = getNestedValue(translations[selected], element.dataset.i18n);
        if (typeof value === 'string') element.textContent = value;
    });

    document.querySelectorAll('[data-lang]').forEach((button) => {
        const active = button.dataset.lang === selected;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
    });

    document.title = translations[selected].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', translations[selected].meta.description);

    try { localStorage.setItem('preferredLanguage', selected); } catch (_) { /* preference is optional */ }
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: selected } }));
}

function getSavedLanguage() {
    try { return localStorage.getItem('preferredLanguage') || 'en'; } catch (_) { return 'en'; }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
    setLanguage(getSavedLanguage());
});

window.siteTranslations = translations;
window.setSiteLanguage = setLanguage;
