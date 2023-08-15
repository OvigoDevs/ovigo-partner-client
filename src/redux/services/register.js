import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RegisterAPI = createApi({
  reducerPath: "registerAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "baseurl/" }),
  endpoints: (builder) => ({
    registerPost: builder.mutation({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        body: payload,
        headers: {
            "Content-type": "application/json: charset=UTF-8"
        }
      }),
      invalidatesTags: ["Post"]
    }),
  }),
});

export const { useRegisterPostMutation } = RegisterAPI;
