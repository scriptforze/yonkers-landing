import { Collapse, CollapseProps, CSS, Text } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { CollapseIcon } from "./CollapseIcon";
import { CollapsedIcon } from "./CollapsedIcon";

const CollapseCard = (props: {
  title: string;
  children: ReactNode;
  style?: CSS;
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = (value: boolean) => {
    setCollapsed(value);
  };

  const CollapseIconToShow = collapsed ? CollapsedIcon : CollapseIcon;

  return (
    <Collapse
      arrowIcon={<CollapseIconToShow />}
      onChange={(ev, idx, value) => handleCollapse(!!value)}
      title={<Text css={{ color: "#FAFAFA" }}>{props.title}</Text>}
      css={{
        background: "#091D47 !important",
        borderColor: "#FAFAFA",
        ...props.style,
      }}
    >
      {props.children}
    </Collapse>
  );
};

export default CollapseCard;
