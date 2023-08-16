import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RegisterAPI = createApi({
  reducerPath: "registerAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BackendHost }),
  endpoints: (builder) => ({
    registerPost: builder.mutation({
      query: (payload) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: payload,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useRegisterPostMutation } = RegisterAPI;
