import axios from 'axios';
import { AddContact, LogIn, SignUp } from '../types/responseTypes';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export async function signUp(body: SignUp) {
  const response = await axios.post('/users/signup/', body);
  setAuthHeader(response.data.token)
  return response.data;
}

export async function logIn(body: LogIn) {
  const { data } = await axios.post('/users/login/', body);
  setAuthHeader(data.token)
  return data;
}

export async function logOut() {
   await axios.post('/users/logout');
 
}

export async function currentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}

export async function getRequest() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postRequest({ name, number }: AddContact) {
  return await axios.post('/contacts', { name, number });
}

export async function deleteRequest(id: string) {
  return await axios.delete(`/contacts/${id}`);
}