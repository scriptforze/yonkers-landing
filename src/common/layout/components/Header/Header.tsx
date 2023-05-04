import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import { HeaderContainer } from "./styled";
import { Responsive } from "@/common/components";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <Responsive xs>
        <SearchBar />
      </Responsive>
    </HeaderContainer>
  );
};

export default Header;
