import {
  lazy,
  Suspense,
  useState,
  useRef,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { motion } from "framer-motion";

import { styles } from "../assets/styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import DeferredRender from "./DeferredRender";

import type { ContactForm } from "../types";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { default: emailjs } = await import("@emailjs/browser");

      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Easy Media Agency",
          from_email: form.email,
          to_email: "info@easymediaagency.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      alert("Üzenet elküldve, hamarosan válaszolunk!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: unknown) {
      setLoading(false);
      console.error("EmailJS error:", error);
      alert("Valami hiba történt.");
    }
  };

  return (
    <div
      id="contact"
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Ingyenes konzultációért írj emailt!
        </p>
        <h3 className={styles.sectionHeadText}>Kapcsolat.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Név</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              placeholder="Mi a neved?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="Mi az email címed?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Üzenet</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Miben segíthetek Neked?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Küldés..." : "Elküld"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <DeferredRender
          rootMargin="300px 0px"
          minHeightClassName="h-full"
          fallback={<div className="h-full rounded-2xl bg-tertiary/30" aria-hidden="true" />}
        >
          <Suspense fallback={<div className="h-full rounded-2xl bg-tertiary/30" aria-hidden="true" />}>
            <EarthCanvas />
          </Suspense>
        </DeferredRender>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
