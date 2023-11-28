import React from 'react'
import { createRoot } from 'react-dom/client'

import 'css-reset-plus'
import './styles/index.scss'
import App from './App'
import ErrorBoundary from 'error-boundary-react'

const rootElement = document.getElementById('Root')!
const root = createRoot(rootElement)

root.render(
  <ErrorBoundary element={<h1>Error</h1>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>
)
