import { rest } from 'msw';
import users from './apis/users';
import articles from './apis/articles';

export const handlers = [
  rest.get(`/api/v1/users`, users.get),
  rest.get(`/api/v1/articles`, articles.get),
];
