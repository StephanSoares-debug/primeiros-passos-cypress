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
    GenericField: '.oxd-input--active',
    dateField: '[placeholder="yyyy-dd-mm"]',
    SaveButton: '[type="submit"]',
    NationalityComboBox: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
    MartialStatusComboBox: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',

  }
 
  it.only('Login - Success and update Myinfo', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).clear().type(UserData.UserSucess.username)
    cy.get(selectorsList.passwordField).clear().type(UserData.UserSucess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equals', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboadGrid)
    cy.get(selectorsList.MyinfoButtom).click()
    cy.get(selectorsList.MiddleNameField).clear().type('Silva')
    cy.get(selectorsList.GenericField).eq(3).clear().type('NickNameID')
    cy.get(selectorsList.GenericField).eq(4).clear().type('EmployID12')
    cy.get(selectorsList.GenericField).eq(5).clear().type('OtherID123')
    cy.get(selectorsList.GenericField).eq(6).clear().type('DriverLicenceNumber123')
    cy.get(selectorsList.dateField).eq(0).clear().type("2026-18-04").click()
    cy.get(selectorsList.NationalityComboBox).click()
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    cy.get(selectorsList.MartialStatusComboBox).click()
    cy.get ('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.SaveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')


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