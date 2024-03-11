import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  margin: 0;

  &:disabled img {
    cursor: default;
    filter: grayscale(100%);
  }
`;

export const Input = styled.input`
  width: 59px;
  height: 26px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  text-align: center;
  margin: 0 11px;
  font-family: "Open Sans Regular";
  appearance: none;
  outline: none;
  box-shadow: none;

  @m /* Firefox */
  &::-moz-focus-inner {
    border: 0;
  }

  /* Safari e Chrome */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;
