import styled from "styled-components";
import Image from "next/image";

export const CustomCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  margin: 16px 0px;
  border-bottom: solid 0.1em #D3D3D3;
  padding-bottom: 4px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    padding-bottom: 16px;
    align-items: center;
  }
`;

export const OrderProductText = styled.p`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 14px;
  font-weight: semibold;
  color: #0F2555;
  width: 117px;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    width: 200px;
  }

  ${({ theme }) =>
  theme.custom?.breakpoints?.md &&
  `@media (min-width: ${theme.custom?.breakpoints?.md?.min})`} {
    width: 50%;
  }
`;

export const OrderProductPrice = styled.p`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  height: 100px;
  margin: 20px 0px -70px 96px;
  line-height  20px; 
  letter-spacing: 0em;

  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    margin: 0px;
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