import { configureStore } from '@reduxjs/toolkit';
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
