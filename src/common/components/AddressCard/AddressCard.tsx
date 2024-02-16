import React from "react";
import { AddressCardProps } from "./types";
import { Text } from "@nextui-org/react";
import { CustomCard } from "./styled";
import Link from "next/link";

const AddressCard = ({
  id,
  name,
  address,
  city,
  country,
  phone
}: AddressCardProps) => {
  return (
    <CustomCard>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            css={{
              color: "#000000",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            {name}
          </Text>
          <Text
            css={{
              color: "#000000",
              fontWeight: "300",
              fontSize: "16px",
            }}
          >
            {address}
          </Text>
          <Text
            css={{
              color: "#000000",
              fontWeight: "300",
              fontSize: "16px",
            }}
          >
            {city}
          </Text>
          <Text
            css={{
              color: "#000000",
              fontWeight: "300",
              fontSize: "16px",
            }}
          >
            {country}
          </Text>
          <Text
            css={{
              color: "#000000",
              fontWeight: "300",
              fontSize: "16px",
            }}
          >
            {phone}
          </Text>
          <Text
            css={{
              color: "#212B36",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "18px"
            }}
          >
            Dirección predeterminada
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px"
            }}
          >
            <Link href={`/product-detail/${id}`}>
              <Text
                css={{
                  color: "#212B36",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "48px"
                }}
              >
                Editar
              </Text>
            </Link>
            <Text
                css={{
                  color: "#212B36",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "48px"
                }}
              >
                |
              </Text>
            <Link href={`/product-detail/${id}`}>
              <Text
                css={{
                  color: "#FE7062",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "48px"
                }}
              >
                Eliminar
              </Text>
            </Link>
          </div>
        </div>  
    </CustomCard>
  );
};

export default AddressCard;
