import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { dataManager } from '../../pages/_app';

export const postsQueries = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery(), // Not used
  endpoints: (build) => ({
    getPosts: build.query({
      queryFn: async (limit = 10) => {
        const response = await dataManager.postsManager.getPosts(limit);
        if (!response.data) {
          throw new Error('No data returned');
        }
        return response;
      },
    }),
  }),
});

export const { useGetPostsQuery } = postsQueries;
