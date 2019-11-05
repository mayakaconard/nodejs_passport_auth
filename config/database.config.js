const {
    Client
} = require("pg");

const client = new Client({
    user: 'wizglobal',
    database: 'cronjob',
    schema: 'public',
    port: '5432',
    password: 'wizglobal',
    host: 'localhost'
});
// client.connect();

module.exports = client;