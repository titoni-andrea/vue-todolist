const { createApp } = Vue

createApp({
    data() {
        return {
           todos: [
           ],
           newItem: ""
        }
    },
    methods: {
        insertTodo() {
            this.todos.push(this.newItem)
            console.log(this.todos)
            this.newItem = ""

        },

        removeTodo(i) {
            this.todos.splice(i, 1)
            console.log(this.todos)
        },
    },

    mounted() {
    },
}).mount(`#app`)