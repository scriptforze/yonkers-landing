import React from "react";
import { SearchResultsContainer } from "./styled";
import { SearchResultsProps } from "./types";
import { Empty, Skeleton } from "antd";
import SearchResultItem from "./SearchResultItem";
import Link from "next/link";

const SearchResults = ({
  results = [],
  loading = false,
  visible = false,
}: SearchResultsProps) => {
  return (
    <>
      {visible && (
        <SearchResultsContainer>
          <Skeleton
            active
            loading={loading}
            paragraph={false}
            avatar={{ shape: "square" }}
            style={{ padding: "8px 10px" }}
          >
            {results.length > 0 ? (
              results.map((result) => {
                return (
                  <Link href={`/product-detail/${result.id}`} key={result.id}>
                    <SearchResultItem item={result} />
                  </Link>
                );
              })
            ) : (
              <Empty
                description={"No se encontraron resultados"}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            )}
          </Skeleton>
        </SearchResultsContainer>
      )}
    </>
  );
};

export default SearchResults;
