//const axios = require("axios");

// Equivalent to `axios.get('https://httpbin.org/get?answer=42')`

//const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });

async function getData(endpoint, params) {
  return await axios.get(endpoint, { params: params });
}

async function postData(endpoint, params) {
  return await axios.post(endpoint, { params: params });
}

async function putData(endpoint, params) {
  return await axios.put(endpoint, { params: params });
}

async function deleteData(endpoint, params) {
  return await axios.delete(endpoint, { params: params });
}
