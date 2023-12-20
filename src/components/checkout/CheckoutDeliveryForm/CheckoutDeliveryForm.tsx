import React, { useState } from "react";
import {
  CheckoutDeliveryFormContainer,
  CheckoutDeliveryFormText,
  CheckoutDeliveryFormInput,
  CheckoutDeliveryFormTextBack
} from "./styled";

interface ChildComponentProps {
  onDataFromChild: (data: boolean) => void;
}

const CheckoutDeliveryForm = ({ onDataFromChild }: ChildComponentProps) => {

  const [data, setData] = useState(false);

  const sendDataToParent = () => {
    onDataFromChild(data);
  }

  return (
    <CheckoutDeliveryFormContainer>
      <form action="" className="">
        <CheckoutDeliveryFormTextBack>Envío</CheckoutDeliveryFormTextBack>
        <CheckoutDeliveryFormText>Nombres</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
          type="text"
          placeholder="Ingrese su Nombre"
        />
        <CheckoutDeliveryFormText>Apellidos</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
          type="text"
          placeholder="Ingrese su Apellido"
        />
        <CheckoutDeliveryFormText>Número de teléfono</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
          type="text"
          placeholder="+57 310 000 00 00"
        />
        <CheckoutDeliveryFormText>Email</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
          type="mail"
          placeholder="Ejemplo@ejemplo.com"
        />
        <CheckoutDeliveryFormText>País</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
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
        <CheckoutDeliveryFormText>Departamento</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
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
        <CheckoutDeliveryFormText>Ciudad</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
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
        <CheckoutDeliveryFormText>Direccíon</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
          type="text"
          placeholder="Ingrese su Dirección"
        />
        <CheckoutDeliveryFormText>Código postal</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
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
        <CheckoutDeliveryFormText>Detalles</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
          type="text"
          placeholder="Apto, unidad, edificio, casa, calle, avenida"
        />
        <CheckoutDeliveryFormText>Comentarios</CheckoutDeliveryFormText>
        <CheckoutDeliveryFormInput
          type="textarea"
          placeholder="Deja cometarios para el repartidor"
        />
      </form>
    </CheckoutDeliveryFormContainer>
  );
};

export default CheckoutDeliveryForm;
