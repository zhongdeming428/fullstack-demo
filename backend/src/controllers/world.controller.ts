import Router from '../common/common-router';
import { validate } from '../common/utils';
import Joi = require('joi');

const path = `/world`;

const router = new Router({
  crossOrigin: true
});

const res = router.get(
  path,
  validate({
    name: Joi.string().required()
  }),
  ctx => {
    ctx.body = 'world';
  }
);

export default res.routes();
