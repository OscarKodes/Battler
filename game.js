
// SET VARIABLES ---------------

let playerCurrentHP = 100;
let oppoCurrentHP = 100;
let playerDisplayHP = $(".playerDisplayHP");
let oppoDisplayHP = $(".oppoDisplayHP");
let playerH1 = $(".player-container h1");
let oppoH1 = $(".oppo-container h1");
let playerContainer = $(".player-container");
let oppoContainer = $(".oppo-container");
let atkBtn = $(".atkBtn");


// FUNCTIONS ---------------------

function updateDisplayHP() {
    playerDisplayHP.text(playerCurrentHP);
    oppoDisplayHP.text(oppoCurrentHP);
};

function dealDamage(target, dmg) {

    if (target === "oppo") {
        oppoCurrentHP -= dmg;
    }

    else {
        playerCurrentHP -= dmg;
    }

    checkAlive();
}

function checkAlive() {

    if (oppoCurrentHP <= 0) {
        // turn off atkbtn
        atkBtn.hide();
        // change text displays to knocked out.
        oppoH1.text("Opponent has been knocked out.");
    }

    if (playerCurrentHP <= 0) {
        // turn off atkbtn
        atkBtn.hide();
        // change text displays to knocked out.
        playerH1.text("Player has been knocked out.");
    }
}


// LISTENERS ---------------------

atkBtn.on("click", function() {

    dealDamage("oppo", 10);
    updateDisplayHP();
});


// CALLING FUNCTIONS -------------

updateHP();