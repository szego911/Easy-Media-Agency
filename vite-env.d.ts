/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_EMAILJS_SERVICE_ID: string;
  readonly VITE_APP_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_APP_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.gltf" {
  const content: string;
  export default content;
}

declare module "react-tilt" {
  import { ComponentType, HTMLAttributes } from "react";
  interface TiltOptions {
    max?: number;
    scale?: number;
    speed?: number;
    perspective?: number;
    transition?: boolean;
    axis?: "X" | "Y" | null;
    reset?: boolean;
    easing?: string;
  }
  interface TiltProps extends HTMLAttributes<HTMLDivElement> {
    options?: TiltOptions;
    className?: string;
    children?: React.ReactNode;
  }
  export const Tilt: ComponentType<TiltProps>;
}

declare module "react-vertical-timeline-component" {
  import { ComponentType, CSSProperties, ReactNode } from "react";
  interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: "1-column" | "1-column-left" | "2-columns";
    lineColor?: string;
    children?: ReactNode;
  }
  interface VerticalTimelineElementProps {
    className?: string;
    contentArrowStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: CSSProperties;
    position?: string;
    style?: CSSProperties;
    textClassName?: string;
    visible?: boolean;
    children?: ReactNode;
  }
  export const VerticalTimeline: ComponentType<VerticalTimelineProps>;
  export const VerticalTimelineElement: ComponentType<VerticalTimelineElementProps>;
}
