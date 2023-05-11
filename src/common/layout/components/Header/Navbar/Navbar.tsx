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
import { Responsive } from "@/common/components";
import { SearchBar } from "../SearchBar";

const Navbar = () => {
  return (
    <NavbarContainer>
      <SuperiorNavbar>
        <MenuLogoContainer>
          <Responsive xs>
            <CustomControlButton
              className="menu-button"
              icon={<MenuOutlined />}
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
      </SuperiorNavbar>
    </NavbarContainer>
  );
};

export default Navbar;
