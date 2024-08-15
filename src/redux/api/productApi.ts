import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: "/products/create-product",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.products],
    }),
  }),
});

const { useCreateProductMutation } = productApi;
