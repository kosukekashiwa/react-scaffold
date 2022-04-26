import { articleHandlers } from '~/mocks/apis/article';
import { userHandlers } from '~/mocks/apis/user';

/** Request handlers by calling rest[METHOD]. */
export const handlers = [...userHandlers, ...articleHandlers];
