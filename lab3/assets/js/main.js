var app = new Vue({
    el: '#fishes',
    data: {
        username: '',
        inputName: '',
        game: false,
        time: 10,
        score: 0,
        fishLimit: 2,
        fishesTypes: ['clown', 'wtf1', 'wtf2'],
        fishes: [],
    },

    methods: {
        start: function () {
            this.setPlayer();
            this.game = true;
            this.timer();
        },


        setPlayer: function () {
            if (this.inputName !== '') {
                this.username = this.inputName
                this.inputName = '';
            }
        },

        timer: function () {
            let interval = setInterval(() => {
                this.time--;

                for (let i = 0; i < this.fishLimit; i++) {
                    this.spawnFish();
                }
                if (this.time <= 0) {
                    this.endGame(interval);
                }

            }, 1000)
        },

        endGame: function (interval) {
            this.game = false;
            this.time = 10;
            this.username = '';
            this.score = 0;
            this.fishes = [];
            clearInterval(interval)
        },

        takeFish: function(id){
            if(this.fishes[id].type==='clown'){
                this.score += 70;
            }
            else if(this.fishes[id].type==='wtf1'){
                this.score += 50;

            }
            else{
                this.score += 30;

            }
            this.fishCount++;
            this.fishes.splice(id, 1);
        },

        makeTurn: function(fish){
            setInterval(() => {
                if(fish.left == 0){
                    fish.turn = true;
                }
                else if(fish.left >= 1000 - fish.width){
                    fish.turn = false;
                }
                if(fish.turn){
                    fish.left++;
                }
                if(!fish.turn){
                    fish.left--;
                }
            }, 1)
        },

        spawnFish: function () {
            let fish = {
                type: this.fishesTypes[Math.floor(Math.random() * 3)],
                top: Math.floor(Math.random() * (640 - 150)),
                left: Math.floor(Math.random() * (1000 - 150)),
                turn: Math.floor(Math.random()),
            }
            if(fish.type == 'clown'){
                fish.img = 'assets/img/fish1.png';
                fish.class ='fish1';
                fish.width = 100;
                fish.height = 50;

            }
            else if(fish.type == 'wtf1'){
                fish.img = 'assets/img/fish2.png';
                fish.class ='fish2';
                fish.width = 120;
                fish.height = 60;

            }
            else{
                fish.img = 'assets/img/fish3.png';
                fish.class ='fish3';
                fish.width = 150;
                fish.height = 100;

            }
            this.fishes.push(fish);
            this.makeTurn(fish);
        },
    }


})
