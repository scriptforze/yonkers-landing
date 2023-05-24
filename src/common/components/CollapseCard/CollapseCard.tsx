import { CollapseCardProps } from "./types";
import { useEffect, useRef, useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { CollapseCardContainer, CollapseCardTitle } from "./styled";

const CollapseCard = ({
  key,
  title,
  children,
  activedKey,
  ...props
}: CollapseCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      const { dataset } = ref.current;
      dataset.key === activedKey ? setCollapsed(true) : setCollapsed(false);
    }
  }, [activedKey]);

  const CollapseIconToShow = collapsed ? MinusOutlined : PlusOutlined;

  return (
    <CollapseCardContainer
      {...props}
      key={key}
      ref={ref}
      showArrow={false}
      extra={<CollapseIconToShow />}
      header={<CollapseCardTitle>{title}</CollapseCardTitle>}
    >
      {children}
    </CollapseCardContainer>
  );
};

export default CollapseCard;
