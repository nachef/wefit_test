import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import Button from "../Button";
import * as C from "./styles";

function CardFooter() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <C.Footer>
      <Link to="/checkout">
        <Button
          width="173px"
          height="34px"
          color="#009EDD"
          title="FINALIZAR PEDIDO"
        />
      </Link>
      <C.FooterWrapper>
        <C.FooterText>TOTAL</C.FooterText>
        <C.Amount>R$ {total.toFixed(2)}</C.Amount>
      </C.FooterWrapper>
    </C.Footer>
  );
}

export default CardFooter;
