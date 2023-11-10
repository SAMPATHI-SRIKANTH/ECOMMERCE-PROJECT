import {Component} from 'react'

import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'

import './index.css'

class EachProduct extends Component {
  state = {
    isAdded: false,
  }

  onAdd = () => {
    this.setState(prev => ({isAdded: !prev.isAdded}))
  }

  onRemove = () => {
    this.setState(prev => ({isAdded: !prev.isAdded}))
  }

  render() {
    const {eachProduct} = this.props
    const {isAdded} = this.state
    const {id, name, weight, price, image} = eachProduct
    return (
      <div className="product-container">
        <div className="product-image-container">
          <img src={image} alt={name} className="product-image" />

          {isAdded ? (
            <button onClick={this.onAdd}>
              <AiFillMinusCircle className="cart-minus-icon" />
            </button>
          ) : (
            <button onClick={this.onRemove}>
              <AiFillPlusCircle className="cart-plus-icon" />
            </button>
          )}
        </div>
        <p>${price}</p>
        <p>{name}</p>
        <p>{weight}</p>
      </div>
    )
  }
}

export default EachProduct
