import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App'
import 'src/bootstrap.min.css'
import { swrConfigObject } from 'src/api'
import { SWRConfig } from 'swr'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={swrConfigObject}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>,
)
