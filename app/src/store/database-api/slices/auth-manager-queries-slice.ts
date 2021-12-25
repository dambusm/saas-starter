import { dataManager } from '../../../pages/_app';
import { fetchAndTransformResponse } from '../../lib/baseQueries';
import { databaseApiSlice, Tag } from '../database-api-slice';

export const authManagerQueriesSlice = databaseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    me: build.query({
      queryFn: () =>
        fetchAndTransformResponse(() => dataManager.authManager.me()),
      providesTags: [Tag.CurrentUser],
    }),
    login: build.mutation({
      queryFn: ({ email, password }: { email: string; password: string }) =>
        fetchAndTransformResponse(() =>
          dataManager.authManager.login(email, password)
        ),
      invalidatesTags: [Tag.CurrentUser],
    }),
    refreshToken: build.mutation({
      queryFn: () =>
        fetchAndTransformResponse(() => dataManager.authManager.refreshToken()),
      invalidatesTags: [Tag.CurrentUser],
    }),
  }),
});

export const { useLoginMutation, useMeQuery, useRefreshTokenMutation } =
  authManagerQueriesSlice;
