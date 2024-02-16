import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Typography, Button } from "antd";
import { Props } from "@/common/types";

export const CountOrderContainer = styled.div.attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    lineHeightProps: props.lineHeightProps || ""
  })
) <Props>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: -10px 0px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #D3D3D3;
  line-height: ${(props) => props.lineHeightProps};

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    display: flex;
    height: 124px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const CountOrderSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: -10px 0px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #D3D3D3;
  position: relative;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const CountOrderDetalle = styled(Typography.Text).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    fontColorProps: props.fontColorProps || "#000000"
  })
) <Props>`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color:  ${(props) => props.fontColorProps};
  text-align: right;
  cursor: pointer;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 100%;
    margin-top: 10px;
  }
`;

export const CountOrderText = styled(Typography.Text).attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    weightProps: props.weightProps || "400",
    fontColorProps: props.fontColorProps || "#000000",
    widthProps: props.widthProps || "220px",
    marginProps: props.marginProps || "0px",
    lineHeightProps: props.lineHeightProps || "left"
  })
) <Props>`
  display: inline;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: ${(props) => props.weightProps};
  color:  ${(props) => props.fontColorProps};
  width:  ${(props) => props.widthProps};
  text-align: ${(props) => props.lineHeightProps};
  margin-bottom: ${(props) => props.marginProps};
`;

export const CountOrderSpan = styled.span`
  display: inline;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: ${(props) => props.prefix || "right"};
`;

export const CountOrderTotal = styled.span`
  display: flex;
  flex-direction: row;  
  justify-content: flex-end;
  gap: 60px;
  width: 100%;
`;

export const CountOrderContainerAddres = styled.span`
  display: flex;
  flex-direction: column;
  width: 220px;
  gap: 4px;
  margin: 20px 0px 40px 0px;
`;

export const CountOrderContainerTotal = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: solid 0.1em #D3D3D3;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 0px 14px 0px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 46%;
    margin: 14px 0px 14px 0px;
  }
`;
