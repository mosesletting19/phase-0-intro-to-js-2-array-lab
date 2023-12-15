// Write your solution here!
// Assuming you have the cats array declared globally
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  
  cats.push(name);
}



function destructivelyPrependCat(name) {
  
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  
  cats.pop();
}

function destructivelyRemoveFirstCat() {
 
  cats.shift();
}

function appendCat(name) {
  
  return cats.concat(name);
}

function prependCat(name) {
  
  return [name, ...cats.slice()];
}

function removeLastCat() {
  
  return cats.slice(0, -1);
}

function removeFirstCat() {
  
  return cats.slice(1);
}


