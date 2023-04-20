import { NavLink } from 'react-router-dom'
import { CartIcon } from './Icons'

export default function Header () {
  return (
    <header className='flex justify-between items-center'>
      <NavLink
        to='/'
        className='p-2 m-4 border border-slate-300 rounded-md hover:bg-slate-300'
      >
        Home
      </NavLink>
      <NavLink
        to='/cart'
        className='p-2 m-4 border border-slate-300 rounded-md hover:bg-slate-300'
      >
        <CartIcon />
      </NavLink>
    </header>
  )
};
