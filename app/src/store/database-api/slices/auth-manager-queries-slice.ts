import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { dataManager } from '../../../pages/_app';
import { databaseApiSlice, Tag } from '../database-api-slice';

export const authManagerQueriesSlice = databaseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    me: build.query({
      query: () => ({
        fetcher: () => dataManager.authManager.me(),
      }),
      providesTags: [Tag.CurrentUser],
    }),
    login: build.mutation({
      query: ({ email, password }: { email: string; password: string }) => ({
        fetcher: () => dataManager.authManager.login(email, password),
      }),
      invalidatesTags: [Tag.CurrentUser],
    }),
    refreshToken: build.mutation({
      query: () => ({
        fetcher: () => dataManager.authManager.refreshToken(),
      }),
      invalidatesTags: [Tag.CurrentUser],
    }),
  }),
});

export const { useLoginMutation, useMeQuery, useRefreshTokenMutation } =
  authManagerQueriesSlice;
