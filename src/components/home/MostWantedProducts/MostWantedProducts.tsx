import { Text, Button, Card } from "@nextui-org/react";
import { ScrollableProducts } from "@/common/components/ScrollableProducts";

import Image from "next/image";
import Max from "@/common/assets/images/max.png";
import ProductSearch from "@/common/assets/images/productSearch.png";

export const MostWantedProducts = () => {
  return (
    <div
      style={{
        flexDirection: "column",
        marginTop: "32px",
        background: "#E8E8E8",
        display: "flex",
      }}
    >
      <Text h3 size={24} color="#172D5E" weight="semibold">
        Productos más buscados
      </Text>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          light
          style={{
            color: "#000000",
            fontSize: "16px",
            alignSelf: "flex-end",
            display: "flex",
            flexDirection: "row",
            marginBottom: "18px",
          }}
        >
          <Image
            width={17}
            height={17}
            src={Max}
            style={{
              width: "17px",
              height: "auto",
              objectFit: "contain",
            }}
            alt="max products image"
          />
          Ver todos
        </Button>

        <ScrollableProducts.Container numProducts={1}>
          <ScrollableProducts.Product>
            <Card
              isHoverable
              isPressable
              css={{
                width: "237px",
                height: "362px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Body>
                <Image
                  src={ProductSearch}
                  alt="product image"
                  style={{
                    width: "auto",
                    height: "131px",
                    borderRadius: "8px",
                    objectFit: "contain",
                  }}
                />

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
                  Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L
                  SOHC
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
              </Card.Body>
            </Card>
          </ScrollableProducts.Product>
          <ScrollableProducts.Product>
            <Card
              isHoverable
              isPressable
              css={{
                width: "237px",
                height: "362px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Body>
                <Image
                  src={ProductSearch}
                  alt="product image"
                  style={{
                    width: "auto",
                    height: "131px",
                    borderRadius: "8px",
                    objectFit: "contain",
                  }}
                />

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
                      display: "flex",
                      flexDirection: "row",
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
                  Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L
                  SOHC
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
                    color: "#FE7062",
                    borderRadius: "4px",
                    borderColor: "#FE7062",
                    background: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "demibold",
                    width: "190px",
                    height: "40px",
                    padding: "10px 20px 10px 20px",
                  }}
                >
                  Ver producto
                </Button>
              </Card.Body>
            </Card>
          </ScrollableProducts.Product>
        </ScrollableProducts.Container>
      </div>
    </div>
  );
};

export default MostWantedProducts;
