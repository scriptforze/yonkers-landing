import { Button, Typography } from "antd";
import styled from "styled-components";

export const MostWantedProductsContainer = styled.section`
  display: flex;
  margin: 105px 0px 50px;
  flex-direction: column;

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    padding: 0px 120px;
  }
`;

export const MostWantedProductsTitle = styled(Typography.Title).attrs(() => ({
  level: 3,
}))`
  color: #172d5e !important;
  font-size: 24px !important;
  font-weight: 600 !important;
`;

export const MostWantedProductsCTAButton = styled(Button).attrs(() => ({
  type: "link",
}))`
  display: flex;
  color: #000000;
  font-size: 16px;
  flex-direction: row;
  margin-bottom: 18px;
  align-items: center;

  & > .anticon {
    color: #3e79f7;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    align-self: flex-end;
  }
`;

export const MostWantedProductsHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
