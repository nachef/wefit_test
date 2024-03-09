// styles.ts
import styled from "styled-components";

interface ButtonProps {
  selected?: boolean;
}
export const Button = styled.button<ButtonProps>`
  width: 280px;
  height: 40px;
  border: none;
  border-radius: 4px;
  padding: 8px;
  gap: 12px;
  background-color: ${({ selected }) => (selected ? "#039B00" : "#009EDD")};
  color: ${({ theme }) => theme.fonts.colors.primary};
  font-size: 12px;
  cursor: pointer;
  font-family: "Open Sans Bold";
`;

export const Title = styled.span`
  margin-left: 12px;
  font-family: "Open Sans Bold";
  font-size: 12px;
`;
