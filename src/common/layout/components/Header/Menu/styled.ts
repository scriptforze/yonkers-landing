import { Button } from "antd";
import styled from "styled-components";

export const MenuItemsContainer = styled.nav`
  display: flex;
  font-size: 16px;
  flex-direction: row;
  justify-content: center;
  background-color: #d4d7da;
`;

export const MenuItemButton = styled(Button).attrs(() => ({
  ghost: true,
}))`
  border: none;
  font-size: 16px;
  font-weight: normal;
  & > span {
    color: #464646;
    letter-spacing: 0.04em;
  }
`;
