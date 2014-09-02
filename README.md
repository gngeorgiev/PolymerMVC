#!WORK IN PROGRESS!

##Development

Create a folder called PolymerMVC

```bash
$ mkdir PolymerMVC
$ cd PolymerMVC
```

Clone the repo:

```bash
$ git clone https://github.com/gngeorgiev/PolymerMVC
$ cd PolymerMVC
```

Install the dependencies:

```bash
$ bower install
$ npm install
```

This will install all the bower dependencies in the root PolymerMVC folder.

Navigate back to the root:

```bash
$ cd ..
```

As per this guide: http://www.polymer-project.org/docs/polymer/runtime-config.html#debug-flags go to
`/polymer/` and open `polymer.html`. Comment line `12` and uncomment line `13`. This way
the demo page will use the debug version of polymer.

Start your web server in the same root folder where the dependencies are installed:

```bash
$ python -m http.server 8001
```

In your browser open `http://localhost:8001/PolymerMVC/demo` to see the demo page.

##Testing

Make sure you have `grunt` and `grunt-cli` and while in the project folder, where the `gruntfile.js` file is located
run:

```bash
$ grunt test
```

All tests are added in the `test/js` folder and must end with `.spec.js`. The jasmine configuration can
be found in the `conf` folder. Every html test must have a function named `test` attached to its `window` object
as it will be called from jasmine:

```javascript
<script>
	function test(expect) {
		expect(true).toBeTruthy();
	}
</script>
```

Optionally this method can accept a `done` parameter which can be used to test async code. In this case the function must return `false`;

```javascript
<script>
	function test(expect, done) {
		setTimeout(function () {
			expect(true).toBeTruthy();
			done();
		}, 100);
		
		return false;
	}
</script>
```

##Contributing

Feel free to submit any issues or pull requests as there are no layed out standarts yet.
