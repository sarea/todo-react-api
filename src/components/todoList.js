import React from 'react';
import TodoService from '../services/todoService'

class TodoList extends React.Component {
    onDeleteTodo = (id) => {
        TodoService.deleteTodo(id)
        .then(data => {
            this.props.onTodoRemoved(id)
        })
    }
    render () {
        return ((this.props.todoList.length > 0) && this.props.todoList.map(todo => {
            return (
                <div key={todo._id}>
                    <br /><br /><br />
                    <input type="button" value="Delete" onClick={() => this.onDeleteTodo(todo._id)} />
                    {todo.description} 
                </div>
            )
        }))
    }
}

export default TodoList;