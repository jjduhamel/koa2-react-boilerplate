import koaRouter from 'koa-router';

import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactRouter, { match, RouterContext } from 'react-router';

import { Client, Routes } from './client';

const router = module.exports = new koaRouter();

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const status = ctx.status;
    await ctx.render('error.ejs', { message: err.message });
    ctx.status = status;
  }
});

router.get(/.*/, async (ctx, next) => {
  await next();

  let html = '';

  match({
    routes: Routes, location: ctx.originalUrl
  }, (err, redirect, props) => {
    if (err) {
      throw err;
    } else if (redirect) {
      ctx.redirect(redirect.pathname+redirect.search);
    } else if (props) {
      html = renderToString(<RouterContext { ...props } />);
    } else {
      ctx.throw(404);
    }
  });

  await ctx.render('index.ejs', {
    app: html,
    data: ctx.body
  });
});

router.all('/ping', async ctx => {
  ctx.body = 'pong';
});

router.all('/boom', async ctx => {
  ctx.throw(400, 'BOOM');
});
