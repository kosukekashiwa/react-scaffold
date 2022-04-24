import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { client } from '~/state/ducks/apiClient';
import {
  Article,
  NormalizedArticles,
  normalizeArticles,
  articleNormalizrSchemaKey,
  denormalizeArticles,
} from '~/state/ducks/article/models';
import { userNormalizrSchemaKey } from '~/state/ducks/user/models';
import { UserState } from '~/state/ducks/user/slices';
import { RootState } from '~/state/store';
import { FetchStatus } from '~/views/hooks';

/** The type of Article state. */
export type ArticleState = {
  status: FetchStatus;
  data: { ids: Article['id'][]; entities: NormalizedArticles };
  deleting: boolean;
};

const initialState: ArticleState = {
  status: 'idle',
  data: { ids: [], entities: {} },
  deleting: false,
};

/** Articles API path. */
const API_ARTICLES = '/api/v1/articles';
/** Articles GET request. */
export const fetchArticles = createAsyncThunk<
  {
    article: ArticleState['data'];
    user: { entities: UserState['data']['entities'] };
  },
  undefined,
  { rejectValue: { errorMessage: string } }
>('article/getEntities', async (_, thunkAPI) => {
  try {
    const response = await client.get<Article[]>(`/articles`);
    const normalized = normalizeArticles(response.data);
    if (normalized.result.length !== 0) {
      return {
        article: {
          ids: normalized.result,
          entities: normalized.entities[articleNormalizrSchemaKey],
        },
        user: { entities: normalized.entities[userNormalizrSchemaKey] },
      };
    }
    return {
      article: { ids: [], entities: {} },
      user: { entities: {} },
    };
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue({ errorMessage: e.toString() });
    }
    return thunkAPI.rejectWithValue({ errorMessage: 'hoge' });
  }
});
/** Articles GET request with an ID. */
export const fetchArticle = createAsyncThunk('article/getEntity', async (id: number) => {
  const response = await client.get<Article>(`${API_ARTICLES}/${id}`);
  const normalized = normalizeArticles([response.data]);
  return {
    // eslint-disable-next-line
    article: { entity: Object.values(normalized.entities[articleNormalizrSchemaKey]).pop()! },
    // eslint-disable-next-line
    user: { entity: Object.values(normalized.entities[userNormalizrSchemaKey]).pop()! },
  };
});
/** Articles DELETE request. */
export const deleteArticle = createAsyncThunk('article/deleteEntity', async (id: number) => {
  await client.delete(`/articles/${id}`);
});

/** The slice for the Article state. */
export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    articleStateIdling: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.status = 'success';
      state.data.ids = action.payload.article.ids;
      state.data.entities = action.payload.article.entities;
    });
    builder.addCase(fetchArticles.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(fetchArticle.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchArticle.fulfilled, (state, action) => {
      state.status = 'success';
      if (!state.data.entities[action.payload.article.entity.id]) {
        state.data.ids.push(action.payload.article.entity.id);
      }
      state.data.entities[action.payload.article.entity.id] = action.payload.article.entity;
    });
    builder.addCase(fetchArticle.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(deleteArticle.pending, (state) => {
      state.deleting = true;
    });
    builder.addCase(deleteArticle.fulfilled, (state) => {
      state.deleting = false;
      state.status = 'idle';
    });
    builder.addCase(deleteArticle.rejected, (state) => {
      state.deleting = false;
    });
  },
});

/** Article slice actions */
export const { articleStateIdling } = articleSlice.actions;

/** Returns Article state in the store. */
export const getArticleDataStatus = ({ article }: RootState) => article.status;
/** Returns all Article date in the store. */
export const getArticles = ({ article, user }: RootState) =>
  denormalizeArticles({
    result: article.data.ids,
    entities: {
      [articleNormalizrSchemaKey]: article.data.entities,
      [userNormalizrSchemaKey]: user.data.entities,
    },
  });
/** Returns a Article having the the given ID. */
export const getArticle = ({ article, user }: RootState, id: string) =>
  denormalizeArticles({
    result: [id],
    entities: {
      [articleNormalizrSchemaKey]: article.data.entities,
      [userNormalizrSchemaKey]: user.data.entities,
    },
  }).pop();
/** Returns whether Article deleting. */
export const isArticleDeleting = ({ article }: RootState) => article.deleting;

/** Article reducer */
export default articleSlice.reducer;
