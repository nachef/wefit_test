import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 24px;
  border-radius: 4px;
  margin: 0 auto;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: "Open Sans Bold";
  color: ${({ theme }) => theme.fonts.colors.secondary};
  flex: 1;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MovieSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const MovieAmount = styled.a`
  font-size: 16px;
  font-family: "Open Sans Bold";
  color: ${({ theme }) => theme.colors.background};
`;

export const TrashButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const ImageSection = styled.img`
  width: 91px;
  height: 114px;
`;

export const Title = styled.a`
  font-size: 14px;
  font-family: "Open Sans Bold";
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 8px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  margin: 0;
  background-color: ${({ theme }) => theme.fonts.colors.secondary};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterWrapper = styled.div`
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
  font-size: 16px;
  font-family: "Open Sans Bold";
  color: ${({ theme }) => theme.colors.background};
  margin-left: auto;
  flex: 1;
`;
