import { DataManager } from '@saas-starter/data-lib';
import { AppProps } from 'next/app';
import React from 'react';
import 'water.css/dist/light.css';
import config from '../lib/config';
import Logger from '../lib/logger';
import { Provider } from 'react-redux';
import store from '../store/store';

export const logger = new Logger();

export const dataManager = new DataManager(config.baseURL);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
