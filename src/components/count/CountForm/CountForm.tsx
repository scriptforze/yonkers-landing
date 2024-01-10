import React from "react";
import { CountFormText,
         CountFormInput,
         CountFormButton,
         CountFormTextSub} from "./styled";
import Link from "next/link";

const CountForm = () => {
  return (
      <form action="" className="">
        <CountFormText>Nombres</CountFormText>
        <CountFormInput
          type="text"
          placeholder="Ingrese su Nombre"
        />
        <CountFormText>Apellidos</CountFormText>
        <CountFormInput
          type="text"
          placeholder="Ingrese su Apellidos"
        />
        <CountFormText>Email</CountFormText>
        <CountFormInput
          type="email"
          placeholder="Ingrese su Email"
        />
        <CountFormText>Teléfono</CountFormText>
        <CountFormInput
          type="tel"
          placeholder="Ingrese su Teléfono"
        />
        <CountFormText>Contraseña</CountFormText>
        <CountFormInput
          type="password"
          placeholder="Ingrese su Contraseña"
        />
        <Link href={`/reset-password`}>
          <CountFormTextSub>Cambiar contraseña</CountFormTextSub>
        </Link>
        <CountFormButton>Editar</CountFormButton>
      </form>
  );
};

export default CountForm;
