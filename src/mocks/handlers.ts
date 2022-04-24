import { rest } from 'msw';

import articles from '~/mocks/apis/articles';
import users from '~/mocks/apis/users';

export const handlers = [
  rest.get(`/api/v1/users`, users.get),
  rest.get(`/api/v1/articles`, articles.get),
];
