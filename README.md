#!WORK IN PROGRESS!

##Usage

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

###Coming up soon

##Contributing

Feel free to submit any issues or pull requests as there are no layed out standarts yet.
