import Banner from "@/common/assets/images/banner.png";
import {
  PrimarySliderImage,
  PrimarySliderCTAText,
  PrimarySliderContainer,
  PrimarySliderCTAButton,
  PrimarySliderCTAContainer,
  PrimarySliderImageContainer,
} from "./styled";

const PrimarySlider = () => {
  return (
    <PrimarySliderContainer>
      <PrimarySliderImageContainer>
        <PrimarySliderImage alt="banner image" src={Banner} priority />
      </PrimarySliderImageContainer>

      <PrimarySliderCTAContainer>
        <PrimarySliderCTAText level={3}>
          ¿No encuentras el repuesto para tu carro? ¡Escríbenos! Lo importamos
          por ti
        </PrimarySliderCTAText>
        <PrimarySliderCTAButton>¡Escríbenos!</PrimarySliderCTAButton>
      </PrimarySliderCTAContainer>
    </PrimarySliderContainer>
  );
};

export default PrimarySlider;
