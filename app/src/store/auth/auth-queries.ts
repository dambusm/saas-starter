import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { isDataLibError } from '@saas-starter/data-lib';
import { dataManager } from '../../pages/_app';

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
      }) => {
        try {
          const response = await dataManager.authManager.login(email, password);
          return { data: response.data };
        } catch (error) {
          if (isDataLibError(error)) {
            return {
              error: {
                status: error.status ? Number(error.status) : 598,
                data: JSON.stringify(error),
              },
            };
          } else {
            return { error: { status: 599, data: JSON.stringify(error) } };
          }
        }
      },
    }),
  }),
});

export const { useLazyLoginQuery } = authQueries;
