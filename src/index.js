import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

const main = () => {
  return (
    <div>
        <App />
    </div>
  )
}

ReactDOM.render(main(), document.querySelector('#root'))