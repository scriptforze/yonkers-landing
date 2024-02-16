import { Button, Typography } from "antd";
import styled from "styled-components";

export const NewProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 16px 105px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    padding: 0px 120px 105px;
  }
`;

export const NewProductsTitle = styled(Typography.Title).attrs(() => ({
  level: 3,
}))`
  color: #172d5e !important;
  font-size: 24px !important;
  font-weight: 600 !important;
`;

export const NewProductsCTAButton = styled(Button).attrs(() => ({
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

export const NewProductsHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
