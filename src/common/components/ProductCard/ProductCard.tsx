import React from "react";
import { ProductCardProps } from "./types";
import { Button, Text } from "@nextui-org/react";
import { CustomCard, CustomCardImage } from "./styled";
import Link from "next/link";

const ProductCard = ({
  id,
  title,
  brand,
  price,
  imageURL,
  lastPrice,
}: ProductCardProps) => {
  return (
    <CustomCard>
      <CustomCard.Body>
        <CustomCardImage src={imageURL} alt="Product Image" />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            css={{
              color: "#CF0E0E",
              fontWeight: "normal",
              marginRight: "10px",
            }}
          >
            {price}
          </Text>
          <Text
            css={{
              color: "#616161",
              fontWeight: "normal",
              textDecorationLine: "line-through",
            }}
          >
            {lastPrice}
          </Text>
        </div>
        <Text
          css={{
            color: "#0F2555",
            fontWeight: "$semibold",
            fontSize: "14px",
            width: "189px",
          }}
        >
          {title}
        </Text>
        <Text
          css={{
            color: "#616161",
            fontWeight: "normal",
            fontSize: "13px",
            marginBottom: "26px",
          }}
        >
          {brand}
        </Text>
        <Link href={`/product-detail/${id}`}>
          <Button
            auto
            ghost
            css={{
              color: "white",
              borderRadius: "4px",
              borderColor: "#FE7062",
              background: "#FE7062",
              fontSize: "16px",
              fontWeight: "demibold",
              width: "190px",
              padding: "10px 20px 10px 20px",
              height: "40px",
            }}
          >
            Ver producto
          </Button>
        </Link>
      </CustomCard.Body>
    </CustomCard>
  );
};

export default ProductCard;
