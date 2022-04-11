import { ResponseResolver, MockedRequest, restContext } from 'msw';

const get: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      { id: 0, name: 'name-0' },
      { id: 1, name: 'name-1' },
      { id: 2, name: 'name-2' },
    ]),
  );
};

export default { get };
