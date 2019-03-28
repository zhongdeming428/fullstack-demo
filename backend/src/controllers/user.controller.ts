import Router from '../common/common-router';
import UserService from '../services/user.service';

const path = `/user`;

const router = new Router();

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
const res = router.get(path, ctx => {
  ctx.body = 'hello';
});

export default res.routes();
