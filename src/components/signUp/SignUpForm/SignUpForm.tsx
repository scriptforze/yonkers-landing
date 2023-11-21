import React from "react";
import { SignUpFormText,
         SignUpFormInput,
         SignUpFormButton,
         SignUpFormTextSub} from "./styled";

const SignUpForm = () => {
  return (
      <form action="" className="">
        <SignUpFormText>Nombres</SignUpFormText>
        <SignUpFormInput
          type="text"
          placeholder="Ingrese su Nombre"
        />
        <SignUpFormText>Apellidos</SignUpFormText>
        <SignUpFormInput
          type="text"
          placeholder="Ingrese su Apellidos"
        />
        <SignUpFormText>Email</SignUpFormText>
        <SignUpFormInput
          type="email"
          placeholder="Ingrese su Email"
        />
        <SignUpFormText>Teléfono</SignUpFormText>
        <SignUpFormInput
          type="tel"
          placeholder="Ingrese su Teléfono"
        />
        <SignUpFormText>Contraseña</SignUpFormText>
        <SignUpFormInput
          type="password"
          placeholder="Ingrese su Contraseña"
        />
        <SignUpFormTextSub>Cambiar contraseña</SignUpFormTextSub>
        <SignUpFormButton>Editar</SignUpFormButton>
      </form>
  );
};

export default SignUpForm;
