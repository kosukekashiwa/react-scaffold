import { articleHandlers } from '~/mocks/apis/article';
import { userHandlers } from '~/mocks/apis/user';

export const handlers = [...userHandlers, ...articleHandlers];
