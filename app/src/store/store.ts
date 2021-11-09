import { configureStore } from '@reduxjs/toolkit';
import { isDataLibError } from '@saas-starter/data-lib';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { authQueries } from './auth/auth-queries';
import counterReducer from './counter/slice';
import { postsQueries } from './posts/posts-queries';

const store = configureStore({
  devTools: true,
  reducer: {
    counter: counterReducer,
    [postsQueries.reducerPath]: postsQueries.reducer,
    [authQueries.reducerPath]: authQueries.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsQueries.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

export const executeQueryAndTransformResponse = async <T>(
  queryFn: () => Promise<{ data?: T }>
) => {
  try {
    const response = await queryFn();
    return { data: response.data };
  } catch (error) {
    if (isDataLibError(error)) {
      return {
        error: {
          status: error.status ? Number(error.status) : 598,
          data: JSON.stringify(error),
        },
      };
    } else {
      return { error: { status: 599, data: JSON.stringify(error) } };
    }
  }
};
