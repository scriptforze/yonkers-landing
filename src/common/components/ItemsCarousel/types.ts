import { CarouselProps } from "react-multi-carousel";

type BreakpointsItems = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

export interface ItemsCarouselProps extends Omit<CarouselProps, "responsive"> {
  items?: BreakpointsItems;
}
