class MyinfoPage {

    selectorsList() {

        const selectors = {

            MiddleName: "[name='middleName']",
            genericField: '.oxd-input--active',
            datefield: '[placeholder="yyyy-dd-mm"]',
            genericComboBox: '.oxd-input--active',         
            SaveButtom: '[type="submit"]',
            NationalityBox: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
            NationalitySelect: '.oxd-select-dropdown > :nth-child(6)',
            MartialStatusBox: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
            MartialStatusSelect: '.oxd-select-dropdown > :nth-child(3)',
            SaveSuccessfullBox: '.oxd-toast'
        }

        return selectors

    }

   acessMyinfo() {

    cy.get(this.selectorsList.MyinfoButtom).click()
    
    }

    fillPersonalDetails(middleName) {

        cy.get(this.selectorsList().MiddleName).clear().type(middleName)
        

    }

    fillEmployeeDetails(EmployeeID, OtherID, DriverLicenceNumber, LicenceExpireDate) {

    cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployeeID)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherID)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(DriverLicenceNumber)
    cy.get(this.selectorsList().datefield).eq(0).clear().type(LicenceExpireDate).click()

    }

    fillPersonalStatus(Datebirth) {

    cy.get(this.selectorsList().NationalityBox).click()
    cy.get(this.selectorsList().NationalitySelect).click()
    cy.get(this.selectorsList().MartialStatusBox).click()
    cy.get(this.selectorsList().MartialStatusSelect).click()
    cy.get(this.selectorsList().datefield).eq(1).clear().type(Datebirth).click()

    }

    SaveForm() {

    cy.get(this.selectorsList().SaveButtom).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(this.selectorsList().SaveSuccessfullBox).click()

    }


}

export default MyinfoPage