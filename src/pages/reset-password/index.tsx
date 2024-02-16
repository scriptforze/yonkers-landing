import React from "react";
import { HeaderContainer, ResetPasswordContainer } from "./styled";
import { Navbar } from "@/common/layout/components/Header/Navbar";
import { Responsive } from "@/common/components";
import { Menu } from "@/common/layout/components/Header/Menu";
import { ResetPasswordForm } from "@/components/reset-password";

const SingUp = () => {
  
  return (
    <>
      <HeaderContainer>
        <Navbar appear={"false"} />
      </HeaderContainer>
      <Responsive sm md lg xl xxl>
        <Menu />
      </Responsive>
      <ResetPasswordContainer>
        <ResetPasswordForm />
      </ResetPasswordContainer>
    </>
  );
};

export default SingUp;
