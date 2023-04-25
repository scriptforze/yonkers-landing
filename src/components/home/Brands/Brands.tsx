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
          src="/static/images/chevrolet.png"
          alt="chevrolet image"
          css={{ mixBlendMode: "luminosity" }}
        />
        <Image
          src="/static/images/ford.png"
          alt="ford image"
          css={{ mixBlendMode: "luminosity" }}
        />
        <Image
          src="/static/images/toyota.png"
          alt="toyota image"
          css={{ mixBlendMode: "luminosity" }}
        />
      </div>
    </div>
  );
};

export default Brands;
