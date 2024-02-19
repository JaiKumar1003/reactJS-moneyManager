import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: 'Income',
    moneyUpdate: {
      balance: 0,
      income: 0,
      expenses: 0,
    },
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newAmount = parseInt(amount)
    const newItem = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if (type === 'Income') {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newItem],
        title: '',
        amount: '',
        moneyUpdate: {
          ...prevState.moneyUpdate,
          balance: prevState.moneyUpdate.balance + newAmount,
          income: prevState.moneyUpdate.income + newAmount,
        },
      }))
    } else {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newItem],
        title: '',
        amount: '',
        moneyUpdate: {
          ...prevState.moneyUpdate,
          balance: prevState.moneyUpdate.balance - newAmount,
          income: prevState.moneyUpdate.income - newAmount,
          expenses: prevState.moneyUpdate.expenses + newAmount,
        },
      }))
    }
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    const newType = transactionTypeOptions.find(
      eachObject => eachObject.optionId === event.target.value,
    )
    this.setState({type: newType.displayText})
  }

  onClickHistory = transId => {
    const {transactionList} = this.state
    const findTransaction = transactionList.find(
      eachItem => eachItem.id === transId,
    )
    const {type, amount} = findTransaction
    const newAmount = parseInt(amount)
    const removedTransactionList = transactionList.filter(
      eachObject => eachObject.id !== transId,
    )

    if (type === 'Income') {
      this.setState(prevState => ({
        transactionList: removedTransactionList,
        moneyUpdate: {
          ...prevState.moneyUpdate,
          balance: prevState.moneyUpdate.balance - newAmount,
          income: prevState.moneyUpdate.income - newAmount,
        },
      }))
    } else {
      this.setState(prevState => ({
        transactionList: removedTransactionList,
        moneyUpdate: {
          ...prevState.moneyUpdate,
          balance: prevState.moneyUpdate.balance + newAmount,
          income: prevState.moneyUpdate.income + newAmount,
          expenses: prevState.moneyUpdate.expenses - newAmount,
        },
      }))
    }
  }

  render() {
    const {transactionList, title, amount, moneyUpdate} = this.state
    return (
      <div className="app-container">
        <div className="money-manager-section">
          <div className="money-top-section">
            <h1 className="main-heading">Hi, Richard</h1>
            <p>
              Welcome back to your{' '}
              <span className="span-el">Money Manager</span>
            </p>
          </div>
          <MoneyDetails updatedMoney={moneyUpdate} />
          <div className="form-transaction-card">
            <form onSubmit={this.onSubmitForm} className="form">
              <h1 className="form-heading">Add Transaction</h1>
              <label htmlFor="title" className="form-label">
                TITLE
              </label>
              <input
                onChange={this.onChangeTitle}
                value={title}
                placeholder="TITLE"
                id="title"
                type="text"
                className="form-input"
              />
              <label htmlFor="amount" className="form-label">
                AMOUNT
              </label>
              <input
                onChange={this.onChangeAmount}
                value={amount}
                placeholder="AMOUNT"
                id="amount"
                type="text"
                className="form-input"
              />
              <label htmlFor="type" className="form-label">
                TYPE
              </label>
              <select
                onChange={this.onChangeType}
                id="type"
                className="form-input"
              >
                <option value="INCOME" selected>
                  Income
                </option>
                <option value="EXPENSES">Expenses</option>
              </select>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
            <div className="history-list-card">
              <h1 className="history-heading">History</h1>
              <div className="history-list-item">
                <p className="history-content">Title</p>
                <p className="history-content">Amount</p>
                <p className="history-content">Type</p>
              </div>
              {transactionList.length > 0 && (
                <ul className="history-list">
                  {transactionList.map(eachItem => (
                    <TransactionItem
                      key={eachItem.id}
                      transItem={eachItem}
                      deleteHistory={this.onClickHistory}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
