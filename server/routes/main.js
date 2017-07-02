import Router from 'koa-router'

const router = new Router()

router.get('/', async (ctx) => {
  console.log('main')
  await ctx.render('index')
})

router.get('/app', async (ctx) => {
  ctx.body = {
    status: 'app'
  }
})

export default router
