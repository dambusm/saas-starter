import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import counterReducer from './counter/slice';
import { databaseApiSlice } from './database-api/database-api-slice';
import { localApiSlice } from './local-api/local-api-slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  [databaseApiSlice.reducerPath]: databaseApiSlice.reducer,
  [localApiSlice.reducerPath]: localApiSlice.reducer,
});

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      databaseApiSlice.middleware,
      localApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
