import React from "react";
import { CountFormText,
         CountFormInput,
         CountFormButton,
         CountLine,
         CountFormTextSub} from "./styled";

const CountForm = () => {
  return (
      <form action="" className="">
        <CountFormText>Nombres</CountFormText>
        <CountFormInput
          type="text"
          placeholder="Ingresa su Nombre"
        /><CountLine />
        <CountFormText>Apellidos</CountFormText>
        <CountFormInput
          type="text"
          placeholder="Ingresa su Apellidos"
        /><CountLine />
        <CountFormText>Email</CountFormText>
        <CountFormInput
          type="email"
          placeholder="Ingresa su Email"
        /><CountLine />
        <CountFormText>Teléfono</CountFormText>
        <CountFormInput
          type="tel"
          placeholder="Ingresa su Teléfono"
        /><CountLine />
        <CountFormText>Contraseña</CountFormText>
        <CountFormInput
          type="password"
          placeholder="Ingresa su Contraseña"
        />
        <CountFormTextSub>Cambiar contraseña</CountFormTextSub>
        <CountFormButton>Editar</CountFormButton>
      </form>
  );
};

export default CountForm;
