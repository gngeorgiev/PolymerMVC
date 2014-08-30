(function (mvc, helpers) {

	Polymer('polymer-view', {
		publish: {
			selected: {
				value: false,
				reflect: true
			},
			controller: ''
		},
		ready: function () {
			var host = this.shadowRoot.host;
			if (host && host['registerView'] && typeof host['registerView'] === 'function') {
				host.registerView(this);
			}

			if (this.controller && typeof this.controller === 'string') {
				this.enqueueForAttach();
				this.forceControllerAttach();
			}
		},
		registerView: function (view) {
			if (!this.views) {
				this.views = [];
			}

			this.views.push(view);
		},
		enqueueForAttach: function () {
			var meta = document.createElement('core-meta');
			meta.type = 'ControllersQueue';
			var registeredMeta = helpers.getMetaData('ControllersQueue', this.controller);
			if (!registeredMeta) {
				meta.views = [];
				meta.views.push(this);
				meta.register(this.controller);
			} else {
				registeredMeta.views.push(this);
			}
		},
		forceControllerAttach: function () {
			var meta = document.createElement('core-meta');
			meta.type = 'Controllers';
			var registeredMeta = helpers.getMetaData('Controllers', this.controller);
			if (registeredMeta) {
				registeredMeta.controller.attachView();
			}
		},
		attachController: function (controller) {
			this._$controller = controller;
			this._$controller._$view = this;
			this._$scope = this.$controller.$scope;
			this.childNodes.array().forEach(function (node) {
				if (!node.tagName) {
					return;
				}

				node.$controller = controller;
				node.$scope = controller.$scope;
			});

			if (this._mapFunctions) {
				this.mapScopeFunctions();
			}
		},
		get $controller() {
			return this._$controller;
		},
		get $scope() {
			return this._$scope;
		}
	});
}(window.polymerMvc, window.polymerMvc.helpers));