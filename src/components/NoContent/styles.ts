import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  padding-left: 40px;
  padding-right: 40px;
  max-width: 100%;
  font-family: "Open Sans Bold";
  font-size: 20px;
  text-align: center;
`;

export const Image = styled.img`
  margin-bottom: 24px;
  margin-top: 24px;
`;
