import { products } from '../mocks/products.json'
import useFilters from '../hooks/useFilters'
import Sidebar from '../components/Sidebar'
import Products from '../components/Products'

export default function Home () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts({ products })

  return (
    <main className='flex'>
      <Sidebar />
      <Products products={filteredProducts} />
    </main>
  )
};
