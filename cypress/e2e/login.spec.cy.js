describe('Orange HRM Tests', () => {

  const selectorsList  = {

    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginbutton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboadGrid: '.orangehrm-dashboard-grid',
    WrongCredentialAlert: '.oxd-alert'

  }

  const UserData = {
   
    UserSucess: {
      username: 'Admin',
      password: 'admin123'

    },

    UserFail: {
      username: 'Teste',
      password: 'Teste'

    }

  }
 
  it('Login - Success', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(UserData.UserSucess.username)
    cy.get(selectorsList.passwordField).type(UserData.UserSucess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equals', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboadGrid)

  })

  it('Login - Not Sucess', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(UserData.UserFail.username)
    cy.get(selectorsList.passwordField).type(UserData.UserFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.WrongCredentialAlert)

  }


  )
})