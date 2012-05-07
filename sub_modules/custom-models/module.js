// Requires
var Backbone = require('backbone');

// Create a Custom Model
var JingleModel = Backbone.Model.extend({
	jingle: function(){
		console.log('I love to jingle');
	}
});

// Export
module.exports = {JingleModel:JingleModel,Backbone:Backbone};