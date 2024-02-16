import { useEffect, useState } from "react";
import { ResponsiveProps } from "./types";
import { debounce } from "./utils";
import { Breakpoint } from "antd";

export const useResponsive = ({ xs, sm, md, lg, xl, xxl }: ResponsiveProps) => {
  let shouldRender = false;
  const [screenSize, setScreenSize] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const debounceResize = debounce(handleResize, 250);

    function handleResize() {
      const width = window.innerWidth;
      let size: Breakpoint | null = getScreenSize(width);
      setScreenSize(size);
    }

    debounceResize();
    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [xs, sm, md, lg, xl, xxl]);

  const getScreenSize = (width: number) => {
    if (width >= 0 && width <= 575) return "xs";
    if (width >= 576 && width <= 767) return "sm";
    if (width >= 768 && width <= 991) return "md";
    if (width >= 992 && width <= 1199) return "lg";
    if (width >= 1200 && width <= 1399) return "xl";
    if (width >= 1400) return "xxl";
    return null;
  };

  const shouldRenderComponent =
    xs || sm || md || lg || xl || xxl ? screenSize !== null : false;

  if (shouldRenderComponent) {
    if (
      (xs && screenSize === "xs") ||
      (sm && screenSize === "sm") ||
      (md && screenSize === "md") ||
      (lg && screenSize === "lg") ||
      (xl && screenSize === "xl") ||
      (xxl && screenSize === "xxl")
    ) {
      shouldRender = true;
    }
  }

  return {
    screenSize,
    shouldRender,
  };
};
