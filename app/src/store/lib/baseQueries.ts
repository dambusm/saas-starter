import { isDataLibError } from '@saas-starter/data-lib';

export const fetchAndTransformResponse = async <T>(
  fetcher: () => Promise<T>
) => {
  try {
    const result = await fetcher();
    return { data: result };
  } catch (error) {
    if (isDataLibError(error)) {
      return {
        error: {
          status: error.response?.status ? Number(error.response.status) : 598,
          data: JSON.stringify(error.errors),
        },
        data: undefined,
      };
    } else {
      return {
        error: { status: 599, data: JSON.stringify(error) },
        data: undefined,
      };
    }
  }
};

export const fetcherBaseQuery =
  () =>
  async <T>({ fetcher }: { fetcher: () => Promise<T> }) =>
    fetchAndTransformResponse(fetcher);
