import { createGlobalStyle } from "styled-components";
import OpenSansRegular from "../fonts/OpenSans-Regular.ttf";
import OpenSansSemiBold from "../fonts/OpenSans-SemiBold.ttf";
import OpenSansBold from "../fonts/OpenSans-Bold.ttf";
import OpenSansExtraBold from "../fonts/OpenSans-ExtraBold.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans Regular';
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSansRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Open Sans Bold';
    font-style: normal;
    font-weight: 700;
    src: url(${OpenSansBold}) format('truetype');
  }

  @font-face {
    font-family: 'Open Sans Extra Bold';
    font-style: normal;
    font-weight: 800;
    src: url(${OpenSansExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'Open Sans Semi Bold';
    font-style: normal;
    font-weight: 600;
    src: url(${OpenSansSemiBold}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyles;
