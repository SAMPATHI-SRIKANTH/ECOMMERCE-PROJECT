import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import './index.css'

const Header = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <div className="header-container">
          <h1>E-Commerce</h1>
          <div className="cart-container">
            <AiOutlineShoppingCart className="cart-icon" />
            <p>{cartList.length}</p>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Header
