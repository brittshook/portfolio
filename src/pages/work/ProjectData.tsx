class Project {
  title!: string;
  subtitle!: string;
  description!: string;
  imgSrc!: string;
  altText!: string;
  showDemoButton!: boolean;
  showGithubButton!: boolean;
  showCaseStudyButton!: boolean;
  categories!: string[];
  showOnHomepage!: boolean;
  additionalDescription?: string;
  demoLink?: string;
  githubRepoLink?: string;
  caseStudyPath?: string;
  teamNames?: string[];
  teamRoles?: string[];
  toolNames?: string[];
  inProgress?: boolean;

  constructor({
    title,
    subtitle,
    description,
    imgSrc,
    altText,
    showDemoButton,
    showGithubButton,
    showCaseStudyButton,
    categories,
    showOnHomepage,
    additionalDescription,
    demoLink,
    githubRepoLink,
    caseStudyPath,
    teamNames,
    teamRoles,
    toolNames,
    inProgress,
  }: {
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    altText: string;
    showDemoButton: boolean;
    showGithubButton: boolean;
    showCaseStudyButton: boolean;
    categories: string[];
    showOnHomepage: boolean;
    additionalDescription?: string;
    demoLink?: string;
    githubRepoLink?: string;
    caseStudyPath?: string;
    teamNames?: string[];
    teamRoles?: string[];
    toolNames?: string[];
    inProgress?: boolean;
  }) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.imgSrc = imgSrc;
    this.altText = altText;
    this.showDemoButton = showDemoButton;
    this.showGithubButton = showGithubButton;
    this.showCaseStudyButton = showCaseStudyButton;
    this.categories = categories;
    this.showOnHomepage = showOnHomepage;
    this.additionalDescription = additionalDescription;
    this.demoLink = demoLink;
    this.githubRepoLink = githubRepoLink;
    this.caseStudyPath = caseStudyPath;
    this.teamNames = teamNames;
    this.teamRoles = teamRoles;
    this.toolNames = toolNames;
    this.inProgress = inProgress;
  }
}

const airQuality = new Project({
  title: "RESTful API for my hyper-local air quality data",
  subtitle: "Raspberry Pi, Python, Flask, PostgreSQL",
  description: "test",
  imgSrc: "/images/test.webp",
  altText: "test",
  showDemoButton: true,
  showGithubButton: true,
  showCaseStudyButton: false,
  categories: ["software engineering"],
  demoLink:
    "https://britt-hyper-local-aqi.readme.io/reference/getting-started-with-your-api",
  githubRepoLink: "test",
  toolNames: ["Raspberry Pi", "Python", "Flask", "PostgreSQL"],
  showOnHomepage: true,
});

const mahaliaXiaoqi = new Project({
  title: "Driving conversions in a bite-size tattoo portfolio",
  subtitle: "HTML, CSS, JavaScript",
  description:
    "I led the end-to-end design and development of a bite-sized tattoo portfolio, including content & product design, to draw clientele for a budding artist.",
  imgSrc: "/images/mahalia_xiaoqi/cover.webp",
  altText: "Mahalia Xiaoqi homepage on desktop and mobile",
  showDemoButton: false,
  showGithubButton: true,
  showCaseStudyButton: true,
  categories: ["software engineering", "UX design"],
  demoLink: "https://mahalia-xiaoqi-tattoos.netlify.app",
  githubRepoLink: "https://github.com/brittshook/mahalia",
  caseStudyPath: "/work/mahalia-xiaoqi",
  toolNames: ["HTML", "CSS", "JavaScript"],
  showOnHomepage: true,
});

const pridePac = new Project({
  title: "Introducing Pride Pac: Queer-themed take on Pac-Man",
  subtitle: "HTML, JavaScript",
  description: "",
  imgSrc: "/images/pride_pac/cover.webp",
  altText: "",
  showDemoButton: true,
  showGithubButton: true,
  showCaseStudyButton: false,
  categories: ["software engineering"],
  demoLink: "https://pride-pac.netlify.app",
  githubRepoLink: "https://github.com/brittshook/pride-pac",
  toolNames: ["HTML", "JavaScript"],
  showOnHomepage: true,
  inProgress: true,
});

const stravaFit = new Project({
  title: "Design-dev collaboration with StravaFit",
  subtitle: "React, TypeScript",
  description:
    "I paired with another full-stack engineer to develop a guided workout feature for the Strava web platform.",
  additionalDescription:
    "This is a student project completed as a part of Designlab's UX Academy. Please note that this is a concept feature created for Strava as a personal project.",
  imgSrc: "/images/stravafit/cover.webp",
  altText: "test",
  showDemoButton: false,
  showGithubButton: true,
  showCaseStudyButton: true,
  categories: ["software engineering", "UX design"],
  demoLink: "https://strava-fit-georgeperryv.vercel.app/",
  githubRepoLink: "https://github.com/georgeperryv/FinalStravaProject",
  caseStudyPath: "/work/stravafit",
  teamNames: ["Britt", "George"],
  teamRoles: ["Designer & Front-End Developer", "Front-End Developer"],
  toolNames: ["Figma", "React", "TypeScript"],
  showOnHomepage: false,
});

const stateMedicaidAgency = new Project({
  title: "Leading content design for an enhanced provider experience",
  subtitle: "State Medicaid Agency (@Deloitte Consulting)",
  description:
    "I led a messaging strategy and developed UX content to communicate provider experience changes in an overhaul of a state Medicaid agency's health plans and its digital systems.",
  additionalDescription:
    "For confidentiality, I have omitted and replaced sensitive information, including the agency's name. Visuals are not finalized deliverables but rather recreations in Figma and other tools. They are not 1:1 representations, and none of the examples include real data.",
  imgSrc: "/images/state_medicaid_agency/cover.webp",
  altText: "Portal with system impacts warning banner",
  showDemoButton: false,
  showGithubButton: false,
  showCaseStudyButton: true,
  categories: ["UX design"],
  caseStudyPath: "/work/state-medicaid-agency",
  showOnHomepage: false,
});

const projectData = [
  airQuality,
  mahaliaXiaoqi,
  pridePac,
  stravaFit,
  stateMedicaidAgency,
];

export { projectData, Project };
