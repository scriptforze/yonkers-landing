import styled from "styled-components";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { Typography } from "antd";

export const CountCardAddress = styled(Card).attrs(() => ({
  isHoverable: true,
  isPressable: true,
}))`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  border: dashed 2px  #D3D3D3;
  gap: 32px;
  
  ${({ theme }) =>
    theme.custom?.breakpoints?.sm &&
    `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
      max-width: 422px;
  }
`;

export const CountCardAddressImage = styled(Image).attrs(() => ({
  width: 50,
  height: 50,
}))`
  position: relative;
  margin: auto;
  width: 50px;
  height: 50px;
`;

export const CountCardAddressText = styled(Typography.Paragraph)`
  font-family: 'Source Sans 3', sans-serif; 
  color: #212B36;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;
`;
