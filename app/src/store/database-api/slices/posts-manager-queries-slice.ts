import { dataManager } from '../../../pages/_app';
import { databaseApiSlice } from '../database-api-slice';

export const postsManagerQueriesSlice = databaseApiSlice.injectEndpoints({
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

export const { useGetPostsQuery } = postsManagerQueriesSlice;
