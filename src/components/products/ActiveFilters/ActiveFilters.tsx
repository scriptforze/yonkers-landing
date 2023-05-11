import React from "react";
import { Button, Space, Tag } from "antd";
import { ActiveFiltersContainer, RemoveFiltersButton } from "./styled";

const log = (e: any) => {
  console.log(e);
};

const preventDefault = (e: any) => {
  e.preventDefault();
  console.log("Clicked! But prevent default.");
};

const ActiveFilters = () => (
  <ActiveFiltersContainer>
    <Tag closable onClose={log}>
      3RG
    </Tag>
    <RemoveFiltersButton onClick={preventDefault}>
      Quitar todos
    </RemoveFiltersButton>
  </ActiveFiltersContainer>
);

export default ActiveFilters;
