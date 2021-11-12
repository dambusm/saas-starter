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
  async signup(email: string, password: string, roleId: string) {
    return this.directusSDK.UsersManager.createUser({
      requestBody: { email, password, role: roleId },
    });
  }
  async getUserMe() {
    return this.directusSDK.UsersManager.getMe({});
  }
}
