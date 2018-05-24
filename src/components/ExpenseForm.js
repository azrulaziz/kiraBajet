import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        notes: ''
    }

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({description});
    }

    handleNotesChange = (e) => {
        const notes = e.target.value;
        this.setState({notes})
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
                    <input type="number" placeholder="Amount" />
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