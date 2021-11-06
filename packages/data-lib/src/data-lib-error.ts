import { AuthError } from './auth-manager';

enum GeneralApiError {
  UnknownError = 'Unknown error',
}

type ErrorEnum = AuthError | GeneralApiError;

export class DataLibError extends Error {
  type: ErrorEnum;
  constructor(originalError: Error, type?: ErrorEnum) {
    super(originalError.message);
    this.name = 'DataLibError';
    this.type = type || GeneralApiError.UnknownError;
    this.stack = originalError.stack;
  }
}
