import CartItems from '../components/Cart'
import useCart from '../hooks/useCart'

export default function Cart () {
  const { cart } = useCart()

  return (
    <div className='flex flex-col lg:flex-row'>
      <section className='flex flex-col flex-1'>
        <header className='flex justify-between items-baseline p-4'>
          <h2 className='text-4xl font-bold'>Cart</h2>
          <button className='font-bold hover:bg-slate-300 border border-slate-300 rounded-md px-4 py-2'>Remove</button>
        </header>
        <CartItems />
      </section>
      <section className='p-4'>
        <div className='w-full md:w-80 max-w-sm h-fit border border-slate-300 p-4 rounded-md flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <span className='opacity-50 font-medium'>Subtotal</span>
            <strong>${cart.total}</strong>
          </div>
          <div className='flex justify-between items-center'>
            <span className='opacity-50 font-medium'>Discount (5%)</span>
            <strong>${cart.total * 0.05}</strong>
          </div>
          <div className='h-1 border-b border-dashed' />
          <div className='flex justify-between items-center'>
            <strong>Grand total</strong>
            <strong className='text-lg'>${cart.total - (cart.total * 0.05)}</strong>
          </div>
        </div>
      </section>
    </div>
  )
};
