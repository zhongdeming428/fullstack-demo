import 'reflect-metadata';
import app from './src/server';
import { createConnection } from 'typeorm';
import config from './src/common/config';

// import env
require('dotenv').config();

createConnection({
  ...config.mysqlConfig,
  type: 'mysql'
})
  .then(() => {
    app.server.listen(process.env.SERVER_PORT);
    console.log(`Server listening at port ${process.env.SERVER_PORT}`);
  })
  .catch((err: any) => {
    console.log(err.message);
  });
