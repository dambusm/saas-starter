import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { dataManager } from '../../pages/_app';
import { fetcherBaseQuery } from '../lib/baseQueries';

export const authManagerQueries = createApi({
  reducerPath: 'authManager',
  baseQuery: fetcherBaseQuery(),
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
  }),
});

export const { useLazyLoginQuery, useMeQuery } = authManagerQueries;
