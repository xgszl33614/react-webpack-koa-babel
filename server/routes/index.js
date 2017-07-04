import compose from 'koa-compose'
import Router from 'koa-router'

// import RouterMain from './main'
// import RouterAuth from './auth'

const router = new Router()

// router.get('/', async (ctx) => {
//   await ctx.render('index')
// })

// router.use('/main', RouterMain.routes(), RouterMain.allowedMethods())
// router.use('/auth', RouterAuth.routes(), RouterAuth.allowedMethods())
//
router.get('*', async (ctx) => {
  await ctx.render('index')
})

export default function routes() {
  return compose([
    router.routes(),
    router.allowedMethods()
  ])
}
