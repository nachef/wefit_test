import CardFooter from "../CartFooter";
import InputRange from "../InputRange";
import * as C from "./styles";
import TrashIcon from "../../assets/icons/trash.svg";
import { useCart } from "../../contexts/CartContext";
import useResponsive from "../../hooks/useResponsive";

function CartContent() {
  const { cartItems, updateMovieQuantity, removeFromCart } = useCart();
  const { isMobile } = useResponsive();
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
            <C.InfoWrapper>
              <C.ImageSection src={movie.image} />
              <C.LabelWrapper>
                <C.Label>
                  <C.Title>{movie.title}</C.Title>
                  <C.MovieAmount>R$ {movie.price.toFixed(2)}</C.MovieAmount>
                </C.Label>
                {isMobile && (
                  <C.ContentWrapper>
                    <InputRange
                      value={movie.quantity}
                      onValueChange={(newValue) =>
                        updateMovieQuantity(movie.id, newValue)
                      }
                    />
                    <C.Amount>
                      <C.SubtotalText>SUBTOTAL</C.SubtotalText>
                      R$ {(movie.price * movie.quantity).toFixed(2)}
                    </C.Amount>
                  </C.ContentWrapper>
                )}
              </C.LabelWrapper>
            </C.InfoWrapper>
          </C.MovieSection>
          {!isMobile && (
            <C.ContentWrapper>
              <InputRange
                value={movie.quantity}
                onValueChange={(newValue) =>
                  updateMovieQuantity(movie.id, newValue)
                }
              />
              <C.Amount>
                R$ {(movie.price * movie.quantity).toFixed(2)}
              </C.Amount>
            </C.ContentWrapper>
          )}
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
