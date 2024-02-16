import React, { useState } from "react";
import { SearchInput, SearchInputContainer } from "./styled";
import { useGetAllProductsQuery } from "@/services/products";
import { useDebounce } from "@/common/hooks";
import { SearchResults } from "./SearchResults";

const SearchBar = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const debouncedSearchQuery = useDebounce<string | undefined>(query, 500);

  const {
    isLoading,
    isFetching,
    data: products,
  } = useGetAllProductsQuery(
    {
      include: "images,category",
      search: debouncedSearchQuery,
    },
    { skip: !debouncedSearchQuery }
  );

  return (
    <SearchInputContainer>
      <SearchInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(true)}
        onChange={(ev) => setQuery(ev.target.value)}
      />
      <SearchResults
        results={products?.data}
        loading={isLoading || isFetching}
        visible={focused && !!debouncedSearchQuery}
      />
    </SearchInputContainer>
  );
};

export default SearchBar;
