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
    id: "home",
    name: "Home",
  },
  {
    id: "resume",
    name: "Resume",
  },
  {
    id: "skills",
    name: "Skills",
  },
  {
    id: "projects",
    name: "Projects",
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
import cppLogo from "../assets/utilities/c++.png";
import dartLogo from "../assets/utilities/dart.png";
import javaLogo from "../assets/utilities/java.png";
import jsLogo from "../assets/utilities/js.png";
import photoshopLogo from "../assets/utilities/photoshop.png";
import premierLogo from "../assets/utilities/premier.png";
import pythonLogo from "../assets/utilities/python.png";
import illustratorLogo from "../assets/utilities/Illustrator.png";
import ndmuLogo from "../assets/utilities/NDMU.avif";
const logos = [
  animateLogo,
  cLogo,
  cppLogo,
  dartLogo,
  javaLogo,
  jsLogo,
  photoshopLogo,
  premierLogo,
  pythonLogo,
  illustratorLogo,
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

const projects = {
  projects: {},
};
export {
  person,
  scope,
  tagline,
  typedTitle,
  info,
  navLink,
  about,
  logos,
  timeline,
  projects,
};
