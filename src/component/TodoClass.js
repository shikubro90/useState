import React from "react";


export default class TodoClass extends React.Component{

    state = {
        todo : '',
        warning : ''
    }

    onChangeAddTodo = (e)=>{

        const inputValue = e.target.value;

        const warning = inputValue.includes('.js') ? 'You need to lear well js' : null
    
        this.setState({
            todo : inputValue,
            warning : warning
        })
    }

    render(){
        const {todo,warning} = this.state
        return(
            <div>
                <h1>{todo}</h1>
                <input type='text' value={todo} onChange={this.onChangeAddTodo} />
                <hr></hr>
                {warning || 'Good Check'}
            </div>
        )
    }


}