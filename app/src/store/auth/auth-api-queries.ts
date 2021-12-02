import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { SignupResponse } from '../../pages/api/auth/signup';

export const authApiQueries = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
  endpoints: (build) => ({
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

export const { useLazySignupQuery } = authApiQueries;
