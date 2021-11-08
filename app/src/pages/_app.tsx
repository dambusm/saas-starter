import { DataManager } from '@saas-starter/data-lib';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { AppProps } from 'next/app';
import React from 'react';
import 'water.css/dist/light.css';
import config from '../lib/config';
import Logger from '../lib/logger';

export const logger = new Logger();

export const publicDataManager = new DataManager(config.baseURL);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}
