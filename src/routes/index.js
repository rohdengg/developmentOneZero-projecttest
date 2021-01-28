const Router = require('koa-router');

const usersRouter = require('./users.routes');

const router = new Router();

//rota simples pra testar se o servidor está online
router.get('/', async (ctx) => {
  ctx.body = `Seu servidor esta rodando em http://localhost:`; //http://localhost:3000/ //PORT
});

router.use(usersRouter.middleware()); //necessário para acessar o request.body

module.exports = router;

