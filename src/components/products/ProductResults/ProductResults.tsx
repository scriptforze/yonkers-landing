import React from "react";
import {
  ProductsPagination,
  TotalPaginationText,
  ProductsResultsCards,
  ProductResultsContainer,
  ProductResultsControls,
  ProductsPaginationContainer,
} from "./styled";
import { SortingButton } from "../SortingButton";
import { ActiveFilters } from "../ActiveFilters";
import { ProductCard } from "@/common/components";
import { FiltersProductButton } from "../FiltersProductButton";
import { useGetAllProductsQuery } from "@/services/products";
import { ProductResultsProps } from "./types";

const ProductResults = ({ filters }: ProductResultsProps) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data: products, isLoading } = useGetAllProductsQuery({
    page: currentPage,
    include: "images,category",
    search: filters?.categories?.map((category) => category).join(" "),
  });

  return (
    <ProductResultsContainer>
      <ProductResultsControls>
        <SortingButton />

        {/* <Responsive xs sm md>
          <FiltersProductButton />
        </Responsive> */}

        {/* <Responsive lg xl xxl>
          <ActiveFilters />
        </Responsive> */}
      </ProductResultsControls>

      {/* <Responsive xs sm md>
        <ActiveFilters />
      </Responsive> */}

      <ProductsResultsCards>
        {products?.data?.map(({ name, id, price, images, category }) => (
          <ProductCard
            id={id}
            key={id}
            title={name}
            price={price}
            lastPrice={690000}
            brand={category?.name}
            imageURL={images?.[0]?.urls?.original || ""}
          />
        ))}
      </ProductsResultsCards>
      <ProductsPaginationContainer>
        <ProductsPagination
          defaultCurrent={1}
          defaultPageSize={15}
          current={currentPage}
          total={products?.meta?.total}
          pageSize={products?.meta?.per_page || 15}
          onChange={(page) => setCurrentPage(page)}
        />
        <TotalPaginationText>
          Mostrando {`${products?.meta?.from} - ${products?.meta?.to}`} de{" "}
          {products?.meta?.total} artículo(s)
        </TotalPaginationText>
      </ProductsPaginationContainer>
    </ProductResultsContainer>
  );
};

export default ProductResults;
