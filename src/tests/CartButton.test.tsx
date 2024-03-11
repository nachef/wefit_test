import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useCart } from "../contexts/CartContext";
import CartButton from "../components/CartButton";
import { theme } from "../styles/theme";
import "@testing-library/jest-dom";

jest.mock("../contexts/CartContext");

describe("CartButton", () => {
  test("displays the correct total quantity", () => {
    const mockCartItems = [
      {
        id: 1,
        title: "Test Movie 1",
        price: 10,
        image: "test-image.jpg",
        quantity: 2,
      },
      {
        id: 2,
        title: "Test Movie 2",
        price: 15,
        image: "test-image2.jpg",
        quantity: 3,
      },
    ];

    (useCart as jest.Mock).mockReturnValue({
      cartItems: mockCartItems,
    });

    const { getByText } = render(
      <Router>
        <ThemeProvider theme={theme}>
          <CartButton />
        </ThemeProvider>
      </Router>
    );

    expect(getByText("5 itens")).toBeInTheDocument();
  });
});
