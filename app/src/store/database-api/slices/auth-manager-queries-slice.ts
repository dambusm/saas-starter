import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { dataManager } from '../../../pages/_app';
import { databaseApiSlice } from '../database-api-slice';

export const authManagerQueriesSlice = databaseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    me: build.query({
      query: () => ({
        fetcher: () => dataManager.authManager.me(),
      }),
    }),
    login: build.query({
      query: ({ email, password }: { email: string; password: string }) => ({
        fetcher: () => dataManager.authManager.login(email, password),
      }),
    }),
    refreshToken: build.query({
      query: () => ({
        fetcher: () => dataManager.authManager.refreshToken(),
      }),
    }),
  }),
});

export const { useLazyLoginQuery, useMeQuery, useLazyRefreshTokenQuery } =
  authManagerQueriesSlice;
