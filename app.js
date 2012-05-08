// Requires
var Backbone = require('backbone-ducktyped');
var customCollections = require('custom-collections');
var customModels = require('custom-models');

// Create some instances
var jingleCollectionInstance = new customCollections.JingleCollection();
var jingleModelInstance = new customModels.JingleModel();

// Add our model to our collection to see what happens
jingleCollectionInstance.add(jingleModelInstance);
console.log(
	'The results of adding the model to the collection are:\n',
	jingleCollectionInstance.at(0),'\n'
);

console.log(
	'Did you notice how duck typing fixes the new Backbone.Model(ourModel) issue on adding?\n'+
	'For more information visit:\n'+
	'	https://github.com/documentcloud/backbone/issues/1288'
);