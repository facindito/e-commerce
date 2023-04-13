import { useContext } from 'react'
import { FilterContext } from '../context/filters'

export default function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = ({ products }) => {
    if (filters.length === 0) return products
    return products.filter((product) => {
      return filters.includes(product.category)
    })
  }

  return {
    filters,
    setFilters,
    filterProducts
  }
};
