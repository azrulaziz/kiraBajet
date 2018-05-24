import React from 'react';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = () => (
    <div>
        add expense component
        <ExpenseForm onSubmit={(expense) => {
            console.log(expense);
        }}/>
    </div>
);

export default AddExpensePage;