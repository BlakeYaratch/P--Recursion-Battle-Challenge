//#region Global Var's
var myHealth = 100;
var strength;
var dodge;
var block;
var name;
var enemyHealth;
var enemyDodge = 1;
var enemyBlock = 1;
var enemyStrength;
var enemyName;
var trueStrength;
var trueEnemyStrength;
var outcome;
//#endregion

//#region Arrays
var enemies = [
  {
    name: "Steveen",
    enemyType: "Sharp",
    specialAbility: "Hard Hitter",
    hitPoints: 100.0,
    power: 13.0,
    dodge: 1.0,
    block: 1.0,
  },
  {
    name: "Bob",
    enemyType: "Sharp",
    specialAbility: "Invisibility",
    hitPoints: 150.0,
    power: 11.0,
    dodge: 1.0,
    block: 1.0,
  },
  {
    name: "Guy",
    enemyType: "Sharp",
    specialAbility: "Hard Hitter",
    hitPoints: 200.0,
    power: 9.0,
    dodge: 1.0,
    block: 1.0,
  },
  {
    name: "Dave",
    enemyType: "Sharp",
    specialAbility: "Hard Hitter",
    hitPoints: 250.0,
    power: 5.0,
    dodge: 1.0,
    block: 1.0,
  },
  {
    name: "Joe",
    enemyType: "Smol Boi",
    specialAbility: "Soft Hitter",
    hitPoints: 50.0,
    power: 1.5,
    dodge: 7.0,
    block: 0.0,
  },
];

var heros = [
  {
    name: "Stan",
    enemyType: "",
    experience: "",
    hitPoints: 10,
    power: 4,
    dodge: 6,
    block: 3,
  },
  {
    name: "Bill",
    enemyType: "Science",
    experience: "",
    hitPoints: 10,
    power: 5,
    dodge: 1,
    block: 6,
  },
];
var heroMultiplier = 0;
function heroRoll() {
  heroMultiplier = Math.floor(Math.random() * 10) + 1;
  console.log("Hero Roll " + heroMultiplier);
  return heroMultiplier;
}

var enemyMultiplier = 0;
function enemyRoll() {
  enemyMultiplier = Math.floor(Math.random() * 10) + 1;
  console.log("Enemy Roll " + enemyMultiplier);
  return enemyMultiplier;
}
//#endregion
//#region Funtions
let index2;
function enemygetter() {
  index2 = Math.floor(Math.random() * enemies.length);
}
var myHero;
function heroGetter() {
  myHero = Math.floor(Math.random() * heros.length);
}
//#endregion

//#region Start Game
function startGame() {
  //Next code is to reset all info

  myHealth = 100;
  updateHealth();
  console.log(
    "=====================================================New Game====================================================="
  );

  heroRoll();
  enemyRoll();
  enemygetter();
  heroGetter();
  gameRun();
  hideBtns();
  console.log(`Your true strength: ${trueStrength}`);
  console.log(`${enemyName}'s true strength: ${trueEnemyStrength}`);
}
//#endregion

//#region Game

function gameRun() {
  if (myHero == 0) {
    strength = 4;
    dodge = 6;
    block = 3;
    name = "Stan";
  } else if (myHero == 1) {
    strength = 5;
    dodge = 1;
    block = 6;
    name = "Bill";
  } else {
    console.log("Idk how this happened but it broke....");
  }
  trueStrength = strength * heroMultiplier;
  if (index2 == 0) {
    enemyHealth = 100;
    enemyName = "Steveen";
    enemyStrength = 13;
  } else if (index2 == 1) {
    enemyHealth = 150;
    enemyName = "Bob";
    enemyStrength = 11;
  } else if (index2 == 2) {
    enemyHealth = 200;
    enemyName = "Guy";
    enemyStrength = 9;
  } else if (index2 == 3) {
    enemyHealth = 250;
    enemyName = "Dave";
    enemyStrength = 5;
  } else if (index2 == 4) {
    enemyHealth = 50;
    enemyName = "Joe";
    enemyStrength = 1.5;
  }
  trueEnemyStrength = enemyStrength * enemyMultiplier;
  document.getElementById(
    "text"
  ).innerHTML = `You run into an enemy as ${name}. The enemy is ${enemyName}, let the fight begin. (Open the console for more info)`;
  document.getElementById("myHearts").innerHTML = "My Health: " + myHealth;
  document.getElementById("enemyHearts").innerHTML =
    "Enemy Health: " + enemyHealth;
}
function attack() {
  enemyHealth -= trueStrength;
  myHealth -= trueEnemyStrength;
  updateHealth();
  healthCheck();
}

function dip() {
  dodgeChance = Math.floor(Math.random() * 10) + 1;
  dodged = dodgeChance += dodge;
  if (dodged >= 9) {
    console.log(`You successfully dodged ${enemyName} and hit him!`);
    enemyHealth -= trueStrength;
    updateHealth();
    healthCheck();
  } else {
    myHealth -= trueEnemyStrength;
    console.log(`You did not successfully dodge ${enemyName}`);
    updateHealth();
    healthCheck();
  }
}
function blocky() {
  blockChance = Math.floor(Math.random() * 10) + 1;
  blocked = blockChance += block;
  if (blocked >= 10) {
    console.log(`You successfully blocked ${enemyName} and hit him!`);
    enemyHealth -= trueStrength;
    updateHealth();
    healthCheck();
  } else {
    console.log(`You did not successfully blocked ${enemyName} and got hit!`);
    myHealth -= trueEnemyStrength;
    updateHealth();
    healthCheck();
  }
}
//#region pog
function healthCheck() {
  if (myHealth <= 0) {
    outcome = "lose. :( ";
    gameOver();
  }
  if (enemyHealth <= 0) {
    outcome = "win!";
    gameOver();
  }
}
function gameOver() {
  alert(`The game is over! You ${outcome}`);
  //These 3 lines are to help reset the game
  document.getElementById("text").innerHTML = "";
  document.getElementById("myHearts").innerHTML = "";
  document.getElementById("enemyHearts").innerHTML = "";
  console.log(`My Health: ${myHealth}`);
  console.log(`Enemy Health: ${enemyHealth}`);
  restartGame();
}
function updateHealth() {
  document.getElementById(
    "enemyHearts"
  ).innerHTML = `Enemy Health: ${enemyHealth}`;
  document.getElementById("myHearts").innerHTML = `My Health: ${myHealth}`;
}
//#endregion
//#endregion

function hideBtns(x, y, z, v) {
  x = document.getElementById("attackBtn");
  y = document.getElementById("dodgeBtn");
  z = document.getElementById("blockBtn");
  v = document.getElementById("startBtn");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "block";
    v.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    v.style.display = "block";
  }
}

hideBtns();

function restartGame() {
  hideBtns();
}
