import { useState } from "react";
import BuyMovieButton from "../BuyMovieButton";
import * as C from "./styles";

interface MovieProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

function MovieCard({ id, title, price, image }: MovieProps) {
  const [counter, setCounter] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
    setCounter(counter + 1);
    console.log("Movie ID:", id);
  };

  return (
    <C.Container>
      <C.ImageSection>
        <C.Image src={image} alt={title} />
      </C.ImageSection>
      <C.Label>
        <C.Title>{title}</C.Title>
        <C.Price>R$ {price.toFixed(2)}</C.Price>
      </C.Label>
      <BuyMovieButton
        title="ADICIONAR AO CARRINHO"
        onClick={handleClick}
        counter={counter}
        selected={isSelected}
        id={String(id)}
      />
    </C.Container>
  );
}

export default MovieCard;
