class MenuPage {

    selectorsList() {

        const selectors = {

            MyinfoButtom: '[href="/web/index.php/pim/viewMyDetails"]',

        }

        return selectors

    }

   acessMyinfo() {

    cy.get(this.selectorsList().MyinfoButtom).click()
    
    }

}

export default MenuPage