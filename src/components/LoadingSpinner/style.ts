import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Icon = styled.div`
  width: 62.25px;
  height: 62.25px;
  padding-top: 40px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  img {
    animation: ${spin} 2s linear infinite;
  }
`;
