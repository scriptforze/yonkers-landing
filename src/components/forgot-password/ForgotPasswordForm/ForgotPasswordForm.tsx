import React from "react";
import { ForgotPasswordFormContainer,
         ForgotPasswordFormText,
         ForgotPasswordFormInput,
         ForgotPasswordFormButton } from "./styled";

const ForgotPasswordForm = () => {
  return (
    <ForgotPasswordFormContainer>
      <ForgotPasswordFormText
       colorProps="#172D5E"
       sizeProps="32px"
       weightProps="600"
       lineHeightProps="34px"
      >Restablecer contraseña</ForgotPasswordFormText>
      <ForgotPasswordFormText
        marginProps=" -45px 0px"
        widthProps="26px"
      >
        Te enviaremos las instrucciones para 
        restablecer tu contraseña por correo 
        electrónico.
      </ForgotPasswordFormText>
      <ForgotPasswordFormText
        sizeProps="14px"
        lineHeightProps="16px"
        marginProps=" 25px 0px 0px 0px"
        widthProps="88px"
      >
        Correo electrónico
      </ForgotPasswordFormText>
      <ForgotPasswordFormInput
        type="mail"
        placeholder="Ejemplo@gmail.com"
      />
      <ForgotPasswordFormButton
        colorProps="#FE7062"
        fontColorProps="#FFFFFF"
        weightProps="600"
        lineHeightProps="20.11px"
        borderProps="none"
        radiusProps="4px">Restablecer contraseña</ForgotPasswordFormButton>
    </ForgotPasswordFormContainer>
  );
};

export default ForgotPasswordForm;
