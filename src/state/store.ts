import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import uiReducer from './ducks/ui/slices';
import userReducer from './ducks/user/slices';
import articleReducer from './ducks/article/slices';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    article: articleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
