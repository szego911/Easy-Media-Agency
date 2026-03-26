import type { Service } from "../types";

import mobile from "../assets/images/services/mobile.png";
import creator from "../assets/images/services/creator.png";
import web from "../assets/images/services/web.png";

export const services: Service[] = [
  {
    title: "Weboldal készítés",
    icon: web,
  },
  {
    title: "Shopify webshop",
    icon: mobile,
  },
  {
    title: "Weboldal karbantartás",
    icon: creator,
  },
];
