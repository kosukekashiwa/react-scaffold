import { rest } from 'msw';

import articleApis from '~/mocks/apis/articles';
import users from '~/mocks/apis/users';

export const handlers = [rest.get(`/api/v1/users`, users.get), ...articleApis];
