import koaRouter from 'koa-router';

import React from 'react';
import { renderToString } from 'react-dom/server';

import Client from './client';

const router = module.exports = new koaRouter();

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.state = err.status || 500;
    await ctx.render('error.ejs', { error: err.message });
  }
});

router.use(async (ctx, next) => {
  await next();
  await ctx.render('index.ejs', {
    app: renderToString(<Client />),
    data: ctx.body
  });
});

router.get('/');

router.all('/ping', async ctx => {
  ctx.body = 'pong';
});

router.all('/boom', async ctx => {
  ctx.throw(400, 'BOOM');
});
