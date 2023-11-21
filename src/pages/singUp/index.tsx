import React from "react";
import { HeaderContainer } from "./styled";
import { Navbar } from "@/common/layout/components/Header/Navbar";
import { Responsive } from "@/common/components";
import { Menu } from "@/common/layout/components/Header/Menu";
import { SignUpForm } from "@/components/signUp/SignUpForm";

const SingUp = () => {

  return (
    <>
      <HeaderContainer>
        <Navbar />
      </HeaderContainer>
      <Responsive sm md lg xl xxl>
        <Menu />
      </Responsive>
      <SignUpForm />
    </>
  );
};

export default SingUp;
