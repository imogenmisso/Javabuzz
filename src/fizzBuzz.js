function FizzBuzz() {

}

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
}

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
}
FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
}
FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
}
