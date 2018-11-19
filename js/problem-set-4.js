/*
 * Hello. 2 points.
 */

function hello() {
  var div = document.getElementById("output1");
  div.innerHTML = "Hello, AP Computer Science Principles!";
  // WRITE YOUR EXERCISE 1 CODE HERE

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  // WRITE YOUR EXERCISE 2 CODE HERE
  name = prompt("Please enter your name");
  var div = document.getElementById("output2");
  div.innerHTML = "Hello, " + name + "!";
  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
  var cf = ((cels * (9/5)) + 32).toFixed(2);
  var div = document.getElementById("output3");
  div.innerHTML = (cels + " degrees Celsius equals " + cf + " degrees Fahrenheit.");
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
  var fc = ((fahr - 32) * (5/9)).toFixed(2);
  var div = document.getElementById("output4");
  div.innerHTML = (fahr + " degrees Fahrenheit equals " + fc + " degrees Celsius.");
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  let mile=Math.floor(inches/63360);
  let yard=Math.floor((inches - (mile*63360))/36);
  let foot=Math.floor((inches - (mile*63360) - (yard*36))/12);
  inches=Math.floor((inches - (mile*63360) - (yard*36) - (foot*12))/1);
  document.getElementById("output5").innerHTML=("Miles: " + mile + "<br/>Yards: " + yard + "<br/>Feet: " + foot + "<br/>Inches: " + inches);
  ////////////////////////// DO NOT MODIFY
  check("inches", input);
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
  let kilometer=Math.floor(centimeters/100000);
  let meter=Math.floor((centimeters - (kilometer*100000))/100);
  centimeters=Math.floor((centimeters - (kilometer*100000) - (meter*100))/1);
  document.getElementById("output6").innerHTML=("Kilometers: " + kilometer + "<br/>Meters: " + meter + "<br/>Centimeters: " + centimeters);
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  let gallon=Math.floor(fluidOunces/128);
  let quart=Math.floor((fluidOunces - (gallon*128))/32);
  let pint=Math.floor((fluidOunces - (gallon*128) - (quart*32))/16);
  let cup=Math.floor((fluidOunces - (gallon*128) - (quart*32) - (pint*16))/8);
  fluidOunces=Math.floor((fluidOunces - (gallon*128) - (quart*32) - (pint*16) - (cup*8))/1);
  document.getElementById("output7").innerHTML=("Gallons: " + gallon + "<br/>Quarts: " + quart + "<br/>Pints: " + pint + "<br/>Cups: " + cup +"<br/>Fluid Ounces: " + fluidOunces);
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let ton=Math.floor(ounces/32000);
  let pound=Math.floor((ounces - (ton*32000))/16);
  ounces=Math.floor((ounces - (ton*32000) - (pound*16))/1);
  document.getElementById("output8").innerHTML=("Tons: " + ton + "<br/>Pounds: " + pound + "<br/>Ounces: " + ounces);
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  let dollar=Math.floor(pennies/100);
  let quarter=Math.floor((pennies - (dollar*100))/25);
  let dime=Math.floor((pennies - (dollar*100) - (quarter*25))/10);
  let nickel=Math.floor((pennies - (dollar*100) - (quarter*25) - (dime*10))/5);
  pennies=Math.floor((pennies - (dollar*100) - (quarter*25) - (dime*10) -(nickel*5))/1);
  document.getElementById("output9").innerHTML=("Dollars: " + dollar + "<br/>Quarters: " + quarter + "<br/>Dimes: " + dime + "<br/>Nickels: " + nickel +"<br/>Pennies: " + pennies);
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE
  amount*=100
  let quarter=Math.floor((amount)/25);
  let dime=Math.floor((amount - (quarter*25))/10);
  let nickel=Math.floor((amount - (quarter*25) - (dime*10))/5);
  let pennies=Math.floor((amount - (quarter*25) - (dime*10) -(nickel*5))/1);
  let coins=(quarter+dime+nickel+pennies)
  document.getElementById("output10").innerHTML=coins+ " coins.";

  if (input <=.01 || input <= .05 || input <= .25 || input <=.1) {
    var div = document.getElementById("output10");
    div.innerHTML = coins + " coin.";
  }

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
