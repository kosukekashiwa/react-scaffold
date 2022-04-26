import { setupServer } from 'msw/node';

import { handlers } from '~/mocks/handlers';

/** A function that sets up a request interception layer in NodeJS environment. */
export const server = setupServer(...handlers);
