// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {updatedMoney} = props
  const {balance, income, expenses} = updatedMoney
  return (
    <div className="money-details-list">
      <div className="money-details-item balance-item">
        <img
          className="money-details-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="money-details-content">
          <p className="money-details-heading">Your Balance</p>
          <p data-testid="balanceAmount" className="money-details-rupees">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="money-details-item income-item">
        <img
          className="money-details-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="money-details-content">
          <p className="money-details-heading">Your Income</p>
          <p data-testid="incomeAmount" className="money-details-rupees">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="money-details-item expenses-item">
        <img
          className="money-details-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="money-details-content">
          <p className="money-details-heading">Your Expenses</p>
          <p data-testid="expensesAmount" className="money-details-rupees">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
