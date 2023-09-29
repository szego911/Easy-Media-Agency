import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    meta,
    starbucks,
    szte,
    tesla,
    shopify,
    carrent,
    vitrinbar,
    jobit,
    catering,
    todoapp, 
    tripguide,
    threejs,
    logo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Rólunk",
    },
    {
      id: "work",
      title: "Projektek",
    },
    {
      id: "contact",
      title: "Kapcsolat",
    },
  ];
  
  const services = [
    {
      title: "Weboldal készítés",
      icon: web,
    },
    {
      title: "Shopify webshop",
      icon: mobile,
    },
    {
      title: "Brandépítés",
      icon: backend,
    },
    {
      title: "Grafika tervezés",
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
      title: "Mérnökinfo hallgató",
      company_name: "Szegedi Tudomány Egyetem",
      icon: szte,
      iconBg: "#212a43",
      date: "2022 Szeptember - 2026 Január",
      points: [
        "A Szegedi Tudomány Egyetem hallgatója vagyok mérnökinformatikus szakon 2022 szeptember óta.",
        "Tanulmányaim alatt több programozási nyelvvel is megismerkedtem, mint a C, Python, Java, és Php.",
        "Ezenkívül webtervezést is tanultam, ahol a HTML, CSS, Php és Javascript nyelveket is alaposan megtanultam",
        "Szabadidőmben saját honlapokat készítek például React, Tailwind és Threejs segítségével, hogy fejlesszem a tudásom.",
      ],
    },
    {
      title: "Weboldal készítés",
      company_name: "Easy Media Agency",
      icon: logo,
      iconBg: "#FF4A3F",
      date: "2023 Március óta",
      points: [
        "Weboldal készítés személyreszabva. Landing page, portfolio és termékbemutató oldalakat készítek ",
        "Az igényes, modern és mobilbarát honlap nálunk az alap, inneltől csak a Te igényeid szablyák meg a végeredményt.",
        "A pulikálást és a keresőoptimalizálást is vállalom, hogy zökkenőmentesen induljon a minden.",
        "Nagy terjedelmű galéria, információs kártyák, térkép vagy közvetlen üzenet a weboldalról? Sima ügy!",
      ],
    },
    /*{
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Kis Béla",
      designation: "CEO",
      company: "R-Gastro Kft.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Vitrin Szeged koktélbár",
      description:
        "Ez a honlap a hely bemutatására jött létre. A vendégek az igényes képekből álló galéria és az érdekességek által ismerhetik meg a hely előnyeit.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: vitrinbar,
      source_code_link: "https://vitrinszeged.hu/",
    },
    {
      name: "Easy Catering",
      description:
        "A honlap galériáján végig lapozva bepillantást nyerhetünk a rendezvényekre, valamint emailt is küldhetünk egyenesen az oldalról. ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: catering,
      source_code_link: "https://easy-catering.netlify.app/",
    },
    {
      name: "To Do app",
      description:
        "Ez az applikáció egy egyetemi projekt munka volt, tartalmaz felhasználó regisztrációt, felhasználói jogusultságokat valamint a teendőinket is felírhatjuk vagy módosíthatjuk.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: todoapp,
      source_code_link: "https://github.com/Patrik119HUN/ToDo-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };