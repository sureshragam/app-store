// Write your code here
import './index.css'

function AppItem(props) {
  const {name, image} = props
  return (
    <li className="app-item">
      <img src={image} alt={name} />
      <p className="app-name">{name}</p>
    </li>
  )
}

export default AppItem
