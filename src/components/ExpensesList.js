import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpensesList = (props) => {
    return (
        <div>
            <h1>Expenses List</h1>
            {props.expenses.map(expense => {
                return <ExpensesListItem {...expense} key={expense.id}/>
            })}
            
        </div>
    )}


// setup a function that retrieves data from the store
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

// using the connect function, pass the first argument a function on what to get from the store, 
// second arg, pass the component that will consume the data from the store as its props
export default connect(mapStateToProps)(ExpensesList);