# Backbone.js `instanceof` bug with cross-module backbone.js includes

Refer to issue [#1288](https://github.com/documentcloud/backbone/issues/1288) on the backbone issue tracker for more information.

To run:

```
git clone git://github.com/balupton/backbone-instanceof-bug.git backbone-instanceof-bug
cd backbone-instanceof-bug
make setup
make test
```

And read the results you are given. The results I got (which showcase the problem) are:

```
$ make test
node app.js
Is jingleCollectionInstance an instance of:
	app backbone collection? false
	custom-collections backbone collection? true
	custom-models backbone collection? false
Notice how instanceof is only true for the backbone.js included by the creator of the collection

Is jingleModelInstance an instance of:
	app backbone model? false
	custom-collections backbone model? false
	custom-models backbone model? true
Notice how instanceof is only true for the backbone.js included by the creator of the model

The results of adding the model to the collection are:
 { collection:
   { length: 1,
     models: [ [Circular] ],
     _byId: {},
     _byCid: { c0: [Circular] } },
  attributes:
   { attributes: {},
     _escapedAttributes: {},
     cid: 'c0',
     changed: {},
     _silent: {},
     _pending: {},
     _previousAttributes: {},
     jingle: [Function],
     constructor: { [Function] extend: [Function], __super__: [Object] },
     on: [Function],
     off: [Function],
     trigger: [Function],
     bind: [Function],
     unbind: [Function],
     idAttribute: 'id',
     initialize: [Function],
     toJSON: [Function],
     get: [Function],
     escape: [Function],
     has: [Function],
     set: [Function],
     unset: [Function],
     clear: [Function],
     fetch: [Function],
     save: [Function],
     destroy: [Function],
     url: [Function],
     parse: [Function],
     clone: [Function],
     isNew: [Function],
     change: [Function],
     hasChanged: [Function],
     changedAttributes: [Function],
     previous: [Function],
     previousAttributes: [Function],
     isValid: [Function],
     _validate: [Function] },
  _escapedAttributes: {},
  cid: 'c0',
  changed: {},
  _silent: {},
  _pending: {},
  _previousAttributes:
   { attributes: {},
     _escapedAttributes: {},
     cid: 'c0',
     changed: {},
     _silent: {},
     _pending: {},
     _previousAttributes: {},
     jingle: [Function],
     constructor: { [Function] extend: [Function], __super__: [Object] },
     on: [Function],
     off: [Function],
     trigger: [Function],
     bind: [Function],
     unbind: [Function],
     idAttribute: 'id',
     initialize: [Function],
     toJSON: [Function],
     get: [Function],
     escape: [Function],
     has: [Function],
     set: [Function],
     unset: [Function],
     clear: [Function],
     fetch: [Function],
     save: [Function],
     destroy: [Function],
     url: [Function],
     parse: [Function],
     clone: [Function],
     isNew: [Function],
     change: [Function],
     hasChanged: [Function],
     changedAttributes: [Function],
     previous: [Function],
     previousAttributes: [Function],
     isValid: [Function],
     _validate: [Function] },
  _callbacks: { all: { tail: {}, next: [Object] } } }

Did you notice how the model is inserted into the attributes?
	this is because Backbone.js essentially does new Backbone.Model(ourModel)
	causing our model to be inserted into a new model
	all because different modules will load in their own copies of backbone.js
	which causes cross-module instanceof to fail
For more information visit:
	https://github.com/documentcloud/backbone/issues/1288
```