export default function Products ({ products }) {
  return (
    <main className='flex-1'>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 '>
        {
          products.map(product => {
            const { id, title, price, thumbnail } = product
            return (
              <li key={id} className='flex flex-col gap-4 max-w-xs bg-[#f5f7f9] border border-slate-300 rounded-md p-2'>
                <div className='bg-white rounded-md overflow-hidden aspect-square'>
                  <img src={thumbnail} alt={title} className='object-contain' />
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
  )
};
