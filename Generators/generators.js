var a = 1;
var b = 2;

function *foo() {
	a++;
	yield;
	b = b * a;
	a = (yield b) + 3;
}

function *bar() {
	b--;
	yield;
	a = (yield 8) + b;
	b = a * (yield 2);
}

function step(gen) {
	var it = gen();
	var last;

	return function() {
		console.log("last bef:", last);
		last = it.next(last).value;
		console.log("last aft:", last);
	};
}

var s1 = step(foo);
var s2 = step(bar);

s2();
s2();
s1();
s2();
s1();
s1();
s2();

console.log("a:", a, "b:", b);