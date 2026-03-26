import { useEffect, useRef, useState, type ReactNode } from "react";

interface DeferredRenderProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeightClassName?: string;
  delay?: number;
}

const DeferredRender = ({
  children,
  fallback = null,
  rootMargin = "200px 0px",
  minHeightClassName,
  delay,
}: DeferredRenderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;

    if (typeof delay === "number") {
      const timeoutId = window.setTimeout(() => {
        setShouldRender(true);
      }, delay);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(currentContainer);

    return () => {
      observer.disconnect();
    };
  }, [delay, rootMargin, shouldRender]);

  return (
    <div ref={containerRef} className={minHeightClassName}>
      {shouldRender ? children : fallback}
    </div>
  );
};

export default DeferredRender;
