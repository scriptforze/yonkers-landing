import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Button, Typography, Input } from "antd";
import { Props } from "./types";

export const LoginFormContainer = styled.div`
  width: 333px;
  height: 614px;
  background-color: #ffffff;
  border-radius: 20px;
  position: relative;
  margin: auto;
  padding: 46.5px 27px 48.5px 28px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 458px;
    height: 604px;
    padding: 60px 40px 62px 40px;
}
`;

export const LoginFormInput = styled(Input)`
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
      width: 377px;
      margin: 0px 0px 31px 0px;
  }
`;

export const LoginFormButton = styled(Button).attrs(
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

export const LoginFormText = styled(Typography.Paragraph).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    sizeProps: props.sizeProps || "14px",
    colorProps: props.colorProps || "#999999",
    weightProps: props.weightProps || "400",
    lineHeightProps: props.lineHeightProps || "40.22px",
    marginProps: props.marginProps || "0px"
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
      margin: ${(props) => props.marginProps};
  }
`;


export const HrText = styled(Button)`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 2.5em;
  opacity: .5;
  width: 100%;
  margin-bottom: 12px;
  cursor: auto;
  &:before {
    content: '';
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 .5em;
    line-height: 1.5em; of the container element...
    color: #818078;
    background-color: #fcfcfa;
  }
`;

export const LinkFormContainer = styled.div`
  display: flex;
  width: 277px;
  height: 58px;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      width: 378px;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
  }
`;