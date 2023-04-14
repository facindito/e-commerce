import { createContext } from 'react'
import { useCartReducer } from '../reducers/cart'

export const CartContext = createContext()

export default function CartProvider ({ children }) {
  const { cart, addToCart, removeToCart } = useCartReducer()

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  )
};
