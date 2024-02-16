import Image from "next/image";
import styled from "styled-components";
import { Card } from "@nextui-org/react";

export const CustomCard = styled(Card).attrs(() => ({
  isHoverable: true,
  isPressable: true,
}))`
  width: 237px;
  filter: none;
  height: 362px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: default;
`;

export const CustomCardImage = styled(Image).attrs(() => ({
  width: 237,
  height: 362,
}))`
  width: auto;
  height: 131px;
  border-radius: 8px;
  object-fit: contain;
`;
