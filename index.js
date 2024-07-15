Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

// Usage
const arr = [1, 2, 3];
const mappedArr = arr.myMap((x) => x * 2);
console.log(mappedArr); // Output: [2, 4, 6]

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Usage
const filteredArr = arr.myFilter((x) => x > 1);
console.log(filteredArr); // Output: [2, 3]

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

// Usage
const sum = arr.myReduce((acc, x) => acc + x, 0);
console.log(sum); // Output: 6

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && !callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// Usage
const allGreaterThanZero = arr.myEvery((x) => x > 0);
console.log(allGreaterThanZero); // Output: true

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

// Usage
const foundElement = arr.myFind((x) => x === 2);
console.log(foundElement); // Output: 2

Array.prototype.myIncludes = function (element) {
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && this[i] === element) {
      return true;
    }
  }
  return false;
};

// Usage
const includesTwo = arr.myIncludes(2);
console.log(includesTwo); // Output: true
