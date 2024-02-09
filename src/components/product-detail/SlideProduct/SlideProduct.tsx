'use client'

import { usePathname } from 'next/navigation'
// import { HeartFilled } from "@ant-design/icons";
import { Card, Text } from "@nextui-org/react";
import { Button, Col, Row, Space } from "antd";
import { Counter } from "../Counter";
import Image from "next/image";
import { Props } from "./types";
import { useEffect, useState } from "react";
import { Section } from "./styled";

export const SlideProduct = ({ product }: Props) => {
  const [totalStock, setTotalStock] = useState<number>(0);
  const [counter, setCounter] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { name, sku, images, price } = product;
  let stock: number | undefined;
  if (product && product.product_stocks && product.product_stocks.length > 0) {
    stock = product.product_stocks[0].stock;
  }


  const PHONE_NUMBER_WSP = process.env.PHONE_NUMBER_WSP;

  useEffect(() => {
    if (product) {
      // const stock = product.reduce(
      //   (counter, stock) => counter + stock.stock!, 0);

      // const stock: number = product?.stock?.reduce(
      //   (counter, stockItem) => counter + stockItem.stock!, 0);

      const defaultImage = product?.images?.[0]?.urls?.original;
      setSelectedImage(defaultImage);
      setTotalStock(stock);
    }
  }, [product]);

  const changeImage = (image: string) => {
    setSelectedImage(image);
  };

  const pathname = usePathname();

  const handleDataFromChild = (data: number) => {
    setCounter(data);
  }

  return (
    <Section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "550px",
          padding: "40px 0px 0px 20px",
          backgroundColor: "#FAFAFA",
          borderRadius: "8px",
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
              {images?.map((image) => {
                return (
                  <Card
                    isHoverable
                    isPressable
                    key={image?.id}
                    css={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      background: "white",
                      flexDirection: "column",
                      filter: "none",
                    }}
                    onClick={() => changeImage(image?.urls?.original)}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={image?.urls?.original || ""}
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
                width: "220px",
                height: "220px",
                background: "#FAFAFA",
                borderRadius: "8px",
                justifySelf: "center",
                marginTop: 25,
              }}
            >
              {selectedImage && (
                <Image
                  width={220}
                  height={220}
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
          width: "100%",
          maxWidth: "550px",
          height: "350px",
          padding: "20px",
          borderRadius: "8px",
          background: "#FAFAFA",
          justifyContent: "center",
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
                  width: "300px",
                }}
              >
                {name}
              </Text>
              {/* <Button
                style={{
                  background: "none",
                  border: "none",
                  color: "#CF0E0E",
                }}
                shape="circle"
                icon={<HeartFilled />}
              ></Button> */}
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
              <Text style={{ marginRight: "15px" }}>
                SKU/REF:
              </Text>
              <Text>
                {sku}
              </Text>
              {/* <Text style={{ width: "100px" }}>
                Marca: {product?.slug}
              </Text> */}
            </div>
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
                }}
              >
                Stock:
              </Text>
              <Text
                style={{
                  color: counter >= (stock || 0) ? "#008f39 " : "#0F2555",
                  fontSize: counter >= (stock || 0) ? "18px" : "16px",
                  width: "165px",
                  height: "15px",
                  marginBottom: "16px",
                }}
              >
                {stock} Unidades disponibles
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
              Precio:
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
              {`$${(price * counter).toLocaleString("es-CO")}`}
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
              ${((((price) - (price * 0.2)) * counter).toLocaleString("es-CO"))}
            </Text>

            <div
              style={{
                display: "flex",
                // flexDirection: "row",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "15px" }}>
                <Counter
                  onDataFromChild={handleDataFromChild}
                  stock={stock}
                />
              </div>

              <Button
                style={{
                  color: "white",
                  borderRadius: "4px",
                  borderColor: "#FE7062",
                  background: "#FE7062",
                  fontSize: "16px",
                  fontWeight: "demibold",
                  width: "100%",
                  maxWidth: "182px",
                  padding: "5px 3px",
                  height: "40px",
                }}
                // href="/checkout"
                href={
                  `${'https://wa.me/' + PHONE_NUMBER_WSP + '?text=Hola! Estoy interesado en este producto: '}https://yonkersgarage.scriptforze.com` + pathname}
                target="_blank"
              >
                {/* Agregar al carrito */}
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SlideProduct;
