import { useState } from 'react'
import { CATEGORIES } from './constants'
import { products } from './mocks/products.json'
import Dropdown from './components/Dropdown'

export default function App () {
  const [filters, setFilters] = useState([])

  const handleChange = (e) => {
    e.target.checked
      ? setFilters((prevState) => [...prevState, e.target.value])
      : setFilters((prevState) => {
        return prevState.filter(value => value !== e.target.value)
      })
  }

  return (

    <div className='flex'>
      <aside className='w-56 h-full overflow-hidden p-3 border border-slate-300 rounded-md m-4'>
        <Dropdown
          title='Woman'
          categories={CATEGORIES.WOMEN_CATEGORIES}
          handleChange={handleChange}
          filters={filters}
          type='womens'
        />
        <Dropdown
          title='Man'
          categories={CATEGORIES.MEN_CATEGORIES}
          handleChange={handleChange}
          filters={filters}
          type='mens'
        />
        <Dropdown
          title='Others'
          categories={CATEGORIES.OTHERS_CATEGORIES}
          handleChange={handleChange}
          filters={filters}
          type='others'
        />
      </aside>
      <main className='flex-1'>
        <ul className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 '>
          {
          products.map(product => {
            const { id, title, price, thumbnail } = product
            return (
              <li key={id} className='flex flex-col gap-4 max-w-xs bg-[#f5f7f9] border border-slate-300 rounded-md p-2'>
                <div className='bg-white rounded-md overflow-hidden'>
                  <img src={thumbnail} alt={title} className='aspect-square object-contain' />
                </div>
                <div className='flex justify-between items-center'>
                  <span>{title}</span>
                  <strong>${price}</strong>
                </div>
              </li>
            )
          })
        }
        </ul>
      </main>

    </div>
  )
}
