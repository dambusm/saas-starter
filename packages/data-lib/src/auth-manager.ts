import { DirectusSdk } from './data-sources/directus/directus-sdk';

export class AuthManager {
  directusSDK: DirectusSdk;
  constructor(directusSDK: DirectusSdk) {
    this.directusSDK = directusSDK;
  }
  async getUserMe() {
    return this.directusSDK.UsersManager.getMe({});
  }
}
