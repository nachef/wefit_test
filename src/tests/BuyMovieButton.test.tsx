import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import BuyMovieButton from "../components/BuyMovieButton";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

describe("BuyMovieButton", () => {
  it("renders the button with the correct text", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <BuyMovieButton title="Comprar" disabled={false} />
      </ThemeProvider>
    );
    expect(getByText("Comprar")).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <BuyMovieButton
          title="Comprar"
          onClick={handleClick}
          disabled={false}
        />
      </ThemeProvider>
    );
    fireEvent.click(getByText("Comprar"));
    expect(handleClick).toHaveBeenCalled();
  });
});
