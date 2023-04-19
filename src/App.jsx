import CartProvider from './context/cart'
import { Outlet } from 'react-router-dom'

export default function App () {
  return (
    <div className='max-w-6xl mx-auto flex flex-col overflow-hidden'>
      <CartProvider>
        <Outlet />
      </CartProvider>
    </div>
  )
}
