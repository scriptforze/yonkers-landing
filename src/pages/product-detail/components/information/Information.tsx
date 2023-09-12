import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Tabs } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { Text } from "@nextui-org/react";
import { Navbar } from "@/common/layout/components/Header/Navbar";
import { NewLetters } from "@/common/layout/components/Footer/NewsLetters";
import { SlideProduct } from "../slideProduct";
import { Recommended } from "../recommended";

const Information = () => {
  const [size, setSize] = useState<SizeType>("small");

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  
  return (
    <>
      <Navbar />
      <SlideProduct />
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

        {/* <Radio.Group
          value={size}
          onChange={onChange}
          style={{ color: "#0F2555" }}
        ></Radio.Group> */}
        
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
        <Recommended />
      <NewLetters />
    </>
  );
};

export default Information;
