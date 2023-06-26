import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';
import 'src/bootstrap.min.css';
import 'src/index.css';
import { swrConfigObject } from 'src/api';
import { SWRConfig } from 'swr';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from 'src/components/Spinner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <SWRConfig value={swrConfigObject}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </Suspense>
  </React.StrictMode>
);
