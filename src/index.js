import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<p>Calentando los burritos...</p>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
