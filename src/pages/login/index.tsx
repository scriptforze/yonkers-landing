import React from "react";
import { HeaderContainer, LoginContainer } from "./styled";
import { Navbar } from "@/common/layout/components/Header/Navbar";
import { Responsive } from "@/common/components";
import { Menu } from "@/common/layout/components/Header/Menu";
import { LoginForm } from "@/components/login";

const SingUp = () => {

  return (
    <>
      <HeaderContainer>
        <Navbar appear={"false"} />
      </HeaderContainer>
      <Responsive sm md lg xl xxl>
        <Menu />
      </Responsive>
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </>
  );
};

export default SingUp;
