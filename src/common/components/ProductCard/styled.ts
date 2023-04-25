import { Card } from "@nextui-org/react";
import styled from "styled-components";

export const CustomCard = styled(Card).attrs(() => ({
  isHoverable: true,
  isPressable: true,
}))`
  width: 237px;
  height: 362px;
  display: flex;
  flex-direction: column;
`;

export const CustomCardImage = styled(Card.Image).attrs(() => ({
  width: 237,
  height: 362,
}))`
  border-radius: 8px;
`;
