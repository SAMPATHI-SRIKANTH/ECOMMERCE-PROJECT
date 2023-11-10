import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import CategoryPanel from './components/CategoryPanel'
import CategoryList from './components/CategoryList'
import CartContext from './context/CartContext'
import './App.css'

class App extends Component {
  state = {
    data: {},
    categories: [],
    activeCategory: '',
    cartList: [],
  }

  componentDidMount() {
    this.getEcommerceData()
  }

  getEcommerceData = async () => {
    const apiUrl =
      'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'
    const response = await fetch(apiUrl)
    const responseData = await response.json()
    this.setState({
      data: responseData,
      categories: responseData.categories,
      activeCategory: responseData.categories[0].name,
    })
  }

  onClickCategory = name => {
    this.setState({activeCategory: name})
  }

  addItemToCart = id => {
    this.setState(prevState => {
      const newList = [...prevState.cartList, id]
      return {cartList: newList}
    })
  }

  removeItemFromCart = id => {
    this.setState(prevState => {
      const filterList = prevState.cartList.filter(each => each !== id)
      const newList = [...filterList]
      return {cartList: filterList}
    })
  }

  render() {
    const {data, categories, activeCategory, cartList} = this.state

    return (
      <div className="app-container">
        <BrowserRouter>
          <CartContext.Provider
            value={{
              cartList,
              addItemToCart: this.addItemToCart,
              removeItemFromCart: this.removeItemFromCart,
            }}
          >
            <Header />
            <div className="main-content">
              <CategoryPanel
                categories={categories}
                activeCategory={activeCategory}
                onClickCategory={this.onClickCategory}
              />
              <CategoryList categories={categories} />
            </div>
          </CartContext.Provider>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
