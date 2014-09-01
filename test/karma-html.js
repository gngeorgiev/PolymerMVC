(function (w) {

	var thisFile = 'karma-html.js';

	function htmlIt(name, src, fn) {
		it(name, function (done) {
			var iFrame = document.createElement('iframe');
			document.body.appendChild(iFrame);
			var baseSrc = getBasePath();

			function doneFake() {
				iFrame.parentNode.removeChild(iFrame);
				done();
			}

			iFrame.onload = function () {
				var res = iFrame.contentWindow.test(window.expect, window, doneFake);
				if (res !== false) {
					doneFake();
				}
			}

			iFrame.src = baseSrc + src;
		})
	}

	function getBasePath() {
		var scripts = document.getElementsByTagName('script');
		for (var i in scripts) {
			var sc = scripts[i];
			if (sc.src.indexOf(thisFile) !== -1) {
				var src = '';
				if (sc.src.indexOf(thisFile + '?') === -1) {
					src = sc.src.replace(thisFile, '');
				} else {
					src = sc.src.substring(0, sc.src.length - sc.src.indexOf(thisFile) - thisFile.length + 2)
				}

				src += 'html/';
				return src;
			}
		}
	}

	w.htmlIt = htmlIt;

}(window));
