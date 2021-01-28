const Router = require('koa-router');
const koaBody = require('koa-body');

const usersRouter = new Router();

const users = [];

//Uma rota de exemplo simples aqui.
usersRouter.get('/users', async (ctx) => {
  ctx.status = 200;
  ctx.body = { total: 0, count: 0, rows: [] }
});

usersRouter.get('/user/:id', async (ctx) => {
  //ctx.status = 404;
  //console.log('aqui', ctx);
  ctx.throw(404, "User not found");
});

usersRouter.post('/user', koaBody(), async (ctx) => {
  const user = ctx.request.body;
  users.push(user);
  console.log("usuarios:", users);
  //{nome: "raupp", email: "jose.raupp@devoz.com.br", idade: 35}
  ctx.status = 201;
})

usersRouter.put('/user', async (ctx) => {

})

usersRouter.delete('/user', async (ctx) => {
  const rq = ctx.request.body;
  let i = 0;
  for (user in users) {
    if (rq.name == user.name) {
      users.splice(i, 1);
      ctx.status = 201;
      break;
    }
  }
})

module.exports = usersRouter;
