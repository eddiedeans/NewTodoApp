var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('There are no todos')
        } else {
            for (var i = 0; i < this.todos.length; i++) {
                console.log('My todos:');
                

                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText)
                } else {
                    console.log('( )', this.todos[i].todoText)
                }
            }
        }
    },
    addTodos: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        }),
        this.displayTodos();
    },
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodos: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
}

