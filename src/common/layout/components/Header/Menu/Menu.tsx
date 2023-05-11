import React from "react";
import {
  MenuItemButton,
  MenuContainer,
  MenuItemsContainer,
  ContactTextContainer,
  ContactText,
} from "./styled";
import { Responsive } from "@/common/components";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItemsContainer>
        <MenuItemButton>Inicio</MenuItemButton>
        <MenuItemButton>Productos</MenuItemButton>
        <MenuItemButton>Contacto</MenuItemButton>
      </MenuItemsContainer>
      <Responsive xl xxl>
        <ContactTextContainer>
          <ContactText>Atención personalizada</ContactText>
          <ContactText>Cali: (602) 325-8569</ContactText>
          <ContactText>Resto del país: 01-8000-879-9854</ContactText>
        </ContactTextContainer>
      </Responsive>
    </MenuContainer>
  );
};

export default Menu;
