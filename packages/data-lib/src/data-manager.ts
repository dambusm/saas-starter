import { AuthManager } from './auth-manager';
import { DirectusSdk } from './data-sources/directus/directus-sdk';
import { PostsManager } from './posts-manager';

export class DataManager {
  directusSDK: DirectusSdk;
  authManager: AuthManager;
  postsManager: PostsManager;
  constructor(baseURL: string) {
    this.directusSDK = new DirectusSdk(baseURL);
    this.authManager = new AuthManager(this.directusSDK);
    this.postsManager = new PostsManager(this.directusSDK);
  }
}
