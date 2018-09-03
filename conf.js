exports.config = {
	directConnect: true,
	capabilities:{
		'browserName': 'chrome'
		'version': '',
    'platform': 'ANY'
  },

onPrepare: function () {
	        'use strict';
	        // The require statement must be down here, since jasmine-reporters
	        // needs jasmine to be in the global and protractor does not guarantee
	        // this until inside the onPrepare function. See previous comment.
	        require('jasmine-reporters');
	        var HTMLReporter = require('protractor-html-screenshot-reporter');
	        jasmine.getEnv().addReporter(
	            new HTMLReporter({
	                baseDirectory: 'test-results/e2e-screenshots'
	            })
	        );
	        return;
	    },

"scripts": {
  "pree2e": "webdriver-manager update --standalone false --gecko false",
  "e2e": "protractor"
},

	specs: ['./TestScripts/*.js'],

  baseUrl: 'http://localhost:6516'

};
