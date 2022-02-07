import axios from "axios";

const BASE_URL = "http://localhost:5000";

function signUp(formData) {
  const promise = axios.post(`${BASE_URL}/sign-up`, formData);
  return promise;
}
function login(formData) {
  const promise = axios.post(`${BASE_URL}/login`, formData);
  return promise;
}

function addWithdraw(auth) {
  const promise = axios.get(`${BASE_URL}/home/withdraw`, auth);
  return promise;
}

function addDeposit(data, auth) {
  const promise = axios.post(`${BASE_URL}/home/deposit`, data, auth);
  return promise;
}

function getTransaction(token) {
  const promise = axios.get(`${process.env.REACT_APP_API}/home`, token);
  return promise;
}

export { signUp, login, addWithdraw, addDeposit, getTransaction };