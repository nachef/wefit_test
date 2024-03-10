import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 338.67px;
  border-radius: 4px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 147px;
  height: 188px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Open Sans Bold";
  font-size: 12px;
  text-align: center;
  color: ${({ theme }) => theme.fonts.colors.tertiary};
`;

export const Price = styled.p`
  font-family: "Open Sans Bold";
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
  margin-top: -2px;
  margin-bottom: 8px;
`;
