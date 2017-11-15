import axios from 'axios';

export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const FETCH_EMPLOYEE = 'FETCH_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

const Employees = [
  {
    Id: 1,
    Name: "Jack",
    Gender: "Male"
  },
  {
    Id: 2,
    Name: "Jill",
    Gender: "Female"
  }
];

export function fetchEmployees() {
  //!@#const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = {data: Employees};
  return {
    type: FETCH_EMPLOYEE,
    payload: request
  };
}

export function createEmployee(props) {
  //!@#const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  const request = {data: Employees.find(x => x.Id == 1)};
  return {
    type: CREATE_EMPLOYEE,
    payload: request
  }
}

export function fetchEmployee(id) {
  //!@#const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  const request = {data: Employees.find(x => x.Id == id)};
  return {
    type: FETCH_EMPLOYEE,
    payload: request
  }
}

export function deleteEmployee(id) {
  //!@#const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  const request = {data: Employees.find(x => x.Id == id)};
  return {
    type: DELETE_EMPLOYEE,
    payload: request
  }
}
