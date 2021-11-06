import { AuthError, DataManager } from '@next-hasura-boilerplate/data-lib';
import { DataLibError } from '@next-hasura-boilerplate/data-lib/src/data-lib-error';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';

const {
  GITHUB_ID,
  GITHUB_SECRET,
  JWT_SECRET,
  HASURA_ADMIN_SECRET,
} = process.env;
if (!GITHUB_ID || !GITHUB_SECRET || !JWT_SECRET || !HASURA_ADMIN_SECRET) {
  throw new Error('Missing env variable in api/auth');
}

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  jwt: {
    secret: JWT_SECRET,
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      try {
        if (!user.email) {
          throw new Error('No email provided by Oauth provider');
        }
        const dataManager = new DataManager(HASURA_ADMIN_SECRET);
        await dataManager.authManager.createUser(user.email);
        return Promise.resolve(true);
      } catch (error) {
        if (
          error instanceof DataLibError &&
          error.type === AuthError.UserAlreadyExists
        ) {
          console.log('User exists');
          return Promise.resolve(true);
        }
        return Promise.resolve(false);
      }
    },
  },
};

const nextAuth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
export default nextAuth;
