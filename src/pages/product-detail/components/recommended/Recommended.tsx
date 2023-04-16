import { Button, Card, Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Recommended = () => {
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
        Complementa tu compra con estas opciones
      </Text>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "362px",
            gap: "4px",
            alignItems: "center",
            padding: "10px 20px 10px 20px",
          }}
        >
          <Card
            isHoverable
            isPressable
            css={{
              display: "flex",
              flexDirection: "column",
              width: "478px",
              height: "362px",
            }}
          >
            <Card.Body>
              <Card.Image
                src="/assets/images/productSearch.png"
                width={237}
                height={362}
                css={{ borderRadius: "8px" }}
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
                Engine Oil Pump for Hyundai Accent 1995 - 2001 1.5L SOHC
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

          <Card
            isHoverable
            isPressable
            css={{
              display: "flex",
              flexDirection: "column",
              width: "478px",
              height: "362px",
            }}
          >
            <Card.Body>
              <Card.Image
                src="/assets/images/productSearch.png"
                width={237}
                height={362}
                css={{ borderRadius: "8px" }}
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
                Engine Oil Pump for Hyundai Accent 1995 - 2001 1.5L SOHC
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

          <Card
            isHoverable
            isPressable
            css={{
              display: "flex",
              flexDirection: "column",
              width: "478px",
              height: "362px",
            }}
          >
            <Card.Body>
              <Card.Image
                src="/assets/images/productSearch.png"
                width={237}
                height={362}
                css={{ borderRadius: "8px" }}
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
                Engine Oil Pump for Hyundai Accent 1995 - 2001 1.5L SOHC
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
        </div>
      </div>
    </div>
  );
};

export default Recommended;
