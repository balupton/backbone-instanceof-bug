// Requires
var Backbone = require('backbone');

// Create a Custom Collection
var JingleCollection = Backbone.Collection.extend({
	jingle: function(){
		console.log('I love to jingle');
	}
});

// Export
module.exports = {JingleCollection:JingleCollection,Backbone:Backbone};