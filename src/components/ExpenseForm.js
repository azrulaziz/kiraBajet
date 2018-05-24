import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        notes: '',
        amount: '',
        createdAt: moment(),
        focused: false,
        error: ''
    }

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({description});
    }

    handleNotesChange = (e) => {
        const notes = e.target.value;
        this.setState({notes})
    }

    handleAmountChange = (e) => {
        const amount = e.target.value;
        const regex = /^\d{1,}(\.\d{0,2})?$/;

        // if no amount is entered set the state to nothing
        if (!amount || amount.match(regex)) {
            this.setState({amount})
        }
    }

    handleDateChange = (createdAt) => {
        if (createdAt) {
            this.setState({createdAt});
        }
    }

    handleFocusChange = ({focused}) => {
        this.setState({focused});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState({error: 'Please provide Description & Amount'})
        } else {
            this.setState({error: ''})
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                notes: this.state.notes
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Amount" 
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.handleDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.handleFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add Notes"
                        value={this.state.notes}
                        onChange={this.handleNotesChange}
                    >
                    </textarea>
                    <button>Add Expenses</button>
                </form>
            </div>
        )
    }
}