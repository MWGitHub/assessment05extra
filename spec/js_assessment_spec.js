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
      })).toEqual([2, 4]);
    });
  });

  describe("myMap", function() {
    it("should map the elements", function() {
      expect([1,2,3].myMap(function(el) {
        return el + 1;
      })).toEqual([2,3,4]);
    });
  });

  describe("myInject", function() {
    it('should reduce the array', function() {
      var func = function(acc, el) {
        return acc + el;
      };
      var sum = [1, 2, 3, 4].myInject(func);
      expect(sum).toEqual(10);
    });
  });

  describe("myCount", function() {
    it('should count the number of items in an object', function() {
      expect([1,2,3,4,5].myCount()).toEqual(5);
    });
  });

  describe("myInclude", function() {
    it('should check if value is in array', function() {
      expect([1,2,3].myInclude(2)).toEqual(true);
      expect([1,2,3].myInclude(4)).toEqual(false);
    });
  });

  describe("myAny", function() {
    it('should return true if array contains a given value', function() {
      expect([1,2,3].myAny(function(el) {
        return el % 2 === 0;
      })).toEqual(true);
      expect([1,2,3].myAny(function(el) {
        return el === 4;
      })).toEqual(false);
    });
  });

  describe("bubbleSort", function() {
    it('should sort an array', function() {
      expect([5, 6, 1, 2, 4].bubbleSort()).toEqual([1, 2, 4, 5, 6]);
    });
  });

  describe("unique", function() {
    it('should not remove from a unique array', function() {
      expect([1, 2, 3].myUniq()).toEqual([1, 2, 3]);
    });

    it('should remove duplicates', function() {
      expect([1, 2, 2, 3, 3].myUniq()).toEqual([1, 2, 3]);
    });
  });

  describe("twoSum", function() {
    it('should find pairs where sum is 0', function() {
      expect([-1, 0, 2, -2, 1].twoSum()).toEqual([[0, 4], [2, 3]]);
    });
  });

  describe('recursiveSum', function() {
    it("should sum numbers", function() {
      expect([1,2,3,4].recursiveSum()).toEqual(10);
    });
  });

  describe('bsearch', function() {
    it("should find the index of a given number", function(){
      expect([2, 4, 6, 8, 10].bsearch(6)).toEqual(2);
      expect([1, 2, 3, 4, 5, 6].bsearch(0)).toEqual(null);
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

  describe('Subsets', function() {
    it('should return subsets', function() {
      expect([1, 2, 3].subsets()).toEqual(
        [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
      );
    });
  });
});

describe("Assessment", function () {
  describe("myTranspose", function() {
    it('should tranpose an array', function() {
      expect(Assessment.myTranspose([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ])).toEqual([
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ]);
    });
  });

  describe('range', function() {
    it('should return a range of numbers', function() {
      expect(Assessment.range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('exp', function() {
    it("should calculate exponent", function() {
      expect(Assessment.exp(2, 3)).toEqual(8);
    });
  });

  describe('fibonacci', function() {
    it("should return the first n fib numbers", function() {
      expect(Assessment.fib(5)).toEqual([0, 1, 1, 2, 3]);
    });
  });

  describe('makeChange', function() {
    it('should make change', function() {
      expect(Assessment.makeChange(98, [25, 10, 5, 1])).toEqual(
        [25, 25, 25, 10, 10, 1, 1, 1]
      );
      expect(Assessment.makeChange(14, [10, 7, 1])).toEqual([7, 7]);
    });
  });
});
