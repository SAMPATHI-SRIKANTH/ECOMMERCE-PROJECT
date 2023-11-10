import EachProduct from '../EachProduct'
import './index.css'

const CategoryList = ({categories}) => {
  console.log(categories)
  return (
    <div className="category-list-container">
      <div className="category-list-heading">
        <ul>
          {categories.map(category => (
            <li key={category.name}>
              <div>
                <h1>{category.name}&#62;</h1>
              </div>

              <div className="products-list">
                {category.products.map(eachProduct => (
                  <EachProduct eachProduct={eachProduct} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoryList
