(function (mvc, helpers, registry) {

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
			if (host && host.addChildView && typeof host.addChildView === 'function') {
				host.addChildView(this);
			}

			if (this.controller && typeof this.controller === 'string') {
				this.enqueueForAttach();
				this.forceControllerAttach();
			}
		},
		addChildView: function (view) {
			if (!this.views) {
				this.views = [];
			}

			this.views.push(view);
		},
		enqueueForAttach: function () {
			var registeredMeta = registry.getRegisteredView(this.controller);
			if (!registeredMeta) {
				var meta = registry.registerView(this);
				meta.views.push(this);
			} else {
				registeredMeta.views.push(this);
			}
		},
		forceControllerAttach: function () {
			var ctrl = registry.getRegisteredController(this.controller);
			if (ctrl) {
				ctrl.attachView();
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
		},
		get $controller() {
			return this._$controller;
		},
		get $scope() {
			return this._$scope;
		}
	});
}(window.polymerMvc, window.polymerMvc.helpers, window.polymerMvc.registry));
