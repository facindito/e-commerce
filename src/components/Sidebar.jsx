import { useCallback } from 'react'
import { CATEGORIES } from '../constants'
import useFilters from '../hooks/useFilters'
import Dropdown from './Dropdown'

export default function Sidebar () {
  const { filters, setFilters } = useFilters()

  const handleChange = useCallback((e) => {
    e.target.checked
      ? setFilters((prevState) => [...prevState, e.target.value])
      : setFilters((prevState) => {
        return prevState.filter(value => value !== e.target.value)
      })
  }, [])

  return (
    <aside className='w-56 h-full overflow-hidden p-3 border border-slate-300 rounded-md m-4 hidden md:block md:sticky top-4'>
      <Dropdown
        title='Woman'
        categories={CATEGORIES.WOMEN_CATEGORIES}
        type='womens'
        filters={filters}
        handleChange={handleChange}
      />
      <Dropdown
        title='Man'
        categories={CATEGORIES.MEN_CATEGORIES}
        type='mens'
        filters={filters}
        handleChange={handleChange}
      />
      <Dropdown
        title='Others'
        categories={CATEGORIES.OTHERS_CATEGORIES}
        type='others'
        filters={filters}
        handleChange={handleChange}
      />
    </aside>
  )
};