import { DataManager } from '@saas-starter/data-lib';
import type { NextApiRequest, NextApiResponse } from 'next';
import config from '../../../lib/config';
import { dataManager } from '../../_app';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const typedQuery = req.body as { email?: string; password?: string };
  if (req.method !== 'POST') {
    return res.status(401).send('Method not supported');
  }
  const { email, password } = typedQuery;
  if (!email) {
    return res.status(400).send('Email is required');
  }
  if (!password) {
    return res.status(400).send('Password is required');
  }
  const dataManager = new DataManager(config.baseURL);
  const serverAuthToken = process.env.SERVER_FUNCTIONS_DIRECTUS_TOKEN;
  const userRoleId = process.env.DIRECTUS_USER_ROLE_ID;
  if (!serverAuthToken || !userRoleId) {
    throw new Error('Missing env variable');
  }
  dataManager.directusSDK.auth.static(serverAuthToken);
  const response = await dataManager.authManager.signup(
    email,
    password,
    userRoleId
  );
  if (!response) {
    throw new Error('Missing expected response data');
  }
  return res.status(200).send(response);
};

export type SignupResponse = PromiseResult<
  ReturnType<typeof dataManager.authManager.signup>
>;
