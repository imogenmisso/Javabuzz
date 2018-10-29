describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  })

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    })
    it('divisible by 5', function() {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    })

    it('divisble by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    })
  })
});
