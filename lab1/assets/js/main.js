var list = new Vue({
    el:'#app-6',
    data: {
        hide:false,
        text:'',
        name:''
    },
    methods: {
        getName: function () {
            this.name = this.text;
            this.text='';
            this.hide='true';
        }
    }
})

Vue.component('todo-item', {
    props:['todo'],
    data: function() {
        return {
            line: false;
        }
    },
    template:`<li v-bind:class="{ lt: line, pointer: true }" @click="line=true">{{ todo.text }}<button @click="$emit('remove')">X</button></li>`
})

var app6 = new Vue({
    el: '#list',
    data: {
        food:'',
        id:0,
        groceryList: [],
    },
    methods: {
        getName: function(){
            this.groceryList.push({id:this.id++, text:this.food});
            this.food='';
        },
    }
})
