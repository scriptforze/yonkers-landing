import {
  CustomImage,
  MenuItemButton,
  SuperiorNavbar,
  NavbarContainer,
  MenuLogoContainer,
  MenuItemsContainer,
  CustomControlButton,
  NavbarControlsContainer,
} from "./styled";
import {
  UserOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import Logo from "@/common/assets/images/logo.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <SuperiorNavbar>
        <MenuLogoContainer>
          <CustomControlButton
            className="menu-button"
            icon={<MenuOutlined />}
          />
          <CustomImage width={99} height={24} alt="logo icon" src={Logo} />
        </MenuLogoContainer>

        <NavbarControlsContainer>
          <CustomControlButton icon={<SearchOutlined />} />
          <CustomControlButton icon={<UserOutlined />} />
          <CustomControlButton icon={<ShoppingCartOutlined />} />
        </NavbarControlsContainer>
      </SuperiorNavbar>

      <MenuItemsContainer>
        <MenuItemButton>INICIO</MenuItemButton>
        <MenuItemButton>MARKETPLACE</MenuItemButton>
        <MenuItemButton>CONTACTO</MenuItemButton>
      </MenuItemsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
