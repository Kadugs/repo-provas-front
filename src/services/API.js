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
function getTeacherTestsById(id) {
  return axios.get(`${BASE_URL}/infos/tests/teachers/${id}`);
}
function getSubjectsList() {
  return axios.get(`${BASE_URL}/infos/tests/subjects`);
}
function getSubjectTestsById(id) {
  return axios.get(`${BASE_URL}/infos/tests/subjects/${id}`);
}

export {
  createTest,
  getFormInfos,
  getTeacherList,
  getTeacherTestsById,
  getSubjectsList,
  getSubjectTestsById,
};
