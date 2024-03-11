import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { useCart } from "../contexts/CartContext";
import MovieCard from "../components/MovieCard";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

jest.mock("../contexts/CartContext");
describe("MovieCard", () => {
  const movie = {
    id: 1,
    title: "Test Movie",
    price: 10,
    image: "test-image.jpg",
  };

  test("renders correctly", () => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems: [],
      addToCart: jest.fn(),
      isInCart: jest.fn(),
    });

    const { getByText, getByAltText } = render(
      <ThemeProvider theme={theme}>
        <MovieCard {...movie} />
      </ThemeProvider>
    );

    expect(getByText("Test Movie")).toBeInTheDocument();
    expect(getByText("R$ 10.00")).toBeInTheDocument();
    expect(getByAltText("Test Movie")).toHaveAttribute("src", "test-image.jpg");
  });

  test("adds movie to cart when 'ADICIONAR AO CARRINHO' button is clicked", () => {
    const addToCart = jest.fn();

    (useCart as jest.Mock).mockReturnValue({
      cartItems: [],
      addToCart,
      isInCart: jest.fn(),
    });

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MovieCard {...movie} />
      </ThemeProvider>
    );

    fireEvent.click(getByText("ADICIONAR AO CARRINHO"));

    expect(addToCart).toHaveBeenCalledWith({ ...movie, quantity: 1 });
  });

  test("updates counter when movie is in cart", () => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems: [{ ...movie, quantity: 2 }],
      addToCart: jest.fn(),
      isInCart: jest.fn(),
    });

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MovieCard {...movie} />
      </ThemeProvider>
    );

    expect(getByText("2")).toBeInTheDocument();
  });
});
