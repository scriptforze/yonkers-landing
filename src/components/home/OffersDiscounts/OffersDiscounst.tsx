import { Grid, Text, Image, Button } from "@nextui-org/react";

const OffersDiscounst = () => {
  return (
    <Grid.Container css={{ justifyContent: "center", background: "#E8E8E8" }}>
      <Grid
        css={{
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Text
          h1
          size={24}
          color="#000000"
          weight="semibold"
          css={{ padding: "32px 52px 16px 52px", marginBottom: "0" }}
        >
          Ofertas y Descuentos 2023
        </Text>

        <Text
          h1
          size={18}
          color="#000000"
          weight="light"
          css={{ padding: "0 19px 62px 19px" }}
        >
          ¡Grandes ofertas en repuestos y accesorios para autos! Mejora y mantén
          tu vehículo a precios imbatibles. ¡No te lo pierdas, oferta por tiempo
          limitado!
        </Text>
      </Grid>

      <Grid
        css={{
          position: "relative",
          width: "343px",
          height: "302px",
          marginBottom: "12px",
        }}
      >
        <Image
          src="/static/images/discountImage.png"
          alt="discount image"
          containerCss={{ position: "absolute", borderRadius: "8px" }}
        />

        <div
          style={{
            position: "absolute",
            borderRadius: "8px",
            height: "302px",
            background: "rgba(28, 37, 54, 0.8)",
            padding: "16px",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Text
            size={24}
            color="#E6E6E6"
            weight="bold"
            css={{ marginBottom: "24px" }}
          >
            30% Off
          </Text>

          <Text
            size={22}
            color="#E6E6E6"
            weight="semibold"
            css={{
              marginBottom: "10px",
            }}
          >
            Unidad de control del motor
          </Text>

          <Text
            size={16}
            color="#E6E6E6"
            weight="normal"
            css={{
              marginBottom: "40px",
            }}
          >
            controla y regula diversas funciones del motor, incluido el
            rendimiento y la emisión de gases.
          </Text>

          <Button
            css={{
              backgroundColor: "rgba(232, 232, 232, 1)",
              borderRadius: "4px",
              color: "#252525",
              padding: "11px 52px",
              width: "177px",
              alignSelf: "center",
              flexDirection: "column",
              display: "flex",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Ver Referencias
          </Button>
        </div>
      </Grid>

      <Grid
        css={{
          position: "relative",
          width: "343px",
          height: "302px",
          marginBottom: "12px",
        }}
      >
        <Image
          src="/static/images/discountImage.png"
          alt="discount image"
          containerCss={{ position: "absolute", borderRadius: "8px" }}
        />

        <div
          style={{
            position: "absolute",
            borderRadius: "8px",
            height: "302px",
            background: "rgba(28, 37, 54, 0.8)",
            padding: "16px",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Text
            size={24}
            color="#E6E6E6"
            weight="bold"
            css={{ marginBottom: "27px" }}
          >
            30% Off
          </Text>

          <Text
            size={22}
            color="#E6E6E6"
            weight="semibold"
            css={{
              marginBottom: "16px",
            }}
          >
            Módulo de control del transmisor
          </Text>

          <Text
            size={16}
            color="#E6E6E6"
            weight="normal"
            css={{
              marginBottom: "31px",
            }}
          >
            Controla y regula la transmisión automática del automóvil.
          </Text>

          <Button
            css={{
              backgroundColor: "rgba(232, 232, 232, 1)",
              borderRadius: "4px",
              color: "#252525",
              padding: "11px 52px",
              width: "177px",
              alignSelf: "center",
              flexDirection: "column",
              display: "flex",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Ver Referencias
          </Button>
        </div>
      </Grid>

      <Grid
        css={{
          position: "relative",
          width: "343px",
          height: "302px",
          marginBottom: "12px",
        }}
      >
        <Image
          src="/static/images/discountImage.png"
          alt="discount image"
          containerCss={{
            position: "absolute",
            borderRadius: "8px",
          }}
        />

        <div
          style={{
            position: "absolute",
            borderRadius: "8px",
            height: "302px",
            background: "rgba(28, 37, 54, 0.8)",
            padding: "16px",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Text
            size={24}
            color="#E6E6E6"
            weight="bold"
            css={{ marginBottom: "12px" }}
          >
            30% Off
          </Text>

          <Text
            size={22}
            color="#E6E6E6"
            weight="semibold"
            css={{
              marginBottom: "10px",
            }}
          >
            Módulo de control de la batería
          </Text>

          <Text
            size={16}
            color="#E6E6E6"
            weight="normal"
            css={{
              marginBottom: "30px",
            }}
          >
            Controla y regula la carga y descarga de la batería del automóvil,
            así como diversas funciones eléctricas.
          </Text>

          <Button
            css={{
              backgroundColor: "rgba(232, 232, 232, 1)",
              borderRadius: "4px",
              color: "#252525",
              padding: "11px 52px",
              width: "177px",
              alignSelf: "center",
              flexDirection: "column",
              display: "flex",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Ver Referencias
          </Button>
        </div>
      </Grid>
    </Grid.Container>
  );
};

export default OffersDiscounst;
