import { createContext, useState } from 'react'

export const FilterContext = createContext()
const filterInitialState = JSON.parse(window.localStorage.getItem('filters')) || []
export default function FilterProvider ({ children }) {
  const [filters, setFilters] = useState(filterInitialState)
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>
  )
};
