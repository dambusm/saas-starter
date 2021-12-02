import { IItems } from '@directus/sdk';
import { removeUndefinedProperties } from '@saas-starter/helpers';
import { ItemsPosts } from './data-sources/directus/openapi-typescript-codegen';
import {
  DirectusItem,
  TypedDirectusSDK,
} from './data-sources/directus/directus-sdk';

export type GetPostsParameters = { limit: number; creatorId?: string };
export class PostsManager {
  directusItemsManager: IItems<ItemsPosts>;
  itemsKey = DirectusItem.Posts;
  constructor(directusSDK: TypedDirectusSDK) {
    this.directusItemsManager = directusSDK.items(DirectusItem.Posts);
  }
  async getPosts(parameters: GetPostsParameters) {
    const { limit, creatorId } = parameters;
    return (
      await this.directusItemsManager.readMany({
        limit,
        filter: removeUndefinedProperties({
          Owner: { _eq: creatorId },
        }),
      })
    ).data;
  }

  createPost(content: string) {
    return this.directusItemsManager.createOne({
      content,
    });
  }
}
