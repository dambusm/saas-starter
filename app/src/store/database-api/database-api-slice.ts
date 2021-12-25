import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { fetcherBaseQuery } from '../lib/baseQueries';

export enum Tag {
  CurrentUser = 'CurrentUser',
}

export const databaseApiSlice = createApi({
  reducerPath: 'databaseApi',
  baseQuery: fetcherBaseQuery(),
  endpoints: () => ({}),
  tagTypes: Object.values(Tag),
});
