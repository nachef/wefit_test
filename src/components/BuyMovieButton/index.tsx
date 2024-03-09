import * as C from "./styles";
import { ButtonHTMLAttributes } from "react";
import BuyMovieIcon from "../../assets/icons/counter-card.svg";

export type ButtonProps = {
  counter?: number;
  title?: string;
  text?: string;
  onClick?: () => void;
  selected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function BuyMovieButton({
  counter = 0,
  title,
  onClick,
  selected = false,
}: ButtonProps) {
  return (
    <C.Button title={title} onClick={onClick} selected={selected}>
      <img src={BuyMovieIcon} alt="Buy Movie Icon" /> {counter}
      <C.Title>{title}</C.Title>
    </C.Button>
  );
}

export default BuyMovieButton;
