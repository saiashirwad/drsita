import { cva, type VariantProps } from "class-variance-authority";
import type { Component, JSX } from "solid-js";

const button = cva(
  // Base styles
  "inline-flex items-center rounded-full px-6 py-2 text-base font-medium transition-colors",
  {
    variants: {
      color: {
        pine: "bg-pine hover:bg-pine/90 text-text",
        iris: "bg-iris hover:bg-iris/90 text-text",
        love: "bg-love hover:bg-love/90 text-text",
        gold: "bg-gold hover:bg-gold/90 text-text",
        foam: "bg-foam hover:bg-foam/90 text-text",
      },
      size: {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-8 py-3 text-lg",
      },
      variant: {
        solid: "",
        outline: "bg-transparent border-2",
        ghost: "bg-transparent hover:bg-surface",
      },
    },
    defaultVariants: {
      color: "pine",
      size: "md",
      variant: "solid",
    },
  }
);

interface Props extends VariantProps<typeof button> {
  href: string;
  children: JSX.Element;
  class?: string;
}

const Button: Component<Props> = (props) => {
  return (
    <a
      href={props.href}
      class={button({
        color: props.color,
        size: props.size,
        variant: props.variant,
        class: props.class,
      })}
    >
      {props.children}
    </a>
  );
};

export default Button; 