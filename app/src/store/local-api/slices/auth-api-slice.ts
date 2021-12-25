import { SignupResponse } from '../../../pages/api/auth/signup';
import { localApiSlice } from '../local-api-slice';

export const authApiSlice = localApiSlice.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: ({ email, password }: { email: string; password: string }) => ({
        url: 'auth/signup',
        method: 'POST',
        body: { email, password },
      }),
      transformResponse: (response: { data: SignupResponse }) => response.data,
    }),
  }),
});

export const { useSignupMutation } = authApiSlice;
