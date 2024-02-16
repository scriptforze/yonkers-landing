import React from "react";
import { Breadcrumb } from "antd";

const ResultsBreadcrumbs = () => (
  <Breadcrumb
    separator=">"
    items={[
      {
        title: "Home",
      },
      {
        title: "Producto",
        href: "",
      },
    ]}
  />
);

export default ResultsBreadcrumbs;
