import {
  CustomImage,
  SuperiorNavbar,
  NavbarContainer,
  MenuLogoContainer,
  CustomControlButton,
  NavbarControlsContainer
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
import ResponsiveNavbar from './ResponsiveNavbar';
import Link from "next/link";

interface NavbarProps {
  appear: boolean | string;
}

const Navbar: React.FC<NavbarProps> = ({ appear }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  return (
    <NavbarContainer>
       <SuperiorNavbar>
        <MenuLogoContainer>
          <Responsive xs>
            <CustomControlButton
              icon={ !isOpen ? <MenuOutlined /> : 
              <CloseOutlined style={{ color: '#e00909' }}/>
             }
              onClick={toggleDropdown}
            />
          </Responsive>
          <Link href={`/`}>
            <CustomImage alt="logo icon" src={Logo} priority />
          </Link>
        </MenuLogoContainer>
        { appear === "false" ? (
          ""
        ) : (
          <>
            <Responsive sm md lg xl xxl>
              <SearchBar />
            </Responsive>
            <NavbarControlsContainer>
              <Link href={`/login`}>
                <CustomControlButton icon={<UserOutlined />} />
              </Link>
              <Link href={`/checkout`}>
                <CustomControlButton icon={<ShoppingCartOutlined />} />
              </Link>
            </NavbarControlsContainer>
          </>
        )}
        <Responsive xs>
          { isOpen && (<ResponsiveNavbar />) }
        </Responsive>
      </SuperiorNavbar>
    </NavbarContainer>
  );
};

export default Navbar;
