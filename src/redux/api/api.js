// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const suppliesApi = createApi({
  reducerPath: "suppliesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://resilience-backend.vercel.app/",
  }),
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: (id) => `supplies/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSuppliesQuery } = suppliesApi;
