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

        }
    },

    mounted() {
    },
}).mount(`#app`)