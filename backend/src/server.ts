import Koa = require('koa');
import { Middleware } from 'koa';
import routes from './controllers';
import logger = require('koa-logger');
import bodyParser = require('koa-body');
import Router = require('koa-router');
import cookie from 'koa-cookie';
import session = require('koa-session');
import config from './common/config';
import serve = require('koa-static-server');
import { resolve } from 'path';

const serveStaitc = (server: Koa) => {
  server.use(
    serve({
      rootDir: resolve(__dirname, './views'),
      rootPath: '/views'
    })
  );
  server.use(
    serve({
      rootDir: resolve(__dirname, '../upload'),
      rootPath: '/upload'
    })
  );
  server.use(
    serve({
      rootDir: resolve(__dirname, '../docs'),
      rootPath: '/docs'
    })
  );
};

class Server {
  constructor(public server: Koa) {
    this.server = server;
    this.server.use(logger());
    this.server.use(
      bodyParser({
        formLimit: '307200'
      })
    );
    this.server.use(cookie());
    this.server.keys = ['session secret key'];
    this.server.use(session(config.koaSessionConfig, this.server));
    serveStaitc(this.server);
  }

  use(routes: Middleware[]) {
    routes.forEach(route => {
      this.server.use(route);
    });
    this.server.use(new Router().allowedMethods());
  }
}

const app = new Server(new Koa());

app.use(routes);

export default app;
