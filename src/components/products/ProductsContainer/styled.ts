import { Typography } from "antd";
import styled from "styled-components";

export const ProductsContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px;
  gap: 10px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    padding: 21px 120px;
  }
`;
export const ProductsTitle = styled(Typography.Title)`
  color: #172d5e !important ;
  font-size: 18px;
  font-weight: 600;
`;

export const ProductsContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    gap: 33px;
    flex-direction: row;
  }
`;
