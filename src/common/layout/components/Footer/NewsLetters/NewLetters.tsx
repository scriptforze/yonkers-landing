import { Button, Text, CSS } from "@nextui-org/react";

const NewLetters = () => {
  return (
    <div style={{ background: "#091D47", padding: "16px 22px 32px 16px" }}>
      <Text
        css={{ color: "#FAFAFA", fontWeight: "$bold", marginBottom: "16px" }}
      >
        BOLETÍN INFORMATIVO
      </Text>

      <Text
        size={16}
        css={{ color: "#FAFAFA", fontWeight: "$normal", marginBottom: "16px" }}
      >
        Recibe en tu bandeja de correo la última información sobre carros,
        partes y accesorios. Mantente al día con nuestro boletín.
      </Text>

      <input
        type="text"
        placeholder="Tu correo electrónico"
        style={{
          width: "100%",
          borderRadius: "2px",
          height: "48px",
          fontSize: "normal",
          padding: "13px 115px 15px 13px",
        }}
      />

      <Button
        css={{
          background: "#FE7062",
          fontSize: "16px",
          marginTop: "16px",
          marginBottom: "32px",
          borderRadius: "4px",
          width: "133px",
          height: "48px",
          fontWeight: "$bold",
        }}
      >
        Subscríbete
      </Button>

      <Text size={12} css={{ color: "#FAFAFA", fontWeight: "normal" }}>
        © 2023 Yonker’s Garage Autopartes
      </Text>

      <Text size={12} css={{ color: "#FAFAFA", fontWeight: "normal" }}>
        Todos los Derechos Reservados
      </Text>
    </div>
  );
};

export default NewLetters;
