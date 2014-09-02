(function () {
	var polymerMvc = {},
		registry = {},
		helpers = {};

	polymerMvc.registry = registry;
	polymerMvc.helpers = helpers;

	helpers.getMetaData = (function (type, id) {
		var meta = document.createElement('core-meta');
		return function (type, id) {
			meta.type = type;
			return meta.byId(id);
		}
	}());

	helpers.setMetaData = function (type, id, config) {
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

	registry.registerController = function (controller) {
		var meta = helpers.setMetaData('Controllers', controller.element.name, {
			controller: controller,
			id: controller.element.name
		});

		controller._registered = true;
		return meta;
	};

	registry.getRegisteredController = function (controller) {
		return helpers.getMetaData('Controllers', controller).controller;
	};

	registry.registerView = function (view) {
		var meta = helpers.setMetaData('ControllersQueue', view.controller, {
			views: []
		});

		return meta;
	};

	registry.getRegisteredView = function (key) {
		return helpers.getMetaData('ControllersQueue', key);
	}





	window.polymerMvc = polymerMvc;
}());
