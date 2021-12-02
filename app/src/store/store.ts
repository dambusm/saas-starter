import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { authApiQueries } from './auth/auth-api-queries';
import { authManagerQueries } from './auth/auth-manager-queries';
import counterReducer from './counter/slice';
import { postsManagerQueries } from './posts/posts-manager-queries';

const store = configureStore({
  devTools: true,
  reducer: {
    counter: counterReducer,
    [postsManagerQueries.reducerPath]: postsManagerQueries.reducer,
    [authManagerQueries.reducerPath]: authManagerQueries.reducer,
    [authApiQueries.reducerPath]: authApiQueries.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsManagerQueries.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
