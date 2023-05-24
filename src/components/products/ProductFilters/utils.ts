import { FilterType } from "./types";

export const parseFilterValue = (key: FilterType, value: string) => {
  switch (key) {
    case "categories": {
      return `category_${value}`;
    }
  }
};
