import { Collapse, CollapseGroupProps } from "@nextui-org/react";

const CollapseCard = (props: CollapseGroupProps) => {
  return (
    <Collapse.Group
      {...props}
      bordered
      borderWeight={"extrabold"}
      css={{ color: "#FAFAFA" }}
    />
  );
};

export default CollapseCard;
