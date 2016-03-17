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

  describe('subsets', function() {
    it('should return subsets', function() {
      expect([1, 2, 3].subsets()).toEqual(
        [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
      );
    });
  });

	describe('mergeSort', function() {
		it('should sort an array', function() {
      expect([5, 6, 1, 2, 4].mergeSort()).toEqual([1, 2, 4, 5, 6]);
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

describe('String.prototype', function () {
	describe('substrings', function() {
    it("should find the substrings", function() {
      expect('cat'.substrings()).toEqual(["c", "ca", "cat", "a", "at", "t"]);
    });
  });
});

describe('Function.prototype', function () {
	describe('curry', function() {
    it("should sum numbers", function() {
			var sum = function (one, two, three) {
				return one + two + three;
			};
			expect(sum.curry(3)(4)(20)(6)).toEqual(30);
    });
  });

  describe('myCall', function() {
    var Cat;
    var sally, markov, curie;

    beforeEach(function () {
      Cat = function Cat (name) {
        this.name = name;
      };

      Cat.prototype.sayHello = function () {
        return this.name + " says hello!";
      };

      Cat.prototype.greetOne = function (otherCat) {
        return this.name + " says hello to " + otherCat.name;
      };

      Cat.prototype.greetTwo = function (otherCat1, otherCat2) {
        return this.name + " says hello to " + otherCat1.name + " and " +
          otherCat2.name;
      };

      sally = new Cat("Sally");
      markov = new Cat("Markov");
      curie = new Cat("Curie");
    });

    it("should call and execute the function on the context", function () {
      expect(sally.sayHello.myCall(sally)).toEqual("Sally says hello!");
    });

    it("should call the function on the context with an argument", function () {
      expect(curie.greetOne.myCall(curie, sally)).toEqual("Curie says hello to Sally");
    });

    it("should call the function with multiple arguments", function () {
      expect(curie.greetTwo.myCall(curie, sally, markov))
        .toEqual("Curie says hello to Sally and Markov");
    });

    it("should not call bind", function () {
      spyOn(sally.sayHello, "bind");
      sally.sayHello.myCall(sally);
      expect(sally.sayHello.bind).not.toHaveBeenCalled();
    });

    it("should not call call", function () {
      spyOn(sally.sayHello, "call");
      sally.sayHello.myCall(sally);
      expect(sally.sayHello.call).not.toHaveBeenCalled();
    });


  });
});
