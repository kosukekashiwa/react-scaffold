import { rest } from 'msw';

import articles from './apis/articles';
import users from './apis/users';

export const handlers = [
  rest.get(`/api/v1/users`, users.get),
  rest.get(`/api/v1/articles`, articles.get),
];
