import { createGlobalStyle } from "styled-components";
import OpenSansRegular from "../fonts/OpenSans-Regular.ttf";
import OpenSansSemiBold from "../fonts/OpenSans-SemiBold.ttf";
import OpenSansMedium from "../fonts/OpenSans-Medium.ttf";
import OpenSansBold from "../fonts/OpenSans-Bold.ttf";
import OpenSansExtraBold from "../fonts/OpenSans-ExtraBold.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSansRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600; 
    src: url(${OpenSansMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${OpenSansBold}) format('truetype');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800; /* Defina o peso da fonte Extra Bold */
    src: url(${OpenSansExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600; /* Defina o peso da fonte Semi Bold */
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
