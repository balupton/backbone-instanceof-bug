# Backbone.js `instanceof` bug with cross-module backbone.js includes

Refer to issue [#1288](https://github.com/documentcloud/backbone/issues/1288) on the backbone issue tracker for more information.

To run:

```
git clone git://github.com/balupton/backbone-instanceof-bug.git backbone-instanceof-bug
cd backbone-instanceof-bug
git checkout ducktyped
make setup
make test
```

And read the results you are given. The results I got (which showcases the ducktype fix) are:

```
$ make test
node app.js
The results of adding the model to the collection are:
 { attributes: {},
  _escapedAttributes: {},
  cid: 'c0',
  changed: {},
  _silent: {},
  _pending: {},
  _previousAttributes: {},
  collection:
   { length: 1,
     models: [ [Circular] ],
     _byId: {},
     _byCid: { c0: [Circular] } },
  _callbacks: { all: { tail: {}, next: [Object] } } }

Did you notice how duck typing fixes the new Backbone.Model(ourModel) issue on adding?
For more information visit:
     https://github.com/documentcloud/backbone/issues/1288
$
```