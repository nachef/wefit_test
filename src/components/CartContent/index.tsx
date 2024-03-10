import CardFooter from "../CartFooter";
import InputRange from "../InputRange";
import * as C from "./styles";
import TrashIcon from "../../assets/icons/trash.svg";
import { useCart } from "../../contexts/CartContext";

function CartContent() {
  const { cartItems, updateMovieQuantity, removeFromCart } = useCart();

  return (
    <C.Container>
      <C.Header>
        <C.Text>PRODUTO</C.Text>
        <C.Text>QTD</C.Text>
        <C.Text>SUBTOTAL</C.Text>
      </C.Header>
      {cartItems.map((movie) => (
        <C.MovieInfo key={movie.id}>
          <C.MovieSection>
            <C.ImageSection src={movie.image} />
            <C.Label>
              <C.Title>{movie.title}</C.Title>
              <C.MovieAmount>R$ {movie.price.toFixed(2)}</C.MovieAmount>
            </C.Label>
          </C.MovieSection>
          <InputRange
            value={movie.quantity}
            onValueChange={(newValue) =>
              updateMovieQuantity(movie.id, newValue)
            }
          />
          <C.Amount>R$ {(movie.price * movie.quantity).toFixed(2)}</C.Amount>
          <C.TrashButton onClick={() => removeFromCart(movie.id)}>
            <img src={TrashIcon} alt="Trash" />
          </C.TrashButton>
        </C.MovieInfo>
      ))}
      <C.Separator />
      <CardFooter />
    </C.Container>
  );
}

export default CartContent;
