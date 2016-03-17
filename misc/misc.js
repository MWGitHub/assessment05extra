Array.prototype.radixSort = function () {
	var key, i, j, stack;
	// Place everything in one bucket at start
	var bucket = [[].concat(this)];

	var sorted = false;
	var digits = 1;
	while (!sorted) {
		var nextBucket = [];
		sorted = true;
		var nextDigits = digits * 10;
		for (i = 0; i < bucket.length; i++) {
			stack = bucket[i];
			if (!stack || stack.length === 0) continue;

			for (j = 0; j < stack.length; j++) {
				var el = stack[j];
				if (el >= nextDigits) {
					sorted = false;
				}
				var digit = Math.floor(el / digits) % 10;
				nextBucket[digit] = nextBucket[digit] || [];
				nextBucket[digit].push(el);
			}
		}
		bucket = [].concat(nextBucket);
		digits *= 10;
	}
	// Final sort, push to array in order
	var result = [];
	for (i = 0; i < bucket.length; i++) {
		stack = bucket[i];
		if (!stack || stack.length === 0) continue;
		for (j = 0; j < stack.length; j++) {
			result.push(stack[j]);
		}
	}
	return result;
};
