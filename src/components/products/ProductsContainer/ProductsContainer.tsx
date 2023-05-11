import React from "react";
import { ProductsContainerProps } from "./types";
import { ProductsContainerWrapper, ProductsTitle } from "./styled";
import { ResultsBreadcrumbs } from "../ResultsBreadcrumbs";

const ProductsContainer = ({ children }: ProductsContainerProps) => {
  return (
    <ProductsContainerWrapper>
      <ResultsBreadcrumbs />
      <ProductsTitle>Productos</ProductsTitle>
      {children}
    </ProductsContainerWrapper>
  );
};

export default ProductsContainer;
