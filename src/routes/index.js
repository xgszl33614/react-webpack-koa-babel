export default {
  path: '/',
  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('COMPONENT/Main').default)
      }, 'todo')
    }
  },
  childRoutes: [
    {
      path: '/list', // 加上`/`可以不用套上父路径
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('COMPONENT/List/').default)
        }, 'b')
      }
    },
    {
      path: '/main', // 加上`/`可以不用套上父路径
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('COMPONENT/Main/').default)
        }, 'c')
      }
    },
    {
      path: '/:id',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('COMPONENT/Detail/').default)
          // cb(null, require('COMPONENT/Newhouse/Detail/newhouse-detail.scss').default)
        }, 'd')
      }
    }
  ]
}
