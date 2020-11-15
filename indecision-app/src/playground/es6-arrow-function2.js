const add = (a, b) => {
    return a + b;
}

console.log(add(55, 1))

const user = {
    name: 'Frederik',
    city: ['Kerteminde', 'Nærum', 'Aarhus'],
    printPlacesLived() {
        return this.city.map((city) => this.name + ' has lived in ' + city)
    }
};
console.log(user.printPlacesLived());

// CHallenge

const multiplier = {
    numbers: [5, 1, 7],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());