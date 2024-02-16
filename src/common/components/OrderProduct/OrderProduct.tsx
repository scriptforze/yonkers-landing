import React, { useState, useEffect } from "react";
import { OrderProductCardProps } from "./types";
import {
  CustomCardImage,
  CustomCardContainer,
  OrderProductText,
  OrderProductPrice,
  Count,
  CountButton,
  ImageDelete
} from "./styled";
import Link from "next/link";
import Delete from "@/common/assets/images/delete.svg";

const OrderProduct = ({
  id,
  title,
  brand,
  price,
  imageURL,
  alt,
  appear
}: OrderProductCardProps) => {

  const [add, setAdd] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${add} times`;
  });

  return (
    <CustomCardContainer
      marginProps="0px">
      <CustomCardImage src={imageURL} alt={alt} />
      <OrderProductText>
        {title + " " + brand}
      </OrderProductText>
      <OrderProductPrice
        sizeProps={appear === "false" ? "" : "-96px"}
        lineHeightProps={appear === "false" ? "" : "40px"}
        marginProps={appear === "false" ? "" : "10px 0px"}
      >
        ${price.toLocaleString("es-CO")}
      </OrderProductPrice>

      {appear === "false" ? (
        ""
      ) : (
        <Count>
          <CountButton
            onClick={() => setAdd(add - 1)}
            sizeProps="8px 0px 0px 8px">
            -
          </CountButton>
          <OrderProductText
            sizeProps="16px"
            weightProps="400"
            widthProps="45px"
            colorProps="#0F2555"
            borderProps="solid 1px #FE7062"
            radiusProps="8px"
            marginProps="center"
            lineHeightProps="Source Sans Pro">{add}</OrderProductText>
          <CountButton onClick={() => setAdd(add + 1)}>
            +
          </CountButton>
          <ImageDelete src={Delete} alt="Image close card" />
        </Count>
      )}
      <Link href={`/product-detail/${id}`} />
    </CustomCardContainer>
  );
};

export default OrderProduct;
