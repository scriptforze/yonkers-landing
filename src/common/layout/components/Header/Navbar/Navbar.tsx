import {
  CustomImage,
  SuperiorNavbar,
  NavbarContainer,
  MenuLogoContainer,
  CustomControlButton,
  NavbarControlsContainer,
  HeaderContainerNav
} from "./styled";
import {
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import Logo from "@/common/assets/images/logo.png";
import { Responsive } from "@/common/components";
import { SearchBar } from "../SearchBar";
import { useState } from 'react';
import Nav from './Nav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  return (
    <NavbarContainer>
       <SuperiorNavbar>
        <MenuLogoContainer>
          <Responsive xs>
            <CustomControlButton
              className="menu-button"
              icon={!isOpen ? <MenuOutlined /> : 
              <CloseOutlined style={{ color: '#e00909' }}/>
             }
              onClick={toggleDropdown}
            />
          </Responsive>
          <CustomImage alt="logo icon" src={Logo} priority />
        </MenuLogoContainer>

        <Responsive sm md lg xl xxl>
          <SearchBar />
        </Responsive>

        <NavbarControlsContainer>
          <CustomControlButton icon={<UserOutlined />} />
          <CustomControlButton icon={<ShoppingCartOutlined />} />
        </NavbarControlsContainer>
        <Responsive xs>
          { isOpen && (<Nav />) }
        </Responsive>
      </SuperiorNavbar>
    </NavbarContainer>
  );
};

export default Navbar;
