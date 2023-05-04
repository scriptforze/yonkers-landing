import {
  CustomImage,
  SuperiorNavbar,
  NavbarContainer,
  MenuLogoContainer,
  CustomControlButton,
  NavbarControlsContainer,
} from "./styled";
import {
  UserOutlined,
  MenuOutlined,
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
          <CustomImage alt="logo icon" src={Logo} priority />
        </MenuLogoContainer>

        <NavbarControlsContainer>
          <CustomControlButton icon={<UserOutlined />} />
          <CustomControlButton icon={<ShoppingCartOutlined />} />
        </NavbarControlsContainer>
      </SuperiorNavbar>
    </NavbarContainer>
  );
};

export default Navbar;
