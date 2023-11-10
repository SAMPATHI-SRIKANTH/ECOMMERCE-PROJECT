import {Link} from 'react-router-dom'
import './index.css'

const CategoryPanel = ({categories}) => {
  console.log('Categorypanel')
  return (
    <ul className="category-panel-container">
      {categories.map(each => (
        <li key={each.name}>
          <Link to={`/${each.name}`} className="category-links">
            {each.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CategoryPanel
