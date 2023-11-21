import React, { useState } from "react";
import {  CountPaymentFormContainer,
          CountPaymentFormText,
          CountPaymentFormInput,
          CountPaymentFormButton,
          CountPaymentFormFooter,
          CountPaymentFormTextBack } from "./styled";

interface ChildComponentProps {
  onDataFromChild: (data: boolean) => void;
}
          

const CountPaymentForm = ({ onDataFromChild }: ChildComponentProps) => {

  const [data, setData] = useState(false);

  const sendDataToParent = () => {
    onDataFromChild(data);
  }

  return (
    <CountPaymentFormContainer>
      <form action="" className="">
        <CountPaymentFormText
          styleProps="0px"
        >Titular de la tarjeta</CountPaymentFormText>
        <CountPaymentFormInput
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
        <CountPaymentFormText>Número de tarjeta</CountPaymentFormText>
        <CountPaymentFormInput
          type="text"
          placeholder="*****************"
        />
        <CountPaymentFormText>Fecha de vencimiento</CountPaymentFormText>
        <CountPaymentFormInput
          type="text"
          placeholder="Mes"
          list="months"
          itemProp ="142px"
          property ="8px"
        />
        <datalist id="months">
          <option value="Enero"></option>
          <option value="Febrero"></option>
          <option value="Marzo"></option>
          <option value="Abril"></option>
          <option value="..."></option>
        </datalist>
        <CountPaymentFormInput
          type="text"
          placeholder="Día"
          list="days"
          itemProp ="145px"
        />
        <datalist id="days">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="..."></option>
        </datalist>
        <CountPaymentFormText>CVV</CountPaymentFormText>
        <CountPaymentFormInput
          type="text"
          placeholder="000"
        />
        <CountPaymentFormText>Cuotas</CountPaymentFormText>
        <CountPaymentFormInput
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
        <CountPaymentFormFooter> 
          <CountPaymentFormButton>Agregar método de pago</CountPaymentFormButton>
          <CountPaymentFormTextBack onClick={sendDataToParent}>Volver</CountPaymentFormTextBack>
        </CountPaymentFormFooter>  
      </form>
    </CountPaymentFormContainer>
  );
};

export default CountPaymentForm;
