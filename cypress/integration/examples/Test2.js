// <reference types= "Cypress" / > 
describe('My Second Test', function ()  {
    it('My secondTest case', () => {
     
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca');
cy.wait(2000);


cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').each(($el, index, $list) =>{
    
const textVeg= $el.find('h4.product-name').text();
if(textVeg.includes('Cashews'))
{
$el.find('button').click();
}
})

cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click();
cy.contains('Place Order').click()
 


//const logo=cy.get('.brand');
//cy.get('.brand').text();

//cy.log(logo.text());


    });

 
  });