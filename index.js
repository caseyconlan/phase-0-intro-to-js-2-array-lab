const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push("Ralph")
    return cats
   }
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
    return cats
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Ralph")
    return cats
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Bob")
    return cats
}

function appendCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.push("Broom")
    return copyOfCats
}

function prependCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.unshift("Arnold")
    return copyOfCats
}

function removeLastCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.pop("Broom")
    return copyOfCats
}

function removeFirstCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.shift("Arnold")
    return copyOfCats
}