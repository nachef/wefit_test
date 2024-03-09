import CardFooter from "../CartFooter";
import InputRange from "../InputRange";
import * as C from "./styles";
import TrashIcon from "../../assets/icons/trash.svg";

function CartContent() {
  return (
    <C.Container>
      <C.Header>
        <C.Text>PRODUTO</C.Text>
        <C.Text>QTD</C.Text>
        <C.Text>SUBTOTAL</C.Text>
      </C.Header>
      <C.MovieInfo>
        <C.MovieSection>
          <C.ImageSection src="https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png" />
          <C.Label>
            <C.Title>Shang Shi</C.Title>
            <C.MovieAmount>R$ 29.90</C.MovieAmount>
          </C.Label>
        </C.MovieSection>
        <InputRange />
        <C.Amount>R$ 29.90</C.Amount>
        <C.TrashButton>
          <img src={TrashIcon} alt="Trash" />
        </C.TrashButton>
      </C.MovieInfo>
      <C.Separator />
      <CardFooter />
    </C.Container>
  );
}

export default CartContent;
