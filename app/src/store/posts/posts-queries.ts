import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { dataManager } from '../../pages/_app';
import { executeQueryAndTransformResponse } from '../store';

export const postsQueries = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery(), // Not used
  endpoints: (build) => ({
    getPosts: build.query({
      queryFn: async ({
        limit = 10,
        creatorId,
      }: {
        limit?: number;
        creatorId?: string;
      }) =>
        executeQueryAndTransformResponse(() =>
          dataManager.postsManager.getPosts({ limit, creatorId })
        ),
    }),
  }),
});

export const { useGetPostsQuery } = postsQueries;
