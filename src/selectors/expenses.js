// get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        // if startdate is undefined return true, means all expense should be returned
        // if startdate is a number, it returns false for the first and evaluate the second option
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // this will only return the expense that are true for all three evaluations
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        } 
    })
}