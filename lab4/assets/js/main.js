Vue.component('todo-list', {
    props: ['list', 'list_index'],
    data: function () {
        return {
            newTask: '',
        }
    },
    methods: {

        addTask() {
            if (this.newTask !== '') {
                app.records.find(value => value.id === this.list_index).task.push({
                    title: this.newTask,
                    done: 'none',
                });
                app.saveItems();
                this.newTask = '';
            }
        },
        deleteRecord() {
            app.records.splice(app.records.findIndex(value => value.id === this.list_index), 1);
            app.saveItems();
        }

    },
    template: `

    <div class="bg-white border mt-4 rounded">
        <header class="border-bottom">
            <div class="d-flex px-4 py-3 justify-content-between">
                <h2>{{list.title}}</h2>
                <div class="col- d-flex justify-content-between">
                    <div @click="deleteRecord" style="font-size: 35px; cursor: pointer">X</div>
                </div>
            </div>
        </header>
        
        <div>
            <todo-item v-for="(item, index) in list.task" :index="index" :item="item" :list_index="list_index" :key="item"></todo-item>
        </div>
        
        <div class=" border-bottom p-3">
            <div class="input-group">
                <input type="text" class="form-control border-0 fs-5 shadow-none" placeholder="Add new" v-model.lazy="newTask">
                <button class="btn btn-outline-primary bt-md" @click="addTask">Сохранить</button>
            </div>
        </div>
    </div>
`
});

Vue.component('todo-item', {
    props: ['item', 'index', 'list_index'],
    methods: {
        deleteTask() {
            app.records.find(value => value.id === this.list_index).task.splice(this.index, 1);
            app.saveItems();
        },
        setDone() {
            this.item.done = (this.item.done === 'none') ? 'line-through' : 'none'
            app.saveItems();
        },
    },
    template: `
    <div class="py-3 px-2 pe-4 border-bottom d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
            <h5 @click="setDone" :style="{textDecoration:item.done,cursor: 'pointer'}">{{item.title}}</h5>
        </div>
        <div @click="deleteTask" style="font-size: 20px;cursor: pointer">X</div>
    </div>
    `
});

const app = new Vue({
    el: '#app',
    data: {
        id: 0,
        records: [],
        title: '',
        taskName: '',

    },

    created() {
        this.id = Number(JSON.parse(localStorage.getItem("id")));
        this.records = JSON.parse(localStorage.getItem("records") || '[]');
    },

    methods: {
        saveItems() {
            const parsed = JSON.stringify(this.records);
            localStorage.setItem('records', parsed);
            localStorage.setItem('id', this.id);
        },
        addRecord() {
            if (this.title === '') {
                return false;
            }
            this.records.push({
                id: this.id,
                title: this.title,
                task: []
            });
            this.saveItems();
            this.title = '';
            this.id++;
            return true;

        },

    }
});
