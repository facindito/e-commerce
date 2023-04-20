import useCart from '../hooks/useCart'

export default function Products ({ products }) {
  const { cart, addToCart, removeToCart } = useCart()

  return (
    <main className='flex-1'>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 '>
        {
          products.map(product => {
            const { id, title, price, thumbnail } = product

            return (
              <li key={id} className='flex flex-col justify-between gap-4 max-w-xs  border border-slate-300 rounded-md p-2'>

                <img src={thumbnail} alt={title} className='aspect-square object-contain rounded-md border border-slate-300' />

                <div className='flex justify-between items-center'>
                  <span>{title}</span>
                  <strong>${price}</strong>
                </div>

                {
                  cart[id]?.quantity >= 1
                    ? (
                      <div className='w-full flex justify-between items-center'>
                        <button
                          className='rounded-md bg-[#f5f7f9] border border-slate-300 hover:bg-black hover:text-white hover:border-black px-4 py-2'
                          onClick={() => removeToCart(product)}
                        >
                          -
                        </button>
                        <strong>{cart[id]?.quantity}</strong>
                        <button
                          className='rounded-md bg-[#f5f7f9] border border-slate-300 hover:bg-black hover:text-white hover:border-black px-4 py-2'
                          onClick={() => addToCart(product)}
                        >
                          +
                        </button>
                      </div>
                      )
                    : (
                      <button
                        className='w-full rounded-md bg-[#f5f7f9] border border-slate-300 hover:bg-black hover:text-white hover:border-black py-2'
                        onClick={() => addToCart(product)}
                      >
                        Add Cart
                      </button>
                      )
                }
              </li>
            )
          })
        }
      </ul>
    </main>
  )
};
