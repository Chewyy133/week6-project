<<<<<<< HEAD

export default class Card {
    constructor(suit, rank) {
        this.suit = suit
        this.rank = rank
    }

    getValue() {
        switch (this.rank.toLowerCase()) {
            case 'a': 
                return 14
            case 'k':
                return 13
            case 'q':
                return 12
            case 'j':
                return 11
            default:
                return Number(this.rank)
        }
    }
    getCard() {
        return `${this.rank} of ${this.suit}`
    }
} 
vnkndnvandv




=======

export default class Card {
    constructor(suit, rank) {
        this.suit = suit
        this.rank = rank
    }

    getValue() {
        switch (this.rank.toLowerCase()) {
            case 'a': 
                return 14
            case 'k':
                return 13
            case 'q':
                return 12
            case 'j':
                return 11
            default:
                return Number(this.rank)
        }
    }
    getCard() {
        return `${this.rank} of ${this.suit}`
    }
} 




>>>>>>> 9de27315883df098921c2717d96366a075c7e45f
