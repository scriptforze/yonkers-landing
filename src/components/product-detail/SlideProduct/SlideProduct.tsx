import { HeartFilled } from "@ant-design/icons";
import { Card, Text } from "@nextui-org/react";
import { Button, Col, Row, Space } from "antd";
import { Counter } from "../Counter";
import Image from "next/image";

import { Props } from "./types";
import { useEffect, useState } from "react";
import { Section } from "./styled";

export const SlideProduct = ({ product }: Props) => {
  const [totalStock, setTotalStock] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      const stock = product.product_stocks!.reduce(
        (counter, stock) => counter + stock.stock!,
        0
      );

      const defaultImage = product?.images![0].urls!.small!;
      setSelectedImage(defaultImage);
      setTotalStock(stock);
    }
  }, [product]);

  const changeImage = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <Section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "385px",
          width: "414px",
          padding: "37px 24px",
          backgroundColor: "#FAFAFA",
          borderRadius: "8px",
          marginBottom: "38px",
        }}
      >
        <Row gutter={12}>
          <Col span={6}>
            <Space
              direction="vertical"
              style={{
                overflowY: "auto",
                maxHeight: "315px",
                minHeight: "315px",
              }}
            >
              {product?.images?.map((image) => {
                return (
                  <Card
                    isHoverable
                    isPressable
                    key={image?.id}
                    css={{
                      width: "85px",
                      height: "85px",
                      display: "flex",
                      background: "white",
                      flexDirection: "column",
                      filter: "none",
                    }}
                    onClick={() => changeImage(image?.urls?.small!)}
                  >
                    <Image
                      src={image?.urls?.small!}
                      width={80}
                      height={80}
                      alt="Product Image"
                      style={{
                        filter: "brightness(1.1)",
                        mixBlendMode: "multiply",
                      }}
                    />
                  </Card>
                );
              })}
            </Space>
          </Col>
          <Col>
            <Card
              css={{
                display: "flex",
                flexDirection: "column",
                width: "260px",
                height: "260px",
                background: "#FAFAFA",
                borderRadius: "8px",
                justifySelf: "center",
                marginTop: 25,
              }}
            >
              {selectedImage && (
                <Image
                  width={260}
                  height={260}
                  src={selectedImage}
                  alt="Product Image"
                  style={{
                    filter: "brightness(1.1)",
                    mixBlendMode: "multiply",
                  }}
                />
              )}
            </Card>
          </Col>
        </Row>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "414px",
          height: "385px",
          padding: "24px 58px 18px 24px",
          borderRadius: "8px",
          background: "#FAFAFA",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Text
                css={{
                  color: "#0F2555",
                  fontWeight: "$semibold",
                  fontSize: "23px",
                  lineHeight: "30px",
                  width: "332px",
                  height: "90px",
                }}
              >
                {/* Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L
                SOHC */}
                {product?.name}
              </Text>

              <Button
                style={{
                  background: "none",
                  border: "none",
                  color: "#CF0E0E",
                }}
                shape="circle"
                icon={<HeartFilled />}
              ></Button>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "16px",
                color: "#616161",
                fontWeight: "normal",
                lineHeight: "15px",
                textTransform: "uppercase",
              }}
            >
              <Text style={{ width: "63px", marginRight: "5px" }}>
                SKU/REF:{" "}
              </Text>
              <Text style={{ width: "100px" }}>
                {/* 65651SFDFSFD */}
                {product?.sku}
              </Text>
            </div>

            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "16px",
                fontWeight: "normal",
                color: "#616161",
                lineHeight: "15px",
                textTransform: "uppercase",
              }}
            >
              <Text
                style={{ width: "45px", height: "15px", marginRight: "12px" }}
              >
                Marca:
              </Text>

              <Text
                style={{ width: "62px", height: "15px", marginBottom: "12px" }}
              >
                HYUNDAI
              </Text>
            </div> */}

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "15px",
                textTransform: "uppercase",
              }}
            >
              <Text
                style={{
                  color: "#0F2555",
                  width: "42px",
                  height: "15px",
                  marginRight: "12px",
                }}
              >
                Stock:
              </Text>
              <Text
                style={{
                  color: "#0F2555",
                  width: "165px",
                  height: "15px",
                  marginBottom: "16px",
                }}
              >
                {totalStock} Unidades disponibles
              </Text>
            </div>

            <Text
              css={{
                color: "#0F2555",
                fontWeight: "normal",
                fontSize: "16px",
                width: "43px",
                height: "18px",
                marginBottom: "4px",
              }}
            >
              Precio
            </Text>
            <Text
              css={{
                color: "#616161",
                fontWeight: "normal",
                textDecorationLine: "line-through",
                width: "60px",
                height: "18px",
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              ${product?.price.toLocaleString("es-CO")}
            </Text>
            <Text
              css={{
                color: "#CF0E0E",
                fontWeight: "normal",
                width: "90px",
                height: "25px",
                fontSize: "24px",
                marginBottom: "21px",
              }}
            >
              ${product?.price.toLocaleString("es-CO")}
            </Text>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <Counter />
              </div>

              <Button
                style={{
                  color: "white",
                  borderRadius: "4px",
                  borderColor: "#FE7062",
                  background: "#FE7062",
                  fontSize: "16px",
                  fontWeight: "demibold",
                  width: "190px",
                  height: "40px",
                }}
              >
                Agregar al carrito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SlideProduct;
