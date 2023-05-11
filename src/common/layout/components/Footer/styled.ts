import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 11px 16px 22px;
  background-color: ${({ theme }) => theme.custom?.colors?.footer};
`;
