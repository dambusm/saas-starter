import { ItemsPosts } from './data-sources/directus/api-codegen-sdk';
import { DirectusSdk } from './data-sources/directus/directus-sdk';

export type GetPostsParameters = { limit: number; creatorId?: string };
export class PostsManager {
  directusSDK: DirectusSdk;
  constructor(directusSDK: DirectusSdk) {
    this.directusSDK = directusSDK;
  }
  async getPosts(parameters: GetPostsParameters) {
    const { limit, creatorId } = parameters;
    return this.directusSDK.ItemsManager.readItemsPosts({
      limit,
      filter: ['[first_name][_eq]=Rijk'],
    });
  }

  createPost(content: string) {
    return this.directusSDK.ItemsManager.createItemsPosts({
      requestBody: [{ content }],
    });
  }
}
