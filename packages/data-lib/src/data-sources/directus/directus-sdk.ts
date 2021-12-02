import { ItemsPosts } from './openapi-typescript-codegen';
import { Directus } from '@directus/sdk';

export enum DirectusItem {
  Posts = 'posts',
}

export const getTypedDirectusSDK = (baseUrl: string) =>
  new Directus<{
    [DirectusItem.Posts]: ItemsPosts;
  }>(baseUrl);

export type TypedDirectusSDK = ReturnType<typeof getTypedDirectusSDK>;
