import { PathParams, DefaultRequestBody, rest } from 'msw';

import { Article } from '~/state/ducks/article/models';

const articleApis = [
  rest.get<DefaultRequestBody, PathParams, Article[]>(`/api/v1/articles`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 0, title: 'title-0', author: { id: 0, name: 'name-0' } },
        { id: 1, title: 'title-1', author: { id: 1, name: 'name-1' } },
        { id: 2, title: 'title-2', author: { id: 1, name: 'name-1' } },
      ]),
    );
  }),
  rest.get<DefaultRequestBody, PathParams, Article>(
    `/api/v1/articles/:articleId`,
    (req, res, ctx) => {
      const { articleId } = req.params;

      return res(
        ctx.status(200),
        ctx.json({ id: 0, title: `title-${articleId}`, author: { id: 0, name: 'name-0' } }),
      );
    },
  ),
  rest.post<DefaultRequestBody, PathParams, DefaultRequestBody>(
    `/api/v1/articles/:articleId`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),
  rest.put<DefaultRequestBody, PathParams, DefaultRequestBody>(
    `/api/v1/articles`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),
  rest.delete<DefaultRequestBody, PathParams, DefaultRequestBody>(
    `/api/v1/articles/:articleId`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),
];

export default articleApis;
