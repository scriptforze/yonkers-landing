import styled from "styled-components";
import { Card } from "@nextui-org/react";

export const CustomCard = styled(Card).attrs(() => ({
  isHoverable: false,
  isPressable: false,
}))`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  border: solid 1px  #D3D3D3;
  gap: 32px;
  
  ${({ theme }) =>
  theme.custom?.breakpoints?.sm &&
  `@media (min-width: ${theme.custom?.breakpoints?.sm?.min})`} {
    max-width: 422px;
}
`;


// > Para swagger usr: admin pass: password autho: Bearer y la key cuando inicio sección.