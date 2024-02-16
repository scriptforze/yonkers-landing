import React from "react";
import { PaymentCardProps } from "./types";
import { Text } from "@nextui-org/react";
import { CustomCard } from "./styled";
import Link from "next/link";

const PaymentCard = ({
  id,
  name,
  cardNumber,
  netCredit
}: PaymentCardProps) => {
  return (
    <CustomCard>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderRadius: "8px",
              border: "solid 1px #172D5E",
              padding: "10px"
            }}
          >
            <Text
              css={{
                color: "#212B36",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "16px"
              }}
            >
              {netCredit}
            </Text>
            <Text
              css={{
                color: "#000000",
                fontWeight: "300",
                fontSize: "16px",
              }}
            >
              {cardNumber}
            </Text>
            <Text
              css={{
                color: "#000000",
                fontWeight: "300",
                fontSize: "16px",
              }}
            >
              {name}
            </Text>
          </div>
          <Text
              css={{
                color: "#212B36",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18px",
                padding: "20px 0px 14px 0px",
                cursor: "pointer",
                width: "160px",
                margin: "0px 0px -14px auto"
              }}
            >
              Método predeterminado
            </Text>
          <Link href={`/product-detail/${id}`}>
            <Text
              css={{
                color: "#FE7062",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "48px",
                textAlign: "right",
              }}
            >
              Eliminar
            </Text>
          </Link>
        </div>  
    </CustomCard>
  );
};

export default PaymentCard;
