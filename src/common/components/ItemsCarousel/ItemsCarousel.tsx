import React from "react";
import { ItemsCarouselProps } from "./types";
import { ResponsiveType } from "react-multi-carousel";
import { StyledCarousel } from "./styled";

const ItemsCarousel = ({ items, children, ...props }: ItemsCarouselProps) => {
  const responsive: ResponsiveType = {
    xs: {
      items: items?.xs || 1,
      breakpoint: { max: 575, min: 0 },
    },
    sm: {
      items: items?.sm || 2,
      breakpoint: { max: 767, min: 576 },
    },
    md: {
      items: items?.md || 3,
      breakpoint: { max: 991, min: 768 },
    },
    lg: {
      items: items?.lg || 4,
      breakpoint: { max: 1199, min: 992 },
    },
    xl: {
      items: items?.xl || 4,
      breakpoint: { max: 1599, min: 1200 },
    },
    xxl: {
      items: items?.xxl || 5,
      breakpoint: { min: 1600, max: Infinity },
    },
  };

  return (
    <StyledCarousel responsive={responsive} {...props}>
      {children}
    </StyledCarousel>
  );
};

export default ItemsCarousel;
