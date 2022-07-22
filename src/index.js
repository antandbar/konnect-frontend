import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import globalEs from './locales/es/global.json';
import globalEn from './locales/en/global.json';
import { setAuthorizationHeader } from './components/api/client';
import storage from './utils/storage';



const accessToken = storage.get('auth');
setAuthorizationHeader(accessToken);




i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    en: { global: globalEn },
    es: { global: globalEs } }
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router>
        <App isInitiallyLogged={!!accessToken} />
      </Router>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);


