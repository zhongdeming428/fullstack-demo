import { generate as genUUID } from 'shortid';
import { validate as _validate, SchemaLike } from 'joi';
import { Context } from 'koa';

export interface ISchema {
  body?: SchemaLike;
  query?: SchemaLike;
}

/**
 * 校验中间件
 * @param schema 校验规则对象
 */
const validate = (schema: ISchema) => async (ctx: Context, next: Function) => {
  let flag: boolean = false;
  for (let k in schema) {
    let target: any;
    switch (k) {
      case 'query':
        target = ctx.request.query;
        break;
      case 'body':
        target = ctx.request.body;
        break;
    }
    const { error } = _validate(target, schema[k]);
    if (error) {
      console.log('Invalid Request Params => ', error.message);
      ctx.status = 500;
      ctx.body = {
        code: 1,
        msg: error.message
      };
      flag = true;
      break;
    }
  }
  !flag ? next() : null;
};

export { genUUID, validate };
