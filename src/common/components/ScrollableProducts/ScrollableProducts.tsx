import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
  Button,
  ControlsContainer,
  ProductContainer,
  ProductsContainer,
  ProductsHorizontalContainer,
} from "./styled";

const Container = ({
  children,
  numProducts,
}: {
  children: React.ReactElement[];
  numProducts: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [productWidth, setProductWidth] = useState(0);
  const [productMargin, setProductMargin] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const productSelector = containerRef.current?.querySelector(".product");
    const productElement =
      productSelector && (productSelector as HTMLDivElement);

    if (typeof window !== "undefined" && productElement) {
      const productWidth = productElement.offsetWidth;
      const productMargin = parseInt(
        window.getComputedStyle(productElement).marginRight
      );

      const containerWidth = containerRef.current?.offsetWidth || 0;
      const totalProductWidth = (productWidth + productMargin) * numProducts;
      const spaceBetweenProducts =
        (containerWidth - totalProductWidth) / (numProducts - 1);
      const totalWidth =
        totalProductWidth + spaceBetweenProducts * (numProducts - 1);

      setProductWidth(productWidth + spaceBetweenProducts);
      setProductMargin(productMargin + spaceBetweenProducts - productMargin);

      containerRef.current?.style.setProperty("width", `${totalWidth}px`);
    }
  }, [numProducts]);

  const handleScrollLeft = () => {
    setCurrentPosition((currentPosition) => {
      let newPosition = currentPosition + productWidth;
      if (newPosition > 0) {
        newPosition = 0;
      }
      return newPosition;
    });
  };

  const handleScrollRight = () => {
    setCurrentPosition((currentPosition) => {
      let newPosition = currentPosition - productWidth;
      const maxPosition =
        -(productWidth + productMargin) * (children?.length - numProducts);

      if (newPosition < maxPosition) {
        newPosition = maxPosition;
      }

      return newPosition;
    });
  };

  return (
    <ProductsHorizontalContainer ref={containerRef}>
      <ProductsContainer
        className="products"
        style={{ transform: `translateX(${currentPosition}px)` }}
      >
        {children}
      </ProductsContainer>
      <ControlsContainer>
        <Button className="left" onClick={handleScrollLeft}>
          &lt;
        </Button>
        <Button className="right" onClick={handleScrollRight}>
          &gt;
        </Button>
      </ControlsContainer>
    </ProductsHorizontalContainer>
  );
};

const Product = ({ children }: { children: ReactNode }) => {
  return (
    <ProductContainer>
      <div className="product">{children}</div>
    </ProductContainer>
  );
};

const ScrollableProducts = {
  Product: Product,
  Container: Container,
};

export default ScrollableProducts;