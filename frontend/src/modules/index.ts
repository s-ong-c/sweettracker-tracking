import {
  combineReducers,
  configureStore,
  Dispatch,
  getDefaultMiddleware,
  Middleware,
  MiddlewareAPI,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { DELIVERY, deliveryReducer } from './delivery';

const rootReducer = combineReducers({
  [DELIVERY]: deliveryReducer,
} as ReducersMapObject);

const persistMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
  next: Dispatch,
) => action => {
  const returnValue = next(action);

  return returnValue;
};

export type IRootState = ReturnType<typeof rootReducer>;
export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), persistMiddleware],
});
