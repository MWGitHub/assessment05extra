describe("Array.prototype", function () {
  describe("myEach", function () {
    it("should call the given function and provide an argument", function () {
      var count = 0;
      [1, 2, 3].myEach(function (el) {
        count += el;
      });
      expect(6).toEqual(6);
    });
  });

  describe("mySelect", function () {
    it("should select only elements that satisfy the block", function () {
      expect([1, 2, 3, 4, 5].mySelect(function (el) {
        return el % 2 === 0;
      }), [2, 4]);
    });
  });
});
