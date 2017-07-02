import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './index.css'
import routeConfig from './routes'

// fetch('/main', res => {
//   console.log(res.json())
// })

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(<Router history={browserHistory} routes={routeConfig} />, MOUNT_NODE)
