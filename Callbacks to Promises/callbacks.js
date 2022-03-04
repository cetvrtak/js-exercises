function foo(x,y,cb) {
	setTimeout(function() {
		ajax("http://some.url.1/?x=" + x + "&y=" + y, cb);
	}, 1000);
}

function ajax(url,cb) {
	cb(null, url + "&z=42");
}

foo(11,31, function(err,text) {
	if (err) {
		console.error(err);
	}
	else {
		console.log(text);
	}
});