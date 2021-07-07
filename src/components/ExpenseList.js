import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
  const { expenses } = useContext(AppContext)
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || [])

  useEffect(() => {
    setFilteredExpenses(expenses)
  }, [expenses])

  const handleChange = (e) => {
    const seachResult = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(e.target.value)
    )

    setFilteredExpenses(seachResult)
  }

  return (
    <>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Type to search...'
        onChange={handleChange}
      />
      <ul className='list-group mt-3 mb-3'>
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
      </ul>
    </>
  )
}

export default ExpenseList
