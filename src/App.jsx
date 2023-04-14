import Sidebar from './components/Sidebar'
import { products } from './mocks/products.json'
import useFilters from './hooks/useFilters'
import Products from './components/Products'
import CartProvider from './context/cart'

export default function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts({ products })

  return (

    <div className='max-w-6xl mx-auto flex'>
      <Sidebar />
      <CartProvider>
        <Products products={filteredProducts} />
      </CartProvider>
    </div>
  )
}
