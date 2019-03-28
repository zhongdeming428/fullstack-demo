import { generate as genUUID } from 'shortid';
import { validate as _validate } from 'joi';
import { Context } from 'koa';

const validate = (schema: Object) => async (ctx: Context, next: Function) => {
  const { error } = _validate(ctx.request.query, schema);
  if (error) {
    ctx.status = 500;
    ctx.body = {
      success: false,
      msg: error.message
    };
  } else {
    next();
  }
};

export { genUUID, validate };
