import React, { useState, useEffect } from "react";
import { Breakpoint, ResponsiveProps } from "./types";
import { debounce } from "./utils";

const Responsive = ({ children, xs, sm, md, lg, xl, xxl }: ResponsiveProps) => {
  const [screenSize, setScreenSize] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const debounceResize = debounce(handleResize, 250);

    function handleResize() {
      const width = window.innerWidth;
      let size: Breakpoint | null = getScreenSize(width);
      setScreenSize(size);
    }

    handleResize();
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

  const shouldRenderChildren =
    xs || sm || md || lg || xl || xxl ? screenSize !== null : true;

  return shouldRenderChildren ? (
    <>
      {xs && screenSize === "xs" && children}
      {sm && screenSize === "sm" && children}
      {md && screenSize === "md" && children}
      {lg && screenSize === "lg" && children}
      {xl && screenSize === "xl" && children}
      {xxl && screenSize === "xxl" && children}
    </>
  ) : null;
};

export default Responsive;
