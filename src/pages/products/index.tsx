import React from "react";
import { Layout } from "@/common/layout";
import {
  Banner,
  ProductResults,
  ProductsContainer,
} from "@/components/products";

const Product = () => {
  return (
    <Layout>
      <Banner />
      <ProductsContainer>
        <ProductResults />
      </ProductsContainer>
    </Layout>
  );
};

export default Product;
