import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 0px 16px 11px;
  background-color: ${({ theme }) => theme.custom?.colors?.primary};

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    padding: 36px 16px 37px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    padding: 36px 118px 37px;
  }
`;
