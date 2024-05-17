const { createApp } = Vue

createApp({
    data() {
        return {
           todos: [
            "Pippo",
            "Mauro",
            "Giovanni",
            "Sandro",
            "Anna",
            "Sara",
           ]
        }
    },
    methods: {

    },

    mounted() {
    },
}).mount(`#app`)