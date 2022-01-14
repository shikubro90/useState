import react from "react";
import { useState } from "react";

function TodoFunction(){

    const [todo,changeTodo] = useState('');
    const [warning,changeWarning] = useState('');

    const onChangeAddTodo = (e) =>{
        
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'You need to learn well js' : null;

        changeTodo(inputValue);
        changeWarning(warning);
    }
    
    return(
        <div>
            <h1>{todo}</h1>
            <input type='text' onChange={onChangeAddTodo} />
            <hr></hr>
            {warning || 'Good Check'}
        </div>
    )
}
export default TodoFunction