import { NavLink } from 'react-router-dom'
import { CartIcon } from './Icons'
import useCart from '../hooks/useCart'

export default function Header () {
  const { cart } = useCart()

  console.log(cart)

  return (
    <header className='max-w-6xl mx-auto flex justify-between items-center'>
      <NavLink
        to='/'
        className='p-2 m-4 border border-slate-300 rounded-md hover:bg-slate-300'
      >
        Home
      </NavLink>
      <NavLink
        to='/cart'
        className='p-2 m-4 border border-slate-300 rounded-md hover:bg-slate-300 relative'
      >
        <CartIcon />
        {
          cart && (
            <div
              className='w-4 h-4 absolute flex justify-center items-center rounded-full bg-black z-10 top-0.5 right-0.5 text-white text-[10px]'
            >
              {cart.count}
            </div>
          )
        }
      </NavLink>
    </header>
  )
};
