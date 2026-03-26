import { BallCanvas } from "./canvas";
import css from "../assets/images/tech/css.png";
import html from "../assets/images/tech/html.png";
import javascript from "../assets/images/tech/javascript.png";
import reactjs from "../assets/images/tech/reactjs.png";
import tailwind from "../assets/images/tech/tailwind.png";
import { SectionWrapper } from "../hoc";

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

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
