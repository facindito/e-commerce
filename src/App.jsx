import Sidebar from './components/Sidebar'
import { products } from './mocks/products.json'
import useFilters from './hooks/useFilters'
import Products from './components/Products'
import CartProvider from './context/cart'
import Cart from './components/Cart'

export default function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts({ products })

  return (
    <div className='max-w-6xl mx-auto flex flex-col'>
      <CartProvider>
        <div>
          <Cart />
        </div>
        <div className='flex'>
          <Sidebar />
          <Products products={filteredProducts} />
        </div>
      </CartProvider>

    </div>
  )
}
