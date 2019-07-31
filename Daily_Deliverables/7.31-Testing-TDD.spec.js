var sum = function(a, b) {
    return a + b; // TODO: comment this to make the test fail
  };
  
  describe('sum()', function () {
      it('should add two numbers together', function () {
          expect(sum(1, 2)).toBe(3);
      });
  });