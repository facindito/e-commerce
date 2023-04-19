import useCart from '../hooks/useCart'

export default function CartItems () {
  const { cart, removeToCart, addToCart } = useCart()

  if (cart.total === 0) return null
  return (
    <main>
      <table className='w-full'>
        <thead>
          <tr className='text-gray-400 text-left hidden md:table-row'>
            <th className='px-4 py-2 font-medium' colSpan='2'>Product</th>
            <th className='px-4 py-2 font-medium'>Quantity</th>
            <th className='px-4 py-2 font-medium'>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            Object
              .keys(cart)
              .filter(key => key !== 'total')
              .map(key => {
                const { title, price, quantity, thumbnail } = cart[key]
                return (
                  <tr key={key} className='border-t flex flex-col justify-between items-center md:table-row'>
                    <td className='px-4 py-2'>
                      <div className='w-80 sm:w-24 border border-slate-300 rounded-md overflow-hidden'>
                        <img src={thumbnail} alt={title} className='object-contain aspect-square' />
                      </div>
                    </td>
                    <td className='px-4 py-2'>{title}</td>
                    <td className='px-4 py-2'>
                      <div className='w-fit border border-slate-300 rounded-md flex items-center'>
                        <button
                          className='px-4 py-1'
                          onClick={() => removeToCart(cart[key])}
                        >
                          -
                        </button>
                        {quantity}
                        <button
                          className='px-4 py-1'
                          onClick={() => addToCart(cart[key])}
                        >
                          +
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
