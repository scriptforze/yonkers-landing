import { Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

export const BrandsContainer = styled.section`
  display: flex;
  padding: 32px 0px;
  flex-direction: column;
  background-color: #d9d9d9;

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    padding: 32px 120px;
  }
`;

export const BrandsTitle = styled(Typography.Title).attrs(() => ({
  level: 3,
}))`
  text-align: center;
  color: #172d5e !important;
  font-size: 24px !important;
  font-weight: 600 !important;
`;

export const BrandsImagesContainer = styled.div`
  display: flex;
  padding: 34px 46px;
  justify-content: space-around;
`;

export const BrandImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  mix-blend-mode: luminosity;
`;

export const BrandImageContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
`;
