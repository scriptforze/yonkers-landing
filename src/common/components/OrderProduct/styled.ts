import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import Image from "next/image";
import { Props } from "@/common/types";

export const CustomCardContainer = styled.div.attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    marginProps: props.marginProps || "4px"
  })) <Props>`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  margin: 16px 0px;
  border-bottom: solid 0.1em #D3D3D3;
  padding-bottom: ${(props) => props.marginProps};

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    padding-bottom: 16px;
    align-items: center;
  }
`;

export const OrderProductText = styled.p.attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    sizeProps: props.sizeProps || "14px",
    colorProps: props.colorProps || "#0F2555",
    weightProps: props.weightProps || "semibold",
    borderProps: props.borderProps || "",
    radiusProps: props.radiusProps || "",
    marginProps: props.marginProps || "",
    widthProps: props.widthProps || "117px",
    lineHeightProps: props.lineHeightProps || "'Source Sans 3', sans-serif"
  })) <Props>`
  font-family: ${(props) => props.lineHeightProps};
  font-size: ${(props) => props.sizeProps};
  font-weight: ${(props) => props.weightProps};
  color: ${(props) => props.colorProps};
  width: ${(props) => props.widthProps};
  border: ${(props) => props.borderProps};
  text-align: ${(props) => props.marginProps};
  border-radius: ${(props) => props.radiusProps};

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 200px;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.md &&
    `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    width: 35%;
  }
`;

export const OrderProductPrice = styled.p.attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    lineHeightProps: props.lineHeightProps || "20px",
    marginProps: props.marginProps || "20px 100px",
  })) <Props>`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  margin: ${(props) => props.marginProps};
  line-height  ${(props) => props.lineHeightProps}; 
  letter-spacing: 0em;
  width: 100px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 77px;
  }
`;

export const CustomCardImage = styled(Image).attrs(() => ({
  width: 237,
  height: 362,
}))`
  width: 117px;
  height: 100px;
  border-radius: 8px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #D3D3D3;
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 130px;
    right: 30px;
  }
`;

export const CountButton = styled.div.attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    sizeProps: props.sizeProps || "0px 8px 8px 0px",
  })) <Props>`
  font-size: 20px;
  width: 29.5px;
  height: 30px;
  padding: 0px 10px;
  border-radius: ${(props) => props.sizeProps};
  background-color: #E8E8E8;
  color: #999999;
  padding: 0px auto;
  cursor: pointer;
`;

export const ImageDelete = styled(Image)`
  width: 16px;
  height: 16px;
  position: relative;
  right: -30px;
  cursor: pointer;
`;