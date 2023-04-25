import styled from "styled-components";

export const ProductsHorizontalContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const ProductsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  scrollbar-width: none;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ControlsContainer = styled.div`
  top: 50%;
  z-index: 1;
  width: 100%;
  display: flex;
  position: absolute;
  transform: translateY(-50%);
  justify-content: space-between;
`;

export const ProductContainer = styled.div`
  margin-right: 1rem;
`;
