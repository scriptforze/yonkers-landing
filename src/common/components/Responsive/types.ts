import { ReactNode } from "react";

export type ResponsiveProps =
  | {
      children: ReactNode;
      xs: true;
      sm?: boolean;
      md?: boolean;
      lg?: boolean;
      xl?: boolean;
      xxl?: boolean;
    }
  | {
      children: ReactNode;
      xs?: boolean;
      sm: true;
      md?: boolean;
      lg?: boolean;
      xl?: boolean;
      xxl?: boolean;
    }
  | {
      children: ReactNode;
      xs?: boolean;
      sm?: boolean;
      md: true;
      lg?: boolean;
      xl?: boolean;
      xxl?: boolean;
    }
  | {
      children: ReactNode;
      xs?: boolean;
      sm?: boolean;
      md?: boolean;
      lg: true;
      xl?: boolean;
      xxl?: boolean;
    }
  | {
      children: ReactNode;
      xs?: boolean;
      sm?: boolean;
      md?: boolean;
      lg?: boolean;
      xl: true;
      xxl?: boolean;
    }
  | {
      children: ReactNode;
      xs?: boolean;
      sm?: boolean;
      md?: boolean;
      lg?: boolean;
      xl?: boolean;
      xxl: true;
    };
