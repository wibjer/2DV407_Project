require.config({
    //enforceDefine: true,
	baseUrl: "scripts/",
	paths: {
			'jquery': 'vendor/jquery',
			'underscore': 'vendor/underscore',
			'backbone': 'vendor/backbone',
			'backbone.localStorage': 'vendor/backbone.localStorage',
			'router': 'vendor/router',
			'text': 'vendor/text',
			'bootstrap': 'vendor/bootstrap.min',
			'backbone-validation': 'vendor/backbone-validation-amd',
			'json': 'vendor/json'
	},
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery' ],
            exports: 'backbone'
        },
        'underscore': {
            exports: "_"
        },
        'localStorage': {
            deps: ['backbone'],
            exports: 'store'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require(['backbone','routers/router'], function(Backbone, Router) {
    new Router();
    Backbone.history.start();
});
