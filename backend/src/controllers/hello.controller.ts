import Router from '../common/common-router';

const path = `/hello`;

const router = new Router();

const res = router.get(path, ctx => {
  ctx.body = 'hello';
});

export default res.routes();
