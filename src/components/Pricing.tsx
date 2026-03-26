import { FcInfo } from "react-icons/fc";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import type { PricingPackage } from "../types";

const packages: PricingPackage[] = [
  {
    name: "Wordpress",
    price: "100.000",
    monthlyPrice: 29,
    yearlyPrice: 199,
    description:
      "Rövid határidővel elkészített wordpress oldal egyedi design alapján. Ideális, ha egyszerű honlap kell kevés funkcióval. ",
    green: "/src/assets/green-dot.png",
    services: [
      "Tárhely és domain ügyintézés",
      "Folyamatos kapcsolattartás",
      "1 Bemutatkozó bemutatkozó oldal",
      "Egyedi design",
      "Mobilra is opitmalizált",
      "Képek optimalizálása",
      "Többféle céges email cím",
      "Fél év garancia",
      "Alap weboptimalizálás",
    ],
  },
  {
    name: "Egyedi",
    price: "150.000",
    monthlyPrice: 39,
    yearlyPrice: 399,
    description:
      "Egyedileg tervezett honlap, galériával, kapcsolati űrlappal és igény szerinti funkciókkal.",
    green: "/src/assets/green-dot.png",
    services: [
      "Tárhely és domain ügyintézés",
      "Folyamatos kapcsolattartás",
      "Kezdőoldal és 4 tartalmi oldal",
      "A forráskód a Te tulajdonod lesz",
      "Egyedi design",
      "Mobilra is opitmalizált",
      "Képek optimalizálása",
      "Többféle céges email cím",
      "Fél év garancia",
      "1 hónap karbantartás ingyen",
      "Beépített kapcsolati űrlap és térkép",
      "Alap weboptimalizálás",
      "Google Analitics beállítása",
      "Google Search Console beállítása",
    ],
  },
  {
    name: "Shopify",
    price: "150.000",
    monthlyPrice: 59,
    yearlyPrice: 599,
    description:
      "Shopify webshop felállítása. Ideális sajáttermékek eladásához, vagy akár dropshippinghez.",
    green: "/src/assets/green-dot.png",
    services: [
      "Tárhely és domain ügyintézés",
      "Folyamatos kapcsolattartás",
      "Kezdőoldal és 4 tartalmi oldal",
      "Egyedi design",
      "Online raktárkészlet",
      "20 termék feltöltése képekkel, leírással",
      "Fizetési rendszer beüzemelése",
      "Házhozszállítás beállítása",
      "Mobilra is opitmalizált",
      "Képek optimalizálása",
      "Többféle céges email cím",
      "Köremail előkészítése",
      "Fél év garancia",
      "1 hónap karbantartás ingyen",
      "Alap weboptimalizálás",
      "Google Analitics beállítása",
      "Google Search Console beállítása",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="py-10 md:px-14 p-4 max-w-screen-2xl mx-auto" id="arak">
      <div className="text-center">
        <h2 className="md:text-5xl text-2xl font-extrabold text-white-900 mb-2">
          Árlista
        </h2>
        <p className="text-secondary md:w-1/3 mx-auto"></p>
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-20 md:w-11/12 mx-auto"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-purple py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-center text-white">
              {pkg.name}
            </h3>
            <p className="text-secondary text-center my-6">
              {pkg.description}
            </p>
            <p className="mt-5 text-center text-white text-4xl font-bold">
              bruttó {pkg.price} Ft
            </p>

            <ul className="mt-4 space-y-2 px-4">
              {pkg.services.map((item) => (
                <li key={item} className="flex items-center">
                  <FcInfo className="mr-2 text-xl" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full mx-auto flex items-center justify-center mt-5">
              <button className="mt-6 text-white px-10 text-secondary py-2 border border-white hover:bg-secondary hover:text-white font-semibold rounded-lg">
                <a href="#contact">Vágjunk bele</a>
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
