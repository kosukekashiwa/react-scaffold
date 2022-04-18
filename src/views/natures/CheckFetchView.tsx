import { Box, Button } from '@mui/material';
import React, { useCallback } from 'react';
import { useAppSelector, useFetch, useAppDispatch } from '~/views/hooks';
import {
  getUserDataStatus,
  getUsers,
  userStateIdling,
  fetchUsers,
} from '~/state/ducks/user/slices';
import { RootState } from '~/state/store';
import { getArticle, fetchArticle } from '~/state/ducks/article/slices';

const CheckFetchView: React.VFC = () => {
  // user stateのstatusを取得
  const userDataStatus = useAppSelector(getUserDataStatus);
  // storeのuser情報を取得
  const users = useAppSelector(getUsers);
  // useFetchで初回取得 & userDataStatusが変わる度に取得
  useFetch(userDataStatus, userStateIdling, fetchUsers());

  //  srticle単一fetch
  const article = useAppSelector((state: RootState) => getArticle(state, 0));
  const dispatch = useAppDispatch();
  const handleFetchButtonClick = useCallback(() => {
    dispatch(fetchArticle(0));
  }, [dispatch]);

  return (
    <Box>
      <Box>CheckFetchView</Box>
      <Box mt={1}>
        {users.map((user) => (
          <Box key={user.id}>{user.name}</Box>
        ))}
      </Box>
      <Box mt={1}>
        <Button variant="contained" onClick={handleFetchButtonClick}>
          Fetch
        </Button>
        {article && <Box>{article.title}</Box>}
      </Box>
    </Box>
  );
};

export default CheckFetchView;
