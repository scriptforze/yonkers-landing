import React, { useState } from "react";
import { CountDeliveryFormContainer,
    CountDeliveryFormText,
    CountDeliveryFormInput,
    CountDeliveryFormButton,
    CountDeliveryFormTextBack } from "./styled";

interface ChildComponentProps {
  onDataFromChild: (data: boolean) => void;
}

const CountDeliveryForm = ({ onDataFromChild }: ChildComponentProps) => {

  const [data, setData] = useState(false);

  const sendDataToParent = () => {
    onDataFromChild(data);
  }

  return (
    <CountDeliveryFormContainer>
      <form action="" className="">
        <CountDeliveryFormText>País</CountDeliveryFormText>
        <CountDeliveryFormInput
          type="text"
          placeholder="Colombia"
          list="pais"
        />
          <datalist id="pais">
            <option value="Chibchombia"></option>
            <option value="Gringolandia"></option>
            <option value="Israel"></option>
            <option value="Ucrania"></option>
            <option value="Venezuela"></option>
            <option value="Rusia"></option>
            <option value="España"></option>
            <option value="Gringolandia"></option>
            <option value="Israel"></option>
            <option value="Ucrania"></option>
            <option value="Venezuela"></option>
            <option value="Rusia"></option>
            <option value="Ecuador"></option>
            <option value="Gringolandia"></option>
            <option value="Israel"></option>
            <option value="Ucrania"></option>
            <option value="Venezuela"></option>
            <option value="Rusia"></option>
            <option value="China"></option>
            <option value="Gringolandia"></option>
            <option value="Israel"></option>
            <option value="Ucrania"></option>
            <option value="Venezuela"></option>
            <option value="Rusia"></option>
            <option value="Ruanda"></option>
            <option value="Gringolandia"></option>
            <option value="Israel"></option>
            <option value="Ucrania"></option>
            <option value="Venezuela"></option>
            <option value="Rusia"></option>
          </datalist>
        <CountDeliveryFormText>Nombres</CountDeliveryFormText>
        <CountDeliveryFormInput
          type="text"
          placeholder="Ingrese su Nombre"
        />
        <CountDeliveryFormText>Apellidos</CountDeliveryFormText>
        <CountDeliveryFormInput
          type="text"
          placeholder="Ingrese su Apellido"
        />
        <CountDeliveryFormText>Número de teléfono</CountDeliveryFormText>
        <CountDeliveryFormInput
          type="text"
          placeholder="+57 310 000 00 00"
        />
        <CountDeliveryFormText>Direccíon</CountDeliveryFormText>
        <CountDeliveryFormInput
          type="text"
          placeholder="Ingrese su Dirección"
        />
        <CountDeliveryFormText>Detalles</CountDeliveryFormText>
        <CountDeliveryFormInput
          type="text"
          placeholder="Apto, unidad, edificio, casa"
        />
        <CountDeliveryFormText>Departamento</CountDeliveryFormText>
        <CountDeliveryFormInput
          type="text"
          placeholder="Cundinamarca"
          list="departamento"
        />
          <datalist id="departamento">
            <option value="Pueblo Paleta"></option>
            <option value="Konoha"></option>
            <option value="Cundinamarca"></option>
            <option value="Guajira"></option>
            <option value="Vegito"></option>
            <option value="Valle"></option>
          </datalist>
        <CountDeliveryFormText>Ciudad</CountDeliveryFormText>
        <CountDeliveryFormInput
          type="text"
          placeholder="Bogotá"
          list="ciudad"
        />
          <datalist id="ciudad">
            <option value="Pueblo Paleta"></option>
            <option value="Konoha"></option>
            <option value="bello"></option>
            <option value="leticia"></option>
            <option value="Vegito"></option>
            <option value="cali"></option>
          </datalist>
        <CountDeliveryFormText>Código postal</CountDeliveryFormText>
        <CountDeliveryFormInput
          type="text"
          placeholder="0000"
          list="codPostal"
        />
          <datalist id="codPostal">
            <option value="5423"></option>
            <option value="2984"></option>
            <option value="3776"></option>
            <option value="4504"></option>
          </datalist>
          <CountDeliveryFormButton>Agregar método de envío</CountDeliveryFormButton>
          <CountDeliveryFormTextBack onClick={sendDataToParent}>Volver</CountDeliveryFormTextBack>
      </form>
    </CountDeliveryFormContainer>
  );
};

export default CountDeliveryForm;
