import Header from './components/Header'
import CartProvider from './context/cart'
import { Outlet } from 'react-router-dom'

export default function App () {
  return (
    <div className='h-auto overflow-hidden'>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </div>
  )
}
