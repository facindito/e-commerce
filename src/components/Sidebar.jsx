import { useCallback, useState } from 'react'
import { CATEGORIES } from '../constants'
import useFilters from '../hooks/useFilters'
import Dropdown from './Dropdown'
import { CloseIcon, FilterIcon } from './Icons'

export default function Sidebar () {
  const [isOpen, setOpen] = useState(false)
  const { filters, setFilters } = useFilters()

  const handleChange = useCallback((e) => {
    e.target.checked
      ? setFilters((prevState) => {
        const newState = [...prevState, e.target.value]
        window.localStorage.setItem('filters', JSON.stringify(newState))
        return newState
      })
      : setFilters((prevState) => {
        const newState = prevState.filter(value => value !== e.target.value)
        window.localStorage.setItem('filters', JSON.stringify(newState))
        return newState
      })
  }, [])

  const handleClick = () => {
    setOpen(!isOpen)
  }

  const className = `${isOpen
      ? 'translate-x-0'
      : '-translate-x-full'
    } absolute w-full z-10 sm:w-56 top-0 left-0 h-full p-3 bg-white border border-slate-300 rounded-md transition-transform duration-300 ease-in-out md:translate-x-0 md:sticky md:top-4`

  return (
    <>
      <button
        className='w-fit flex justify-center items-center gap-2 px-4 py-2 border border-slate-300 rounded-md ml-auto mr-4 md:hidden'
        onClick={handleClick}
      >
        <FilterIcon />
        Filters
      </button>
      <aside className={className}>
        <div className='flex gap-4'>
          <div className='flex-1 flex flex-col gap-1 '>
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
          </div>
          <button
            className='w-fit h-fit md:hidden'
            onClick={handleClick}
          >
            <CloseIcon />
          </button>
        </div>
      </aside>
    </>
  )
};
