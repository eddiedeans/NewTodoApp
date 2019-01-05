var todoList = {
    todos: [],

    addTodos: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        })
    },
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
    },
    deleteTodos: function(position){
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        // get todos total todos
        var totalTodos = this.todos.length;
        // get total of todos
        var completedTodos = 0;

        // loop over todos and find comoleted then add to completed todos
        this.todos.forEach(function(todo) {
            if (todo.completed === true){
                completedTodos++;
            }
        });

        this.todos.forEach(function(todo) {
            // Case 1 if all are true then set everything to false
            if (completedTodos === totalTodos) {
                todo.completed = false;
            // Case 2 everything thise else set everything to true
            } else {
                todo.completed = true;
            }
        });    
    } 
}

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput")
        todoList.addTodos(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoInputText = document.getElementById("changeTodoInputText");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoInputText.value)
        changeTodoPositionInput.value = '';
        changeTodoInputText.value = '';
        view.displayTodos();
    },
    deleteTodo: function() {
        todoList.deleteTodos();
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    },
}

var view = {
    displayTodos: function() {
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = '';

        todoList.todos.forEach(function(todo, position) {
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = ("(x) ") + todo.todoText
            } else {
                todoTextWithCompletion = ('( ) ') + todo.todoText;
            }
            
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion; 
            todoLi.appendChild(this.createDeleteButton())
            todoUl.appendChild(todoLi);
        }, this);

    },
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.className = 'deleteButton';

        return deleteButton;
    },
    setupEventListener: function() {
        var todoUl = document.querySelector('ul')

        todoUl.addEventListener('click', function (event) {
            var deleteCLicked = event.target;

            if (deleteCLicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(event.target.parentNode.id));
            }
        });
    }
};

view.setupEventListener();

