import { Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

export const SearchResultsContainer = styled.div`
  left: 0;
  top: 50px;
  border: none;
  z-index: 100;
  border-radius: 8px;
  position: absolute;
  width: calc(100% - 48px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.custom?.colors?.white};
`;

export const SearchResultItemContainer = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  padding: 8px 10px;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;

  &:hover {
    background-color: #e8e8e8;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductImage = styled(Image)`
  margin-right: 20px;
`;

export const ProductName = styled(Typography.Text)`
  color: #616161;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`;

export const ProductCategory = styled(Typography.Text)`
  color: #172d5e;
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
`;
