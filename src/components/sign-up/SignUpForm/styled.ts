import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Button, Typography, Input } from "antd";
import { Props } from "@/common/types";

export const SignUpFormContainer = styled.div`
  width: 333px;
  height: 800px;
  background-color: #ffffff;
  border-radius: 8px;
  position: relative;
  margin: auto;
  padding: 60px 27px 36px 28px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 482px;
    height: 675px;
    padding: 60px 40px 62px 40px;
}
`;

export const SignUpFormInput = styled(Input).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    widthProps: props.widthProps || "377px"
  })
)<Props>`
  width: 278px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  color: #212B36;
  margin: -10px 0px 31px 0px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      width: ${(props) => props.widthProps};
      margin: 0px 0px 31px 0px;
  }
`;

export const SignUpFormButton = styled(Button)`
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
  width: 278px;
  height: 40px;
  border-radius: 4px;
  gap: 10px;
  padding: 10px 40px;
  margin: 0px 0px 31px 0px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      width: 377px;
  }
`;

export const SignUpFormText = styled(Typography.Paragraph).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    sizeProps: props.sizeProps || "14px",
    colorProps: props.colorProps || "#999999",
    weightProps: props.weightProps || "400",
    paddingProps: props.paddingProps || "0px"
  })
)<Props>`
  font-family: 'Source Sans 3', sans-serif; 
  color: ${(props) => props.colorProps};
  font-size: ${(props) => props.sizeProps};
  font-weight: ${(props) => props.weightProps};
  line-height: 19px;
  text-align: left;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      line-height: 0px;
      padding-bottom: ${(props) => props.paddingProps};
  }
`;
