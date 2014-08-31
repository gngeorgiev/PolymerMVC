(function (mvc, helpers) {
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

			helpers.setMetaData('Controllers', this.element.name, {
				controller: this,
				id: this.element.name
			});

			this._registered = true;
		},
		attachView: function () {
			var viewMeta = helpers.getMetaData('ControllersQueue', this.element.name);
			if (viewMeta && viewMeta.views) {
				delete viewMeta.metaData[this.element.name];
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
}(window.polymerMvc, window.polymerMvc.helpers));
