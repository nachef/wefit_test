import Button from "../Button";
import * as C from "./styles";

function CardFooter() {
  return (
    <C.Footer>
      <Button
        width="173px"
        height="34px"
        color="#009EDD"
        title="FINALIZAR PEDIDO"
      />
      <C.FooterWrapper>
        <C.FooterText>TOTAL</C.FooterText>
        <C.Amount>R$ 29.90</C.Amount>
      </C.FooterWrapper>
    </C.Footer>
  );
}

export default CardFooter;
