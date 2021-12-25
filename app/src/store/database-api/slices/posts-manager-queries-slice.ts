import { dataManager } from '../../../pages/_app';
import { fetchAndTransformResponse } from '../../lib/baseQueries';
import { databaseApiSlice } from '../database-api-slice';

export const postsManagerQueriesSlice = databaseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation({
      queryFn: ({ content }: { content: string }) =>
        fetchAndTransformResponse(() =>
          dataManager.postsManager.createPost({ content })
        ),
    }),
  }),
});

export const { useCreatePostMutation } = postsManagerQueriesSlice;
