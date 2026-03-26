import { lazy, Suspense } from "react";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  Footer,
} from "./components";
import DeferredRender from "./components/DeferredRender";
import Pricing from "./components/Pricing";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Pricing />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <DeferredRender
            rootMargin="400px 0px"
            minHeightClassName="absolute inset-0 z-[-1]"
            fallback={<div className="absolute inset-0 z-[-1]" aria-hidden="true" />}
          >
            <Suspense fallback={<div className="absolute inset-0 z-[-1]" aria-hidden="true" />}>
              <StarsCanvas />
            </Suspense>
          </DeferredRender>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
