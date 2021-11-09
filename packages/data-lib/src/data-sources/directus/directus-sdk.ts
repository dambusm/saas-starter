import {
  AuthenticationService,
  ItemsService,
  OpenAPI,
  UsersService,
} from './api-codegen-sdk';

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
