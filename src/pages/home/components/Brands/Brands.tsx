import { Text, Image } from "@nextui-org/react";

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
          src="/assets/images/chevrolet.png"
          alt="chevrolet image"
          css={{ mixBlendMode: "luminosity" }}
        />
        <Image
          src="/assets/images/ford.png"
          alt="ford image"
          css={{ mixBlendMode: "luminosity" }}
        />
        <Image
          src="/assets/images/toyota.png"
          alt="toyota image"
          css={{ mixBlendMode: "luminosity" }}
        />
      </div>
    </div>
  );
};

export default Brands;
