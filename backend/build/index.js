"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = require("./src/server");
const typeorm_1 = require("typeorm");
const config_1 = require("./src/common/config");
require('dotenv').config();
typeorm_1.createConnection(Object.assign({}, config_1.default.mysqlConfig, { type: 'mysql' }))
    .then(() => {
    server_1.default.server.listen(process.env.SERVER_PORT);
    console.log(`Server listening at port ${process.env.SERVER_PORT}`);
})
    .catch((err) => {
    console.log(err.message);
});
