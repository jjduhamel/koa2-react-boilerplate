import path from 'path';

import koa from 'koa';
import koaLogger from 'koa-morgan';
import koaViews from 'koa-views';
import koaStatic from 'koa-static';

import router from './router';

const app = module.exports = new koa();

app.use(koaLogger('dev'));
app.use(koaStatic(path.join(__dirname, '../public')));
app.use(koaViews(path.join(__dirname, 'views')));
app.use(router.routes());
