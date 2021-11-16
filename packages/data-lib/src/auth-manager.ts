import {
  DirectusSdk,
  TypedDirectusSDK,
} from './data-sources/directus/directus-sdk';

export class AuthManager {
  directusSDK: TypedDirectusSDK;
  constructor(directusSDK: TypedDirectusSDK) {
    this.directusSDK = directusSDK;
  }
  async login(email: string, password: string) {
    const response = await this.directusSDK.auth.login({ email, password });
    return { data: response };
  }
  async signup(email: string, password: string, roleId: string) {
    return this.directusSDK.users.createOne({ email, password, role: roleId });
  }
  async getUserMe() {
    return { data: this.directusSDK.users.me };
  }
}
