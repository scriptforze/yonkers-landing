import { HeartFilled, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Grid, Text } from "@nextui-org/react";
import { Button } from "antd";
import { Counter } from "../Counter";

export const SlideProduct = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        background: "#CECECE",
        justifyContent: "space-around",
        marginTop: "64px",
      }}
    >
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              width: "414px",
              height: "385px",
            }}
          >
            <Card
              isHoverable
              isPressable
              css={{
                width: "85px",
                height: "85px",
                display: "flex",
                background: "#FAFAFA",
                flexDirection: "column",
              }}
            >
              <Card.Body>
                <Card.Image src="/assets/images/productSearch.png" />
              </Card.Body>
            </Card>

            <Card
              isHoverable
              isPressable
              css={{
                width: "85px",
                height: "85px",
                display: "flex",
                flexDirection: "column",
                background: "#FAFAFA",
              }}
            >
              <Card.Body>
                <Card.Image src="/assets/images/productSearch.png" />
              </Card.Body>
            </Card>

            <Card
              isHoverable
              isPressable
              css={{
                width: "85px",
                height: "85px",
                display: "flex",
                flexDirection: "column",
                background: "#FAFAFA",
              }}
            >
              <Card.Body>
                <Card.Image src="/assets/images/productSearch.png" />
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card
              css={{
                display: "flex",
                flexDirection: "column",
                width: "264px",
                height: "263px",
                background: "#FAFAFA",
                borderRadius: "8px",
                justifySelf: "center",
              }}
            >
              <Card.Body>
                <Card.Image src="/assets/images/productSearch.png" />
              </Card.Body>
            </Card>
          </div>
        </div>
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
                Bomba de aceite de motor para Hyundai Accent 1995 - 2001 1.5L
                SOHC
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
              <Text style={{ width: "100px" }}>65651SFDFSFD</Text>
            </div>

            <div
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
                52 Unidades disponibles
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
              $690.000
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
              $570.000
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
    </section>
  );
};

export default SlideProduct;
