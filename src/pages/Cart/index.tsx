import { useCart } from "../../contexts/CartContext";
import CartContent from "../../components/CartContent";
import NoContent from "../../components/NoContent";
import Header from "../../components/Header";
import * as C from "./styles";
import NoContentImage from "../../assets/images/no-content-image.png";
import NoContentImageMobile from "../../assets/images/no-content-mobile.png";
import { useRedirect } from "../../hooks/useRedirect";

function Cart() {
  const { cartItems } = useCart();
  //hooks do navigate para redirecionar para a home
  const { redirectToHome } = useRedirect();

  return (
    <>
      <C.FullScreenContainer>
        <Header title="WeMovies" />
        {cartItems.length > 0 ? (
          <CartContent />
        ) : (
          <NoContent
            title={"Parece que não há nada por aqui :("}
            imageDesktop={NoContentImage}
            imageMobile={NoContentImageMobile}
            buttonTitle={"VOLTAR"}
            onButtonClick={redirectToHome}
          />
        )}
      </C.FullScreenContainer>
    </>
  );
}

export default Cart;
