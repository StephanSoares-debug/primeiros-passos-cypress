class LoginPage {

        selectorsList() {

            const selectors = {

                    usernameField: "[name='username']",
                    passwordField: "[name='password']",
                    loginbutton: '.oxd-button',
                    WrongCredentialAlert: '.oxd-alert',
            }

            return selectors

        }

        acessLoginPage() {

            cy.visit('/auth/login')
        
        }

        loginWithUser(username, password) {

            cy.get(this.selectorsList().usernameField).type(username)
            cy.get(this.selectorsList().passwordField).type(password)
            cy.get(this.selectorsList().loginbutton).click()

        }



}

export default LoginPage