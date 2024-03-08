import axios from "axios";

const api = {
  getProducts: async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      throw error;
    }
  },
};

export default api;
