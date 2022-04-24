import { AnyAction } from '@reduxjs/toolkit';

import {
  ArticleState,
  articleSlice,
  fetchArticles,
  fetchArticle,
  deleteArticle,
  getArticleDataStatus,
  getArticles,
  getArticle,
  isArticleDeleting,
} from '~/state/ducks/article/slices';
import { RootState } from '~/state/store';

const initialState: ArticleState = {
  status: 'idle',
  data: { ids: [], entities: {} },
  deleting: false,
};

describe('article slice teets', () => {
  describe('reducers', () => {
    describe('fetchArticles', () => {
      it('type is pending', () => {
        const action: AnyAction = {
          type: fetchArticles.pending.type,
        };

        const state = articleSlice.reducer(initialState, action);

        expect(state.status).toEqual('loading');
      });

      it('type is fulfilled', () => {
        const action: AnyAction = {
          type: fetchArticles.fulfilled.type,
          payload: {
            article: {
              ids: ['1', '2', '3'],
              entities: {
                '1': { id: '1', title: 'title-1', author: '1' },
                '2': { id: '2', title: 'title-2', author: '1' },
                '3': { id: '3', title: 'title-3', author: '2' },
              },
            },
            user: { entities: {} },
          },
        };

        const state = articleSlice.reducer(initialState, action);

        expect(state.data).toEqual({
          ids: ['1', '2', '3'],
          entities: {
            '1': { id: '1', title: 'title-1', author: '1' },
            '2': { id: '2', title: 'title-2', author: '1' },
            '3': { id: '3', title: 'title-3', author: '2' },
          },
        });
        expect(state.status).toEqual('success');
      });

      it('type is rejected', () => {
        const action: AnyAction = {
          type: fetchArticles.rejected.type,
        };

        const state = articleSlice.reducer(initialState, action);

        expect(state.status).toEqual('failed');
      });
    });

    describe('fetchArticle', () => {
      it('type is pending', () => {
        const action: AnyAction = {
          type: fetchArticle.pending.type,
        };

        const state = articleSlice.reducer(initialState, action);

        expect(state.status).toEqual('loading');
      });

      it('type is fulfilled', () => {
        const action: AnyAction = {
          type: fetchArticle.fulfilled.type,
          payload: {
            article: { entity: { id: '1', title: 'title-1', author: '1' } },
            user: { entity: {} },
          },
        };

        const state = articleSlice.reducer(initialState, action);

        expect(state.data).toEqual({
          ids: ['1'],
          entities: { '1': { id: '1', title: 'title-1', author: '1' } },
        });
        expect(state.status).toEqual('success');
      });

      it('type is rejected', () => {
        const action: AnyAction = {
          type: fetchArticle.rejected.type,
        };

        const state = articleSlice.reducer(initialState, action);

        expect(state.status).toEqual('failed');
      });
    });

    describe('deleteArticle', () => {
      it('type is pending', () => {
        const action: AnyAction = {
          type: deleteArticle.pending.type,
        };

        const state = articleSlice.reducer(initialState, action);

        expect(state.deleting).toEqual(true);
      });

      it('type is fulfilled', () => {
        const action: AnyAction = {
          type: deleteArticle.fulfilled.type,
        };

        const state = articleSlice.reducer(initialState, action);

        expect(state.deleting).toEqual(false);
        expect(state.status).toEqual('idle');
      });

      it('type is rejected', () => {
        const action: AnyAction = {
          type: deleteArticle.rejected.type,
        };

        const state = articleSlice.reducer(initialState, action);

        expect(state.deleting).toEqual(false);
      });
    });
  });

  describe('selectors', () => {
    const testState: RootState = {
      ui: { paletteMode: 'light' },
      article: {
        status: 'success',
        data: {
          ids: ['1', '2'],
          entities: {
            '1': { id: '1', title: 'title-1', author: '1' },
            '2': { id: '2', title: 'title-2', author: '1' },
          },
        },
        deleting: false,
      },
      user: {
        status: 'idle',
        data: { ids: ['1'], entities: { '1': { id: '1', name: 'name-1' } } },
      },
    };

    it('getArticleDataStatus', () => {
      const articleDataStatus = getArticleDataStatus(testState);

      expect(articleDataStatus).toEqual('success');
    });

    it('getArticles', () => {
      const articles = getArticles(testState);

      expect(articles).toEqual([
        { id: '1', title: 'title-1', author: { id: '1', name: 'name-1' } },
        { id: '2', title: 'title-2', author: { id: '1', name: 'name-1' } },
      ]);
    });

    it('getArticle', () => {
      const article = getArticle(testState, '1');

      expect(article).toEqual({
        id: '1',
        title: 'title-1',
        author: { id: '1', name: 'name-1' },
      });
    });

    it('isArticleDeleting', () => {
      const articleDeleting = isArticleDeleting(testState);

      expect(articleDeleting).toEqual(false);
    });
  });
});
