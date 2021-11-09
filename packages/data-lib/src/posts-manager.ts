import { DirectusSdk } from './data-sources/directus/directus-sdk';

export class PostsManager {
  directusSDK: DirectusSdk;
  constructor(directusSDK: DirectusSdk) {
    this.directusSDK = directusSDK;
  }
  async getPosts(limit = 10) {
    const response = await this.directusSDK.ItemsManager.readItemsPosts({
      limit,
    });
    if (!response.data) {
      throw new Error('No data');
    }
    return { data: response.data };
  }

  createPost(content: string) {
    return this.directusSDK.ItemsManager.createItemsPosts({
      requestBody: [{ content }],
    });
  }
}
