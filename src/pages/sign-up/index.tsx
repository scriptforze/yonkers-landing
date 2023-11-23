import React from "react";
import { HeaderContainer, SignUpContainer } from "./styled";
import { Navbar } from "@/common/layout/components/Header/Navbar";
import { Responsive } from "@/common/components";
import { Menu } from "@/common/layout/components/Header/Menu";
import { SignUpForm } from "@/components/sign-up";

const SingUp = () => {

  return (
    <>
      <HeaderContainer>
        <Navbar appear={"false"} />
      </HeaderContainer>
      <Responsive sm md lg xl xxl>
        <Menu />
      </Responsive>
      <SignUpContainer>
        <SignUpForm />
      </SignUpContainer>
    </>
  );
};

export default SingUp;
