import {
  techtime,
  lernen,
  message,
  rayda,
  budget,
  babyme,
  artisto,
  imggen,
  google,
  mobile,
  backend,
  creator,
  web,
  dev,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  geeky,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "DeveloperSpace",
    icon: dev,
    iconBg: "#383E56",
    date: "Aug 2020 - Jan 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Assisted in the implementation of UI/UX designs provided by the design team.",
      "Troubleshot and resolved frontend issues reported by users.",
      "Developed and maintained internal tools and systems used by the company. ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Geeky Experts Ltd.",
    icon: geeky,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Creation of the no-leak asset integrity cloud application user interface.",
      "Implementation of mathematical relationships generated from the asset integrity theoretical concept into functional, readable codes. ",
      "Collaborating with the backend team on code integration. ",
      "Participated in the building, development of models and evaluation concepts for cloud-based asset integrity applications. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Richard is one of the most hardworking people i've ever seen.",
    name: "Mrs Nsaka",
    designation: "Vice President",
    company: "NEHS, Akwa Ibom",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He's a developer who truly cares about their clients' success.",
    name: "Mr Richard",
    designation: "HR",
    company: "Geeky Experts",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "He's a fast learner, working with him is easy as he grabs things very easily ",
    name: "Ahmed Adekunle",
    designation: "CEO",
    company: "A3 Construction",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Artisto",
    description:
      "Web-based platform that allows users to search different arts from all over the world, providing a musuem feeling for you at the cofort of your device.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: artisto,
    source_code_link: "https://github.com/MobolajiRichard/Frontend-Developer-test",
    web_link:"https://m-art-institute.netlify.app"
  },
  {
    name: "Tech-Time",
    description:
      "Web application that sources for young talents around the world, with the aim of nurturing, teaching and mentoring them to become one of the best in the world  .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: techtime,
    source_code_link: "https://github.com/MobolajiRichard/techtalent",
    web_link:"https://mobolaji-techtalent.netlify.app"
  },
  {
    name: "Voiced Budget Tracker",
    description:
      "This a simplified app to track your income and expenses by using speech",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "speechly",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: budget,
    source_code_link: "https://github.com/MobolajiRichard/budget_tracker",
    web_link:"https://voicedbudgettracker.netlify.app"
  },
  {
    name: "Lernen",
    description:
      "Website for a language learning institution based in Nigeria",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: lernen,
    source_code_link: "https://github.com/",
    web_link:"https://lernenplatz.netlify.app"
  },
  {
    name: "Image Generator",
    description:
      "This is an AI image generator web application, it allows users to generate images by text",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "open AI",
        color: "pink-text-gradient",
      },
    ],
    image: imggen,
    source_code_link: "https://github.com/MobolajiRichard/image_generator",
    web_link:"https://aiimagegenerator.netlify.app"
  },
  {
    name: "BabyMe",
    description:
      "This is an e-commerce web application that allows users to purchase baby products from the comfort of their home.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "speechly",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: babyme,
    source_code_link: "https://github.com/MobolajiRichard/babyMe---ecommerce",
    web_link:"https://babymee.netlify.app"
  },
  {
    name: "Auction",
    description:
      "This is an e-commerce web application that allows users to purchase baby products from the comfort of their home.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "speechly",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: rayda,
    source_code_link: "https://github.com/MobolajiRichard/rayda_test",
    web_link:"https://richard-rayda-test.netlify.app"
  },
  {
    name: "Message Me",
    description:
      "This is a clone of the whatsapp web application, it allows users who log in to website to send an receive messages just like they would on their normal whatsapp.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "speechly",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: message,
    source_code_link: "https://github.com/MobolajiRichard/MessagMe",
    web_link:"https://mmessageme.netlify.app"
  },
  {
    name: "Google Clone",
    description:
      "This is a clone of the popular search engine website Gogle, with all the search features included also using the google api.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "google api",
        color: "pink-text-gradient",
      },
    ],
    image: google,
    source_code_link: "https://github.com/MobolajiRichard/google__clone",
    web_link:"https://google-clone-ruddy-zeta.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
