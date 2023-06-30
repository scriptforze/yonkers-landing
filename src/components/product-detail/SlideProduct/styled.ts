import styled from "styled-components";

export const Section = styled.section`
  gap: 144px;
  display: flex;
  padding: 64px 24px;
  flex-direction: row;
  justify-content: center;

  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (max-width: ${theme.custom?.breakpoints?.md?.max})`} {
    align-items: center;
    flex-direction: column;
  }
`;
