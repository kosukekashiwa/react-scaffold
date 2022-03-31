import { Box } from '@mui/material';
import React from 'react';
import {
  fetchUsers,
  getUserDataStatus,
  getUsers,
  userStateIdling,
} from '../../state/ducks/user/slices';
import { useAppSelector, useFetch } from '../hooks';

const CheckFetchView: React.VFC = () => {
  // user stateのstatusを取得
  const userDataStatus = useAppSelector(getUserDataStatus);
  // storeのuser情報を取得
  const users = useAppSelector(getUsers);
  // useFetchで初回取得 & userDataStatusが変わる度に取得
  useFetch(userDataStatus, userStateIdling, fetchUsers());

  return (
    <Box>
      <Box>CheckFetchView</Box>
      <Box>
        {users.map((user) => (
          <Box key={user.id}>{user.name}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default CheckFetchView;
