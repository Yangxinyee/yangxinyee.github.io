const translations = {
    en: {
        meta: {
            title: "Xinye Yang (Charlie) | Software Development Engineer at AWS",
            description: "Xinye Yang (Charlie) is a Software Development Engineer at AWS building agentic AI developer experiences and researching medical imaging AI agents."
        },
        nav: { home: "Homepage", about: "About Me", news: "News", publications: "Publications", experience: "Experience", education: "Education", honors: "Honors", skills: "Skills" },
        common: { skip: "Skip to content", details: "Details", present: "Present", advisedBy: "Advised by", and: "and" },
        sidebar: {
            name: "Xinye Yang (Charlie)",
            bio: "Software Development Engineer, AWS Kiro",
            tagline: "Agentic AI · LLM context systems · Medical imaging AI",
            location: "Seattle, WA, USA"
        },
        about: {
            paragraph1a: "I’m a software engineer at AWS Kiro",
            paragraph1b: ", where I work on agentic AI developer experiences.",
            paragraph2a: "Alongside product engineering, I contribute to medical imaging and AI agent research at the University of Colorado Anschutz School of Medicine",
            paragraph2b: ". I enjoy turning ambiguous research problems into dependable products—balancing technical depth with usability, performance, and clean execution.",
            advisors1a: "At CU Anschutz",
            advisors1b: ", I’m advised by",
            advisors2a: ". At Brown",
            advisors2b: ", I was advised by",
            advisors3a: ". Earlier, at the Chinese Academy of Sciences, Institute of Automation",
            advisors3b: ", I built a real-time ICU patient monitoring system advised by",
            advisors4: ".",
            interestsLabel: "Research interests",
            interests: "Multimodal LLMs · Medical Image Analysis · AI in Healthcare · Agentic AI",
            highlightsTitle: "Highlights",
            highlight1: "At AWS Kiro, designing an AI automation framework for agent-driven workflows—standardizing multi-step tool calling and orchestration (MCP), execution state management, and failure recovery for reliable long-running agent sessions.",
            highlight2: "Evolving LLM context and memory systems (compaction, retrieval, context scheduling under token budgets), reducing inference cost and latency while preserving response quality.",
            highlight3: "As an intern, designed and shipped Kiro IDE's core distributed context compaction system—hierarchical compression with RAG on Amazon S3 Vectors and OpenSearch Serverless, achieving 80–90% compression—and drove its production launch serving 100K+ users.",
            highlight4: "Contributor to KiroCrew, an open-source multi-agent workspace built on kiro-cli and the Agent Client Protocol (ACP): session-resilience, redaction, and sandboxing improvements.",
            highlight5: "Research on reliable AI for medical imaging: reliability stress tests and decision-time routing for chest X-ray vision–language models (CHASE 2026) and confidence-gated cloud–edge cascade triage (Smart Health, 2026), plus a U.S. provisional patent on an intelligent radiology reporting platform.",
            highlight6: "Earlier, built a real-time ICU patient monitoring system at the Chinese Academy of Sciences, Institute of Automation, securing a software patent and a national grant.",
            reachOut: "Feel free to reach out if you’d like to chat about AI products, developer tools, or healthcare AI!"
        },
        news: {
            title: "News",
            n1: "I join AWS Kiro as a full-time Software Development Engineer in Seattle!",
            n2: "I start as a Research Assistant at the University of Colorado Anschutz School of Medicine.",
            n3: "Our paper on reliability stress tests and decision-time routing for chest X-ray VLMs appears at IEEE/ACM CHASE 2026!",
            n4: "Our paper on confidence-gated cloud–edge cascade triage for medical imaging is published in Smart Health!",
            n5: "I obtain my Master’s degree in Computer Science from Brown University!",
            n6: "Our unified platform for radiology report generation and clinician-centered AI evaluation is released on medRxiv.",
            n7: "I join AWS Kiro as a Software Engineer Intern, working on context management for agentic coding.",
            n8: "I join Brown University Health as a Research Intern on AI-powered medical imaging.",
            n9: "I join Brown University as a Master’s student in Computer Science!",
            n10: "I graduate from University of Science and Technology Beijing with the Dean’s Medal."
        },
        academic: {
            publicationsTitle: "Publications",
            fullListPrefix: "For a complete list of publications, please visit my",
            citations: "Citations",
            updated: "Updated September 2026",
            citedBy: "cited by"
        },
        experience: {
            title: "Experience",
            "aws-kiro": { title: "Software Development Engineer", company: "Amazon Web Services · Kiro", location: "Seattle, WA" },
            "cu-anschutz": { title: "Research Assistant", company: "University of Colorado Anschutz School of Medicine", location: "Remote" },
            "aws-kiro-intern": { title: "Software Engineer Intern", company: "Amazon Web Services · Kiro", location: "Seattle, WA" },
            "brown-health": { title: "Research Intern", company: "Brown University Health", location: "Providence, RI" },
            "personal-trainer": { title: "Personal Trainer", company: "Brown University Athletics" },
            rici: { title: "Lead Web Developer & Designer", company: "Rhode Island Coalition for Israel" },
            "shukun-tech": { title: "Algorithm Engineering Intern", company: "Shukun Technology" },
            casia: { title: "Software & ML Engineer Intern", company: "Chinese Academy of Sciences, Institute of Automation" },
            "ustb-research": { title: "Research Intern", company: "University of Science and Technology Beijing" },
            "ntu-research": { title: "Research Intern", company: "Nanyang Technological University" }
        },
        education: {
            title: "Education",
            brown: { degree: "Master of Science in Computer Science", school: "Brown University", location: "Providence, RI, USA" },
            ustb: { degree: "Bachelor of Engineering in Artificial Intelligence", school: "University of Science and Technology Beijing", location: "Beijing, China", summary: "Graduated with honors, GPA 3.83/4.0." }
        },
        honors: {
            title: "Honors and Awards",
            patentsLabel: "Patents",
            patents: "U.S. provisional patent on an intelligent radiology reporting platform; software patent for a real-time ICU patient monitoring system (Chinese Academy of Sciences, Institute of Automation).",
            h1: "Dean’s Medal, University of Science and Technology Beijing."
        },
        skills: { title: "Skills", languages: "Languages", ai: "AI & Data", frameworks: "Frameworks", tools: "Tools" },
        footer: { back: "Back to top" }
    },
    zh: {
        meta: {
            title: "杨新烨 | AWS 软件开发工程师",
            description: "杨新烨是 AWS 软件开发工程师，专注于智能代理 AI、开发者工具与医疗影像 AI 智能体研究。"
        },
        nav: { home: "主页", about: "关于我", news: "动态", publications: "论文", experience: "经历", education: "教育", honors: "荣誉", skills: "技能" },
        common: { skip: "跳转到正文", details: "详情", present: "至今", advisedBy: "导师：", and: "和" },
        sidebar: {
            name: "杨新烨",
            bio: "AWS Kiro 软件开发工程师",
            tagline: "智能代理 AI · LLM 上下文系统 · 医学影像 AI",
            location: "美国华盛顿州西雅图"
        },
        about: {
            paragraph1a: "我目前是 AWS Kiro",
            paragraph1b: " 的软件工程师，负责智能代理 AI 开发者体验。",
            paragraph2a: "在产品工程之外，我也在科罗拉多大学安舒茨医学院",
            paragraph2b: "参与医疗影像与 AI 智能体研究。我喜欢把开放性的研究问题转化为可靠的产品，在技术深度、易用性、性能与工程质量之间找到平衡。",
            advisors1a: "在科罗拉多大学安舒茨医学院",
            advisors1b: "，我的导师是",
            advisors2a: "。在布朗大学",
            advisors2b: "期间，我的导师是",
            advisors3a: "。更早之前，我在中国科学院自动化研究所",
            advisors3b: "开发实时 ICU 患者监护系统，导师为",
            advisors4: "。",
            interestsLabel: "研究方向",
            interests: "多模态大模型 · 医学影像分析 · 医疗 AI · 智能代理",
            highlightsTitle: "经历亮点",
            highlight1: "在 AWS Kiro 设计面向智能体工作流的 AI 自动化框架：标准化多步工具调用与编排（MCP）、执行状态管理与失败恢复，让长时运行的智能体会话可靠、可观测。",
            highlight2: "持续演进 LLM 上下文与记忆系统（压缩、检索、令牌预算下的上下文调度），在保证回复质量的同时降低推理成本与延迟。",
            highlight3: "实习期间设计并落地 Kiro IDE 核心分布式上下文压缩系统：层次化压缩结合基于 Amazon S3 Vectors 与 OpenSearch Serverless 的 RAG，压缩率达 80–90%，并推动产品上线、服务 10 万以上用户。",
            highlight4: "开源项目 KiroCrew（基于 kiro-cli 与 Agent Client Protocol 的多智能体工作空间）贡献者：改进会话恢复韧性、信息脱敏与沙箱机制。",
            highlight5: "面向医学影像的可靠 AI 研究：胸片视觉语言模型的可靠性压力测试与决策时路由（CHASE 2026）、置信度门控的云边级联分诊（Smart Health 2026），并拥有一项智能放射报告平台的美国临时专利。",
            highlight6: "更早之前，在中国科学院自动化研究所开发实时 ICU 患者监护系统，获软件专利与国家级项目资助。",
            reachOut: "欢迎联系我，聊聊 AI 产品、开发者工具或医疗 AI！"
        },
        news: {
            title: "动态",
            n1: "全职加入 AWS Kiro，任软件开发工程师（西雅图）！",
            n2: "开始在科罗拉多大学安舒茨医学院担任研究助理。",
            n3: "关于胸片视觉语言模型可靠性压力测试与决策时路由的论文发表于 IEEE/ACM CHASE 2026！",
            n4: "关于医学影像置信度门控云边级联分诊的论文发表于 Smart Health！",
            n5: "获得布朗大学计算机科学硕士学位！",
            n6: "放射报告生成与以临床医生为中心的 AI 评估统一平台在 medRxiv 发布。",
            n7: "以软件工程师实习生身份加入 AWS Kiro，负责智能编程的上下文管理。",
            n8: "加入布朗大学健康中心，担任 AI 医学影像研究实习生。",
            n9: "进入布朗大学攻读计算机科学硕士！",
            n10: "从北京科技大学毕业，并获得院长奖章。"
        },
        academic: {
            publicationsTitle: "论文",
            fullListPrefix: "完整论文列表请见我的",
            citations: "引用",
            updated: "更新于 2026 年 9 月",
            citedBy: "引用"
        },
        experience: {
            title: "经历",
            "aws-kiro": { title: "软件开发工程师", company: "亚马逊云服务 · Kiro", location: "华盛顿州西雅图" },
            "cu-anschutz": { title: "研究助理", company: "科罗拉多大学安舒茨医学院", location: "远程" },
            "aws-kiro-intern": { title: "软件开发工程师实习生", company: "亚马逊云服务 · Kiro", location: "华盛顿州西雅图" },
            "brown-health": { title: "研究实习生", company: "布朗大学健康中心", location: "罗德岛州普罗维登斯" },
            "personal-trainer": { title: "私人教练", company: "布朗大学体育部" },
            rici: { title: "首席 Web 开发工程师兼设计师", company: "罗德岛以色列联盟" },
            "shukun-tech": { title: "算法工程实习生", company: "数坤科技" },
            casia: { title: "软件与机器学习工程实习生", company: "中国科学院自动化研究所" },
            "ustb-research": { title: "研究实习生", company: "北京科技大学" },
            "ntu-research": { title: "研究实习生", company: "南洋理工大学" }
        },
        education: {
            title: "教育",
            brown: { degree: "计算机科学理学硕士", school: "布朗大学", location: "美国罗德岛州普罗维登斯" },
            ustb: { degree: "人工智能工程学士", school: "北京科技大学", location: "中国北京", summary: "荣誉毕业，GPA 3.83/4.0。" }
        },
        honors: {
            title: "荣誉与奖项",
            patentsLabel: "专利",
            patents: "智能放射报告平台美国临时专利；实时 ICU 患者监护系统软件专利（中国科学院自动化研究所）。",
            h1: "北京科技大学院长奖章。"
        },
        skills: { title: "技能", languages: "编程语言", ai: "AI 与数据", frameworks: "框架", tools: "工具" },
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
