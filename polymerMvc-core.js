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

	polymerMvc.helpers.setMetaData = function (type, id, config) {
		var meta = document.createElement('core-meta');
		for (var i in config) {
			if (config.hasOwnProperty(i)) {
				meta[i] = config[i];
			}
		}

		meta.type = type;
		meta.register(id);
		return meta;
	};

	window.polymerMvc = polymerMvc;
}());
