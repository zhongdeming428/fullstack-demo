import Router from '../common/common-router';
import koaBody = require('koa-body');
import { parse } from 'path';
import config from '../common/config';

const path = `/upload`;

const router = new Router({
  isAdmin: true
});

/**
 * @api {post} /upload 文件上传
 * @apiName 文件上传
 * @apiGroup Upload
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "1",
 *       "msg": "ok"
 *     }
 */
const res = router.post(
  path,
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: config.fileUploadPath,
      maxFileSize: 500 * 1024,
      keepExtensions: true
    }
  }),
  ctx => {
    const filePath = ctx.request.files && ctx.request.files.file.path,
      fileObj = parse(filePath || ''),
      url = ctx.request.host + '/upload/' + fileObj.name + fileObj.ext;
    console.log('upload file path => ', filePath);
    ctx.body = filePath
      ? {
          code: 0,
          msg: 'ok',
          data: {
            fileUrl: url
          }
        }
      : {
          code: 1,
          msg: 'Error occurred while saving file...'
        };
  }
);

export default res.routes();
