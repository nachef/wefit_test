import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4px;
`;

export const Icon = styled.div`
  cursor: pointer;
  padding-left: 8px;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.fonts.colors.primary};
  font-family: "Open Sans Semi Bold";
  width: 95.95px;
  font-size: 14px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Counter = styled.div`
  align-self: self-end;
  color: ${({ theme }) => theme.fonts.colors.secondary};
  font-family: "Open Sans Semi Bold";
  height: 19px;
  font-size: 12px;
`;
