import {
    mobile,
    backend,
    creator,
    web,
    python,
    django,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    R,
    git,
    figma,
    bimally,
    gardenDesign,
    ecc,
    tripguide,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Data Analysis & Data Science",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
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
      name: "R", 
      icon: R
    },
    {
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [
    {
      title: "Junior Software Developer",
      company_name: "BIM ALLY",
      icon: bimally,
      iconBg: "#383E56",
      date: "July 2022 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [

  ];
  
  const projects = [
    {
      name: "Garden Design",
      description:
        "Modern garden arrangement web application that helps you plan and design your garden effortlessly.",
      tags: [
        {
          name: "HTML5",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gardenDesign,
      source_code_link: "https://github.com/uzdanska/giarddesign-UI",
    },
    {
      name: "Elliptic Curves over finite bodies",
      description:
        "Web application used for calculating the coordinates of points and generating a scatter plot of an elliptic curve over finite fields.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "streamlit",
          color: "green-text-gradient",
        },
        {
          name: "HTML&CSS",
          color: "pink-text-gradient",
        },
      ],
      image: ecc,
      source_code_link: "https://github.com/uzdanska/Krzywe-Eliptyczne/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };