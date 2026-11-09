import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.product]
    case 'REMOVE':
      return state.filter((item, index) => index !== action.index)
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [])

  const total = items.reduce((sum, item) => sum + item.price, 0)

  const value = {
    items,
    total,
    addItem: (product) => dispatch({ type: 'ADD', product }),
    removeItem: (index) => dispatch({ type: 'REMOVE', index }),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
