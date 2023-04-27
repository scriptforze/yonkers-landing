import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_API } from "@/config/api";

export const ecommerceApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL_API}`,
  }),
  endpoints: () => ({}),
});
