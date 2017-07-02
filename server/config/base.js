import path from 'path'
import log4js from 'log4js'
import convert from 'koa-convert'
import cors from 'kcors'
import Serve from 'koa-static'
import mount from 'koa-mount'
import Logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import views from 'koa-views'

export default function middleware(app) {
  app.proxy = true
  log4js.configure({
    appenders: [
      { type: 'console' },
      {
        type: 'dateFile',
        filename: path.join(__dirname, '/../log/visit.log'),
        pattern: '-yyyy-MM-dd-hh.log',
        alwaysIncludePattern: false,
        category: 'file'
      }
    ],
    replaceConsole: true
  })
  app.use(cors({ credentials: true }))
  app.use(convert(Logger()))
  app.use(bodyParser())
  app.use(mount('/', convert(Serve(path.join(__dirname, '/../../dist/')))))
  app.use(views(path.join(__dirname, '/..'), { extension: 'html' }))
}
