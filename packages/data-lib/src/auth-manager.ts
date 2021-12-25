import { TypedDirectusSDK } from './data-sources/directus/directus-sdk';

export class AuthManager {
  directusSDK: TypedDirectusSDK;
  constructor(directusSDK: TypedDirectusSDK) {
    this.directusSDK = directusSDK;
  }
  async login(email: string, password: string) {
    return this.directusSDK.auth.login({ email, password });
  }
  async signup(email: string, password: string, roleId: string) {
    return this.directusSDK.users.createOne({ email, password, role: roleId });
  }
  async me() {
    return this.directusSDK.users.me.read();
  }
  async refreshToken() {
    return this.directusSDK.auth.refresh();
  }
}
