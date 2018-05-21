// install - import - use
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const getVisibileExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(getVisibileExpenses);
})

store.dispatch(addExpense({description: 'Water Bill', amount: 30}))
store.dispatch(addExpense({description: 'Gas Bill', amount: 50}))
store.dispatch(setTextFilter('water'))

ReactDOM.render(<AppRouter />, document.getElementById('app'));

