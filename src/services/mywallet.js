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

function deletedHabit(id, auth) {
  const promise = axios.delete(`${BASE_URL}/habits/${id}`, auth);
  return promise;
}

export {
  signUp,
  login,
  addWithdraw,
  addDeposit,
  deletedHabit,
};