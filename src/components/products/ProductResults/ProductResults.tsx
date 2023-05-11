import React from "react";
import {
  ProductResultsContainer,
  ProductResultsControls,
  ProductsPagination,
  ProductsResultsCards,
  TotalPaginationText,
} from "./styled";
import { SortingButton } from "../SortingButton";
import { FilterProduct } from "../FilterProduct";
import { ActiveFilters } from "../ActiveFilters";
import { ProductCard } from "@/common/components";
import ProductSearch from "@/common/assets/images/productSearch.png";
import { FilterOptions } from "../FilterOptions";

const ProductResults = () => {
  return (
    <ProductResultsContainer>
      <ProductResultsControls>
        {/* <FilterOptions /> */}
        <SortingButton />
        <FilterProduct />
      </ProductResultsControls>
      <ActiveFilters />
      <ProductsResultsCards>
        <ProductCard
          title="Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L SOHC"
          brand="HYUNDAI"
          price={570000}
          imageURL={ProductSearch}
          lastPrice={690000}
        />
        <ProductCard
          title="Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L SOHC"
          brand="HYUNDAI"
          price={570000}
          imageURL={ProductSearch}
          lastPrice={690000}
        />
        <ProductCard
          title="Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L SOHC"
          brand="HYUNDAI"
          price={570000}
          imageURL={ProductSearch}
          lastPrice={690000}
        />
        <ProductCard
          title="Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L SOHC"
          brand="HYUNDAI"
          price={570000}
          imageURL={ProductSearch}
          lastPrice={690000}
        />
      </ProductsResultsCards>
      <ProductsPagination defaultCurrent={1} total={50} />
      <TotalPaginationText>
        Mostrando 1-18 de 46 artículo(s)
      </TotalPaginationText>
    </ProductResultsContainer>
  );
};

export default ProductResults;
