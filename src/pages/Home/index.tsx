import { useState, useEffect } from "react";
import Header from "../../components/Header";
import NoContent from "../../components/NoContent";
import LoadingSpinner from "../../components/LoadingSpinner";
import api from "../../services/api";
import MoviesContent from "../../components/MoviesContent";
import NoContentImage from "../../assets/images/no-content-image.svg";
import NoContentImageMobile from "../../assets/images/no-content-mobile.svg";
import Container from "../../components/Container";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseData = await api.getProducts();
      setData(responseData);
      setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 segundos de timeout apenas para simular o carregamento de dados
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header title="WeMovies" />
      {loading ? (
        <LoadingSpinner />
      ) : data.length == 0 ? (
        <NoContent
          title={"Parece que não há nada por aqui :("}
          imageDesktop={NoContentImage}
          imageMobile={NoContentImageMobile}
          buttonTitle={"Recarregar página"}
          onButtonClick={() => window.location.reload()}
        />
      ) : (
        <MoviesContent movies={data} />
      )}
    </Container>
  );
}

export default Home;
