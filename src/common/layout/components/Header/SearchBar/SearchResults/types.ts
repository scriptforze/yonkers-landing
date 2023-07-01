import { Product } from "@/services/products";
import { HTMLProps } from "react";

export interface SearchResultsProps {
  loading?: boolean;
  visible?: boolean;
  results?: Product[];
}

export interface SearchResultItemProps {
  item: Product;
}
