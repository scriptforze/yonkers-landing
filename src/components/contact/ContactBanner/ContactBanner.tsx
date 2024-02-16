import React from "react";
import ProductsBannerImg from "@/common/assets/images/products-banner.jpg";
import { BannerContainer, BannerImage, BannerText } from "./styled";

export const ContactBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={ProductsBannerImg} alt="Contact Image" />
      <BannerText>Contacto</BannerText>
    </BannerContainer>
  );
};

export default ContactBanner;
