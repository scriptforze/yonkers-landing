import React from "react";
import { useState } from 'react';
import { CountOrderContainer,
         CountOrderText,
         CountOrderDetalle,
         CountOrderSpan,
         CountOrderSecondContainer,
         CountOrderTotal,
         CountOrderContainerAddres,
         CountOrderContainerTotal } from "./styled";
import { OrderProduct } from "@/common/components/OrderProduct";
import { Props } from "./types";

const CountOrder = ({product}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      { !isOpen && (<CountOrderContainer property="hidden">
        <CountOrderText itemRef="100px">10 Febrero 2023</CountOrderText>
        <CountOrderText itemRef="150px">Orden N° 197864826</CountOrderText>
        <CountOrderText itemRef="100px" color="#03947D">Entregado</CountOrderText>
        <CountOrderSpan data-currency="USD" prefix="left">$300,000</CountOrderSpan>
        <CountOrderDetalle onClick={toggleDropdown}>Detalles de la orden</CountOrderDetalle>
      </CountOrderContainer> )}
      { isOpen && (<CountOrderSecondContainer>
        <CountOrderText itemRef="100px">10 Febrero 2023</CountOrderText>
        <CountOrderText itemRef="150px">Orden N° 197864826</CountOrderText>
        <CountOrderText itemRef="100px" color="#03947D">Entregado</CountOrderText>
        <CountOrderSpan data-currency="USD">$300,000</CountOrderSpan>
        <CountOrderDetalle onClick={toggleDropdown} color="#FE7062">Detalles de la orden</CountOrderDetalle>
        <CountOrderText prefix="600">Productos</CountOrderText>
        <OrderProduct
          key={1}
          id={1}
          price={`$${(10000).toLocaleString("es-CO")}`}
          lastPrice={50000}
          title={"Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L"}
          brand={"ACME"}
          imageURL={"http://localhost:3000/img/brakepad1.jpg"}
          alt={"Description imag 1"}
        />
        <OrderProduct
          key={2}
          id={2}
          price={`$${(60000).toLocaleString("es-CO")}`}
          lastPrice={5400}
          title={"KMD: lñkajsdf  3736"}
          brand={"SOHC"}
          imageURL={"http://localhost:3000/img/sparkplugset3.jpg"}
          alt={"Description imag 2"}
        />
        <OrderProduct
          key={3}
          id={3}
          price={`$${(176000).toLocaleString("es-CO")}`}
          lastPrice={15400}
          title={"KMD: lñkajsdf  3736 para Hyundai Accent 1995 - 2001 1.5L"}
          brand={"MICHELLIN"}
          imageURL={"http://localhost:3000/img/tire1.jpg"}
          alt={"Description imag 3"}
        />
        <CountOrderTotal>  
          <CountOrderText prefix="600">Total</CountOrderText>
          <CountOrderSpan>$246,000</CountOrderSpan>
        </CountOrderTotal>
        <CountOrderContainerAddres>
          <CountOrderText prefix="600">Dirección de envío</CountOrderText>
          <CountOrderText prefix="600">Juan Perez</CountOrderText>
          <CountOrderText prefix="300">Calle 123 N° 45-67</CountOrderText>
          <CountOrderText prefix="300">Bogotá - Cundinamarca</CountOrderText>
          <CountOrderText prefix="300">Colombia</CountOrderText>
          <CountOrderText prefix="300">Teléfonos: +57 310 000 00 00</CountOrderText>
        </CountOrderContainerAddres>
        <CountOrderContainerTotal>
          <CountOrderText prefix="600">Detalles de la orden</CountOrderText>
          <CountOrderText prefix="300" itemRef="50%">Productos</CountOrderText>
          <CountOrderText prefix="300" itemRef="50%" property="right">$200,000</CountOrderText>
          <CountOrderText prefix="300" itemRef="50%">Envio</CountOrderText>
          <CountOrderText prefix="300" itemRef="50%" property="right">$4,000</CountOrderText>
          <CountOrderText prefix="300" itemRef="50%">Subtotal</CountOrderText>
          <CountOrderText prefix="300" itemRef="50%" property="right">$200,000</CountOrderText>
          <CountOrderText prefix="300" itemRef="50%">Impuestos</CountOrderText>
          <CountOrderText prefix="300" itemRef="50%" property="right" css={"margin-bottom: 14px"}>$4,000</CountOrderText>
        </CountOrderContainerTotal>
        <CountOrderTotal>  
          <CountOrderText prefix="600">Total</CountOrderText>
          <CountOrderSpan data-currency="USD">$300,000</CountOrderSpan>
        </CountOrderTotal>
        <CountOrderContainerAddres>
          <CountOrderText prefix="600" css={"width: 220px"}>Método de pago</CountOrderText>
          <CountOrderText prefix="300" css={"width: 70px"}>Visa</CountOrderText>
          <CountOrderText prefix="300" property="right">
            XXXX XXXX XXXX 0000
          </CountOrderText>
        </CountOrderContainerAddres>
        <CountOrderDetalle onClick={toggleDropdown} color="#FE7062">Ver menos</CountOrderDetalle>
      </CountOrderSecondContainer> )}
    </>
  );
};

export default CountOrder;
