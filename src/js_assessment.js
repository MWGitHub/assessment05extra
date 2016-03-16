(function () {
  window.Assessment = window.Assessment || {};
  Array.prototype.myEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
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
})();
