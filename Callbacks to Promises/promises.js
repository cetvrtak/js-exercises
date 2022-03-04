function foo(x,y) {
	return new Promise(function(resolve,reject) {
		setTimeout(function() {
			resolve(ajax("http://some.url.1/?x=" + x + "&y=" + y));
		}, 1000);
	});
}

function ajax(url) {
	return url + "&z=42";
}

foo(11,31)
.then(function(msg) {
	console.log(msg);
});