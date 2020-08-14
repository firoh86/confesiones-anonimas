import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

// firebase npm install reactfire@next soporta hooks
import { FirebaseAppProvider } from 'reactfire';
import firebaseconfig from './firebase/fire';
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseCinfig={firebaseconfig}>
      <Suspense fallback={<p>Calentando los burritos...</p>}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
