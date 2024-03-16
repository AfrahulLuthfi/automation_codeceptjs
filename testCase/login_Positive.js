Feature("User-Login_Positive")

Scenario("User-Login_dengan_valid_username_dan_valid_password", async ({I}) =>{
for(let i=0; i<=9; i++) {
I.amOnPage("")
I.login()
I.click("#react-burger-menu-btn")
I.waitForElement("#logout_sidebar_link", 60)
I.see("Logout")
I.click("#logout_sidebar_link")
}
})