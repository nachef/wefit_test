import * as C from "./styles";
import CartIcon from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

function CartButton() {
  const { cartItems } = useCart();

  return (
    <C.Container>
      <C.Label>
        <C.Text>Meu Carrinho</C.Text>
        <C.Counter>{cartItems.length} itens</C.Counter>
      </C.Label>
      <Link to="/carrinho">
        <C.Icon>
          <img src={CartIcon} alt="Cart" />
        </C.Icon>
      </Link>
    </C.Container>
  );
}

export default CartButton;
