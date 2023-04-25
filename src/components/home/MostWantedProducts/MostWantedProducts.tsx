import { ScrollableProducts } from "@/common/components/ScrollableProducts";
import { Grid, Text, Image, Button, Card, Row } from "@nextui-org/react";

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
            css={{
              width: "17px",
            }}
            src="/assets/images/max.png"
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

        {/* <div
          style={{
            display: "flex",
            height: "362px",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
            padding: "17px 0 32px 16px",
          }}
        >
          <Card
            isHoverable
            isPressable
            css={{
              display: "flex",
              flexDirection: "column",
              width: "800px",
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
        </div> */}
      </div>
    </div>
  );
};

export default MostWantedProducts;
