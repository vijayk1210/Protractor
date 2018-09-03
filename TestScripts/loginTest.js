var Autherization = require('../PageObjects/Autherization')

describe("Verify login", function(){

  browser.ignoreSynchronization=true;

	beforeEach(function() {

	//browser.get(browser.params.env.hostname);
	browser.get('');

	});


	it("very login", function(){

	Autherization.enterUsername("admin");
	Autherization.enterPassword("admin");
	Autherization.clickLoginButton();

	});


});
