const profile = {
  name: "Esto Triramdani Nurlustiawan",
  title: "Fullstack Developer",
  tagline:
    "Building scalable manufacturing & edtech solutions with modern JavaScript, AI-driven workflows, and clean architecture.",
  phone: "+6289657285153",
  phoneLabel: "+62 896-5728-5153",
  email: "estotriramdani@gmail.com",
  linkedin: "https://www.linkedin.com/in/estotriramdani",
  github: "https://github.com/estotriramdani",
  photo: "assets/profile-photo.jpeg",
  resume: "assets/resume.pdf",
  about:
    "Fullstack Developer with 4 years of professional experience in developing scalable manufacturing and edtech applications. Proficient in the modern JavaScript ecosystem with extensive experience in TypeScript, React/Next.js, and backend integration. Highly adaptable learner with an expert-level ability to maximize development velocity and code quality using AI-driven workflows (Spec Driven Development, MCP, 9router). Committed to refactoring legacy code and implementing high-performance frontend architectures.",
  location: "Sukabumi, West Java, Indonesia",
  siteUrl: "https://estotriramdani.github.io",
};

const experiences = [
  {
    company: "PT Amerta Indah Otsuka",
    role: "IT Apps Development Sr. Staff",
    location: "Sukabumi, West Java",
    period: "Jan 2022 - Present",
    description:
      "FMCG-manufacturing company. The well-known products are Pocari Sweat, Soyjoy, etc.",
    highlights: [
      "Engineered scalable full-stack solutions using Node.js, Express.js, Nest.js, and React/Next.js to digitize critical energy data (electricity, fuel, water, natural gas), successfully resolving data opacity and optimizing manufacturing efficiency.",
      "Integrated solutions to the company's ERP through Business Application Programming Interface (BAPI).",
      "Spearheaded the technical architecture and lifecycle of the Energy Management System, a high-impact initiative that secured the Diamond Tier Award at TKMPN XXVI and contributed directly to the company's National Lighthouse Industry 4.0 award.",
      "Mentored the web developer internship program (2 cohorts/year) by designing a strategic syllabus and enforcing strict engineering standards (clean code, documentation) to mitigate technical debt and ensure seamless knowledge transfer despite high turnovers.",
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "PHP",
      "Nest.js",
      "React",
      "Next.js",
      "Laravel",
      "MySQL",
      "MongoDB",
      "Jest",
      "Cypress",
    ],
  },
  {
    company: "Benih Belajar",
    role: "Fullstack Engineer",
    location: "Remote part-time",
    period: "Nov 2021 - Feb 2024",
    description:
      "Early-stage education tech (edtech) startup that focuses on developing passion classes.",
    highlights: [
      "Collaborated cross-functionally with the UI/UX team in an early-stage edtech startup environment to architect and build the Benih Belajar web application from the ground up.",
      "Translated complex design mockups into robust, type-safe code utilizing Next.js, React, and TypeScript, leveraging Tailwind CSS to deliver a highly responsive and visually precise user interface.",
      "Engineered the backend infrastructure using Express.js, MySQL, and Sequelize, and independently managed the application's deployment using AWS Cloud ecosystems.",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Context API",
      "Tailwind CSS",
      "Express.js",
      "MySQL",
      "Sequelize",
      "NGINX",
    ],
  },
  {
    company: "Skilvul (Kampus Merdeka)",
    role: "Fullstack Web Development Mentor",
    location: "Remote",
    period: "Sep 2023 - Dec 2023",
    description: null,
    highlights: [
      "Facilitated bi-weekly live and asynchronous mentoring sessions, guiding mentees through comprehensive full-stack JavaScript curricula (Node.js, React, databases).",
      "Evaluated mentee projects and assignments, providing code reviews and technical feedback to ensure practical mastery of web development concepts.",
    ],
    techStack: ["Node.js", "React", "MongoDB", "MySQL", "Tailwind CSS"],
  },
  {
    company: "Generasi GIGIH 2.0 (YABB & GoTo)",
    role: "Frontend Engineering Mentor",
    location: "Remote",
    period: "May 2022 - July 2022",
    description: null,
    highlights: [
      "Served as a technical panelist for the Frontend Engineering Capstone Showcase, evaluating final projects based on code quality, feature implementation, and adherence to industry best practices.",
      "Mentored participants in the Kampus Merdeka program, providing strategic guidance on tech stack selection and conducting rigorous code reviews to improve implementation of React, Redux, and TypeScript.",
      "Fostered engineering independence by teaching advanced debugging techniques and effective technical research strategies (e.g., maximizing search engine efficacy for error resolution).",
    ],
    techStack: ["React", "Redux", "TypeScript", "Bootstrap CSS"],
  },
];

const projects = [
  {
    title: "IPB Online Job Fair Website",
    url: "https://jobfair.ipb.ac.id",
    date: "September 2022",
    role: "Full-stack Developer",
    description:
      "A job fair platform for IPB University connecting students and recruiters.",
    techStack: ["React", "React Context API", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Entrepreneurship Hub",
    url: "https://entrehub.ipb.ac.id",
    date: "December 2023",
    role: "Full-stack Developer",
    description:
      "A hub platform supporting entrepreneurship programs and community activities.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
    ],
  },
  {
    title: "EJ Medical",
    url: "https://ewanjaya.com",
    date: "February 2026 - March 2026",
    role: "Full-stack Developer",
    description:
      "Company profile and landing page for Ewan Jaya Kastara's medical division.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Native PHP",
    ],
  },
  {
    title: "EJ Books",
    url: "https://books.ewanjaya.com",
    date: "February 2026 - March 2026",
    role: "Full-stack Developer",
    description:
      "Web application for managing books under Ewan Jaya Kastara.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Native PHP",
    ],
  },
];

const skills = {
  "Languages & Frameworks": [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "React.js",
    "Next.js",
    "React Native",
    "Redux Toolkit",
    "Tailwind CSS",
  ],
  "Frontend & UI/UX": [
    "Responsive Web Development",
    "Component Design",
    "Tailwind CSS",
    "Performance Optimization",
  ],
  "Backend & Database": [
    "Nest.js",
    "Sequelize ORM",
    "MySQL",
    "MongoDB",
    "WebSocket",
    "Socket.io",
  ],
  "Infrastructure & Emerging Tech": [
    "AWS Infrastructure",
    "Generative AI",
    "RAG implementations",
    "Spec Driven Development",
    "MCP (Model Context Protocol)",
    "9router",
    "AI-assisted debugging",
    "Rapid prototyping",
  ],
};

const educations = [
  {
    institution: "BINUS University",
    period: "2022 - 2024",
    degree: "Bachelor Degree (S1) - Information Systems Extension Class",
    gpa: "3.77/4.00",
    thesis:
      "Web-Based Intelligent Technology for Diagnosing Rice Plant Diseases to Enhance Food Security in South Kalimantan.",
  },
  {
    institution: "IPB University",
    period: "2018 - 2021",
    degree: "Associate Degree (D3) - Computer Engineering",
    gpa: "3.60/4.00",
    thesis:
      "Development of a Web-Based Network Infrastructure for Poverty Data Collection Services at the Langonsari Village Office, Bandung Regency.",
  },
];

module.exports = {
  profile,
  experiences,
  projects,
  skills,
  educations,
};
