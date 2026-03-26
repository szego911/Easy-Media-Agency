import { motion } from "framer-motion";

import { styles } from "../assets/styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants/testimonials";

import type { Testimonial } from "../types";

interface FeedbackCardProps extends Testimonial {
  index: number;
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  web,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">-</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation}, {company}
          </p>
        </div>
        <a href={web}>
          <img
            src={image}
            alt={`feedback_by-${name}`}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="w-10 h-10 rounded-full object-cover"
          />
        </a>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Akivel eddig dolgoztam</p>
          <h2 className={styles.sectionHeadText}>Vélemények.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
