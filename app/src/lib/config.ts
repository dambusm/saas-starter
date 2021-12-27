// NB: THIS FILE IS PUBLICLY ACCESSIBLE. Don't use any private env variables.

// NB: Not able to use object destructuring on process.env due to how next.js handles it
const NEXT_PUBLIC_STAGE = process.env.NEXT_PUBLIC_STAGE;

if (!NEXT_PUBLIC_STAGE) {
  throw new Error('Missing env variable');
}

type Config = {
  databaseApi: {
    baseURL: string;
  };
};

let config: Config;

switch (process.env.NEXT_PUBLIC_STAGE) {
  case 'local':
    config = {
      databaseApi: {
        baseURL: 'http://localhost:8055',
      },
    };
    break;
  default:
    throw new Error('No app stage specified');
}

export default config;
