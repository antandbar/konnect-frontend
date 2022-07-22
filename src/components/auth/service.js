import client, { removeAuthorizationHeader, setAuthorizationHeader } from "../api/client";
import storage from '../../utils/storage';

const advertsBaseUrl = '/apiv1';

export const getUserDetail = (user) => {
  const url = `${advertsBaseUrl}/user/${user}`;
  return client.get(url);
};

export const login = (credentials) => {    
  const url = `${advertsBaseUrl}/login`;

  return client.post(url, credentials).then(({ ...accessToken }) => {
      setAuthorizationHeader(accessToken.token);
        storage.set('auth', accessToken.token);
    });
  };


  export const logout = () => {
    return Promise.resolve().then(() => {
      removeAuthorizationHeader();
      storage.remove('auth');
    });
  };