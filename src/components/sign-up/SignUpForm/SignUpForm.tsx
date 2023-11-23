import React from "react";
import { SignUpFormContainer,
         SignUpFormText,
         SignUpFormInput,
         SignUpFormButton } from "./styled";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <SignUpFormContainer>
      <SignUpFormText
       colorProps="#172D5E"
       sizeProps="32px"
       weightProps="600"
      >Crear cuenta</SignUpFormText>
      <SignUpFormText>Nombres</SignUpFormText>
      <SignUpFormInput
        widthProps="183px"
        type="text"
        placeholder="Ingrese su Nombre"
      />
      <SignUpFormText>Apellidos</SignUpFormText>
      <SignUpFormInput
        type="text"
        placeholder="Ingrese su Apellidos"
        widthProps="183px"
      />
      <SignUpFormText>Correo electrónico</SignUpFormText>
      <SignUpFormInput
        type="email"
        placeholder="Ingrese su Email"
      />
      <SignUpFormText>Contraseña</SignUpFormText>
      <SignUpFormInput
        type="password"
        placeholder="***********"
      />
      <SignUpFormText>Confirmar contraseña</SignUpFormText>
      <SignUpFormInput
        type="password"
        placeholder="***********"
      />
      <SignUpFormButton>Crear cuenta</SignUpFormButton>
        <SignUpFormText sizeProps="12px">Al continuar, aceptas los
        <Link href={"#"}> Términos y Condiciones </Link> y la 
        <Link href={"#"}> Política de privacidad</Link></SignUpFormText><br />
        <SignUpFormText sizeProps="12px">¿Ya tienes una cuenta?
        <Link href={"#"}> Iniciar sesión</Link>
      </SignUpFormText>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
