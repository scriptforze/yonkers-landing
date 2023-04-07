import { Text, Button } from "@nextui-org/react";

const CreateAcount = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px 19px 16px 30px ",
      }}
    >
      <Text
        h3
        size={24}
        color="#0F2555"
        weight="semibold"
        css={{ textAlign: "center" }}
      >
        Crea tu cuenta para sacarle el máximo provecho a la tienda
      </Text>

      <ul style={{ listStyleType: "circle" }}>
        <li>
          <Text h3 size={16} color="#0F2555" weight="light">
            Recibe alertas de ofertas y descuentos
          </Text>
        </li>

        <li>
          <Text h3 size={16} color="#0F2555" weight="light">
            Gestiona tus pedidos
          </Text>
        </li>

        <li>
          <Text h3 size={16} color="#0F2555" weight="light">
            ¡Y muchos más!
          </Text>
        </li>
      </ul>

      <Button css={{ borderRadius: "4px", marginBottom: "27px" }}>
        Crear cuenta
      </Button>

      <Text h3 size={16} color="rgba(15, 37, 85, 0.6)" weight="light">
        No te preocupes, inscribirte es completamente gratis.
      </Text>
    </div>
  );
};

export default CreateAcount;
