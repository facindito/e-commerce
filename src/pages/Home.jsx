import { products } from '../mocks/products.json'
import useFilters from '../hooks/useFilters'
import { CartIcon } from '../components/icons'
import Sidebar from '../components/Sidebar'
import Products from '../components/Products'
import { NavLink } from 'react-router-dom'

export default function Home () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts({ products })

  return (
    <>
      <header className='flex flex-col items-end relative'>
        <NavLink
          to='/cart'
          className='p-2 m-4 border border-slate-300 rounded-md hover:bg-slate-300'
        >
          <CartIcon />
        </NavLink>
      </header>
      <main className='flex'>
        <Sidebar />
        <Products products={filteredProducts} />
      </main>
    </>
  )
};
