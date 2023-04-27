import Image from "next/image";
import ShipCar from "@/common/assets/images/shipCar.png";
import {
  SecondarySliderText,
  SecondarySliderTitle,
  SecondarySliderContainer,
  SecondarySliderTextContainer,
  SecondarySliderImageContainer,
} from "./styled";

export const SecondarySlider = () => {
  return (
    <SecondarySliderContainer>
      <SecondarySliderImageContainer>
        <Image alt="ship car image" src={ShipCar} width={59} />
      </SecondarySliderImageContainer>

      <SecondarySliderTextContainer>
        <SecondarySliderTitle level={3}>Envíos</SecondarySliderTitle>

        <SecondarySliderText>
          Hacemos envíos de partes y accesorios a todo el territorio nacional
        </SecondarySliderText>
      </SecondarySliderTextContainer>
    </SecondarySliderContainer>
  );
};

export default SecondarySlider;
