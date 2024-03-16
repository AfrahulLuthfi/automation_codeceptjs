// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login() {
      this.fillField("#user-name", "standard_user")
      this.fillField("#password", "secret_sauce")
      this.click("#login-button")
      
    },
    logout(){
      this.click("#react-burger-menu-btn")
      this.waitForElement("#logout_sidebar_link")
      this.see("Logout")
      this.click("#logout_sidebar_link")
    },
   
  });
}
