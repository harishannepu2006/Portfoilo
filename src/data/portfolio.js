export const personalInfo = {
  name: "Harish",
  title: "Data Scientist | AI Engineer",
  roles: [
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Data Scientist",
    "Problem Solver"
  ],
  about: {
    intro: "I'm an aspiring Data Scientist and AI/ML Engineer with a strong foundation in frontend development, passionate about building intelligent, data-driven applications that solve real-world problems and create meaningful impact.",
    highlights: [
      "Curious problem-solver with a growing interest in data analysis and machine learning",
      "Blending frontend skills with AI/ML to create interactive and intelligent user experiences",
      "Hands-on experience with data processing, visualization, and basic ML models",
      "Continuously learning modern tools, algorithms, and full-stack integration for AI systems",
    ],
  },
  email: "harishannepu2006@gmail.com",
  social: {
    github: "https://github.com/harishannepu2006",
    linkedin: "https://www.linkedin.com/in/annepu-harish-927832349"
  },
};

export const skills = [
  {
    category: "Programming & Core",
    icon: "Code2",
    items: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Data Structures", level: 70 },
      { name: "Algorithms", level: 68 },
      { name: "OOP Concepts", level: 72 },
    ],
  },
  {
    category: "Data Science",
    icon: "BarChart3",
    items: [
      { name: "Pandas", level: 82 },
      { name: "NumPy", level: 78 },
      { name: "Data Visualization", level: 75 },
      { name: "EDA", level: 77 },
      { name: "Statistics", level: 70 },
    ],
  },
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    items: [
      { name: "Scikit-learn", level: 78 },
      { name: "TensorFlow", level: 70 },
      { name: "Supervised Learning", level: 80 },
      { name: "Unsupervised Learning", level: 72 },
      { name: "Feature Engineering", level: 74 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: "Wrench",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 88 },
      { name: "SQL", level: 75 },
      { name: "FastAPI / Flask", level: 65 },
      { name: "Excel", level: 78 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "DevInsight",
    subtitle: "AI-Driven Code Intelligence Platform",
    description:
      "Engineered a scalable AI-powered platform that performs deep static analysis on codebases to identify bugs, technical debt, and architectural risks. Integrated LLM-driven insights to deliver automated fix recommendations and repository health scoring.",
    tags: ["React", "Python", "FastAPI", "AI/ML", "Supabase"],
    gradient: "from-[#00d4ff] to-[#7b2fff]",
    icon: "Brain",
    image: "/projects/devinsight.png",
    highlights: [
      "LLM-powered bug detection & auto-remediation",
      "Real-time code quality analytics & visualization",
      "Repository health scoring & risk classification",
      "Scalable async architecture with monitoring",
    ],
    github: "https://github.com/harishannepu2006/DEVI_INSIGHT",
    live: "https://devi-insight-c45sa0p29-harishs-projects-9d2ee74f.vercel.app?_vercel_share=Bi4rUc5gxrWY2sihXcPqe4zH18Ecazq8",
  },
  {
    id: 2,
    title: "PropAI",
    subtitle: "Real Estate Price Prediction",
    description:
      "A sophisticated machine learning system for real estate price prediction, utilizing advanced regression models and feature engineering on historical property data. Delivers accurate property valuations with interactive data visualizations.",
    tags: ["Scikit-learn", "Python", "FastAPI", "React", "ML"],
    gradient: "from-[#7b2fff] to-[#ff2d95]",
    icon: "Home",
    highlights: [
      "Advanced ML prediction models (Random Forest, XGBoost)",
      "Interactive map visualizations with Plotly",
      "Market trend analysis engine",
      "Feature engineering for regional price trends",
    ],
    github: "https://github.com/harishannepu2006",
    live: "#",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech (Bachelor of Technology)",
    institution: "Malla Reddy University",
    duration: "2024 – Present",
    score: "CGPA: 8.45",
  },
  {
    id: 2,
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    duration: "2022 – 2024",
    score: "Percentage: 95.3%",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
