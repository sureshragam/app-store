// Write your code here
import './index.css'

function TabItem(props) {
  const {id, name, onClickCategory} = props
  const onClickTab = () => {
    onClickCategory(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickTab}>
        {name}
      </button>
    </li>
  )
}

export default TabItem
