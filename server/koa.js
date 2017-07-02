import Koa from 'koa'
import log4js from 'log4js'

import routes from './routes'
import baseconfig from './config/base'

const app = new Koa()
const LOG = log4js.getLogger('file')

baseconfig(app)
app.use(routes())
app.listen(5000)

LOG.info('Server started, listening on port: 5000')

export default app
