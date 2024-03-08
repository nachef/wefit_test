import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 75vh;
  margin: 0 auto;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.fonts.colors.primary};
`;
