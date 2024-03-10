import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;

  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.fonts.colors.primary};
`;
