import React from "react";
import { CountDeliveryContainer,
    CountDeliveryText,
    CountDeliveryInput,
    CountDeliveryButton,
    CountDeliveryFooter } from "./styled";

const CountDelivery = () => {
  return (
    <CountDeliveryContainer>
      <form action="" className="">
        <CountDeliveryText>País</CountDeliveryText>
        <CountDeliveryInput
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
        <CountDeliveryText>Nombres</CountDeliveryText>
        <CountDeliveryInput
          type="text"
          placeholder="Ingresa su Nombre"
        />
        <CountDeliveryText>Apellidos</CountDeliveryText>
        <CountDeliveryInput
          type="text"
          placeholder="Ingresa su Apellido"
        />
        <CountDeliveryText>Número de teléfono</CountDeliveryText>
        <CountDeliveryInput
          type="text"
          placeholder="+57 310 000 00 00"
        />
        <CountDeliveryText>Direccíon</CountDeliveryText>
        <CountDeliveryInput
          type="text"
          placeholder="Ingresa su Dirección"
        />
        <CountDeliveryText>Detalles</CountDeliveryText>
        <CountDeliveryInput
          type="text"
          placeholder="Apto, unidad, edificio, casa"
        />
        <CountDeliveryText>Departamento</CountDeliveryText>
        <CountDeliveryInput
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
        <CountDeliveryText>Ciudad</CountDeliveryText>
        <CountDeliveryInput
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
        <CountDeliveryText>Código postal</CountDeliveryText>
        <CountDeliveryInput
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
          <CountDeliveryFooter>   
            <CountDeliveryButton>Agregar método de envío</CountDeliveryButton>
            <CountDeliveryText color="#212B36" results="16px">Volver</CountDeliveryText>
          </CountDeliveryFooter>
      </form>
    </CountDeliveryContainer>
  );
};

export default CountDelivery;
