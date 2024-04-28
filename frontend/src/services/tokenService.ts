 
 
import { jwtDecode } from 'jwt-decode';
import { AuthUserActionType, IUser } from '../store/reducers/auth/types';
import http_api from './http_api';
import { store } from '../store';
 
 

export const storeToken = (token: string) => {
  console.log('store token');
  localStorage.setItem('token', `Bearer ${token}`);
  http_api.defaults.headers['Authorization'] = getToken();
  const user: IUser = jwtDecode(token);
 
 
  store.dispatch({
    type: AuthUserActionType.LOGIN_USER,
    payload: {
      email: user.email,
      fullName: user.fullName,
      description:user.description,
       roles: user.roles,
      userId: user.userId,
    },
  });
};
 
export const loadTokenFromStorage = () => {
  console.log('loadTokenFromStorage token');
  const token = getToken() as string;

  http_api.defaults.headers['Authorization'] = token;
  const user: IUser = jwtDecode(token);
  store.dispatch({
    type: AuthUserActionType.LOGIN_USER,
    payload: {
      email: user.email,
      fullName: user.fullName,
     description:user.description,
       roles: user.roles,
      userId: user.userId,
    },
  });
};

export const getToken = () => {
const token =  localStorage.getItem('token')  ;
  console.log("dsad",token);
  return token;
};

export const removeToken = () => {
  delete http_api.defaults.headers['Authorization'];
  store.dispatch({
    type: AuthUserActionType.LOGOUT_USER,
    payload: {},
  });
  return localStorage.removeItem('token');
};

export const decodeToken = (token: string) => {
  return jwtDecode(token);
};

export const isAdmin = (user: IUser | undefined): boolean => {
  return (
    user != null &&
    user.roles != null &&
    (user?.roles as string[]).find((r) => r == 'Administrator') != null
  );
};

export const isUnverified = (user: IUser | undefined): boolean => {
  return (
    user != null &&
    user.roles != null &&
    (user?.roles as string[]).find((r) => r == 'Unverified') != null
  );
};

export const isMod = (user: IUser | undefined): boolean => {
  return (
    user != null &&
    user.roles != null &&
    (user?.roles as string[]).find((r) => r == 'Moderator') != null
  );
};

export const isSignedIn = (): boolean => {
  let t = getToken();
  // todo add overdue check
  return t != null && t != '' && t != undefined;
};

export enum Roles {
  Administrator = 'Administrator',
  User = 'User',
  Unverified = 'Unverified',
}

 export const saveTokensToLocalStorage = (tokens: { key: string, value: string }[]) => {
  localStorage.setItem('tokens', JSON.stringify(tokens));
};

 export const getTokensFromLocalStorage = (): { key: string, value: string }[] => {
  const tokensString = localStorage.getItem('tokens');
  return tokensString ? JSON.parse(tokensString) : [];
};

export const addToken = (key: string, newToken: string) => {
  const tokens = getTokensFromLocalStorage();

   const existingTokenIndex = tokens.findIndex(token => token.key === key);

  if (existingTokenIndex === -1) {
     tokens.push({ key, value: newToken });
    saveTokensToLocalStorage(tokens);
  } else {
     tokens[existingTokenIndex].value = newToken;
    saveTokensToLocalStorage(tokens);
  }
};

 export const getTokenByKey = (key: string): string | undefined => {
  const tokens = getTokensFromLocalStorage();
  const tokenObject = tokens.find(token => token.key === key);
  return tokenObject ? tokenObject.value : undefined;
};

 
 
export const removeallTokens=()=>{
  const tokensString = localStorage.getItem('tokens')as string;
 var tokensArray = JSON.parse(tokensString);

 tokensArray = [];

 localStorage.setItem('tokens', JSON.stringify(tokensArray));

};
 




 
