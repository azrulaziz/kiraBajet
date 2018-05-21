import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount}</p>
            <p>{createdAt}</p>
            <button onClick={() => {
                dispatch(removeExpense(id));
            }}>
                Remove
            </button>
        </div>
    )
}
// connect the component to enable the dispatch function, without retrieving any state from store.
export default connect()(ExpenseListItem);