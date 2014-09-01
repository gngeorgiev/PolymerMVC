(function (w) {

	var thisFile = 'karma-html.js';

	function htmlIt(name, src, fn) {
		var iFrame = document.createElement('iframe');
		document.body.appendChild(iFrame);
		var baseSrc = getBasePath();

		iFrame.src = baseSrc + src;
		iFrame.loaded = false;
		iFrame.onload = function () {
			iFrame.loaded = true;
		}

		it(name, function () {
			waitsFor(function () {
				return iFrame.loaded;
			});

			runs(function () {
				iFrame.contentWindow.test(window.expect, window);
				iFrame.parentNode.removeChild(iFrame);
			});

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
