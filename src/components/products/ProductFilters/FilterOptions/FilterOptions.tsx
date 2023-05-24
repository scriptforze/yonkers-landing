import React from "react";
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox";

interface FilterProps {
  title: string;
  filterOptions: CheckboxProps[];
}

export function FilterOptions({ title, filterOptions }: FilterProps) {
  return (
    <div>
      <h2>{title}</h2>
      <label>Selecciona los filtros:</label>
      {filterOptions.map((opcion) => (
        <Checkbox key={opcion.id} {...opcion} />
      ))}
    </div>
  );
}
