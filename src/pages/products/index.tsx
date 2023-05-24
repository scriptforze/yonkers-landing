import React, { useState } from "react";
import { Layout } from "@/common/layout";
import {
  Banner,
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
      <Banner />
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
