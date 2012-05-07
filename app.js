// Requires
var Backbone = require('backbone');
var customCollections = require('custom-collections');
var customModels = require('custom-models');

// Create some instances
var jingleCollectionInstance = new customCollections.JingleCollection();
var jingleModelInstance = new customModels.JingleModel();

// collection instanceof results
console.log(
	'Is jingleCollectionInstance an instance of:\n'+
	'	app backbone collection? '+(jingleCollectionInstance instanceof Backbone.Collection)+'\n'+
	'	custom-collections backbone collection? '+(jingleCollectionInstance instanceof customCollections.Backbone.Collection)+'\n'+
	'	custom-models backbone collection? '+(jingleCollectionInstance instanceof customModels.Backbone.Collection)+'\n'+
	'Notice how instanceof is only true for the backbone.js included by the creator of the collection\n'
);

// model instanceof results
console.log(
	'Is jingleModelInstance an instance of:\n'+
	'	app backbone model? '+(jingleModelInstance instanceof Backbone.Model)+'\n'+
	'	custom-collections backbone model? '+(jingleModelInstance instanceof customCollections.Backbone.Model)+'\n'+
	'	custom-models backbone model? '+(jingleModelInstance instanceof customModels.Backbone.Model)+'\n'+
	'Notice how instanceof is only true for the backbone.js included by the creator of the model\n'
);

// Add our model to our collection to see what happens
jingleCollectionInstance.add(jingleModelInstance);
console.log(
	'The results of adding the model to the collection are:\n',
	jingleCollectionInstance.at(0),'\n'
);

console.log(
	'Did you notice how the model is inserted into the attributes?\n'+
	'	this is because Backbone.js essentially does new Backbone.Model(ourModel)\n'+
	'	causing our model to be inserted into a new model\n'+
	'	all because different modules will load in their own copies of backbone.js\n'+
	'	which causes cross-module instanceof to fail\n'+
	'For more information visit:\n'+
	'	https://github.com/documentcloud/backbone/issues/1288'
);