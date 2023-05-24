export type FilterType = "categories";

export type Filters = {
  [key in FilterType]?: string[];
};

export interface ProductFiltersProps {
  onFiltersChanged: (filters: Filters) => void;
}
