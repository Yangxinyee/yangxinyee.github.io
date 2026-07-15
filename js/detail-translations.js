// Detail page translations
const detailTranslations = {
    en: {
        // Common detail page elements
        common: {
            experienceNotFound: "Experience not found",
            educationNotFound: "Education not found",
            internship: "Internship",
            fullTime: "Full-time",
            graduateProgram: "Graduate Program",
            undergraduateProgram: "Undergraduate Program",
            keyResponsibilities: "Key Responsibilities",
            technologiesUsed: "Technologies Used",
            keyAchievements: "Key Achievements",
            areasOfFocus: "Areas of Focus",
            activitiesLeadership: "Activities & Leadership",
            keyAchievementsAwards: "Key Achievements & Awards",
            gpa: "GPA",
            experienceDetails: "Experience Details",
            educationDetails: "Education Details"
        },
        
        // Experience detail translations
        experience: {
            "aws-kiro": {
                title: "Software Development Engineer",
                company: "Amazon Web Services · Kiro",
                date: "Jun 2026 - Present",
                location: "Seattle, Washington, United States",
                description: "Building agentic AI developer experiences at Kiro, with a focus on context systems, product reliability, and intuitive workflows.",
                responsibility1: "Build and ship agentic AI developer experiences for Kiro across the product stack",
                responsibility2: "Evolve context and memory systems that support reliable, long-running development workflows",
                responsibility3: "Partner with engineering, product, and applied science teams to improve quality, latency, and usability",
                responsibility4: "Turn emerging LLM capabilities into dependable product experiences for developers",
                achievement1: "Joined AWS Kiro full-time after completing the 2025 internship",
                achievement2: "Continuing to advance context engineering and agentic developer workflows",
                achievement3: "Shipping production improvements across AI systems and user experience"
            },
            "aws-kiro-intern": {
                title: "Software Development Engineer Intern",
                company: "Amazon Web Services · Kiro",
                date: "Jun 2025 - Aug 2025",
                location: "Seattle, Washington, United States",
                description: "Led the design and productization of context management capabilities for Kiro's agentic AI developer experience.",
                responsibility1: "Independently led the design and productization of a context management system, enabling efficient multi-turn memory handling and scalable LLM interaction",
                responsibility2: "Developed a modular framework combining hierarchical context compaction, importance-based tagging, memory, and RAG",
                responsibility3: "Designed and ran internal experiments to evaluate context strategies under token and latency constraints with senior applied scientists",
                responsibility4: "Integrated the context system into production pipelines with dynamic retrieval and compact history injection",
                responsibility5: "Improved key chat and IDE interactions to strengthen usability and interface consistency",
                achievement1: "Led independent design and productization of the context system",
                achievement2: "Built a modular framework for flexible deployment and evaluation",
                achievement3: "Integrated the system into production workflows",
                achievement4: "Transitioned from the internship into a full-time role at Kiro"
            },
            "brown-health": {
                title: "Research Intern",
                company: "Brown University Health",
                date: "Mar 2025 - Present",
                location: "Providence, Rhode Island, United States",
                description: "Developing AI-powered medical imaging platform for healthcare applications.",
                responsibility1: "Developing a web-based platform that enables doctors to interactively view AI-generated medical reports alongside ground-truth clinical reports for various medical images",
                responsibility2: "The system supports multi-modal inputs (DICOM, PNG, NIfTI) and integrates an interactive frontend image viewer",
                responsibility3: "On the backend, deployed the state-of-the-art vision-language model VILA-M3 for automatic medical report generation across multiple imaging modalities",
                responsibility4: "Processed 10,000+ brain MRI images and developed an automated preprocessing pipeline for DICOM to NIfTI conversion, registration, skull stripping, and file organization",
                responsibility5: "Deployed nnU-Net v2 for automated brain stroke lesion segmentation, achieving high accuracy in medical image analysis",
                responsibility6: "The platform is built with Python (Flask) for the backend, JavaScript for the interactive frontend, and supports efficient LLM inference deployment for real-time medical reasoning",
                responsibility7: "Submitting the software to RSNA Abstracts",
                achievement1: "Developing comprehensive medical imaging platform",
                achievement2: "Deployed state-of-the-art VILA-M3 model",
                achievement3: "Processed 10,000+ brain MRI images with automated pipeline",
                achievement4: "Implemented nnU-Net v2 for stroke lesion segmentation",
                achievement5: "Supporting multi-modal medical inputs",
                achievement6: "Submitting to RSNA Abstracts"
            },
            "rici": {
                title: "Lead Web Developer & Designer",
                company: "Rhode Island Coalition for Israel",
                date: "Dec 2024 - Feb 2025",
                location: "Providence, Rhode Island, United States",
                description: "Led website development and design for Rhode Island Coalition for Israel, focusing on responsive design and user experience optimization.",
                responsibility1: "Revamped the RICI website on Wix with responsive design, interactive forms, and multimedia integration",
                responsibility2: "Integrated MailChimp for automated campaigns, enhancing user engagement and communication",
                responsibility3: "Optimized UI/UX by using Google Analytics and implementing responsive design with HTML/CSS and JavaScript",
                responsibility4: "Collaborated with team members to deliver a user-focused solution that meets organizational needs",
                responsibility5: "Check the website: www.ricoalitionforisrael.org",
                achievement1: "Successfully revamped organization website with modern responsive design",
                achievement2: "Integrated automated email marketing campaigns",
                achievement3: "Improved user engagement through optimized UI/UX",
                achievement4: "Delivered user-focused web solution on time"
            },
            "shukun-tech": {
                title: "Algorithm Engineering Intern",
                company: "Shukun Technology Co., Ltd",
                date: "May 2024 - Aug 2024",
                location: "Beijing, China",
                description: "Working on brain region segmentation and medical imaging algorithms.",
                responsibility1: "Improved brain region segmentation and optimize brain tumor detection, contributing to advancements in digital healthcare solutions and affecting over 5,000 patients",
                responsibility2: "Independently constructed a tree-structured data system to store 3D brain region segmentation labels",
                responsibility3: "Collected and processed over 10,000 MRI brain images from different machines in five major hospitals, applying sequence recognition algorithms to identify patterns in the data",
                responsibility4: "Refactored the 3D data pipeline to standardize the data format for the CerebralDoc brain segmentation model",
                achievement1: "Improved brain region segmentation for 5,000+ patients",
                achievement2: "Processed 10,000+ MRI brain images",
                achievement3: "Constructed tree-structured data system",
                achievement4: "Refactored 3D data pipeline"
            },
            "casia": {
                title: "Software and Machine Learning Engineer Intern",
                company: "Institute of Automation, Chinese Academy of Sciences",
                date: "May 2023 - May 2024",
                location: "Beijing, China",
                description: "Developing real-time patient monitoring systems using computer vision and machine learning.",
                responsibility1: "Obtained a software patent, secured a national grant, and demonstrated significant reductions in manual monitoring time and improved response speed during ICU trials at Beijing 301/306 Hospital",
                responsibility2: "Constructed an abnormal action dataset similar to UCF101, tailored for monitoring critical patient behaviors",
                responsibility3: "Designed and implemented a real-time patient monitoring system leveraging custom hybrid algorithm that integrates Key Point Detection with Optical Flow Analysis, enhancing detection accuracy for critical patient movements, such as irregular breathing patterns or limb motion",
                responsibility4: "Developed a React-based web app for real-time visualization of patient data, using MySQL for storage of patient status data and MQTT for robot-software communication",
                responsibility5: "Built multi-modal HCI system for medical service robot with computer vision monitoring based on action recognition algorithms (C3D, TSN, SlowFast)",
                responsibility6: "Implemented crowd-aware robot navigation with attention-based deep reinforcement learning and graph convolutional neural networks for obstacle avoidance in medical environments",
                achievement1: "Obtained software patent and secured national grant",
                achievement2: "Reduced manual monitoring time significantly",
                achievement3: "Developed real-time patient monitoring system",
                achievement4: "Created React-based visualization app",
                achievement5: "Built multi-modal HCI system for medical service robot",
                achievement6: "Implemented crowd-aware robot navigation with 4-star GitHub project"
            }
        },
        
        // Education detail translations
        education: {
            "brown": {
                degree: "Master of Science in Computer Science",
                school: "Brown University",
                date: "Sep 2024 - May 2026",
                location: "Providence, Rhode Island, United States",
                summary: "Completed advanced study in computer science with a focus on AI, machine learning, and software engineering.",
                activity1: {
                    title: "Research Assistant",
                    description: "Working on AI-powered medical imaging research"
                },
                activity2: {
                    title: "Teaching Assistant",
                    description: "Assisting in computer science courses"
                },
                activity3: {
                    title: "Personal Trainer",
                    description: "Working at Brown Nelson Fitness Center"
                },
                focus1: "Artificial Intelligence and Machine Learning",
                focus2: "Computer Vision and Deep Learning",
                focus3: "Software Engineering and Systems",
                focus4: "Data Science and Analytics",
                achievement1: "Earned a Master of Science in Computer Science",
                achievement2: "Focused on AI, machine learning, and software systems",
                achievement3: "Contributed to research, teaching, and campus activities"
            },
            "ustb": {
                degree: "Bachelor of Engineering in Artificial Intelligence",
                school: "University of Science and Technology Beijing",
                date: "Sep 2020 - Jul 2024",
                location: "Beijing, China",
                summary: "Graduated with honors and received Dean's Medal for outstanding academic performance, leadership, and significant contributions to university projects.",
                activity1: {
                    title: "Peer Study Counselor",
                    description: "SIST, USTB - Mentoring fellow students"
                },
                activity2: {
                    title: "President of Student Union",
                    description: "SIST, USTB - Leading student organization"
                },
                activity3: {
                    title: "Chairman of Youth Innovation Center",
                    description: "Promoting innovation and entrepreneurship"
                },
                activity4: {
                    title: "Founder of Fusion Lab",
                    description: "USTB - Research and development lab"
                },
                activity5: {
                    title: "Head of Social Research Team",
                    description: "Leading research initiatives"
                },
                focus1: "Artificial Intelligence and Machine Learning",
                focus2: "Computer Vision and Image Processing",
                focus3: "Data Structures and Algorithms",
                focus4: "Software Engineering and Development",
                achievement1: "Dean's Medal Recipient (2024) - Awarded for outstanding academic performance, leadership, and significant contributions to university projects",
                achievement2: "Outstanding Student Scholarship (2021, 2022, 2023) - Top 7% of students",
                achievement3: "First Prize - 16th iCAN National Innovation and Entrepreneurship Competition for College Students (2022)",
                achievement4: "Second Prize - China 'Internet +' College Student Innovation and Entrepreneurship Competition (2022)",
                achievement5: "Third Prize - 15th Chinese Computer Design Competition for College Students (2022)",
                achievement6: "Second Prize - National English Competition for College Students (2022)",
                achievement7: "First Prize - Robot Competition of USTB (2021)",
                achievement8: "Second Prize - Physics Competition of USTB (2021)",
                achievement9: "Third Prize - National Mathematics Competition for College Students (2021)"
            }
        }
    },
    
    zh: {
        // Common detail page elements
        common: {
            experienceNotFound: "未找到工作经历",
            educationNotFound: "未找到教育背景",
            internship: "实习",
            fullTime: "全职",
            graduateProgram: "研究生项目",
            undergraduateProgram: "本科生项目",
            keyResponsibilities: "主要职责",
            technologiesUsed: "使用的技术",
            keyAchievements: "主要成就",
            areasOfFocus: "重点领域",
            activitiesLeadership: "活动与领导力",
            keyAchievementsAwards: "主要成就与奖项",
            gpa: "GPA",
            experienceDetails: "工作经历详情",
            educationDetails: "教育背景详情"
        },
        
        // Experience detail translations
        experience: {
            "aws-kiro": {
                title: "软件开发工程师",
                company: "亚马逊云服务 · Kiro",
                date: "2026年6月 - 至今",
                location: "西雅图，华盛顿州，美国",
                description: "在 Kiro 构建智能代理 AI 开发者体验，专注上下文系统、产品可靠性与直观的工作流。",
                responsibility1: "跨产品技术栈构建并交付 Kiro 智能代理 AI 开发者体验",
                responsibility2: "持续演进上下文与记忆系统，支持可靠的长周期开发工作流",
                responsibility3: "与工程、产品和应用科学团队合作，改善质量、延迟与易用性",
                responsibility4: "将新兴 LLM 能力转化为可靠的开发者产品体验",
                achievement1: "完成 2025 年实习后全职加入 AWS Kiro",
                achievement2: "持续推进上下文工程与智能代理开发者工作流",
                achievement3: "在 AI 系统和用户体验层面交付生产级改进"
            },
            "aws-kiro-intern": {
                title: "软件开发工程师实习生",
                company: "亚马逊云服务 · Kiro",
                date: "2025年6月 - 2025年8月",
                location: "西雅图，华盛顿州，美国",
                description: "主导 Kiro 智能代理 AI 开发者体验中上下文管理能力的设计与产品化。",
                responsibility1: "独立主导上下文管理系统的设计与产品化，实现高效的多轮记忆处理和可扩展的 LLM 交互",
                responsibility2: "开发结合层次化上下文压缩、重要性标记、记忆与 RAG 的模块化框架",
                responsibility3: "与高级应用科学家合作设计内部实验，在 token 与延迟约束下评估上下文策略",
                responsibility4: "将上下文系统集成到生产流水线，支持动态检索和紧凑历史注入",
                responsibility5: "改进关键聊天与 IDE 交互，提升易用性与界面一致性",
                achievement1: "独立主导上下文系统的设计与产品化",
                achievement2: "构建支持灵活部署和评估的模块化框架",
                achievement3: "将系统集成到生产工作流",
                achievement4: "从实习顺利转为 Kiro 全职岗位"
            },
            "brown-health": {
                title: "研究实习生",
                company: "布朗大学健康中心",
                date: "2025年3月 - 至今",
                location: "普罗维登斯，罗德岛州，美国",
                description: "开发AI驱动的医疗影像平台，用于医疗保健应用。",
                responsibility1: "开发基于Web的平台，使医生能够交互式查看AI生成的医疗报告与真实临床报告的对比",
                responsibility2: "系统支持多模态输入（DICOM、PNG、NIfTI）并集成交互式前端图像查看器",
                responsibility3: "在后端部署最先进的视觉语言模型VILA-M3，用于多种成像模态的自动医疗报告生成",
                responsibility4: "处理10,000+脑部MRI图像并开发自动化预处理流水线，用于DICOM到NIfTI转换、配准、去颅骨和文件组织",
                responsibility5: "部署nnU-Net v2用于自动化脑卒中病变分割，在医学图像分析中实现高精度",
                responsibility6: "平台使用Python (Flask)构建后端，JavaScript构建交互式前端，支持高效的LLM推理部署用于实时医疗推理",
                responsibility7: "向RSNA摘要提交软件",
                achievement1: "开发综合医疗影像平台",
                achievement2: "部署最先进的VILA-M3模型",
                achievement3: "使用自动化流水线处理10,000+脑部MRI图像",
                achievement4: "实现nnU-Net v2用于卒中病变分割",
                achievement5: "支持多模态医疗输入",
                achievement6: "向RSNA摘要提交软件"
            },
            "rici": {
                title: "首席Web开发工程师兼设计师",
                company: "罗德岛以色列联盟",
                date: "2024年12月 - 2025年2月",
                location: "普罗维登斯，罗德岛州，美国",
                description: "领导罗德岛以色列联盟的网站开发和设计，专注于响应式设计和用户体验优化。",
                responsibility1: "在Wix平台上重新设计RICI网站，采用响应式设计、交互式表单和多媒体集成",
                responsibility2: "集成MailChimp用于自动化营销活动，增强用户参与度和沟通效果",
                responsibility3: "通过使用Google Analytics和实现HTML/CSS/JavaScript响应式设计来优化UI/UX",
                responsibility4: "与团队成员合作，交付满足组织需求的用户导向解决方案",
                responsibility5: "查看网站：www.ricoalitionforisrael.org",
                achievement1: "成功重新设计组织网站，采用现代响应式设计",
                achievement2: "集成自动化电子邮件营销活动",
                achievement3: "通过优化的UI/UX改善用户参与度",
                achievement4: "按时交付用户导向的Web解决方案"
            },
            "shukun-tech": {
                title: "算法工程实习生",
                company: "数坤科技有限公司",
                date: "2024年5月 - 2024年8月",
                location: "北京，中国",
                description: "从事脑区域分割和医疗影像算法开发。",
                responsibility1: "改进脑区域分割并优化脑肿瘤检测，为数字医疗解决方案的进步做出贡献，影响超过5,000名患者",
                responsibility2: "独立构建树状结构数据系统来存储3D脑区域分割标签",
                responsibility3: "从五家主要医院的不同机器收集和处理超过10,000张MRI脑部图像，应用序列识别算法识别数据模式",
                responsibility4: "重构3D数据流水线，为CerebralDoc脑分割模型标准化数据格式",
                achievement1: "为5,000+患者改进脑区域分割",
                achievement2: "处理10,000+MRI脑部图像",
                achievement3: "构建树状结构数据系统",
                achievement4: "重构3D数据流水线"
            },
            "casia": {
                title: "软件和机器学习工程师实习生",
                company: "中国科学院自动化研究所",
                date: "2023年5月 - 2024年5月",
                location: "北京，中国",
                description: "使用计算机视觉和机器学习开发实时患者监控系统。",
                responsibility1: "获得软件专利，获得国家资助，在北京301/306医院ICU试验中证明显著减少手动监控时间并提高响应速度",
                responsibility2: "构建类似UCF101的异常行为数据集，专门用于监控关键患者行为",
                responsibility3: "设计并实现实时患者监控系统，利用集成关键点检测与光流分析的自定义混合算法，提高关键患者运动（如不规则呼吸模式或肢体运动）的检测准确性",
                responsibility4: "开发基于React的Web应用程序用于患者数据实时可视化，使用MySQL存储患者状态数据，MQTT用于机器人软件通信",
                responsibility5: "构建医疗机器人多模态人机交互系统，基于动作识别算法（C3D、TSN、SlowFast）的计算机视觉监控",
                responsibility6: "实现基于注意力的深度强化学习和图卷积神经网络的群体感知机器人导航，用于医疗环境中的障碍物避免",
                achievement1: "获得软件专利和国家资助",
                achievement2: "显著减少手动监控时间",
                achievement3: "开发实时患者监控系统",
                achievement4: "创建基于React的可视化应用程序",
                achievement5: "构建医疗机器人多模态人机交互系统",
                achievement6: "实现群体感知机器人导航，获得4星GitHub项目"
            }
        },
        
        // Education detail translations
        education: {
            "brown": {
                degree: "计算机科学硕士",
                school: "布朗大学",
                date: "2024年9月 - 2026年5月",
                location: "普罗维登斯，罗德岛州，美国",
                summary: "完成计算机科学高级学习，专注于人工智能、机器学习和软件工程。",
                activity1: {
                    title: "研究助理",
                    description: "从事AI驱动的医疗影像研究"
                },
                activity2: {
                    title: "助教",
                    description: "协助计算机科学课程"
                },
                activity3: {
                    title: "私人教练",
                    description: "在布朗大学Nelson健身中心工作"
                },
                focus1: "人工智能与机器学习",
                focus2: "计算机视觉与深度学习",
                focus3: "软件工程与系统",
                focus4: "数据科学与分析",
                achievement1: "获得计算机科学理学硕士学位",
                achievement2: "专注于 AI、机器学习与软件系统",
                achievement3: "参与科研、教学与校园活动"
            },
            "ustb": {
                degree: "人工智能工程学士",
                school: "北京科技大学",
                date: "2020年9月 - 2024年7月",
                location: "北京，中国",
                summary: "以优异成绩毕业并获得院长奖章，表彰杰出的学术表现、领导力和对大学项目的重大贡献。",
                activity1: {
                    title: "同伴学习辅导员",
                    description: "SIST，USTB - 指导同学学习"
                },
                activity2: {
                    title: "学生会主席",
                    description: "SIST，USTB - 领导学生组织"
                },
                activity3: {
                    title: "青年创新中心主任",
                    description: "促进创新和创业"
                },
                activity4: {
                    title: "Fusion Lab创始人",
                    description: "USTB - 研发实验室"
                },
                activity5: {
                    title: "社会研究团队负责人",
                    description: "领导研究计划"
                },
                focus1: "人工智能与机器学习",
                focus2: "计算机视觉与图像处理",
                focus3: "数据结构与算法",
                focus4: "软件工程与开发",
                achievement1: "院长奖章获得者（2024年）- 因杰出的学术表现、领导力和对大学项目的重大贡献而获奖",
                achievement2: "优秀学生奖学金（2021、2022、2023年）- 前7%学生",
                achievement3: "第十六届iCAN全国大学生创新创业大赛一等奖（2022年）",
                achievement4: "中国'互联网+'大学生创新创业大赛二等奖（2022年）",
                achievement5: "第十五届中国大学生计算机设计大赛三等奖（2022年）",
                achievement6: "全国大学生英语竞赛二等奖（2022年）",
                achievement7: "USTB机器人竞赛一等奖（2021年）",
                achievement8: "USTB物理竞赛二等奖（2021年）",
                achievement9: "全国大学生数学竞赛三等奖（2021年）"
            }
        }
    }
};

// Function to get detail translation
function getDetailTranslation(key, lang = 'zh') {
    const keys = key.split('.');
    let value = detailTranslations[lang];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// Export for use in other scripts
window.detailTranslations = detailTranslations;
window.getDetailTranslation = getDetailTranslation;
