require('dotenv/config');
const axios = require('axios').default;

const config = axios.create({
    //baseURL: process.env.ESP_CONN_URL
    baseURL: process.env.ESP_CONN_URL_TEST
});

module.exports = config;