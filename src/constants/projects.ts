import type { Project } from "../types";

import vitrinbar from "../assets/images/projects/vitrinbar.jpg";
import easycatering from "../assets/images/projects/easy_catering.jpg";
import morasolar from "../assets/images/projects/morasolar.jpg";

export const projects: Project[] = [
  {
    name: "Vitrin Szeged koktélbár",
    description:
      "Ez a honlap a hely bemutatására jött létre. A vendégek az igényes képekből álló galéria és az érdekességek által ismerhetik meg a hely előnyeit.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
    ],
    image: vitrinbar,
    source_code_link: "https://vitrinszeged.hu/",
  },
  {
    name: "Mora Solar 88 Kft.",
    description:
      "Egy letisztult design segít a leendő ügyfeleknek eligazodni a cég szolgáltatásai között, valamint széleskörű betekintést ad a szakmai tudásról. ",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: morasolar,
    source_code_link: "https://morasolar.com/",
  },
  {
    name: "Easy Catering",
    description:
      "Példa egy catering cég egyszerű bemutatkozó honlapjára, ami segíti a leendő ügyfelek tájékozódását. ",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: easycatering,
    source_code_link: "https://easy-catering.netlify.app/",
  },
];
