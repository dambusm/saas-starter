import {
  AuthenticationService,
  ItemsPosts,
  ItemsService,
  OpenAPI,
  UsersService,
} from './api-codegen-sdk';
import { Directus } from '@directus/sdk';

export class DirectusSdk {
  constructor(baseURL: string) {
    OpenAPI.BASE = baseURL;
  }
  setAuthorizationHeader(token: string) {
    OpenAPI.HEADERS = { Authorization: `Bearer ${token}` };
  }
  ItemsManager = ItemsService;
  UsersManager = UsersService;
  AuthManager = AuthenticationService;
}

export enum DirectusItem {
  Posts = 'posts',
}

export const getTypedDirectusSDK = (baseUrl: string) =>
  new Directus<{
    [DirectusItem.Posts]: ItemsPosts;
  }>(baseUrl);

export type TypedDirectusSDK = ReturnType<typeof getTypedDirectusSDK>;
