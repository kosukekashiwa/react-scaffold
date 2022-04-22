import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { ActionCreatorWithoutPayload, ThunkAction } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '~/state/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type FetchStatus = 'idle' | 'loading' | 'success' | 'failed';
export const useFetch = (
  dataStatus: FetchStatus,
  stateIdlingAction: ActionCreatorWithoutPayload<string>,
  // eslint-disable-next-line
  fetchAction: ThunkAction<any, any, any, any>,
): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(stateIdlingAction);
  }, []);
  useEffect(() => {
    if (dataStatus === 'idle') {
      dispatch(fetchAction);
    }
  }, [dataStatus, dispatch, fetchAction]);
};
