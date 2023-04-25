import useCart from '../hooks/useCart'

export default function CartItems () {
  const { cart, removeToCart, addToCart } = useCart()

  return (
    <main className='border border-slate-300 rounded-md m-4'>
      <table className='w-full'>
        <thead>
          <tr className='text-gray-400 text-left hidden sm:table-row border-b border-slate-300'>
            <th className='px-4 py-2 font-medium' colSpan='2'>Product</th>
            <th className='px-4 py-2 font-medium'>Quantity</th>
            <th className='px-4 py-2 font-medium'>Price</th>
          </tr>
        </thead>
        <tbody>
          {
              Object
                .keys(cart)
                .filter(key => key !== 'total' && key !== 'count')
                .map(key => {
                  const { title, price, quantity, thumbnail } = cart[key]
                  return (
                    <tr key={key} className='flex flex-col justify-between items-center sm:table-row'>
                      <td className='px-4 py-2'>
                        <div className='w-full sm:w-24 border border-slate-300 rounded-md overflow-hidden'>
                          <img src={thumbnail} alt={title} className='object-contain aspect-square' />
                        </div>
                      </td>
                      <td className='px-4 py-2'>{title}</td>
                      <td className='px-4 py-2'>
                        <div className='w-fit border border-slate-300 rounded-md flex items-center overflow-hidden hover:border-black'>
                          <button
                            className='px-4 py-1 flex justify-center items-center hover:text-white hover:bg-black w-1/3'
                            onClick={() => removeToCart(cart[key])}
                          >
                            <span className='text-center bg-red'>-</span>
                          </button>
                          <span className='flex-1 text-center w-1/3'>{quantity}</span>
                          <button
                            className='px-4 py-1 flex justify-center items-center hover:text-white hover:bg-black w-1/3'
                            onClick={() => addToCart(cart[key])}
                          >
                            <span className='text-center bg-red'>+</span>
                          </button>
                        </div>
                      </td>
                      <td className='px-4 py-2'>${price * quantity}</td>
                    </tr>
                  )
                })
            }
        </tbody>
      </table>
    </main>
  )
};
