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

  describe("quickSort", function () {
    it("should sort an array", function () {
      expect([5, 3, 6, 8, 9, 4, 3, 1].quickSort(function (pivotEl, el) {
        if (el > pivotEl) {
          return -1;
        } else if (el < pivotEl) {
          return 1;
        } else {
          return 0;
        }
      })).toEqual([9, 8, 6, 5, 4, 3, 3, 1]);
    });

    it("should sort an array without a comparator given", function () {
      expect([5, 3, 6, 8, 9, 4, 3, 1].quickSort()).
        toEqual([1, 3, 3, 4, 5, 6, 8, 9]);
    });
  });
});
