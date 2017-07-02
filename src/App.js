import React from 'react'
import { DatePicker } from 'antd'
import List from 'COMPONENT/List'
// import 'antd/dist/antd.global.css'
import logo from './logo.svg'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DatePicker />
        <List />
        <p className="App-intro">
          To get start, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
