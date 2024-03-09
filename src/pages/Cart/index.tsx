import CartContent from "../../components/CartContent";
import Header from "../../components/Header";
import * as C from "./styles";

function Cart() {
  return (
    <>
      <C.FullScreenContainer>
        <Header title="WeMovies" />
        <CartContent />
      </C.FullScreenContainer>
    </>
  );
}

export default Cart;
