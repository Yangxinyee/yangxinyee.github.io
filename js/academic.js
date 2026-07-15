const academicTranslations = {
    en: {
        meta: {
            title: "Academic | Charlie Yang",
            description: "Academic publications and research interests of Xinye Charlie Yang in multimodal LLMs, medical image analysis, AI in healthcare, and agentic AI."
        },
        common: { skip: "Skip to content" },
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            academic: "Academic",
            education: "Education",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            kicker: "Research & Publications",
            title: "Academic work at the intersection of AI and healthcare.",
            description: "My research spans multimodal language models, medical image analysis, clinical AI evaluation, and agentic systems. I care about building methods that are technically rigorous and useful in real workflows.",
            scholar: "View Google Scholar",
            contact: "Discuss research"
        },
        metrics: {
            title: "Google Scholar",
            updated: "Updated July 2026",
            citations: "Citations",
            publications: "Publications"
        },
        focus: {
            kicker: "Research Focus",
            title: "Four connected areas of interest."
        },
        publications: {
            kicker: "Publications",
            title: "Selected academic work.",
            note: "Citation counts reflect the Google Scholar profile in July 2026.",
            citedBy: "cited by"
        },
        footer: { back: "Back to top" }
    },
    zh: {
        meta: {
            title: "学术研究 | Charlie Yang",
            description: "Xinye Charlie Yang 在多模态大语言模型、医学影像分析、医疗人工智能与智能代理领域的论文及研究方向。"
        },
        common: { skip: "跳转到正文" },
        nav: {
            home: "首页",
            about: "关于",
            experience: "经历",
            academic: "学术",
            education: "教育",
            skills: "技能",
            contact: "联系"
        },
        hero: {
            kicker: "研究与论文",
            title: "探索人工智能与医疗健康的交叉领域。",
            description: "我的研究涵盖多模态大语言模型、医学影像分析、临床 AI 评估与智能代理系统。我关注兼具技术严谨性与实际工作流价值的方法。",
            scholar: "查看 Google Scholar",
            contact: "交流研究"
        },
        metrics: {
            title: "Google Scholar",
            updated: "更新于 2026 年 7 月",
            citations: "引用",
            publications: "论文"
        },
        focus: {
            kicker: "研究方向",
            title: "四个相互关联的研究领域。"
        },
        publications: {
            kicker: "学术论文",
            title: "代表性学术成果。",
            note: "引用数据来自 2026 年 7 月的 Google Scholar 主页。",
            citedBy: "引用"
        },
        footer: { back: "返回顶部" }
    }
};

function getAcademicValue(object, path) {
    return path.split(".").reduce((value, key) => value?.[key], object);
}

function setAcademicLanguage(language) {
    const selectedLanguage = academicTranslations[language] ? language : "en";
    const copy = academicTranslations[selectedLanguage];

    document.documentElement.lang = selectedLanguage === "zh" ? "zh-CN" : "en";
    document.title = copy.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = copy.meta.description;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = getAcademicValue(copy, element.dataset.i18n);
        if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
        const isActive = button.dataset.lang === selectedLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem("preferredLanguage", selectedLanguage);
}

document.addEventListener("DOMContentLoaded", () => {
    const storedLanguage = localStorage.getItem("preferredLanguage");
    const browserLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
    setAcademicLanguage(storedLanguage || browserLanguage);

    document.querySelectorAll("[data-lang]").forEach((button) => {
        button.addEventListener("click", () => setAcademicLanguage(button.dataset.lang));
    });
});
