import { Collapse } from "antd";
import styled from "styled-components";

export const CollapseGroupContainer = styled(Collapse)`
  ${({ theme }) =>
    theme.custom?.breakpoints?.xl &&
    `@media (min-width: ${theme.custom?.breakpoints?.xl?.min})`} {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
