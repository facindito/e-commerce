import Sidebar from './components/Sidebar'
import { products } from './mocks/products.json'
import useFilters from './hooks/useFilters'
import Products from './components/Products'

export default function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts({ products })

  return (

    <div className='max-w-6xl mx-auto flex'>
      <Sidebar />
      <Products products={filteredProducts} />
    </div>
  )
}
