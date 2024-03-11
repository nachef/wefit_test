import * as C from "./styles";
import React, { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  counter?: number;
  title?: string;
  width?: string;
  height?: string;
  color?: string;
  text?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  title,
  width = "100%",
  height = "40px",
  color = "",
  onClick,
}: ButtonProps) {
  return (
    <C.Button
      width={width}
      height={height}
      color={color}
      title={title}
      onClick={onClick}
    >
      {title}
    </C.Button>
  );
}

export default Button;
