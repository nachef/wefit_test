import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.fonts.colors.primary};
`;
