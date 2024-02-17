// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transItem, deleteHistory} = props
  const {id, title, amount, type} = transItem
  const onClickDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="trans-list-item">
      <p className="item-content">{title}</p>
      <p className="item-content">Rs {amount}</p>
      <p className="item-content">{type}</p>
      <button
        type="button"
        data-testid="delete"
        onClick={onClickDelete}
        className="history-delete-btn"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
