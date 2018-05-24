import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = ({dispatch, history}) => (
    <div>
        add expense component
        <ExpenseForm onSubmit={(expense) => {
            dispatch(addExpense(expense));
            history.push('/');
        }}/>
    </div>
);

export default connect()(AddExpensePage);