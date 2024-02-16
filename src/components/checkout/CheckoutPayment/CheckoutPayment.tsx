import React, { useState } from "react";
import { CheckoutPaymentContainer } from "./styled";
import { PaymentCard } from "@/common/components/PaymentCard";
import { AddItemCount } from "@/common/components/AddItemCount";

interface ChildComponentProps {
  onDataFromChild: (data: boolean) => void;
}

const CheckoutPayment = ({ onDataFromChild }: ChildComponentProps) => {

  const [data, setData] = useState(true);

  const sendDataToParent = () => {
    onDataFromChild(data);
  }

  return (
    <CheckoutPaymentContainer onClick={sendDataToParent}>
      <AddItemCount Add="Agregar Método de pago"/>
      <PaymentCard
        id={1}
        netCredit="Visa"
        cardNumber={"xxxx xxxx xxxx 0000"}
        name="Juan Perez"
      />
      <PaymentCard
        id={1}
        netCredit="Visa"
        cardNumber={"xxxx xxxx xxxx 0000"}
        name="Juan Perez"
      />
      <PaymentCard
        id={1}
        netCredit="Visa"
        cardNumber={"xxxx xxxx xxxx 0000"}
        name="Juan Perez"
      />
    </CheckoutPaymentContainer>  
  );
};

export default CheckoutPayment;
