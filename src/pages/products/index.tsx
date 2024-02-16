import React, { useState } from "react";
import { Layout } from "@/common/layout";
import {
  ProductsBanner,
  ProductResults,
  ProductsContainer,
} from "@/components/products";
import { ProductFilters } from "@/components/products/ProductFilters";
import { Responsive } from "@/common/components";
import { Filters } from "@/components/products/ProductFilters/types";

const Product = () => {
  const [filters, setFilters] = useState<Filters>({});

  const onFiltersChanged = (filters: Filters) => {
    setFilters(filters);
  };

  return (
    <Layout>
      <ProductsBanner />
      <ProductsContainer>
        <Responsive lg xl xxl>
          <ProductFilters onFiltersChanged={onFiltersChanged} />
        </Responsive>
        <ProductResults filters={filters} />
      </ProductsContainer>
    </Layout>
  );
};

export default Product;
