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
                this.curPlayer = this.players.reverse()[0];
                console.log(this.rowWinner())
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
            let counter = 1;
            for (let i = 0; i < this.field.length; i++) {
                for (let j = 0; j < this.field.length; j++) {
                    console.log(counter)
                    if (counter === this.size) {
                        return true
                    }
                    if ([j + 1] < this.field.length) {
                        if (this.field[i][j].symbol !== '' && this.field[i][j].symbol === this.field[i][j + 1].symbol) {
                            counter++;
                            continue;
                        }
                    }
                    counter = 1;
                }
            }
            return false;
        }
    },





})
