import useCart from '../hooks/useCart'

export default function Cart () {
  const { cart } = useCart()

  if (cart.total === 0) return null
  return (
    <ul className='p-4 flex flex-col gap-4 border m-4'>
      {
        Object
          .keys(cart)
          .filter(key => key !== 'total')
          .map(key => {
            const { title, price, quantity } = cart[key]
            if (quantity === 0) return null
            return (
              <li key={key}>
                <strong>{title} </strong>
                <span>{price * quantity}</span>
              </li>
            )
          })
      }
      <li>
        <strong>Total: </strong>
        {cart.total}
      </li>
    </ul>
  )
};
