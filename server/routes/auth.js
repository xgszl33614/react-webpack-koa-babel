import Router from 'koa-router'
import passport from 'koa-passport'

const router = new Router()

router.get('/login', async (ctx) => {
  ctx.body = {
    status: 'login page'
  }
})

router.post('/login', async (ctx, next) => {
  const middleware = passport.authenticate('local', async (user) => {
    if (user === false) {
      ctx.body = { status: 400 }
    } else {
      await ctx.login(user)
      ctx.body = { user }
    }
  })
  await middleware.call(this, ctx, next)
})

router.get('/logout', async (ctx) => {
  ctx.logout()
  ctx.redirect('/')
})

export default router
