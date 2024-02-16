import React from "react";
import { ProductsContainerProps } from "./types";
import { ResultsBreadcrumbs } from "../ResultsBreadcrumbs";
import {
  ProductsTitle,
  ProductsContainerWrapper,
  ProductsContentContainer,
} from "./styled";

const ProductsContainer = ({ children }: ProductsContainerProps) => {
  return (
    <ProductsContainerWrapper>
      <ResultsBreadcrumbs />
      <ProductsTitle>Productos</ProductsTitle>
      <ProductsContentContainer>{children}</ProductsContentContainer>
    </ProductsContainerWrapper>
  );
};

export default ProductsContainer;
