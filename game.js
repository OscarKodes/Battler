
// SET VARIABLES ---------------

let playerCurrentHP = 100;
let oppoCurrentHP = 100;
let playerDisplayHP = $(".playerDisplayHP");
let oppoDisplayHP = $(".oppoDisplayHP");
let atkBtn = $(".atkBtn");


function updateHP() {
    playerDisplayHP.text(playerCurrentHP);
    oppoDisplayHP.text(oppoCurrentHP);
};

updateHP();

atkBtn.on("click", function() {

    oppoCurrentHP -= 10;
    updateHP();
});