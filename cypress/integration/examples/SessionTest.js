/// <reference types="Cypress" />


describe('JWT session', function () {

    it('is loggen in through local storage', function () {

            cy.LoginAPI().then(function () {
                cy.visit("https://rahulshettyacademy.com/client", {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem('token', Cypress.env('token'));
                        cy.get("[routerlink*='cart']").click()
                    }
                })
            })

cy.get(".card-body button:last-of-type").eq(1).click();
cy.get("[routerlink*='cart']").click();
cy.contains("Checkout").click()
cy.get("[placeholder*='Country']").type("id")
cy.get(".ta-results button").each(($el,index,$list)=>
{
    if($el.text=== "India"){
        cy.wtam($el).click()
    }
})
cy.get(".action_submit").click();
cy.wait(2000)
cy.get(".order-summary button").click();


 })
})