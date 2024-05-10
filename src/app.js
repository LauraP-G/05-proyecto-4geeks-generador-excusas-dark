/* eslint-disable */
/*Comando para ejcutar npm run start*/
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randoWhat = what[Math.floor(Math.random() * what.length)];
  let randoWhen = when[Math.floor(Math.random() * when.length)];

  let excuseRandom = `${randomWho} ${randomAction} ${randoWhat} ${randoWhen}`;

  document.getElementById("excuse").innerHTML = excuseRandom;
  //write your code here
  console.log("Hello Rigo from the console!");
};
