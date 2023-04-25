import { Grid, Text } from "@nextui-org/react";

import Image from "next/image";
import ShipCar from "@/common/assets/images/shipCar.png";

export const SecondarySlider = () => {
  return (
    <Grid.Container
      xs={12}
      sm={12}
      md={12}
      xl={12}
      css={{
        background: "#BCC7DC",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Grid
        css={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "16px 0 10px 0",
        }}
      >
        <Image alt="ship car image" src={ShipCar} width={59} />
      </Grid>

      <Grid
        css={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          paddingBottom: "0",
          flexDirection: "column",
        }}
      >
        <Text
          h1
          size={24}
          color="#464646"
          weight="bold"
          css={{
            alignItems: "center",
            textAlign: "center",
            margin: "0",
          }}
        >
          Envíos
        </Text>

        <Text
          h1
          size={18}
          color="#616161"
          weight="normal"
          css={{
            textAlign: "center",
            padding: "4px 30px 45px 30px",
            width: "340",
          }}
        >
          Hacemos envíos de partes y accesorios a todo el territorio nacional
        </Text>
      </Grid>
    </Grid.Container>
  );
};

export default SecondarySlider;
