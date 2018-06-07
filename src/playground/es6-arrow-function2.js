const add = (a, b) => {
  return a + b;
}
console.log(add(55,1))

const user = {
    'name':'Andrew',
    'cities':['Philadelphia', 'New York', 'Dublin'],
    'printPlacesLived'() {
      return this.cities.map((city) => this.name + ' has lived in city ' + city);
    }
}
console.log(user.printPlacesLived());

const multiplier = {
  'numbers':[1,2,3,4,5,6,7,8,9],
  'multiplyBy':6,
  'multiply'() {
    return this.numbers.map((num) => this.multiplyBy * num);
  }
};

console.log(multiplier.multiply());
