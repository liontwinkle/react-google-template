import axios from 'axios';

import storage from './storage.service';

const USER_TOKEN_KEY = 'access_token';
const baseURL = process.env.REACT_APP_API;
// const baseURL = 'https://api.commandpost.com.au';
// const baseURL = 'https://74.208.102.130:4000';
axios.defaults.withCredentials = true;
const http = axios.create({ baseURL: `${baseURL}/` });

function get(url, headers = {}, params = {}) {
  const accessToken = storage.getItem(USER_TOKEN_KEY);
  const authHeader = { 'x-access-token': accessToken };
  return http.get(url, {
    ...params,
    headers: {
      ...authHeader,
      ...headers,
      credentials: 'include',
    },
  });
}

function post(url, data, headers = {}, params = {}) {
  const accessToken = storage.getItem(USER_TOKEN_KEY);
  const authHeader = { 'x-access-token': accessToken };
  return http.post(url, data, {
    ...params,
    headers: {
      ...authHeader,
      ...headers,
      credentials: 'include',
    },
  });
}

function put(url, data, headers = {}) {
  const accessToken = storage.getItem(USER_TOKEN_KEY);
  const authHeader = { 'x-access-token': accessToken };
  return http.put(url, data, {
    headers: {
      ...authHeader,
      ...headers,
      credentials: 'include',
    },
  });
}

function remove(url, data, headers = {}) {
  const accessToken = storage.getItem(USER_TOKEN_KEY);
  const authHeader = { 'x-access-token': accessToken };
  return http.delete(url, {
    headers: {
      ...authHeader,
      ...headers,
      credentials: 'include',
    },
    data,
  });
}

export default {
  http,
  get,
  post,
  put,
  remove,
};
