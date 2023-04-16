import { Text } from "@nextui-org/react";
import { CollapseGroup } from "./CollapseGroup";
import { CollapseCard } from "./CollapseCard";

const SiteMap = () => {
  return (
    <div style={{ background: "#091D47" }}>
      <CollapseGroup>
        <CollapseCard title="CATEGORÍAS">
          <Text style={{ color: "#FAFAFA" }}>Accesorios</Text>
        </CollapseCard>

        <CollapseCard title="MARKETPLACE">
          <Text style={{ color: "#FAFAFA" }}>Accesorios</Text>
        </CollapseCard>

        <CollapseCard
          title="AYUDA"
          style={{ borderBottom: "1px solid  #FAFAFA" }}
        >
          <Text style={{ color: "#FAFAFA" }}>PQRS</Text>
          <Text style={{ color: "#FAFAFA" }}>PREGUNTAS FRECUENTES</Text>
          <Text style={{ color: "#FAFAFA" }}>MANUALES TUTORIALES</Text>
        </CollapseCard>
      </CollapseGroup>
    </div>
  );
};

export default SiteMap;
