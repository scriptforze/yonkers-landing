import UsefulTipsImg from "@/common/assets/images/usefulTipsImage.png";
import {
  UsefulTipCard,
  UsefulTipsTitle,
  UsefulTipCardImage,
  UsefulTipsContainer,
  UsefulTipCardTextTitle,
  UsefulTipsCardsContainer,
  UsefulTipCardTextContainer,
  UsefulTipCardTextCTAButton,
  UsefulTipCardTextDescription,
} from "./styled";

const UsefulTips = () => {
  return (
    <UsefulTipsContainer>
      <UsefulTipsTitle>Consejos útiles</UsefulTipsTitle>

      <UsefulTipsCardsContainer>
        <UsefulTipCard>
          <UsefulTipCardImage src={UsefulTipsImg} alt="useful tip image" />

          <UsefulTipCardTextContainer>
            <UsefulTipCardTextTitle>
              Unidad de control del motor (ECU)
            </UsefulTipCardTextTitle>

            <UsefulTipCardTextDescription>
              mantener el motor en buen estado y asegurarse de que esté
              funcionando de sen ...
            </UsefulTipCardTextDescription>

            <UsefulTipCardTextCTAButton>Leer más...</UsefulTipCardTextCTAButton>
          </UsefulTipCardTextContainer>
        </UsefulTipCard>

        <UsefulTipCard>
          <UsefulTipCardImage src={UsefulTipsImg} alt="useful tip image" />

          <UsefulTipCardTextContainer>
            <UsefulTipCardTextTitle>
              Módulo de control del transmisor (TCM)
            </UsefulTipCardTextTitle>

            <UsefulTipCardTextDescription>
              Asegurarse de realizar un mantenimiento adecuado de la
              transmisión...
            </UsefulTipCardTextDescription>

            <UsefulTipCardTextCTAButton>Leer más...</UsefulTipCardTextCTAButton>
          </UsefulTipCardTextContainer>
        </UsefulTipCard>

        <UsefulTipCard>
          <UsefulTipCardImage src={UsefulTipsImg} alt="useful tip image" />

          <UsefulTipCardTextContainer>
            <UsefulTipCardTextTitle>
              Módulo de control de la batería (BCM)
            </UsefulTipCardTextTitle>

            <UsefulTipCardTextDescription>
              Mantener la batería cargada y protegerla de las fluctuaciones
              de...
            </UsefulTipCardTextDescription>

            <UsefulTipCardTextCTAButton>Leer más...</UsefulTipCardTextCTAButton>
          </UsefulTipCardTextContainer>
        </UsefulTipCard>
      </UsefulTipsCardsContainer>
    </UsefulTipsContainer>
  );
};

export default UsefulTips;
