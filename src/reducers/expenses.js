//*******//
// setup expenses reducer
//*******//

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        
        case 'ADD_EXPENSE':
        // use array destructuring
            return  [...state, action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter(exp => exp.id !== action.id)

        case 'EDIT_EXPENSE':
            return state.map(exp => {
                if (exp.id === action.id) {
                    return {
                        ...exp,
                        ...action.amount
                    }
                } else {
                    return exp
                }
            })

        default: 
            return state;
    }
}