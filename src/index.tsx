import React from 'react';
import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';

import { worker } from '~/mocks/worker';
import { store } from '~/state/store';
import App from '~/views/App';

/** Activate client-side mocking. */
if (process.env.NODE_ENV === 'development' && process.env.USE_MSW === 'true') {
  worker.start();
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
