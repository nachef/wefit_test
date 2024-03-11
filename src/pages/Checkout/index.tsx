import Header from "../../components/Header";
import NoContent from "../../components/NoContent";
import NoContentImage from "../../assets/images/checkout.svg";
import NoContentImageMobile from "../../assets/images/checkout-mobile.svg";
import { useRedirect } from "../../hooks/useRedirect";
import Container from "../../components/Container";

function Checkout() {
  //hooks do navigate para redirecionar para a home
  const { redirectToHome } = useRedirect();

  return (
    <Container>
      <Header title="WeMovies" />
      <NoContent
        title={"Compra realizada com sucesso!"}
        imageDesktop={NoContentImage}
        imageMobile={NoContentImageMobile}
        buttonTitle={"VOLTAR"}
        onButtonClick={redirectToHome}
      />
    </Container>
  );
}

export default Checkout;
