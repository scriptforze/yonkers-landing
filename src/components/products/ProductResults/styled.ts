import { Pagination, Typography } from "antd";
import React from "react";
import styled from "styled-components";

export const ProductResultsContainer = styled.section`
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
  grid-gap: 12px 8px;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 237px), 1fr));
  padding: 9px 16px;
  justify-items: center;
`;

export const ProductsPagination = styled(Pagination)`
  background-color: rgb(232, 232, 232);
  color: #212b36 !important;
  font-size: 16px;
  font-weight: 400;
  align-self: center;
  gap: 8px;
  border-radius: 4px;
  margin-top: 39px;
`;

export const TotalPaginationText = styled(Typography.Text)`
  color: #212b36;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-top: 31px;
  margin-bottom: 63px;
`;
