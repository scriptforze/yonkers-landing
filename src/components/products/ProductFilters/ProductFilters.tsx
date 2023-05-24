import React, { useEffect, useState } from "react";
import { CategoriesFilter } from "./CategoriesFilter";
import { FiltersGroupContainer } from "./styled";
import { FilterType, Filters, ProductFiltersProps } from "./types";
import { parseFilterValue } from "./utils";

const ProductFilters = ({ onFiltersChanged }: ProductFiltersProps) => {
  const [filters, setFilters] = useState<Filters>({});
  const [collapsedKey, setCollapsedKey] = useState<string>("categories");

  useEffect(() => {
    onFiltersChanged(filters);
  }, [filters, onFiltersChanged]);

  const onCollapsePanel = (key?: string | string[]) => {
    if (Array.isArray(key)) {
      const [activeKey] = key;
      setCollapsedKey(activeKey);
    } else if (typeof key === "string") {
      setCollapsedKey(key);
    }
  };

  const onFiltersChange = (
    value: string,
    key: FilterType,
    checked: boolean
  ) => {
    const filterValues = filters[key] || [];
    const parsedValue = parseFilterValue(key, value);

    if (!checked) {
      const values = filterValues.filter(
        (filterValue) => filterValue !== parsedValue
      );
      setFilters({ ...filters, [key]: values });
      return;
    }

    filterValues.push(parsedValue);
    setFilters({ ...filters, [key]: filterValues });
  };

  return (
    <FiltersGroupContainer
      bordered
      onChange={onCollapsePanel}
      defaultActiveKey={["categories"]}
    >
      <CategoriesFilter
        key="categories"
        activedKey={collapsedKey}
        onCategorySelected={onFiltersChange}
      />
    </FiltersGroupContainer>
  );
};

export default ProductFilters;
