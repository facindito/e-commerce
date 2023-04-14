import { useContext } from 'react'
import { CartContext } from '../context/cart'

export default function useCart () {
  const { cart, addToCart, removeToCart } = useContext(CartContext)

  return { cart, addToCart, removeToCart }
};
