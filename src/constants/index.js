const tagline = {
  tag: "#full-stack #softwaredev #graphic-designer #computer-science-graduate",
};

const scope = {};
const person = {
  name: {
    fname: "BEN FLORENCE AJ",
    lname: "TIL",
    get fullname() {
      return `${this.fname} ${this.lname}`;
    },
  },
  photo: {
    img: "../src/assets/bg1.jpg",
    border: "../src/assets/border.gif",
  },
  bio: {
    birth: "October 9, 2002",
    citizenship: "Filipino",
    location: {
      country: "Philippines",
      province: "South Cotabato",
      city: "Tupi",
      get loc() {
        return `${this.city} , ${this.province} , ${this.country}`;
      },
    },
  },

  socials: {
    github: {
      name: "github",
      label: "Github",
      title: "Github Profile",
      icon: "fab fa-github",
      url: "https://github.com/benajtil",
    },
    facebook: {
      name: "facebook",
      label: "Facebook",
      title: "facebook Profile",
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/1.AjEspiritu09/",
    },
    linkedin: {
      name: "linkedin",
      label: "LinkedIn",
      title: "LinkedIn Profile",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/ben-florence-aj-til-7217a729a/",
    },
  },
};

const info = {
  titleDesc:
    "A passionate and creative Full-Stack Developer with a strong foundation in software engineering, design, and innovation. Dedicated to building responsive, user-focused web solutions with clean code and thoughtful design.",
};

const typedTitle = {
  title: [
    { text: "FULL-STACK DEVELOPER", color: "text-amber-400" },
    { text: "SOFTWARE DEVELOPER", color: "text-blue-400" },
    { text: "GRAPHIC DESIGNER", color: "text-pink-400" },
    { text: "CS GRADUATE", color: "text-green-400" },
  ],
};

const navLink = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "timeline",
    name: "Timeline",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "skills",
    name: "Skills",
  },

  {
    id: "contact",
    name: "Contact",
  },
];
const about = {
  bio: {
    aboutme: `Hey, I’m Ben Florence A.J. Til, a Computer Science graduate from Notre Dame of Marbel University (NDMU) and a self-taught tech enthusiast. Back in high school, I got curious about how computers and bots worked. With zero coding knowledge, I started by copying existing open-source projects, tweaking them, breaking things, fixing them — and somehow making them work. I ended up building my own music bots, RSS APIs, and even Discord bots with custom commands. I also managed a small private server and became a database manager, all while learning things the hard way.

    That curiosity never stopped. I’ve built PCs, fixed electronics, repaired phones, wired WiFi-connected vending machines — all without formal training in electronics. I didn’t know anything about amperes or circuits, I just figured things out by doing.
\n I may not always feel like I fully “fit” into a role right away, but one thing I’m sure of: I’ll learn it, adapt, and make it work.

`,
    objective:
      "Versatile technologist in (ENTRY LEVEL)full-stack JavaScript (React, Node.js) and PHP development, with a keen eye for UI/UX and graphic design. Experienced building responsive web and hybrid mobile apps that sync offline data. Hands-on IT technician and PC builder who also prototypes microcontroller-based systems. Ideal for roles bridging software engineering, front-end design, and hardware integration.",
    scopes: [
      { text: "Full Stack Developer" },
      { text: "(Entry) Mobile App Developer" },
      { text: "Frontend/UI Developer" },
      { text: "Graphic Designer" },
      { text: "2D assets Designer" },
      { text: "IT Techinician" },
      { text: "PC Builder" },
      { text: "Microcontroller-Based Vending System Integrator" },
    ],
  },
};
import animateLogo from "../assets/utilities/animate.png";
import cLogo from "../assets/utilities/c.png";
import cppLogo from "../assets/utilities/cpp.png";
import dartLogo from "../assets/utilities/dart.png";
import javaLogo from "../assets/utilities/java.png";
import jsLogo from "../assets/utilities/js.png";
import photoshopLogo from "../assets/utilities/photoshop.png";
import premiereLogo from "../assets/utilities/premiere.png";
import pythonLogo from "../assets/utilities/python.png";
import illustratorLogo from "../assets/utilities/illustrator.png";
import ndmuLogo from "../assets/utilities/NDMU.avif";
import lakbayImg from "../assets/projects/lakbaymarista.png";
import customerImg from "../assets/projects/customersegmentation.png";
import no404 from "../assets/projects/404.png";
import clusteringImg from "../assets/album/clustering.png";
import BenOS from "../assets/album/benOs.png";
import ArtiumJ from "../assets/album/Graphic/ArtiumJ.png";

export const logos = [
  { src: animateLogo, name: "Animate" },
  { src: cLogo, name: "C" },
  { src: cppLogo, name: "C++" },
  { src: dartLogo, name: "Dart" },
  { src: javaLogo, name: "Java" },
  { src: jsLogo, name: "JavaScript" },
  { src: photoshopLogo, name: "Photoshop" },
  { src: premiereLogo, name: "Premiere" },
  { src: pythonLogo, name: "Python" },
  { src: illustratorLogo, name: "Illustrator" },
];

const timeline = {
  education: [
    {
      school: "Notre Dame of Marbel University (NDMU)",
      degree: "Computer Science (Degree Holder)",
      start: "2021",
      graduated: "2025",
      description:
        "Completed a rigorous curriculum in algorithms, data structures, and software engineering.",
      logo: [ndmuLogo],
      certificate: "",
      modal: "",
    },
  ],
  experience: [
    {
      title: "Graphic Designer",
      start: "2016",
      end: "Present",
      description:
        "Design on-brand visual assets logos, banners, web graphics—and 2D game sprites using Photoshop & Illustrator.",
      logo: [photoshopLogo, illustratorLogo],

      certificate: "",
      modal: "",
    },
    {
      title: "2D Assets Designer",
      start: "2016",
      end: "2020",
      description:
        "Created UI icons, marketing banners, and 2D sprites for web projects and Roblox games.",
      logo: [animateLogo],
      certificate: "",
      modal: "",
    },
    {
      title: "IT Technician",
      start: "2020",
      end: "Present",
      description:
        "Assembled custom PCs, managed networks, troubleshooted hardware/software issues, and provided end-user support.",
      logo: "",
      certificate: "",
      modal: "",
    },
    {
      title: "PC Builder",
      start: "2020",
      end: "Present",
      description:
        "Built performance desktop rigs from the ground up, selecting optimal components and ensuring system stability.",
      logo: "",
      certificate: "",
      modal: "",
    },
    {
      title: "Full-Stack Engineer Internship",
      start: "June 2024",
      end: "August 2024",
      description:
        "Contributed to full-stack features, wrote unit tests, and collaborated with senior engineers on code reviews.",
      logo: [jsLogo, pythonLogo, dartLogo],
      certificate: "",
      modal: "",
    },
  ],
};

const projects = [
  {
    title: "Lakbay Marista",
    description:
      "Lakbay Marista is your one-stop digital travel guide to the most captivating sights around the Mindanao region...",
    url: {
      github: "https://github.com/benajtil/lakbaymarista-tourist",
      live: "lakbaymarista.online",
    },
    image: lakbayImg,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "MySQL"],
    category: "Software", // 🟣 Added category
    live: true,
  },
  {
    title: "Customer Segmentation",
    description:
      "Developed as part of our Thesis at Notre Dame of Marbel University, this PHP-powered web application delivers a comprehensive admin dashboard...",
    url: {
      github:
        "https://github.com/benajtil/Customer-Segmentation-in-Online-Retail-using-DBSCANS.git",
      live: "lakbaymarista.online",
    },
    image: customerImg,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "PYTHON", "MySQL"],
    category: "Data", // 🟣 Added category
    live: false,
  },
  {
    title: "Tabulation System",
    description:
      "The Tnalak Festival Tabulation System is a PHP-based web app designed to manage and score entries in both the Float and Civic Competitions...",
    url: {
      github: "https://github.com/benajtil/tnalak-admin.git",
      live: "lakbaymarista.online",
    },
    image: no404,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "SQLite", "MySQL"],
    category: "Software", // 🟣 Added category
    live: false,
  },
  {
    title: "BenOS Retro System",
    description: "3D interactive portfolio built with React + Three.js.",
    image: BenOS,
    languages: ["React", "Three.js", "Tailwind"],
    url: { live: "ben-os-qtex.vercel.app/" },
    category: "Software",
    live: true,
  },
  {
    title: "Clustering Visualization",
    description:
      "visualized RFM-based clusters powered by scikit-learn and Matplotlib.",
    image: clusteringImg,
    languages: ["Python", "scikit-learn", "Matplotlib"],
    url: "https://colab.research.google.com/drive/1J7YqSGFbONl9Vn1e2Tryk_i51Ov-YjgY?usp=sharing",
    category: "Data",
  },
  {
    title: "Logo Design",
    description: "Minimalist and geometric branding projects.",
    image: ArtiumJ,
    languages: ["Illustrator", "Photoshop"],
    url: "#",
    category: "Graphic",
  },
];

export {
  person,
  scope,
  tagline,
  typedTitle,
  info,
  navLink,
  about,
  timeline,
  projects,
};
