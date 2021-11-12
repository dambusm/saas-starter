import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { dataManager } from '../../pages/_app';
import { SignupResponse } from '../../pages/api/auth/signup';
import { executeQueryAndTransformResponse } from '../store';

export const authQueries = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
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
      query: ({ email, password }: { email: string; password: string }) => ({
        url: 'signup',
        method: 'POST',
        body: { email, password },
      }),
      transformResponse: (response: { data: SignupResponse }) => response.data,
    }),
  }),
});

export const { useLazyLoginQuery, useLazySignupQuery } = authQueries;
