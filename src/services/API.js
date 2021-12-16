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

export { createTest, getFormInfos };
