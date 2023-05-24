import { CollapseProps } from "antd";
import { CollapseGroupContainer } from "./styled";

const CollapseGroup = (props: CollapseProps) => {
  return <CollapseGroupContainer bordered={false} {...props} />;
};

export default CollapseGroup;
