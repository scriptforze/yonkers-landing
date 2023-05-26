import {
  RecommendedContainer,
  RecommendedProductsCardsContainer,
  RecommendedProductsContainer,
  RecommendedTitle,
} from "./styled";
import { ProductCard } from "@/common/components";

const Recommended = () => {
  return (
    <RecommendedContainer>
      <RecommendedTitle>
        Complementa tu compra con estas opciones
      </RecommendedTitle>

      <RecommendedProductsContainer>
        <RecommendedProductsCardsContainer>
          <ProductCard
            price={570000}
            lastPrice={690000}
            title=" Engine Oil Pump for Hyundai Accent 1995 - 2001 1.5L SOHC"
            brand=" HYUNDAI"
            imageURL={"/static/images/productSearch.png"}
          />

          <ProductCard
            price={570000}
            lastPrice={690000}
            title=" Engine Oil Pump for Hyundai Accent 1995 - 2001 1.5L SOHC"
            brand=" HYUNDAI"
            imageURL={"/static/images/productSearch.png"}
          />

          <ProductCard
            price={570000}
            lastPrice={690000}
            title=" Engine Oil Pump for Hyundai Accent 1995 - 2001 1.5L SOHC"
            brand=" HYUNDAI"
            imageURL={"/static/images/productSearch.png"}
          />
        </RecommendedProductsCardsContainer>
      </RecommendedProductsContainer>
    </RecommendedContainer>
  );
};

export default Recommended;
