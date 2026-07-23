// Duration helpers -----------------------------------------------------------
// Dates are treated as year/month pairs. Month counting is inclusive to match
// common resume conventions (e.g. Jan 2022 - Dec 2024 = 3 yrs).

function toDate(date) {
  if (date === null || date === undefined) return new Date();
  return date instanceof Date ? date : new Date(date);
}

function monthDiff(start, end) {
  const s = toDate(start);
  const e = toDate(end);
  return (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1;
}

function formatDurationFromMonths(totalMonths) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearPart = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthPart = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  if (years > 0 && months > 0) return `${yearPart} ${monthPart}`;
  if (years > 0) return yearPart;
  return monthPart || "< 1 mo";
}

function formatDuration(start, end) {
  return formatDurationFromMonths(monthDiff(start, end));
}

function calculateCompanyDuration(roles) {
  const starts = roles.map((r) => toDate(r.startDate).getTime());
  const ends = roles.map((r) =>
    r.endDate ? toDate(r.endDate).getTime() : new Date().getTime()
  );
  const minStart = new Date(Math.min(...starts));
  const maxEnd = new Date(Math.max(...ends));
  return formatDuration(minStart, maxEnd);
}

function withCalculatedDurations(experiences) {
  return experiences.map((exp) => ({
    ...exp,
    duration: calculateCompanyDuration(exp.roles),
    roles: exp.roles.map((role) => ({
      ...role,
      duration: formatDuration(role.startDate, role.endDate),
    })),
  }));
}

// Content --------------------------------------------------------------------

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

const experiences = withCalculatedDurations([
  {
    company: "PT Amerta Indah Otsuka",
    location: "Sukabumi, West Java",
    period: "Apr 2021 - Present",
    description:
      "FMCG-manufacturing company. The well-known products are Pocari Sweat, Soyjoy, etc.",
    highlights: [
      "Spearheaded the technical architecture and lifecycle of the Energy Management System, a high-impact initiative that secured the Diamond Tier Award at TKMPN XXVI and contributed directly to the company's National Lighthouse Industry 4.0 award.",
      "Mentored the web developer internship program (Otsuka Youngstar) by designing a strategic syllabus and enforcing strict engineering standards (clean code, documentation) to mitigate technical debt and ensure seamless knowledge transfer.",
    ],
    roles: [
      {
        title: "Software Engineer (Manufacturing) Sr. Staff",
        type: "Full-time",
        period: "Jan 2025 - Present",
        startDate: "2025-01-01",
        endDate: null,
        description:
          "Continue to focus on the maintenance and development of applications that facilitate seamless data flow between machinery, databases, and user interfaces. Primary development environment utilizes the JavaScript ecosystem, including React, Angular, and Express, with Prisma for database interactions. Leverage TypeScript to enhance code quality and optimize development efficiency. Responsibilities expanded to encompass the analysis and improvement of manufacturing business processes within the Sukabumi factory, including R&D initiatives in AI, machine learning, computer vision, statistical process control, and database management for large-scale, high-velocity data.",
        techStack: [
          "Angular",
          "React",
          "Express",
          "Prisma",
          "TypeScript",
          "AI / ML",
          "Computer Vision",
          "SPC",
          "Database Management",
        ],
      },
      {
        title: "App Development Staff",
        type: "Full-time",
        period: "Jan 2022 - Dec 2024",
        startDate: "2022-01-01",
        endDate: "2024-12-31",
        description:
          "As backend, fetched data from databases collected from machines and manually entered by Engineering teams, processed and calculated the data, and served it through RESTful APIs and GraphQL (Apollo Server) using Node.js with TypeScript. Partially to fully migrated the system from PHP to Node.js to standardize tech stacks. As frontend, consumed those APIs with React and third-party libraries, and maintained and enriched features in applications built in previous roles. Created and maintained a CLI application to fetch data from an OPC server using node-opcua. Served as a mentor in the Otsuka Youngstar internship program for web development.",
        techStack: [
          "Node.js",
          "TypeScript",
          "GraphQL",
          "Apollo Server",
          "React",
          "PHP",
          "MySQL",
          "OPC UA",
          "REST API",
          "CLI",
        ],
      },
      {
        title: "App Development Intern",
        type: "Apprenticeship",
        period: "Apr 2021 - Dec 2021",
        startDate: "2021-04-01",
        endDate: "2021-12-31",
        description:
          "Developed and maintained department applications used to keep employee daily activities running smoothly. Worked with PHP and Node.js as primary backend languages, MySQL for data storage, and React.js (Next.js framework) to serve data from backend to users.",
        techStack: [
          "PHP",
          "Node.js",
          "MySQL",
          "React.js",
          "Next.js",
          "Unit Testing",
          "Front-End Development",
        ],
      },
    ],
  },
  {
    company: "Benih Belajar",
    location: "Remote part-time",
    period: "Nov 2021 - Feb 2024",
    description:
      "Early-stage education tech (edtech) startup that focuses on developing passion classes.",
    roles: [
      {
        title: "Fullstack Engineer",
        type: "Part-time",
        period: "Nov 2021 - Feb 2024",
        startDate: "2021-11-01",
        endDate: "2024-02-29",
        description:
          "Collaborated cross-functionally with the UI/UX team to architect and build the Benih Belajar web application from the ground up. Translated complex design mockups into robust, type-safe code utilizing Next.js, React, and TypeScript, leveraging Tailwind CSS to deliver a highly responsive and visually precise user interface. Engineered the backend infrastructure using Express.js, MySQL, and Sequelize, and independently managed deployment using AWS Cloud ecosystems.",
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
    ],
  },
  {
    company: "Skilvul (Kampus Merdeka)",
    location: "Remote",
    period: "Sep 2023 - Dec 2023",
    description: null,
    roles: [
      {
        title: "Fullstack Web Development Mentor",
        type: "Contract",
        period: "Sep 2023 - Dec 2023",
        startDate: "2023-09-01",
        endDate: "2023-12-31",
        description:
          "Facilitated bi-weekly live and asynchronous mentoring sessions, guiding mentees through comprehensive full-stack JavaScript curricula (Node.js, React, databases). Evaluated mentee projects and assignments, providing code reviews and technical feedback to ensure practical mastery of web development concepts.",
        techStack: ["Node.js", "React", "MongoDB", "MySQL", "Tailwind CSS"],
      },
    ],
  },
  {
    company: "Generasi GIGIH 2.0 (YABB & GoTo)",
    location: "Remote",
    period: "May 2022 - July 2022",
    description: null,
    roles: [
      {
        title: "Frontend Engineering Mentor",
        type: "Contract",
        period: "May 2022 - July 2022",
        startDate: "2022-05-01",
        endDate: "2022-07-31",
        description:
          "Served as a technical panelist for the Frontend Engineering Capstone Showcase, evaluating final projects based on code quality, feature implementation, and adherence to industry best practices. Mentored participants in the Kampus Merdeka program, providing strategic guidance on tech stack selection and conducting rigorous code reviews to improve implementation of React, Redux, and TypeScript. Fostered engineering independence by teaching advanced debugging techniques and effective technical research strategies.",
        techStack: ["React", "Redux", "TypeScript", "Bootstrap CSS"],
      },
    ],
  },
]);

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
