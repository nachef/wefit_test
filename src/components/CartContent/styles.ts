import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 4px;
  margin: 0 auto;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 25% 32.5% 32.5% 5%;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 4px;
`;

export const MovieInfo = styled.div`
  display: grid;
  grid-template-columns: 25% 65% 5%;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 70vw auto;
    align-items: flex-start;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: "Open Sans Bold";
  color: ${({ theme }) => theme.fonts.colors.secondary};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const MovieSection = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MovieAmount = styled.a`
  font-size: 16px;
  font-family: "Open Sans Bold";
  color: ${({ theme }) => theme.colors.background};
`;

export const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  margin-left: auto;
  background-color: transparent;
  cursor: pointer;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
  }
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

export const Amount = styled.p`
  margin-left: 10px;
  font-size: 16px;
  font-family: "Open Sans Bold";
  color: ${({ theme }) => theme.colors.background};
  white-space: nowrap;
`;

export const SubtotalText = styled.p`
  font-size: 12px;
  margin-bottom: 2px;
  font-family: "Open Sans Bold";
  color: ${({ theme }) => theme.fonts.colors.secondary};
`;

export const LabelWrapper = styled.div`
  width: 100%;
  margin-left: 16px;
`;
