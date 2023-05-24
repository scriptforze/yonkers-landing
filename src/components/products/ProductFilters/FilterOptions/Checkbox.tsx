import React, { useState } from "react";

export interface CheckboxProps {
  id: number;
  label: string;
}

function Checkbox({ id, label }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={`checkbox-${id}`}>{label}</label>
    </div>
  );
}

export default Checkbox;
