import Koa from 'koa'
import log4js from 'log4js'
import Router from 'koa-router'

// import routes from './routes'
import baseconfig from './config/base'

const app = new Koa()
const LOG = log4js.getLogger('file')

const router = new Router()
router.get('*', async (ctx) => {
  await ctx.render('index')
  // ctx.body = {
  //   1: 23
  // }
})
baseconfig(app)
app.use(router.routes())
app.listen(5000)

LOG.info('Server started, listening on port: 5000')

export default app
