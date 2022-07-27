import client, { removeAuthorizationHeader, setAuthorizationHeader } from "../api/client";
import storage from '../../utils/storage';

const activitiesBaseUrl = '/apiv1';

export const getUserDetail = (user) => {
  const url = `${activitiesBaseUrl}/user/${user}`;
  return client.get(url);
};

export const login = (credentials) => {    
  const url = `${activitiesBaseUrl}/login`;

  return client.post(url, credentials).then(({ ...accessToken }) => {
      setAuthorizationHeader(accessToken.token);
        storage.set('auth', accessToken.token);
    });
  };


  export const logout = () => {
    return Promise.resolve().then(() => {
      removeAuthorizationHeader();
      storage.remove('auth');
      storage.remove('user');

    });
  };


  export const getLoggedUser = () => {
    const url = `${activitiesBaseUrl}/credential`;
    return client.get(url).then((results) =>{
      storage.set('user', results.result.userId );
      return results.result.userId;
    });
  }

  export const createUser = (user) => {
    console.log(user);
    const url = `${activitiesBaseUrl}/user`;
    return client.post(url, user);
  };