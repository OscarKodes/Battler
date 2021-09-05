
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

function oppoTurn() {
    dealDamage("player", 8);
    updateDisplayHP();

    setTimeout(() => atkBtn.show(), 1000);
};


// LISTENERS ---------------------

atkBtn.on("click", function() {

    dealDamage("oppo", 10);
    atkBtn.hide();
    updateDisplayHP();

    setTimeout(oppoTurn, 1000);
});


// CALLING FUNCTIONS -------------

updateDisplayHP();



// Game start
// Choose your character (multiple?)
//// Allow random button
// Choose your opponent (multiple?)
//// Allow random button

// Copy and paste character into player objects array
// Copy and paste opponents into opponent objects array

// Roll for initiatives
// Character with highest initiatives go first
// Characters take turns

//// Typical Turn------

// Action menu pops up
// Choose action
// Action menu goes away
// Player - action done
// Update HP
// Check for knock out
// Check for battle victory

// Opponent next on initiative list goes - Random Action
// Update HP
// Check for knock out
// Check for gameover (playe party ko'd)
// Next initiative goes


//----------------------
// Will need
//
// Constructor Functions for all characters
// Name
// Type
// Skills
// HP
// MP
// Attack
// Defense
// Speed
// Magic
// Magic Def
// Elements
// Items
// State: (Sleep, KO'd, )


// Basic attack damage formula 
// (Atk DMG = random(Actor.atk - 15% to Actor.atk + 15%) - random(target.def - 15% to target.def + 15%))

// Skills damage formula 
// (Fireball DMG = (random 1-6) + random(magic range) - randomg(target.magic def range))

// Defend ---> add state defending to player object
// Item (potions)


// 

