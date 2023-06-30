import {
  RecommendedContainer,
  RecommendedProductsCardsContainer,
  RecommendedProductsContainer,
  RecommendedTitle,
} from "./styled";
import { ItemsCarousel, ProductCard } from "@/common/components";
import ProductSearch from "@/common/assets/images/productSearch.png";

const Recommended = () => {
  return (
    <RecommendedContainer>
      <RecommendedTitle>
        Complementa tu compra con estas opciones
      </RecommendedTitle>

      <RecommendedProductsContainer>
        <ItemsCarousel
          keyBoardControl={true}
          removeArrowOnDeviceType={["xs", "sm", "md"]}
        >
          <ProductCard
            id={1}
            price={570000}
            lastPrice={690000}
            title=" Engine Oil Pump for Hyundai Accent 1995 - 2001 1.5L SOHC"
            brand=" HYUNDAI"
            imageURL={ProductSearch}
          />

          <ProductCard
            id={2}
            price={570000}
            lastPrice={690000}
            title=" Engine Oil Pump for Hyundai Accent 1995 - 2001 1.5L SOHC"
            brand=" HYUNDAI"
            imageURL={ProductSearch}
          />

          <ProductCard
            id={3}
            price={570000}
            lastPrice={690000}
            title=" Engine Oil Pump for Hyundai Accent 1995 - 2001 1.5L SOHC"
            brand=" HYUNDAI"
            imageURL={ProductSearch}
          />
        </ItemsCarousel>
      </RecommendedProductsContainer>
    </RecommendedContainer>
  );
};

export default Recommended;
