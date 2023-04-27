import { ProductCard } from "@/common/components/ProductCard";
import ProductSearch from "@/common/assets/images/productSearch.png";
import { ScrollableProducts } from "@/common/components/ScrollableProducts";

import {
  MostWantedProductsTitle,
  MostWantedProductsHeader,
  MostWantedProductsCTAButton,
  MostWantedProductsContainer,
} from "./styled";

import { PlusCircleOutlined } from "@ant-design/icons";

export const MostWantedProducts = () => {
  return (
    <MostWantedProductsContainer>
      <MostWantedProductsHeader>
        <MostWantedProductsTitle>
          Productos más buscados
        </MostWantedProductsTitle>
        <MostWantedProductsCTAButton icon={<PlusCircleOutlined />}>
          Ver todos
        </MostWantedProductsCTAButton>
      </MostWantedProductsHeader>
      <ScrollableProducts.Container numProducts={1}>
        <ScrollableProducts.ProductContainer>
          <ProductCard
            price={570000}
            brand="Hyundai"
            lastPrice={690000}
            imageURL={ProductSearch}
            title="Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L SOHC"
          />
        </ScrollableProducts.ProductContainer>
        <ScrollableProducts.ProductContainer>
          <ProductCard
            price={570000}
            brand="Hyundai"
            lastPrice={690000}
            imageURL={ProductSearch}
            title="Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L SOHC"
          />
        </ScrollableProducts.ProductContainer>
      </ScrollableProducts.Container>
    </MostWantedProductsContainer>
  );
};

export default MostWantedProducts;
