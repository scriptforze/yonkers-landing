import { useState } from "react";
import {
  ListItem,
  UnorderedList,
  CardContentText,
  SiteMapContainer,
} from "./styled";
import { useResponsive } from "@/common/hooks";
import { CollapsibleType } from "antd/es/collapse/CollapsePanel";
import { CollapseCard, CollapseGroup } from "@/common/components";

const SiteMap = () => {
  const [collapsedKey, setCollapsedKey] = useState<string>("contact");
  const { shouldRender } = useResponsive({ xl: true, xxl: true });

  const responsiveProps: { activeKey: string[]; collapsible: CollapsibleType } =
    {
      collapsible: "disabled",
      activeKey: ["contact", "customer-service", "information"],
    };

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
        accordion={!shouldRender}
        onChange={onCollapsePanel}
        defaultActiveKey={["contact"]}
        {...(shouldRender ? responsiveProps : { activeKey: [collapsedKey] })}
      >
        <CollapseCard
          key="contact"
          title="Contacto"
          data-key="contact"
          activedKey={collapsedKey}
        >
          <UnorderedList>
            <ListItem>
              <CardContentText>Cali: (602) 325-8569</CardContentText>
            </ListItem>
            <ListItem>
              <CardContentText>
                Resto del país: 01-8000-879-9854
              </CardContentText>
            </ListItem>
            <ListItem>
              <CardContentText>soporte@yonkersgarage.com</CardContentText>
            </ListItem>
          </UnorderedList>
        </CollapseCard>

        <CollapseCard
          key="customer-service"
          activedKey={collapsedKey}
          data-key="customer-service"
          title="Atención al cliente"
        >
          <UnorderedList>
            <ListItem>
              <CardContentText>Gastos de envío</CardContentText>
            </ListItem>
            <ListItem>
              <CardContentText>Devoluciones</CardContentText>
            </ListItem>
            <ListItem>
              <CardContentText>Preguntas Frecuentes</CardContentText>
            </ListItem>
            <ListItem>
              <CardContentText>PQRS</CardContentText>
            </ListItem>
          </UnorderedList>
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
