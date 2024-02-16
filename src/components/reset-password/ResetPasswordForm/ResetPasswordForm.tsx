import React from "react";
import { ResetPasswordFormContainer,
         ResetPasswordFormText,
         ResetPasswordFormInput,
         ResetPasswordFormButton } from "./styled";

const ResetPasswordForm = () => {
  return (
    <ResetPasswordFormContainer>
      <ResetPasswordFormText
       colorProps="#172D5E"
       sizeProps="32px"
       weightProps="600"
       lineHeightProps="34px"
      >Restablecer contraseña</ResetPasswordFormText>
      <ResetPasswordFormText
        marginProps=" -45px 0px"
        widthProps="26px"
      >
        Al terminar, te enviaremos a iniciar sesión de nuevo con tu nueva contraseña
      </ResetPasswordFormText>
      <ResetPasswordFormText
        sizeProps="14px"
        lineHeightProps="16px"
        widthProps="88px"
      >
        Nueva contraseña
      </ResetPasswordFormText>
      <ResetPasswordFormInput
        type="password"
        placeholder="***********"
      />
      <ResetPasswordFormText
        sizeProps="14px"
        lineHeightProps="16px"
        widthProps="88px"
      >
        Confirmar contraseña
      </ResetPasswordFormText>
      <ResetPasswordFormInput
        type="password"
        placeholder="***********"
      />
      <ResetPasswordFormButton
        colorProps="#FE7062"
        fontColorProps="#FFFFFF"
        weightProps="600"
        lineHeightProps="20.11px"
        borderProps="none"
        radiusProps="4px">Restablecer contraseña</ResetPasswordFormButton>
    </ResetPasswordFormContainer>
  );
};

export default ResetPasswordForm;
