import { useState } from "react";
import { CollapseCard } from "./CollapseCard";
import { CollapseGroup } from "./CollapseGroup";
import {
  CardContentText,
  ListItem,
  SiteMapContainer,
  UnorderedList,
} from "./styled";

const SiteMap = () => {
  const [collapsedKey, setCollapsedKey] = useState<string>("information");

  const onCollapsePanel = (key?: string | string[]) => {
    if (Array.isArray(key)) {
      const [activeKey] = key;
      setCollapsedKey(activeKey);
    } else if (typeof key === "string") {
      setCollapsedKey(key);
    }
  };

  return (
    <SiteMapContainer>
      <CollapseGroup
        accordion
        onChange={onCollapsePanel}
        defaultActiveKey={[collapsedKey]}
      >
        <CollapseCard
          key="contact"
          title="Contacto"
          data-key="contact"
          activedKey={collapsedKey}
        >
          <CardContentText>Accesorios</CardContentText>
        </CollapseCard>

        <CollapseCard
          key="customer-service"
          activedKey={collapsedKey}
          data-key="customer-service"
          title="Atención al cliente"
        >
          <CardContentText>Accesorios</CardContentText>
        </CollapseCard>

        <CollapseCard
          key="information"
          data-key="information"
          activedKey={collapsedKey}
          title="Información Importante"
        >
          <UnorderedList>
            <ListItem>
              <CardContentText>Política de Privacidad</CardContentText>
            </ListItem>
            <ListItem>
              <CardContentText>Términos y Condiciones</CardContentText>
            </ListItem>
          </UnorderedList>
        </CollapseCard>
      </CollapseGroup>
    </SiteMapContainer>
  );
};

export default SiteMap;
