import Router from '../common/common-router';

const path = `/world`;

const router = new Router({
  crossOrigin: true
});

const res = router.get(path, ctx => {
  ctx.body = 'world';
});

export default res.routes();
