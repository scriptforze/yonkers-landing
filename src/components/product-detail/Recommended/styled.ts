import { Typography } from "antd";
import styled from "styled-components";

export const RecommendedContainer = styled.div`
  flex-direction: column;
  margin-top: 32px;
  background: #e8e8e8;
  display: flex;
  justify-content: space-between;
`;

export const RecommendedTitle = styled(Typography)`
  color: "#172D5E";
  font-weight: 600;
  font-size: 38px;
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
