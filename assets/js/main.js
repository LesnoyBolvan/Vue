// var app = new Vue({
//     el: '#app',
//     data: {
//         message:'Привет, лох!'
//     }
// })

// var app1 = new Vue({
//     el: '#app-1',
//     data: {
//         message:'Вы загрузили эту страницу: ' + new Date().toLocaleString()
//     }
// })

// var app2 = new Vue({
//     el: '#app-2',
//     data: {
//         seen: true
//     }
// })

// var app3 = new Vue({
//     el: '#app-3',
//     data:{
//         todos: [
//             {text: 'Изучить JavaScript'},
//             {text: 'Изучить Vue'},
//             {text: 'Создать что-нибудь классное'}
//         ]
//     }
// })


// var app4 = new Vue({
//     el:'#app-4',
//     data: {
//         message:'Привет, вуе'
//     },
//     methods: {
//         reverseMessage: function () {
//             this.message = this.message.split('').reverse().join('')
//         }
//     }
// })

// var app5 = new Vue({
//     el: '#app-5',
//     data: {
//         message: 'Привет, вуе'
//     }
// })

// Vue.component('todo-item', {
//     props:['todo'],
//     template:'<li>{{ todo.text }}</li>'
// })

// var app6 = new Vue({
//     el: '#app-6',
//     data: {
//         groceryList: [
//             {id:0, text:'Овощи'},
//             {id:1, text:'Сыр'},
//             {id:2, text: 'Что там ещё люди едят?'}
//         ]
//     }
// })


// var list = new Vue({
//     el:'#list',
//     data: {
//         text:'',
//         name:''
//     },
//     methods: {
//         getName: function () {
//             this.name = this.text
//         }
//     }
// })


Vue.component('todo-item', {
    props:['todo'],
    template:'<li>{{ todo.text }}</li>'
})

var app6 = new Vue({
    el: '#list',
    data: {
        groceryList: [
            {id:0, text:'Овощи'},
            {id:1, text:'Сыр'},
            {id:2, text: 'Что там ещё люди едят?'}
        ],
        text:'',
    },
    methods: {
        getName: function(){
            this.groceryList

        }
    }
})