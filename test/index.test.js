const {Dice, Turn} = require("../src/");

// beforeEach (() => {

// })

test('instantiating a new dice returns a number', () => {
    let dice = new Dice();
    let value = dice.roll();
    expect(typeof value).toBe("number");
});

test('it should return a number between 1 - 6', () =>{
    let dice = new Dice();
    let value = dice.roll();

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThan(7);
});

test('rolling 1 dice multiple times returns multiple random numbers', () => {
    let dice = new Dice();
    let diceRolls = new Set();

    for (let i = 1; i <= 25; i++) {
        diceRolls.add(dice.roll());
    };

    expect(diceRolls.size).toBeGreaterThan(1);
})

test('rolling 5 dice returns 5 values', () => {
    let diceRolls = []

    for (let i = 1; i <=5; i++) {
        let dice = new Dice();
        diceRolls.push(dice.roll());
    }

    expect(diceRolls.length).toBe(5)
})

test('rolling 5 dice on a new turn will return 5 values', () => {
    let turn = new Turn()
    expect(turn.diceRolls.length).toBe(5)
})

test('rolls left should start at 2', () =>{
    let turn = new Turn();
    expect(turn.rollsLeft).toBe(2);
});

test('decrement rollsLeft on reroll', () => {
    let turn = new Turn();
    let index = 0; //reroll first die
    turn.reroll([index]);
    expect(turn.rollsLeft).toBe(1);
})

test('Check if there are no turns left', () => {
    let turn = new Turn();
    let index = 0; //reroll first die
    turn.reroll([index]);
    turn.reroll([index]);
    expect(turn.reroll([index])).toBe("HEY YOUR TURN DONE!!!!!!!");
})

test('Reroll multiple dice', () => {
    let turn = new Turn();
    let oldDice = turn.getDiceRolls()
    let index = [ 0, 1, 2, 5, 4 ]; //reroll first die
    turn.reroll(index)
    let newDice = turn.getDiceRolls()
    let equality = true
    for (let i = 0; i <= 5; i++){
        if(oldDice[i] !== )
    }
    expect().toBe();
})


