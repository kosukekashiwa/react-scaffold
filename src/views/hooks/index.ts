import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { ThunkAction } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '~/state/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/** The type of fetch status. */
export type FetchStatus = 'idle' | 'loading' | 'success' | 'failed';

/** Fetch data when the fetch status is 'idle'. */
export const useFetch = (
  dataStatus: FetchStatus,
  // eslint-disable-next-line
  stateIdlingAction: { payload: any; type: string },
  // eslint-disable-next-line
  fetchAction: ThunkAction<any, any, any, any>,
): void => {
  const dispatch = useAppDispatch();
  useComponentDidMount(() => {
    dispatch(stateIdlingAction);
  });
  // useEffect(() => {
  //   dispatch(stateIdlingAction);
  // }, []);
  useEffect(() => {
    if (dataStatus === 'idle') {
      dispatch(fetchAction);
    }
  }, [dataStatus, dispatch, fetchAction]);
};

const useComponentDidMount = (callback: () => void) => {
  useEffect(callback, []);
};
