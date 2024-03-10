import { useEffect, useState } from "react";
import BuyMovieButton from "../BuyMovieButton";
import * as C from "./styles";
import { useCart } from "../../contexts/CartContext";

interface MovieProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

function MovieCard({ id, title, price, image }: MovieProps) {
  const { addToCart, isInCart, cartItems } = useCart();
  const movieInCart = cartItems.find((movie) => movie.id === id);
  const initialCounter = movieInCart ? movieInCart.quantity : 0;
  const [counter, setCounter] = useState(initialCounter);
  const [isSelected, setIsSelected] = useState(isInCart(id));

  useEffect(() => {
    const updatedMovieInCart = cartItems.find((movie) => movie.id === id);
    if (updatedMovieInCart) {
      setCounter(updatedMovieInCart.quantity);
    }
  }, [cartItems, id]);

  const handleBuyMovie = () => {
    setIsSelected(true);
    addToCart({ id, title, price, image, quantity: 1 });
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
        onClick={handleBuyMovie}
        counter={counter}
        selected={isSelected}
        id={String(id)}
        disabled={counter >= 5}
      />
    </C.Container>
  );
}

export default MovieCard;
