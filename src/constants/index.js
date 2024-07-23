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
  grafika,
  coca,
  morasolar,
  starbucks,
  tesla,
  shopify,
  vitrinbar,
  todoapp,
  tripguide,
  threejs,
  logo,
  vitrinLogo,
  literaLogo,
  morasolarLogo,
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
    id: "arak",
    title: "Árak",
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
  /*{
      title: "Brandépítés",
      icon: backend,
    },*/
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
];

const experiences = [
  {
    title: "Honlap készítés",
    company_name: "1-3 hét",
    icon: logo,
    iconBg: "#FF4A3F",
    date: "",
    points: [
      "Egy jó weboldal nagy szerepet játszik egy vállalkozás életében.",
      "Ezért fontos, hogy neked is a legjobb honlapod legyen, ami segít az új ügyfelek elérésében.",
      "Mi segíthetünk olyan oldalt készíteni, ami passzol az igényeidhez és felhasználóbarát.",
      "Email küldés az oldalról, galéria és interaktív elemek színesíthetik a vállalkozásodat bemutató honlapot.",
    ],
  },
  {
    title: "Shopify webshop",
    company_name: "Pár nap - 2 hét",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "A droppshipping üzleti modell előnye, hogy nem kell raktárkészletet tartanunk, mivel a termék a gyártótól egyenesen a vevőhöz megy.",
      "Ezt egy Shopify webshopon lehet megoldani, ami képes a vásárlási folyamatot lebonyolítani.",
      "Ilyen webshopot létrehozni azért célszerú, amivel könnyű statisztikát készítni a vásárlásokról.",
      "Tökéletes megoldás egy kezdő vállalkozás beindításához, mivel gyorsan és egyszerűen használható.",
    ],
  },
  /* {
      title: "Brand építés",
      company_name: "",
      icon: coca,
      iconBg: "#E41E2B",
      date: "",
      points: [
        "A jól felépített és megtervezett honlap önmagában nem elég.",
        "Egy vállalkozás akkor lesz sikeres, ha minél többen érnek el hozzá.",
        "Ezért fontos a brand építés, ahol a cégről kialakult képet tudjuk alakítani. ",
        "Ez a folyamat tervezést és odafigyelést igényel, bízd ránk a brand-ed és válj sikeressé.",
      ],
    },*/
  {
    title: "Grafika tervezés",
    company_name: "1-2 hét",
    icon: grafika,
    iconBg: "#47b39d",
    date: "",
    points: [
      "Az igényes grafika emeli egy vállalkozás profiljának minőségét. ",
      "Például az egységes design segít abban, hogy egy honlapot könnyen megjegyezzenek és újra felkeressék.",
      "Nálunk biztos lehetsz abban, hogy a neked megfelelő stílust fogod kapni.",
      "Legyen Tiéd a legfigyelemfelkeltőbb grafika, amit a honlapodon és a közzösségi médián is használhatsz.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Az új honlap sokkal modernebb és átláthatóbb. A kommunikáció egyszerű volt és gyorsan elkészült a projekt. Köszönjük!",
    name: "Németh Anita",
    designation: "Üzletvezető",
    company: "Vitrin Szeged",
    image: vitrinLogo,
    web: "https://vitrinszeged.hu/",
  },
  {
    testimonial:
      "A folyamatos egyeztetéseknek hála sikerült olyan oldalt készíteni, ami szuperül bemutatja, hogy mivel foglalkozunk. Így egyszerűbb is lett az ügyfél szerzés is! ",
    name: "Nagy Róbert",
    designation: "Tulajdonos",
    company: "Mora Solar 88 Kft.",
    image: morasolarLogo,
    web: "https://morasolar.com/",
  },
  {
    testimonial:
      "A konzultációk után sikerült a weboldalt optimalizálni és jó pár hibát kijavítani. Az oldal felkeresések is nőttek ez által. ",
    name: "Csejdy András",
    designation: "Ügyvezető",
    company: "Litera.hu Kft.",
    image: literaLogo,
    web: "https://litera.hu/",
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
    name: "Mora Solar 88 Kft.",
    description:
      "Egy letisztult design segít a leendő ügyfeleknek eligazodni a cég szolgáltatásai között, valamint széleskörű betekintést ad a szakmai tudásról. ",
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
    image: morasolar,
    source_code_link: "https://morasolar.com/",
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
