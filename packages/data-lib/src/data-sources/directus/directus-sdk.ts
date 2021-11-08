import { ItemsService, OpenAPI, UsersService } from './api-codegen-sdk';

export class DirectusSdk {
  constructor(baseURL: string) {
    OpenAPI.BASE = baseURL;
  }
  ItemsManager = ItemsService;
  UsersManager = UsersService;
}
