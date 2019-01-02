var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('There are no todos')
        } else {
            console.log('My todos:');
            for (var i = 0; i < this.todos.length; i++) {
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
    },
    toggleAll: function() {
        // get todos total todos
        var totalTodos = this.todos.length;
        // get total of todos
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos){
            for (var i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
}

var handlers = {
    displayTodos: function() {
        todoList.displayTodos()
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput")
        todoList.addTodos(addTodoTextInput.value);
        addTodoTextInput.value = "";
    },
    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoInputText = document.getElementById("changeTodoInputText");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoInputText.value)
        changeTodoPositionInput = '';
        changeTodoInputText = '';
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodos(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
    },
    toggleCompleted: function() {
        var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = '';
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
}

var view = {
    displayTodos: function() {
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            todoLi.textContent = todoList.todos[i].todoText;
            todoUl.appendChild(todoLi);
        }
    }
}