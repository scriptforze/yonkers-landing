import React from "react";

import { FunnelPlotOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import { FilterProductButton } from "./styled";

const FilterProduct = () => (
  <Space>
    <Space wrap>
      <FilterProductButton icon={<FunnelPlotOutlined />}>
        Filtros
      </FilterProductButton>
    </Space>
  </Space>
);

export default FilterProduct;
