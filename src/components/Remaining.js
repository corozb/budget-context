import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const RemainingBudget = () => {
  const { budget, expenses } = useContext(AppContext)

  const totalExpenses = expenses.reduce((acc, curr) => (acc += curr.cost), 0)

  const alertType = budget > totalExpenses ? 'alert-success' : 'alert-danger'

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  )
}

export default RemainingBudget
