import styled from "styled-components";

export const CountContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.max})`} {
    flex-direction: row;
  }
`;
