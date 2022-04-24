import { rest, DefaultRequestBody, PathParams } from 'msw';

import { User } from '~/state/ducks/user/models';

const userApis = [
  rest.get<DefaultRequestBody, PathParams, User[]>(`/api/v1/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 0, name: 'name-0' },
        { id: 1, name: 'name-1' },
        { id: 2, name: 'name-2' },
      ]),
    );
  }),
  rest.get<DefaultRequestBody, PathParams, User>(`/api/v1/users/:userId`, (req, res, ctx) => {
    const { userId } = req.params;

    return res(ctx.status(200), ctx.json({ id: 0, name: `name-${userId}` }));
  }),
  rest.post<DefaultRequestBody, PathParams, DefaultRequestBody>(
    `/api/v1/users/:userId`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),
  rest.put<DefaultRequestBody, PathParams, DefaultRequestBody>(`/api/v1/users`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete<DefaultRequestBody, PathParams, DefaultRequestBody>(
    `/api/v1/users/:userId`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),
];

export default userApis;
