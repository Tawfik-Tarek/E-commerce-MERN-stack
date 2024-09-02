import { apiSlice } from "./apiSlice";

const AUTH_URL = import.meta.env.VITE_AUTH_URL;
const API_URL = import.meta.env.VITE_API_URL;

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `${API_URL}${AUTH_URL}/login`,
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: `${API_URL}${AUTH_URL}/signup`,
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${API_URL}${AUTH_URL}/logout`,
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authSlice;
