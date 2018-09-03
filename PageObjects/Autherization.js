var Autherization = {

 userNameObj: 'input[placeholder="User"]',
 passwordObj: 'input[placeholder="Password"]',
 loginButtonObj: 'button[type="submit"]',

 enterUsername: function (userName){

  element(by.css(this.userNameObj)).sendKeys(userName)
},

 enterPassword: function (password) {

  element(by.css(this.passwordObj)).sendKeys(password)

},

 clickLoginButton: function () {

  element(by.css(this.loginButtonObj)).click()
  browser.sleep(4000)
}

}

module.exports = Autherization
