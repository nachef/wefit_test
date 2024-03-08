import { useState, useEffect } from "react";
import Header from "../../components/Header";
import NoContent from "../../components/NoContent";
import * as C from "./styles";
import LoadingSpinner from "../../components/LoadingSpinner";
import api from "../../services/api";

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
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timer);
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
        <Header />
        {loading ? (
          <LoadingSpinner />
        ) : data.length == 0 ? (
          <NoContent />
        ) : (
          <div>
            {data.map((product) => (
              <div key={product.id}>{product.title}</div>
            ))}
          </div>
        )}
      </C.FullScreenContainer>
    </>
  );
}

export default Home;
