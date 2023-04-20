import { Link } from 'react-router-dom'
import CartItems from '../components/Cart'
import useCart from '../hooks/useCart'

export default function Cart () {
  const { cart, clearCart } = useCart()
  const discount = Math.round(cart.total * 0.05)
  if (!cart) {
    return (
      <section className='mt-20 flex flex-col justify-center items-center gap-8'>
        <h2 className='font-bold text-2xl'>YOUR CART IS EMPTY...</h2>
        <Link
          to='/'
          className='px-6 py-2 border border-slate-300 rounded-md hover:bg-black hover:text-white hover:border-black'
        >Continue shopping
        </Link>
      </section>
    )
  }
  return (
    <div className='max-w-6xl mx-auto flex flex-col lg:flex-row'>
      <section className='flex flex-col flex-1'>
        <header className='flex justify-between items-baseline p-4'>
          <h2 className='text-4xl font-bold'>Cart</h2>
          <button
            className='font-bold hover:bg-black hover:text-white hover:border-black border border-slate-300 rounded-md px-4 py-2'
            onClick={clearCart}
          >
            Remove
          </button>
        </header>
        <CartItems />
      </section>
      <section className='p-4'>
        <div className='w-full md:w-80 max-w-sm h-fit border border-slate-300 p-4 rounded-md flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <span className='opacity-50 font-medium'>Subtotal</span>
            <strong>${cart.total ? cart.total : 0}</strong>
          </div>
          <div className='flex justify-between items-center'>
            <span className='opacity-50 font-medium'>Discount (5%)</span>
            <strong>${cart.total ? discount : 0}</strong>
          </div>
          <div className='h-1 border-b border-dashed' />
          <div className='flex justify-between items-center'>
            <strong>Grand total</strong>
            <strong className='text-lg'>${cart.total ? cart?.total - (discount) : 0}</strong>
          </div>
        </div>
      </section>
    </div>
  )
};
