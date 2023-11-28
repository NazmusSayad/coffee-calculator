import React from 'react'
import { createRoot } from 'react-dom/client'

import 'css-reset-plus'
import './styles/index.scss'
import App from './App'

const rootElement = document.getElementById('Root')!
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
