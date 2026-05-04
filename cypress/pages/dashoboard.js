class DashboardPage {

    selectorsList() {

        const selectors = {

            dashboadGrid: '.orangehrm-dashboard-grid',

        }

        return selectors

    }

    checkDashboardPage() {

        cy.location('pathname').should('equals', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboadGrid).should('be.visible')
    }

}

export default DashboardPage