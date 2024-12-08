// Write your solution here!
const cats = ["Milo", "Otis","Garfield"];

const destructivelyAppendCat =() => {
    cats.push("Ralph")
}

const destructivelyPrependCat = () => {
    cats.unshift("Bob")
};

const destructivelyRemoveLastCat = () => {
    cats.pop();
}

const destructivelyRemoveFirstCat = () => {
    cats.shift();
};

const appendCat = (name) => {
  return [...cats, "Broom"];
}
 const prependCat = (name) => {
    return ["Arnold", ...cats];
 }
const removeLastCat = () => {
    return cats.slice(0,2);
}

const removeFirstCat = () => {
    return cats.slice(-2);
}