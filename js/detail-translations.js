// Detail page translations
const detailTranslations = {
    en: {
        // Common detail page elements
        common: {
            experienceNotFound: "Experience not found",
            educationNotFound: "Education not found",
            internship: "Internship",
            fullTime: "Full-time",
            partTime: "Part-time",
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
                title: "Software Engineer",
                company: "Amazon Web Services · Kiro",
                date: "Jul 2026 - Present",
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
            "cu-anschutz": {
                title: "Research Assistant",
                company: "University of Colorado Anschutz School of Medicine",
                date: "Jul 2026 - Present",
                location: "Remote",
                description: "Researching medical imaging and AI agents in a remote, part-time role.",
                responsibility1: "Explore applications of AI agents in medical imaging research and workflows",
                responsibility2: "Contribute to interdisciplinary research connecting medical imaging with agentic AI systems",
                achievement1: "Current research focus: Medical Imaging and AI Agents"
            },
            "aws-kiro-intern": {
                title: "Software Engineer Intern",
                company: "Amazon Web Services · Kiro",
                date: "Jun 2025 - Aug 2025",
                location: "Seattle, Washington, United States",
                description: "Led the design and productization of a context compaction system for Kiro IDE, enabling scalable multi-turn memory and LLM integration.",
                responsibility1: "Led the design and productization of a context compaction system for Kiro IDE, enabling scalable multi-turn memory and LLM integration",
                responsibility2: "Built a modular architecture combining hierarchical compaction, supporting flexible deployment and ablation testing",
                responsibility3: "Ran benchmarks and context strategy evaluations in collaboration with senior applied scientists",
                responsibility4: "Fixed major UI/UX bugs in chat and IDE layout, improving usability and developer experience",
                responsibility5: "Shipped to production serving 100K+ users, with high system reliability, maintainability, and measurable improvements in context relevance",
                achievement1: "Shipped the context system to production serving 100K+ users",
                achievement2: "Improved context relevance while maintaining high reliability",
                achievement3: "Built a modular architecture for deployment and ablation testing",
                achievement4: "Transitioned from the internship into a full-time role at AWS"
            },
            "brown-health": {
                title: "Research Intern",
                company: "Brown University Health",
                date: "Mar 2025 - Aug 2025",
                location: "Providence, Rhode Island, United States",
                description: "Led full-stack development of a medical AI platform for clinicians to compare, edit, and evaluate AI-generated reports in real time.",
                responsibility1: "Built an interactive JavaScript DICOM/NIfTI viewer with cornerstone.js and a Flask backend deploying the VILA-M3 model",
                responsibility2: "Engineered scalable APIs and optimized the LLM inference workflow for low-latency, interactive medical reasoning",
                responsibility3: "Implemented a UNet-V2 brain tumor segmentation model with cross-dataset generalization, automated visualization, preprocessing pipelines, and statistical analysis tools",
                responsibility4: "Built a multi-modal classification system using medical imaging foundation models to predict radiological report complexity with variable-length sequence aggregation",
                achievement1: "Led full-stack development of a real-time medical AI platform",
                achievement2: "Optimized LLM inference for low-latency medical reasoning",
                achievement3: "Implemented cross-dataset UNet-V2 brain tumor segmentation",
                achievement4: "Built a multi-modal report-complexity classification system"
            },
            "personal-trainer": {
                title: "Personal Trainer",
                company: "Brown University Athletics",
                date: "Sep 2024 - Aug 2025",
                location: "Providence, Rhode Island, United States",
                description: "Coached clients at Brown University Athletics through personalized training, technique guidance, and progress tracking.",
                responsibility1: "Designed personalized workout plans for clients to achieve specific health and fitness goals",
                responsibility2: "Provided guidance on proper exercise techniques and motivation to support clients",
                responsibility3: "Tracked progress, adjusted routines, and offered nutrition advice for optimal results",
                achievement1: "Delivered individualized training plans and ongoing progress support",
                achievement2: "Applied exercise instruction, sports nutrition, and client coaching"
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
            },
            "ustb-research": {
                title: "Research Intern",
                company: "University of Science and Technology Beijing",
                date: "May 2023 - Aug 2023",
                location: "Beijing, China",
                description: "Conducted research on transformer architectures in brain science and contributed to a published survey.",
                responsibility1: "Co-authored a survey of transformer methods and applications across brain science research",
                achievement1: "Published: Understanding the brain with attention: a survey of transformers in brain sciences",
                achievement2: "Brain-X, 2023, 1(3): e29"
            },
            "ntu-research": {
                title: "Research Intern",
                company: "Nanyang Technological University",
                date: "Jul 2022 - Sep 2022",
                location: "Singapore",
                description: "Researched CNN optimization for lung disease diagnosis using lung segmentation and rib suppression.",
                responsibility1: "Developed and evaluated CNN-based methods for lung disease diagnosis with lung segmentation and rib suppression",
                achievement1: "Published at the 2022 15th International Symposium on Computational Intelligence and Design (ISCID)",
                achievement2: "IEEE, 2022: 254-259"
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
            partTime: "兼职",
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
                title: "软件工程师",
                company: "亚马逊云服务 · Kiro",
                date: "2026年7月 - 至今",
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
            "cu-anschutz": {
                title: "研究助理",
                company: "科罗拉多大学安舒茨医学院",
                date: "2026年7月 - 至今",
                location: "远程",
                description: "以远程兼职形式开展医疗影像与 AI 智能体研究。",
                responsibility1: "探索 AI 智能体在医疗影像研究与工作流中的应用",
                responsibility2: "参与连接医疗影像与智能代理 AI 系统的跨学科研究",
                achievement1: "当前研究方向：医疗影像与 AI 智能体"
            },
            "aws-kiro-intern": {
                title: "软件开发工程师实习生",
                company: "亚马逊云服务 · Kiro",
                date: "2025年6月 - 2025年8月",
                location: "西雅图，华盛顿州，美国",
                description: "主导 Kiro IDE 上下文压缩系统的设计与产品化，实现可扩展的多轮记忆与 LLM 集成。",
                responsibility1: "主导 Kiro IDE 上下文压缩系统的设计与产品化，实现可扩展的多轮记忆与 LLM 集成",
                responsibility2: "构建结合层次化压缩的模块化架构，支持灵活部署与消融测试",
                responsibility3: "与高级应用科学家合作开展基准测试和上下文策略评估",
                responsibility4: "修复聊天与 IDE 布局中的重要 UI/UX 问题，改善易用性和开发者体验",
                responsibility5: "将系统交付生产环境并服务 10 万以上用户，在可靠性、可维护性与上下文相关性方面取得可衡量改进",
                achievement1: "将上下文系统交付生产并服务 10 万以上用户",
                achievement2: "在保持高可靠性的同时改善上下文相关性",
                achievement3: "构建支持部署与消融测试的模块化架构",
                achievement4: "从实习顺利转为 AWS 全职岗位"
            },
            "brown-health": {
                title: "研究实习生",
                company: "布朗大学健康中心",
                date: "2025年3月 - 2025年8月",
                location: "普罗维登斯，罗德岛州，美国",
                description: "主导医疗 AI 平台的全栈开发，帮助临床医生实时比较、编辑和评估 AI 生成报告。",
                responsibility1: "使用 cornerstone.js 构建交互式 JavaScript DICOM/NIfTI 查看器，并以 Flask 后端部署 VILA-M3 模型",
                responsibility2: "设计可扩展 API 并优化 LLM 推理工作流，实现低延迟交互式医疗推理",
                responsibility3: "实现具有跨数据集泛化能力的 UNet-V2 脑肿瘤分割模型，并开发自动可视化、预处理流水线与统计分析工具",
                responsibility4: "使用医疗影像基础模型构建多模态分类系统，通过可变长度序列聚合预测放射学报告复杂度",
                achievement1: "主导实时医疗 AI 平台的全栈开发",
                achievement2: "优化 LLM 推理以支持低延迟医疗推理",
                achievement3: "实现跨数据集 UNet-V2 脑肿瘤分割",
                achievement4: "构建多模态报告复杂度分类系统"
            },
            "personal-trainer": {
                title: "私人教练",
                company: "布朗大学体育部",
                date: "2024年9月 - 2025年8月",
                location: "普罗维登斯，罗德岛州，美国",
                description: "在布朗大学体育部通过个性化训练、动作指导与进度跟踪帮助客户实现健康目标。",
                responsibility1: "为客户设计个性化训练计划，帮助实现具体健康与健身目标",
                responsibility2: "提供正确动作技术指导与持续激励",
                responsibility3: "跟踪训练进展、调整计划并提供营养建议",
                achievement1: "提供个性化训练计划与持续进度支持",
                achievement2: "实践运动指导、运动营养与客户教练能力"
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
            },
            "ustb-research": {
                title: "研究实习生",
                company: "北京科技大学",
                date: "2023年5月 - 2023年8月",
                location: "北京，中国",
                description: "研究脑科学中的 Transformer 架构并参与发表综述论文。",
                responsibility1: "共同撰写 Transformer 方法及其在脑科学研究中应用的综述",
                achievement1: "发表论文：Understanding the brain with attention: a survey of transformers in brain sciences",
                achievement2: "Brain-X, 2023, 1(3): e29"
            },
            "ntu-research": {
                title: "研究实习生",
                company: "南洋理工大学",
                date: "2022年7月 - 2022年9月",
                location: "新加坡",
                description: "研究结合肺部分割与肋骨抑制的 CNN 肺部疾病诊断优化。",
                responsibility1: "开发并评估结合肺部分割与肋骨抑制的 CNN 肺部疾病诊断方法",
                achievement1: "论文发表于 2022 年第十五届计算智能与设计国际研讨会（ISCID）",
                achievement2: "IEEE, 2022: 254-259"
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
