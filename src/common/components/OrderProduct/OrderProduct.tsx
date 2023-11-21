import React from "react";
import { OrderProductCardProps } from "./types";
import { CustomCardImage,
        CustomCardContainer,
        OrderProductText,
        OrderProductPrice } from "./styled";
import Link from "next/link";

const OrderProduct = ({
  id,
  title,
  brand,
  price,
  imageURL,
  alt,
}: OrderProductCardProps) => {
  return (
    <CustomCardContainer>
      <CustomCardImage src={imageURL} alt={alt} />
      <OrderProductText>
        {title + " " + brand}      
      </OrderProductText>
        <OrderProductPrice>
          {price}
        </OrderProductPrice>
      <Link href={`/product-detail/${id}`} />
    </CustomCardContainer>
  );
};

export default OrderProduct;
