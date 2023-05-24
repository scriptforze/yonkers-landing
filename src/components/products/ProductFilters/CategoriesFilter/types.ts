import { CollapsePanelProps } from "antd";
import { FilterType } from "../types";

export interface CollapseCardProps extends Omit<CollapsePanelProps, "header"> {
  activedKey: string;
  onCategorySelected: (
    value: string,
    key: FilterType,
    checked: boolean
  ) => void;
}
