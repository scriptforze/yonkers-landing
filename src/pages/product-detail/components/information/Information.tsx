import React, { useState } from "react";
import {  Tabs } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { Text } from "@nextui-org/react";

const Information = () => {
  const [size, setSize] = useState<SizeType>("small");

  return (
    <>
      <Text
        style={{
          fontSize: "38px",
          fontWeight: "semi bold",
          color: "#0F2555",
          marginTop: "38px",
          width: "541px",
          height: "48px",
        }}
      >
        Información de producto
      </Text>
      <Tabs
        style={{ padding: "32px 24px 42px 24px" }}
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Características ${1}`,
            key: id,
            children: `Lorem ipsum dolor sit amet consectetur.
            Enim eu quam eget interdum sagittis viverra. 
            Proin consectetur sit tempus lacus. Feugiat 
            condimentum tellus tristique turpis bibendum lectus phasellus diam augue.
              Sed eget cursus mauris accumsan id pellentesque diam. Neque suspendiss
              diam erat amet nulla aliquam dictumst. Proin malesuada lectus odio 
              dis dolor odio amet hendrerit. Eget lacus ac ut nisl. Varius aliquam 
              vitae elit pharetra egestas magna nisl. Amet cursus lorem suspendisse
                ut tellus elit turpis lorem.`,
          };
        })}
      />
    </>
  );
};

export default Information;
