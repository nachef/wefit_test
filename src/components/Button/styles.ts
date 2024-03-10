import styled from "styled-components";

interface ButtonProps {
  width: string;
  height: string;
  color: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 4px;
  padding: 8px;
  gap: 12px;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.fonts.colors.primary};
  font-size: 12px;
  cursor: pointer;
  font-family: "Open Sans Bold";
`;
