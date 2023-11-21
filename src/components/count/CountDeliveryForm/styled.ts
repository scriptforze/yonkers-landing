import styled from "styled-components";
import { Button, Typography, Input } from "antd";

export const CountDeliveryFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    padding-bottom: 60px;
  }
`;

export const CountDeliveryFormInput = styled(Input)`
  width: 295px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  margin-bottom: 20px;
`;

export const CountDeliveryFormButton = styled(Button)`
  display: flex;
  justify-content: center;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
  width: 295px;
  height: 39px;
  border-radius: 8px;
  font-weight: 700;
  margin: 24px 0px; 

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    position: absolute;
    margin-top: 24px;
    right: 75px;
  }

   ${({ theme }) =>
  theme.custom?.breakpoints?.lg &&
  `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    right: 105px;
  }

  ${({ theme }) =>
  theme.custom?.breakpoints?.xl &&
  `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    right: 280px;
  }
`;

export const CountDeliveryFormText = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  color: #999999;
  font-size: 14px;
  font-weight: 400;
  line-height: 0px;
  text-align: left;
`;

export const CountDeliveryFormTextBack = styled(Typography.Paragraph)`
  display: flex;
  justify-content: center;
  font-family: 'Source Sans 3', sans-serif; 
  color: #212B36;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    margin-top: 30px;
    position: absolute;
    left: 100px;
  }

  ${({ theme }) =>
  theme.custom?.breakpoints?.lg &&
  `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    left: 320px;
  }

  ${({ theme }) =>
  theme.custom?.breakpoints?.xl &&
  `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    left: 500px;
  }
`;
