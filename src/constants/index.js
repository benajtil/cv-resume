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
];

export { person, scope, tagline, typedTitle, info, navLink, about, logos };
