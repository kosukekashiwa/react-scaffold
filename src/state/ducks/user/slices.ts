import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  User,
  NormalizedUsers,
  userNormalizrSchemaKey,
  normalizeUsers,
  denormalizeUsers,
} from './models';

import { client } from '~/state/ducks/apiClient';
import { fetchArticles, fetchArticle } from '~/state/ducks/article/slices';
import { RootState } from '~/state/store';
import { FetchStatus } from '~/views/hooks';

/** The type of User state. */
export type UserState = {
  status: FetchStatus;
  data: { ids: User['id'][]; entities: NormalizedUsers };
  posting: boolean;
  putting: boolean;
  deleting: boolean;
};

const initialState: UserState = {
  status: 'idle',
  data: { ids: [], entities: {} },
  posting: false,
  putting: false,
  deleting: false,
};

/** Users API path. */
const API_USERS = '/api/v1/users';
/** Users GET request. */
export const fetchUsers = createAsyncThunk('user/getEntities', async () => {
  const response = await client.get<User[]>(API_USERS);
  const normalized = normalizeUsers(response.data);
  if (normalized.result.length !== 0) {
    return {
      user: { ids: normalized.result, entites: normalized.entities[userNormalizrSchemaKey] },
    };
  }
  return { user: { ids: [], entites: {} } };
});
/** Users GET request with an ID. */
export const fetchUser = createAsyncThunk('user/getEntity', async (id: number) => {
  const response = await client.get<User>(`/users/${id}`);
  return { user: { entity: response.data } };
});
/** Users POST request. */
export const postUser = createAsyncThunk('user/postEntity', async (name: string) => {
  await client.post(`/users`, { name });
});
/** Users PUT request. */
export const putUser = createAsyncThunk('user/putEntity', async (user: User) => {
  await client.put(`/users/${user.id}`, { name: user.name });
});
/** Users DELETE request. */
export const deleteUser = createAsyncThunk('user/deleteEntity', async (id: number) => {
  await client.delete(`/users/${id}`);
});

/** The slice for the User state. */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userStateIdling: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    // fetchUsers
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'success';
      state.data.ids = action.payload.user.ids;
      state.data.entities = action.payload.user.entites;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = 'failed';
    });
    // fetchUser
    builder.addCase(fetchUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'success';
      if (!state.data.entities[action.payload.user.entity.id]) {
        state.data.ids.push(action.payload.user.entity.id);
      }
      state.data.entities[action.payload.user.entity.id] = action.payload.user.entity;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.status = 'failed';
    });
    // postUser
    builder.addCase(postUser.pending, (state) => {
      state.posting = true;
    });
    builder.addCase(postUser.fulfilled, (state) => {
      state.posting = false;
      state.status = 'idle';
    });
    builder.addCase(postUser.rejected, (state) => {
      state.posting = false;
    });
    // putUser
    builder.addCase(putUser.pending, (state) => {
      state.putting = true;
    });
    builder.addCase(putUser.fulfilled, (state) => {
      state.putting = false;
      state.status = 'idle';
    });
    builder.addCase(putUser.rejected, (state) => {
      state.putting = false;
    });
    // deleteUser
    builder.addCase(deleteUser.pending, (state) => {
      state.deleting = true;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.deleting = false;
      state.status = 'idle';
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.deleting = false;
    });
    // chenge state by article
    // fetchArticles
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.status = 'success';
      Object.values(action.payload.user.entities).forEach((user) => {
        if (!state.data.entities[user.id]) {
          state.data.ids.push(user.id);
        }
        state.data.entities[user.id] = user;
      });
    });
    // fetchArticle
    builder.addCase(fetchArticle.fulfilled, (state, action) => {
      state.status = 'success';
      if (!state.data.entities[action.payload.user.entity.id]) {
        state.data.ids.push(action.payload.user.entity.id);
      }
      state.data.entities[action.payload.user.entity.id] = action.payload.user.entity;
    });
  },
});

/** User slice actions */
export const { userStateIdling } = userSlice.actions;

/** Returns User state in the store. */
export const getUserDataStatus = ({ user }: RootState) => user.status;
/** Returns all User date in the store. */
export const getUsers = ({ user }: RootState) =>
  denormalizeUsers({
    result: user.data.ids,
    entities: { [userNormalizrSchemaKey]: user.data.entities },
  });
/** Returns a User having the the given ID. */
export const getUser = ({ user }: RootState, id: number) => user.data.entities[id];

/** User reducer */
export default userSlice.reducer;
