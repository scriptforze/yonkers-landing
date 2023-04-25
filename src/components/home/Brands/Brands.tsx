import Image from "next/image";
import { Text } from "@nextui-org/react";

import Ford from "@/common/assets/images/ford.png";
import Toyota from "@/common/assets/images/toyota.png";
import Chevrolet from "@/common/assets/images/chevrolet.png";

const Brands = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text
        size={24}
        color="#ABAAAA"
        weight="semibold"
        css={{ textAlign: "center" }}
      >
        Algunas de nuestras marcas
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "34px 46px",
          justifyContent: "space-around",
          gap: "14px",
        }}
      >
        <Image
          src={Chevrolet}
          alt="chevrolet image"
          style={{
            mixBlendMode: "luminosity",
            width: "73px",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Image
          src={Ford}
          alt="ford image"
          style={{
            mixBlendMode: "luminosity",
            width: "73px",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Image
          src={Toyota}
          alt="toyota image"
          style={{
            mixBlendMode: "luminosity",
            width: "73px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default Brands;
