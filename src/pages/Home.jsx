import { products } from '../mocks/products.json'
import useFilters from '../hooks/useFilters'
import Sidebar from '../components/Sidebar'
import Products from '../components/Products'

export default function Home () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts({ products })
  return (
    <main className='max-w-6xl mx-auto flex flex-col md:flex-row p-4 gap-4'>
      <Sidebar />
      <Products products={filteredProducts} />
    </main>
  )
};
