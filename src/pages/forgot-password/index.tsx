import React from "react";
import { HeaderContainer, ForgotPasswordContainer } from "./styled";
import { Navbar } from "@/common/layout/components/Header/Navbar";
import { Responsive } from "@/common/components";
import { Menu } from "@/common/layout/components/Header/Menu";
import { ForgotPasswordForm } from "@/components/forgot-password";

const SingUp = () => {
  
  return (
    <>
      <HeaderContainer>
        <Navbar appear={"false"} />
      </HeaderContainer>
      <Responsive sm md lg xl xxl>
        <Menu />
      </Responsive>
      <ForgotPasswordContainer>
        <ForgotPasswordForm />
      </ForgotPasswordContainer>
    </>
  );
};

export default SingUp;
