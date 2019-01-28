export default class TodoService {

    static getTodoList () {
        return fetch('https://hyf-react-api.herokuapp.com/todos/')
        .then(response => this.checkStatusCode(response))
    }

    static creatTodo (data) {
        return fetch('https://hyf-react-api.herokuapp.com/todos/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => this.checkStatusCode(response))
    }

    static deleteTodo (id) {
        return fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
            method: "DELETE"
        })        
        .then(response => this.checkStatusCode(response))
    }

    static checkStatusCode (response) {
        if (response.status === 200) {
            return response.json();
        } else {
            throw response.json();
        }
    }
}