import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import WebFont from "webfontloader"

WebFont.load({
  google: {
    families: ["Roboto", "Montserrat"]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
