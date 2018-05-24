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
        const regex = /^\d*(\.\d{0,2})?$/;

        if (amount.match(regex)) {
            this.setState({amount})
        }
    }

    handleDateChange = (createdAt) => {
       this.setState({createdAt});
    }

    handleFocusChange = ({focused}) => {
        this.setState({focused});
    }

    render() {
        return (
            <div>
                <form>
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