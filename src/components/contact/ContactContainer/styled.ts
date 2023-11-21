import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Typography } from "antd";
import { Props } from "./types";

export const ContactContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px; 
  padding: 45px 17px; 
  grid-template-areas:
        "tittle"
        "form"
        "info";
  justify-content: center;
  align-items: center;
  height: 1000px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.max})`} {
    padding-left: 54px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.max})`} {
      padding: 0px 153px;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "tittle form"
        "info form";
        margin: -140px 0px;
  }
`;

export const ContactText = styled(Typography.Paragraph).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    styleProps: props.styleProps || "32px",
    colorProps: props.colorProps || "#172D5E",
    weightProps: props.weightProps || "600",
    lineHeightProps: props.lineHeightProps || "40.22px",
    marginProps: props.marginProps || "0px"
  })
)<Props>`
  font-family: 'Source Sans 3', sans-serif; 
  color: ${(props) => props.colorProps};
  font-size: ${(props) => props.styleProps};
  font-weight: ${(props) => props.weightProps};
  line-height: ${(props) => props.lineHeightProps};
  margin: ${(props) => props.marginProps};
  position: relative;
  justify-self: center; 

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.max})`} {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
  }
`;

export const ContactContentForm = styled.div`
  grid-area: form;
  display: flex;
  justify-content: center;

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.max})`} {
      grid-column: 2 / 3;
      margin: 50px 0px;
  }
`;

export const ContactTittleContentContainer = styled.div`
  grid-area: tittle;
  width: 255px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.max})`} {
      width: 447px;
      padding-left: 15px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.max})`} {
      width: 447px;
      justify-self: flex-start;
      align-self: flex-end;
  }
`;

export const ContactInfoContentContainer = styled.div`
  grid-area: info;
  height: 123px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.max})`} {
      padding-left: 15px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.max})`} {
      justify-self: flex-start;
      align-self: flex-start;
  }
`;
  