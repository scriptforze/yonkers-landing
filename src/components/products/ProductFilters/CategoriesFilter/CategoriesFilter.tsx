import React from "react";
import { CollapseCardProps } from "./types";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useGetAllCategoriesQuery } from "@/services/categories";
import {
  FilterCheckBox,
  FiltersCheckboxesContainer,
  FiltersGroupPanelContainer,
} from "../styled";

const CategoriesFilter = ({
  activedKey,
  onCategorySelected,
  ...props
}: CollapseCardProps) => {
  const { data: categories, isLoading } = useGetAllCategoriesQuery({});

  const onChange = (e: CheckboxChangeEvent, name: string) => {
    onCategorySelected(name, "categories", e.target.checked);
  };

  return (
    <FiltersGroupPanelContainer
      {...props}
      title="Categorias"
      data-key="categories"
      activedKey={activedKey}
    >
      <FiltersCheckboxesContainer>
        {categories?.data?.map(({ name, id }) => (
          <FilterCheckBox key={id} onChange={(ev) => onChange(ev, name)}>
            {name}
          </FilterCheckBox>
        ))}
      </FiltersCheckboxesContainer>
    </FiltersGroupPanelContainer>
  );
};

export default CategoriesFilter;
