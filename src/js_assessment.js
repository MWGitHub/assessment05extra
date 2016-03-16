(function () {
  window.Assessment = window.Assessment || {};
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

  Array.prototype.quickSort = function (callback) {
    if (this.length <= 1) return this;
    defaultCallback = callback || function (pivotEl, el) {
      if (el > pivotEl) {
        return 1;
      } else if (el < pivotEl) {
        return -1;
      } else {
        return 0;
      }
    };

    var indexEl = this[0];
    var left = [];
    var right = [];
    for (var i = 1; i < this.length; ++i) {
      var el = this[i];
      result = defaultCallback(indexEl, el);
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
})();
