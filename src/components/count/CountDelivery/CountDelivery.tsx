import React, { useState } from "react";
import { CountDeliveryContainer } from "./styled";
import { AddressCard } from "@/common/components/AddressCard";
import { AddItemCount } from "@/common/components/AddItemCount";

interface ChildComponentProps {
  onDataFromChild: (data: boolean) => void;
}

const CountDelivery = ({ onDataFromChild }: ChildComponentProps) => {

  const [data, setData] = useState(true);

  const sendDataToParent = () => {
    onDataFromChild(data);
  }

  return (
    <CountDeliveryContainer onClick={sendDataToParent}>
      <AddItemCount Add="Agregar dirección de envío"/>
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
    </CountDeliveryContainer>  
  );
};

export default CountDelivery;
