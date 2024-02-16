import React, { useState } from "react";
import { OrderProduct } from "@/common/components/OrderProduct";
import {
  CheckoutConfirmationContainer,
  CheckoutConfirmationText,
  CheckoutConfirmationTitle,
  CheckoutConfirmationLine,
  CountOrderTotal,
  CountOrderText,
  CountOrderSpan
} from "./styled";

interface ChildComponentProps {
  onDataFromChild: (data: boolean) => void;
}

const CheckoutConfirmation = ({ onDataFromChild }: ChildComponentProps) => {

  const [data, setData] = useState(false);

  const sendDataToParent = () => {
    onDataFromChild(data);
  }

  return (
    <>
      <CheckoutConfirmationContainer>
        <CheckoutConfirmationTitle>Confirmación</CheckoutConfirmationTitle>
        <CheckoutConfirmationText prefix="600">Datos de envío</CheckoutConfirmationText>
        <CheckoutConfirmationText prefix="300">Envió estandar</CheckoutConfirmationText>
        <CheckoutConfirmationText prefix="300">Colombia</CheckoutConfirmationText>
        <CheckoutConfirmationText prefix="300">Bogotá - Cundinamarca</CheckoutConfirmationText>
        <CheckoutConfirmationText prefix="300">Calle 123 N° 45-67</CheckoutConfirmationText>
        <CheckoutConfirmationText prefix="300">Apto 678</CheckoutConfirmationText>
        <CheckoutConfirmationText prefix="300">Comentarios:</CheckoutConfirmationText><CheckoutConfirmationText prefix="300">Dejar en portería:</CheckoutConfirmationText>
        <CheckoutConfirmationLine />
        <CheckoutConfirmationText prefix="600">Destinatario</CheckoutConfirmationText>
        <CheckoutConfirmationText prefix="300">Juan Perez</CheckoutConfirmationText>
        <CheckoutConfirmationText prefix="300">Teléfonos: +57 310 000 00 00</CheckoutConfirmationText>
        <CheckoutConfirmationLine />
        <CheckoutConfirmationText prefix="600" >Método de pago</CheckoutConfirmationText>
        <CheckoutConfirmationText prefix="300" >Visa</CheckoutConfirmationText>
        <CheckoutConfirmationText prefix="300" property="right">
          XXXX XXXX XXXX 0000
        </CheckoutConfirmationText>
      </CheckoutConfirmationContainer>
      <CheckoutConfirmationContainer>
        <OrderProduct
          key={1}
          id={1}
          price={`$${(10000).toLocaleString("es-CO")}`}
          lastPrice={50000}
          title={"Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L"}
          brand={"ACME"}
          imageURL={"http://localhost:3000/img/brakepad1.jpg"}
          alt={"Description imag 1"}
          appear={"false"}
        />
        <OrderProduct
          key={2}
          id={2}
          price={`$${(10000).toLocaleString("es-CO")}`}
          lastPrice={50000}
          title={"Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L"}
          brand={"ACME"}
          imageURL={"http://localhost:3000/img/brakepad1.jpg"}
          alt={"Description imag 1"}
          appear={"false"}
        />
        <OrderProduct
          key={3}
          id={3}
          price={`$${(10000).toLocaleString("es-CO")}`}
          lastPrice={50000}
          title={"Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L"}
          brand={"ACME"}
          imageURL={"http://localhost:3000/img/brakepad1.jpg"}
          alt={"Description imag 1"}
          appear={"false"}
        />
        <CountOrderTotal>
          <CountOrderText prefix="600">Total</CountOrderText>
          <CountOrderSpan>$30,000</CountOrderSpan>
        </CountOrderTotal>
      </CheckoutConfirmationContainer>
    </>
  );
};

export default CheckoutConfirmation;
