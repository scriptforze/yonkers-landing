import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Button, Typography, Input } from "antd";
import { Props } from "./types";

export const CountPaymentFormContainer = styled.div`
  width: 100%;
  height: 580px;
  display: flex;
  justify-content: center;
`;

export const CountPaymentFormInput = styled(Input)`
  width: ${(props) => props.itemProp || "300px"};
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  color: #212B36;
  margin-right: ${(props) => props.property || ""};
`;

export const CountPaymentFormButton = styled(Button)`
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
  width: 300px;
  height: 39px;
  border-radius: 8px;
  padding: 0px 20px;
`;

export const CountPaymentFormText = styled(Typography.Paragraph).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    styleProps: props.styleProps || "20px",
  })
)<Props>`
  font-family: 'Source Sans 3', sans-serif; 
  color: #999999;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: left; 
  padding-top: ${(props) => props.styleProps};
`;

export const CountPaymentFormFooter = styled(Typography.Paragraph)`
  display: flex;
  height: 94px;
  flex-direction: column;
  margin-top: 32px;
  position: absolute;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    flex-direction: row-reverse;
    width: 100%;
    left: 0px;
    align-items: center:
    height: 39px;
    justify-content: space-evenly;
  }

  ${({ theme }) =>
  theme.custom?.breakpoints?.lg &&
  `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    justify-content: space-evenly;
    gap: 10px;
  }
`;

export const CountPaymentFormTextBack = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  color: #113344;
  font-size: 16px;
  font-weight: 400;
  line-height: 6px;
  text-align: left;
  cursor: pointer;
`;
