import Image from "next/image";
import acceptedPayment from "@/common/assets/images/acceptedPayment.svg";
import pagosSeguros from "@/common/assets/images/pagosSeguros.svg";
import efecty from "@/common/assets/images/efecty.svg";
import baloto from "@/common/assets/images/baloto.svg";
import {
  CheckoutPayText,
  CheckoutPayTextPay,
  CheckoutLine,
  CheckoutPayRadius,
  CheckoutContainer,
  CheckoutImageConatainer
} from "./styled";

const CheckoutPay = () => {
  return (
    <CheckoutContainer>
      <CheckoutPayTextPay>Pago</CheckoutPayTextPay>
      <CheckoutImageConatainer>
        <CheckoutPayRadius type="radio" />
        <CheckoutPayText>Tarjeta de Crédito</CheckoutPayText>
      </CheckoutImageConatainer>
      <Image
        src={acceptedPayment}
        width={119}
        height={43}
        alt="Métodos de pago aceptados"
      />
      <CheckoutLine />
      <CheckoutImageConatainer>
        <CheckoutPayRadius type="radio" />
        <CheckoutPayText>Pse</CheckoutPayText>
      </CheckoutImageConatainer>
      <Image
        src={pagosSeguros}
        width={95.32}
        height={40.36}
        alt="Pagos Seguros en Linea"
      />
      <CheckoutLine />
      <CheckoutImageConatainer>
        <CheckoutPayRadius type="radio" />
        <CheckoutPayText>Pago en efectivo</CheckoutPayText>
      </CheckoutImageConatainer>
      <CheckoutImageConatainer>
        <Image
          src={efecty}
          width={91}
          height={25.32}
          alt="fecty"
        />
        <Image
          src={baloto}
          width={96.31}
          height={25.32}
          alt="Baloto"
        />
      </CheckoutImageConatainer>
    </CheckoutContainer>
  );
};

export default CheckoutPay;
