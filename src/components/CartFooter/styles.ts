import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  height: 34px;
  align-items: center;
`;

export const FooterWrapper = styled.div`
  max-width: 197.26px;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const FooterText = styled.p`
  font-size: 14px;
  font-family: "Open Sans Bold";
  color: ${({ theme }) => theme.fonts.colors.secondary};
`;

export const Amount = styled.p`
  margin-left: 30px;
  font-size: 24px;
  font-family: "Open Sans Bold";
  color: ${({ theme }) => theme.fonts.colors.background};
`;
