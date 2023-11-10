import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
})

export default CartContext
