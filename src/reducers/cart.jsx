import { useReducer } from 'react'

const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || false
const clearLocalStorage = () => window.localStorage.clear('cart')
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
    const { id, price } = product
    if (state[id]) {
      const newState = {
        ...state,
        [id]: {
          ...product,
          quantity: state[id].quantity + 1
        },
        total: state.total + price
      }

      updateLocalStore(newState)

      return newState
    }

    const newState = {
      ...state,
      [id]: {
        ...product,
        quantity: 1
      },
      count: state.count ? state.count + 1 : 1,
      total: state.total ? state.total + price : price
    }
    updateLocalStore(newState)

    return newState
  },
  [CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const product = action.payload
    const { id, price } = product

    if (state[id].quantity === 1) {
      const newState = {
        ...state,
        count: state.count - 1,
        total: state.total - price
      }
      delete newState[id]
      if (newState.total === 0) {
        clearLocalStorage()
        return false
      }
      return newState
    }

    const newState = {
      ...state,
      [id]: {
        ...product,
        quantity: state[id].quantity - 1
      },

      total: state.total - price
    }
    updateLocalStore(newState)
    return newState
  },
  [CART_ACTIONS_TYPES.CLEAR_CART]: () => {
    clearLocalStorage()
    return false
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

  const clearCart = () => dispatch({
    type: CART_ACTIONS_TYPES.CLEAR_CART
  })
  return {
    cart: state,
    addToCart,
    removeToCart,
    clearCart
  }
}
