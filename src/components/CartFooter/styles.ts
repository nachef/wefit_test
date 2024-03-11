import styled from "styled-components";
import Button from "../Button";

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 34px;
  padding: 0;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    height: 88px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
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

export const CustomButton = styled(Button)`
  width: 173px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
