import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />

      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])
