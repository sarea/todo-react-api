import React from 'react';
import TodoService from '../services/todoService';

class TodoForm extends React.Component {
    state = {
        description: '',
        status: 'done'
    }
    onDescriptionChange = (e) => {
        this.setState({description: e.target.value})
    }

    onTodoSubmitted = (e) => {
        this.setState({status: 'loading'})
        TodoService.creatTodo({
            "description": this.state.description,
            "deadline": Date(),
            "done": true
        }).then(todo => {
            this.setState({status: 'done', description: ''})
            this.props.onTodoSubmitted(todo)
        }).catch(error => {
            this.setState({status: 'error'})
        })
        e.preventDefault()
    }

    render () {
        return (
            <div>
                {this.state.status === 'error' && <h6>Something went wrong</h6>}
                <form onSubmit={this.onTodoSubmitted}>
                    <input type="text" value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type="submit" value="Add Todo" />
                </form>
            </div>
        )
        
    }
}

export default TodoForm;