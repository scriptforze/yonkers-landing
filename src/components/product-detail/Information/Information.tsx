import { Table, Typography } from "antd";
import React, { useState } from "react";
import type { SizeType } from "antd/es/config-provider/SizeContext";

import {
  CustomTabs,
  InformationContainer,
  InformationTabContent,
  InformationTitle,
} from "./styled";
import { Props } from "./types";

const Information = ({ product }: Props) => {
  const [size, setSize] = useState<SizeType>("small");

  return (
    <InformationContainer>
      <InformationTitle>Información de producto</InformationTitle>
      <CustomTabs
        animated
        size={size}
        type="card"
        defaultActiveKey="1"
        items={[
          {
            key: "caracteristicas",
            label: "Características",
            children: (
              <InformationTabContent>
                <Typography.Paragraph>
                  {product.description}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  {product?.short_description}
                </Typography.Paragraph>
              </InformationTabContent>
            ),
          },
          {
            key: "funciones",
            label: "Especificaciones",
            children: (
              <InformationTabContent>
                <Table
                  rowKey={(record) => record.id}
                  dataSource={product?.specifications}
                >
                  <Table.Column
                    key="name"
                    dataIndex="name"
                    title="Especificación"
                  />
                  <Table.Column title="Valor" dataIndex="value" key="value" />
                </Table>
              </InformationTabContent>
            ),
          },
        ]}
      />
    </InformationContainer>
  );
};

export default Information;
