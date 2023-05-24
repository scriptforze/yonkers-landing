import ShipCar from "@/common/assets/images/shipCar.png";
import CustomerService from "@/common/assets/images/customer-support.png";
import SecurePayments from "@/common/assets/images/tarjeta-de-debito.png";
import {
  SecondarySliderItem,
  SecondarySliderText,
  SecondarySliderTitle,
  SecondarySliderContainer,
  SecondarySliderTextContainer,
  SecondarySliderImageContainer,
  SecondarySliderImage,
} from "./styled";
import { ItemsCarousel, Responsive } from "@/common/components";

export const SecondarySlider = () => {
  return (
    <SecondarySliderContainer>
      <SecondarySliderItem>
        <SecondarySliderImageContainer>
          <SecondarySliderImage alt="ship car image" src={ShipCar} />
        </SecondarySliderImageContainer>

        <SecondarySliderTextContainer>
          <SecondarySliderTitle level={3}>ENVÍOS</SecondarySliderTitle>

          <SecondarySliderText>
            Hacemos envíos de partes y accesorios a todo el territorio nacional
          </SecondarySliderText>
        </SecondarySliderTextContainer>
      </SecondarySliderItem>

      <Responsive lg xl xxl>
        <SecondarySliderItem>
          <SecondarySliderImageContainer>
            <SecondarySliderImage alt="ship car image" src={CustomerService} />
          </SecondarySliderImageContainer>

          <SecondarySliderTextContainer>
            <SecondarySliderTitle level={3}>
              ASESORIAS GRATUITAS
            </SecondarySliderTitle>

            <SecondarySliderText>
              Sin ningún costo te orientamos sobre los respuestos o partes que
              necesites
            </SecondarySliderText>
          </SecondarySliderTextContainer>
        </SecondarySliderItem>
      </Responsive>

      <Responsive xl xxl>
        <SecondarySliderItem>
          <SecondarySliderImageContainer>
            <SecondarySliderImage alt="ship car image" src={SecurePayments} />
          </SecondarySliderImageContainer>

          <SecondarySliderTextContainer>
            <SecondarySliderTitle level={3}>PAGOS SEGUROS</SecondarySliderTitle>

            <SecondarySliderText>
              Aceptamos todas las tarjetas. Multiples métodos de pago en nuestra
              plataforma.
            </SecondarySliderText>
          </SecondarySliderTextContainer>
        </SecondarySliderItem>
      </Responsive>
    </SecondarySliderContainer>
  );
};

export default SecondarySlider;
