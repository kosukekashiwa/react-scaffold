import React from 'react';
import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';

import { worker } from '~/mocks/worker';
import { store } from '~/state/store';
import App from '~/views/App';

// memo: json-serverとmswを切り替えれる様にするか迷い中(mswのみにしようかな?)
if (process.env.NODE_ENV === 'development') {
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
