(function () {
  var Assessment = window.Assessment = window.Assessment || {};

  Array.prototype.myEach = function (callback) {
    for (var i = 0; i < this.length; ++i) {
      callback(this[i]);
    }
  };

  Array.prototype.mySelect = function (callback) {
    var selected = [];
    this.myEach(function (el) {
      if (callback(el)) selected.push(el);
    });
    return selected;
  };

	Array.prototype.myMap = function(callback) {
		var result = [];
		this.myEach(function(el) {
			result.push(callback(el));
		});
		return result;
	};

	Array.prototype.myCount = function() {
    var count = 0;
    this.myEach(function(el) {
      count++;
    });
    return count;
  };

	Array.prototype.myInclude = function(v) {
    var found = false;
    this.myEach(function(el) {
      if (el === v) found = true;
    });
    return found;
  };

  Array.prototype.myAny = function (callback) {
    var found = false;
    this.myEach(function (el) {
      if (callback(el)) found = true;
    });
    return found;
  };

	Array.prototype.bubbleSort = function () {
    var sorted = false;
    while(!sorted) {
      sorted = true;
      for (var i = 0; i < this.length - 1; ++i) {
        if (this[i + 1] < this[i]) {
          sorted = false;
          var temp = this[i];
          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }
    }
    return this;
  };

  Array.prototype.myUniq = function() {
    var uniqueArray = [];
    var count = {};
    for (var i = 0; i < this.length; ++i) {
      count[this[i]] = count[this[i]] || 0;
      count[this[i]]++;
      if (count[this[i]] === 1) uniqueArray.push(this[i]);
    }
    return uniqueArray;
  };

  Array.prototype.twoSum = function() {
    var result = [];
    for (var i = 0; i < this.length - 1; ++i) {
      for (var j = i + 1; j < this.length; ++j) {
        if (this[i] + this[j] === 0) {
          result.push([i, j]);
        }
      }
    }
    return result;
  };

	Array.prototype.recursiveSum = function () {
    if (this.length === 0) return 0;
    return this.pop() + this.recursiveSum();
  };

	Array.prototype.bsearch = function (val) {
    if (this.length === 0) return null;
    if (this.length === 1) {
      if(this[0] !== val) {
        return null;
      } else {
        return 0;
      }
    }

    var midIdx = Math.floor(this.length / 2);
    if (this[midIdx] === val) return midIdx;
    if (this[midIdx] > val) {
      return this.slice(0, midIdx).bsearch(val);
    } else {
      result = this.slice(midIdx, this.length).bsearch(val);
      if (result === null) return null;
      return midIdx + result;
    }
  };

	Array.prototype.subsets = function () {
    if (this.length === 0) return [[]];

    var front = this.slice(0, this.length - 1);
    var back = [this[this.length - 1]];

    var frontResult = front.subsets();
    var concats = [];
    for (var i = 0; i < frontResult.length; i++) {
      concats.push(frontResult[i].concat(back));
    }
    return frontResult.concat(concats);
  };

	Array.prototype.mergeSort = function () {
    function merge(left, right) {

      var result = [];
      while (left.length !== 0 && right.length !== 0) {
        if (left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }

      return result.concat(left).concat(right);
    }

    if (this.length <= 1) return this;
    var midIdx = Math.floor(this.length / 2);
    var left = this.slice(0, midIdx).mergeSort();
    var right = this.slice(midIdx, this.length).mergeSort();

    return merge(left, right);
  };

  Assessment.myTranspose = function (array) {
    var result = [];

    var i;
    for (i = 0; i < array.length; ++i) {
      result.push([]);
    }

    for (i = 0; i < array.length; ++i) {
      for (var j = 0; j < array[i].length; ++j) {
        result[j][i] = array[i][j];
      }
    }
    return result;
  };

	Assessment.range = function (start, end) {
    if (start > end) return [];
    if (start === end) return [start];

    var priorRange = Assessment.range(start, end - 1);
    priorRange.push(end);
    return priorRange;
  };

	Assessment.exp = function (b, n) {
    if (n === 0) return 1;
    if (n === 1) return b;
    return b * Assessment.exp(b, n - 1);
  };

  Assessment.fib = function (n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    var prev_fibs = Assessment.fib(n-1);
    prev_fibs.push(prev_fibs[prev_fibs.length - 1] +
      prev_fibs[prev_fibs.length - 2]);
    return prev_fibs;
  };

  Assessment.makeChange = function (target, coins) {
		if (target === 0) {
	    return [];
	  }

	  var bestChange = null;

	  function reverseSorter(a, b) {
	    if (a < b) {
	      return 1;
	    } else if (a > b) {
	      return -1;
	    } else {
	      return 0;
	    }
	  }

	  coins.sort(reverseSorter).forEach(function(coin, index) {
	    if (coin > target) {
	      return;
	    }

	    var remainder = target - coin;
	    // remember the optimization where we don't try to use high coins
	    // if we're already using a low one?
	    var restChange = Assessment.makeChange(remainder, coins.slice(index));

	    var change = [coin].concat(restChange);
	    if (!bestChange || (change.length < bestChange.length)) {
	      bestChange = change;
	    }
	  });

	  return bestChange;
  };

	String.prototype.substrings = function () {
    var result = [];
    for (var i = 0; i < this.length; ++i) {
      for (var j = i; j < this.length; ++j) {
        result.push(this.substring(i, j + 1));
      }
    }
    return result;
  };

	Function.prototype.curry = function (length) {
		var fn = this;
		var bank = [];

		var innerFunc = function (arg) {
			if (bank.length === length) return fn.apply(fn, arg);
			bank.push(arg);
			if (bank.length === length) return fn.apply(fn, bank);
			return innerFunc;
		};

		return innerFunc;
	};

  Array.prototype.quickSort = function (callback) {
    if (this.length <= 1) return this;
    defaultCallback = callback || function (el, pivotEl) {
      if (el < pivotEl) {
        return -1;
      } else if (el > pivotEl) {
        return 1;
      } else {
        return 0;
      }
    };

    var indexEl = this[0];
    var left = [];
    var right = [];
    for (var i = 1; i < this.length; ++i) {
      var el = this[i];
      result = defaultCallback(el, indexEl);
      if (result >= 1) {
        right.push(el);
      } else {
        left.push(el);
      }
    }

    return left.quickSort(defaultCallback).concat(
      indexEl,
      right.quickSort(defaultCallback)
    );
  };

	// write String.prototype.mySlice. It should take a start index and an
  // (optional) end index.
  String.prototype.mySlice = function(start, end) {
    var slice = "";

    if (end === undefined) {
      end = this.length;
    }

    for (var i = start; i < end && i < this.length; i++) {
      slice += this[i];
    }
    return slice;
  };

  // write Array.prototype.myReduce (analogous to Ruby's Array#inject).
  Array.prototype.myReduce = function(callback) {
    var accum = this[0];

    this.slice(1).forEach(function(el) {
      accum = callback(accum, el);
    });

    return accum;
  };

  // write myFind(array, callback). It should return the first element for which
  // callback returns true, or undefined if none is found.
  Assessment.myFind = function (array, callback) {
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return array[i];
      }
    }
  };

  // write sumNPrimes(n)
  Assessment.sumNPrimes = function (n) {
    var i = 1;
    var count = 0;
    var sum = 0;

    while (count < n) {
      if (Assessment.isPrime(i)) {
        count += 1;
        sum += i;
      }
      i += 1;
    }

    return sum;
  };

  Assessment.isPrime = function (num) {
    if (num <= 1) { return false; }

    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  // write Function.prototype.myBind.
  Function.prototype.myBind = function(context) {
    var fn = this;
    var bindArgs = [].slice.call(arguments, 1);

    return function() {
      var callArgs = [].slice.call(arguments);
      return fn.apply(context, bindArgs.concat(callArgs));
    };
  };

  // write Function.prototype.inherits.
  Function.prototype.inherits = function(Parent) {
    function Surrogate() {}
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
  };
})();
