import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { dataManager } from '../../pages/_app';
import { fetcherBaseQuery } from '../lib/baseQueries';

export const postsManagerQueries = createApi({
  reducerPath: 'posts',
  baseQuery: fetcherBaseQuery(),
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({
        limit = 10,
        creatorId,
      }: {
        limit?: number;
        creatorId?: string;
      }) => ({
        fetcher: () => dataManager.postsManager.getPosts({ limit, creatorId }),
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postsManagerQueries;
