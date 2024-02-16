import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 11px 16px 22px;
  background-color: ${({ theme }) => theme.custom?.colors?.footer};

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    padding: 62px 0px 22px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xxl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xxl?.min})`} {
    padding: 62px 121px 22px;
  }
`;

export const MainFooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    display: grid;
    padding: 0px 14px;
    justify-items: center;
    grid-template-rows: auto;
    grid-template-columns: 1fr 340px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xxl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xxl?.min})`} {
    padding: 0px;
  }
`;
