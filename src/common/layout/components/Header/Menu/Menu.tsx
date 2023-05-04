import React from "react";
import { MenuItemButton, MenuItemsContainer } from "./styled";

const Menu = () => {
  return (
    <MenuItemsContainer>
      <MenuItemButton>INICIO</MenuItemButton>
      <MenuItemButton>MARKETPLACE</MenuItemButton>
      <MenuItemButton>CONTACTO</MenuItemButton>
    </MenuItemsContainer>
  );
};

export default Menu;
