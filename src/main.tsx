import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";

import { MainRoutes } from './routes/route.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={MainRoutes}/>
  </StrictMode>,
)
