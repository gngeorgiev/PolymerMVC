(function (w) {

	var thisFile = 'karma-html.js';

	function htmlIt(name, src, fn) {
		var iFrame = document.createElement('iframe');
		document.body.appendChild(iFrame);
		var baseSrc = getBasePath();
		// it(name, function () {
		// 	runs(iFrame.onload);
		// });
		//
		// iFrame.onload = function () {
		// 	fn();
		// }

		iFrame.contentWindow.expect = window.expect;
		iFrame.src = baseSrc + src;
	}

	function getBasePath() {
		var scripts = document.getElementsByTagName('script');
		for (var i in scripts) {
			var sc = scripts[i];
			if (sc.src.indexOf(thisFile) !== -1) {
				var src = sc.src.replace(thisFile, '');
				src += 'html/';
				return src;
			}
		}
	}

	window.__karma__.loaded = function () {
		var that = this;
		document.addEventListener('polymer-ready', function () {
			that.start();
		})
	}

	w.htmlIt = htmlIt;

}(window));
