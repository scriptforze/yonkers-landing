import { Button, Text } from "@nextui-org/react";
import { CustomCard, CustomCardImage } from "./styled";
import React from "react";
import { ProductCardProps } from "./types";

const ProductCard = ({ imageURL, title }: ProductCardProps) => {
  return (
    <CustomCard>
      <CustomCard.Body>
        <CustomCardImage src="/assets/images/productSearch.png" />

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
            $570.000
          </Text>
          <Text
            css={{
              color: "#616161",
              fontWeight: "normal",
              textDecorationLine: "line-through",
            }}
          >
            $690.000
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
          Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L SOHC
        </Text>
        <Text
          css={{
            color: "#616161",
            fontWeight: "normal",
            fontSize: "13px",
            marginBottom: "26px",
          }}
        >
          HYUNDAI
        </Text>
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
      </CustomCard.Body>
    </CustomCard>
  );
};

export default ProductCard;
