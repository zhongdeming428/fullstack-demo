import { resolve } from 'path';

export default {
  apiPrefix: '/api/v1',
  mysqlConfig: {
    name: 'default',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'zdm123',
    database: 'demo',
    synchronize: false,
    logging: true,
    // debug: true,
    entities: [
      resolve(__dirname, '../database/models/entities/*.ts'),
      resolve(__dirname, '../database/models/entities/*.js')
    ]
  }
};
