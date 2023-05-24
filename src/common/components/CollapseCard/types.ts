import { CollapsePanelProps } from "antd";

export interface CollapseCardProps extends Omit<CollapsePanelProps, "header"> {
  title: string;
  activedKey: string;
}
