class Dice{
    constructor(){
        this.value = Math.floor(Math.random() * 6) +1;
    }


   roll(){
       this.value = Math.floor(Math.random() * 6) + 1;
       return this.value;
   }
}

class Turn{
    constructor(){
        this.rollsLeft = 2;
        this.diceRolls = []
        for (let i = 1; i <=5; i++) {
            let dice = new Dice();
            this.diceRolls.push(dice.roll());
        }
    }

    reroll(listOfDiceIndex){
        if(this.rollsLeft > 0){
            for (let item of listOfDiceIndex){
                let dice = new Dice();
                this.diceRolls[item] = dice.value;
            }
            this.rollsLeft--;

        } else {
            return "HEY YOUR TURN DONE!!!!!!!"
        }
    }

    getDiceRolls(){
        return this.diceRolls
    }
}

class Scorecard {
     /*
    scorecard should calculate the score for each player's turn

    count total value on selected dice

    player should be able to select category for scoring

    */
    constructor(){
        this.points = {
            aces: null,
            twos: null,
            threes: null,
            fours: null,
            fives: null,
            sixes: null,
            threeOfAKind: null,
            fourOfAKind: null,
            fullHouse: null,
            smallStraight: null,
            largeStraight: null,
            yahtzee: null,
            chance: null
        }

    }

   scoreTurn(turnArray, category){
      this.points[category] = scoremethod(turnArray)

   }
}

module.exports = {Dice, Turn, Scorecard}