import React from "react";
import {  CountPaymentContainer,
          CountPaymentText,
          CountPaymentInput,
          CountPaymentButton,
          CountPaymentFooter,
          CountPaymentTextBack } from "./styled";

const CountPayment = () => {
  return (
    <CountPaymentContainer>
      <form action="" className="">
        <CountPaymentText>Titular de la tarjeta</CountPaymentText>
        <CountPaymentInput
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
        <CountPaymentText>Número de tarjeta</CountPaymentText>
        <CountPaymentInput
          type="text"
          placeholder="*****************"
        />
        <CountPaymentText>Fecha de vencimiento</CountPaymentText>
        <CountPaymentInput
          type="text"
          placeholder="Ingresa tu Nombre"
        />
        <CountPaymentText>CVV</CountPaymentText>
        <CountPaymentInput
          type="text"
          placeholder="000"
        />
        <CountPaymentText>Cuotas</CountPaymentText>
        <CountPaymentInput
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
        <CountPaymentFooter> 
          <CountPaymentButton>Agregar método de pago</CountPaymentButton>
          <CountPaymentTextBack>Volver</CountPaymentTextBack>
        </CountPaymentFooter>  
      </form>
    </CountPaymentContainer>
  );
};

export default CountPayment;
