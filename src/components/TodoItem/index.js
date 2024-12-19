// Write your code here
import './index.css'
const TodoItem = props => {
  const {todoList, deletetodoItem} = props
  const {title, id} = todoList
  const onDeleteBtn = () => {
    deletetodoItem(id)
  }
  return (
    <li className="list-item">
      <p className="item-para">{title}</p>
      <button type="button" className="btn" onClick={onDeleteBtn}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
