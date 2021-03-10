/** Database setup for BizTime. */

const { Client } = require("pg");
const client = new Client({
    connectionString:"postgresql://postgres:root123@localhost/biztime"
});

client.connect();


module.exports = client;