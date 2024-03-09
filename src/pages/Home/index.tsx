import { useState, useEffect } from "react";
import Header from "../../components/Header";
import NoContent from "../../components/NoContent";
import * as C from "./styles";
import LoadingSpinner from "../../components/LoadingSpinner";
import api from "../../services/api";
import MoviesContent from "../../components/MoviesContent";

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
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <C.FullScreenContainer>
        <Header title="WeMovies" />
        {loading ? (
          <LoadingSpinner />
        ) : data.length == 0 ? (
          <NoContent title={"Parece que não há nada por aqui :("} />
        ) : (
          <MoviesContent movies={data} />
        )}
      </C.FullScreenContainer>
    </>
  );
}

export default Home;
