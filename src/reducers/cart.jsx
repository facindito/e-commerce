import { useReducer } from 'react'

const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

const updateLocalStore = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS_TYPES.ADD_TO_CART]: (state, action) => {
    const product = action.payload
    const { id } = product

    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      const newState = structuredClone(state)
      newState[productInCartIndex].quantity += 1

      updateLocalStore(newState)

      return newState
    }
    const newState = [...state, { ...product, quantity: 1 }]

    updateLocalStore(newState)

    return newState
  },
  [CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const product = action.payload
    const { id } = product

    const productInCartIndex = state.findIndex(item => item.id === id)
    const productInCart = state.find(item => item.id === id)

    if (productInCart.quantity > 1) {
      const newState = structuredClone(state)
      newState[productInCartIndex].quantity -= 1

      updateLocalStore(newState)
      return newState
    }

    const newState = state.filter(item => item.id !== id)
    updateLocalStore(newState)
    return newState
  }
}

const cartReducer = (state, action) => {
  const { type } = action
  const updateState = UPDATE_STATE_BY_ACTION[type]
  return updateState ? updateState(state, action) : state
}

export function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => dispatch({
    type: CART_ACTIONS_TYPES.ADD_TO_CART,
    payload: product
  })
  const removeToCart = (product) => dispatch({
    type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  return {
    cart: state,
    addToCart,
    removeToCart
  }
}
