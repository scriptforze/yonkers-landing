import React from "react";
import { SearchResultItemProps } from "./types";
import {
  ProductCategory,
  ProductImage,
  ProductInfoContainer,
  ProductName,
  SearchResultItemContainer,
} from "./styled";

const SearchResultItem = ({ item }: SearchResultItemProps) => {
  return (
    <SearchResultItemContainer>
      <ProductImage
        width={68}
        height={68}
        alt={item.name}
        src={item.images?.[0].urls.medium || ""}
      />
      <ProductInfoContainer>
        <ProductName>{item.name}</ProductName>
        <ProductCategory>{item.category?.name}</ProductCategory>
      </ProductInfoContainer>
    </SearchResultItemContainer>
  );
};

export default SearchResultItem;
