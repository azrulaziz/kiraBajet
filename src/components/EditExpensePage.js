import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            edit expense component with the id of: 
            {props.match.params.id}
        </div>
    );
}

export default EditExpensePage;