import * as C from "./styles";

interface ButtonProps {
  counter?: number;
  title?: string;
  width?: string;
  height?: string;
  color?: string;
  text?: string;
}

function Button({
  title,
  width = "auto",
  height = "auto",
  color = "",
}: ButtonProps) {
  return (
    <C.Button width={width} height={height} color={color} title={title}>
      {title}
    </C.Button>
  );
}

export default Button;
