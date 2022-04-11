import { rest } from 'msw';
import React from 'react';
import { server } from '../../mocks/server';
import { render } from '../test-utils';
import CheckFetchView from './CheckFetchView';

describe('CheckFetchView tests', () => {
  // お試しtest
  describe('first', () => {
    it('fetch', async () => {
      const result = render(<CheckFetchView />);

      expect(await result.findByText('name-0')).toBeInTheDocument();
      expect(await result.findByText('name-1')).toBeInTheDocument();
      expect(await result.findByText('name-2')).toBeInTheDocument();
    });

    describe('res.once sample', () => {
      server.use(
        rest.get(`/api/v1/users`, (req, res, ctx) => {
          return res.once(
            ctx.status(200),
            ctx.json([
              { id: 0, name: 'name-0' },
              { id: 1, name: 'name-1' },
              { id: 2, name: 'name-2' },
              { id: 3, name: 'name-3' },
              { id: 4, name: 'name-4' },
            ]),
          );
        }),
      );
      it('tmp msw override', async () => {
        const result = render(<CheckFetchView />);

        expect(await result.findByText('name-3')).toBeInTheDocument();
        expect(await result.findByText('name-4')).toBeInTheDocument();
      });
    });
  });
});
