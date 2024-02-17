import DiscountImage from "@/common/assets/images/discountImage.webp";
import {
  OffersDiscountsCard,
  OffersDiscountsCardImage,
  OffersDiscountsContainer,
  OffersDiscountsTextTitle,
  OffersDiscountsCardTextTitle,
  OffersDiscountsTextContainer,
  OffersDiscountsCardsContainer,
  OffersDiscountsTextDescription,
  OffersDiscountsCardTextSubtitle,
  OffersDiscountsCardTextCTAButton,
  OffersDiscountsCardTextContainer,
  OffersDiscountsCardTextDescription,
} from "./styled";

const OffersDiscounst = () => {
  return (
    <OffersDiscountsContainer>
      <OffersDiscountsTextContainer>
        <OffersDiscountsTextTitle>
          Ofertas y Descuentos 2023
        </OffersDiscountsTextTitle>

        <OffersDiscountsTextDescription>
          ¡Grandes ofertas en repuestos y accesorios para autos!
        </OffersDiscountsTextDescription>
        <OffersDiscountsTextDescription>
          Mejora y mantén tu vehículo a precios imbatibles. ¡No te lo pierdas,
          oferta por tiempo limitado!
        </OffersDiscountsTextDescription>
      </OffersDiscountsTextContainer>

      <OffersDiscountsCardsContainer>
        <OffersDiscountsCard>
          <OffersDiscountsCardImage src={DiscountImage} alt="Discount Image" />

          <OffersDiscountsCardTextContainer>
            <OffersDiscountsCardTextTitle>30% Off</OffersDiscountsCardTextTitle>

            <OffersDiscountsCardTextSubtitle>
              Unidad de control del motor
            </OffersDiscountsCardTextSubtitle>

            <OffersDiscountsCardTextDescription>
              controla y regula diversas funciones del motor, incluido el
              rendimiento y la emisión de gases.
            </OffersDiscountsCardTextDescription>

            <OffersDiscountsCardTextCTAButton>
              Ver referencias
            </OffersDiscountsCardTextCTAButton>
          </OffersDiscountsCardTextContainer>
        </OffersDiscountsCard>

        <OffersDiscountsCard>
          <OffersDiscountsCardImage src={DiscountImage} alt="Discount Image" />

          <OffersDiscountsCardTextContainer>
            <OffersDiscountsCardTextTitle>30% Off</OffersDiscountsCardTextTitle>

            <OffersDiscountsCardTextSubtitle>
              Módulo de control del transmisor
            </OffersDiscountsCardTextSubtitle>

            <OffersDiscountsCardTextDescription>
              Controla y regula la transmisión automática del automóvil.
            </OffersDiscountsCardTextDescription>

            <OffersDiscountsCardTextCTAButton>
              Ver referencias
            </OffersDiscountsCardTextCTAButton>
          </OffersDiscountsCardTextContainer>
        </OffersDiscountsCard>

        <OffersDiscountsCard>
          <OffersDiscountsCardImage src={DiscountImage} alt="Discount Image" />

          <OffersDiscountsCardTextContainer>
            <OffersDiscountsCardTextTitle>30% Off</OffersDiscountsCardTextTitle>

            <OffersDiscountsCardTextSubtitle>
              Módulo de control de la batería
            </OffersDiscountsCardTextSubtitle>

            <OffersDiscountsCardTextDescription>
              Controla y regula la carga y descarga de la batería del automóvil,
              así como diversas funciones eléctricas.
            </OffersDiscountsCardTextDescription>

            <OffersDiscountsCardTextCTAButton>
              Ver referencias
            </OffersDiscountsCardTextCTAButton>
          </OffersDiscountsCardTextContainer>
        </OffersDiscountsCard>
      </OffersDiscountsCardsContainer>
    </OffersDiscountsContainer>
  );
};

export default OffersDiscounst;
