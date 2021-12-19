import axios from 'axios';

const BASE_URL =
  process.env.REACT_APP_SERVER === 'local'
    ? 'http://localhost:4000'
    : 'https://repoprovas-cadu.herokuapp.com';

function createTest(body) {
  return axios.post(`${BASE_URL}/tests`, body);
}
function getFormInfos() {
  return axios.get(`${BASE_URL}/infos`);
}
function getTeacherList() {
  return axios.get(`${BASE_URL}/infos/tests/teachers`);
}
function getTeacheTestsById(id) {
  return axios.get(`${BASE_URL}/infos/tests/teachers/${id}`);
}

export { createTest, getFormInfos, getTeacherList, getTeacheTestsById };
