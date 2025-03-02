const Character  = require("./Character");

const warrior  = new Character("Thor", "Hammer");

warrior.attack();


const spiderMan= warrior.clone();
spiderMan.name = "Spider Man";
spiderMan.weapon = "Web";
spiderMan.attack();