import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FilterProvider from './context/filters'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <RouterProvider router={router} />
  </FilterProvider>
)
