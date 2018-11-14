var obi = {
    name: "Obi-wan Kenobi",
    health: 120,
    attack: 8,
    counter: 20
}

var luke = {
    name: "Luke Skywalker",
    health: 100,
    attack: 8,
    counter: 5
}

var sidious = {
    name: "Darth Sidious",
    health: 150,
    attack: 8,
    counter: 20
}

var maul = {
    name: "Darth Maul",
    health: 180,
    attack: 8,
    counter: 25
}

var characterChoice = "test";
var characterHealth;
var characterAttack;

$(".character").on("click", function () {
    chooseCharacter(this.name);
})

function chooseCharacter(name) {
    characterChoice = name;
    console.log(characterChoice);
}