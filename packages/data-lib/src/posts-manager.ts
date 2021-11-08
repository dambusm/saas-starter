import { DirectusSdk } from './data-sources/directus/directus-sdk';

export class PostsManager {
  directusSDK: DirectusSdk;
  constructor(directusSDK: DirectusSdk) {
    this.directusSDK = directusSDK;
  }
  getPosts(limit = 10) {
    return this.directusSDK.ItemsManager.readItemsPosts({ limit });
  }

  createPost(content: string) {
    return this.directusSDK.ItemsManager.createItemsPosts({
      requestBody: [{ content }],
    });
  }
}
