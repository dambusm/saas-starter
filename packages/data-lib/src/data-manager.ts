import { AuthManager } from './auth-manager';
import {
  DirectusSdk,
  getTypedDirectusSDK,
  TypedDirectusSDK,
} from './data-sources/directus/directus-sdk';
import { PostsManager } from './posts-manager';
import axios, { AxiosError } from 'axios';
import { Directus } from '@directus/sdk';

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

type DataLibError = AxiosError & {
  code: undefined;
  status?: number;
};

export const isDataLibError = (toCheck: any): toCheck is DataLibError =>
  axios.isAxiosError(toCheck);
