import React from 'react'
import style from './app.local.less'
console.log('App.js exec!!!!!!!!!')
const test11 = 11
export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <div className={style.footer}>
          footer
        </div>
      </div>
    )
  }
}
const test21 = 21
