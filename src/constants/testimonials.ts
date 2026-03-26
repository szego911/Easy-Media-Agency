import type { Testimonial } from "../types";

import vitrinLogo from "../assets/images/logos/vitrinLogo.png";
import morasolarLogo from "../assets/images/logos/morasolarLogo.png";
import literaLogo from "../assets/images/logos/literaLogo.png";

export const testimonials: Testimonial[] = [
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
