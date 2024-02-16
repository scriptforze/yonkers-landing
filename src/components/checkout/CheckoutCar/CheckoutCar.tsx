import { OrderProduct } from "@/common/components/OrderProduct";
import {
  CheckoutCarText,
  CheckoutCarContainer,
  CheckoutCarTotal
} from "./styled";

const CheckoutCar = () => {

  return (
    <>
      <CheckoutCarContainer>
        <CheckoutCarText
          widthProps="252px"
        >Carrito</CheckoutCarText>
        <OrderProduct
          key={1}
          id={1}
          price={10000}
          lastPrice={50000}
          title={"Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L"}
          brand={"ACME"}
          imageURL={"http://localhost:3000/img/brakepad1.jpg"}
          alt={"Description imag 1"}
        />
        <OrderProduct
          key={2}
          id={2}
          price={60000}
          lastPrice={5400}
          title={"KMD: lñkajsdf  3736"}
          brand={"SOHC"}
          imageURL={"http://localhost:3000/img/sparkplugset3.jpg"}
          alt={"Description imag 2"}
        />
        <OrderProduct
          key={3}
          id={3}
          price={176000}
          lastPrice={15400}
          title={"KMD: lñkajsdf  3736 para Hyundai Accent 1995 - 2001 1.5L"}
          brand={"MICHELLIN"}
          imageURL={"http://localhost:3000/img/tire1.jpg"}
          alt={"Description imag 3"}
        />
        <CheckoutCarTotal>
          <CheckoutCarText
            sizeProps="16px"
            fontColorProps="#000000"
            marginProps="0px">
            Total
          </CheckoutCarText>
          <CheckoutCarText
            sizeProps="24px"
            fontColorProps="#000000"
            marginProps="0px">
            $246.000
          </CheckoutCarText>
        </CheckoutCarTotal>
      </CheckoutCarContainer>
    </>
  );
};

export default CheckoutCar;
