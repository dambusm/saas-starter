import { IItems } from '@directus/sdk';
import { removeUndefinedProperties } from '@saas-starter/helpers';
import { ItemsPosts } from './data-sources/directus/api-codegen-sdk';
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
    return this.directusItemsManager.readMany({
      limit,
      filter: removeUndefinedProperties({
        Owner: { _eq: creatorId },
      }),
    });
  }

  createPost(content: string) {
    return this.directusItemsManager.createOne({
      content,
    });
  }
}
