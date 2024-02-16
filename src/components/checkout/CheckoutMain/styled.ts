import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Typography, Button } from "antd";
import { Props } from "@/common/types";

export const CheckoutMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  align-items: center;
`;

export const CheckoutMainSection = styled.div`
  padding: 32px 20px;
  border-radius: 8px; 
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
  
  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
      width: 70%;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xxl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xxl?.min})`} {
      width: 100%;
      margin: 0px 120px;
  }
`;

export const CheckoutMainNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 75px;
  margin-bottom: -10px;
  background-color: #ffffff;
  border-radius: 8px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      padding: 0px 70px 40px 0px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
      width: 70%;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xxl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xxl?.min})`} {
      width: 100%;
  }
`;

export const CheckoutMainText = styled(Typography.Paragraph).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    colorProps: props.colorProps || "#C4CDD5",
    fontColorProps: props.fontColorProps || "#999999"
  })
) <Props>`
  color:  ${(props) => props.fontColorProps};
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.colorProps};
  border-radius: 100px;
  position: relative;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      top: 46px;
      left: 40px;
  }
`;

export const CheckoutMainLine = styled.div.attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    colorProps: props.colorProps || "#C4CDD5"
  })
) <Props>`
  width: 65%;
  height: 3px;
  background-color: ${(props) => props.colorProps};
  position: absolute;
  top: 118px;
   
  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      top: 125px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.lg &&
    `@media (min-width: ${theme.custom?.breakpoints?.lg?.min})`} {
    width: 47%;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xxl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xxl?.min})`} {
    width: 70%;
  }
`;

export const CheckoutMainLineProgress = styled.div.attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    borderProps: props.borderProps || "0%"
  })
) <Props>`
  width: ${(props) => props.borderProps};
  height: 3px;
  background-color: #FE7062; 
`;

export const CheckoutMainButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    flex-direction: row-reverse;
    align-items: baseline;
    justify-content: space-around;
  }
`;

export const ButtonText = styled(Typography.Text).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    wildcardProps: props.wildcardProps || "block"
  })
) <Props>`
  font-size: 16px;
  line-height: 48px;
  color: #212B36;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  display: ${(props) => props.wildcardProps};
`;

export const ButtonButton = styled(Button)`
  font-size: 16px;
  line-height: 0px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.custom?.colors?.white} !important;
  background-color: ${({ theme }) => theme.custom?.colors?.secondary};
  width: 80%;
  width: 100%;
  height: 39px;
  border-radius: 8px;
  padding: 14px 20px 14px 20px;
  margin-top: 20px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 80%;
    max-width: 295px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
     line-height: 0px;
  }
`;