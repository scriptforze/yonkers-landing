import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const StyledCarousel = styled(Carousel)`
  &.react-multi-carousel-list {
    padding-bottom: ${({ showDots }) => showDots && "34px"};
    & > .react-multi-carousel-track {
      & > .react-multi-carousel-item {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
