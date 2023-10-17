import styled from "styled-components";

export const CountContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;  

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.max})`} {
    gap: 13px;
    flex-direction: row;
  }
`;
