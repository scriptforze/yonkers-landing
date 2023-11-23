import React from "react";
import { LoginFormContainer,
         LoginFormText,
         LoginFormInput,
         LoginFormButton,
         LinkFormContainer,
         HrText } from "./styled";
import Link from "next/link";
import Image from "next/image";
import GoogleLogo from "@/common/assets/images/Google.svg";
import FacebookLogo from "@/common/assets/images/Facebooklogo.svg";

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginFormText
       colorProps="#172D5E"
       sizeProps="32px"
       weightProps="600"
      >Iniciar sesión</LoginFormText>
      <LoginFormText
       marginProps="50px 0px">Correo electrónico</LoginFormText>
      <LoginFormInput
        type="mail"
        placeholder="Ejemplo@gmail.com"
      />
      <LoginFormText>Contraseña</LoginFormText>
      <LoginFormInput
        type="password"
        placeholder="***********"
      />
      <LoginFormButton
        colorProps="#FE7062"
        fontColorProps="#FFFFFF"
        weightProps="600"
        lineHeightProps="20.11px"
        borderProps="none"
        radiusProps="4px">Iniciar sesión</LoginFormButton>
      <HrText data-content="O" />
      <LoginFormButton>
        <Image 
          src={ GoogleLogo } 
          width={24}
          alt="Continuar con Google"
          style={{ 
            margin: "-7px 0px"
          }} />
        Continuar con Google
      </LoginFormButton>
      <LoginFormButton>
        <Image 
          src={ FacebookLogo } 
          width={22}
          alt="Continuar con Facebook"
          style={{ 
            margin: "-7px 0px",
            marginLeft: "20px"
          }} />
        Continuar con Facebook
      </LoginFormButton>
      <LinkFormContainer>
        <Link href={"#"}
          style={{ 
            color: "#999999",
            textDecoration: 'underline',
            fontWeight: 400,
            fontSize: "14px",
            margin: "20px 0px 8px 0px"}}>Aún no estoy registrado</Link>
        <br />
        <Link href={"#"}
          style={{ 
            color: "#999999",
            textDecoration: 'underline',
            fontWeight: 400,
            fontSize: "14px",
             }}>¿Olvidaste tu contraseña?</Link>
      </LinkFormContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
