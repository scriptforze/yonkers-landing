import React from "react";
import ProductsBannerImg from "@/common/assets/images/products-banner.webp";
import { BannerContainer, BannerImage, BannerText } from "./styled";

export const ProductsBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={ProductsBannerImg} alt="products Image" />
      <BannerText>Productos</BannerText>
    </BannerContainer>
  );
};

export default ProductsBanner;
