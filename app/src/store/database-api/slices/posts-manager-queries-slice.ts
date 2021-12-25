import { dataManager } from '../../../pages/_app';
import { fetchAndTransformResponse } from '../../lib/baseQueries';
import { databaseApiSlice } from '../database-api-slice';

export const postsManagerQueriesSlice = databaseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      queryFn: ({
        limit = 10,
        creatorId,
      }: {
        limit?: number;
        creatorId?: string;
      }) =>
        fetchAndTransformResponse(() =>
          dataManager.postsManager.getPosts({ limit, creatorId })
        ),
    }),
  }),
});

export const { useGetPostsQuery } = postsManagerQueriesSlice;
