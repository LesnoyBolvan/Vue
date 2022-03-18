var app = new Vue({
    el: '#ticTacToe',
    data: {
        username: '',
        inputName: '',
        field: [],
        size: '',
        inputSize: '',
        players: [],
        curPlayer: '',
        game: false,
        winner:''
    },

    computed: {
        playInfo: function (){
            if(this.game){
                return 'Ход ' + this.curPlayer.name
            }
            if(!this.game && !this.winner){
                return 'Ничья!'
            }
            if(this.winner){
                return 'Победил ' + this.winner
            }

        }
    },

    methods: {
        setField: function () {
            this.size = this.inputSize
            for (i = 0; i < this.size; i++) {
                this.field.push([]);
                for (j = 0; j < this.size; j++) {
                    this.field[i].push({id: j, symbol: ''})
                }
            }
        },

        selectCell: function (cell) {
            if (!cell.symbol) {
                cell.symbol = this.curPlayer.symbol
                this.winCheck();
                console.log(this.winner)
                this.curPlayer = this.players.reverse()[0];


            }

        },

        setPlayers: function () {

            if (this.inputName && this.players.length === 0) {
                this.players.push({name: this.inputName, symbol: 'O'})
                this.inputName = '';
            }

            if (this.inputName && this.players.length === 1) {
                this.players.push({name: this.inputName, symbol: 'X'})
                this.inputName = '';
            }

            if (this.players.length === 2) {
                this.curPlayer = this.players[0];
                this.game = true;

            }
        },

        rowWinner: function () {
            let count = 1;
            for (let i = 0; i < this.field.length; i++) {
                for (let j = 0; j < this.field.length; j++) {
                    if ([j + 1] < this.field.length) {
                        if (this.field[i][j].symbol !== '' && this.field[i][j].symbol === this.field[i][j + 1].symbol) {
                            count++;
                        }
                    }
                    if (count === Number(this.size)) {
                        return true
                    }
                }
                count = 1;
            }
            return false;
        },

        colWinner: function () {
            let count = 1;
            for (let i = 0; i < this.field.length; i++) {
                for (let j = 0; j < this.field.length; j++) {
                    if ([j + 1] < this.field.length) {
                        if (this.field[j][i].symbol !== '' && this.field[j][i].symbol === this.field[j + 1][i].symbol) {
                            count++;
                        }
                    }
                    if (count === Number(this.size)) {
                        return true
                    }
                }
                count = 1;

            }
            return false;
        },

        diagWinner:function () {
            if(this.field[0][0].symbol===this.curPlayer.symbol && this.field[1][1].symbol===this.curPlayer.symbol
                && this.field[2][2].symbol===this.curPlayer.symbol) {
                return true;
            }
            if(this.field[2][0].symbol===this.curPlayer.symbol && this.field[1][1].symbol===this.curPlayer.symbol
                && this.field[0][2].symbol===this.curPlayer.symbol) {
                return true;
            }
            return false;

        },

        winCheck: function (){
            if(this.rowWinner()){
                this.winner=this.curPlayer.name;
                this.game = false;
            }
            if(this.colWinner()){
                this.winner=this.curPlayer.name;
                this.game = false;
            }
            if(this.diagWinner()){
                this.winner=this.curPlayer.name;
                this.game = false;
            }

        }

        // leftDiagWinner: function () {
        //     let count = 1;
        //     for (let i = 0; i < this.field.length; i++) {
        //         console.log(count)
        //         if (this.field[i][i].symbol !== '' && this.field[i][i].symbol === this.field[i + 1][i + 1].symbol) {
        //             count++;
        //         }
        //         if (count === Number(this.size)) {
        //             return true
        //         }
        //     }
        //     return false;
        // },

        // rightDiagWinner: function () {
        //     let count = 1;
        //     for (let i = this.field.length - 1; i >= 0; i--) {
        //         for (let j = 0; j < this.field.length - 1; j++) {
        //             console.log(count)
        //             if ([j + 1] < this.field.length) {
        //                 if (this.field[i][j].symbol !== '' && this.field[i][j].symbol === this.field[i - 1][j + 1].symbol) {
        //                     count++;
        //                 }
        //             }
        //
        //             if (count === Number(this.size)) {
        //                 return true
        //             }
        //         }
        //         count = 1;
        //
        //     }
        //     return false;
        // },
    },


})
