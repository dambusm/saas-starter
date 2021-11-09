// NB: Not able to use object destructuring on process.env due to how next.js handles it
const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

if (!BACKEND_BASE_URL) {
  throw new Error('Missing env variable');
}

const config = {
  baseURL: BACKEND_BASE_URL,
};

export default config;
