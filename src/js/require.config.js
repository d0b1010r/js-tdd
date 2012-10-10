window.requireconfig = {
	waitSeconds: 90,
	paths: {
		'backbone': 'lib/backbone',
		'jquery': 'lib/jquery',
		'underscore': 'lib/underscore'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
};