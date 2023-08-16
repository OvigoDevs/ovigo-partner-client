import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const HotelListingAPI = createApi({
  reducerPath: "hotelListingAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BackendHost }),
  endpoints: (builder) => ({
    hotelListingPost: builder.mutation({
      query: (payload) => {
        return {
          url: "/hotel/",
          method: "POST",
          body: payload,
        //   headers: {
        //     "Content-type:": "application/json",
        //   },
        };
      },
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useHotelListingPostMutation } = HotelListingAPI;
