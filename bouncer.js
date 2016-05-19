function bouncer(arr) {

	return arr.filter(Boolean);
	
}

bouncer([7, "ate", "", false, 9]);// should return [7, "ate", 9].
//bouncer(["a", "b", "c"]);// should return ["a", "b", "c"].
//bouncer([false, null, 0, NaN, undefined, ""]);// should return [].
//bouncer([1, null, NaN, 2, undefined]);// should return [1, 2].