import Koa = require('koa');
import { Middleware } from 'koa';
import routes from './controllers';
import logger = require('koa-logger');
import bodyParser = require('koa-bodyparser');

class Server {
  constructor(public server: Koa) {
    this.server = server;
    this.server.use(logger());
    this.server.use(bodyParser());
  }

  use(routes: Middleware[]) {
    routes.forEach(route => {
      this.server.use(route);
    });
  }
}

const app = new Server(new Koa());

app.use(routes);

export default app;
