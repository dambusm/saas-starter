import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { dataManager } from '../../pages/_app';
import { executeQueryAndTransformResponse } from '../store';

export const authQueries = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery(), // Not used
  endpoints: (build) => ({
    login: build.query({
      queryFn: async ({
        email,
        password,
      }: {
        email: string;
        password: string;
      }) =>
        executeQueryAndTransformResponse(() =>
          dataManager.authManager.login(email, password)
        ),
    }),
    signup: build.query({
      queryFn: async ({
        email,
        password,
      }: {
        email: string;
        password: string;
      }) =>
        executeQueryAndTransformResponse(() =>
          dataManager.authManager.signup(email, password)
        ),
    }),
  }),
});

export const { useLazyLoginQuery } = authQueries;
