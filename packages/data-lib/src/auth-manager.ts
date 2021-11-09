import { DirectusSdk } from './data-sources/directus/directus-sdk';

export class AuthManager {
  directusSDK: DirectusSdk;
  constructor(directusSDK: DirectusSdk) {
    this.directusSDK = directusSDK;
  }
  async login(email: string, password: string) {
    return this.directusSDK.AuthManager.login({
      requestBody: { email, password },
    });
  }
  async getUserMe() {
    return this.directusSDK.UsersManager.getMe({});
  }
}
