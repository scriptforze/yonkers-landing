import React, { useState } from "react";
import { CountPaymentContainer } from "./styled";
import { PaymentCard } from "@/common/components/PaymentCard";
import { AddItemCount } from "@/common/components/AddItemCount";

interface ChildComponentProps {
  onDataFromChild: (data: boolean) => void;
}

const CountPayment = ({ onDataFromChild }: ChildComponentProps) => {

  const [data, setData] = useState(true);

  const sendDataToParent = () => {
    onDataFromChild(data);
  }

  return (
    <CountPaymentContainer onClick={sendDataToParent}>
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
    </CountPaymentContainer>  
  );
};

export default CountPayment;
