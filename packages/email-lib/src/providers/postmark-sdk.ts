import { ServerClient } from 'postmark';

export const getPostmarkSdk = (serverToken: string) =>
  new ServerClient(serverToken);

export type PostmarkSdk = ReturnType<typeof getPostmarkSdk>;
