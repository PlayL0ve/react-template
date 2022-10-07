import { del, get, post } from './request';

const URL = '/api/v1/auth';

export async function signUp(credentials) {
  const response = await post(`${URL}/signup`, credentials);
  response.user = response.data;
  return response;
}

export async function logIn(credentials) {
  const response = await post(`${URL}/login`, credentials);
  response.user = response.data;
  return response;
}
    
export async function logOut() {
  return await del(`${URL}/logout`);
}

export async function verifyUser() {
  const response = await get(`${URL}/verify`);
  response.user = response.data;
  return response;
}

const USER_KEY = 'USER';

export function storeLocalUser(user) {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }
}

export function getLocalUser() {
  const json = localStorage.getItem(USER_KEY);
  try {
    if (json) {
      return JSON.parse(json);
    }
  } catch (err) {
    storeLocalUser();
  } 
}
