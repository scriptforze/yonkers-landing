import React from "react";
import { CountFormText, CountFormInput, CountFormButton } from "./styled";

const CountOrder = () => {
  return (
    <>
      <form action="" className="">
        <CountFormText>Titular de la tarjeta</CountFormText>
        <CountFormInput
          type="text"
          placeholder="Nombre del titular"
          list="titular"
        />
        <datalist id="titular">
          <option value="Garcia"></option>
          <option value="Aracelly"></option>
          <option value="Juancho"></option>
          <option value="Jhonny"></option>
        </datalist>
        <CountFormText>Número de tarjeta</CountFormText>
        <CountFormInput
          type="text"
          placeholder="*****************"
        />
        <CountFormText>Fecha de vencimiento</CountFormText>
        <CountFormInput
          type="text"
          placeholder="Ingresa tu Nombre"
        />
        <CountFormText>CVV</CountFormText>
        <CountFormInput
          type="text"
          placeholder="000"
        />
        <CountFormText>Cuotas</CountFormText>
        <CountFormInput
          type="text"
          placeholder="1"
          list="cuotas"
        />
        <datalist id="cuotas">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
        </datalist>
        <CountFormButton>Agregar método de pago</CountFormButton>
      </form>
    </>
  );
};

export default CountOrder;
