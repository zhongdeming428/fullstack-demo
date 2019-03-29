import config from './config';
import Router = require('koa-router');

export interface IOptions {
  crossOrigin?: boolean; // 是否跨域
  isAdmin?: boolean; // 鉴权
}

class CommonRouter extends Router {
  constructor(private option: IOptions = {}) {
    super();
    this.prefix(config.apiPrefix);
    option.crossOrigin
      ? this.use((ctx, next) => {
          ctx.res.setHeader('Access-Control-Allow-Origin', '*');
          ctx.res.setHeader('Access-Control-Allow-Methods', 'PUT,OPTIONS,GET,POST,DELETE');
          next();
        })
      : null;
  }
}

export default CommonRouter;
