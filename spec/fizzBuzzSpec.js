describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  })

  describe('it says', function() {

    it('Fizz when number divisible by 3', function() {
      expect(fizzBuzz.says(3)).toEqual('Fizz')
    })

    it('Buzz when number divisible by 5', function() {
      expect(fizzBuzz.says(5)).toEqual('Buzz')
    })

    it('FizzBuzz when number divisible by 15', function() {
      expect(fizzBuzz.says(15)).toEqual('FizzBuzz')
    })

    it('the number otherwise', function() {
      expect(fizzBuzz.says(67)).toEqual(67)
    })
  })
});
