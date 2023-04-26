import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import CartProvider from './context/cart'

export default function App () {
  return (
    <div className='h-auto relative'>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </div>
  )
}
