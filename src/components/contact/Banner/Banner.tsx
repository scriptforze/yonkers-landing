import React from "react";
import ProductsBannerImg from "@/common/assets/images/products-banner.jpg";
import { BannerContainer, BannerImage, BannerText } from "./styled";

export const ContactBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={ProductsBannerImg} alt="products Image" />
      <BannerText>Contacto</BannerText>
    </BannerContainer>
  );
};

export default ContactBanner;

// const getScreenSize = (width: number) => {
//   if (width >= 0 && width <= 575) return "xs";
//   if (width >= 576 && width <= 767) return "sm";
//   if (width >= 768 && width <= 991) return "md";
//   if (width >= 992 && width <= 1199) return "lg";
//   if (width >= 1200 && width <= 1399) return "xl";
//   if (width >= 1400) return "xxl";
//   return null;