import React from "react";
import { CountCardAddress, CountCardAddressImage, CountCardAddressText } from "./styled";
import AddCross from "@/common/assets/images/AddCross.png";

interface AddItemCountProps {
  Add: string;
}

const AddItemCount: React.FC<AddItemCountProps> = ({ Add }) => {

  return (
    <CountCardAddress>
      <CountCardAddressImage src={AddCross} alt={"Add new address"} />
      <CountCardAddressText>{Add}</CountCardAddressText>
    </CountCardAddress>
  );
};

export default AddItemCount;
