import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Props } from "@/common/types";

export const CheckoutCarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: -10px 0px -55px 0px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const CheckoutCarText = styled.p.attrs(
  (props: ThemedStyledProps<Props, DefaultTheme>) => ({
    sizeProps: props.sizeProps || "20px",
    fontColorProps: props.fontColorProps || "#091D47",
    widthProps: props.widthProps || "220px",
    marginProps: props.marginProps || "-20px auto 0px auto"
  })
) <Props>`
  display: inline;
  font-family: 'Source Sans 3', sans-serif;
  font-size:  ${(props) => props.sizeProps};
  font-weight: 600;
  color: ${(props) => props.fontColorProps};
  width: ${(props) => props.widthProps};
  text-align: center;
  margin: ${(props) => props.marginProps};
`;

export const CheckoutCarTotal = styled.span`
  display: flex;
  flex-direction: column;  
  width: 100%;
  align-items: center;

  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    justify-content: space-evenly;
  }
`;
