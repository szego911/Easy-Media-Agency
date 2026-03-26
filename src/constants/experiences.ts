import type { Experience } from "../types";

import logo from "../assets/svg/logo.svg";
import shopify from "../assets/images/company/shopify.png";
import grafika from "../assets/images/company/grafika.png";

export const experiences: Experience[] = [
  {
    title: "Honlap készítés",
    company_name: "1-3 hét",
    icon: logo,
    iconBg: "#FF4A3F",
    date: "",
    points: [
      "Egy jó weboldal nagy szerepet játszik egy vállalkozás életében, segít az új ügyfelek elérésében.",
      "Egyedi és vonzó weboldalak tervezése, amelyek tükrözik vállalkozásod arculatát és passzolnak az igényeidhez.",
      "Email küldés az oldalról, galéria és interaktív elemek színesíthetik a vállalkozásodat bemutató honlapot.",
      "Weboldal keresőoptimalizálása (SEO) és folyamatos karbantartása, hogy mindig naprakész és könnyen megtalálható legyen.",
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
  {
    title: "Weboldal karbantartás",
    company_name: "Igény szerint",
    icon: grafika,
    iconBg: "#47b39d",
    date: "",
    points: [
      "Ha már van honlapod, de fejlesztenél rajta",
      "Gyors és hatékony megoldások technikai problémák esetén, a weboldal zavartalan működéséért.",
      "A weboldal sebességének és teljesítményének folyamatos monitorozása és javítása a jobb felhasználói élmény érdekében.",
    ],
  },
];
