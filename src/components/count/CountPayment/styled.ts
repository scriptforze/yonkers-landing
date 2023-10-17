import styled from "styled-components";
import { Button, Typography, Input } from "antd";

export const CountPaymentContainer = styled.div`
  width: 100%;
`;

export const CountPaymentInput = styled(Input)`
  width: 300px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  color: #212B36;
`;

export const CountPaymentButton = styled(Button)`
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
  width: 3oopx;
  height: 39px;
  border-radius: 8px;
  position: relative;
  left: 40%;
  padding: 14px 20px;
`;

export const CountPaymentText = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  color: #999999;
  font-size: 14px;
  font-weight: 400;
  line-height: 6px;
  text-align: left; 

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      line-height: 0px;
  }
`;

export const CountPaymentFooter = styled(Typography.Paragraph)`
  display: flex;
  width: 80%;
  height: 74px;
  flex-direction: column;
  margin-top: 4px;
  position: absolute;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    flex-direction: row-reverse;
    left: 40px;
    align-items: center:
    height: 39px;
    justify-content: space-evenly;
  }

  ${({ theme }) =>
  theme.custom?.breakpoints?.lg &&
  `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    left: 260px;
  }
`;

export const CountPaymentTextBack = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  color: #113344;
  font-size: 16px;
  font-weight: 400;
  line-height: 6px;
  text-align: left; 

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      line-height: 0px;
  }
`;


// const getScreenSize = (width: number) => {
//   if (width >= 0 && width <= 575) return "xs";
//   if (width >= 576 && width <= 767) return "sm";
//   if (width >= 768 && width <= 991) return "md";
//   if (width >= 992 && width <= 1199) return "lg";
//   if (width >= 1200 && width <= 1399) return "xl";
//   if (width >= 1400) return "xxl";
//   return null;