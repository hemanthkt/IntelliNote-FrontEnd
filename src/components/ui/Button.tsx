import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  onClick: () => void;
  text: string;
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const defaultStyles =
  "rounded-md flex text-sm font-light font-sans items-center";

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-8",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{" "}
      {props.text} {props.endIcon}
    </button>
  );
};
