import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Button, Typography, Input } from "antd";
import { Props } from "@/common/types";

export const ForgotPasswordFormContainer = styled.div`
  width: 333px;
  height: 429px;
  background-color: #ffffff;
  border-radius: 20px;
  position: relative;
  margin: auto;
  padding: 60px 27px 40px 28px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 458px;
    height: 403px;
    padding: 60px 40.5px 74px 40.5px;
}
`;

export const ForgotPasswordFormInput = styled(Input)`
  width: 278px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  color: #212B36;
  margin: -20px 0px 31px 0px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      width: 377px;
      margin: -8px 0px 23px 0px;
  }
`;

export const ForgotPasswordFormButton = styled(Button).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    colorProps: props.colorProps || "#ffffff",
    weightProps: props.weightProps || "400",
    lineHeightProps: props.lineHeightProps || "16px",
    radiusProps: props.radiusProps || "8px",
    borderProps: props.borderProps || "1px solid",
    fontColorProps: props.fontColorProps || "#999999"
  })
)<Props>`
  border:  ${(props) => props.borderProps};
  font-weight: ${(props) => props.weightProps};
  color: ${(props) => props.fontColorProps} !important;
  background-color: ${(props) => props.colorProps};
  line-height: ${(props) => props.lineHeightProps};
  border-radius: ${(props) => props.radiusProps};
  font-size: 14px;
  width: 278px;
  height: 40px;
  padding: 10px 0px;
  margin: 0px 0px 12px 0px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      width: 377px;
  }
`;

export const ForgotPasswordFormText = styled(Typography.Paragraph).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    sizeProps: props.sizeProps || "18px",
    colorProps: props.colorProps || "#999999",
    weightProps: props.weightProps || "400",
    lineHeightProps: props.lineHeightProps || "26px",
    marginProps: props.marginProps || "0px",
    widthProps: props.widthProps || "0px"
  })
)<Props>`
  font-family: 'Source Sans 3', sans-serif; 
  color: ${(props) => props.colorProps};
  font-size: ${(props) => props.sizeProps};
  font-weight: ${(props) => props.weightProps};
  line-height: ${(props) => props.lineHeightProps};
  text-align: left;
  width: 266px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      margin: ${(props) => props.marginProps};
      line-height: ${props => (props.widthProps 
        ? props.widthProps 
        : "30px")};
      height: 52px;
      width: 104%;
  }
`;