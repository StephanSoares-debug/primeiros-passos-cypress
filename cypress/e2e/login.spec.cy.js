import UserData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList  = {

    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginbutton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboadGrid: '.orangehrm-dashboard-grid',
    WrongCredentialAlert: '.oxd-alert',
    MyinfoButtom: '[href="/web/index.php/pim/viewMyDetails"]',
    FirstNameField: '[name="firstName"]',
    MiddleNameField: '[name="middleName"]',
    LastNameField: '[name="lastName"]',
    EmployeeIDField: '.oxd-input--active'

  }
 
  it.only('Login - Success and update Myinfo', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(UserData.UserSucess.username)
    cy.get(selectorsList.passwordField).type(UserData.UserSucess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equals', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboadGrid)
    cy.get(selectorsList.MyinfoButtom).click()
    cy.get(selectorsList.MiddleNameField).type('Silva')
    cy.get(selectorsList.EmployeeIDField).eq(4).type('user999')

  })

  it('Login - Not Sucess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(UserData.UserFail.username)
    cy.get(selectorsList.passwordField).type(UserData.UserFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.WrongCredentialAlert)

  }


  )
})