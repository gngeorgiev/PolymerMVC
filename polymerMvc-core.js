(function () {
	var polymerMvc = {
		helpers: {}
	};

	polymerMvc.helpers.getMetaData = (function (type, id) {
		var meta = document.createElement('core-meta');
		return function (type, id) {
			meta.type = type;
			return meta.byId(id);
		}
	}());

	window.polymerMvc = polymerMvc;
}());
