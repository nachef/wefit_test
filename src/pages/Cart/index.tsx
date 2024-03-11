import { useCart } from "../../contexts/CartContext";
import CartContent from "../../components/CartContent";
import NoContent from "../../components/NoContent";
import Header from "../../components/Header";
import NoContentImage from "../../assets/images/no-content-image.svg";
import NoContentImageMobile from "../../assets/images/no-content-mobile.svg";
import { useRedirect } from "../../hooks/useRedirect";
import Container from "../../components/Container";

function Cart() {
  const { cartItems } = useCart();
  //hooks do navigate para redirecionar para a home
  const { redirectToHome } = useRedirect();

  return (
    <Container>
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
    </Container>
  );
}

export default Cart;
