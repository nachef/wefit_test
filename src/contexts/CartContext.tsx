import { createContext, useState, useContext, ReactNode } from "react";

export type Movie = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type ICartContext = {
  cartItems: Movie[];
  addToCart: (movie: Movie) => void;
  updateMovieQuantity: (movieId: number, quantity: number) => void;
  removeFromCart: (movieId: number) => void;
  isInCart: (movieId: number) => boolean;
};

const CartContext = createContext<ICartContext | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Movie[]>([]);

  const addToCart = (movie: Movie) => {
    setCartItems((prevItems) => {
      const existingMovieIndex = prevItems.findIndex(
        (item) => item.id === movie.id
      );

      if (existingMovieIndex >= 0) {
        const newItems = [...prevItems];
        newItems[existingMovieIndex].quantity += movie.quantity;
        return newItems;
      } else {
        return [...prevItems, movie];
      }
    });
  };

  const updateMovieQuantity = (movieId: number, newQuantity: number) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      const existingMovieIndex = newItems.findIndex(
        (item) => item.id === movieId
      );

      if (existingMovieIndex >= 0) {
        newItems[existingMovieIndex].quantity = newQuantity;
      }

      return newItems;
    });
  };

  const removeFromCart = (movieId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== movieId)
    );
  };

  const isInCart = (movieId: number) => {
    return cartItems.some((item) => item.id === movieId);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateMovieQuantity,
        removeFromCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Function useCart must be used with a CartProvider");
  }
  return context;
};
