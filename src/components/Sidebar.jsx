import { CATEGORIES } from '../constants'
import Dropdown from './Dropdown'

export default function Sidebar () {
  return (
    <aside className='w-56 h-full overflow-hidden p-3 border border-slate-300 rounded-md m-4 hidden md:block'>
      <Dropdown
        title='Woman'
        categories={CATEGORIES.WOMEN_CATEGORIES}
        type='womens'
      />
      <Dropdown
        title='Man'
        categories={CATEGORIES.MEN_CATEGORIES}
        type='mens'
      />
      <Dropdown
        title='Others'
        categories={CATEGORIES.OTHERS_CATEGORIES}
        type='others'
      />
    </aside>
  )
};
