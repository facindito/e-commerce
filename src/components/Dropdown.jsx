import { useState } from 'react'
import { SideBarToggleIcon } from './Icons'

export default function Dropdown ({ categories, title, type, filters, handleChange }) {
  const [dropdown, setDropdown] = useState(true)

  const handleClick = () => {
    setDropdown((prevState) => !prevState)
  }
  return (
    <>
      <button
        className='flex justify-between items-center w-full border border-slate-300 hover:bg-black hover:text-white p-2 rounded-md'
        onClick={handleClick}
      >
        <span>{title}</span>
        <SideBarToggleIcon />
      </button>
      {dropdown && (
        <ul className='px-4 py-2 flex flex-col gap-2'>
          {
            categories.map(category => {
              const capCategory = category.charAt(0).toUpperCase() + category.slice(1)
              const strType = type !== 'others' ? `${type}-${category}` : category
              return (
                <li key={strType}>
                  <label htmlFor={strType} className='flex items-center justify-start gap-2'>
                    <input
                      type='checkbox'
                      onChange={handleChange}
                      value={strType}
                      id={strType}
                      checked={filters.includes(strType)}
                    />
                    {capCategory}
                  </label>
                </li>
              )
            })
          }
        </ul>
      )}
    </>
  )
}
