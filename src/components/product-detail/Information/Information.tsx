import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Tabs } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";

import { InformationContainer, InformationTitle } from "./styled";

const Information = () => {
  const [size, setSize] = useState<SizeType>("small");

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <InformationContainer>
      <InformationTitle>Información de producto</InformationTitle>

      <Tabs
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
                ut tellus elit turpis lorem.

                Lorem ipsum dolor sit amet consectetur. Enim eu quam eget interdum sagittis viverra.
                Proin consectetur sit tempus lacus. Feugiat condimentum tellus tristique turpis bibendum
                lectus phasellus diam augue. Sed eget cursus mauris accumsan id pellentesque diam. 
                Neque suspendisse diam erat amet nulla aliquam dictumst. Proin malesuada lectus odio dis
                dolor odio amet hendrerit. Eget lacus ac ut nisl. Varius aliquam vitae elit pharetra 
                egestas magna nisl. Amet cursus lorem suspendisse ut tellus elit turpis lorem.

                Lorem ipsum dolor sit amet consectetur. Enim eu quam eget interdum sagittis viverra. 
                Proin consectetur sit tempus lacus. Feugiat condimentum tellus tristique turpis bibendum 
                lectus phasellus diam augue. Sed eget cursus mauris accumsan id pellentesque diam. 
                Neque suspendisse diam erat amet nulla aliquam dictumst. Proin malesuada lectus odio 
                dis dolor odio amet hendrerit. Eget lacus ac ut nisl. Varius aliquam vitae elit pharetra 
                egestas magna nisl. Amet cursus lorem suspendisse ut tellus elit turpis lorem.`,
          };
        })}
      />
    </InformationContainer>
  );
};

export default Information;
