import React, { useState } from "react";
import { CheckoutDeliveryContainer, CheckoutText } from "./styled";
import { AddressCard } from "@/common/components/AddressCard";
import { AddItemCount } from "@/common/components/AddItemCount";

interface ChildComponentProps {
  onDataFromChild: (data: boolean) => void;
}

const CheckoutDelivery = ({ onDataFromChild }: ChildComponentProps) => {

  const [data, setData] = useState(true);

  const sendDataToParent = () => {
    onDataFromChild(data);
  }

  return (
    <CheckoutDeliveryContainer onClick={sendDataToParent}>
      <CheckoutText>Envío</CheckoutText>
      <AddItemCount Add="Agregar dirección de envío" />
      <AddressCard
        id={1}
        name="Juan Perez"
        address="Calle 123 N° 45-67"
        city="Bogotá - Cundinamarca"
        country="Colombia"
        phone={"+57 310 000 00 00"}
      />
      <AddressCard
        id={1}
        name="Juan Perez"
        address="Calle 123 N° 45-67"
        city="Bogotá - Cundinamarca"
        country="Colombia"
        phone={"+57 310 000 00 00"}
      />
      <AddressCard
        id={1}
        name="Juan Perez"
        address="Calle 123 N° 45-67"
        city="Bogotá - Cundinamarca"
        country="Colombia"
        phone={"+57 310 000 00 00"}
      />
    </CheckoutDeliveryContainer>
  );
};

export default CheckoutDelivery;
