import styled from "styled-components";
import { Pagination, Typography } from "antd";

export const ProductResultsContainer = styled.section`
  flex: auto;
  display: flex;
  flex-direction: column;
`;

export const ProductResultsControls = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

export const ProductsResultsCards = styled.div`
  display: grid;
  padding: 9px 16px;
  grid-gap: 12px 8px;
  justify-items: center;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 237px), 1fr));
`;

export const ProductsPagination = styled(Pagination)`
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  align-self: center;
  border-radius: 4px;
  color: #212b36 !important;
  background-color: rgb(232, 232, 232);

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    margin: 0;
  }
`;

export const TotalPaginationText = styled(Typography.Text)`
  color: #212b36;
  font-size: 14px;
  font-weight: 400;
  margin-top: 31px;
  text-align: center;
  margin-bottom: 63px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    margin: 0;
  }
`;

export const ProductsPaginationContainer = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    flex-direction: row-reverse;
  }
`;
