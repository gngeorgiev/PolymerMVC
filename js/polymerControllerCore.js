(function (mvc, helpers, registry) {
	Polymer('polymer-controller', {
		_registered: false,
		ready: function () {
			this.register();
			this.attachView();
			this.initScope(this.$scope);
		},
		initScope: function ($scope) {},
		register: function () {
			if (this._registered) {
				return;
			}

			registry.registerController(this);
		},
		attachView: function () {
			var viewMeta = registry.getRegisteredView(this.element.name);
			if (viewMeta && viewMeta.views && !viewMeta.attached) {
				viewMeta.metaData[this.element.name].attached = true;
				for (var i = 0; i < viewMeta.views.length; i++) {
					var view = viewMeta.views[i];
					view.attachController(this);
				}
			}
		},
		get $scope() {
			if (!this._$scope) {
				this._$scope = {};
			}

			return this._$scope;
		},
		get $view() {
			return this._$view;
		}
	});
}(window.polymerMvc, window.polymerMvc.helpers, window.polymerMvc.registry));
