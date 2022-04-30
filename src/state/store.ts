import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import articleReducer from './ducks/article/slices';
import uiReducer from './ducks/ui/slices';
import userReducer from './ducks/user/slices';

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

export const TEST_STATE: RootState = {
  ui: { paletteMode: 'light' },
  article: {
    status: 'idle',
    data: {
      ids: ['dummy'],
      entities: {
        dummy: { id: 'dummy', title: 'dummy', author: 'dummy' },
      },
    },
    deleting: false,
  },
  user: {
    status: 'idle',
    data: { ids: ['dummy'], entities: { dummy: { id: 'dummy', name: 'dummy' } } },
    posting: false,
    putting: false,
    deleting: false,
  },
};
