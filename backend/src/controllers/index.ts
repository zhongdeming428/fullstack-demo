import { readdirSync } from 'fs';
import { resolve } from 'path';
import { Middleware } from 'koa';

const path = resolve(__dirname, './');

const files = readdirSync(path);

let res: Middleware[] = [];

files.forEach(file => {
  if (file.split('.')[0] === 'index') return;
  const fullPath = resolve(path, file);
  const router = require(fullPath).default;
  Array.isArray(router) ? res.concat(router) : res.push(router);
});

export default res;
