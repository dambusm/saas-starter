import { DataLibError } from './data-lib-error';
import { HasuraSDK } from './data-sources/hasura/hasura-sdk';
import { isUniquenessConstraintError } from './data-sources/hasura/types';

export enum AuthError {
  UserAlreadyExists = 'UserAlreadyExists',
}

export class AuthManager {
  hasuraSDK: HasuraSDK;
  constructor(hasuraSDK: HasuraSDK) {
    this.hasuraSDK = hasuraSDK;
  }
  async getUserByEmail(email: string) {
    return (await this.hasuraSDK.getUserByEmail({ email })).users[0];
  }

  async createUser(email: string) {
    try {
      return (await this.hasuraSDK.createUser({ email })).insert_users_one?.id;
    } catch (error) {
      if (isUniquenessConstraintError(error)) {
        throw new DataLibError(error, AuthError.UserAlreadyExists);
      }
      throw new DataLibError(error);
    }
  }
}
