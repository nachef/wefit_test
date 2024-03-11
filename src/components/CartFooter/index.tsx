import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import useResponsive from "../../hooks/useResponsive";
import * as C from "./styles";

function CardFooter() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const redirectToCheckout = () => {
    navigate("/checkout");
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <C.Footer>
      <C.CustomButton
        width={isMobile ? "100%" : "173px"}
        height="34px"
        color="#009EDD"
        title="FINALIZAR PEDIDO"
        onClick={redirectToCheckout}
      />
      <C.FooterWrapper>
        <C.FooterText>TOTAL</C.FooterText>
        <C.Amount>R$ {total.toFixed(2)}</C.Amount>
      </C.FooterWrapper>
    </C.Footer>
  );
}

export default CardFooter;
