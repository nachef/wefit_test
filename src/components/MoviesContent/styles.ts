import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  border-radius: 4px;
  box-sizing: border-box;
  gap: 16px;

  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
