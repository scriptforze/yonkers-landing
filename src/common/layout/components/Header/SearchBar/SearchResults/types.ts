import { Product } from "@/services/products";

export interface SearchResultsProps {
  loading?: boolean;
  visible?: boolean;
  results?: Product[];
}

export interface SearchResultItemProps {
  item: Product;
}
