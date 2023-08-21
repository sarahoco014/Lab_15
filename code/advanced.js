/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */


// unitedKingdom.england.touristAttractions = ["Big Ben", "Westminster"];
england = unitedKingdom[1].touristAttractions = ["Big Ben", "Westminster"];
console.log(england);
console.log(unitedKingdom);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = unitedKingdom[2].capital = "Cardiff";
console.log(wales);
console.log(unitedKingdom);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom[3]);
console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

const scotlandPopulation = unitedKingdom.find(function(country) {
  return country.name === "Scotland";
}).population;

for(i = 0; i < unitedKingdom.length; i++) {
  if(unitedKingdom[i].name !== "Scotland") {
    if(unitedKingdom[i].population > scotlandPopulation)
    console.log("The population of Scotland is the smallest!");
    break;
  } else if(unitedKingdom[i].population < scotlandPopulation) {
    console.log("The population of Scotland is the biggest!");
    break;
  } else {
    console.log("The population of Scotland is somewhere inbetween!");
  }
  break;
}
