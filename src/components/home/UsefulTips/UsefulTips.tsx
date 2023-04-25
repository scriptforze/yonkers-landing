import { Button, Grid, Image, Text } from "@nextui-org/react";

const UsefulTips = () => {
  return (
    <div
      style={{
        marginTop: "37px",
        padding: "32px  16px ",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text
        h1
        size={24}
        color="#172D5E"
        weight="semibold"
        css={{
          textAlign: "left",
          marginBottom: "24px",
        }}
      >
        Consejos útiles
      </Text>

      <Grid
        css={{
          position: "relative",
          marginBottom: "12px",
          height: "226px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          src="/assets/images/usefulTipsImage.png"
          alt="useful tips image"
          containerCss={{
            position: "absolute",
            borderRadius: "8px",
          }}
        />

        <div
          style={{
            position: "absolute",
            borderRadius: "8px",
            background: "rgba(28, 37, 54, 0.8)",
            padding: "16px",
            flexDirection: "column",
            display: "flex",
            height: "226px",
          }}
        >
          <Text
            size={22}
            color="#E6E6E6"
            weight="semibold"
            css={{ marginBottom: "24px" }}
          >
            Unidad de control del motor (ECU)
          </Text>

          <Text
            size={16}
            color="#E6E6E6"
            weight="normal"
            css={{
              marginBottom: "10px",
            }}
          >
            mantener el motor en buen estado y asegurarse de que esté
            funcionando de sen ...
          </Text>

          <Button
            light
            style={{
              color: "#E6E6E6",
              fontSize: "20px",
              alignSelf: "flex-end",
              display: "flex",
              flexDirection: "row",
            }}
          >
            Leer más...
          </Button>
        </div>
      </Grid>

      <Grid
        css={{
          position: "relative",
          marginBottom: "12px",
          height: "226px",
        }}
      >
        <Image
          src="/assets/images/usefulTipsImage2.png"
          alt="useful tips image 2"
          containerCss={{ position: "absolute", borderRadius: "8px" }}
        />

        <div
          style={{
            position: "absolute",
            borderRadius: "8px",
            background: "rgba(28, 37, 54, 0.8)",
            padding: "16px",
            flexDirection: "column",
            display: "flex",
            height: "226px",
          }}
        >
          <Text
            size={22}
            color="#E6E6E6"
            weight="semibold"
            css={{ marginBottom: "27px" }}
          >
            Módulo de control del transmisor (TCM)
          </Text>

          <Text
            size={16}
            color="#E6E6E6"
            weight="normal"
            css={{
              marginBottom: "16px",
            }}
          >
            Asegurarse de realizar un mantenimiento adecuado de la
            transmisión...
          </Text>

          <Button
            light
            style={{
              color: "#E6E6E6",
              fontSize: "20px",
              alignSelf: "flex-end",
              display: "flex",
              flexDirection: "row",
            }}
          >
            Leer más...
          </Button>
        </div>
      </Grid>

      <Grid
        css={{
          position: "relative",
          marginBottom: "12px",
          height: "226px",
        }}
      >
        <Image
          src="/assets/images/usefulTipsImage.png"
          alt="useful tips image"
          containerCss={{
            position: "absolute",
            borderRadius: "8px",
          }}
        />

        <div
          style={{
            position: "absolute",
            borderRadius: "8px",
            background: "rgba(28, 37, 54, 0.8)",
            padding: "16px",
            flexDirection: "column",
            display: "flex",
            height: "226px",
          }}
        >
          <Text
            size={22}
            color="#E6E6E6"
            weight="bold"
            css={{ marginBottom: "12px" }}
          >
            Módulo de control de la batería (BCM)
          </Text>

          <Text
            size={16}
            color="#E6E6E6"
            weight="normal"
            css={{
              marginBottom: "10px",
            }}
          >
            Mantener la batería cargada y protegerla de las fluctuaciones de ...
          </Text>

          <Button
            light
            style={{
              color: "#E6E6E6",
              fontSize: "20px",
              alignSelf: "flex-end",
              display: "flex",
              flexDirection: "row",
            }}
          >
            Leer más...
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default UsefulTips;
