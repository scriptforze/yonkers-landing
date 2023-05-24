import { ResponsiveProps } from "./types";
import { useResponsive } from "@/common/hooks";

const Responsive = ({ children, xs, sm, md, lg, xl, xxl }: ResponsiveProps) => {
  const { shouldRender } = useResponsive({ xs, sm, md, lg, xl, xxl });
  return shouldRender ? <>{children}</> : null;
};

export default Responsive;
