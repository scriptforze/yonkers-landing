import { ecommerceApi as api } from "../store/ecommerce-api";
export const addTagTypes = ["Products"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAllProducts: build.query<
        GetAllProductsApiResponse,
        GetAllProductsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/products`,
          params: {
            include: queryArg.include,
            search: queryArg.search,
            per_page: queryArg.perPage,
            page: queryArg.page,
            sort_by: queryArg.sortBy,
            lang: queryArg.lang,
            id: queryArg.id,
            status: queryArg.status,
            category: queryArg.category,
            type: queryArg["type"],
            name: queryArg.name,
            price: queryArg.price,
            min_price: queryArg.minPrice,
            max_price: queryArg.maxPrice,
            tax: queryArg.tax,
            slug: queryArg.slug,
            description: queryArg.description,
            is_variable: queryArg.isVariable,
            amount_viewed: queryArg.amountViewed,
            quantity_sold: queryArg.quantitySold,
          },
        }),
        providesTags: ["Products"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as ecommerceApi };
export type GetAllProductsApiResponse = /** status 200 success */ {
  data?: Product[];
  meta?: Pagination;
};
export type GetAllProductsApiArg = {
  /** Relationships of resource */
  include?: string;
  /** String to search */
  search?: string;
  /** Number of resources per page */
  perPage?: number;
  /** Number of current page */
  page?: number;
  /** Name of field to sort */
  sortBy?: string;
  /** Code of language */
  lang?: string;
  id?: number;
  status?: number;
  category?: number;
  type?: string;
  name?: string;
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  tax?: number;
  slug?: string;
  description?: string;
  isVariable?: boolean;
  amountViewed?: number;
  quantitySold?: number;
};
export type Status = {
  id: number;
  name: string;
  type: string;
};
export type ResourceUrls = {
  original: string;
  thumb?: string;
  small?: string;
  medium?: string;
};
export type Resource = {
  id: number;
  owner_id?: number;
  type_resource?: string;
  urls: ResourceUrls;
  options?: object;
};
export type Category = {
  id: number;
  name: string;
  slug: string;
  parent_id?: number;
  status?: Status;
  image?: Resource;
  children?: Category[];
};
export type Tag = {
  id: number;
  name: string;
  slug: string;
  status?: Status;
};
export type ProductAttribute = {
  id: number;
  name: string;
  type?: string;
  status?: Status;
  product_attribute_options?: ProductAttributeOption[];
};
export type ProductAttributeOption = {
  id: number;
  name: string;
  option?: string;
  status?: Status;
  product_attribute?: ProductAttribute;
};
export type ProductStock = {
  id: number;
  price: string;
  sku: string;
  stock?: number;
  width?: number;
  height?: number;
  length?: number;
  weight?: number;
  status?: Status;
  product?: Product;
  product_attribute_options?: ProductAttributeOption[];
  images?: Resource[];
};
export type ProductSpecification = {
  id: number;
  name: string;
  value: string;
  status?: Status;
  product?: Product;
};
export type Product = {
  id: number;
  type: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  min_price: number;
  max_price: number;
  tax: number;
  short_description: string;
  description: string;
  is_variable: boolean;
  amount_viewed: number;
  quantity_sold: number;
  stock?: number;
  width?: number;
  height?: number;
  length?: number;
  weight?: number;
  status?: Status;
  category?: Category;
  images?: Resource[];
  stock_images?: Resource[];
  tags?: Tag[];
  product_attribute_options?: ProductAttributeOption[];
  product_stocks?: ProductStock[];
  specifications?: ProductSpecification[];
};
export type Pagination = {
  current_page?: number;
  from?: number;
  last_page?: number;
  per_page?: number;
  to?: number;
  total?: number;
};
export const { useGetAllProductsQuery } = injectedRtkApi;
