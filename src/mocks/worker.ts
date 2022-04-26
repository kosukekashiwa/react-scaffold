import { setupWorker } from 'msw';

import { handlers } from '~/mocks/handlers';

/** A function that configures a Service Worker instance with a given mock definition,
 * and returns the API to control that worker instance. */
export const worker = setupWorker(...handlers);
