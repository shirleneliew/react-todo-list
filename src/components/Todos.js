import React from "react";

//create a react component called "App"
export class Todos extends React.Component {
    state = {
        todos: [
            {
                description: "buy apples",
                isDone: false,
            },
            {
                description: "learn react",
                isDone: true,
            }

        ],
        newTodoDescription: "",
    };

    handleToDoClick = (currentToDo) => {
        currentToDo.isDone = !currentToDo.isDone
        //alert("you clicked a todo!");
        
        //let React know it has to refresh
        const updatedState = {
            todos:this.state.todos
        }

        this.setState(updatedState)


    };

    handleAddTodo = () => {
        var newTodoDescription = this.state.newTodoDescription
        var newTodo = {
            description: newTodoDescription,
            isDone: false,
        }
        //this.state.todos.push(newTodo)
        // ^ don't do this, it mutates the original object state w/o calling this.setState

        var newTodos = [ 
            ...this.state.todos, //the ... is called spreading (for arrays)
            newTodo,
        ]

        const updatedState = {
            todos:newTodos,
            newTodoDescription: "",
        }

        this.setState(updatedState)

    };

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value})
        //the above line is the better than " this.setState({newTodoDescription: event.target.value}) "
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleAddTodo();
        }
    }

    //render acts like a js function, and is whatever should be displayed on the page
    render() {
        return <div>
            <h1>hi there</h1>
            <label htmlFor="newTodoDescription">Add Todo </label>
            <input 
                type="text" 
                name="newTodoDescription" 
                id="newTodoDescription" 
                placeholder="Add todo"
                value={this.state.newTodoDescription} 
                onChange={this.handleOnChange.bind(this)}
                onKeyPress={this.handleKeyPress}
            />
            <button
                onClick={() => this.handleAddTodo()}>
                +</button>
            
            <ul>
                {this.state.todos.map(todo => {
                    let completeClass = "";

                    if (todo.isDone) {
                        completeClass = "complete";
                    }
                    return (
                        <li 
                            className={completeClass} 
                            onClick={() => this.handleToDoClick(todo)}
                        >
                            {todo.description}
                        </li>
                    )

                })}
            </ul>

        </div >
    }

}