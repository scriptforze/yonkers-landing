import { Menu } from "./Menu";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import { HeaderContainer } from "./styled";
import { Responsive } from "@/common/components";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Navbar appear={"true"} />
        <Responsive xs>
          <SearchBar />
        </Responsive>
      </HeaderContainer>
      <Responsive sm md lg xl xxl>
        <Menu />
      </Responsive>
    </>
  );
};

export default Header;
