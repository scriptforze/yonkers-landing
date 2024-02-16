import { Typography } from "antd";
import styled from "styled-components";

export const RecommendedContainer = styled.div`
  flex-direction: column;
  margin-top: 32px;
  background: #e8e8e8;
  display: flex;
  justify-content: space-between;
  padding: 0px 24px;
  margin-bottom: 32px;
`;

export const RecommendedTitle = styled(Typography.Title)`
  color: #0f2555 !important;
  font-size: 38px !important;
  font-weight: 600 !important;
  margin-top: 38px !important;
  margin-bottom: 34px !important;
`;

export const RecommendedProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecommendedProductsCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding: 10px 20px 10px 20px;
`;
