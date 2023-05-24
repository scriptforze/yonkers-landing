import React from "react";
import { Space } from "antd";
import { FilterProductButton } from "./styled";
import { FunnelPlotOutlined } from "@ant-design/icons";

const FiltersProductButton = () => (
  <Space>
    <Space wrap>
      <FilterProductButton icon={<FunnelPlotOutlined />}>
        Filtros
      </FilterProductButton>
    </Space>
  </Space>
);

export default FiltersProductButton;
