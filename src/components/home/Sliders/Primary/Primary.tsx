import Banner from "@/common/assets/images/banner.webp";
import {
  PrimarySliderImage,
  PrimarySliderCTAText,
  PrimarySliderContainer,
  PrimarySliderCTAButton,
  PrimarySliderCTAContainer,
  PrimarySliderImageContainer,
} from "./styled";
import Link from "next/link";

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
        <Link href={`/contact`}>
          <PrimarySliderCTAButton>¡Escríbenos!</PrimarySliderCTAButton>
        </Link>
      </PrimarySliderCTAContainer>
    </PrimarySliderContainer>
  );
};

export default PrimarySlider;
