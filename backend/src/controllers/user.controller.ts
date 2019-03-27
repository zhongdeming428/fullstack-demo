import Router from '../common/common-router';
import UserService from '../services/user.service';

const path = `/user`;

const router = new Router();

const res = router.get(path, ctx => {
  ctx.body = 'hello';
});

export default res.routes();
