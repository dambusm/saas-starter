import { AuthManager } from './auth-manager';
import {
  getTypedDirectusSDK,
  TypedDirectusSDK,
} from './data-sources/directus/directus-sdk';
import { PostsManager } from './posts-manager';
import { TransportError } from '@directus/sdk';

export class DataManager {
  directusSDK: TypedDirectusSDK;
  authManager: AuthManager;
  postsManager: PostsManager;
  constructor(baseURL: string) {
    this.directusSDK = getTypedDirectusSDK(baseURL);
    this.authManager = new AuthManager(this.directusSDK);
    this.postsManager = new PostsManager(this.directusSDK);
  }
}

type DataLibError = TransportError;

export const isDataLibError = (toCheck: unknown): toCheck is DataLibError =>
  toCheck instanceof TransportError;
